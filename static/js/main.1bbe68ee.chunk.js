(this["webpackJsonpdata-visualisation"]=this["webpackJsonpdata-visualisation"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),s=(n(16),n(17),n(2)),u=n.n(s),o=n(4),l=n(11),j=function(){var t=Object(o.a)(u.a.mark((function t(){var e,n,a=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"https://reference.intellisense.io/thickenernn/v1/referencia",t.next=3,fetch(e).catch((function(t){console.error(t)}));case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(t){return function(t){return Object.keys(t).filter((function(t){return"TK1"===t.substring(0,3)}))}(t).map((function(e){return{name:e,value:t[e].values,times:t[e].times}}))},d=(n(19),n(1)),h=function(t){var e=t.data,n=t.caption;return Object(d.jsxs)("table",{className:"table-style",children:[Object(d.jsx)("caption",{children:n}),Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Metric"}),Object(d.jsx)("th",{children:"Value"})]})}),Object(d.jsx)("tbody",{children:e.map((function(t){var e,n=t.name,a=t.value;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:(e=n,e.replace(/_/g," "))}),Object(d.jsx)("td",{children:a[a.length-1]})]},n)}))})]})},f=n(6),x=n(9),p=function(t){var e=t.data,n=Object(f.a)(new Set(e.map((function(t){return t.times})).flat()));return Object(d.jsx)(x.a,{width:"100%",height:"400px",chartType:"LineChart",loader:Object(d.jsx)("div",{children:"Loading Data Visualisation"}),data:[[{type:"number",label:"x"}].concat(Object(f.a)(e.map((function(t){return{type:"number",label:t.name}}))))].concat(Object(f.a)(e.map((function(t){return t.value})))),options:{hAxis:{title:"Times",ticks:n},vAxis:{title:"Values"}}})},O=(n(24),function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1];return Object(a.useEffect)((function(){(function(){var t=Object(o.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:e=t.sent,r(b(e.current.data.TK1));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title-table",children:"Data Visualisation"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"container__box",children:Object(d.jsx)(h,{data:n,caption:"Current Data"})}),Object(d.jsx)("div",{className:"container__box",children:Object(d.jsx)(p,{hAxisTitle:"Current Data",vAxisTitle:"Current Data",data:n})})]})]})}),v=function(){return Object(d.jsx)(O,{})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1bbe68ee.chunk.js.map