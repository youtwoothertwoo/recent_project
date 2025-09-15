require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesLive/live/live"],{

/***/ 863:
/*!*****************************************************************!*\
  !*** D:/working/舒服康/main.js?{"page":"pagesLive%2Flive%2Flive"} ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _live = _interopRequireDefault(__webpack_require__(/*! ./pagesLive/live/live.nvue */ 864));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_live.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 864:
/*!***********************************************!*\
  !*** D:/working/舒服康/pagesLive/live/live.nvue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _live_nvue_vue_type_template_id_4215c3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live.nvue?vue&type=template&id=4215c3cc&scoped=true& */ 865);
/* harmony import */ var _live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live.nvue?vue&type=script&lang=js& */ 867);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _live_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live.nvue?vue&type=style&index=0&lang=css& */ 871);
/* harmony import */ var _live_nvue_vue_type_style_index_1_id_4215c3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./live.nvue?vue&type=style&index=1&id=4215c3cc&scoped=true&lang=css& */ 873);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs






/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _live_nvue_vue_type_template_id_4215c3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _live_nvue_vue_type_template_id_4215c3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4215c3cc",
  null,
  false,
  _live_nvue_vue_type_template_id_4215c3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesLive/live/live.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 865:
/*!******************************************************************************************!*\
  !*** D:/working/舒服康/pagesLive/live/live.nvue?vue&type=template&id=4215c3cc&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_template_id_4215c3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./live.nvue?vue&type=template&id=4215c3cc&scoped=true& */ 866);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_template_id_4215c3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_template_id_4215c3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_template_id_4215c3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_template_id_4215c3cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 866:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/working/舒服康/pagesLive/live/live.nvue?vue&type=template&id=4215c3cc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 867:
/*!************************************************************************!*\
  !*** D:/working/舒服康/pagesLive/live/live.nvue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./live.nvue?vue&type=script&lang=js& */ 868);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 868:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/working/舒服康/pagesLive/live/live.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _utils = _interopRequireDefault(__webpack_require__(/*! @/common/utils.js */ 30));
var _emoji = _interopRequireDefault(__webpack_require__(/*! ./live-part/emoji.js */ 869));
var _permission = _interopRequireDefault(__webpack_require__(/*! @/common/permission.js */ 870));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Prefix_RTC = 'io.agora.rtc.';
var Prefix_RTM = 'io.agora.rtm.';
var liveCart = function liveCart() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/liveCart */ "pagesLive/live/live-part/liveCart").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/liveCart */ 1160));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var liveGift = function liveGift() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/liveGift */ "pagesLive/live/live-part/liveGift").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/liveGift */ 1167));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var liveMsg = function liveMsg() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/liveMsg */ "pagesLive/live/live-part/liveMsg").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/liveMsg */ 1174));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var livePlan = function livePlan() {
  Promise.all(/*! require.ensure | pagesLive/live/live-part/livePlan */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pagesLive/live/live-part/livePlan")]).then((function () {
    return resolve(__webpack_require__(/*! ./live-part/livePlan */ 1181));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var liveOrder = function liveOrder() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/liveOrder */ "pagesLive/live/live-part/liveOrder").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/liveOrder */ 1188));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var liveAnchor = function liveAnchor() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/liveAnchor */ "pagesLive/live/live-part/liveAnchor").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/liveAnchor */ 1195));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var liveMore = function liveMore() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/liveMore */ "pagesLive/live/live-part/liveMore").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/liveMore */ 1202));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var liveShare = function liveShare() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/liveShare */ "pagesLive/live/live-part/liveShare").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/liveShare */ 1209));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var liveRank = function liveRank() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/liveRank */ "pagesLive/live/live-part/liveRank").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/liveRank */ 1216));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Likes = function Likes() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/likes/index */ "pagesLive/live/live-part/likes/index").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/likes/index */ 1223));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var share = function share() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/dialog/share */ "pagesLive/live/live-part/dialog/share").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/dialog/share */ 1230));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Countdown = function Countdown() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/live-part/countdown_nvue */ "pagesLive/live/live-part/countdown_nvue").then((function () {
    return resolve(__webpack_require__(/*! ./live-part/countdown_nvue */ 1237));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var AppShare = function AppShare() {
  Promise.all(/*! require.ensure | pagesLive/live/live-part/app-nvue-share */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pagesLive/live/live-part/app-nvue-share")]).then((function () {
    return resolve(__webpack_require__(/*! ./live-part/app-nvue-share */ 1244));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var preview = function preview() {
  __webpack_require__.e(/*! require.ensure | pagesLive/live/preview */ "pagesLive/live/preview").then((function () {
    return resolve(__webpack_require__(/*! ./preview.nvue */ 1251));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var timer = null;
var _default = {
  components: {
    liveCart: liveCart,
    liveGift: liveGift,
    // liveRoom,
    liveMsg: liveMsg,
    livePlan: livePlan,
    liveOrder: liveOrder,
    liveAnchor: liveAnchor,
    liveMore: liveMore,
    liveShare: liveShare,
    liveRank: liveRank,
    Likes: Likes,
    share: share,
    Countdown: Countdown,
    AppShare: AppShare,
    preview: preview
  },
  data: function data() {
    var _ref;
    return _ref = {
      statusBarH: '',
      headerBarH: '',
      winHeight: '',
      winWidth: '',
      videoIndex: 0,
      clickNum: 0,
      //记录点击次数
      giftipShowist: [],
      sence: '',
      //场景，create:主播，观众
      room_id: 0,
      //房间id,
      shop_supplier_id: 0,
      role: '',
      loading: true,
      /*消息列表*/
      commentsList: [],
      maxCommentSize: 100,
      roomDetail: {
        supplier: {
          shop_supplier_id: 0
        }
      },
      giftName: '',
      /*礼物数*/
      gift_num: 0,
      hasFollow: false,
      giftList: [],
      //是否是主播
      isCaster: false,
      // 当前用户
      user: {},
      // 礼物信息
      giftInfo: {
        nickName: '',
        avatarUrl: '',
        giftName: '',
        giftImage: ''
      },
      /*当前讲解商品ID*/
      explain_product_id: '',
      /*当前讲解商品*/
      explain_product: null,
      num: 0,
      digg_num: 0,
      digg_times: 5,
      digg_timer: null,
      is_replay: false,
      replay_url: '',
      is_start: false,
      qrcode: null,
      toMsg: '',
      emojiData: [],
      /*倒计时配置*/
      countdownConfig: {
        /*开始时间*/
        startstamp: 0,
        /*结束时间*/
        endstamp: 0,
        /*标题*/
        title: ''
      },
      /*app分享*/
      isAppShare: false,
      appParams: {
        title: '',
        summary: '',
        path: ''
      },
      zOrderMediaOverlay: false,
      zOrderOnTop: false,
      renderMode: 1,
      //Hidden= 1, Fit = 2 ,Adaptive = 3, FILL = 4
      mirrorMode: 0,
      //Auto = 0, Enabled = 1, Disabled = 2
      engine_load: false
    }, (0, _defineProperty2.default)(_ref, "isCaster", false), (0, _defineProperty2.default)(_ref, "whiteness", 5), (0, _defineProperty2.default)(_ref, "beauty", 5), (0, _defineProperty2.default)(_ref, "userInfo", {}), (0, _defineProperty2.default)(_ref, "channel", ''), (0, _defineProperty2.default)(_ref, "view_uid", 0), (0, _defineProperty2.default)(_ref, "agoraView", null), (0, _defineProperty2.default)(_ref, "agoraRtm", null), (0, _defineProperty2.default)(_ref, "platform", ''), (0, _defineProperty2.default)(_ref, "agoraAppId", ''), (0, _defineProperty2.default)(_ref, "appId", ''), (0, _defineProperty2.default)(_ref, "uid", ''), (0, _defineProperty2.default)(_ref, "liveChannelId", ''), (0, _defineProperty2.default)(_ref, "token", ''), (0, _defineProperty2.default)(_ref, "nickName", ''), (0, _defineProperty2.default)(_ref, "beautyOptions", {
      enabled: true,
      contrastLevel: 1,
      lightening: 0.6,
      smoothness: 0.5,
      redness: 0.1,
      sharpness: 0.3
    }), (0, _defineProperty2.default)(_ref, "is_preview", false), (0, _defineProperty2.default)(_ref, "isExplain", false), (0, _defineProperty2.default)(_ref, "explain", {}), (0, _defineProperty2.default)(_ref, "online_count", 0), (0, _defineProperty2.default)(_ref, "intervalTime", null), _ref;
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {
    console.log('------live created');
    this.platform = uni.getSystemInfoSync().platform;
    var _sH = uni.getSystemInfoSync().statusBarHeight;
    var _hH = _sH + 50;
    var _wH = uni.getSystemInfoSync().windowHeight;
    var _wW = uni.getSystemInfoSync().windowWidth;
    this.statusBarH = "".concat(_sH, "px");
    this.headerBarH = "".concat(_hH, "px");
    this.winHeight = "".concat(_wH, "px");
    this.winWidth = "".concat(_wW, "px");
  },
  onLoad: function onLoad(options) {
    uni.setKeepScreenOn({
      keepScreenOn: true
    });
    var scene = _utils.default.getSceneData(options);
    this.room_id = options.room_id ? options.room_id : scene.rid;
    this.role = options.sence == 'create' ? 'broadcaster' : 'audience';
    // if (this.role == 'broadcaster') {
    // 	this.isCaster = true;
    // }
  },
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // this.is_start && this.$refs.liveRoom.clear();
  },
  onShow: function onShow() {
    // if (this.$refs.liveRoom) {
    // 	this.$refs.liveRoom.show();
    // }
  },
  mounted: function mounted() {
    var self = this;
    console.log('-------agora-sdk---------------' + uni.getSystemInfoSync().platform);
    if (self.platform === 'android') {
      _permission.default.requestAndroidPermission('android.permission.RECORD_AUDIO');
      _permission.default.requestAndroidPermission('android.permission.CAMERA');
      self.agoraView = self.$refs.agoraView;
      self.agoraRtm = self.$refs.agoraRtm;
    } else if (self.platform === 'ios') {
      //permision.judgeIosPermission('camera');
      //permision.judgeIosPermission('record');
      self.agoraView = agoraRtc;
      self.agoraRtm = agoraRtm;
    }
    self.uid = self.getRequest().getUserId();
    this.getRoomInfo();
  },
  methods: {
    /*请求对象*/getRequest: function getRequest() {
      var self = this;
      return self;
    },
    /*获取直播间信息*/getRoomInfo: function getRoomInfo() {
      var self = this;
      uni.showLoading({
        title: '正在进入'
      });
      self.getRequest()._post('plus.live.room/detail', {
        room_id: self.room_id
      }, function (res) {
        console.log('获取房间');
        console.log(res.data);
        uni.hideLoading();
        self.loading = false;
        self.roomDetail = res.data.model;
        self.giftName = res.data.gift_name;
        self.hasFollow = res.data.hasFollow;
        self.digg_num = res.data.model.digg_num;
        self.countdownConfig.endstamp = self.roomDetail.start_time;
        self.user = res.data.user;
        self.isCaster = res.data.isCaster;
        // self.isCaster = false;
        if (self.isCaster) {
          self.view_uid = 0;
        } else {
          self.view_uid = res.data.model.user_id;
        }
        self.liveRoomStart(self.roomDetail, self.user);
        self.$nextTick(function () {
          self.initProduct();
        });
      });
    },
    liveRoomStart: function liveRoomStart(roomDetail, userInfo) {
      var self = this;
      self.roomDetail = roomDetail;
      self.userInfo = userInfo;
      self.channel = 'channel_' + roomDetail.supplier.shop_supplier_id; //shopSupplierId
      self.liveChannelId = 'channel_' + roomDetail.supplier.shop_supplier_id;
      if (self.isCaster) {
        var whiteness = uni.getStorageSync('whiteness');
        if (whiteness) {
          self.whiteness = whiteness;
        }
        var beauty = uni.getStorageSync('beauty');
        if (beauty) {
          self.beauty = beauty;
        }
      } else {
        //观众
        console.log('观众进入');
      }
      self.loginRoom();
    },
    loginRoom: function loginRoom() {
      var self = this;
      uni.showLoading({
        title: '正在进入'
      });
      self.getRequest()._get('plus.live.agora.api/login', {
        room_id: self.roomDetail.room_id,
        channel: self.channel
      }, function (res) {
        console.log('进入房间');
        console.log(res.data);
        self.appId = res.data.appId;
        self.agoraAppId = res.data.appId;
        self.token = res.data.userSign;
        self.nickName = res.data.user.nickName;
        if (self.roomDetail.live_status == 0) {
          self.getRequest().showError('直播审核中', function () {
            uni.navigateBack();
          });
          return;
        }
        // 判断是否是主播
        if (self.isCaster) {
          if (self.uid != self.roomDetail.user_id) {
            self.getRequest().showError('你不是此房间主播', function () {
              uni.navigateBack();
            });
            return;
          }
        } else {
          // 直播未开始
          if (self.roomDetail.live_status == 102) {
            self.getRequest().showError('直播未开始', function () {
              uni.navigateBack();
            });
            return;
          }
        }
        // 已结束或已过期
        if (self.roomDetail.live_status == 103 || self.roomDetail.live_status == 107) {
          self.getRequest().showError('直播已结束', function () {
            uni.navigateBack();
          });
          return;
        }
        self.initRoom();
        self.agoraView.create({
          appid: self.agoraAppId
        }, function (res) {
          self.engine_load = true;
          self.showLike = true;
          console.log('create---------');
          // 预览
          if (self.isCaster) {
            self.is_preview = true;
            console.log(self.roomDetail.live_status);
            // self.startPreview();
            // 如果未开始，则预览，已开始直接进入房间
            if (self.roomDetail.live_status == 102) {
              self.startPreview();
            } else {
              self.openLive();
            }
          } else {
            // 进入房间
            self.enterRoom();
          }
          self.addRtcListeners();
        });
      });
    },
    /* 关闭预览 */closePreview: function closePreview() {
      uni.navigateBack();
      // this.is_preview = false;
    },
    /* 摄像头切换 */switchCamera: function switchCamera() {
      var self = this;
      self.agoraView.switchCamera(function (res) {
        console.log('--------------------switchCamera-------------------');
      });
    },
    /* 美颜设置 */setBeautyOptions: function setBeautyOptions(e) {
      console.log('setBeautyOptions' + e);
      if (e == 'set') {
        var lightening = uni.getStorageSync('lightening');
        if (lightening) {
          this.beautyOptions.lightening = lightening;
        } else {
          uni.setStorageSync('smoothness', this.beautyOptions.lightening);
        }
        var smoothness = uni.getStorageSync('smoothness');
        if (smoothness) {
          this.beautyOptions.smoothness = smoothness;
        } else {
          uni.setStorageSync('smoothness', this.beautyOptions.smoothness);
        }
        var redness = uni.getStorageSync('redness');
        if (redness) {
          this.beautyOptions.redness = redness;
        } else {
          uni.setStorageSync('redness', this.beautyOptions.redness);
        }
        var sharpness = uni.getStorageSync('sharpness');
        if (sharpness) {
          this.beautyOptions.sharpness = sharpness;
        } else {
          uni.setStorageSync('sharpness', this.beautyOptions.sharpness);
        }
      } else {
        // 重置
        this.beautyOptions.lightening = 0.6;
        uni.setStorageSync('lightening', this.beautyOptions.lightening);
        this.beautyOptions.smoothness = 0.5;
        uni.setStorageSync('smoothness', this.beautyOptions.smoothness);
        this.beautyOptions.redness = 0.1;
        uni.setStorageSync('redness', this.beautyOptions.redness);
        this.beautyOptions.sharpness = 0.3;
        uni.setStorageSync('sharpness', this.beautyOptions.sharpness);
      }
      this.agoraView.setBeautyEffectOptions(this.beautyOptions);
    },
    setDefinition: function setDefinition(e) {
      console.log('setDefinition=' + e);
      var self = this;
      uni.setStorageSync('vd', e);
      self.agoraView.setVideoEncoderConfiguration({
        vd: e
      }, function (res) {
        console.log('setVideoEncoderConfiguration');
      });
    },
    startPreview: function startPreview() {
      var self = this;
      self.agoraView.enableVideo(function (res) {});
      if (self.platform == 'android') {
        self.agoraView.setupLocalVideo({
          channelName: self.liveChannelId,
          uid: self.uid
        }, function (res) {
          console.log('setupLocalVideo');
        });
      }
      self.setBeautyOptions();
      // 清晰度
      var vd = uni.getStorageSync('vd');
      if (!vd) {
        vd = 0;
      }
      self.setDefinition(vd);
      self.agoraView.startPreview(function (res) {
        console.log('--------------------startPreview-------------------');
      });
    },
    // 房主登录
    rtmLogin: function rtmLogin() {
      var self = this;
      var agoraRtm = self.agoraRtm;
      agoraRtm.createInstance({
        appid: self.agoraAppId
      }, function (res) {
        console.log('-------------rtmLogin createInstance--------');
      });
      self.addRtmListeners();
      self.getRequest()._get('plus.live.agora.api/rtmToken', {
        room_id: self.roomDetail.room_id
      }, function (res) {
        console.log('-------------rtmToken--------');
        console.log(res);
        agoraRtm.login({
          token: res.data.userSign,
          uid: '' + self.uid
        }, function (res) {
          console.log('-------------agoraRtm login--------');
        });
      }, function (err) {
        console.log(err);
      });
    },
    addRtmListeners: function addRtmListeners() {
      var self = this;
      globalEvent.addEventListener(Prefix_RTM + 'ConnectionStateChanged', function (e) {
        if (e.data[0] == 3 && e.data[1] == 2) {
          self.onLoginSuccess();
        }
      });
      globalEvent.addEventListener(Prefix_RTM + 'MessageReceived', function (e) {
        self.showMsg(e.data[0]);
      });
    },
    // ios事件注册
    addRtcListeners: function addRtcListeners() {
      var self = this;
      globalEvent.addEventListener(Prefix_RTC + 'JoinChannelSuccess', function (e) {
        self.onJoinChannelSuccess(e);
      });
      globalEvent.addEventListener(Prefix_RTC + 'LeaveChannel', function (e) {
        self.onLeaveChannel(e);
      });
      globalEvent.addEventListener(Prefix_RTC + 'RemoteVideoStateChanged', function (e) {
        self.onRemoteVideoStateChanged(e);
      });
      globalEvent.addEventListener(Prefix_RTC + 'UserJoined', function (e) {
        self.onUserJoined(e);
      });
      globalEvent.addEventListener(Prefix_RTC + 'UserOffline', function (e) {
        self.onUserOffline(e);
      });
    },
    enterRoom: function enterRoom() {
      var self = this;
      self.agoraView.setChannelProfile(1, function (res) {});
      self.agoraView.setClientRole(2, function (res) {});
      self.agoraView.enableAudio(function (res) {});
      self.agoraView.enableVideo(function (res) {});
      if (self.platform == 'android') {
        self.agoraView.setupRemoteVideo({
          channelName: self.liveChannelId,
          uid: self.view_uid
        }, function (res) {});
      }
      self.agoraView.joinChannel({
        token: self.token,
        channelName: self.liveChannelId,
        uid: self.uid
      }, function (res) {
        console.log('--------------------joinChannel enterRoom-------------------');
      }, function (err) {
        console.log('--------------------joinChannel enterRoom-------------------');
      });
    },
    openLive: function openLive() {
      var self = this;
      var agoraView = self.agoraView;
      // 可以开启成功后关闭
      if (self.is_preview) {
        self.is_preview = false;
        agoraView.stopPreview(function (res) {
          console.log('--------------------stopPreview-------------------');
        });
      }
      agoraView.setChannelProfile(1, function (res) {});
      agoraView.setClientRole(1, function (res) {});
      agoraView.enableAudio(function (res) {});
      agoraView.enableVideo(function (res) {});
      // 是否启用视频
      if (self.platform == 'android') {
        agoraView.setupLocalVideo({
          channelName: self.liveChannelId,
          uid: self.uid
        }, function (res) {
          console.log('setupLocalVideo');
        });
      }
      agoraView.joinChannel({
        token: self.token,
        channelName: self.liveChannelId,
        uid: self.uid
      }, function (res) {
        console.log('--------------------joinChannel-------------------');
        console.log();
      });
    },
    initRoom: function initRoom() {
      this.getGift();
      this.initemoji();
    },
    /*显示讲解的商品*/showProduct: function showProduct(product_id) {
      var self = this;
      self.explain_product_id = product_id;
      self.getRequest()._post('plus.live.room/product_detail', {
        product_id: self.explain_product_id
      }, function (res) {
        self.explain_product = res.data.model;
        console.log(self.explain_product);
      });
    },
    /*获取直播间信息*/synRoomInfo: function synRoomInfo(e) {
      var self = this;
      self.getRequest()._post('plus.live.room/syn_room', {
        room_id: self.roomDetail.room_id
      }, function (res) {
        // 发送通知
        var msg = {
          type: 'views',
          views: res.data.model.views,
          digg_num: res.data.model.digg_num
        };
        self.sendMsg(JSON.stringify(msg));
      });
    },
    initProduct: function initProduct() {
      if (this.roomDetail.currentProduct) {
        this.explain_product = {
          product_image: this.roomDetail.currentProduct.image[0].file_path,
          product_price: this.roomDetail.currentProduct.product_price,
          product_id: this.roomDetail.currentProduct.product_id
        };
      }
      console.log('--------explain_product-------------');
      console.log(this.explain_product);
    },
    /*跳转商品详情*/gotoProduct: function gotoProduct(e) {
      var url = '/pages/product/detail/detail?product_id=' + this.explain_product.product_id + '&room_id=' + this.room_id;
      uni.navigateTo({
        url: url
      });
    },
    handleSlider: function handleSlider(e) {
      var curIndex = e.detail.current;
      if (this.videoIndex >= 0) {
        this.videoContextList[this.videoIndex].pause();
        this.videoContextList[this.videoIndex].seek(0);
      }
      if (curIndex === this.videoIndex + 1) {
        this.videoContextList[this.videoIndex + 1].play();
      } else if (curIndex === this.videoIndex - 1) {
        this.videoContextList[this.videoIndex - 1].play();
      }
      this.videoIndex = curIndex;
    },
    play: function play(index) {
      this.videoContextList[index].play();
    },
    pause: function pause(index) {
      this.videoContextList[index].pause();
    },
    handleAttention: function handleAttention(index) {
      var vlist = this.vlist;
      vlist[index].attention = !vlist[index].attention;
      this.vlist = vlist;
    },
    handleLiveCart: function handleLiveCart() {
      this.$refs.liveCart.show();
    },
    handleLiveGift: function handleLiveGift() {
      this.$refs.liveGift.show();
    },
    handleRollMsg: function handleRollMsg() {
      this.$refs.liveMsg.show();
    },
    sendChannelMsg: function sendChannelMsg(e) {
      var msg = {
        type: 'text',
        msg: e,
        registerLevel: this.registerLevel,
        nickName: this.nickName
      };
      this.sendMsg(msg);
    },
    closeMsg: function closeMsg(e) {
      var self = this;
      var msg = {
        type: 'text',
        msg: e,
        nickName: self.user.nickName
      };
      self.sendMsg(JSON.stringify(msg));
    },
    removeComment: function removeComment() {
      var self = this;
      var len = self.commentsList.length - self.maxCommentSize;
      if (len > 0) {
        for (var i = 0; i < len; i++) {
          self.commentsList.shift();
        }
      }
      self.$nextTick(function () {
        self.toMsg = 'comment' + (self.commentsList.length - 1);
      });
    },
    /*获取礼物类别*/getGift: function getGift() {
      var self = this;
      self.getRequest()._get('plus.live.room/gift', {}, function (res) {
        console.log('====gift=======');
        console.log(res);
        var list = [],
          min = [],
          num = 0;
        for (var i = 0; i < res.data.list.length; i++) {
          num++;
          min.push(res.data.list[i]);
          if (num >= 8) {
            list.push(min);
            min = [];
            num = 0;
          }
        }
        if (min.length > 0) {
          list.push(min);
        }
        self.giftList = list;
        console.log(self.giftList);
      });
    },
    openPlan: function openPlan() {
      this.$refs.livePlan.show();
    },
    closePlan: function closePlan() {
      this.$refs.liveGift.show();
    },
    openOrder: function openOrder() {
      this.$refs.liveOrder.show();
    },
    closeOrder: function closeOrder() {
      this.$refs.liveCart.show();
    },
    setProduct: function setProduct(e) {
      console.log('explainProduct');
      console.log(e);
      if (e == null) {
        this.isExplain = false;
        this.explain = {};
      } else {
        this.isExplain = true;
        this.explain = e;
      }
      var msg = {
        type: 'explain',
        explain: this.explain,
        isExplain: this.isExplain
      };
      this.sendMsg(msg);
    },
    sendMsg: function sendMsg(msg) {
      var self = this;
      // 发送去购买消息
      var agoraRtm = self.agoraRtm;
      var message = JSON.stringify(msg);
      agoraRtm.sendMessage({
        message: message
      }, function (res) {
        console.log(message);
        self.showMsg(message);
      }, function (fail) {
        console.log(fail);
      });
    },
    digg: function digg() {
      console.log('点击屏幕');
      if (this.isCaster) {
        return;
      }
      var self = this;
      self.$refs.likes.handleClick();
      console.log('----------digg---------------');
      self.getRequest()._post('plus.live.room/digg', {
        room_id: self.room_id,
        num: 1
      }, function (res) {
        console.log('----------digg---------------');
        var digg_num = res.data;
        var msg = {
          type: 'digg',
          digg_num: digg_num
        };
        self.sendMsg(msg);
      });
    },
    showMsg: function showMsg(msg) {
      var self = this;
      var json = JSON.parse(msg);
      console.log(json);
      // 文本消息
      if (json.type == 'text' || json.type == 'buy' || json.type == 'join' || json.type == 'enter') {
        self.commentsList.push(json);
        self.removeComment();
      } else if (json.type == 'digg') {
        console.log('digg');
        // 点赞
        self.digg_num = json.digg_num.digg_num;
        console.log(self.digg_num);
      } else if (json.type == 'banSay' && self.uid == json.user_id) {
        self.isbanSay = true;
        // 禁言
        uni.showToast({
          title: '您已被禁言',
          icon: 'none'
        });
        return;
      } else if (json.type == 'gift_num') {
        self.roomDetail.gift_num = json.msg;
      } else if (json.type == 'gift') {
        self.giftInfo = {
          nickName: json.nickName,
          avatarUrl: json.avatarUrl,
          giftName: self.getGiftName(json.msg),
          giftImage: self.getGiftImage(json.msg)
        };
        setTimeout(function () {
          self.giftInfo = {
            nickName: ''
          };
        }, 5000);
      } else if (json.type == 'kickPerson' && self.uid == json.user_id) {
        // 踢出
        uni.showToast({
          title: '您已被踢出直播间',
          icon: 'none'
        });
        self.closeLive();
      } else if (json.type == 'openSay' && self.uid == json.user_id) {
        // 踢出
        uni.showToast({
          title: '您已被取消禁言',
          icon: 'none'
        });
        self.isbanSay = false;
        return;
      } else if (json.type == 'openPerson' && self.uid == json.user_id) {
        // 踢出
        uni.showToast({
          title: '您已被取消踢出直播间',
          icon: 'none'
        });
      } else if (json.type == 'explain') {
        // 显示讲解
        this.explain = json.explain;
        this.isExplain = json.isExplain;
        this.showProduct(json.explain);
        this.showLike = false;
        this.showLike = true;
      }
    },
    /*关注*/followFunc: function followFunc() {
      var self = this;
      self.getRequest()._post('user.favorite/add', {
        shop_supplier_id: self.roomDetail.supplier.shop_supplier_id,
        pid: self.roomDetail.supplier.shop_supplier_id,
        type: 10
      }, function (res) {
        console.log(res);
        self.hasFollow = !self.hasFollow;
      });
    },
    openAnchor: function openAnchor() {
      this.$refs.liveAnchor.show();
    },
    changeFollow: function changeFollow(e) {
      this.hasFollow = e;
    },
    openMore: function openMore() {
      this.$refs.liveMore.show();
    },
    openShare: function openShare(e) {
      var self = this;
      self.$refs.liveShare.show();
    },
    /*直播设置*/liveSet: function liveSet(e) {
      this.$refs.liveRoom.liveSet(e);
    },
    openRank: function openRank() {
      this.$refs.liveRank.show();
    },
    /*发送礼物*/sendGift: function sendGift(e) {
      var self = this;
      var msg_arr = e.split(',');
      var msg = {
        type: 'gift',
        msg: msg_arr[0],
        nickName: self.user.nickName,
        avatarUrl: self.user.avatarUrl
      };
      self.sendMsg(msg);
      var show_msg = {
        type: 'gift_num',
        msg: msg_arr[1]
      };
      self.sendMsg(show_msg);
    },
    /*礼物转换*/getGiftName: function getGiftName(id) {
      var name = '';
      for (var key in this.giftList) {
        for (var i = 0; i < this.giftList[key].length; i++) {
          var item = this.giftList[key][i];
          if (parseInt(id) === item.gift_id) {
            name = item.gift_name;
            console.log(name);
            break;
          }
        }
      }
      return name;
    },
    /*礼物转换*/getGiftImage: function getGiftImage(id) {
      var url = '';
      for (var key in this.giftList) {
        for (var i = 0; i < this.giftList[key].length; i++) {
          var item = this.giftList[key][i];
          if (parseInt(id) === item.gift_id) {
            url = item.file_path;
            break;
          }
        }
      }
      return url;
    },
    livePoster: function livePoster() {
      var self = this;
      uni.showLoading({
        title: '加载中'
      });
      var source = 'wx';
      self.getRequest()._get('plus.live.Room/poster', {
        room_id: self.room_id,
        source: source
      }, function (result) {
        self.qrcode = result.data.qrcode;
      }, null, function () {
        uni.hideLoading();
      });
    },
    /**/closeShare: function closeShare() {
      this.qrcode = null;
    },
    /*分享*/onShareAppMessage: function onShareAppMessage() {
      var self = this;
      // 构建页面参数
      var params = self.getRequest().getShareUrlParams({
        room_id: self.room_id,
        sence: 'audience'
      });
      return {
        title: self.roomDetail.name,
        path: '/pagesLive/live/live?' + params,
        imageUrl: self.roomDetail.shareFilePath
      };
    },
    initemoji: function initemoji() {
      var page = Math.ceil(_emoji.default.length / 21);
      for (var i = 0; i < page; i++) {
        this.emojiData[i] = [];
        for (var k = 0; k < 21; k++) {
          _emoji.default[i * 21 + k] ? this.emojiData[i].push(_emoji.default[i * 21 + k]) : '';
        }
      }
      console.log('initemoji:success');
    },
    goBack: function goBack() {
      uni.redirectTo({
        url: '/pagesLive/live/index'
      });
    },
    closeLive: function closeLive() {
      var self = this;
      // 结束录制、跳到直播结束页
      if (self.isCaster) {
        uni.showModal({
          title: '提示',
          content: '确定要结束当前直播吗?',
          success: function success(o) {
            if (o.confirm) {
              // 停止录制
              self.getRequest()._get('plus.live.agora.api/record_stop', {
                room_id: self.room_id
              }, function (res) {
                console.log('record_stop');
              });
              // 结束

              self.getRequest()._post('plus.live.room/set_status', {
                room_id: self.room_id,
                status: 103
              }, function (res) {
                console.log('set_status');
                self.leaveChannel('auto');
              });
            }
          }
        });
      } else {
        self.leaveChannel('auto');
      }
    },
    onJoinChannelSuccess: function onJoinChannelSuccess(e) {
      var self = this;
      console.log('------------onJoinChannelSuccess---------------');
      // 登录IM
      self.rtmLogin();
      // 如果是主播，请求录制
      if (self.isCaster) {
        self.getRequest()._post('plus.live.room/set_status', {
          room_id: self.room_id,
          status: 101
        }, function (res) {}, function (err) {
          console.log(err);
        });
        self.getRequest()._post('plus.live.agora.api/record_acquire', {
          room_id: self.roomDetail.room_id
        }, function (res) {
          console.log('--------record_acquire-----------');
          console.log(res);
          self.getRequest()._post('plus.live.agora.api/record_start', {
            room_id: self.roomDetail.room_id
          }, function (res) {
            setTimeout(function () {
              self.getRequest()._post('plus.live.agora.api/record_query', {
                room_id: self.roomDetail.room_id
              }, function (res) {
                console.log('--------record_query-----------');
                console.log(res);
              });
            }, 30000);
          });
        });
      }
    },
    onLeaveChannel: function onLeaveChannel(e) {
      console.log('-------------onLeaveChannel---------------');
    },
    onRemoteVideoStateChanged: function onRemoteVideoStateChanged(e) {
      console.log('-------------onRemoteVideoStateChanged---------------');
    },
    onUserJoined: function onUserJoined(e) {
      console.log('-------------onUserJoined---------------');
    },
    onUserOffline: function onUserOffline(e) {
      // 主播离线
      console.log('-------------onUserOffline---------------');
      this.leaveChannel('over');
    },
    leaveChannel: function leaveChannel(type) {
      var self = this;
      console.log('leaveChannel');
      clearInterval(self.intervalTime);
      // 资源释放
      if (self.platform == 'android') {
        self.agoraRtm.leave();
        self.agoraRtm.release({
          channelId: self.liveChannelId
        });
      }
      self.agoraView.leaveChannel(function (res) {
        console.log('leaveChannel success');
        self.agoraView.destroy();
      });
      var isCaster = self.isCaster ? '1' : '0';
      var url = '/pagesLive/live/live-over?room_id=' + self.room_id + '&isCaster=' + isCaster;
      console.log('url:' + url);
      if (self.isCaster) {
        uni.redirectTo({
          url: url
        });
      } else {
        if (type == 'auto') {
          uni.navigateBack();
        } else {
          uni.redirectTo({
            url: url
          });
        }
      }
    },
    onLoginSuccess: function onLoginSuccess(e) {
      this.joinChannel();
    },
    joinChannel: function joinChannel() {
      var self = this;
      var agoraRtm = self.agoraRtm;
      agoraRtm.createChannel({
        channelId: self.liveChannelId
      }, function (res) {
        agoraRtm.join(function (res) {
          self.onJoinSuccess();
        });
      });
    },
    onLoginFailure: function onLoginFailure(e) {
      console.log('onLoginFailure');
      console.log(e);
    },
    onLogoutSuccess: function onLogoutSuccess(e) {
      console.log('onLogoutSuccess');
      console.log(e);
    },
    onLogoutFailure: function onLogoutFailure(e) {
      console.log('onLogoutFailure');
      console.log(e);
    },
    onJoinSuccess: function onJoinSuccess(e) {
      var self = this;
      var msg = {
        type: 'join',
        msg: '',
        registerLevel: self.registerLevel,
        nickName: self.nickName
      };
      self.sendMsg(msg);
      self.synRoomData();
      // 10秒同步房间信息
      self.intervalTime = setInterval(function () {
        self.synRoomData();
      }, 10000);
    },
    onJoinFailure: function onJoinFailure(e) {
      console.log('onJoinFailure');
      console.log(e);
    },
    onChannelMessageReceived: function onChannelMessageReceived(e) {
      console.log('onChannelMessageReceived');
      this.showMsg(e.detail.messageData);
    },
    changeVirtualBackground: function changeVirtualBackground(e) {
      var self = this;
      console.log('changeVirtualBackground e=' + e);
      if (e == '') {
        self.agoraView.enableVirtualBackground({
          enabled: false
        }, function (res) {
          console.log('changeVirtualBackground cancel');
          console.log(res);
        });
        return;
      }
      uni.downloadFile({
        url: e,
        success: function success(res) {
          if (res.statusCode === 200) {
            console.log('下载成功');
            self.agoraView.enableVirtualBackground({
              enabled: true,
              source: plus.io.convertLocalFileSystemURL(res.tempFilePath),
              backgroundSourceType: 2,
              color: 0xffffff,
              blur_degree: 1
            }, function (res) {
              console.log('changeVirtualBackground success');
              console.log(res);
            });
          }
        }
      });
    },
    synRoomData: function synRoomData() {
      // console.log('---------------------synRoomData-------------');
      var self = this;
      var agoraRtm = self.agoraRtm;
      // 获取频道在线人数
      agoraRtm.getChannelMemberCount({
        channelIds: self.liveChannelId
      }, function (res) {
        self.online_count = self.platform == 'ios' ? res[0]['memberCount'] : res.memberCount[0].memberCount;
      });
      return;
      // 获取频道在线用户
      agoraRtm.getMembers(function (res) {
        var ids = [];
        self.user_ids = [];
        var members = [];
        if (self.platform === 'android') {
          res.members.forEach(function (item, index) {
            if (index <= 2) {
              ids.push(item.user_id);
            }
            self.user_ids.push(item.user_id);
          });
        } else if (self.platform === 'ios') {
          res.forEach(function (item, index) {
            if (index <= 2) {
              ids.push(item);
            }
            self.user_ids.push(item);
          });
        }

        // getApp()._get(
        // 	'user.user/getUserInfo',
        // 	{
        // 		user_id: ids.join(',')
        // 	},
        // 	res => {
        // 		self.topUser = res.data.list;
        // 	}
        // );
        // android {"message":"getMembers成功","members":[{"channelId":"channel_8","user_id":"8"}],"code":0}
        // ios ---BEGIN:JSON---["8"]---END:JSON---
      });
      // 如果是主播，同步录制信息
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 871:
/*!********************************************************************************!*\
  !*** D:/working/舒服康/pagesLive/live/live.nvue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./live.nvue?vue&type=style&index=0&lang=css& */ 872);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 872:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/working/舒服康/pagesLive/live/live.nvue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 873:
/*!********************************************************************************************************!*\
  !*** D:/working/舒服康/pagesLive/live/live.nvue?vue&type=style&index=1&id=4215c3cc&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_1_id_4215c3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./live.nvue?vue&type=style&index=1&id=4215c3cc&scoped=true&lang=css& */ 874);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_1_id_4215c3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_1_id_4215c3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_1_id_4215c3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_1_id_4215c3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_live_nvue_vue_type_style_index_1_id_4215c3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 874:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/working/舒服康/pagesLive/live/live.nvue?vue&type=style&index=1&id=4215c3cc&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[863,"common/runtime","common/vendor","pagesLive/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesLive/live/live.js.map