var V=Object.defineProperty,N=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var $=(o,t,s)=>t in o?V(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,E=(o,t)=>{for(var s in t||(t={}))D.call(t,s)&&$(o,s,t[s]);if(F)for(var s of F(t))H.call(t,s)&&$(o,s,t[s]);return o},h=(o,t)=>N(o,w(t));import{B as p}from "./button.940cdc42.js";import{_ as A}from "./index.f9550f2b.js";import{h as S,u as I,t as g,i as v,j as R,o as C,c as z,k,l as e,n as x,m as j,p as P,a as y,b as r,w as d,F as T,d as _}from "./vendor.4efa26cd.js";const q=["disabled"],G={name:"ButtonSetup"},J=S(h(E({},G),{props:{type:{default:"default"},disabled:{type:Boolean,default:!1},round:{type:Boolean,default:!1},icon:null,size:{default:"default"}},setup(o){const t=o,s=I(),{icon:u}=g(t),l=v(()=>["bd-button",`bd-button-${t.type}`,t.disabled&&"bd-button-disabled",t.round&&"bd-button-round",t.size&&`bd-button-size-${t.size}`]),i=R(t.disabled),a=v(()=>!s.icon&&t.icon),c=v(()=>["iconfont",a.value&&u.value]);return(b, f)=>(C(),z("button",{class:x(e(l)),disabled:i.value},[k(b.$slots,"default",{},void 0,!0),k(b.$slots,"icon",{},void 0,!0),e(a)?(C(),z("i",{key:0,class:x(e(c))},null,2)):j("",!0)],10,q))}}));var K=A(J,[["__scopeId","data-v-15480383"]]);const L={class:"button-box"},M=_(" Hello BdSaas "),O=y("i",{class:"iconfont icon-icon-test"},null,-1),Q=_(" Hello BdSaas\uFF08setup\uFF09 "),U=y("i",{class:"iconfont icon-icon-test1"},null,-1),W={class:"box"},X=_("\u8BBE\u7F6E\u5C3A\u5BF8"),Y=_("\u8BBE\u7F6E\u7C7B\u578B"),Z=_("\u8BBE\u7F6E\u5706\u89D2"),tt=_("\u8BBE\u7F6E\u7981\u7528"),dt=S({setup(o){const t=P({size:"default",type:"primary",round:!0,disabled:!1}),s=g(t),{size:u,type:l,round:i,disabled:a}=s;function c(B, n){B.value=n}const b={size:()=>c(u,e(u)==="default"?"small":"default"),type:()=>c(l,e(l)==="primary"?"default":"primary"),round:()=>c(i,!e(i)),disabled:()=>c(a,!e(a))};function f(B){b[B]()}return(B, n)=>(C(),z(T,null,[y("div",L,[r(p,{size:e(u),type:e(l),round:e(i),disabled:e(a),icon:"icon-icon-test1"},{icon:d(()=>[O]),default:d(()=>[M]),_:1},8,["size","type","round","disabled"]),r(K,{size:e(u),type:e(l),round:e(i),disabled:e(a),icon:"icon-icon-test1"},{icon:d(()=>[U]),default:d(()=>[Q]),_:1},8,["size","type","round","disabled"])]),y("div",W,[r(p,{type:"default",onClick:n[0]||(n[0]= m=>f("size"))},{default:d(()=>[X]),_:1}),r(p,{type:"default",onClick:n[1]||(n[1]= m=>f("type"))},{default:d(()=>[Y]),_:1}),r(p,{type:"default",onClick:n[2]||(n[2]= m=>f("round"))},{default:d(()=>[Z]),_:1}),r(p,{type:"default",onClick:n[3]||(n[3]= m=>f("disabled"))},{default:d(()=>[tt]),_:1})])],64))}});export{dt as default};
