(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommendProduct/recommendProduct"],{"1fa3":function(t,n,o){"use strict";o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return e})),o.d(n,"a",(function(){}));var a=function(){var t=this.$createElement,n=(this._self._c,this.isShow?this.theme()||"":null),o=this.isShow?this.theme():null;this.$mp.data=Object.assign({},{$root:{m0:n,m1:o}})},e=[]},8446:function(t,n,o){"use strict";o.r(n);var a=o("1fa3"),e=o("9cc9");for(var i in e)["default"].indexOf(i)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(i);o("f46a");var c=o("828b"),u=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=u.exports},"9cc9":function(t,n,o){"use strict";o.r(n);var a=o("db3f7"),e=o.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){o.d(n,t,(function(){return a[t]}))}(i);n["default"]=e.a},a451:function(t,n,o){},db3f7:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{listData:[],isShow:!1,showName:""}},created:function(){this.getData()},props:["location"],methods:{getData:function(){var t=this;t.page;t._post("product.product/recommendProduct",{location:t.location},(function(n){1==n.data.is_recommend&&(t.isShow=!0,t.showName=n.data.recommend.name,t.listData=n.data.list)}))},gotoProduct:function(t){var n="pages/product/detail/detail?product_id="+t;this.gotoPage(n)}}}},f46a:function(t,n,o){"use strict";var a=o("a451"),e=o.n(a);e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommendProduct/recommendProduct-create-component',
    {
        'components/recommendProduct/recommendProduct-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("8446"))
        })
    },
    [['components/recommendProduct/recommendProduct-create-component']]
]);
