import{_ as p}from "./index.f9550f2b.js";import{h as u,t as h,i as b,o,c as d,a as l,k as _,F as k,d as m,q as f,m as i,n as g,s as v,v as y}from "./vendor.4efa26cd.js";const B=u({name:"BdCheckbox",props:{label:{type:String},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e, {emit:a}){const{modelValue:t,disabled:c}=h(e),n=b(()=>[t.value&&"is-checked",c.value&&"is-disabled"]);function r(s){a("update:modelValue",s.target.checked),a("change",s.target.checked)}return{changeHandler:r,checkboxClass:n}}}),C= e=>(v("data-v-75e4ed80"),e=e(),y(),e),V={class:"bd-checkbox__input"},$=C(()=>l("span",{class:"bd-checkbox__inner iconfont icon-duihao"},null,-1)),x=["checked","disabled"],S={key:0,class:"bd-checkbox__label"};function I(e, a, t, c, n, r){return o(),d("label",{class:g(["bd-checkbox",e.checkboxClass])},[l("span",V,[$,l("input",{checked:e.modelValue,disabled:e.disabled,onChange:a[0]||(a[0]=(...s)=>e.changeHandler&&e.changeHandler(...s)),class:"bd-checkbox__original",type:"checkbox"},null,40,x)]),e.$slots.default||e.label?(o(),d("span",S,[_(e.$slots,"default",{},void 0,!0),e.$slots.default?i("",!0):(o(),d(k,{key:0},[m(f(e.label),1)],64))])):i("",!0)],2)}var F=p(B,[["render",I],["__scopeId","data-v-75e4ed80"]]);export{F as B};