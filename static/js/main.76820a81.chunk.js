(this["webpackJsonpvirtual-dice"]=this["webpackJsonpvirtual-dice"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c,i,r,a=t(1),o=t.n(a),l=t(9),d=t.n(l),s=(t(17),t(18),t(4)),b=t(2),j=(t(19),t(0)),u=function(e){var n=Object(a.useState)(e.value),t=Object(s.a)(n,2),c=t[0],i=t[1];return Object(j.jsxs)("div",{className:"ModButton",children:[Object(j.jsx)("h1",{children:e.name}),Object(j.jsxs)("div",{className:"Controls",children:[Object(j.jsx)("button",{onClick:function(){var n;(!1===(n=e.min)||c-1>=n)&&(i(c-1),e.cbValue(c-1))},children:"-"}),Object(j.jsx)("div",{children:c}),Object(j.jsx)("button",{onClick:function(){var n;(!1===(n=e.min)||c+1>=n)&&(i(c+1),e.cbValue(c+1))},children:"+"})]})]})},x=(t(21),function(e){return Object(j.jsxs)("button",{className:"SingleDice",onClick:function(){e.rollSettings.rollDice(e.dSide,e.rollSettings.dNumber,e.rollSettings.rollMod)},children:["d",e.dSide]})}),h=(t(22),function(e){return Object(j.jsx)("div",{className:"backdrop image"})}),p=t(3),f=p.a.a(c||(c=Object(b.a)(["\n  font-size: 0.5em;\n  text-align: right;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.5);\n  :hover {\n    color: rgba(255, 255, 255, 0.95);\n  }\n"]))),O=p.a.p(i||(i=Object(b.a)(["\n  font-size: 0.5em;\n  text-align: right;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.5);\n  display: inline;\n"]))),g=p.a.div(r||(r=Object(b.a)(["\n  position: fixed;\n  bottom: 0.5vw;\n  right: 0.5vw;\n"]))),m=function(){return Object(j.jsxs)(g,{children:[Object(j.jsx)(f,{href:"https://wallpapersmug.com/w/download/1920x1080/cyberpunk-city-buildings-art-13377a25488",target:"_blank",rel:"noopener noreferrer",children:"background art source"}),Object(j.jsx)(O,{children:" | "}),Object(j.jsx)(f,{href:"https://github.com/trailblazingfive",target:"_blank",rel:"noopener noreferrer",children:"app by trailblazingfive 2021"})]})},v=function(e){for(var n="",t=0;t<e.length;t++)n+="".concat(e[t],", ");return n.slice(0,-2)};function S(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}var k,w,y,N,M=[4,6,8,10,12,20,100],C=(t(25),p.a.h1(k||(k=Object(b.a)(["\n  margin-top: 10px;\n  text-align: center;\n  line-height: 50px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 2em;\n  user-select: none;\n"])))),D=p.a.div(w||(w=Object(b.a)(["\n  display: flex;\n  flex-direction: rows;\n  vertical-align: middle;\n  @media screen and (min-width: 300px) and (max-width: 1000px) {\n    flex-direction: column;\n  }\n"]))),V=function(e){var n=Object(a.useState)(1),t=Object(s.a)(n,2),c=t[0],i=t[1],r=Object(a.useState)(0),o=Object(s.a)(r,2),l=o[0],d=o[1],b=Object(a.useState)(""),p=Object(s.a)(b,2),f=p[0],O=p[1],g=Object(a.useState)(M),k=Object(s.a)(g,2),w=k[0],y=(k[1],{rollMod:l,dNumber:c,rollDice:function(e,n,t){O(function(e,n,t){for(var c=0,i=[],r="",a=1;a<=n;a++)i.push(S(1,e)),c+=i[i.length-1];return c+=t,0===t?r="":t>0?r="+".concat(t):t<0&&(r="".concat(t)),{total:c,rolls:i,rollsStr:v(i),diceTypeStr:"".concat(n,"d").concat(e).concat(r)}}(e,n,t))}});return Object(j.jsxs)("div",{className:"VDice",children:[Object(j.jsx)(C,{children:"Virtual dice"}),Object(j.jsxs)("div",{className:"RollResults",children:[Object(j.jsx)("p",{children:f.diceTypeStr}),Object(j.jsx)("p",{id:"DiceTotal",children:f.total}),Object(j.jsx)("p",{id:"DiceRolls",children:f.rollsStr})]}),w.map((function(e){return Object(j.jsx)(x,{dSide:e,rollSettings:y})})),Object(j.jsxs)(D,{children:[Object(j.jsx)(u,{name:"Set number of dice",value:c,cbValue:i,min:1}),Object(j.jsx)(u,{name:"Set roll modification",value:l,cbValue:d,min:!1})]}),Object(j.jsx)(h,{}),Object(j.jsx)(m,{})]})};p.a.div(y||(y=Object(b.a)(["\n  display: flexbox;\n  flex-direction: rows;\n  vertical-align: middle;\n  padding: 5px;\n  width: 50%;\n"]))),p.a.div(N||(N=Object(b.a)(["\n  background: black;\n  border-radius: 2px;\n  border: 2px white solid;\n  padding: 10px;\n  width: 100px;\n  :hover {\n    background: white;\n    color: black;\n    border: 2px black solid;\n  }\n"])));var z=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(V,{})})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};d.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),T()}],[[26,1,2]]]);
//# sourceMappingURL=main.76820a81.chunk.js.map