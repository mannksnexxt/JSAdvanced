/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tfont: 1em sans-serif;\\n}\\nhtml, body {\\n\\theight: 100%;\\n\\twidth: 100%;\\n}\\na {\\n\\ttext-decoration: none;\\n}\\nbody {\\n\\tdisplay: grid;\\n\\tgrid-template-rows: auto 1fr auto;\\n\\toverflow-x: hidden;\\n}\\nheader {\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n\\tposition: relative;\\n\\tpadding: 0 32px;\\n\\tbackground: #f5f6fa;\\n\\tbox-shadow: 0px 4px 1px 0px rgba(34, 60, 80, 0.03);\\n}\\n.logo {\\n\\tfont-size: 1.3em;\\n\\tcolor: #34495e;\\n}\\nbutton {\\n\\tborder: none;\\n\\tcursor: pointer;\\n\\ttransition: .1s;\\n}\\n.header__controls {\\n\\tpadding: 16px 24px;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tgap: 20px;\\n}\\n.header__user-search {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tgap: 8px;\\n\\tcolor: #34495e;\\n}\\n.header__user-search input {\\n\\tcolor: #34495e;\\n\\tcursor: pointer;\\n\\tborder: none;\\n\\tpadding: 8px 16px;\\n\\tbackground: transparent;\\n\\toutline: none;\\n}\\n.header__user-search input:focus {\\n\\tborder-bottom: 1px solid #2d3436;\\n}\\n.header__user-search input:hover {\\n\\tborder-bottom: 1px solid #34495e;\\n}\\n\\n\\n.btn-cart {\\n\\tpadding: 16px 24px;\\n\\tfont-size: .95em;\\n\\tbackground: #f5f6fa;\\n\\tcolor: #353b48;\\n\\tborder-radius: 5px;\\n}\\n.btn-cart:hover {\\n\\tbackground: #353b48;\\n\\tcolor: #f5f6fa;\\n}\\n.btn-cart.active {\\n\\tbackground: #353b48;\\n\\tcolor: #f5f6fa;\\n}\\n\\n#cart-toggle {display: none;}\\n\\n.cart {\\n\\ttransition: .2s;\\n\\ttransform: translateX(400px);\\n\\tposition: absolute;\\n\\theight: calc(100vh - 84px);\\n\\tmin-width: 400px;\\n\\ttop: 84px;\\n\\tbox-sizing: border-box;\\n\\tright: 0;\\n\\tpadding: 18px 24px;\\n\\tbackground: #fff;\\n\\tbox-shadow: 0px 8px 5px 7px rgba(34, 60, 80, 0.03);\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr;\\n\\tgrid-template-rows: auto 1fr auto;\\n}\\n.cart.active {\\n\\ttransform: translateX(0);\\n}\\n.cart h2 {\\n\\tfont-size: 20px;\\n\\tcolor: #34495e;\\n}\\n.cart__items {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tgap: 20px;\\n\\tmargin-top: 20px;\\n}\\n.cart__item {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 2fr;\\n\\tgap: 10px;\\n}\\n.cart__item img {height: 80px;}\\n\\n.cart__item-description {\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\tflex-wrap: wrap;\\n}\\n.cart__item-description h3 {\\n\\twidth: 100%;\\n\\tcolor: #535c68;\\n}\\n.cart__item-quantity, .cart__item-price {\\n\\tdisplay: flex;\\n\\talign-items: flex-end;\\n}\\n.cart__item-quantity {\\n\\tgap: 8px;\\n}\\n.cart__item-quantity button {\\n\\tbackground: transparent;\\n\\tcolor: #b2bec3;\\n}\\n.cart__item-quantity button:hover {\\n\\tcolor: #535c68;\\n}\\n\\n.cart__item-quantity span {\\n\\tfont-size: 18px;\\n\\tcolor: #2d3436;\\n}\\n.cart__item-price {\\n\\tcolor: #10ac84;\\n}\\n.cart__item-price span {\\n\\tcolor: #576574;\\n\\tfont-size: 20px;\\n}\\n.cart__total-price {\\n\\tpadding: 18px 8px;\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n\\n}\\n.cart__total-price h3 {\\n\\tfont-size: 18px;\\n\\tcolor: #34495e;\\n}\\n\\n.cart__total-price span {\\n\\tfont-size: 20px;\\n\\tcolor: #2d3436;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tgap: 5px;\\n}\\n.cart__total-price span span {\\n\\tfont-size: 24px;\\n\\tcolor: #10ac84;\\n}\\n\\n.products {\\n\\tpadding: 32px 46px;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 1fr 1fr 1fr;\\n\\tgrid-gap: 32px;\\n}\\n.product-item {\\n\\tpadding: 16px;\\n\\tbox-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.05);\\n\\tdisplay: grid;\\n}\\n.product-item img {\\n\\twidth: 100%;\\n}\\n.product-item h3 {\\n\\tfont-size: 1.5em;\\n\\tmargin-top: 15px;\\n}\\n.product-item p {\\n\\tpadding: 16px;\\n\\tfont-size: 1.1em;\\n\\tmargin: 8px 0 16px;\\n\\tpadding: 0;\\n\\tcolor: #34495e;\\n}\\n.product-item button {\\n\\tpadding: 10px 16px;\\n\\tborder-radius: 5px;\\n\\tcolor: #34495e;\\n\\tbackground: transparent;\\n\\tfont-size: 1.1em;\\n}\\n.product-item button:hover {\\n\\tbackground: #34495e;\\n\\tcolor: #ecf0f1;\\n}\\n.no-data {\\n\\tfont-size: 20px;\\n\\tcolor: #535c68;\\n}\\n.request-error {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tpadding: 10px 18px;\\n\\tgap: 18px;\\n\\tbackground: #e74c3c;\\n\\tcolor: #fff;\\n\\tletter-spacing: 0.03em;\\n\\tposition: fixed;\\n\\tbottom: 30px;\\n\\tleft: 20px;\\n\\tborder-radius: 5px;\\n}\\n.request-error i {\\n\\topacity: .8;\\n}\\n.request-error button {\\n\\tbackground: transparent;\\n\\tpadding: 5px;\\n\\tcolor: #fff;\\n\\tfont-size: 20px;\\n\\topacity: .7;\\n}\\n.request-error button:hover {\\n\\topacity: 1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://server/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://server/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://server/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://server/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/components/Cart.js":
/*!***********************************!*\
  !*** ./src/js/components/Cart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _CartItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartItem.js */ \"./src/js/components/CartItem.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tprops: {\n\t\tgoods: {\n\t\t\ttype: Array,\n\t\t\trequired: true\n\t\t}\n\t},\n\tcomponents: {\n\t\tCartItem: _CartItem_js__WEBPACK_IMPORTED_MODULE_0__.default\n\t},\n\tcomputed: {\n\t\tcartTotalPrice() {\n\t\t\treturn this.goods.reduce( (sum, item) => {\n\t\t\t\treturn sum += item.price * item.quantity;\n\t\t\t}, 0);\n\t\t},\n\t},\n\ttemplate: `\n\t<div>\n\t\t<h2>Cart</h2>\t\t\n\t\t<div class=\"cart__items\">\n\t\t\t<cart-item\n\t\t\t\tv-for=\"item in goods\"\n\t\t\t\t:good=\"item\"\n\t\t\t\t:key=\"item.id_product\"\n\t\t\t\t/>\n\t\t</div>\n\t\t<div class=\"cart__total-price\">\n\t\t\t<h3>Total price: </h3>\n\t\t\t<span>{{ cartTotalPrice }}<span>$</span></span>\n\t\t</div>\n\t</div>\n\t`\n});\n\n//# sourceURL=webpack://server/./src/js/components/Cart.js?");

/***/ }),

/***/ "./src/js/components/CartItem.js":
/*!***************************************!*\
  !*** ./src/js/components/CartItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tprops: {\n\t\tgood: {\n\t\t\ttype: Object,\n\t\t\trequired: true\n\t\t}\n\t},\n\ttemplate: `\n\t<div class=\"cart__item\">\n\t\t<img :src=\"$root.imgUrl\">\n\t\t<div class=\"cart__item-description\">\n\t\t\t<h3>{{ good.product_name }}</h3>\n\t\t\t<div class=\"cart__item-quantity\">\n\t\t\t   <button\n\t\t\t\t   class=\"reduce-item-quantity\"\n\t\t\t\t   @click=\"$root.reduceCartItem(good.id_product)\">\n\t\t\t\t   <i class=\"fas fa-minus\"></i>\n\t\t\t   </button>\n\n\t\t\t   <span>{{ good.quantity }}</span>\n\n\t\t\t   <button \n\t\t\t\t\tclass=\"increase-item-quantity\"\n\t\t\t\t\t@click=\"$root.increaseCartItem(good.id_product)\">\n\t\t\t\t   <i class=\"fas fa-plus\"></i>\n\t\t\t   </button>\n\t\t\t</div>\n\t\t\t<div class=\"cart__item-price\">\n\t\t\t\t<span>{{ good.price * good.quantity }}</span>$\n\t\t\t</div>\n\t\t</div>\n\t</div>\n`\n});\n\n//# sourceURL=webpack://server/./src/js/components/CartItem.js?");

/***/ }),

/***/ "./src/js/components/CartToggle.js":
/*!*****************************************!*\
  !*** ./src/js/components/CartToggle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tprops: {\n\t\tisVisible: Boolean\n\t},\n\temits: ['update:isVisible'],\n\ttemplate: `\n\t<label\n\t\t:class=\"['btn-cart', {active: isVisible} ]\"\n\t\t@click=\"$emit('update:isVisible', !isVisible)\"\n\t\tfor=\"cart-toggle\">\n\t\t<i class=\"fas fa-shopping-cart\"></i>\n\t\tКорзина\n\t</label>\n\t<input\n\t\t:value=\"isVisible\"\n\t\ttype=\"checkbox\"\n\t\tid=\"cart-toggle\">\n\t`\n});\n\n//# sourceURL=webpack://server/./src/js/components/CartToggle.js?");

/***/ }),

/***/ "./src/js/components/Error.js":
/*!************************************!*\
  !*** ./src/js/components/Error.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tdata() {\n\t\treturn {\n\t\t\tisVisible: true\n\t\t}\n\t},\n\ttemplate: `\n\t<div class=\"request-error\" v-if=\"isVisible\">\n\t\t<i class=\"fas fa-exclamation-circle\"></i>\n\t\t<p>\n\t\t\t<slot></slot>\n\t\t</p>\n\t\t<button @click=\"isVisible = false\">&times</button>\n\t</div>\n\t`\n});\n\n//# sourceURL=webpack://server/./src/js/components/Error.js?");

/***/ }),

/***/ "./src/js/components/Products.js":
/*!***************************************!*\
  !*** ./src/js/components/Products.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ProductsItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsItem.js */ \"./src/js/components/ProductsItem.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tprops: {\n\t\tsearch: String,\n\t\titems: Array,\n\t\tcartItems: Array\n\t},\n\tcomponents: {\n\t\tProductsItem: _ProductsItem_js__WEBPACK_IMPORTED_MODULE_0__.default\n\t},\n\tcomputed: {\n\t\tfilteredItems() {\n\t\t\tconst searchValue = this.search.trim().toLowerCase();\n\t\t\tif ( searchValue ) {\n\t\t\t\treturn this.items.filter( item => {\n\t\t\t\t\treturn  item.product_name.toLowerCase().includes(searchValue);\n\t\t\t\t});\n\t\t\t}\n\t\t\treturn this.items;\n\t\t}\t\n\t},\n\ttemplate: `\n\t<div class=\"products\">\n\t\t<template v-if=\"filteredItems.length\">\n\t\t\t<products-item v-for=\"item in filteredItems\" :item=\"item\" />\n\t\t</template>\n\t\t<span v-else class=\"no-data\">No data...</span>\n\t</div>\n\t`\n});\n\n//# sourceURL=webpack://server/./src/js/components/Products.js?");

/***/ }),

/***/ "./src/js/components/ProductsItem.js":
/*!*******************************************!*\
  !*** ./src/js/components/ProductsItem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tprops: {\n\t\titem: Object\n\t},\n\ttemplate: `\n\t<div class=\"product-item\">\n\t\t<img :src=\"$root.imgUrl\"/>\n\t\t<h3>{{ item.product_name }}</h3>\n\t\t<p>{{ item.name }}</p>\n\t\t<button class=\"buy-btn\" @click=\"$root.addToCart(item.id_product)\">Купить</button>\n\t</div>\n\t`\n});\n\n//# sourceURL=webpack://server/./src/js/components/ProductsItem.js?");

/***/ }),

/***/ "./src/js/components/SearchField.js":
/*!******************************************!*\
  !*** ./src/js/components/SearchField.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tprops: {\n\t\tsearch: {\n\t\t\ttype: String,\n\t\t\trequired: true\n\t\t}\n\t},\n\temits: ['update:search'],\n\ttemplate: `\n\t\t<input\n\t\t\ttype=\"text\"\n\t\t\t:value=\"search\"\n\t\t\t@input=\"$emit('update:search', $event.target.value)\">\n\t\t<i class=\"fas fa-search\"></i>\n\t`\n});\n\n//# sourceURL=webpack://server/./src/js/components/SearchField.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Cart.js */ \"./src/js/components/Cart.js\");\n/* harmony import */ var _components_Products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Products.js */ \"./src/js/components/Products.js\");\n/* harmony import */ var _components_SearchField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SearchField.js */ \"./src/js/components/SearchField.js\");\n/* harmony import */ var _components_CartToggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CartToggle.js */ \"./src/js/components/CartToggle.js\");\n/* harmony import */ var _components_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Error.js */ \"./src/js/components/Error.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n\n\n\n\n\n\nconst API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\n\n\n\n\n\nconst App = {\n\tdata() {\n\t\treturn {\n\t\t\titems: [],\n\t\t\tcartItems: [],\n\t\t\tuserSearch: '',\n\t\t\timgUrl: 'https://via.placeholder.com/300x220',\n\t\t\tcartShow: false,\n\t\t\trequestError: false\n\t\t}\n\t},\n\tcomponents: {\n\t\tCart: _components_Cart_js__WEBPACK_IMPORTED_MODULE_0__.default,\n\t\tSearchField: _components_SearchField_js__WEBPACK_IMPORTED_MODULE_2__.default,\n\t\tCartToggle: _components_CartToggle_js__WEBPACK_IMPORTED_MODULE_3__.default,\n\t\tProducts: _components_Products_js__WEBPACK_IMPORTED_MODULE_1__.default,\n\t\tRequestError: _components_Error_js__WEBPACK_IMPORTED_MODULE_4__.default\n\t},\n\tmethods: {\n\t\tchangeLocalStorage() {\n\t\t\tlocalStorage.setItem('cartData', JSON.stringify(this.cartItems));\n\t\t},\n\t\taddToCart(id) {\n\t\t\tconst item = this.items.find(item => item.id_product === id);\n\t\t\tconst cartItem = this.cartItems.find(item => item.id_product === id);\n\t\t\tif (item && !cartItem) {\n\t\t\t\tthis.cartItems.push({ ...item, quantity: 1 });\n\t\t\t} else {\n\t\t\t\tthis.increaseCartItem(id)\n\t\t\t}\n\t\t\tthis.changeLocalStorage();\n\t\t},\n\t\tremoveFromCart(id) {\n\t\t\tconst cartItem = this.cartItems.find(item => item.id_product === id);\n\t\t\tthis.cartItems.splice(cartItem, 1);\n\t\t\tthis.changeLocalStorage();\n\t\t},\n\t\tincreaseCartItem(id){\n\t\t\tthis.cartItems.find(item => item.id_product === id).quantity++;\n\t\t\tthis.changeLocalStorage();\n\t\t},\n\t\treduceCartItem(id) {\n\t\t\tlet cartItem = this.cartItems.find(item => item.id_product === id);\n\t\t\tif (cartItem.quantity === 1) {\n\t\t\t\tthis.removeFromCart(id);\n\t\t\t} else {\n\t\t\t\tcartItem.quantity--;\n\t\t\t}\n\t\t\tthis.changeLocalStorage();\n\t\t}\n\t},\n\tasync mounted() {\n\t\ttry {\n\t\t\tconst data = await fetch(`/api/products`);\n\t\t\tthis.items = await data.json();\t\n\t\t} catch (error) {\n\t\t\tthis.requestError = true;\n\t\t}\n\t\tif (!localStorage.getItem('cartData')) {\n\t\t\tconst cartData = await fetch(`/api/cart`);\n\t\t\tlet {contents} = await cartData.json();\n\t\t\tthis.cartItems = contents;\n\t\t\tlocalStorage.setItem('cartData', JSON.stringify(contents));\n\t\t} else {\n\t\t\tthis.cartItems = JSON.parse(localStorage.getItem('cartData'));\n\t\t}\n\t}\n}\n\n\nVue.createApp(App).mount('#app');\n\n//# sourceURL=webpack://server/./src/js/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;