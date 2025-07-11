/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/pattern.png */ \"./src/assets/pattern.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/circle.svg */ \"./src/assets/icons/circle.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/play_arrow.png */ \"./src/assets/play_arrow.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/pause.png */ \"./src/assets/pause.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --linear-buttons: linear-gradient(90deg, #B872FF, #144480);\r\n    --lilac: #B872FF;\r\n    --blue-deep: #01080E;\r\n    --blue-md: #041832;\r\n    --blue-royal: #144480;\r\n    --bottom-cards: rgba(255, 255, 255, 0.5);\r\n    --stopwatch-bg: rgba(20, 68, 128, 0.3);\r\n    --bottom-tasks: rgba(0, 244, 191, 0.4);\r\n    --check: #02CDA1;\r\n\r\n    --ff-mont: \"Montserrat\", sans-serif;\r\n\r\n    --text-bold: 600 1.125rem/150% var(--ff-mont);\r\n    --text-md: 1.125rem/150% var(--ff-mont);\r\n    --text-sm: 0.9375rem/150% var(--ff-mont);\r\n    --label-mont: .78rem/150% var(--ff-mont);\r\n    --label-button: bold .75rem/150% var(--ff-mont);\r\n\r\n    --ff: \"Unbounded\", sans-serif;\r\n\r\n    --heading-display: 7em var(--ff);\r\n    --heading-lg: 600 1.625rem/120% var(--ff);\r\n    --heading: 2.488em/120% var(--ff);\r\n    --heading-sm: 2.074em/120% var(--ff);\r\n    --subtitle-lg: 1.728em/120% var(--ff);\r\n    --subtitle: 1.44em/150% var(--ff);\r\n    --text-lg: 600 1.125rem/150% var(--ff);\r\n    --text: 1.125rem/150% var(--ff);\r\n    --label-bold: bold .75em/150% var(--ff);\r\n    --label: .78rem/150% var(--ff);\r\n\r\n    --px: 1.5rem;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nul[role=\"list\"] {\r\n    list-style: none;\r\n}\r\n\r\n[data-context=\"focus\"] {\r\n    --main-bg-color: linear-gradient(180deg, #8B1FF8 0%, #041832 48.44%, #01080E 100%);\r\n}\r\n\r\n[data-context=\"long-rest\"] {\r\n    --main-bg-color: linear-gradient(180deg, #0F725C 0%, #041832 48.44%, #01080E 100%);\r\n}\r\n\r\n[data-context=\"short-rest\"] {\r\n    --main-bg-color: linear-gradient(180deg, #1875E9 0%, #041832 48.44%, #01080E 100%);\r\n}\r\n\r\nhtml {\r\n    background: var(--main-bg-color);\r\n    min-height: 100vh;\r\n}\r\n\r\nbody {\r\n    color: #FFFFFF;\r\n    min-height: 100vh;\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat bottom/cover;\r\n    margin-inline: auto;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n\r\n#app {\r\n    & header {\r\n        justify-content: center;\r\n        padding-block: 2.5rem;\r\n\r\n        & figure {\r\n            width: max-content;\r\n        }\r\n    }\r\n\r\n    & section#banner {\r\n        & div {\r\n            margin-top: 1.5rem;\r\n            align-items: center;\r\n            margin-inline: auto;\r\n            gap: 4rem;\r\n\r\n            & h1 {\r\n                font: var(--heading-lg);\r\n                font-weight: 200;\r\n                max-width: 30rem;\r\n                margin-left: auto;\r\n\r\n\r\n                & strong {\r\n                    font-weight: 400;\r\n                }\r\n            }\r\n\r\n            & figure img {\r\n                width: 100%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n#card {\r\n    & div.time-card {\r\n        margin-top: 3rem;\r\n        background-color: var(--stopwatch-bg);\r\n        width: 19.5rem;\r\n        padding: 1.5rem 1rem;\r\n        border-radius: 1.4rem;\r\n        outline: 2px solid var(--blue-royal);\r\n        margin-inline: auto;\r\n\r\n        & ul {\r\n            gap: .5rem;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            & li {\r\n                font: var(--label-mont);\r\n                white-space: nowrap;\r\n                cursor: pointer;\r\n            }\r\n        }\r\n\r\n        & div#timer {\r\n            width: max-content;\r\n            font: 600 3.375rem var(--ff);\r\n            margin-block: 2rem;\r\n            margin-inline: auto;\r\n        }\r\n\r\n        & div#go {\r\n            justify-content: center;\r\n\r\n            & div:nth-child(1) {\r\n                justify-content: center;\r\n\r\n                & div.input {\r\n                    position: relative;\r\n                    width: max-content;\r\n                    background-color: var(--bottom-cards);\r\n                    width: 3.75rem;\r\n                    height: 2rem;\r\n                    border-radius: 10rem;\r\n                    transition: background-color 200ms ease-in-out;\r\n\r\n                    & input {\r\n                        position: absolute;\r\n                        width: 100%;\r\n                        height: 100%;\r\n                        opacity: 0;\r\n                        cursor: pointer;\r\n                    }\r\n\r\n                    &::before {\r\n                        content: \"\";\r\n                        background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center;\r\n                        width: 100%;\r\n                        height: 100%;\r\n                        position: absolute;\r\n                        transform: translateX(-.6rem);\r\n                        transition: transform 600ms ease;\r\n                    }\r\n\r\n                    &:has(input:checked) {\r\n                        background-color: #B872FF;\r\n\r\n                        &::before {\r\n                            transform: translateX(.6rem);\r\n                        }\r\n                    }\r\n                }\r\n\r\n                & p {\r\n                    font: var(--text-md);\r\n                }\r\n            }\r\n\r\n            & button {\r\n                all: unset;\r\n                width: 11.25rem;\r\n                background: var(--linear-buttons);\r\n                border-radius: 10rem;\r\n                padding-block: 0.45rem;\r\n                text-align: center;\r\n                font: var(--text-bold);\r\n                position: relative;\r\n                cursor: pointer;\r\n\r\n                &::after {\r\n                    content: '';\r\n                    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat;\r\n                    width: 1.8rem;\r\n                    height: 1.8rem;\r\n                    position: absolute;\r\n                    left: 1.6rem;\r\n                    top: .8rem;\r\n                }\r\n            }\r\n\r\n            & button.pause::after {\r\n                background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n#tasks {\r\n    & header {\r\n        margin-top: 2rem;\r\n        text-align: center;\r\n        border-bottom: 2px solid var(--blue-royal);\r\n        margin-bottom: 2.5rem;\r\n\r\n        & small {\r\n            font: var(--label-mont);\r\n            margin-bottom: 1rem;\r\n        }\r\n\r\n        & strong {\r\n            font: var(--text-bold);\r\n        }\r\n    }\r\n\r\n    &>div {\r\n        margin-bottom: 1.5rem;\r\n        align-items: center;\r\n\r\n        & h2 {\r\n            font: 1.2em/120% var(--ff);\r\n            white-space: nowrap;\r\n        }\r\n\r\n        & div.delete-tasks {\r\n            position: relative;\r\n\r\n            & button.more:hover+ul.more-list,\r\n            ul.more-list:hover {\r\n                display: grid;\r\n            }\r\n\r\n            & button.more {\r\n                background-color: transparent;\r\n                border: none;\r\n                outline: inherit;\r\n                margin-left: auto;\r\n                cursor: pointer;\r\n            }\r\n\r\n            & .more-list {\r\n                background-color: #1B293B;\r\n                width: max-content;\r\n                padding: 1rem;\r\n                border-radius: .6rem;\r\n                outline: 2px solid var(--blue-royal);\r\n                display: none;\r\n\r\n                position: absolute;\r\n                top: 100%;\r\n                right: 0;\r\n                z-index: 10;\r\n\r\n                & li {\r\n                    & button {\r\n                        background-color: transparent;\r\n                        width: 100%;\r\n                        border: none;\r\n                        color: white;\r\n                        font: var(--text-sm);\r\n                        cursor: pointer;\r\n                        align-items: center;\r\n                    }\r\n\r\n                    & img {\r\n                        height: 1.5rem;\r\n                        width: 1.5rem;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    & ul.list-tasks {\r\n        & .completed {\r\n            background-color: rgba(0, 244, 191, 0.4);\r\n        }\r\n\r\n        & li {\r\n            background-color: var(--bottom-cards);\r\n            justify-content: space-between;\r\n            padding: 1rem;\r\n            border-radius: .6rem;\r\n            cursor: pointer;\r\n            color: var(--blue-deep);\r\n            font: 600 1.125rem/150% var(--ff-mont);\r\n\r\n            & div {\r\n                align-items: center;\r\n            }\r\n\r\n            & img {\r\n                width: 2rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    & form {\r\n        background-color: var(--bottom-cards);\r\n        margin-top: .5rem;\r\n        border-radius: .6rem;\r\n        padding: .75rem 1rem;\r\n        display: none;\r\n\r\n        & div {\r\n            & legend {\r\n                font: var(--heading-sm);\r\n                color: var(--blue-deep);\r\n                margin-bottom: 2rem;\r\n            }\r\n\r\n            & textarea {\r\n                width: 100%;\r\n                border-radius: .4rem;\r\n                background-color: #98A0A8;\r\n                border: none;\r\n                padding: 1rem;\r\n                font: var(--text-md);\r\n                color: #373737;\r\n            }\r\n        }\r\n\r\n        & footer {\r\n            justify-content: space-between;\r\n            padding-block: 2rem .8rem;\r\n\r\n            & button {\r\n                background-color: transparent;\r\n                border: none;\r\n                align-items: center;\r\n                gap: .25rem;\r\n                font: var(--label-button);\r\n                cursor: pointer;\r\n            }\r\n\r\n            &>div {\r\n                gap: .4rem;\r\n\r\n                & button.saved {\r\n                    background-color: var(--blue-deep);\r\n                    color: white;\r\n                    padding: 0.3rem .8rem;\r\n                    border-radius: 2rem;\r\n                    gap: .6rem;\r\n\r\n                    & img {\r\n                        width: .8rem;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &>button {\r\n        align-items: center;\r\n        background-color: transparent;\r\n        border: none;\r\n        outline: 2px solid var(--lilac);\r\n        border-radius: 2rem;\r\n        color: var(--lilac);\r\n        margin-top: 2.5rem;\r\n        padding-block: 1.125rem;\r\n        justify-content: center;\r\n        cursor: pointer;\r\n\r\n        & img {\r\n            width: 1.5rem;\r\n        }\r\n    }\r\n}\r\n\r\nfooter.footer-credits {\r\n    background-color: #010B15;\r\n    margin-top: 5rem;\r\n    padding-block: 1.75rem;\r\n    text-align: center;\r\n\r\n    & p {\r\n        color: #B6B6B6;\r\n        font: var(--text-sm);\r\n    }\r\n}\r\n\r\n@media (width >=48rem) {\r\n    :root {\r\n        --heading-lg: bold 3.3125rem/120% var(--ff);\r\n        --px: 5.625rem;\r\n        --label-button: 600 1.125rem/150% var(--ff-mont);\r\n    }\r\n\r\n    #app {\r\n        & section#banner {\r\n            & div.display {\r\n                justify-content: center;\r\n\r\n                & h1 {\r\n                    font: var(--heading-lg);\r\n                    font-weight: 200;\r\n\r\n                    & strong {\r\n                        font-weight: bold;\r\n                    }\r\n                }\r\n\r\n                & figure {\r\n                    width: max-content;\r\n                    margin-inline: auto;\r\n\r\n                    &img {\r\n                        width: 25.85rem;\r\n                        margin-inline: auto;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    #card {\r\n        & div.time-card {\r\n            margin-top: 4rem;\r\n            padding: 1.5rem 5.5rem;\r\n            width: 36.75rem;\r\n\r\n            & ul {\r\n                gap: 1rem;\r\n\r\n                & li {\r\n                    font: var(--text);\r\n                }\r\n            }\r\n\r\n            & div#timer {\r\n                font: bold 7rem var(--ff);\r\n            }\r\n        }\r\n    }\r\n\r\n    #tasks {\r\n        & header {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: flex-start;\r\n            gap: 1.5rem;\r\n            text-align: start;\r\n\r\n            & small {\r\n                margin-bottom: unset;\r\n                width: 11.25rem;\r\n            }\r\n        }\r\n\r\n        & > div h2 {\r\n            font: 1.5em/120% var(--ff);\r\n        }\r\n\r\n        & form {\r\n            padding-bottom: 1.8rem;\r\n        }\r\n    }\r\n}\r\n\r\n@media (width >=80rem) {\r\n    main#app {\r\n        & section#banner {\r\n            & div.display {\r\n                margin-top: 5rem;\r\n                width: max-content;\r\n            }\r\n        }\r\n\r\n        & #banner figure img {\r\n            width: 20.85rem;\r\n        }\r\n    }\r\n\r\n    #card {\r\n        & div.time-card {\r\n            margin-top: 5rem;\r\n        }\r\n    }\r\n\r\n    #tasks form footer {\r\n        &>div {\r\n            gap: 1rem;\r\n\r\n            & button.saved {\r\n                background-color: var(--blue-deep);\r\n                color: white;\r\n                padding: 0.39rem 1rem;\r\n                border-radius: 2rem;\r\n                gap: .6rem;\r\n\r\n                & img {\r\n                    width: 1rem;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fokus/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/utilitys.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/utilitys.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.container {\r\n    --max-width: 19.5rem;\r\n    width: min(var(--max-width), 100% - var(--px) * 2);\r\n    margin-inline: auto;\r\n}\r\n\r\n.gap-8 {\r\n    gap: .5rem;\r\n}\r\n\r\n.gap-16 {\r\n    gap: 1rem;\r\n}\r\n\r\n.gap-24 {\r\n    gap: 1.5rem;\r\n}\r\n\r\n.text-bold {\r\n    font: var(--text-lg);\r\n}\r\n\r\n.type-selected {\r\n    font: var(--label-bold);\r\n    background-color: var(--blue-royal);\r\n    padding: .5rem;\r\n    border-radius: .6rem;\r\n}\r\n\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n}\r\n\r\n.display {\r\n    display: grid;\r\n}\r\n\r\n@media (width >=48rem) {\r\n    .type-selected {\r\n        font: var(--text-lg);\r\n    }\r\n\r\n    .container {\r\n        --max-width: 36.75rem;\r\n    }\r\n}\r\n\r\n@media (width >=80rem) {\r\n    .display {\r\n        display: flex;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fokus/./src/styles/utilitys.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://fokus/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://fokus/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://fokus/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://fokus/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://fokus/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://fokus/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://fokus/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://fokus/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://fokus/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/icons/circle.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/circle.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6a1d8eedf4e9e4d5765b.svg\";\n\n//# sourceURL=webpack://fokus/./src/assets/icons/circle.svg?");

/***/ }),

/***/ "./src/assets/pattern.png":
/*!********************************!*\
  !*** ./src/assets/pattern.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5bafe60be046a9803125.png\";\n\n//# sourceURL=webpack://fokus/./src/assets/pattern.png?");

/***/ }),

/***/ "./src/assets/pause.png":
/*!******************************!*\
  !*** ./src/assets/pause.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"44656b742823a3605eea.png\";\n\n//# sourceURL=webpack://fokus/./src/assets/pause.png?");

/***/ }),

/***/ "./src/assets/play_arrow.png":
/*!***********************************!*\
  !*** ./src/assets/play_arrow.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9fdc0505c5317045e2c9.png\";\n\n//# sourceURL=webpack://fokus/./src/assets/play_arrow.png?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_utilitys_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/utilitys.css */ \"./src/styles/utilitys.css\");\n/* harmony import */ var _modules_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/card.js */ \"./src/modules/card.js\");\n/* harmony import */ var _modules_card_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_card_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_submit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/submit.js */ \"./src/modules/submit.js\");\n/* harmony import */ var _modules_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/events.js */ \"./src/modules/events.js\");\n/* harmony import */ var _modules_music_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/music.js */ \"./src/modules/music.js\");\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://fokus/./src/main.js?");

/***/ }),

/***/ "./src/modules/card.js":
/*!*****************************!*\
  !*** ./src/modules/card.js ***!
  \*****************************/
/***/ (() => {

eval("var html = document.querySelector('html');\nvar optionSelected = document.querySelectorAll('.type-option');\nvar description = document.querySelector('.description');\nvar banner = document.querySelector('.banner-toggle');\nvar timer = document.getElementById('timer');\noptionSelected.forEach(function (type) {\n  type.addEventListener('click', function (event) {\n    optionSelected.forEach(function (option) {\n      option.classList.remove('type-selected');\n    });\n    event.target.classList.add('type-selected');\n    var typeSelected = event.target.classList[1];\n    toggleContext({\n      context: typeSelected\n    });\n  });\n});\nfunction toggleContext(_ref) {\n  var context = _ref.context;\n  html.setAttribute('data-context', context);\n  banner.setAttribute('src', \"src/assets/\".concat(context, \".png\"));\n  switch (context) {\n    case 'focus':\n      description.innerHTML = \"Otimize sua produtividade, <strong>mergulhe no que importa</strong>\";\n      timer.innerHTML = '25:00';\n      break;\n    case 'short-rest':\n      description.innerHTML = \"Que tal dar uma respirada? <strong>Fa\\xE7a uma pausa curta!</strong>\";\n      timer.innerHTML = '5:00';\n      break;\n    case 'long-rest':\n      description.innerHTML = \"Hora de voltar \\xE0 superf\\xEDcie. <strong>Fa\\xE7a uma pausa longa.</strong>\";\n      timer.innerHTML = '15:00';\n      break;\n    default:\n      break;\n  }\n}\n\n//# sourceURL=webpack://fokus/./src/modules/card.js?");

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleButton: () => (/* binding */ toggleButton)\n/* harmony export */ });\n/* harmony import */ var _submit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit.js */ \"./src/modules/submit.js\");\n\nvar toggleButton = document.getElementById('toggle-button');\nvar buttonDelete = document.querySelector('.button-delete');\nvar buttonCancel = document.querySelector('.button-cancel');\nvar addTask = document.querySelector('.add-task');\nbuttonDelete.addEventListener('click', function () {\n  _submit_js__WEBPACK_IMPORTED_MODULE_0__.textTask.value = '';\n});\nbuttonCancel.addEventListener('click', function () {\n  _submit_js__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'none';\n});\naddTask.addEventListener('click', function () {\n  _submit_js__WEBPACK_IMPORTED_MODULE_0__.form.style.display = 'block';\n});\ntoggleButton.addEventListener('click', function () {\n  toggleButton.classList.toggle('pause');\n  if (toggleButton.classList.contains('pause')) {\n    toggleButton.textContent = 'Pausar';\n  } else {\n    toggleButton.textContent = 'Começar';\n  }\n});\n\n//# sourceURL=webpack://fokus/./src/modules/events.js?");

/***/ }),

/***/ "./src/modules/music.js":
/*!******************************!*\
  !*** ./src/modules/music.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   musicFinally: () => (/* binding */ musicFinally)\n/* harmony export */ });\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ \"./src/modules/events.js\");\n/* harmony import */ var _sons_luna_rise_part_one_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sons/luna-rise-part-one.mp3 */ \"./src/sons/luna-rise-part-one.mp3\");\n/* harmony import */ var _sons_play_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sons/play.wav */ \"./src/sons/play.wav\");\n/* harmony import */ var _sons_pause_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sons/pause.mp3 */ \"./src/sons/pause.mp3\");\n/* harmony import */ var _sons_beep_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sons/beep.mp3 */ \"./src/sons/beep.mp3\");\n\n\n\n\n\nvar musicCheck = document.querySelector('.music-check');\nvar music = new Audio(_sons_luna_rise_part_one_mp3__WEBPACK_IMPORTED_MODULE_1__);\nmusic.loop = true;\nvar musicPlay = new Audio(_sons_play_wav__WEBPACK_IMPORTED_MODULE_2__);\nvar musicPause = new Audio(_sons_pause_mp3__WEBPACK_IMPORTED_MODULE_3__);\nvar musicBeep = new Audio(_sons_beep_mp3__WEBPACK_IMPORTED_MODULE_4__);\n\n// musicCheck.addEventListener('change', () => {\n//     if(music.paused) {\n//         music.play()\n//     } else {\n//         music.pause()\n//     }\n// })\n\nmusicCheck.addEventListener('change', function () {\n  if (music.paused) {\n    music.play();\n  } else {\n    music.pause();\n  }\n});\n_events_js__WEBPACK_IMPORTED_MODULE_0__.toggleButton.addEventListener('click', function () {\n  if (_events_js__WEBPACK_IMPORTED_MODULE_0__.toggleButton.classList.contains('pause')) {\n    musicPause.pause();\n    musicPlay.play();\n  } else {\n    musicPause.play();\n    musicPlay.pause();\n  }\n});\nfunction musicFinally() {\n  musicBeep.play();\n}\n\n//# sourceURL=webpack://fokus/./src/modules/music.js?");

/***/ }),

/***/ "./src/modules/show-task.js":
/*!**********************************!*\
  !*** ./src/modules/show-task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showTask: () => (/* binding */ showTask)\n/* harmony export */ });\nvar inProgress = document.querySelector('.in-progress');\nfunction showTask(_ref) {\n  var task = _ref.task;\n  var li = document.createElement('li');\n  li.classList.add('flex');\n  li.classList.add('item-list');\n  var div = document.createElement('div');\n  div.classList.add('flex');\n  div.classList.add('gap-16');\n  var taskCreate = document.createElement('p');\n  taskCreate.textContent = task;\n  var imgCheck = document.createElement('img');\n  imgCheck.setAttribute('src', 'src/assets/icons/check-default.svg');\n  var imgEdit = document.createElement('img');\n  imgEdit.setAttribute('src', 'src/assets/icons/edit.png');\n  div.append(imgCheck, taskCreate);\n  li.append(div, imgEdit);\n  li.addEventListener('click', function () {\n    document.querySelectorAll('.item-list').forEach(function (option) {\n      option.style.border = 'none';\n    });\n    li.style.border = '2px solid white';\n    inProgress.textContent = taskCreate.textContent;\n  });\n  return li;\n}\n\n//# sourceURL=webpack://fokus/./src/modules/show-task.js?");

/***/ }),

/***/ "./src/modules/submit.js":
/*!*******************************!*\
  !*** ./src/modules/submit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   form: () => (/* binding */ form),\n/* harmony export */   listTasks: () => (/* binding */ listTasks),\n/* harmony export */   textTask: () => (/* binding */ textTask)\n/* harmony export */ });\n/* harmony import */ var _show_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-task.js */ \"./src/modules/show-task.js\");\n\nvar form = document.querySelector('form');\nvar listTasks = document.querySelector('.list-tasks');\nvar textTask = document.getElementById('task');\nform.onsubmit = function (event) {\n  event.preventDefault();\n  var taskValue = textTask.value;\n  textTask.value = '';\n  var taskCreate = (0,_show_task_js__WEBPACK_IMPORTED_MODULE_0__.showTask)({\n    task: taskValue\n  });\n  listTasks.append(taskCreate);\n};\n\n//# sourceURL=webpack://fokus/./src/modules/submit.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   regressive: () => (/* binding */ regressive),\n/* harmony export */   showTime: () => (/* binding */ showTime)\n/* harmony export */ });\n/* harmony import */ var _music_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music.js */ \"./src/modules/music.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ \"./src/modules/events.js\");\n\n\nvar screenTime = document.getElementById('timer');\nvar idInterval = null;\nvar countdown;\nfunction regressive() {\n  countdown -= 1;\n  console.log(countdown);\n  if (countdown <= 0) {\n    // musicFinally()\n    alert('Parabéns, você finalizou sua tarefa!');\n    reset();\n    return;\n  }\n  return true;\n}\n_events_js__WEBPACK_IMPORTED_MODULE_1__.toggleButton.addEventListener('click', init);\nfunction init() {\n  if (idInterval) {\n    reset();\n    return;\n  }\n  idInterval = setInterval(function () {\n    regressive();\n  }, 1000);\n}\nfunction reset() {\n  clearInterval(idInterval);\n  idInterval = null;\n}\nfunction showTime(_ref) {\n  var time = _ref.time;\n  var timeValue = time;\n  screenTime.innerHTML = timeValue;\n}\n\n//# sourceURL=webpack://fokus/./src/modules/timer.js?");

/***/ }),

/***/ "./src/sons/beep.mp3":
/*!***************************!*\
  !*** ./src/sons/beep.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/sons/beep.mp3\";\n\n//# sourceURL=webpack://fokus/./src/sons/beep.mp3?");

/***/ }),

/***/ "./src/sons/luna-rise-part-one.mp3":
/*!*****************************************!*\
  !*** ./src/sons/luna-rise-part-one.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/sons/luna-rise-part-one.mp3\";\n\n//# sourceURL=webpack://fokus/./src/sons/luna-rise-part-one.mp3?");

/***/ }),

/***/ "./src/sons/pause.mp3":
/*!****************************!*\
  !*** ./src/sons/pause.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/sons/pause.mp3\";\n\n//# sourceURL=webpack://fokus/./src/sons/pause.mp3?");

/***/ }),

/***/ "./src/sons/play.wav":
/*!***************************!*\
  !*** ./src/sons/play.wav ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/sons/play.wav\";\n\n//# sourceURL=webpack://fokus/./src/sons/play.wav?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://fokus/./src/styles/main.css?");

/***/ }),

/***/ "./src/styles/utilitys.css":
/*!*********************************!*\
  !*** ./src/styles/utilitys.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_utilitys_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./utilitys.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/utilitys.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_utilitys_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_utilitys_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_utilitys_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_utilitys_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://fokus/./src/styles/utilitys.css?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;