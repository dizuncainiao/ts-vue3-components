import{_ as c}from "./index.f9550f2b.js";import{h as b,t as f,i as o,j as _,o as i,c as l,k as u,n as r,m}from "./vendor.4efa26cd.js";const p=b({name:"BdButton",props:{type:{type:String,default:"default",required:!0},disabled:{type:Boolean,default:!1},round:{type:Boolean,default:!1},icon:{type:String},size:{type:String,default:"default"}},setup(e, {slots:s}){const{icon:n}=f(e),a=o(()=>["bd-button",`bd-button-${e.type}`,e.disabled&&"bd-button-disabled",e.round&&"bd-button-round",e.size&&`bd-button-size-${e.size}`]),d=_(e.disabled),t=o(()=>!s.icon&&e.icon);return{iconClass:o(()=>["iconfont",t.value&&n.value]),showPropIcon:t,buttonClass:a,isDisabled:d}}}),y=["disabled"];function v(e, s, n, a, d, t){return i(),l("button",{class:r(e.buttonClass),disabled:e.isDisabled},[u(e.$slots,"default",{},void 0,!0),u(e.$slots,"icon",{},void 0,!0),e.showPropIcon?(i(),l("i",{key:0,class:r(e.iconClass)},null,2)):m("",!0)],10,y)}var h=c(p,[["render",v],["__scopeId","data-v-7b560d2c"]]);export{h as B};