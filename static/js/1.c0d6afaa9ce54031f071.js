webpackJsonp([1],{dxlM:function(t,e){},e1Wr:function(t,e){},gaJ4:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return!t.loading&&t.articles.length?s("div",t._l(t.articles,function(e){return s("article",{key:e.id,staticClass:"card"},[s("router-link",{staticClass:"article-img",attrs:{to:{name:"Article",params:{slug:e.slug}}}},[s("img",{staticClass:"card-img-top",attrs:{src:"http://www.gstatic.com/webp/gallery/2.jpg",alt:"Card image cap"}})]),t._v(" "),s("div",{staticClass:"card-body"},[s("router-link",{staticClass:"card-title article-link",attrs:{to:{name:"Article",params:{slug:e.slug}}}},[s("h2",[t._v(t._s(e.title))])]),t._v(" "),s("span",{staticClass:"article-meta"},[t._v(t._s(e.category_name))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(e.text.substr(0,200)+"..."))]),t._v(" "),s("router-link",{staticClass:"btn article-link-btn",attrs:{to:{name:"Article",params:{slug:e.slug}}}},[t._v("Czytaj więcej")])],1)],1)})):t.articles.length<1?s("div",[s("h3",{staticClass:"text-center"},[t._v("Upss! Nic nie znaleziono")])]):s("div",{staticClass:"text-center"},[s("img",{attrs:{src:a("G/2H")}})])},staticRenderFns:[]};var i=a("VU/8")({name:"Articles",props:{articles:{required:!0},loading:!1}},s,!1,function(t){a("dxlM")},null,null);e.a=i.exports},t9JT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"Home",components:{Articles:a("gaJ4").a},data:function(){return{articles:{},loading:!1}},methods:{loadArticles:function(){var t=this;this.$api.fetchArticles().then(function(e){t.articles=e,t.loading=!1})}},created:function(){this.loading=!0},mounted:function(){this.loadArticles()}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("Articles",{attrs:{articles:this.articles,loading:this.loading}})},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(t){a("e1Wr")},null,null);e.default=r.exports}});
//# sourceMappingURL=1.c0d6afaa9ce54031f071.js.map