// ==UserScript==
// @id             bursterrange
// @name           Burster Range
// @author         darkman4u
// @category       Layer
// @version        0.2.3
// @downloadURL    https://iitc.willbe.blue/download/7785/jSDuoRYgnfyVf3ksSamV8DE0OWQ1ODc2YzRkZWUzMmY0ZWM3M2RiYzRjYTFjOTBkMjg0MWRmY2JiNjQ1ZjVmYTY0YWRhNjUwNDI1ZGQwZjNXKmDcH2Y0MiYvDZ0NS1C8xHDjI6REHRdxPh_ijtyMZz5zUIUppC0SxxEVHd6XLu_Zsf7OqWD8wqEWzm2CPYngEl_6JoSASlDAGhT9toHOgg==/bursterrange.user.js
// @updateURL      https://iitc.willbe.blue/update-header/7785/zOqjIO8XC-KwbtbP8QyxKzg1YmYwN2IzNTM0YWQ3ZmNlNWRkZDcyYzBiMDAwZGRkZDY5ZjYyMGQwMTA4YzRkNGM1NzU4Y2VhZmYyYWU0NDNM4ZgNmv4mYpANkZfTUMXXSQVoc5MnnRTdYDTvLCTcgoSD50e8Be65UySS9dE0BKZzS6pBufb989N3W8Z_ZZ-yt9jlDQ4c19RaIS2TpXRBUA==/bursterrange.user.js
// @description    Shows burster range with two circles around a selected portal. Outer circle is a radius of 208m, inner circle is 168m. Third circle with 128m can be activated in settings.
// @match          *://intel.ingress.com/*
// @match          *://intel-x.ingress.com/*
// @match          *://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==



  
 /* globals dialog */
  
 function wrapper(plugin_info) {
     // Make sure that window.plugin exists. IITC defines it as a no-op function,
     // and other plugins assume the same.
     if (typeof window.plugin !== "function") window.plugin = function () {};
 
     const KEY_SETTINGS = "bursterrange-settings";
 
     // Use own namespace for plugin
     window.plugin.Bursterrange = function () {};
 
     const thisPlugin = window.plugin.Bursterrange;
 
     // Name of the IITC build for first-party plugins
     plugin_info.buildName = "Bursterrange";
 
     // Datetime-derived version of the plugin
     plugin_info.dateTimeVersion = "20201112000000";
 
     // ID/name of the plugin
     plugin_info.pluginId = "bursterrange";
 
     const TIMERS = {};
     function createThrottledTimer(name, callback, ms) {
         if (TIMERS[name]) clearTimeout(TIMERS[name]);
 
         // throttle if there are several calls to the functions
         TIMERS[name] = setTimeout(function () {
             delete TIMERS[name];
             if (typeof window.requestIdleCallback == "undefined") callback();
             // and even now, wait for iddle
             else
                 requestIdleCallback(
                     function () {
                         callback();
                     },
                     { timeout: 2000 }
                 );
         }, ms || 100);
     }
 
     window.portalBursterrangeIndicator  = null;
     bursterrangeLayer = null;
     dBursterrangeLayerGroup = null;
     let lastPortalGuid = null;
 
     map = window.map;
 
     const defaultSettings = {
         circleColor: "#800080",
         circleWidth: 2,
         showAllResoCircle: false
     };
 
     let settings = defaultSettings;
 
     function saveSettings() {
         createThrottledTimer("saveSettings", function () {
             localStorage[KEY_SETTINGS] = JSON.stringify(settings);
         });
         drawBursterRange(lastPortalGuid);
     }
 
     thisPlugin.loadSettings = function() {
         const tmp = localStorage[KEY_SETTINGS];
         try {
             settings = JSON.parse(tmp);
         } catch (e) {
             // eslint-disable-line no-empty
         }
         if (!settings.circleWidth) {
             settings.circleWidth = "2";
         }
         if (!"showAllResoCircle" in settings) {
             settings.showAllResoCircle = false
         }
     }
 
     window.resetSettings = function() {
         settings = JSON.parse(JSON.stringify(defaultSettings));
         showSettingsDialog();
     }
 
     // The entry point for this plugin.
     function setup() {
         thisPlugin.loadSettings();
 
         window.addHook(
             "portalSelected",
             window.drawBursterRange
         );
 
         bursterrangeLayer = L.layerGroup();
         window.addLayerGroup('Burster Range', bursterrangeLayer, true);
         dBursterrangeLayerGroup = L.layerGroup();
 
         const toolbox = document.getElementById("toolbox");
 
         let buttonBursterrange = document.createElement("a");
         buttonBursterrange.textContent = "Burster Range Settings";
         buttonBursterrange.title = "Configuration for Burster Range Plugin";
         buttonBursterrange.addEventListener("click", showSettingsDialog);
         toolbox.appendChild(buttonBursterrange);
     }
 
     thisPlugin.saveToFile = function(text, filename) {
         if (typeof text != 'string') {
             text = JSON.stringify(text);
         }
 
         if (typeof window.saveFile != 'undefined') {
             window.saveFile(text, filename, 'application/json');
             return;
         }
     };
 
     thisPlugin.readFromFile = function(callback) {
         if (typeof L.FileListLoader != 'undefined') {
             L.FileListLoader.loadFiles({accept: 'application/json'})
                 .on('load',function (e) {
                     callback(e.reader.result);
                 });
             return;
         }
     };
 
     function showSettingsDialog() {
         const html =
                     `<p><label for="colorCircleColor">Radius Circle Color</label><br><input type="color" id="colorCircleColor" /></p>
                      <p><label for="textCircleWidth">Radius Circle Thickness</label><br><input type="text" id="textCircleWidth" /></p>
                      <p><label for="cbShowAllResoCircle">Show Circle for all resonators</label><br><input type="checkbox" id="cbShowAllResoCircle" /></p>
                      <a onclick="window.resetSettings();return false;" title="Restores settings to default state">Reset to Defaults</a>
                     `;
 
         const width = Math.min(screen.availWidth, 420);
         const container = dialog({
             id: "settings",
             width: width + "px",
             html: html,
             title: "Burster Range Settings",
         });
 
         const div = container[0];
 
         const colorCircleColorPicker = div.querySelector("#colorCircleColor");
         colorCircleColorPicker.value = settings.circleColor;
         colorCircleColorPicker.addEventListener("change", (e) => {
             settings.circleColor = colorCircleColorPicker.value;
             saveSettings();
         });
 
         const textCircleWidthStr = div.querySelector("#textCircleWidth");
         textCircleWidthStr.value = settings.circleWidth;
         textCircleWidthStr.addEventListener("change", (e) => {
             settings.circleWidth = textCircleWidthStr.value;
             saveSettings();
         });
 
         const showAllCB = div.querySelector("#cbShowAllResoCircle");
         showAllCB.checked = settings.showAllResoCircle;
         showAllCB.addEventListener("change", (e) => {
             settings.showAllResoCircle = showAllCB.checked;
             saveSettings();
         });
     };
 
     window.drawBursterRange = function (guid) {
         portalBursterrangeIndicator = null;
         dBursterrangeLayerGroup.clearLayers();
 
         if (guid) {
             if (guid.selectedPortalGuid) {
                 lastPortalGuid = guid;
 
                 p = window.portals[guid.selectedPortalGuid];
                 if (p) {
                     const coord = new LatLng(p._latlng.lat, p._latlng.lng);
                     portalBursterrangeIndicator = L.circle(coord, 168,
                         { fill: false, color: settings.circleColor, weight: settings.circleWidth, interactive: false }
                     )
                     dBursterrangeLayerGroup.addLayer(portalBursterrangeIndicator);
                     portalBursterrangeIndicator2 = L.circle(coord, 208,
                         { fill: false, color: settings.circleColor, weight: settings.circleWidth, interactive: false }
                     )
                     dBursterrangeLayerGroup.addLayer(portalBursterrangeIndicator2);
                     if (settings.showAllResoCircle) {
                         portalBursterrangeIndicator3 = L.circle(coord, 128,
                         { fill: false, color: settings.circleColor, weight: settings.circleWidth, interactive: false }
                         )
                         dBursterrangeLayerGroup.addLayer(portalBursterrangeIndicator3);
                     }
                 }
                 updateMap();
             } else {
                 if (bursterrangeLayer.hasLayer(dBursterrangeLayerGroup)) {
                     bursterrangeLayer.removeLayer(dBursterrangeLayerGroup);
                 }
             }
         }
     };
 
     setup.info = plugin_info; //add the script info data to the function as a property
     // if IITC has already booted, immediately run the 'setup' function
     if (window.iitcLoaded) {
         setup();
         } else {
             if (!window.bootPlugins) {
                 window.bootPlugins = [];
             }
         window.bootPlugins.push(setup);
     }
 
     function updateMap() {
         if (!portalBursterrangeIndicator) {
             return;
         }
 
         const zoom = map.getZoom();
 
         if (zoom > 8) {
             if (!bursterrangeLayer.hasLayer(dBursterrangeLayerGroup)) {
                 bursterrangeLayer.addLayer(dBursterrangeLayerGroup);
             }
         }
     }
 
     function LatLng(lat, lng, alt) {
         if (isNaN(lat) || isNaN(lng)) {
             throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
         }
 
         // @property lat: Number
         // Latitude in degrees
         this.lat = +lat;
 
         // @property lng: Number
         // Longitude in degrees
         this.lng = +lng;
 
         // @property alt: Number
         // Altitude in meters (optional)
         if (alt !== undefined) {
             this.alt = +alt;
         }
     }
 
     LatLng.prototype = {
 
         // @method toString(): String
         // Returns a string representation of the point (for debugging purposes).
         toString: function (precision) {
             return 'LatLng(' +
                     formatNum(this.lat, precision) + ', ' +
                     formatNum(this.lng, precision) + ')';
         }
 
     };
 
 }
  
 (function () {
     const plugin_info = {};
     if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) {
         plugin_info.script = {
             version: GM_info.script.version,
             name: GM_info.script.name,
             description: GM_info.script.description
         };
     }
     // Greasemonkey. It will be quite hard to debug
     if (typeof unsafeWindow != 'undefined' || typeof GM_info == 'undefined' || GM_info.scriptHandler != 'Tampermonkey') {
     // inject code into site context
         const script = document.createElement('script');
         script.appendChild(document.createTextNode('(' + wrapper + ')(' + JSON.stringify(plugin_info) + ');'));
         (document.body || document.head || document.documentElement).appendChild(script);
     } else {
         // Tampermonkey, run code directly
         wrapper(plugin_info);
     }
 })();