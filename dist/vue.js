(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/home/index.vue":function(e,t,n){"use strict";var u=n("./src/home/index.vue?vue&type=template&id=51e30b3b&"),r=n("./src/home/index.vue?vue&type=script&lang=js&"),s=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),o=Object(s.a)(r.a,u.render,u.staticRenderFns,!1,null,null,null),i=n("./node_modules/vue-hot-reload-api/dist/index.js");i.install(n("./node_modules/vue/dist/vue.js")),i.compatible&&(e.hot.accept(),e.hot.data?i.reload("51e30b3b",o.options):i.createRecord("51e30b3b",o.options),e.hot.accept("./src/home/index.vue?vue&type=template&id=51e30b3b&",function(e){u=n("./src/home/index.vue?vue&type=template&id=51e30b3b&"),i.rerender("51e30b3b",{render:u.render,staticRenderFns:u.staticRenderFns})}.bind(this))),o.options.__file="src/home/index.vue",t.a=o.exports},"./src/home/index.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";t.a={name:"home",data:function(){return{}},methods:{jump:function(){this.$router.push("/vue")}}}},"./src/home/index.vue?vue&type=template&id=51e30b3b&":function(e,t,n){"use strict";function u(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("h1",{on:{click:e.jump}},[e._v("This is an home page")])])}n.r(t);var r=[];u._withStripped=!0,n.d(t,"render",function(){return u}),n.d(t,"staticRenderFns",function(){return r})},"./src/router.js":function(e,t,n){"use strict";var u=n("./node_modules/vue/dist/vue.js"),r=n.n(u),s=n("./node_modules/vue-router/dist/vue-router.esm.js"),o=n("./src/home/index.vue");r.a.use(s.a),t.a=new s.a({mode:"history",routes:[{path:"/home",name:"home",component:o.a},{path:"/vue/suppage",component:function(){return n.e(6).then(n.bind(null,"./src/vue/suppage.vue"))}},{path:"/vue/subpage",component:function(){return n.e(5).then(n.bind(null,"./src/vue/subpage.vue"))}}]})},"./src/vue/index.vue":function(e,t,n){"use strict";var u=n("./src/vue/index.vue?vue&type=template&id=21fec300&"),r=n("./src/vue/index.vue?vue&type=script&lang=js&"),s=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),o=Object(s.a)(r.a,u.render,u.staticRenderFns,!1,null,null,null),i=n("./node_modules/vue-hot-reload-api/dist/index.js");i.install(n("./node_modules/vue/dist/vue.js")),i.compatible&&(e.hot.accept(),e.hot.data?i.reload("21fec300",o.options):i.createRecord("21fec300",o.options),e.hot.accept("./src/vue/index.vue?vue&type=template&id=21fec300&",function(e){u=n("./src/vue/index.vue?vue&type=template&id=21fec300&"),i.rerender("21fec300",{render:u.render,staticRenderFns:u.staticRenderFns})}.bind(this))),o.options.__file="src/vue/index.vue",t.a=o.exports},"./src/vue/index.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";t.a={name:"vue"}},"./src/vue/index.vue?vue&type=template&id=21fec300&":function(e,t,n){"use strict";function u(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("vue page")]),e._v(" "),n("router-link",{attrs:{to:"/vue/suppage"}},[e._v("suppage")]),e._v(" "),n("router-link",{attrs:{to:"/vue/subpage"}},[e._v("subpage")]),e._v(" "),n("router-view")],1)}n.r(t);var r=[];u._withStripped=!0,n.d(t,"render",function(){return u}),n.d(t,"staticRenderFns",function(){return r})},"./src/vue/vue.app.js":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",function(){return a}),n.d(t,"mount",function(){return v}),n.d(t,"unmount",function(){return p});var u=n("./node_modules/vue/dist/vue.js"),r=n.n(u),s=n("./node_modules/single-spa-vue/lib/single-spa-vue.js"),o=n.n(s),i=n("./src/vue/index.vue"),d=n("./src/router.js"),c=o()({Vue:r.a,appOptions:{el:"#vue",router:d.a,render:function(e){return e(i.a)}}}),a=[c.bootstrap],v=[c.mount],p=[c.unmount]}}]);