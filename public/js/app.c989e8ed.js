(function(e){function t(t){for(var a,o,r=t[0],c=t[1],u=t[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"039a":function(e,t,n){"use strict";var a=n("3760"),i=n.n(a);i.a},1:function(e,t){},3760:function(e,t,n){},"42f3":function(e,t,n){"use strict";var a=n("5d6b"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.login?n("ChatWindow",{attrs:{username:e.username}}):e._e(),e.login?e._e():n("Login",{on:{uservalidated:e.uservalidated}})],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{staticStyle:{"background-image":"linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"}},[n("q-header",[n("q-toolbar",{staticClass:"app-header"},[n("q-toolbar-title",[e._v("MyChat")]),n("q-toolbar-title",[e._v("Hello, "+e._s(e.username))])],1)],1),n("q-page-container",[n("q-page",{staticClass:"flex"},[n("div",{staticClass:"q-pa-md row justify-center",staticStyle:{width:"100%"}},[n("div",{staticStyle:{width:"100%"}},e._l(e.messageList,function(e,t){return n("q-chat-message",{key:t,attrs:{name:e.from,text:[e.message],sent:e.sent}})}),1)])])],1),n("q-footer",[n("div",{staticClass:"send-section"},[n("q-input",{staticClass:"textInput",attrs:{"bg-color":"cadetblue",rounded:"",outlined:"",placeholder:"Type your message"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitMsg(t)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("q-btn",{staticClass:"sendMessage",staticStyle:{background:"#3A5894 !important",transform:"rotate(90deg)",height:"4em",width:"4em","margin-left":"10px"},attrs:{round:"",color:"secondary",icon:"navigation"},on:{click:e.submitMsg}})],1)])],1)},r=[],c=n("27f9"),u=n("8169"),l=n("9898"),d=n("07d0"),f=n("8055"),m=n.n(f),p="/",g=m()(p),h={name:"ChatWindow",components:{QInput:c["a"],QChatMessage:u["a"],QHeader:l["a"],QFooter:d["a"]},data:function(){return{message:"",from:"",receivedMessage:"",messageList:[]}},props:{username:String},created:function(){this.from=this.username},mounted:function(){this.getMessage()},methods:{getMessage:function(){var e=this;g.on("getMessage",function(t){t.sent=!0,e.notify(t),e.messageList.push(t)})},notify:function(){if("Notification"in window)if("granted"===Notification.permission)new Notification(data.message);else"denied"!==Notification.permission&&Notification.requestPermission().then(function(e){if("granted"===e)new Notification(data.message)});else alert("This browser does not support desktop notification")},submitMsg:function(){if(""!=this.message){var e={from:this.from,message:this.message};this.messageList.push(e),this.message="",g.emit("submitMessage",e)}}}},b=h,v=(n("42f3"),n("2877")),y=Object(v["a"])(b,o,r,!1,null,"217bd247",null),w=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-login"},[e._m(0),n("div",{staticClass:"container"},[n("q-input",{attrs:{rounded:"",outlined:"",placeholder:"Enter Name"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitName(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("q-btn",{staticClass:"submit-name",staticStyle:{background:"#3A5894 !important"},attrs:{round:"",color:"secondary",icon:"navigation"},on:{click:e.submitName}})],1),n("q-dialog",{model:{value:e.warning,callback:function(t){e.warning=t},expression:"warning"}},[n("q-card",{staticStyle:{width:"300px"}},[n("q-card-section",[e._v("Enter your Name")]),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"close",attrs:{flat:"",label:"OK"}})],1)],1)],1)],1)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h2",[e._v("MyChat")])])}],k=(n("7f7f"),n("24e8")),Q=n("f09f"),q=n("4b7e"),x=n("a370"),O=n("7f67"),M={name:"Login",components:{QInput:c["a"],QDialog:k["a"],QCard:Q["a"],QCardActions:q["a"],QCardSection:x["a"]},directives:{"close-popup":O["a"]},data:function(){return{name:"",warning:!1}},methods:{submitName:function(){""!=this.name?this.$emit("uservalidated",this.name):this.warning=!0}}},S=M,j=(n("039a"),Object(v["a"])(S,_,C,!1,null,null,null)),N=j.exports,L={name:"LayoutDefault",components:{ChatWindow:w,Login:N},data:function(){return{login:!1,username:""}},methods:{uservalidated:function(e){this.login=!0,this.username=e}}},P=L,E=Object(v["a"])(P,i,s,!1,null,null,null),T=E.exports,I=(n("a4ac"),n("e54f"),n("b05d")),$=n("4d5a"),A=n("f2cc"),D=n("c7a0"),H=n("2ea3"),W=n("65c6"),J=n("6ac5"),B=n("9c40"),F=n("0016"),K=n("497d"),z=n("6ab5"),G=n("033f"),R=n("e208");a["a"].use(I["a"],{config:{},components:{QLayout:$["a"],QHeader:l["a"],QDrawer:A["a"],QPageContainer:D["a"],QPage:H["a"],QToolbar:W["a"],QToolbarTitle:J["a"],QBtn:B["a"],QIcon:F["a"],QList:K["a"],QItem:z["a"],QItemSection:G["a"],QItemLabel:R["a"]},directives:{},plugins:{}}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(T)}}).$mount("#app")},"5d6b":function(e,t,n){},a4ac:function(e,t,n){}});
//# sourceMappingURL=app.c989e8ed.js.map