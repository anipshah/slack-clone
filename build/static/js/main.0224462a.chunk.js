(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(0),a=c.n(s),i=c(26),r=c.n(i),o=(c(73),c(11)),l=(c(74),c(111)),j=c(48),d=c.n(j),u=c(49),h=c.n(u),b=c(50),O=c.n(b),m=(c(75),Object(s.createContext)()),x=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(n.jsx)(m.Provider,{value:Object(s.useReducer)(t,c),children:a})},p=function(){return Object(s.useContext)(m)};var v=function(){var e=p(),t=Object(o.a)(e,1)[0].user;return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("div",{className:"header_left",children:[Object(n.jsx)(l.a,{className:"header_avatar",alt:null===t||void 0===t?void 0:t.displayName,src:t.photoURL}),Object(n.jsx)(d.a,{})]}),Object(n.jsxs)("div",{className:"header_serach",children:[Object(n.jsx)(h.a,{}),Object(n.jsx)("input",{placeholder:"Search"})]}),Object(n.jsx)("div",{className:"header_right",children:Object(n.jsx)(O.a,{})})]})},f=(c(80),c(51)),g=c.n(f),N=c(52),I=c.n(N),S=c(6),_=(c(81),c(28)),C=c.n(_),k=C.a.initializeApp({apiKey:"AIzaSyDIq2ECwiMInsCXc_Wm8zYapF8MkXwrWvE",authDomain:"slack-clone-d883a.firebaseapp.com",databaseURL:"https://slack-clone-d883a.firebaseio.com",projectId:"slack-clone-d883a",storageBucket:"slack-clone-d883a.appspot.com",messagingSenderId:"1046830633984",appId:"1:1046830633984:web:2a6fd9655060573f92b4e5",measurementId:"G-H21LKN6B01"}).firestore(),w=C.a.auth(),y=new C.a.auth.GoogleAuthProvider,D=k;var E=function(e){var t=e.Icon,c=e.title,s=e.id,a=e.addChannelOption,i=Object(S.f)();return Object(n.jsxs)("div",{className:"sidebarOption",onClick:a?function(){var e=prompt("Please enter the channel name:");e&&D.collection("rooms").add({name:e})}:function(){s?i.push("/room/".concat(s)):i.push("title")},children:[t&&Object(n.jsx)(t,{className:"sidebarOption_icon"}),t?Object(n.jsx)("h3",{children:c}):Object(n.jsxs)("h3",{className:"sidebarOption_channel",children:[Object(n.jsx)("span",{className:"sidebarOption_hash",children:"#"})," ",c]})]})},F=c(53),R=c.n(F),L=c(54),P=c.n(L),T=c(55),M=c.n(T),U=c(56),A=c.n(U),B=c(57),G=c.n(B),J=c(58),W=c.n(J),z=c(59),K=c.n(z),X=c(60),q=c.n(X),H=c(61),V=c.n(H),Y=c(62),Q=c.n(Y);var Z=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],i=p(),r=Object(o.a)(i,1)[0].user;return Object(s.useEffect)((function(){D.collection("rooms").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsxs)("div",{className:"sidebar_header",children:[Object(n.jsxs)("div",{className:"sidebar_info",children:[Object(n.jsx)("h2",{children:"React Js"}),Object(n.jsxs)("h3",{children:[Object(n.jsx)(g.a,{}),null===r||void 0===r?void 0:r.displayName]})]}),Object(n.jsx)(I.a,{})]}),Object(n.jsx)(E,{Icon:R.a,title:"Threads"}),Object(n.jsx)(E,{Icon:P.a,title:"Mentions & reactions"}),Object(n.jsx)(E,{Icon:M.a,title:"Saved items"}),Object(n.jsx)(E,{Icon:A.a,title:"Channel browser"}),Object(n.jsx)(E,{Icon:G.a,title:"People & user groups"}),Object(n.jsx)(E,{Icon:W.a,title:"Apps"}),Object(n.jsx)(E,{Icon:K.a,title:"File browser"}),Object(n.jsx)(E,{Icon:q.a,title:"Show less"}),Object(n.jsx)("hr",{}),Object(n.jsx)(E,{Icon:V.a,title:"Channels"}),Object(n.jsx)(E,{Icon:Q.a,addChannelOption:!0,title:"Add Channels"}),c.map((function(e){return Object(n.jsx)(E,{title:e.name,id:e.id})}))]})},$=c(34),ee=(c(93),c(63)),te=c.n(ee),ce=c(64),ne=c.n(ce);c(94);var se=function(e){var t=e.message,c=e.timestamp,s=e.user,a=e.userImage;return Object(n.jsxs)("div",{className:"message",children:[Object(n.jsx)("img",{src:a,alt:""}),Object(n.jsxs)("div",{className:"message_info",children:[Object(n.jsxs)("h4",{children:[s," ",Object(n.jsx)("span",{className:"message_timestamp",children:new Date(null===c||void 0===c?void 0:c.toDate()).toUTCString()})," "]}),Object(n.jsx)("p",{children:t})]})]})};c(95);var ae=function(e){var t=e.channelName,c=e.channelId,a=Object(s.useState)(""),i=Object(o.a)(a,2),r=i[0],l=i[1],j=p(),d=Object(o.a)(j,1)[0].user;return Object(n.jsx)("div",{className:"chatInput",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{value:r,onChange:function(e){return l(e.target.value)},placeholder:"Message #".concat(t)}),Object(n.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),c&&D.collection("rooms").doc(c).collection("messages").add({message:r,timestamp:C.a.firestore.FieldValue.serverTimestamp(),user:d.displayName,userImage:d.photoURL}),l("")},children:"SEND"})]})})};var ie=function(){var e=Object(S.g)().roomId,t=Object(s.useState)(null),c=Object(o.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)([]),l=Object(o.a)(r,2),j=l[0],d=l[1];return Object(s.useEffect)((function(){e&&D.collection("rooms").doc(e).onSnapshot((function(e){return i(e.data())})),D.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return d(e.docs.map((function(e){return e.data()})))}))}),[e]),console.log(e),console.log(a),console.log("Meseasdasda",j),Object(n.jsxs)("div",{className:"chat",children:[Object(n.jsxs)("div",{className:"chat_header",children:[Object(n.jsx)("div",{className:"chat_headerLeft",children:Object(n.jsxs)("h4",{className:"chat_channelName",children:[Object(n.jsxs)("strong",{children:[" # ",null===a||void 0===a?void 0:a.name]}),Object(n.jsx)(te.a,{})]})}),Object(n.jsx)("div",{className:"chat_headerRight",children:Object(n.jsxs)("p",{children:[Object(n.jsx)(ne.a,{})," Details"]})})]}),Object(n.jsx)("div",{className:"chat_messages",children:j.map((function(e){var t=e.message,c=e.timestamp,s=e.user,a=e.userImage;return Object(n.jsx)(se,{message:t,timestamp:c,user:s,userImage:a})}))}),Object(n.jsx)(ae,{channelName:null===a||void 0===a?void 0:a.name,channelId:e})]})},re=(c(96),c(110)),oe=c(40),le="SET_USER",je=function(e,t){switch(console.log(t),t.type){case le:return Object(oe.a)(Object(oe.a)({},e),{},{user:t.user});default:return e}};var de=function(){var e=p(),t=Object(o.a)(e,2),c=(t[0],t[1]);return Object(n.jsx)("div",{className:"login",children:Object(n.jsxs)("div",{className:"login_container",children:[Object(n.jsx)("img",{src:"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg",alt:""}),Object(n.jsx)("h1",{children:"Sign in to ReactJs"}),Object(n.jsx)("p",{children:"anip.slack.com"}),Object(n.jsx)(re.a,{onClick:function(){w.signInWithPopup(y).then((function(e){console.log(e),c({type:le,user:e.user})})).catch((function(e){alert(e.message)}))},children:"Sign in with Google"})]})})};var ue=function(){var e=p(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(n.jsx)("div",{className:"app",children:Object(n.jsx)($.a,{children:c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v,{}),Object(n.jsxs)("div",{className:"app_body",children:[Object(n.jsx)(Z,{}),Object(n.jsxs)(S.c,{children:[Object(n.jsx)(S.a,{path:"/room/:roomId",children:Object(n.jsx)(ie,{})}),Object(n.jsx)(S.a,{path:"/",children:Object(n.jsx)("h1",{children:"Welcome"})})]})]})]}):Object(n.jsx)(de,{})})})},he=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,112)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x,{initialState:{user:null},reducer:je,children:Object(n.jsx)(ue,{})})}),document.getElementById("root")),he()}},[[97,1,2]]]);
//# sourceMappingURL=main.0224462a.chunk.js.map