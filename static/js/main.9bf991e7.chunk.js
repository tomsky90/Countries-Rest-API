(this["webpackJsonpcounties-api"]=this["webpackJsonpcounties-api"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),s=a.n(r),i=(a(24),a(10)),o=a.n(i),l=a(12),u=a(7),j=a(8),d=a(2),h=(a(26),a(0)),p=function(e){var t=e.setDarkMode,a=e.darkMode;return Object(h.jsxs)("header",{className:a?"header dark-mode dark-elements":"header ligth-mode ligth-elements",children:[Object(h.jsx)("h4",{children:"Where in the world?"}),Object(h.jsxs)("button",{className:a?" dark-mode ":"ligth-mode",onClick:function(){t(!a)},children:[" ",Object(h.jsx)("i",{className:"fas fa-moon"})," Dark Mode"]})]})},b=(a(28),Object(d.f)((function(e){var t=e.match,a=e.darkMode,c=e.countriesListData,r=e.setSelectValue,s=Object(n.useState)({currencies:[],languages:[],borders:[],population:""}),i=Object(u.a)(s,2),d=i[0],p=i[1];Object(n.useEffect)((function(){b()}),[t]);var b=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/alpha/".concat(t.params.alpha3Code)).then((function(e){return e.json()})).then((function(e){p(e),r("Filter by Region")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"detail-page",children:[Object(h.jsxs)(j.b,{className:a?"home-link dark-elements":"home-link ligth-elements",to:"/",children:[" ",Object(h.jsx)("i",{className:"fas fa-long-arrow-alt-left "})," Back"]}),Object(h.jsxs)("section",{className:"detail-page-section",children:[Object(h.jsx)("div",{className:"flag-img-container",children:Object(h.jsx)("img",{alt:"flag of ".concat(d.name),src:"".concat(d.flag)})}),Object(h.jsxs)("div",{className:"country-detail-text-container",children:[Object(h.jsx)("h1",{children:d.name}),Object(h.jsxs)("p",{children:["Native Name: ",Object(h.jsx)("span",{children:d.nativeName})]}),Object(h.jsxs)("p",{children:["Population: ",Object(h.jsx)("span",{children:d.population.toLocaleString()})]}),Object(h.jsxs)("p",{children:["Region: ",Object(h.jsx)("span",{children:d.region})]}),Object(h.jsxs)("p",{children:["Sub Region: ",Object(h.jsx)("span",{children:d.subregion})]}),Object(h.jsxs)("p",{children:["Capital: ",Object(h.jsx)("span",{children:d.capital})]}),Object(h.jsxs)("p",{className:"add-space",children:["Top Level Domain: ",Object(h.jsx)("span",{children:d.topLevelDomain})]}),Object(h.jsxs)("p",{children:["Currencies: ",d.currencies.map((function(e){return Object(h.jsx)("span",{children:"".concat(e.name)},999e3*Math.random())}))," "]}),Object(h.jsxs)("p",{children:["Languages: ",d.languages.map((function(e){return Object(h.jsx)("span",{children:"".concat(e.name,"   , ")},999e3*Math.random())})),"          "]}),Object(h.jsxs)("div",{className:"borders-btn-container",children:[Object(h.jsx)("h4",{children:"Border Countries:"}),d.borders.map((function(e){var t=c.filter((function(t){return t.alpha3Code===e})),n=t.map((function(e){return e.name})),r=t.map((function(e){return e.alpha3Code}));return Object(h.jsx)(j.b,{to:"/countriesList/".concat(r),id:r,className:a?"border-country dark-elements":"border-country ligth-elements",children:n},999e3*Math.random())}))]})]})]},999e3*Math.random())]})}))),m=(a(34),function(e){var t=e.setInputValue,a=e.setError,c=e.inputValue,r=e.darkMode,s=e.selectValue,i=e.setSelectValue,o=e.countriesListData,l=e.setCountriesDataForDisplay,u=e.countriesDataForDisplay;return Object(n.useEffect)((function(){var e=s.toLowerCase();l("all"===s||"Filter by Region"===s?o:o.filter((function(t){return t.region.toLowerCase().includes(e)})))}),[s]),Object(n.useEffect)((function(){if(""===c)l(o),a(!1);else{var e=c.toLowerCase();l(o.filter((function(t){return t.name.toLowerCase().includes(e)}))),i("Filter by Region"),console.log(u),u.length<=0?a(!0):u.length>=0&&a(!1)}}),[c]),Object(h.jsxs)("form",{className:r?" dark-mode":" ligth-mode",children:[Object(h.jsxs)("div",{className:"input-wrapper",children:[Object(h.jsx)("i",{className:r?"fas fa-search dark-mode dark-elements":"fas fa-search ligth-mode ligth-elements"}),Object(h.jsx)("input",{"aria-label":"search",className:r?"dark-mode dark-elements":"ligth-mode ligth-elements",placeholder:" Search for a country...",type:"text",value:c,onChange:function(e){!function(e){t(e.target.value)}(e)}})]}),Object(h.jsx)("div",{className:"select-wrapper",children:Object(h.jsxs)("select",{onChange:function(e){!function(e){i(e.target.value)}(e)},value:s,className:r?"dark-mode dark-elements":"ligth-mode ligth-elements",name:"regions",id:"region-select",children:[Object(h.jsx)("option",{"aria-label":"option",value:"Filter by Region",children:" Filter by Region"}),Object(h.jsx)("option",{"aria-label":"option",value:"all",children:"All"}),Object(h.jsx)("option",{"aria-label":"option",value:"africa",children:"Africa"}),Object(h.jsx)("option",{"aria-label":"option",value:"americas",children:"Americas"}),Object(h.jsx)("option",{"aria-label":"option",value:"asia",children:"Asia"}),Object(h.jsx)("option",{"aria-label":"option",value:"europe",children:"Europe"}),Object(h.jsx)("option",{"aria-label":"option",value:"oceania",children:"Oceania"})]})})]})}),O=(a(35),function(e){var t=e.countriesDataForDisplay,a=e.darkMode,n=t.map((function(e){return Object(h.jsxs)("article",{className:a?"dark-elements":"ligth-elements",children:[Object(h.jsx)("img",{className:"flag-img",alt:"flag of ".concat(e.name),src:"".concat(e.flag)}),Object(h.jsxs)("div",{className:"text-wrapper",children:[Object(h.jsx)(j.b,{to:"/countriesList/".concat(e.alpha3Code),children:Object(h.jsx)("h2",{className:a?"dark-elements":"ligth-elements",children:e.name})}),Object(h.jsxs)("p",{children:["Population: ",Object(h.jsx)("span",{children:e.population.toLocaleString()})]}),Object(h.jsxs)("p",{children:["Region: ",Object(h.jsx)("span",{children:e.region})]}),Object(h.jsxs)("p",{children:["Capital: ",Object(h.jsx)("span",{children:e.capital})]})]})]},e.name)}));return Object(h.jsx)("div",{className:"countries-wrapper",children:n})}),f=(a(36),function(e){var t=e.countriesListData,a=e.countriesDataForDisplay,n=e.setCountriesDataForDisplay,c=e.darkMode,r=e.selectValue;return Object(h.jsx)("div",{className:c?"countries-list dark-mode":"countries-list light-mode",children:Object(h.jsx)(O,{darkMode:c,countriesListData:t,countriesDataForDisplay:a,setCountriesDataForDisplay:n,selectValue:r})})}),x=(a(37),function(){return Object(h.jsx)("div",{className:"error-page",children:Object(h.jsx)("h1",{children:"Sorry we coudn't find what you are looking for"})})}),g=function(e){var t=e.error,a=e.setError,n=e.darkMode,c=e.countriesListData,r=e.countriesDataForDisplay,s=e.setCountriesDataForDisplay,i=e.selectValue,o=e.setSelectValue,l=e.inputValue,u=e.setInputValue;return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{setError:a,darkMode:n,countriesListData:c,countriesDataForDisplay:r,setCountriesDataForDisplay:s,selectValue:i,setSelectValue:o,inputValue:l,setInputValue:u}),t?Object(h.jsx)(x,{}):Object(h.jsx)(f,{darkMode:n,countriesListData:c,countriesDataForDisplay:r,setCountriesDataForDisplay:s,selectValue:i,setSelectValue:o})]})};a(38);var v=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(u.a)(r,2),i=s[0],m=s[1],O=Object(n.useState)(""),f=Object(u.a)(O,2),x=f[0],v=f[1],D=Object(n.useState)("Filter by Region"),k=Object(u.a)(D,2),y=k[0],N=k[1],C=Object(n.useState)([]),F=Object(u.a)(C,2),L=F[0],V=F[1],w=Object(n.useState)([]),S=Object(u.a)(w,2),M=S[0],E=S[1];Object(n.useEffect)((function(){R()}),[]);var R=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all").then((function(e){if(e.ok)return e;throw Error("somthing went wrong")})).then((function(e){return e.json()})).then((function(e){V(e),E(e),c(!1)})).catch((function(e){c(!0),E([])}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(j.a,{children:Object(h.jsxs)("div",{className:i?"App dark-mode":"App ligth-mode",children:[Object(h.jsx)(p,{darkMode:i,setDarkMode:m}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/",exact:!0,children:Object(h.jsx)(g,{error:a,setError:c,darkMode:i,countriesListData:L,countriesDataForDisplay:M,setCountriesDataForDisplay:E,selectValue:y,inputValue:x,setSelectValue:N,setInputValue:v})}),Object(h.jsx)(d.a,{path:"/countriesList/:alpha3Code",exact:!0,children:Object(h.jsx)(b,{darkMode:i,countriesListData:L,setSelectValue:N})})]})]})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),D()}},[[39,1,2]]]);
//# sourceMappingURL=main.9bf991e7.chunk.js.map