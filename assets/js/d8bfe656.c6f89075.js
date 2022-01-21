"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[835],{1152:function(t,e,n){n.d(e,{Z:function(){return g}});var r=n(5861),a=n(7757),o=n.n(a),i=n(7294),s=n(9161),c=n(9669),u=n.n(c),d=n(1721),l=n(2118),p=n(6214),m=n(4639),b=function(){var t=(0,r.Z)(o().mark((function t(e){var n,r,a,i,s,c,d,l,p;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new RegExp(/https:\/\/github.com\/(.+?)\/(.+?)\/blob\/(.+?)\/(.+\.ipynb)/),r=e.match(n),a=r[1],i=r[2],s=r[3],c=r[4],d="https://api.github.com/repos/"+a+"/"+i+"/contents/"+c+"?ref="+s,t.next=6,u().get(d);case 6:return t.next=8,t.sent.data;case 8:return l=t.sent,o=JSON.parse((m=l.content,decodeURIComponent(atob(m).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join("")))),p={cells:o.cells.map((function(t){if("markdown"==t.cell_type){var e=t.source.join("").trim().replace(/(\${1,2})((?:\\.|[\s\S])*?)\1/g,(function(t,e,n){return e+n.replace(/\r?\n/g,"")+e}));return{cell_type:t.cell_type,id:t.id,metadata:t.metadata,source:e.split(/(?<=\r?\n)/)}}return t})),metadata:o.metadata,nbformat:o.nbformat,nbformat_minor:o.nbformat_minor},console.log(p),t.abrupt("return",p);case 12:case"end":return t.stop()}var o,m}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return i.createElement(d.D,{remarkPlugins:[l.Z],rehypePlugins:[p.Z],children:t.source})};function g(t){var e=t.notebookURL,n=i.useState(null),r=n[0],a=n[1];return i.useEffect((function(){b(e).then(a)}),[e]),i.createElement("div",{className:"NotebookViewer"},null===r?"Loading notebook...":i.createElement(s.Z,{source:r,code:m.Z,markdown:f}))}},2790:function(t,e,n){var r=n(5068),a=n(7294),o=n(1146),i=function(t){function e(){return t.apply(this,arguments)||this}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.embedding=o.embed(this.props.url,this.el,{allowInteract:!0,showRenderProgress:!0})},n.componentWillUnmount=function(){this.embedding.then((function(t){return t.detach()}))},n.render=function(){var t=this;return a.createElement("div",{className:"NotebookEmbed",ref:function(e){return t.el=e}})},e}(a.Component);e.Z=i},5972:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(2790),n(1152)),s=n(6396),c=n(8215),u=["components"],d={id:"strange-attractors",sidebar_position:2,title:"Strange Attractors",hide_title:!0},l=void 0,p={unversionedId:"01.26-Wednesday/strange-attractors",id:"01.26-Wednesday/strange-attractors",title:"Strange Attractors",description:"",source:"@site/docs/01.26-Wednesday/strange-attractors.mdx",sourceDirName:"01.26-Wednesday",slug:"/01.26-Wednesday/strange-attractors",permalink:"/generative-art-workshop-website/docs/01.26-Wednesday/strange-attractors",editUrl:"https://github.com/gvarnavi/generative-art-workshop-website/edit/main/website/docs/01.26-Wednesday/strange-attractors.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"strange-attractors",sidebar_position:2,title:"Strange Attractors",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Mathematical Fractals",permalink:"/generative-art-workshop-website/docs/01.26-Wednesday/mathematical-fractals"},next:{title:"GAN Art",permalink:"/generative-art-workshop-website/docs/01.28-Friday/gan-art"}},m=[],b={toc:m};function f(t){var e=t.components,n=(0,a.Z)(t,u);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{lazy:!0,mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"py-ipynb",label:"Python - Jupyter",default:!0,mdxType:"TabItem"},(0,o.kt)(i.Z,{notebookURL:"https://github.com/gvarnavi/generative-art-iap/blob/master/01.26-Wednesday/02_strange-attractors-py.ipynb",mdxType:"NotebookViewer"})),(0,o.kt)(c.Z,{value:"wl-ipynb",label:"Wolfram Language - Jupyter",mdxType:"TabItem"},(0,o.kt)(i.Z,{notebookURL:"https://github.com/gvarnavi/generative-art-iap/blob/master/01.26-Wednesday/02X_strange-attractors-wl.ipynb",mdxType:"NotebookViewer"}))))}f.isMDXComponent=!0}}]);