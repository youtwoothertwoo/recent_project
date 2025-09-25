(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommendProduct/recommendProduct"],{"16d6":function(t,n,o){},"2ae6":function(t,n,o){"use strict";o.r(n);var e=o("7c92"),a=o("c131");for(var c in a)["default"].indexOf(c)<0&&function(t){o.d(n,t,(function(){return a[t]}))}(c);o("3cd8");var i=o("828b"),u=Object(i["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);n["default"]=u.exports},"2cbd":function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{listData:[],isShow:!1,showName:""}},created:function(){this.getData()},props:["location"],methods:{getData:function(){var t=this;t.page;t._post("product.product/recommendProduct",{location:t.location},(function(n){1==n.data.is_recommend&&(t.isShow=!0,t.showName=n.data.recommend.name,t.listData=n.data.list)}))},gotoProduct:function(t){var n="pages/product/detail/detail?product_id="+t;this.gotoPage(n)}}}},"3cd8":function(t,n,o){"use strict";var e=o("16d6"),a=o.n(e);a.a},"7c92":function(t,n,o){"use strict";o.d(n,"b",(function(){return e})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){}));var e=function(){var t=this.$createElement,n=(this._self._c,this.isShow?this.theme()||"":null),o=this.isShow?this.theme():null;this.$mp.data=Object.assign({},{$root:{m0:n,m1:o}})},a=[]},c131:function(t,n,o){"use strict";o.r(n);var e=o("2cbd"),a=o.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(c);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommendProduct/recommendProduct-create-component',
    {
        'components/recommendProduct/recommendProduct-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("2ae6"))
        })
    },
    [['components/recommendProduct/recommendProduct-create-component']]
]);
