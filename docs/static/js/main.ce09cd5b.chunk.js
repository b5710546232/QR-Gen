(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports=n(209)},209:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),o=n.n(i),c=n(35),l=n.n(c),s=n(44),u=n(64),d=n(91),h=n(92),p=n(107),f=n(93),m=n(108),g=(n(118),n(213)),y=n(211),w=n(210),v=n(214),x=n(215),b=n(208),k=n(94),E=n.n(k),C=n(95),j=n.n(C),T=n(47);function O(e){var t={};return e.forEach(function(e){return t[e]=function(e){return new URLSearchParams(window.location.search).get(e)}(e)||function(e){return localStorage.getItem(e)}(e)||""}),t}function R(e){var t=function(e){var t=Object.assign(e,{});return Object.keys(t).forEach(function(e){t[e]||delete t[e]}),t}(e);window.history.pushState(null,"","?".concat(j.a.stringify(t))),T.a.pageview(window.location.pathname+window.location.search)}function U(e){return A.apply(this,arguments)}function A(){return(A=Object(s.a)(l.a.mark(function e(t){var n,a,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(t);case 4:if((n=e.sent).blob){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,n.blob();case 9:return a=e.sent,e.next=12,new Promise(function(e){var t=new FileReader;t.onload=function(){return e(t.result)},t.readAsDataURL(a)});case 12:return r=e.sent,e.abrupt("return",r);case 14:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var D=n(96),S=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={imageUrl:"",text:"",title:"",textAsTitle:!1},n.onChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(u.a)({},r,a))},n.onChecked=function(e){var t=e.target,a=t.checked,r=t.name;n.setState(Object(u.a)({},r,a))},n.updateQr=Object(s.a)(l.a.mark(function e(){var t,a,r,i,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.imageUrl,r=t.text,e.next=3,U(a);case 3:i=e.sent,o=i?{src:i}:{logoSize:0,borderSize:0},r&&D.a.toCanvas({canvas:n.qr,width:480,content:r,download:!0,downloadName:"".concat(r,".png"),logo:o}).then(n.updateTitle);case 6:case"end":return e.stop()}},e,this)})),n.updateTitle=function(){var e=n.state.title,t=n.qr.getContext("2d");t.font="14px Kanit",t.fillStyle="black",t.textAlign="center",t.fillText(e||"",n.qr.width/2,n.qr.height-14)},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.updateDefaultData(),this.reRenderQRWhenFontIsLoaded()}},{key:"componentDidUpdate",value:function(e,t){this.updateTitleAsText(t),this.updateData(),this.updateQr()}},{key:"updateDefaultData",value:function(){var e=O(["imageUrl","text","title"]);this.setState(e)}},{key:"updateData",value:function(){var e;R(this.state),e=this.state,Object.keys(e).forEach(function(t){return localStorage.setItem(t,e[t])})}},{key:"updateTitleAsText",value:function(e){var t=this.state,n=t.textAsTitle,a=t.text,r=e.text,i=e.textAsTitle;(a!==r||n!==i)&&n&&this.setState({title:a})}},{key:"reRenderQRWhenFontIsLoaded",value:function(){new E.a("Kanit").load().then(this.updateQr)}},{key:"render",value:function(){var e=this,t=this.state,n=t.imageUrl,a=t.text,i=t.title;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minHeight:"100vh",background:"gray",padding:"24px 0"}},r.a.createElement(g.a,{style:{width:"100%",maxWidth:900}},r.a.createElement(y.a,null,r.a.createElement(w.a,{span:24,style:{display:"flex",justifyContent:"center",padding:16}},r.a.createElement("canvas",{ref:function(t){return e.qr=t},crossOrigin:"Anonymous",style:{width:480,height:480,background:"gray"}})),r.a.createElement(w.a,{span:24,style:{padding:16,display:"flex",justifyContent:"center",flexDirection:"column"}},r.a.createElement(v.a,{name:"text",placeholder:"Text / Url",style:{marginBottom:16},onChange:this.onChange,value:a}),r.a.createElement(v.a,{name:"imageUrl",placeholder:"Logo Url",onChange:this.onChange,value:n,style:{marginBottom:16}}),r.a.createElement(v.a,{name:"title",placeholder:"Title (optional)",onChange:this.onChange,value:i,style:{marginBottom:16}}),r.a.createElement(x.a,{name:"textAsTitle",style:{marginBottom:16},onChange:this.onChecked},"Use Text as Title"),r.a.createElement("a",{ref:function(t){return e.download=t},download:"".concat(a,".png"),href:"/"},r.a.createElement(b.a,{type:"primary",icon:"download",size:"large",style:{width:"100%"},onClick:function(){return function(e,t){if(e&&t){var n=e.toDataURL("image/png").replace("image/png","image/octet-stream");t.setAttribute("href",n)}}(e.qr,e.download)}},"Download")),r.a.createElement("span",null,"Powered by ReiiYuki on ",r.a.createElement("a",{href:"https://github.com/ReiiYuki/QR-Gen"},"https://github.com/ReiiYuki/QR-Gen"))))))}}]),t}(a.Component);T.a.initialize("UA-133277763-1"),o.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[111,2,1]]]);
//# sourceMappingURL=main.ce09cd5b.chunk.js.map