"use strict";(self.webpackChunktart_website=self.webpackChunktart_website||[]).push([[415],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(f,s(s({ref:t},l),{},{components:r})):a.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},s="Measurement Sets",i={unversionedId:"tutorial-extras/measurement-sets",id:"tutorial-extras/measurement-sets",title:"Measurement Sets",description:"Share your data to others.",source:"@site/docs/tutorial-extras/measurement-sets.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/measurement-sets",permalink:"/tart_website/sw/docs/tutorial-extras/measurement-sets",draft:!1,editUrl:"https://github.com/tart-telescope/tart_website/docs/tutorial-extras/measurement-sets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Calibration",permalink:"/tart_website/sw/docs/tutorial-extras/calibration"},next:{title:"How to use Docosaurus",permalink:"/tart_website/sw/docs/category/how-to-use-docosaurus"}},c={},u=[{value:"Tracking Objects",id:"tracking-objects",level:2},{value:"Coordinate Systems",id:"coordinate-systems",level:2}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"measurement-sets"},"Measurement Sets"),(0,n.kt)("p",null,"Share your data to others."),(0,n.kt)("p",null,"Measurement Sets are a widely used data format for radio astronomy data. The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tart-telescope/tart2ms"},"tart2ms")," tools are used to create measurement sets from TART data."),(0,n.kt)("h2",{id:"tracking-objects"},"Tracking Objects"),(0,n.kt)("p",null,"The tart2ms tool can track objects."),(0,n.kt)("h2",{id:"coordinate-systems"},"Coordinate Systems"),(0,n.kt)("p",null,"We use the XXXX coordinate system to specify celestial coordinates... Ben to continue here... You can generate these using the sample code below"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import astropy as ap\n...\n")))}p.isMDXComponent=!0}}]);