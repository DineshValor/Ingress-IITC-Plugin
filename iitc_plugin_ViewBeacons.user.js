// ==UserScript==
// @id             iitc_plugin_ViewBeacons
// @name           View Beacons
// @author         Hevne
// @category       Portal Info
// @version        1.0
// @downloadURL    https://iitc.willbe.blue/download/7785/u67xf-gH0akm4krrzuvxrjI1NTc2ODMzNzA2MDc3NDU3NWMwYjUxNDA4NGRhMWIyY2FhODE0MTIzMWJkYjA1YTQ2ZjExN2VjZWY2ZDM4ZGIkPlv1XS0KQDaEJnVns39oP69zh07Ow5dWUtz_gLfzYuBkT3ch4Qi0f5CQto_FhA21IiIs3nTBzs24XDfEDRoPpVWNs9i2xg8kkqWSSkwa_A==/iitc_plugin_ViewBeacons.user.js
// @updateURL      https://iitc.willbe.blue/update-header/7785/DliuWqkGMZjLrZHZZ3kTiDQ2ZGE4MzNiMjZlYWViMjg4Y2NlZDdiMDA0MDMzYzQ0OTIwYTJkODQwMDIyM2QwZmRjOTg5YWQxMjg3MGRlODhNq_QDrbACOv_jmwNuZ6RrXAxTVHaIDzmx-6REEU_hTB1SPnQjfFcDBpnV6unItE_0Ctkjoaw6rGwpyV38pvOs8mC6PZ18AaleUxl7e0VByg==/iitc_plugin_ViewBeacons.user.js
// @description    show beacon information in portal details
// @match          *://intel.ingress.com/*
// @match          *://intel-x.ingress.com/*
// @match          *://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==



 function wrapper(SCRIPT_INFO) {
 /******/ (() => { // webpackBootstrap
 /******/ 	"use strict";
 /******/ 	var __webpack_modules__ = ({
 
 /***/ 465:
 /***/ ((module, __webpack_exports__, __webpack_require__) => {
 
 /* harmony export */ __webpack_require__.d(__webpack_exports__, {
 /* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 /* harmony export */ });
 /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
 /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
 
 var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
 ___CSS_LOADER_EXPORT___.push([module.id, "#ornaments{text-align:center;width:100%}.ornamentsImages{background:rgba(0,0,0,.6);border-radius:7px;display:inline-block;left:50%;padding:0 2px;position:relative;top:84%;transform:translateX(-50%);z-index:1}.ornamentsImages img{height:24px;margin:1px 1px 0;width:24px}", ""]);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
 
 
 /***/ }),
 
 /***/ 645:
 /***/ ((module) => {
 
 
 
 /*
   MIT License http://www.opensource.org/licenses/mit-license.php
   Author Tobias Koppers @sokra
 */
 module.exports = function (cssWithMappingToString) {
   var list = []; // return the list of modules as css string
 
   list.toString = function toString() {
     return this.map(function (item) {
       var content = cssWithMappingToString(item);
 
       if (item[2]) {
         return "@media ".concat(item[2], " {").concat(content, "}");
       }
 
       return content;
     }).join("");
   }; // import a list of modules into the list
   // eslint-disable-next-line func-names
 
 
   list.i = function (modules, mediaQuery, dedupe) {
     if (typeof modules === "string") {
       // eslint-disable-next-line no-param-reassign
       modules = [[null, modules, ""]];
     }
 
     var alreadyImportedModules = {};
 
     if (dedupe) {
       for (var i = 0; i < this.length; i++) {
         // eslint-disable-next-line prefer-destructuring
         var id = this[i][0];
 
         if (id != null) {
           alreadyImportedModules[id] = true;
         }
       }
     }
 
     for (var _i = 0; _i < modules.length; _i++) {
       var item = [].concat(modules[_i]);
 
       if (dedupe && alreadyImportedModules[item[0]]) {
         // eslint-disable-next-line no-continue
         continue;
       }
 
       if (mediaQuery) {
         if (!item[2]) {
           item[2] = mediaQuery;
         } else {
           item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
         }
       }
 
       list.push(item);
     }
   };
 
   return list;
 };
 
 /***/ }),
 
 /***/ 577:
 /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
 
 __webpack_require__.r(__webpack_exports__);
 /* harmony export */ __webpack_require__.d(__webpack_exports__, {
 /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 /* harmony export */ });
 /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(216);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
 /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
 /* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(465);
 
       
       
       
       
       
       
       
       
       
 
 var options = {};
 
 options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
 options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
 
       options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
     
 options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
 options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
 
 var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);
 
 
 
 
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);
 
 
 /***/ }),
 
 /***/ 379:
 /***/ ((module) => {
 
 
 
 var stylesInDOM = [];
 
 function getIndexByIdentifier(identifier) {
   var result = -1;
 
   for (var i = 0; i < stylesInDOM.length; i++) {
     if (stylesInDOM[i].identifier === identifier) {
       result = i;
       break;
     }
   }
 
   return result;
 }
 
 function modulesToDom(list, options) {
   var idCountMap = {};
   var identifiers = [];
 
   for (var i = 0; i < list.length; i++) {
     var item = list[i];
     var id = options.base ? item[0] + options.base : item[0];
     var count = idCountMap[id] || 0;
     var identifier = "".concat(id, " ").concat(count);
     idCountMap[id] = count + 1;
     var indexByIdentifier = getIndexByIdentifier(identifier);
     var obj = {
       css: item[1],
       media: item[2],
       sourceMap: item[3],
       supports: item[4],
       layer: item[5]
     };
 
     if (indexByIdentifier !== -1) {
       stylesInDOM[indexByIdentifier].references++;
       stylesInDOM[indexByIdentifier].updater(obj);
     } else {
       var updater = addElementStyle(obj, options);
       options.byIndex = i;
       stylesInDOM.splice(i, 0, {
         identifier: identifier,
         updater: updater,
         references: 1
       });
     }
 
     identifiers.push(identifier);
   }
 
   return identifiers;
 }
 
 function addElementStyle(obj, options) {
   var api = options.domAPI(options);
   api.update(obj);
 
   var updater = function updater(newObj) {
     if (newObj) {
       if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
         return;
       }
 
       api.update(obj = newObj);
     } else {
       api.remove();
     }
   };
 
   return updater;
 }
 
 module.exports = function (list, options) {
   options = options || {};
   list = list || [];
   var lastIdentifiers = modulesToDom(list, options);
   return function update(newList) {
     newList = newList || [];
 
     for (var i = 0; i < lastIdentifiers.length; i++) {
       var identifier = lastIdentifiers[i];
       var index = getIndexByIdentifier(identifier);
       stylesInDOM[index].references--;
     }
 
     var newLastIdentifiers = modulesToDom(newList, options);
 
     for (var _i = 0; _i < lastIdentifiers.length; _i++) {
       var _identifier = lastIdentifiers[_i];
 
       var _index = getIndexByIdentifier(_identifier);
 
       if (stylesInDOM[_index].references === 0) {
         stylesInDOM[_index].updater();
 
         stylesInDOM.splice(_index, 1);
       }
     }
 
     lastIdentifiers = newLastIdentifiers;
   };
 };
 
 /***/ }),
 
 /***/ 569:
 /***/ ((module) => {
 
 
 
 var memo = {};
 /* istanbul ignore next  */
 
 function getTarget(target) {
   if (typeof memo[target] === "undefined") {
     var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
 
     if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
       try {
         // This will throw an exception if access to iframe is blocked
         // due to cross-origin restrictions
         styleTarget = styleTarget.contentDocument.head;
       } catch (e) {
         // istanbul ignore next
         styleTarget = null;
       }
     }
 
     memo[target] = styleTarget;
   }
 
   return memo[target];
 }
 /* istanbul ignore next  */
 
 
 function insertBySelector(insert, style) {
   var target = getTarget(insert);
 
   if (!target) {
     throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
   }
 
   target.appendChild(style);
 }
 
 module.exports = insertBySelector;
 
 /***/ }),
 
 /***/ 216:
 /***/ ((module) => {
 
 
 
 /* istanbul ignore next  */
 function insertStyleElement(options) {
   var element = document.createElement("style");
   options.setAttributes(element, options.attributes);
   options.insert(element, options.options);
   return element;
 }
 
 module.exports = insertStyleElement;
 
 /***/ }),
 
 /***/ 565:
 /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
 
 
 
 /* istanbul ignore next  */
 function setAttributesWithoutAttributes(styleElement) {
   var nonce =  true ? __webpack_require__.nc : 0;
 
   if (nonce) {
     styleElement.setAttribute("nonce", nonce);
   }
 }
 
 module.exports = setAttributesWithoutAttributes;
 
 /***/ }),
 
 /***/ 795:
 /***/ ((module) => {
 
 
 
 /* istanbul ignore next  */
 function apply(styleElement, options, obj) {
   var css = "";
 
   if (obj.supports) {
     css += "@supports (".concat(obj.supports, ") {");
   }
 
   if (obj.media) {
     css += "@media ".concat(obj.media, " {");
   }
 
   var needLayer = typeof obj.layer !== "undefined";
 
   if (needLayer) {
     css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
   }
 
   css += obj.css;
 
   if (needLayer) {
     css += "}";
   }
 
   if (obj.media) {
     css += "}";
   }
 
   if (obj.supports) {
     css += "}";
   }
 
   var sourceMap = obj.sourceMap;
 
   if (sourceMap && typeof btoa !== "undefined") {
     css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
   } // For old IE
 
   /* istanbul ignore if  */
 
 
   options.styleTagTransform(css, styleElement, options.options);
 }
 
 function removeStyleElement(styleElement) {
   // istanbul ignore if
   if (styleElement.parentNode === null) {
     return false;
   }
 
   styleElement.parentNode.removeChild(styleElement);
 }
 /* istanbul ignore next  */
 
 
 function domAPI(options) {
   var styleElement = options.insertStyleElement(options);
   return {
     update: function update(obj) {
       apply(styleElement, options, obj);
     },
     remove: function remove() {
       removeStyleElement(styleElement);
     }
   };
 }
 
 module.exports = domAPI;
 
 /***/ }),
 
 /***/ 589:
 /***/ ((module) => {
 
 
 
 /* istanbul ignore next  */
 function styleTagTransform(css, styleElement) {
   if (styleElement.styleSheet) {
     styleElement.styleSheet.cssText = css;
   } else {
     while (styleElement.firstChild) {
       styleElement.removeChild(styleElement.firstChild);
     }
 
     styleElement.appendChild(document.createTextNode(css));
   }
 }
 
 module.exports = styleTagTransform;
 
 /***/ })
 
 /******/ 	});
 /************************************************************************/
 /******/ 	// The module cache
 /******/ 	var __webpack_module_cache__ = {};
 /******/ 	
 /******/ 	// The require function
 /******/ 	function __webpack_require__(moduleId) {
 /******/ 		// Check if module is in cache
 /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
 /******/ 		if (cachedModule !== undefined) {
 /******/ 			return cachedModule.exports;
 /******/ 		}
 /******/ 		// Create a new module (and put it into the cache)
 /******/ 		var module = __webpack_module_cache__[moduleId] = {
 /******/ 			id: moduleId,
 /******/ 			// no module.loaded needed
 /******/ 			exports: {}
 /******/ 		};
 /******/ 	
 /******/ 		// Execute the module function
 /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 /******/ 	
 /******/ 		// Return the exports of the module
 /******/ 		return module.exports;
 /******/ 	}
 /******/ 	
 /************************************************************************/
 /******/ 	/* webpack/runtime/compat get default export */
 /******/ 	(() => {
 /******/ 		// getDefaultExport function for compatibility with non-harmony modules
 /******/ 		__webpack_require__.n = (module) => {
 /******/ 			var getter = module && module.__esModule ?
 /******/ 				() => (module['default']) :
 /******/ 				() => (module);
 /******/ 			__webpack_require__.d(getter, { a: getter });
 /******/ 			return getter;
 /******/ 		};
 /******/ 	})();
 /******/ 	
 /******/ 	/* webpack/runtime/define property getters */
 /******/ 	(() => {
 /******/ 		// define getter functions for harmony exports
 /******/ 		__webpack_require__.d = (exports, definition) => {
 /******/ 			for(var key in definition) {
 /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 /******/ 				}
 /******/ 			}
 /******/ 		};
 /******/ 	})();
 /******/ 	
 /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
 /******/ 	(() => {
 /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 /******/ 	})();
 /******/ 	
 /******/ 	/* webpack/runtime/make namespace object */
 /******/ 	(() => {
 /******/ 		// define __esModule on exports
 /******/ 		__webpack_require__.r = (exports) => {
 /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 /******/ 			}
 /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
 /******/ 		};
 /******/ 	})();
 /******/ 	
 /************************************************************************/
 var __webpack_exports__ = {};
 (() => {
 
 ;// CONCATENATED MODULE: ./node_modules/iitcpluginkit/dist/Plugin.js
 /*
 *   Usage example:
 
     import * as Plugin from "../plugin";
 
     class myPlugin implements Plugin.Class {
         init() {
             console.log("Hello World!");
         }
     }
 
     Plugin.Register(new myPlugin(), "myPlugin");
 */
 function Register(plugin, name) {
     const setup = () => {
         window.plugin[name] = plugin;
         window.plugin[name].init();
     };
     setup.info = SCRIPT_INFO;
     if (!window.bootPlugins) {
         window.bootPlugins = [];
     }
     window.bootPlugins.push(setup);
     if (window.iitcLoaded) {
         setup();
     }
 }
 
 ;// CONCATENATED MODULE: ./src/Main.ts
 
 const beaconNames = {
     "peFRACK": "Fracker",
     "peENL": "ENL",
     "peRES": "RES",
     "peFW_ENL": "Firework (ENL)",
     "peFW_RES": "Firework (RES)",
     'peBN_BLM': "Beacon (BLM)",
     'peBN_ENL_WINNER': "BB - Win-ENL",
     'peBN_RES_WINNER': "BB - Win-RES",
     'peBN_TIED_WINNER': "BB - Win-none",
     'peNEMESIS': "Nemesis",
     'peTOASTY': "Toasty",
     "sc5_p": "Volatile Scout Controller Portal"
     // peBR_REWARD-10_125_38   // BB deploy 28.01.2022 19:26 (local)
 };
 const imagePath = "https://commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/";
 class ViewOrnaments {
     constructor() {
         this.lastDeploy = new Map();
         this.onPublicChatDataAvailable = (data) => {
             $.each(data.result, (ind, json) => {
                 if (json[2].plext.plextType !== "SYSTEM_BROADCAST")
                     return true;
                 const msg = json[2].plext.markup;
                 if (!this.isBeaconMessage(msg))
                     return true;
                 const time = json[1];
                 const portal = msg[2][1];
                 const portalStr = portal.latE6 + "&" + portal.lngE6;
                 const player = msg[0][1];
                 const last = this.lastDeploy.get(portalStr);
                 if (!last || time > last.time) {
                     this.lastDeploy.set(portalStr, { player: player.plain, time });
                 }
                 return true;
             });
         };
     }
     init() {
         __webpack_require__(577);
         window.addHook("portalDetailsUpdated", () => this.onPortalDetails());
         window.addHook("publicChatDataAvailable", this.onPublicChatDataAvailable);
     }
     onPortalDetails() {
         if (!window.selectedPortal)
             return;
         if (!window.portals[window.selectedPortal])
             return;
         const ornaments = window.portals[window.selectedPortal].options.data.ornaments;
         if (ornaments && ornaments.length > 0) {
             const images = this.getOrnamentsImageBlock(ornaments);
             images.addClass("ornamentsImages");
             $("#portaldetails .imgpreview").append(images);
             const deployer = this.getDeployer(window.portals[window.selectedPortal]);
             const ornamentsNames = this.getOrnamentsNames(ornaments, deployer);
             const text = $("<div>", { id: "ornaments", text: ornamentsNames.join(",") });
             $("#portaldetails #resodetails").after(text);
         }
         else {
             $("#portaldetails #ornaments").remove();
             $("#portaldetails .imgpreview .ornamentsImages").remove();
         }
     }
     getOrnamentsNames(ornaments, possibleDeployer) {
         const deployer = possibleDeployer ? ` by ${possibleDeployer}` : "";
         return ornaments.map(name => {
             if (beaconNames[name]) {
                 name = beaconNames[name];
             }
             else if (name.startsWith('pe')) {
                 return `Beacon (${name.slice(2)}${deployer})`;
             }
             return deployer ? `${name}${deployer}` : name;
         });
     }
     getOrnamentsImageBlock(ornaments) {
         const container = $("<div>");
         const deployer = this.getDeployer(window.portals[window.selectedPortal]);
         const ornamentsNames = this.getOrnamentsNames(ornaments, deployer);
         ornaments.forEach((name, idx) => {
             container.append($("<img>", { src: imagePath + name + ".png", title: ornamentsNames[idx] }));
         });
         return container;
     }
     getDeployer(portal) {
         const llstr = portal.options.data.latE6 + "&" + portal.options.data.lngE6;
         const deployer = this.lastDeploy.get(llstr);
         if (!deployer)
             return;
         return `${deployer.player} ${this.formatTime(deployer.time)}`;
     }
     formatTime(time) {
         const date = new Date(time);
         if (date.getMinutes() < 10) {
             return `${date.getHours()}:0${date.getMinutes()}`;
         }
         else {
             return `${date.getHours()}:${date.getMinutes()}`;
         }
     }
     isBeaconMessage(msg) {
         // " deployed a Beacon on "; Battle
         return msg[0][0] === "PLAYER"
             && msg[1][0] === "TEXT" && msg[1][1].plain.includes("Beacon")
             && msg[2][0] === "PORTAL";
     }
 }
 Register(new ViewOrnaments(), "ViewOrnaments");
 
 })();
 
 /******/ })()
 ;
 };
 (function () {
   const info = {};
   if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) 
     info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
   if (typeof unsafeWindow != 'undefined' || typeof GM_info == 'undefined' || GM_info.scriptHandler != 'Tampermonkey') {    
     const script = document.createElement('script');
     script.appendChild(document.createTextNode( '('+ wrapper +')('+JSON.stringify(info)+');'));
     document.head.appendChild(script);} 
   else wrapper(info);
 })();