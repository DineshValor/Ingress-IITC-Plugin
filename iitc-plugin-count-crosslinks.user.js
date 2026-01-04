// ==UserScript==
// @id             iitc-plugin-count-crosslinks
// @name           Count Cross Links
// @author         CmdrDeLiver
// @category       Info
// @version        20191012.03
// @downloadURL    https://iitc.willbe.blue/download/7785/rTScYGFETdOHO0bSB9a4yzlhYzllODA4ODJiNTJhMWQyZmZmYWMwZWEyMTRmOWJmYzhmMDc4NWE2ZDgxYTBmYjgwNWJmNWE4MWI1NjM2ZDU1gqufDPozHfPI2I2n6Uu53weOiCF8xUA41l0orOP4QYR9XgCEd4HWytORy-zg24-kBb2oXeOPGq8_8AXwdh8QYANzVoc9nlQy5QilJhYNJQ==/iitc-plugin-count-crosslinks.user.js
// @updateURL      https://iitc.willbe.blue/update-header/7785/D63IdfkHYHo_OTGnZgBCVGJkMzg5Zjc3NWQ1NWI4MGIwNTEyMWNjMTg3ZGU1N2Y1MDEwMjc0YzlhZTk2MmQ0MjExZjJkMmViYTVhMzFiMDkbV6dqS6wmt4vpooAowfp6FTFBJFkXJ15OSMeT4UhXrzH4hfYIAAo6Uxkb_ICo2E8kbAF2b-E0d8sHX5cYVQWG7FfAIa9axi24gwy7DdRc2w==/iitc-plugin-count-crosslinks.user.js
// @description    See a count of all detected cross links.
// @match          *://intel.ingress.com/*
// @match          *://intel-x.ingress.com/*
// @match          *://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==



 
 
 
 
 
  function wrapper(plugin_info) {
  if(typeof window.plugin !== 'function') window.plugin = function() {};
 
  plugin_info.buildName = 'localbeer';
  plugin_info.dateTimeVersion = '20191012.03';
  plugin_info.pluginId = 'count-crosslinks';
 
  window.plugin.countCrosslinks = function() {
   var links = Object.size(window.plugin.crossLinks.linkLayerGuids)
   if (links > 0) {$('#countcrosslinks-status').css({"color":"black","background-color":"SALMON"});}
   else {$('#countcrosslinks-status').css({"color":"black","background-color":"white"})};
   $('#countcrosslinks-status').html(links);
  };
 
 
  Object.size = function(obj) {
     var size = 0, key;
     for (key in obj) {
         if (obj.hasOwnProperty(key)) size++;
     }
     return size;
  };
 
 
      // window.plugin.crossLinks.showLink
      // window.plugin.crossLinks.checkAllLinks
      // window.plugin.crossLinks.onLinkAdded
 
  window.plugin.countCrosslinks.setup = function() {
 
      // Has crossLinks loaded yet?
      if (typeof window.plugin.crossLinks.showLink == 'function' && typeof window.plugin.crossLinks.checkAllLinks == 'function' && typeof window.plugin.crossLinks.onLinkAdded == 'function')
      {
          // yes
          // hook crossLinks functions for callback
 
          (function() {
            var proxied = window.plugin.crossLinks.onLinkAdded;
            window.plugin.crossLinks.onLinkAdded = function() {
            var ret = proxied.apply( this, arguments );
            window.plugin.countCrosslinks();
            return ret;
            };
          })();
          (function() {
            var proxied = window.plugin.crossLinks.showLink;
            window.plugin.crossLinks.showLink = function() {
            var ret = proxied.apply( this, arguments );
            window.plugin.countCrosslinks();
            return ret;
            };
          })();
          (function() {
            var proxied = window.plugin.crossLinks.checkAllLinks;
            window.plugin.crossLinks.checkAllLinks = function() {
            var ret = proxied.apply( this, arguments );
            window.plugin.countCrosslinks();
            return ret;
            };
          })();
 
          // inject page content
          $('.leaflet-control-container .leaflet-top').first().prepend('<div id="countcrosslinks" class="leaflet-control leaflet-bar leaflet-control-zoom" style="margin-left: 11px;"><strong><a id="countcrosslinks-status" style="color: black; background-color: white;" title="Cross Links">0</a></strong></div>');
      } else {
          // no
          alert("Cross Links Count unable to load");
      }
  };
 
 
  var setup = window.plugin.countCrosslinks.setup;
 
 
 
  setup.info = plugin_info; //add the script info data to the function as a property
  if(!window.bootPlugins) window.bootPlugins = [];
  window.bootPlugins.push(setup);
  if(window.iitcLoaded && typeof setup === 'function') setup();
  } // wrapper end
  var script = document.createElement('script');
  var info = {};
  if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
  script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
  (document.body || document.head || document.documentElement).appendChild(script);
 
 