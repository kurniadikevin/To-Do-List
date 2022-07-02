(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),c=n.n(i)()(r());c.push([e.id,"body{\n    background-color:  rgb(25,25,25);\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.5fr;\n    height: 100vh;\n    margin: 0;\n    color: white;\n}\n\nbody>div{\n    border: 1px solid grey;\n}\n\n.header{\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    padding-left: 20px;\n    background-color: rgb(40,40,40);\n}\n\n    .title{\n        font-size: 25pt;\n    }\n\n.main>div{\n    border: 1px solid grey;\n}\n\n.main{\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n}\n\n    .side-col{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 20px;\n    }\n        .project-head{\n            font-size: 20pt;\n            font-weight: 800;\n            \n        }\n\n        #project-main{\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n            gap: 10px;\n            font-size: 15pt;\n        }\n\n        .project-input{\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n        }\n\n            .project{\n                cursor: pointer;\n            }\n            \n\n    .project-cont{\n        border: 1px solid red;\n        display: grid;\n        grid-template-rows: 4fr 1fr;\n    }\n        .project-name-head{\n            font-size: 20pt;\n        }\n\n        .btn-list{\n            width: 100px;\n        }\n\n        .btn-del{\n            width: 100px;\n        }\n\n#form-item{\n    width: 500px;\n    height: 400px;\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    top: 15%;\n    left: 0;\n    right: 0;\n    border: 2px solid black;\n    color: black;\n    padding: 10px;\n}\n\n.content-child{\n    border: 1px solid white;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 3fr 1fr;\n}\n    .title-ui{\n        grid-column: 1/2;\n    }\n\n    .note-ui{\n        grid-column: 1/3;\n        grid-row: 2/4;\n    }\n\n    .dueDate-ui{\n        grid-column: 1/2;\n        grid-row: 3/4\n    }\n\n    .priority-ui{\n        grid-column: 2/3;\n        grid-row: 3/4;\n    }\n",""]);const a=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(c[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var l=e[a],d=o.base?l[0]+o.base:l[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var l=o(e,r),d=0;d<i.length;d++){var s=n(i[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),c=n.n(i),a=n(565),l=n.n(a),d=n(216),s=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const y=document.querySelector("body"),h=document.querySelector(".main"),v=document.querySelector(".header"),g=document.querySelector(".footer"),b=document.querySelector(".add-btn"),x=document.querySelector(".del-btn"),C=document.querySelector("#p-input"),L=document.querySelector("#project-main"),E=document.querySelector("#content"),S=(document.querySelector("#content-list"),function(e,t,n,o){this.title=e,this.note=t,this.dueDate=n,this.priority=o,this.data=function(){return[e,t,n,o]}}),w=[],q=[],j=function(){E.removeChild(E.lastElementChild)},T=function(){const e=document.createElement("div");e.setAttribute("id","form-item"),e.innerHTML='\n        <label for="title">Title</label>\n        <span class="close">&times;</span>\n        <br>\n        <input type="text" id="title" name="title" value=""><br>\n        <label for="note">Note</label><br>\n        <input type="text" id="note" name="note" value="" style="width:400px; height: 200px;"><br><br>\n        <label for="due-date">Due</label><input type="date" id="due-date">\n        <select id="priority" name="priority">\n        <option value="Urgent">Urgent</option>\n        <option value="Not Urgent">Not urgent</option>\n        </select> \n        <button class=\'submit-add\'>Add</button>\n        ',e.style.display="inline",y.appendChild(e),e.style.backgroundColor="white",h.style.opacity="0.1",v.style.opacity="0.1",g.style.opacity="0.1",e.style.opacity="1",console.log("test form"),document.querySelector(".close").addEventListener("click",(function(){e.style.display="none",h.style.opacity="1",v.style.opacity="1",g.style.opacity="1"})),document.querySelector(".submit-add").addEventListener("click",(function(){const t=document.querySelector("#title"),n=document.querySelector("#note"),o=document.querySelector("#due-date"),r=document.querySelector("#priority");let i=new S(`${t.value},${n.value},${o.value},${r.value}`);q.push(i.data()),console.log(q);const c=document.createElement("div");c.classList.add("content-child-cont"),E.appendChild(c);for(let e=0;e<q.length;e++){c.innerHTML="";const t=document.createElement("div");t.classList.add("content-child"),c.appendChild(t);const n=document.createElement("div");n.classList.add("title-ui"),n.textContent=q[e][0],t.appendChild(n);const o=document.createElement("div");o.classList.add("note-ui"),o.textContent=q[e][1],t.appendChild(o);const r=document.createElement("div");r.classList.add("dueDate-ui"),r.textContent=q[e][2],t.appendChild(r);const i=document.createElement("div");i.classList.add("priority-ui"),i.textContent=q[e][3],t.appendChild(i)}console.log("subtimed add form!!"),console.log(t.value),e.style.display="none",e.innerHTML="",h.style.opacity="1",v.style.opacity="1",g.style.opacity="1"}))},M=function(){const e=document.createElement("div");e.classList.add("project-cont");const t=document.createElement("div");t.classList.add("project-name-head"),t.textContent=this.textContent,E.innerHTML="",e.appendChild(t),E.appendChild(e);const n=document.createElement("button");n.classList.add("btn-list"),n.textContent="Add List",e.appendChild(n);const o=document.createElement("button");o.classList.add("btn-del"),o.textContent="Remove",e.appendChild(o),n.addEventListener("click",T),o.addEventListener("click",j),console.log("test project list"),function(){const e=document.createElement("div");e.classList.add("content-child-cont"),content.appendChild(e);for(let t=0;t<q.length;t++){e.innerHTML="";const n=document.createElement("div");n.classList.add("content-child"),content.appendChild(n);const o=document.createElement("div");o.classList.add("title-ui"),o.textContent=q[t][0],n.appendChild(o);const r=document.createElement("div");r.classList.add("note-ui"),r.textContent=q[t][1],n.appendChild(r);const i=document.createElement("div");i.classList.add("dueDate-ui"),i.textContent=q[t][2],n.appendChild(i);const c=document.createElement("div");c.classList.add("priority-ui"),c.textContent=q[t][3],n.appendChild(c)}}(),console.log(q)};console.log("testing!"),b.addEventListener("click",(function(){const e=C.value;L.innerHTML+=`<div class='project'> ${e} <div>`,w.push(e),console.log(w),C.value=" ",console.log("add btn");const t=document.querySelectorAll(".project");for(let e=0;e<t.length;e++)t[e].addEventListener("click",M)})),x.addEventListener("click",(function(){L.removeChild(L.lastElementChild),console.log("del-btn"),w.pop(),console.log(w)}))})()})();