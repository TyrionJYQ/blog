(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{244:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"组件的patch过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的patch过程"}},[t._v("#")]),t._v(" 组件的patch过程")]),t._v(" "),a("h2",{attrs:{id:"组件渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件渲染"}},[t._v("#")]),t._v(" 组件渲染")]),t._v(" "),a("p",[t._v("从前面的文章分析可以知道"),a("code",[t._v("Vue.prototype._render")]),t._v("函数生成的"),a("code",[t._v("vnode")]),t._v("有两种类型,这是根据传入的"),a("code",[t._v("options.tag")]),t._v("来判断。")]),t._v(" "),a("ul",[a("li",[t._v("普通"),a("code",[t._v("vnode")]),t._v(" : 也就是"),a("code",[t._v("typeof tag===string")])]),t._v(" "),a("li",[t._v("组件"),a("code",[t._v("vnode")]),t._v("： "),a("code",[t._v("options")]),t._v("中的"),a("code",[t._v("tag")]),t._v("为对象\n在"),a("code",[t._v("_update")]),t._v("方法中传入生成的"),a("code",[t._v("vnode")]),t._v("，进而调用"),a("code",[t._v("__patch__")]),t._v(" 方法，在"),a("code",[t._v("__patch__")]),t._v("方法中，又会调用"),a("code",[t._v("createElm")]),t._v("方法将"),a("code",[t._v("vnode")]),t._v("对应的真实"),a("code",[t._v("dom")]),t._v("也就是"),a("code",[t._v("vnode.elm")]),t._v("插入到父节点"),a("code",[t._v("parentElm")]),t._v("上。")])]),t._v(" "),a("blockquote",[a("p",[t._v("在"),a("code",[t._v("createElm")]),t._v("方法进行插入的过程中会首先调用"),a("code",[t._v("createComponent")]),t._v("方法，组件"),a("code",[t._v("vnode")]),t._v("执行该方法，并返回"),a("code",[t._v("true")]),t._v(",不执行后续逻辑。")])]),t._v(" "),a("h2",{attrs:{id:"实例分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例分析"}},[t._v("#")]),t._v(" 实例分析")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SubComp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@components/SubComp.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SubComp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// subComp.vue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'subComp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'subComp'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.html")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOCTYPE")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width=device-width, initial-scale=1.0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("equiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-UA-Compatible"')]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ie=edge"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Document"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n       \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dist/app.bundle.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br")])]),a("p",[a("code",[t._v("SubComp")]),t._v("会被"),a("code",[t._v("vue-loader")]),t._v("编译成"),a("code",[t._v("tag")]),t._v("为一个对象，所以第一次调用"),a("code",[t._v("render")]),t._v("方法生成的"),a("code",[t._v("vnode")]),t._v("为一个组件"),a("code",[t._v("vnode")]),t._v(".")]),t._v(" "),a("p",[t._v("在当前"),a("code",[t._v("new Vue( )")]),t._v("生成的实例的"),a("code",[t._v("_update")]),t._v("方法中会将生成的组件"),a("code",[t._v("vnode")]),t._v("作为参数进行调用，执行"),a("code",[t._v("__patch__")]),t._v("方法，"),a("code",[t._v("__patch__")]),t._v(" 方法中又会执行"),a("code",[t._v("createElm")]),t._v("方法，这和普通"),a("code",[t._v("vnode")]),t._v("的渲染逻辑一样.不同的是"),a("code",[t._v("createElm")]),t._v("方法。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("createElm")]),t._v("方法中会首先尝试执行"),a("code",[t._v("createComponent(vnode)")]),t._v("，如果结果为false，就继续执行当前方法"),a("code",[t._v("createElm")]),t._v("中的后续逻辑，但我们的实例中返回的结果为"),a("code",[t._v("true")]),t._v("，所以后续的方法不会执行。")]),t._v(" "),a("p",[t._v("下面我们来看看"),a("code",[t._v("createComponent")]),t._v("方法")]),t._v(" "),a("h2",{attrs:{id:"createcomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createcomponent"}},[t._v("#")]),t._v(" "),a("code",[t._v("createComponent")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refElm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isReactivated "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keepAlive\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* hydrating */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after calling the init hook, if the vnode is a child component")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// it should've created a child instance and mounted it. the child")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// component also has set the placeholder vnode's elm.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in that case we can just return the element and be done.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTrue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isReactivated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactivateComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[t._v("记住一点，此时的"),a("code",[t._v("vnode")]),t._v("还是首次调用"),a("code",[t._v("render")]),t._v("方法生成的"),a("code",[t._v("vnode")]),t._v("，"),a("code",[t._v("createComponent")]),t._v("方法主要做了以下几件事")]),t._v(" "),a("ul",[a("li",[t._v("根据组件"),a("code",[t._v("vnode")]),t._v("生成组件实例")]),t._v(" "),a("li",[t._v("在"),a("code",[t._v("initComponent")]),t._v("方法中进行赋值，"),a("code",[t._v("vnode.elm = vnode.componentInstance.$el")]),t._v("\t这里的"),a("code",[t._v("$el")]),t._v("，是组件实例渲染而成的真实"),a("code",[t._v("dom")])]),t._v(" "),a("li",[t._v("插入"),a("code",[t._v("insert(parentElm, vnode.elm, refElm)")]),t._v(",这里的"),a("code",[t._v("parentElm")]),t._v("也就是"),a("code",[t._v("body")])])]),t._v(" "),a("p",[t._v("经过上面的三步，组件"),a("code",[t._v("vnode")]),t._v("被渲染成真实的"),a("code",[t._v("dom")]),t._v("并插入到"),a("code",[t._v("body")]),t._v("中，但在此之前，"),a("code",[t._v("vue")]),t._v("还做了很多其他的工作。")]),t._v(" "),a("p",[t._v("我们知道在生成组件"),a("code",[t._v("vnode")]),t._v("时会添加相应的钩子函数,在"),a("code",[t._v("src/core/vdom/create-component.js")]),t._v("的"),a("code",[t._v("createComponent")]),t._v("方法中执行了"),a("code",[t._v("installComponentHooks")]),t._v(" 方法，这个方法是给组件"),a("code",[t._v("vnode")]),t._v("的"),a("code",[t._v("data")]),t._v("中添加相应的钩子函数,因此上面代码中的"),a("code",[t._v("data.hook.init")]),t._v("也就是下面的方法")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VNodeWithData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("boolean "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isDestroyed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n      vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keepAlive\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// kept-alive components, treat as a patch")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mountedNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// work around flow")]),t._v("\n      componentVNodeHooks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mountedNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mountedNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createComponentInstanceForVnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        activeInstance\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hydrating "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[t._v("在"),a("code",[t._v("init")]),t._v("方法中会调用"),a("code",[t._v("createComponentInstanceForVnode")]),t._v("方法，会根据"),a("code",[t._v("vnode")]),t._v("生成组件实例（前面的文章已经分析如何生成组件实例，这里不作赘述），并赋值给当前"),a("code",[t._v("vnode")]),t._v("的"),a("code",[t._v("componentInstance")]),t._v("属性.然后手动调用"),a("code",[t._v("$mount")]),t._v("方法")]),t._v(" "),a("blockquote",[a("p",[t._v("注意这里的"),a("code",[t._v("vnode")]),t._v("还是首次"),a("code",[t._v("_render")]),t._v(" 函数生成的组件"),a("code",[t._v("vnode")]),t._v("\n调用"),a("code",[t._v("$mount")]),t._v("方法又会进入组件实例（继承自"),a("code",[t._v("Vue")]),t._v("）的"),a("code",[t._v("mountComponent方法")]),t._v("，然后调用组件实例"),a("code",[t._v("child")]),t._v("的"),a("code",[t._v("__update")]),t._v(",然后"),a("code",[t._v("__patch__")]),t._v("，然后"),a("code",[t._v("createElm")]),t._v("，然后"),a("code",[t._v("insert")]),t._v("，在组件实例对应的"),a("code",[t._v("insert")]),t._v("方法执行完成后，组件"),a("code",[t._v("SubComp")]),t._v("实例的"),a("code",[t._v("$el")]),t._v(" 属性是真实的"),a("code",[t._v("dom")]),t._v("，然后赋值给"),a("code",[t._v("vnode.elm")]),t._v("，也就是"),a("code",[t._v("vnode.elm = vnode.componentInstance.$el")]),t._v("，最后执行"),a("code",[t._v("insert(parentElm, vnode.elm, refElm)")]),t._v("。")])]),t._v(" "),a("p",[t._v("经过上面的分析，我们需要了解以下两点")]),t._v(" "),a("ul",[a("li",[t._v("每个组件都会生成一个组件实例，组件实例具有"),a("code",[t._v("Vue")]),t._v("的所有属性和方法，因此在手动执行"),a("code",[t._v("$mount")]),t._v("方法后，会执行"),a("code",[t._v("mountComponent")]),t._v("方法，执行"),a("code",[t._v("_render")]),t._v("，执行"),a("code",[t._v("_update")]),t._v("，执行"),a("code",[t._v("__patch__")]),t._v("，执行"),a("code",[t._v("createElm")]),t._v("，执行"),a("code",[t._v("insert")]),t._v("方法，一系列方法执行后，最终完成了子组件的"),a("code",[t._v("vnode")]),t._v("渲染成真实的"),a("code",[t._v("dom")]),t._v("("),a("code",[t._v("$el")]),t._v(")过程。子组件"),a("code",[t._v("SubComp")]),t._v("的流程跑完后会继续执行后续逻辑"),a("code",[t._v("insert(parentElm, vnode.elm, refElm)")]),t._v("。")]),t._v(" "),a("li",[t._v("无论时普通"),a("code",[t._v("vnode")]),t._v("还是组件"),a("code",[t._v("vnode")]),t._v("都是先子后父插入，当前节点的子节点插入到父节点完成后，才会继续当前节点的插入，以确保节点的父子关系。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/TyrionJYQ/vue-demo-for-learning-source-code",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看demo代码"),a("OutboundLink")],1),t._v("，请根据当前文章对demo源码中的"),a("code",[t._v("index.js")]),t._v("或者"),a("code",[t._v("webpack.config.js")]),t._v("作相应改动.")]),t._v(" "),a("h2",{attrs:{id:"流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[t._v("#")]),t._v(" 流程图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200223225341243.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1R5cmlvbko=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);