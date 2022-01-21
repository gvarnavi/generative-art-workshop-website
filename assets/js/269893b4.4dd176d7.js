"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[184],{1152:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(5861),a=n(7757),o=n.n(a),s=n(7294),i=n(9161),u=n(9669),c=n.n(u),l=n(724),d=n.n(l),m=n(4922),p=n(3811),b=n(4639),f=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a,s,i,u,l,d,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new RegExp(/https:\/\/github.com\/(.+?)\/(.+?)\/blob\/(.+?)\/(.+\.ipynb)/),r=t.match(n),a=r[1],s=r[2],i=r[3],u=r[4],l="https://api.github.com/repos/"+a+"/"+s+"/contents/"+u+"?ref="+i,e.next=6,c().get(l);case 6:return e.next=8,e.sent.data;case 8:return d=e.sent,o=JSON.parse((p=d.content,decodeURIComponent(atob(p).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")))),m={cells:o.cells.map((function(e){if("markdown"==e.cell_type){var t=e.source.join("").trim().replace(/(\${1,2})((?:\\.|[\s\S])*?)\1/g,(function(e,t,n){return t+n.replace(/\s/g,"")+t}));return{cell_type:e.cell_type,id:e.id,metadata:e.metadata,source:t.split(/(?<=\r?\n)/)}}return e})),metadata:o.metadata,nbformat:o.nbformat,nbformat_minor:o.nbformat_minor},console.log(m),e.abrupt("return",m);case 12:case"end":return e.stop()}var o,p}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){var t={math:function(e){var t=e.value;return s.createElement(p.Z,{block:!0,math:t})},inlineMath:function(e){var t=e.value;return s.createElement(p.Z,{math:t})},code:function(e){return s.createElement(b.Z,{language:e.language},e.value)}};return s.createElement(d(),{renderers:t,plugins:[m.Z],source:e.source})};function h(e){var t=e.notebookURL,n=s.useState(null),r=n[0],a=n[1];return s.useEffect((function(){f(t).then(a)}),[t]),s.createElement("div",{className:"NotebookViewer"},null===r?"Loading notebook...":s.createElement(i.Z,{source:r,markdown:y,code:b.Z}))}},2790:function(e,t,n){var r=n(5068),a=n(7294),o=n(1146),s=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.embedding=o.embed(this.props.url,this.el,{allowInteract:!0,showRenderProgress:!0})},n.componentWillUnmount=function(){this.embedding.then((function(e){return e.detach()}))},n.render=function(){var e=this;return a.createElement("div",{className:"NotebookEmbed",ref:function(t){return e.el=t}})},t}(a.Component);t.Z=s},6110:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return b},default:function(){return y}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=n(2790),i=n(1152),u=n(6396),c=n(8215),l=["components"],d={id:"audio-l-systems",sidebar_position:3,title:"Audio L-Systems",hide_title:!0},m=void 0,p={unversionedId:"01.25-Tuesday/audio-l-systems",id:"01.25-Tuesday/audio-l-systems",title:"Audio L-Systems",description:"",source:"@site/docs/01.25-Tuesday/audio-l-systems.mdx",sourceDirName:"01.25-Tuesday",slug:"/01.25-Tuesday/audio-l-systems",permalink:"/generative-art-workshop-website/docs/01.25-Tuesday/audio-l-systems",editUrl:"https://github.com/gvarnavi/generative-art-workshop-website/edit/main/website/docs/01.25-Tuesday/audio-l-systems.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"audio-l-systems",sidebar_position:3,title:"Audio L-Systems",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Geometric L-Systems",permalink:"/generative-art-workshop-website/docs/01.25-Tuesday/geometric-l-systems"},next:{title:"Mathematical Fractals",permalink:"/generative-art-workshop-website/docs/01.26-Wednesday/mathematical-fractals"}},b=[],f={toc:b};function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{lazy:!0,mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"wl-ipynb",label:"Wolfram Language - Jupyter",default:!0,mdxType:"TabItem"},(0,o.kt)(i.Z,{notebookURL:"https://github.com/gvarnavi/generative-art-iap/blob/master/01.25-Tuesday/04X_audio-l-systems-wl.ipynb",mdxType:"NotebookViewer"})),(0,o.kt)(c.Z,{value:"wl-nb",label:"Wolfram Language",mdxType:"TabItem"},(0,o.kt)(s.Z,{url:"https://www.wolframcloud.com/obj/gvarnavi/Published/04_audio-l-systems.nb",mdxType:"NotebookEmbed"}))))}y.isMDXComponent=!0}}]);