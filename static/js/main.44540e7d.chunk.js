(this["webpackJsonpvirtual-dice"]=this["webpackJsonpvirtual-dice"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c,i,l,o=n(0),r=n.n(o),s=n(9),a=n.n(s),d=(n(17),n(18),n(2)),j=n(4),b=(n(19),n(20),n(1)),u=function(e){var t=Object(o.useState)(e.value),n=Object(d.a)(t,2),c=n[0],i=n[1];return Object(b.jsxs)("div",{className:"ModButton",children:[Object(b.jsx)("h1",{children:e.name}),Object(b.jsxs)("div",{className:"Controls",children:[Object(b.jsx)("button",{onClick:function(){return i(c-1),void e.cbValue(c-1)},children:"-"}),Object(b.jsx)("div",{children:c}),Object(b.jsx)("button",{onClick:function(){return i(c+1),void e.cbValue(c+1)},children:"+"})]})]})},x=(n(22),function(e){return Object(b.jsxs)("button",{className:"SingleDice",onClick:function(){e.rollSettings.rollDice(e.dSide,e.rollSettings.dNumber,e.rollSettings.rollMod)},children:["D",e.dSide]})}),O=n(5),h=O.a.h1(c||(c=Object(j.a)(["\n  margin-top: 10px;\n  text-align: center;\n  line-height: 50px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 2em;\n"]))),S=O.a.div(i||(i=Object(j.a)(["\n  margin-top: 10px;\n  text-align: center;\n  line-height: 50px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 2em;\n"]))),g=O.a.div(l||(l=Object(j.a)(["\n  display: flex;\n  flex-direction: rows;\n  vertical-align: middle;\n"]))),p=function(e){var t=Object(o.useState)(1),n=Object(d.a)(t,2),c=n[0],i=n[1],l=Object(o.useState)(0),r=Object(d.a)(l,2),s=r[0],a=r[1],j=Object(o.useState)(""),O=Object(d.a)(j,2),p=O[0],f=O[1];var v=function(e){for(var t="",n=0;n<e.length;n++)t+="".concat(e[n],",");return t.slice(0,-1)},m={rollMod:s,dNumber:c,rollDice:function(e,t,n){for(var c,i,l=0,o=[],r="",s=1;s<=t;s++)o.push((c=1,i=e,c=Math.ceil(c),i=Math.floor(i),Math.floor(Math.random()*(i-c+1))+c)),l+=o[o.length-1];l+=n,console.log(o),0===n?r="":n>0?r="+".concat(n):n<0&&(r="".concat(n)),f({total:l,rolls:o,rollsStr:v(o),diceTypeStr:"".concat(t,"d").concat(e).concat(r)})}};return Object(b.jsxs)("div",{className:"VDice",children:[Object(b.jsx)(h,{children:"Virtual Dice"}),Object(b.jsxs)(S,{children:[Object(b.jsx)("p",{children:p.diceTypeStr}),Object(b.jsx)("p",{children:p.total}),Object(b.jsx)("p",{children:p.rollsStr})]}),Object(b.jsx)(x,{dSide:4,rollSettings:m}),Object(b.jsx)(x,{dSide:6,rollSettings:m}),Object(b.jsx)(x,{dSide:8,rollSettings:m}),Object(b.jsx)(x,{dSide:10,rollSettings:m}),Object(b.jsx)(x,{dSide:12,rollSettings:m}),Object(b.jsx)(x,{dSide:20,rollSettings:m}),Object(b.jsx)(x,{dSide:100,rollSettings:m}),Object(b.jsxs)(g,{children:[Object(b.jsx)(u,{name:"Set number of dice",value:c,cbValue:i}),Object(b.jsx)(u,{name:"Set roll modification",value:s,cbValue:a})]})]})};var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(p,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),l(e),o(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),v()}},[[25,1,2]]]);
//# sourceMappingURL=main.44540e7d.chunk.js.map