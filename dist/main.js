(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"body{\n    background-color:  rgb(25,25,25);\n    display: grid;\n    grid-template-rows: 1fr 12fr 0.5fr;\n    height: 100vh;\n    margin: 0;\n    color: white;\n}\n\nbody>div{\n    border: 1px solid grey;\n}\n\n.header{\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    padding-left: 20px;\n    background-color: rgb(40,40,40);\n}\n\n    .title{\n        font-size: 25pt;\n    }\n\n.main>div{\n    border: 1px solid grey;\n}\n\n.main{\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n}\n\n    .side-col{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 20px;\n    }\n        .project-head{\n            font-size: 20pt;\n            font-weight: 800;\n            \n        }\n\n        #project-main{\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n            gap: 10px;\n            font-size: 15pt;\n        }\n\n        .project-input{\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n        }\n\n            .project{\n                cursor: pointer;\n            }\n            \n\n    .project-cont{\n        border: 1px solid red;\n        display: grid;\n        grid-template-rows: 4fr 1fr;\n    }\n        .project-name-head{\n            font-size: 20pt;\n        }\n\n        .btn-list{\n            width: 100px;\n        }\n\n        .btn-del{\n            width: 100px;\n        }\n\n#form-item{\n    width: 500px;\n    height: 400px;\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    top: 15%;\n    left: 0;\n    right: 0;\n    border: 2px solid black;\n    color: black;\n    padding: 10px;\n}\n\n.content-child{\n    border: 1px solid white;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 3fr 1fr;\n}\n    .title-ui{\n        grid-column: 1/2;\n    }\n\n    .note-ui{\n        grid-column: 1/3;\n        grid-row: 2/4;\n    }\n\n    .dueDate-ui{\n        grid-column: 1/2;\n        grid-row: 3/4\n    }\n\n    .priority-ui{\n        grid-column: 2/3;\n        grid-row: 3/4;\n    }\n",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],d=o.base?l[0]+o.base:l[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var l=o(e,r),d=0;d<i.length;d++){var s=n(i[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{var e={};n.r(e),n.d(e,{_O:()=>q,o8:()=>w});var t=n(379),o=n.n(t),r=n(795),i=n.n(r),a=n(569),c=n.n(a),l=n(565),d=n.n(l),s=n(216),u=n.n(s),p=n(589),m=n.n(p),f=n(426),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=u(),o()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector("body"),v=document.querySelector(".main"),g=document.querySelector(".header"),b=document.querySelector(".footer"),x=document.querySelector(".add-btn"),C=document.querySelector(".del-btn"),S=document.querySelector("#p-input"),L=document.querySelector("#project-main"),E=document.querySelector("#content"),j=(document.querySelector("#content-list"),function(e,t,n,o){this.title=e,this.note=t,this.dueDate=n,this.priority=o,this.data=function(){return[e,t,n,o]}}),w=[];let q=[];const I=function(){E.removeChild(E.lastElementChild)},T=function(e){const t=document.createElement("div");t.setAttribute("id","form-item"),t.innerHTML='\n        <label for="title">Title</label>\n        <span class="close">&times;</span>\n        <br>\n        <input type="text" id="title" name="title" value=""><br>\n        <label for="note">Note</label><br>\n        <input type="text" id="note" name="note" value="" style="width:400px; height: 200px;"><br><br>\n        <label for="due-date">Due</label><input type="date" id="due-date">\n        <select id="priority" name="priority">\n        <option value="Urgent">Urgent</option>\n        <option value="Not Urgent">Not urgent</option>\n        </select> \n        <button class=\'submit-add\'>Add</button>\n        ',t.style.display="inline",h.appendChild(t),t.style.backgroundColor="white",v.style.opacity="0.1",g.style.opacity="0.1",b.style.opacity="0.1",t.style.opacity="1",console.log("test form"),document.querySelector(".close").addEventListener("click",(function(){t.style.display="none",v.style.opacity="1",g.style.opacity="1",b.style.opacity="1"})),document.querySelector(".submit-add").addEventListener("click",(function(e){const n=document.querySelector("#title"),o=document.querySelector("#note"),r=document.querySelector("#due-date"),i=document.querySelector("#priority");let a=new j(`${n.value},${o.value},${r.value},${i.value}`);q.push(a.data()),console.log(q),e=document.querySelector(".project-name-head").textContent,localStorage.setItem(e,JSON.stringify(q));let c=JSON.parse(localStorage.getItem(e));const l=document.createElement("div");l.classList.add("content-child-cont"),E.appendChild(l);for(let e=0;e<c.length;e++){l.innerHTML="";const t=document.createElement("div");t.classList.add("content-child"),l.appendChild(t);const n=document.createElement("div");n.classList.add("title-ui"),n.textContent=c[e][0],t.appendChild(n);const o=document.createElement("div");o.classList.add("note-ui"),o.textContent=c[e][1],t.appendChild(o);const r=document.createElement("div");r.classList.add("dueDate-ui"),r.textContent=c[e][2],t.appendChild(r);const i=document.createElement("div");i.classList.add("priority-ui"),i.textContent=c[e][3],t.appendChild(i)}console.log("subtimed add form!!"),console.log(n.value),t.style.display="none",t.innerHTML="",v.style.opacity="1",g.style.opacity="1",b.style.opacity="1"}))},M=function(){const e=document.createElement("div");e.classList.add("project-cont");const t=document.createElement("div");t.classList.add("project-name-head"),t.textContent=this.textContent,this.textContent,E.innerHTML="",e.appendChild(t),E.appendChild(e);const n=document.createElement("button");n.classList.add("btn-list"),n.textContent="Add List",e.appendChild(n);const o=document.createElement("button");o.classList.add("btn-del"),o.textContent="Remove",e.appendChild(o),n.addEventListener("click",T),o.addEventListener("click",I),console.log("test project list"),function(){const e=document.createElement("div");e.classList.add("content-child-cont"),content.appendChild(e);let t=document.querySelector(".project-name-head").textContent,n=JSON.parse(localStorage.getItem(t));console.log("keynamedata"+n);for(let t=0;t<n.length;t++){e.innerHTML="";const o=document.createElement("div");o.classList.add("content-child"),content.appendChild(o);const r=document.createElement("div");r.classList.add("title-ui"),r.textContent=n[t][0],o.appendChild(r);const i=document.createElement("div");i.classList.add("note-ui"),i.textContent=n[t][1],o.appendChild(i);const a=document.createElement("div");a.classList.add("dueDate-ui"),a.textContent=n[t][2],o.appendChild(a);const c=document.createElement("div");c.classList.add("priority-ui"),c.textContent=n[t][3],o.appendChild(c)}}(),console.log(q)};console.log("testing! OIIIIIIII"),localStorage.clear(),x.addEventListener("click",(function(){const e=S.value;L.innerHTML+=`<div class='project'> ${e} <div>`,w.push(e),localStorage.setItem("projectName",w),console.log("projectData"+w),S.value=" ",console.log("add btn");const t=document.querySelectorAll(".project");for(let e=0;e<t.length;e++)t[e].addEventListener("click",M)})),C.addEventListener("click",(function(){L.removeChild(L.lastElementChild),console.log("del-btn"),w.pop(),localStorage.setItem("projectName",w),console.log(w)}))})()})();