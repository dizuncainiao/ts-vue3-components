var D=Object.defineProperty,R=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var A=(e,t,l)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,B=(e,t)=>{for(var l in t||(t={}))T.call(t,l)&&A(e,l,t[l]);if(b)for(var l of b(t))K.call(t,l)&&A(e,l,t[l]);return e},$=(e,t)=>R(e,H(t));import{j as k,i as F,x as E,h as I,t as S,r as h,o as n,c as a,a as d,b as m,m as _,F as p,y as v,k as M,z as N,w as g,T as U,A as j,q as V,p as q,d as z}from "./vendor.4efa26cd.js";import{B as O}from "./checkbox.e66efad8.js";import{_ as w}from "./index.f9550f2b.js";import{B as P}from "./button.940cdc42.js";function G(e, t){E(()=>{e.forEach(l=>l.selected=t.includes(l.key))})}function J(e, t, l){const u=k(!1),r=F(()=>e.filter(s=>s.selected)),i=F(()=>r.value.map(s=>s.key));t&&G(e,t.selectedRowKeys),E(()=>{u.value=e.filter(s=>!s.selected).length===0});function c(s){s?e.forEach(o=>o.selected=!0):e.forEach(o=>o.selected=!1),t==null||t.onChange(i.value,r.value),l("selectAllChange",s)}return{selectedAll:u,selectAllChange:c}}const C=k(!1),f=k(0),Q=2;let y=null;function W(e){y=window.setInterval(()=>{f.value++,console.log(f.value),f.value===Q&&(clearInterval(y),e.target.classList.add("focused"),C.value=!0)},1e3)}function X(e){clearInterval(y),e.target.classList.remove("focused"),C.value=!1,f.value=0,console.log(f.value)}const Y=I({name:"BdList",components:{BdCheckbox:O},props:{data:{type:Array,required:!0},columns:{type:Array,required:!0},rowSelection:{type:Object,default:()=>({})}},emits:["selectAllChange"],setup(e, {emit:t}){const{data:l,rowSelection:u}=S(e),{selectedAll:r,selectAllChange:i}=J(l.value,u.value,t);return{selectedAll:r,selectAllChange:i,showFocusMask:C,enterHandler:W,leaveHandler:X}}}),Z={class:"bd-list"},x={key:0},ee={key:0},te={class:"list-footer"},le={key:0,class:"tr-focus-mask"};function se(e, t, l, u, r, i){const c=h("bd-checkbox");return n(),a(p,null,[d("div",Z,[d("table",null,[d("thead",null,[d("tr",null,[e.rowSelection?(n(),a("th",x,[m(c,{modelValue:e.selectedAll,"onUpdate:modelValue":t[0]||(t[0]= s=>e.selectedAll=s),onChange:e.selectAllChange},null,8,["modelValue","onChange"])])):_("",!0),(n(!0),a(p,null,v(e.columns,(s, o)=>(n(),a("th",{key:o},V(s.title),1))),128))])]),d("tbody",null,[(n(!0),a(p,null,v(e.data, s=>(n(),a("tr",{key:s.key,onMouseenter:t[1]||(t[1]=(...o)=>e.enterHandler&&e.enterHandler(...o)),onMouseleave:t[2]||(t[2]=(...o)=>e.leaveHandler&&e.leaveHandler(...o))},[e.rowSelection?(n(),a("td",ee,[m(c,{modelValue:s.selected,"onUpdate:modelValue": o=>s.selected=o},null,8,["modelValue","onUpdate:modelValue"])])):_("",!0),(n(!0),a(p,null,v(e.columns,(o, L)=>(n(),a("td",{key:L},V(s[o.dataIndex]),1))),128))],32))),128))])]),d("div",te,[M(e.$slots,"footer",{},void 0,!0)])]),(n(),N(j,{to:"body"},[m(U,{name:"slide-fade"},{default:g(()=>[e.showFocusMask?(n(),a("div",le)):_("",!0)]),_:1})]))],64)}var oe=w(Y,[["render",se],["__scopeId","data-v-c52434ee"]]);const ne=I({name:"ListDemo",components:{BdButton:P,BdList:oe},setup(){const e=q({listData:[{name:"\u5F20\u4E09",age:20,gender:"\u7537",key:"1"},{name:"\u5F20\u4E09",age:20,gender:"\u7537",key:"2"},{name:"\u5F20\u4E09",age:20,gender:"\u7537",key:"3"}],columns:[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u6027\u522B",dataIndex:"gender"}],selectedRowKeys:["1"]});function t(l, u){console.log(l,u)}return $(B({},S(e)),{onSelectChange:t,selectAllChange: l=>{console.log("\u5168\u9009\u72B6\u6001\u662F\uFF1A",l)}})}}),ae={class:"table-box"},ue={class:"list-footer"},de=z("\u5237\u65B0\u8868\u683C");function re(e, t, l, u, r, i){const c=h("bd-button"),s=h("bd-list");return n(),a("div",ae,[m(s,{data:e.listData,columns:e.columns,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},onSelectAllChange:e.selectAllChange},{footer:g(()=>[d("div",ue,[m(c,{type:"primary",icon:"icon-jiazai_shuaxin"},{default:g(()=>[de]),_:1})])]),_:1},8,["data","columns","rowSelection","onSelectAllChange"])])}var _e=w(ne,[["render",re],["__scopeId","data-v-f5d4c2c4"]]);export{_e as default};
