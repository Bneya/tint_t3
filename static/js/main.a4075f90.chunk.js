(this.webpackJsonptint_t3=this.webpackJsonptint_t3||[]).push([[0],{201:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(32),o=n.n(r),s=(n(70),n(71),n.p+"static/media/logo.6ce24c58.svg"),i=n(64),u=n(65),l=n(62),j=n.n(l)()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),d=(n(102),n(63)),b=n(1);function f(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.createRef)(),o=Object(c.createRef)();Object(c.useEffect)((function(){return j.on("CHAT",(function(e){console.log("data",e),a((function(t){return[].concat(Object(i.a)(t),[e])}))})),function(){return j.disconnect()}}),[]);return Object(b.jsxs)("div",{children:[n.map((function(e){var t=new Date(e.date),n="".concat(t.getHours(),":").concat(t.getMinutes());return Object(b.jsx)(d.MessageBox,{text:e.message,title:e.name,dateString:n})})),"Nickame",Object(b.jsx)("input",{ref:o,defaultValue:"Piloto desconocido"}),Object(b.jsx)("input",{ref:r}),Object(b.jsx)("input",{type:"button",onClick:function(e){console.log("llamando a la funci\xf3n con un bot\xf3n. currText:",r.current.value);var t={name:o.current.value||"Piloto desconocido",message:r.current.value};j.emit("CHAT",t),r.current.value=""},value:"Enviar"})]})}function p(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(b.jsxs)("p",{children:["Edit ",Object(b.jsx)("code",{children:"src/App.js"})," and save to reload. Desde el nuevo componente"]}),Object(b.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(b.jsx)(f,{})]})}var g=function(){return Object(b.jsx)(p,{})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),O()},70:function(e,t,n){},71:function(e,t,n){}},[[201,1,2]]]);
//# sourceMappingURL=main.a4075f90.chunk.js.map