webpackJsonp([1],{"/OIJ":function(t,e,s){"use strict";var a=s("tDwZ"),n=(s.n(a),a.mixins.reactiveProp);e.a=a.Bar.extend({mixins:[n],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}})},"52hD":function(t,e,s){"use strict";e.a={name:"leftNav",data:function(){return{}}}},"5aTQ":function(t,e,s){"use strict";function a(t){s("tRpD")}var n=s("J7b2"),o=s("icGa"),i=s("25r8"),r=a,l=i(n.a,o.a,r,"data-v-2d553666",null);e.a=l.exports},"68Au":function(t,e,s){"use strict";e.a={data:function(){return{activeName:"first",value1:!0}}}},"8qIE":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("leftNav",{directives:[{name:"show",rawName:"v-show",value:"/login"!==t.$route.path,expression:"$route.path!=='/login'"}]}),t._v(" "),s("div",{staticClass:"main"},[s("router-view")],1)],1)},n=[],o={render:a,staticRenderFns:n};e.a=o},"9CQd":function(t,e,s){"use strict";function a(t){s("v+uL")}var n=s("hTrc"),o=s("knBE"),i=s("25r8"),r=a,l=i(n.a,o.a,r,null,null);e.a=l.exports},AXY6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-wrap"},[s("h1",[t._v("一起胖")]),t._v(" "),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:5}},[s("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"短信登录",name:"first"}},[s("el-input",{attrs:{placeholder:"手机号",size:"large"}},[s("template",{attrs:{slot:"append"},slot:"append"},[t._v("获取验证码")])],2),t._v(" "),s("el-input",{attrs:{placeholder:"验证码",size:"large"}}),t._v(" "),s("p",{staticClass:"tips"},[t._v("温馨提示：未注册的手机号，登录时将自动注册，切代表您已同意《用户服务协议》")])],1),t._v(" "),s("el-tab-pane",{attrs:{label:"密码登录",name:"second"}},[s("el-input",{attrs:{placeholder:"手机/邮箱/用户名",size:"large"}}),t._v(" "),s("el-input",{attrs:{placeholder:"密码",size:"large"}},[s("el-switch",{attrs:{slot:"append","on-text":"abc","off-text":"···",size:"small"},slot:"append",model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)],1)],1),t._v(" "),s("el-button",{staticClass:"btn-login",attrs:{type:"success",size:"large"}},[t._v("登录")])],1)],1)],1)},n=[],o={render:a,staticRenderFns:n};e.a=o},HxPp:function(t,e){},J7b2:function(t,e,s){"use strict";var a=s("xY2u"),n=s.n(a);e.a={name:"Pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}},created:function(){var t=this;n.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(e){t.oftenGoods=e.data}).catch(function(t){console.log(t),alert("网络错误")}),n.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(e){t.type0Goods=e.data[0],t.type1Goods=e.data[1],t.type2Goods=e.data[2],t.type3Goods=e.data[3]}).catch(function(t){console.log(t)})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},methods:{addOrderList:function(t){for(var e=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(e=!0);if(e){this.tableData.filter(function(e){return e.goodsId==t.goodsId})[0].count++}else{var a={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(a)}this.getAllMoney()},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(e){return e.goodsId!=t.goodsId}),this.getAllMoney()},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(e){t.totalCount+=e.count,t.totalMoney=t.totalMoney+e.price*e.count})},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功",type:"success"})):this.$message.error("不能空结")}}}},M93x:function(t,e,s){"use strict";function a(t){s("zOcV")}var n=s("dT0j"),o=s("8qIE"),i=s("25r8"),r=a,l=i(n.a,o.a,r,null,null);e.a=l.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("gt1m"),n=s("M93x"),o=s("rd6w"),i=s.n(o),r=s("p0mY"),l=(s.n(r),s("YaEn"));a.default.config.productionTip=!1,a.default.use(i.a),new a.default({el:"#app",router:l.a,template:"<App/>",components:{App:n.a}})},W0kZ:function(t,e){},YaEn:function(t,e,s){"use strict";var a=s("gt1m"),n=s("nYn5"),o=s("5aTQ"),i=s("ttVv"),r=s("9CQd");a.default.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Pos",component:o.a},{path:"/login",name:"login",component:i.a},{path:"/statistics",name:"statistics",component:r.a}]})},YcAy:function(t,e,s){"use strict";function a(t){s("W0kZ")}var n=s("52hD"),o=s("xiz6"),i=s("25r8"),r=a,l=i(n.a,o.a,r,null,null);e.a=l.exports},dT0j:function(t,e,s){"use strict";var a=s("YcAy");e.a={name:"app",components:{leftNav:a.a}}},hTrc:function(t,e,s){"use strict";var a=s("/OIJ");e.a={components:{LineChart:a.a},data:function(){return{datacollection:null,dataProgressBar:[0,0]}},mounted:function(){this.fillData(),this.setProgessBar(8e3,5e3)},methods:{fillData:function(){this.datacollection={labels:[this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()]},{label:"Data One",backgroundColor:"#00f",data:[this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()]}]}},getRandomInt:function(){return Math.floor(46*Math.random())+5},setProgessBar:function(t,e){t=+t,e=+e;var s=e/t,a=360*s-180-225,n=360*s-225;return"number"==typeof t&&"number"==typeof e&&(s>.5?this.dataProgressBar=[a,-45]:s<=.5?this.dataProgressBar=[-225,n]:void 0)}}}},hXH4:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./af":"YTPB","./af.js":"YTPB","./ar":"cWoS","./ar-dz":"6ktO","./ar-dz.js":"6ktO","./ar-kw":"fhpM","./ar-kw.js":"fhpM","./ar-ly":"tg9v","./ar-ly.js":"tg9v","./ar-ma":"ebsh","./ar-ma.js":"ebsh","./ar-sa":"Ndvl","./ar-sa.js":"Ndvl","./ar-tn":"U6bF","./ar-tn.js":"U6bF","./ar.js":"cWoS","./az":"tbCb","./az.js":"tbCb","./be":"fqm9","./be.js":"fqm9","./bg":"FSUX","./bg.js":"FSUX","./bn":"C2F3","./bn.js":"C2F3","./bo":"87Qq","./bo.js":"87Qq","./br":"YLTv","./br.js":"YLTv","./bs":"fmlt","./bs.js":"fmlt","./ca":"4ovE","./ca.js":"4ovE","./cs":"axhS","./cs.js":"axhS","./cv":"WiXI","./cv.js":"WiXI","./cy":"te6C","./cy.js":"te6C","./da":"HRXh","./da.js":"HRXh","./de":"EM9p","./de-at":"vajy","./de-at.js":"vajy","./de-ch":"oxF8","./de-ch.js":"oxF8","./de.js":"EM9p","./dv":"5Xdp","./dv.js":"5Xdp","./el":"5K6m","./el.js":"5K6m","./en-au":"qAVU","./en-au.js":"qAVU","./en-ca":"Xp45","./en-ca.js":"Xp45","./en-gb":"p/ET","./en-gb.js":"p/ET","./en-ie":"GoSh","./en-ie.js":"GoSh","./en-nz":"czQP","./en-nz.js":"czQP","./eo":"yvT8","./eo.js":"yvT8","./es":"N9C/","./es-do":"gYrD","./es-do.js":"gYrD","./es.js":"N9C/","./et":"04Um","./et.js":"04Um","./eu":"D1q3","./eu.js":"D1q3","./fa":"Cg+D","./fa.js":"Cg+D","./fi":"8la0","./fi.js":"8la0","./fo":"5pz2","./fo.js":"5pz2","./fr":"lN5w","./fr-ca":"AEb2","./fr-ca.js":"AEb2","./fr-ch":"tD2i","./fr-ch.js":"tD2i","./fr.js":"lN5w","./fy":"Mdg3","./fy.js":"Mdg3","./gd":"rVEw","./gd.js":"rVEw","./gl":"iH/x","./gl.js":"iH/x","./gom-latn":"Iak3","./gom-latn.js":"Iak3","./he":"xPe4","./he.js":"xPe4","./hi":"ZYiG","./hi.js":"ZYiG","./hr":"qkJP","./hr.js":"qkJP","./hu":"cuMs","./hu.js":"cuMs","./hy-am":"X8B5","./hy-am.js":"X8B5","./id":"ozEf","./id.js":"ozEf","./is":"IT65","./is.js":"IT65","./it":"2ZuN","./it.js":"2ZuN","./ja":"8bx8","./ja.js":"8bx8","./jv":"xFGi","./jv.js":"xFGi","./ka":"H//g","./ka.js":"H//g","./kk":"Iiwx","./kk.js":"Iiwx","./km":"xkzb","./km.js":"xkzb","./kn":"4pHN","./kn.js":"4pHN","./ko":"RQ5s","./ko.js":"RQ5s","./ky":"4uW4","./ky.js":"4uW4","./lb":"DriV","./lb.js":"DriV","./lo":"UbvN","./lo.js":"UbvN","./lt":"ZLut","./lt.js":"ZLut","./lv":"Y0P6","./lv.js":"Y0P6","./me":"PjOM","./me.js":"PjOM","./mi":"8mIp","./mi.js":"8mIp","./mk":"cry8","./mk.js":"cry8","./ml":"j0FK","./ml.js":"j0FK","./mr":"nPfe","./mr.js":"nPfe","./ms":"QuDn","./ms-my":"E8dS","./ms-my.js":"E8dS","./ms.js":"QuDn","./my":"mjOD","./my.js":"mjOD","./nb":"86W2","./nb.js":"86W2","./ne":"LAap","./ne.js":"LAap","./nl":"kGPJ","./nl-be":"Shzo","./nl-be.js":"Shzo","./nl.js":"kGPJ","./nn":"PBVj","./nn.js":"PBVj","./pa-in":"ip2f","./pa-in.js":"ip2f","./pl":"tD26","./pl.js":"tD26","./pt":"K80A","./pt-br":"PlXb","./pt-br.js":"PlXb","./pt.js":"K80A","./ro":"7gGF","./ro.js":"7gGF","./ru":"hRBI","./ru.js":"hRBI","./sd":"X96H","./sd.js":"X96H","./se":"wly5","./se.js":"wly5","./si":"uAtD","./si.js":"uAtD","./sk":"nOfE","./sk.js":"nOfE","./sl":"8Yfx","./sl.js":"8Yfx","./sq":"7ne2","./sq.js":"7ne2","./sr":"5f6u","./sr-cyrl":"w2XQ","./sr-cyrl.js":"w2XQ","./sr.js":"5f6u","./ss":"5DvC","./ss.js":"5DvC","./sv":"eRIZ","./sv.js":"eRIZ","./sw":"yC4C","./sw.js":"yC4C","./ta":"6tHM","./ta.js":"6tHM","./te":"CwaS","./te.js":"CwaS","./tet":"n5l9","./tet.js":"n5l9","./th":"7NuD","./th.js":"7NuD","./tl-ph":"tDMG","./tl-ph.js":"tDMG","./tlh":"U4Q4","./tlh.js":"U4Q4","./tr":"8deq","./tr.js":"8deq","./tzl":"ad8q","./tzl.js":"ad8q","./tzm":"IrzG","./tzm-latn":"bNmg","./tzm-latn.js":"bNmg","./tzm.js":"IrzG","./uk":"R7uX","./uk.js":"R7uX","./ur":"Szb3","./ur.js":"Szb3","./uz":"96dy","./uz-latn":"DWkr","./uz-latn.js":"DWkr","./uz.js":"96dy","./vi":"HCgL","./vi.js":"HCgL","./x-pseudo":"mqZr","./x-pseudo.js":"mqZr","./yo":"nLPa","./yo.js":"nLPa","./zh-cn":"XGO+","./zh-cn.js":"XGO+","./zh-hk":"2+ci","./zh-hk.js":"2+ci","./zh-tw":"OtzW","./zh-tw.js":"OtzW"};a.keys=function(){return Object.keys(o)},a.resolve=n,t.exports=a,a.id="hXH4"},icGa:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pos"},[s("div",[s("el-row",[s("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"goodsName",label:"商品"}}),t._v(" "),s("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.delSingleGoods(e.row)}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.addOrderList(e.row)}}},[t._v("增加")])]}}])})],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"挂单"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}})],1),t._v(" "),s("div",{staticClass:"totUp-wrap"},[t._v("\n          数量："),s("b",[t._v(t._s(t.totalCount))]),t._v("  金额："),s("b",[t._v(t._s(t.totalMoney))])]),t._v(" "),s("div",{staticClass:"btn-wrap"},[s("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.delAllGoods}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:t.checkout}},[t._v("结账")])],1)],1),t._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),s("div",{staticClass:"often-goods-list"},[s("ul",t._l(t.oftenGoods,function(e){return s("li",{on:{click:function(s){t.addOrderList(e)}}},[s("span",[t._v(t._s(e.goodsName))]),t._v(" "),s("span",{staticClass:"o-price"},[t._v("￥"+t._s(e.price))])])}))])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(e){return s("li",{on:{click:function(s){t.addOrderList(e)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"小食"}},[s("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(e){return s("li",{on:{click:function(s){t.addOrderList(e)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(e){return s("li",{on:{click:function(s){t.addOrderList(e)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(e){return s("li",{on:{click:function(s){t.addOrderList(e)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])}))])],1)],1)])],1)],1)])},n=[],o={render:a,staticRenderFns:n};e.a=o},knBE:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("el-row",[s("el-col",{attrs:{span:6}},[s("h3",[t._v("交易额")]),t._v(" "),s("div",{staticClass:"progressbar"},[s("div",{staticClass:"left-container"},[s("div",{staticClass:"left-circle",style:{transform:"rotate("+t.dataProgressBar[0]+"deg)"}})]),t._v(" "),s("div",{staticClass:"right-container"},[s("div",{staticClass:"right-circle",style:{transform:"rotate("+t.dataProgressBar[1]+"deg)"}})])]),t._v(" "),s("p",[t._v("30天最高7000")])]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"m-chart"},[s("line-chart",{attrs:{"chart-data":t.datacollection}}),t._v(" "),s("button",{on:{click:function(e){t.fillData()}}},[t._v("Randomize")])],1)])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:6}},[s("h3",[t._v("订单数")])]),t._v(" "),s("el-col",{attrs:{span:18}},[s("p",[t._v("232")])])],1)],1)},n=[],o={render:a,staticRenderFns:n};e.a=o},p0mY:function(t,e){},tRpD:function(t,e){},ttVv:function(t,e,s){"use strict";function a(t){s("HxPp")}var n=s("68Au"),o=s("AXY6"),i=s("25r8"),r=a,l=i(n.a,o.a,r,null,null);e.a=l.exports},"v+uL":function(t,e){},wNi0:function(t,e){t.exports={name:"vue-chartjs",version:"2.8.7",description:"Vue.js wrapper for chart.js for creating beautiful charts.",author:"Jakub Juszczak <jakub@posteo.de>",homepage:"http://vue-chartjs.org",license:"MIT",contributors:[{name:"Thorsten Lünborg",web:"https://github.com/LinusBorg"},{name:"Juan Carlos Alonso",web:"https://github.com/jcalonso"}],maintainers:[{name:"Jakub Juszczak",email:"jakub@posteo.de",web:"http://www.jakubjuszczak.de"}],repository:{type:"git",url:"git+ssh://git@github.com:apertureless/vue-chartjs.git"},bugs:{url:"https://github.com/apertureless/vue-chartjs/issues"},keywords:["ChartJs","Vue","Visualisation","Wrapper","Charts"],main:"dist/vue-chartjs.js",unpkg:"dist/vue-chartjs.full.min.js",module:"es/index.js","jsnext:main":"es/index.js",files:["src","dist","es"],scripts:{dev:"node build/dev-server.js",build:"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es",unit:"karma start test/unit/karma.conf.js --single-run",e2e:"node test/e2e/runner.js",test:"npm run unit",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs",release:"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js && webpack --progress --hide-modules --config  ./build/webpack.release.full.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.full.min.js",prepublish:"yarn run lint && yarn run test && yarn run build"},dependencies:{"lodash.merge":"^4.6.0"},peerDependencies:{"chart.js":"^2.7.0",vue:"^2.4.4"},devDependencies:{"babel-cli":"^6.24.1","babel-core":"^6.25.0","babel-loader":"^7.0.0","babel-plugin-transform-object-assign":"^6.22.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-runtime":"^6.23.0",chai:"^3.5.0","chart.js":"^2.7.0",chromedriver:"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0",eslint:"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.15.2","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.10.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta-loader":"^2.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4",karma:"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"1.8.1",lolex:"^1.6.0",mocha:"^3.1.0",nightwatch:"^0.9.14",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.13","selenium-server":"^3.3.1",shelljs:"^0.7.7",sinon:"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8",vue:"^2.4.4","vue-hot-reload-api":"^2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^12.2.2","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.4.2",webpack:"^1.13.2","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"1.1.1"},engines:{node:">=6.9.0"},babel:{presets:["es2015"]},browserify:{transform:["babelify"]},greenkeeper:{ignore:["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},_from:"vue-chartjs@2.8.7",_resolved:"http://registry.npm.taobao.org/vue-chartjs/download/vue-chartjs-2.8.7.tgz"}},xiz6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left-nav"},[s("ul",[s("li",[s("i",{staticClass:"icon iconfont icon-wodezichan"}),t._v(" "),s("div",[t._v("收银")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),s("div",[t._v("店铺")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),s("div",[t._v("商品")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),s("div",[t._v("订单")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-tongji"}),t._v(" "),s("div",[t._v("统计")])])])])}],o={render:a,staticRenderFns:n};e.a=o},zOcV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.356e2a1351af8e572301.js.map