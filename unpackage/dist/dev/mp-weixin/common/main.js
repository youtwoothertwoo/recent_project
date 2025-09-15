(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],{

/***/ 0:
/*!******************************!*\
  !*** D:/working/舒服康/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createApp, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 27));
var _directive = _interopRequireDefault(__webpack_require__(/*! ./common/directive.js */ 35));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./common/utils.js */ 30));
var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 31));
var _onfire = _interopRequireDefault(__webpack_require__(/*! ./common/onfire.js */ 37));
var _gotopage = __webpack_require__(/*! @/common/gotopage.js */ 38);
var _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 39));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
_vue.default.prototype.$store = _index.default;

// 公共组件
var headerBar = function headerBar() {
  __webpack_require__.e(/*! require.ensure | components/header */ "components/header").then((function () {
    return resolve(__webpack_require__(/*! ./components/header.vue */ 891));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
_vue.default.component('header-bar', headerBar);

//请求加载组件
var requestLoading = function requestLoading() {
  __webpack_require__.e(/*! require.ensure | components/jjjloading */ "components/jjjloading").then((function () {
    return resolve(__webpack_require__(/*! ./components/jjjloading.vue */ 896));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
//组件挂载到全局，方便每个页面使用
_vue.default.component('request-loading', requestLoading);

/*底部数据*/
var tabBar = function tabBar() {
  __webpack_require__.e(/*! require.ensure | components/tabbar/footTabbar */ "components/tabbar/footTabbar").then((function () {
    return resolve(__webpack_require__(/*! @/components/tabbar/footTabbar.vue */ 903));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
_vue.default.component('tabBar', tabBar);
_vue.default.prototype.footTabberData = {
  active: 'home'
};
_vue.default.prototype.$fire = new _onfire.default();
_vue.default.config.productionTip = false;
_App.default.mpType = 'app';
_vue.default.prototype.config = _config.default;
var app = new _vue.default(_objectSpread({}, _App.default));
createApp(app).$mount();
_vue.default.prototype.websiteUrl = _config.default.app_url;
_vue.default.prototype.app_id = _config.default.app_id;
//h5发布路径
_vue.default.prototype.h5_addr = _config.default.h5_addr;
/*页面跳转*/
_vue.default.prototype.gotoPage = _gotopage.gotopage;
_vue.default.prototype.font_url = _config.default.font_url;
_vue.default.prototype.points_name = function (e) {
  if (!e) {
    return _index.default.state.points_name;
  } else {
    var re = new RegExp("积分", "g");
    return e.replace(re, _index.default.state.points_name);
  }
};

//是否是ios
_vue.default.prototype.ios = function () {
  var u = navigator.userAgent.toLowerCase();
  if (u.indexOf("like mac os x") < 0 || u.match(/MicroMessenger/i) != 'micromessenger') {
    return false;
  }
  return true;
};

//get请求
_vue.default.prototype._get = function (path, data, _success, _fail, _complete) {
  var _this = this;
  data = data || {};
  data.token = uni.getStorageSync('token') || '';
  data.app_id = this.getAppId();
  uni.request({
    url: this.websiteUrl + '/index.php/api/' + path,
    data: data,
    dataType: 'json',
    method: 'GET',
    success: function success(res) {
      if (res.statusCode !== 200 || (0, _typeof2.default)(res.data) !== 'object') {
        return false;
      }
      if (res.data.code === -2) {
        _this.showError(res.data.msg, function () {
          uni.removeStorageSync('token');
          this.gotoPage('/pages/index/index', 'reLaunch');
        });
      } else if (res.data.code === -1) {
        // 登录态失效, 重新登录
        console.log('登录态失效, 重新登录');
        _this.doLogin();
      } else if (res.data.code === 0) {
        _this.showError(res.data.msg, function () {
          _fail && _fail(res);
        });
        return false;
      } else {
        _success && _success(res.data);
      }
    },
    fail: function fail(res) {
      _fail && _fail(res);
    },
    complete: function complete(res) {
      uni.hideLoading();
      _complete && _complete(res);
    }
  });
};

//get请求
_vue.default.prototype._post = function (path, data, _success2, _fail2, _complete2) {
  var _this2 = this;
  data = data || {};
  data.token = uni.getStorageSync('token') || '';
  data.app_id = this.getAppId();
  uni.request({
    url: this.websiteUrl + '/index.php/api/' + path,
    data: data,
    dataType: 'json',
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function success(res) {
      if (res.statusCode !== 200 || (0, _typeof2.default)(res.data) !== 'object') {
        return false;
      }
      if (res.data.code === -1) {
        // 登录态失效, 重新登录
        console.log('登录态失效, 重新登录');
        _this2.doLogin();
      } else if (res.data.code === 0) {
        _this2.showError(res.data.msg, function () {
          _fail2 && _fail2(res);
        });
        return false;
      } else {
        _success2 && _success2(res.data);
      }
    },
    fail: function fail(res) {
      _fail2 && _fail2(res);
    },
    complete: function complete(res) {
      uni.hideLoading();
      _complete2 && _complete2(res);
    }
  });
};
_vue.default.prototype.doLogin = function () {
  var pages = getCurrentPages();
  if (pages.length) {
    var currentPage = pages[pages.length - 1];
    if ("pages/login/login" != currentPage.route && "pages/login/weblogin" != currentPage.route && "pages/login/openlogin" != currentPage.route) {
      uni.setStorageSync("currentPage", currentPage.route);
      uni.setStorageSync("currentPageOptions", currentPage.options);
    }
  }
  console.log('app_ID=' + this.getAppId());
  //公众号

  // 非公众号,跳转授权页面

  this.gotoPage("/pages/login/login");
};

/**
 * 显示失败提示框
 */
_vue.default.prototype.showError = function (msg, callback) {
  uni.showModal({
    title: '友情提示',
    content: msg,
    showCancel: false,
    success: function success(res) {
      callback && callback();
    }
  });
};

/**
 * 显示失败提示框
 */
_vue.default.prototype.showSuccess = function (msg, callback) {
  uni.showModal({
    title: '友情提示',
    content: msg,
    showCancel: false,
    success: function success(res) {
      callback && callback();
    }
  });
};

/**
 * 获取应用ID
 */
_vue.default.prototype.getAppId = function () {
  return this.app_id || 10001;
};
_vue.default.prototype.compareVersion = function (v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
};

/**
 * 生成转发的url参数
 */
_vue.default.prototype.getShareUrlParams = function (params) {
  var self = this;
  return _utils.default.urlEncode(Object.assign({
    referee_id: self.getUserId(),
    app_id: self.getAppId()
  }, params));
};

/**
 * 当前用户id
 */
_vue.default.prototype.getUserId = function () {
  return uni.getStorageSync('user_id');
};

/**
 * 获取当前平台
 */
_vue.default.prototype.getPlatform = function (params) {
  var platform = 'wx';
  return platform;
};

/**
 * 订阅通知,目前仅小程序
 */
_vue.default.prototype.subMessage = function (temlIds, callback) {
  var self = this;

  //小程序订阅消息
  var version = wx.getSystemInfoSync().SDKVersion;
  if (temlIds && temlIds.length != 0 && self.compareVersion(version, '2.8.2') >= 0) {
    wx.requestSubscribeMessage({
      tmplIds: temlIds,
      success: function success(res) {},
      fail: function fail(res) {},
      complete: function complete(res) {
        callback();
      }
    });
  } else {
    callback();
  }
};
_vue.default.prototype.isWeixin = function () {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
};

/**
 * 获取访客
 */
_vue.default.prototype.getVisitcode = function () {
  var visitcode = uni.getStorageSync('visitcode');
  if (!visitcode) {
    visitcode = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
    visitcode = visitcode.replace(/-/g, "");
    uni.setStorageSync('visitcode', visitcode);
  }
  return visitcode;
};
_vue.default.prototype.topBarTop = function () {
  return uni.getMenuButtonBoundingClientRect().top;
};
_vue.default.prototype.topBarHeight = function () {
  return uni.getMenuButtonBoundingClientRect().height;
};
_vue.default.prototype.yulan = function (e, i) {
  var image_path_arr = [];
  if (!Array.isArray(e)) {
    image_path_arr = [e];
  } else {
    if (e[0].file_path) {
      e.forEach(function (item, index) {
        image_path_arr.push(item.file_path);
      });
    } else {
      image_path_arr = e;
    }
  }
  var picnum = i * 1;
  uni.previewImage({
    urls: image_path_arr,
    current: picnum,
    indicator: 'default'
  });
};
_vue.default.prototype.theme = function () {
  return 'theme' + this.$store.state.theme || false;
};
_vue.default.prototype.footTab = function () {
  return this.$store.state.footTab || '';
};
/* 小数点截取 */
_vue.default.prototype.subPrice = function (str, val) {
  var strs = String(str);
  if (val == 1) {
    return strs.substring(0, strs.indexOf("."));
  } else if (val == 2) {
    var indof = strs.indexOf(".");
    return strs.slice(indof + 1, indof + 3);
  }
};
/*转两位数*/
_vue.default.prototype.convertTwo = function (n) {
  var str = '';
  if (n < 10) {
    str = '0' + n;
  } else {
    str = n;
  }
  return str;
};
_vue.default.prototype.getTabBarLinks = function () {
  var _this3 = this;
  var vars = uni.getStorageSync('TabBar');
  var theme = uni.getStorageSync('theme');
  if (vars != null && vars != '') {
    this.setTabBarLinks(vars, theme);
  } else {
    uni.request({
      url: this.config.app_url + '/index.php/api/index/nav',
      data: {
        app_id: this.config.app_id
      },
      success: function success(result) {
        var vars = result.data.data.vars.data;
        var theme = result.data.data.theme.theme;
        _this3.$store.commit('changeTheme', theme);
        uni.setStorageSync('TabBar', vars);
        uni.setStorageSync('theme', theme);
        _this3.setTabBarLinks(vars, theme);
      }
    });
  }
};
_vue.default.prototype.setTabBarLinks = function (vars, theme) {
  if (vars.is_auto == '0') {
    uni.showTabBar();
    vars.list = [];
    var color = ['#ff5704', '#19ad57', '#ffcc00', '#1774ff', '#e4e4e4', '#c8ba97', '#623ceb'];
    uni.setTabBarStyle({
      color: '#333333',
      selectedColor: color[theme]
    });
    uni.setTabBarItem({
      index: 0,
      text: '首页',
      iconPath: 'static/tabbar/home.png',
      selectedIconPath: 'static/tabbar/home_' + theme + '.png'
    });
    uni.setTabBarItem({
      index: 1,
      text: '分类',
      iconPath: 'static/tabbar/category.png',
      selectedIconPath: 'static/tabbar/category_' + theme + '.png'
    });
    uni.setTabBarItem({
      index: 2,
      text: '店铺',
      iconPath: 'static/tabbar/shop.png',
      selectedIconPath: 'static/tabbar/shop_' + theme + '.png'
    });
    uni.setTabBarItem({
      index: 3,
      text: '购物车',
      iconPath: 'static/tabbar/cart.png',
      selectedIconPath: 'static/tabbar/cart_' + theme + '.png'
    });
    uni.setTabBarItem({
      index: 4,
      text: '我的',
      iconPath: 'static/tabbar/user.png',
      selectedIconPath: 'static/tabbar/user_' + theme + '.png'
    });
  } else {
    uni.hideTabBar();
  }
};
_vue.default.prototype.getThemeColor = function () {
  var theme = this.$store.state.theme;
  var color = ['#ff5704', '#19ad57', '#ffcc00', '#1774ff', '#e4e4e4', '#c8ba97', '#623ceb'];
  return color[theme];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createApp"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 27:
/*!******************************!*\
  !*** D:/working/舒服康/App.vue ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 28);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 32);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/*!*******************************************************!*\
  !*** D:/working/舒服康/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 29);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 29:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/working/舒服康/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(__webpack_require__(/*! ./common/utils.js */ 30));
var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 31));
var _default = {
  onLaunch: function onLaunch(e) {
    console.log('App Launch');
    // 隐私政策

    //检查更新
    this.updateManager();
    var self = this;

    //应用启动参数
    this.onStartupScene(e.query);
    this.getNav();
  },
  onShow: function onShow() {
    //console.log('App Show')
  },
  onHide: function onHide() {
    //console.log('App Hide')
  },
  methods: {
    isFirstEnter: function isFirstEnter() {
      var firstEnter = uni.getStorageSync('firstEnter'); //同步获取缓存中是否有首次进入字段
      var self = this;
      uni.getSystemInfo({
        success: function success(data) {
          console.log('firstEnter=' + firstEnter);
          // 如果是ios并且没有firstEnter缓存则弹出模态框
          if (data.platform == 'ios' && !firstEnter) {
            console.log('---------------');
            uni.navigateTo({
              url: '/pages/privacy/privacy'
            });
          }
        }
      });
    },
    updateManager: function updateManager() {
      var updateManager = uni.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function (res2) {
            uni.showModal({
              title: '更新提示',
              content: '新版本已经准备好，即将重启应用',
              showCancel: false,
              success: function success(res2) {
                if (res2.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate();
                }
              }
            });
          });
        }
      });
      updateManager.onUpdateFailed(function (res) {
        // 新的版本下载失败
        uni.showModal({
          title: '更新提示',
          content: '检查到有新版本，但下载失败，请检查网络设置',
          showCancel: false
        });
      });
    },
    /**
     * 小程序启动场景
     */
    onStartupScene: function onStartupScene(query) {
      // 获取场景值
      var scene = _utils.default.getSceneData(query);
      // 记录推荐人id
      var refereeId = query.referee_id;
      if (refereeId > 0) {
        if (!uni.getStorageSync('referee_id')) {
          uni.setStorageSync('referee_id', refereeId);
        }
      }
      // 记录分销人id
      var uid = scene.uid;
      if (uid > 0) {
        if (!uni.getStorageSync('referee_id')) {
          uni.setStorageSync('referee_id', uid);
        }
      }
      // 如果是h5，设置app_id
    },
    getNav: function getNav() {
      var _this = this;
      // 如果是android不处理图标,不起作用
      uni.request({
        url: this.config.app_url + '/index.php/api/index/nav',
        data: {
          app_id: this.config.app_id
        },
        success: function success(result) {
          var vars = result.data.data.vars.data;
          var theme = result.data.data.theme.theme;
          _this.$store.commit('changePoints', result.data.data.points_name);
          _this.$store.commit('changeTheme', theme);
          uni.setStorageSync('TabBar', vars);
          uni.setStorageSync('theme', theme);
        }
      });
    },
    updateWgt: function updateWgt(wgtUrl) {
      uni.showModal({
        title: '版本更新',
        content: '检查到有新版本，请点击更新',
        confirmText: '更新',
        showCancel: false,
        success: function success(e) {
          if (e.confirm) {
            var dtask = plus.downloader.createDownload(wgtUrl, {}, function (d, status) {
              uni.showToast({
                title: '下载完成',
                mask: false,
                duration: 1000
              });
              // 下载完成
              if (status == 200) {
                plus.runtime.install(d.filename, {
                  force: true
                }, function () {
                  console.log('install success...');
                  plus.nativeUI.alert('已更新至最新版本，确定后将重启应用', function () {
                    plus.runtime.restart();
                  }, '更新提示', '确定');
                }, function (e) {
                  console.log(e);
                  console.log(d.filename);
                  uni.showToast({
                    title: '安装失败-01',
                    mask: false,
                    duration: 1500
                  });
                });
              } else {
                uni.showToast({
                  title: '更新失败-02',
                  mask: false,
                  duration: 1500
                });
              }
            });
            try {
              dtask.start(); // 开启下载的任务
              var prg = 0;
              var showLoading = plus.nativeUI.showWaiting('正在下载'); //创建一个showWaiting对象
              dtask.addEventListener('statechanged', function (task, status) {
                // 给下载任务设置一个监听 并根据状态  做操作
                switch (task.state) {
                  case 1:
                    showLoading.setTitle('正在下载');
                    break;
                  case 2:
                    showLoading.setTitle('已连接到服务器');
                    break;
                  case 3:
                    prg = parseInt(parseFloat(task.downloadedSize) / parseFloat(task.totalSize) * 100);
                    showLoading.setTitle('  正在下载' + prg + '%  ');
                    break;
                  case 4:
                    plus.nativeUI.closeWaiting();
                    //下载完成
                    break;
                }
              });
            } catch (err) {
              plus.nativeUI.closeWaiting();
              uni.showToast({
                title: '更新失败-03',
                mask: false,
                duration: 1500
              });
            }
          } else {
            //取消
          }
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 32:
/*!****************************************************************!*\
  !*** D:/working/舒服康/App.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 33);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 33:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/working/舒服康/App.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map