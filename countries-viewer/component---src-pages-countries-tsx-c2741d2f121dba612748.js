(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{m3ph:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),o=n("YwZP"),l=n("o0o1"),r=n.n(l),s=(n("ls82"),n("HaE+")),c=n("ma3e"),u=n("ruvs"),p=n("P/br"),d=n("vOnD"),m=d.d.div.withConfig({displayName:"styles__Container",componentId:"sc-10mnlw0-0"})(["display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;height:30px;padding:12px 26px;border-radius:",";background:",";box-shadow:",";color:",";text-decoration:none;"],(function(e){return e.theme.value.borderRadius}),(function(e){return e.theme.value.colors.elements}),(function(e){return e.theme.value.shadow}),(function(e){return e.theme.value.colors.text})),f=function(e){var t=e.children;return i.a.createElement(m,null,t)},x=n("6uqZ"),h=d.d.div.withConfig({displayName:"styles__Container",componentId:"sc-1uls4qt-0"})(["display:flex;flex-flow:column nowrap;flex-basis:100%;align-items:center;justify-content:flex-start;"]),w=d.d.div.withConfig({displayName:"styles__NavigationContainer",componentId:"sc-1uls4qt-1"})(["display:flex;flex-flow:row nowrap;flex-basis:100%;align-items:center;justify-content:space-between;gap:32px;max-width:",";width:100%;margin:58px 0px;padding:0px 40px;@media (max-width:575px){flex-wrap:wrap;gap:16px;}"],(function(e){return e.theme.value.maxPageWidth})),g=Object(d.d)(o.Link).withConfig({displayName:"styles__StyledLink",componentId:"sc-1uls4qt-2"})(["display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;height:40px;padding:12px 26px;border-radius:",";background:",";box-shadow:",";color:",";text-decoration:none;cursor:pointer;> svg{margin-right:16px;color:",";pointer-events:none;}"],(function(e){return e.theme.value.borderRadius}),(function(e){return e.theme.value.colors.elements}),(function(e){return e.theme.value.shadow}),(function(e){return e.theme.value.colors.text}),(function(e){return e.theme.value.colors.text})),y=d.d.div.withConfig({displayName:"styles__CountryContentContainer",componentId:"sc-1uls4qt-3"})(["display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;gap:92px;max-width:",";width:100%;padding:0px 40px;@media (max-width:1030px){flex-direction:column;gap:56px;}@media (max-width:600px){gap:22px;}"],(function(e){return e.theme.value.maxPageWidth})),v=d.d.img.withConfig({displayName:"styles__FlagImage",componentId:"sc-1uls4qt-4"})(["max-width:520px;width:100%;@media (max-width:1030px){max-width:740px;}"]),b=d.d.div.withConfig({displayName:"styles__CountryDetailsContainer",componentId:"sc-1uls4qt-5"})(["display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:center;width:100%;height:100%;@media (max-width:1030px){align-items:center;}"]),E=d.d.h2.withConfig({displayName:"styles__Name",componentId:"sc-1uls4qt-6"})(["font-size:26px;font-weight:800;padding:22px 0px;color:",";"],(function(e){return e.theme.value.colors.text})),C=d.d.div.withConfig({displayName:"styles__InfoContainer",componentId:"sc-1uls4qt-7"})(["display:flex;flex-flow:column wrap;align-items:space-between;justify-content:flex-start;gap:8px 32px;width:100%;height:100px;"]),_=d.d.div.withConfig({displayName:"styles__TagContainer",componentId:"sc-1uls4qt-8"})(["display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start;gap:12px;margin:32px 0px;font-weight:600;color:",";@media (max-width:1030px){width:100%;}"],(function(e){return e.theme.value.colors.text})),N=function(e){var t=e.countryCode,n=Object(o.useNavigate)(),l=Object(a.useState)(null),d=l[0],m=l[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var a,i,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/alpha/"+t);case 3:if(a=e.sent,i=a.data,o=[],!(i.borders.length>=1)){e.next=11;break}return e.next=9,x.a.get("/alpha?codes="+i.borders.join(";"));case 9:l=e.sent,o=l.data;case 11:m(Object.assign({},i,{borders:o})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),e.t0.response.status&&n("/");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,m]),i.a.createElement(h,null,i.a.createElement(u.a,null),i.a.createElement(w,null,i.a.createElement(g,{to:"/"},i.a.createElement(c.b,{size:16}),"Back")),i.a.createElement(y,null,d&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{src:d.flag}),i.a.createElement(b,null,i.a.createElement(E,null,d.name),i.a.createElement(C,null,i.a.createElement(p.a,{infoKey:"Native Name",infoValue:d.nativeName}),i.a.createElement(p.a,{infoKey:"Population",infoValue:d.population}),i.a.createElement(p.a,{infoKey:"Region",infoValue:d.region}),i.a.createElement(p.a,{infoKey:"Sub Region",infoValue:d.subregion}),i.a.createElement(p.a,{infoKey:"Capital",infoValue:d.capital}),i.a.createElement(p.a,{infoKey:"Top Level Domain",infoValue:d.topLevelDomain[0]}),i.a.createElement(p.a,{infoKey:"Currencies",infoValue:d.currencies[0].name}),i.a.createElement(p.a,{infoKey:"Languages",infoValue:d.languages[0].name})),d.borders&&i.a.createElement(_,null,"Border Countries:",d.borders.map((function(e){var t=e.name;return i.a.createElement(f,null,t)})))))))};t.default=function(){return i.a.createElement(o.Router,null,i.a.createElement(N,{path:"/countries/:countryCode"}),i.a.createElement(o.Redirect,{from:"/countries/*",to:"/",noThrow:!0}))}}}]);
//# sourceMappingURL=component---src-pages-countries-tsx-c2741d2f121dba612748.js.map