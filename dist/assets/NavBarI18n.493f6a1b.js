import{aL as m,o as r,b as s,w as a,p as o,y as u,c as g,F as f,a as _,z as d,x as L,t as h}from"./index.e5c1e8e1.js";import{V}from"./VMenu.0bbfb376.js";import{V as b,a as v,b as x}from"./VList.41b2bbf9.js";import{V as C}from"./VBtn.c5180d72.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.4b7ab931.js";import"./VOverlay.ad441d0c.js";import"./router.0c602970.js";import"./lazy.5465d1f6.js";import"./easing.36b781ab.js";import"./VImg.10863b21.js";import"./dialog-transition.7c9dd6d0.js";import"./index.1bcc5918.js";import"./VAvatar.d497555d.js";import"./VDivider.b5a2ab1e.js";import"./position.2438c506.js";const k={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(l,{emit:c}){const t=l,{locale:i}=m({useScope:"global"});return(n,p)=>(r(),s(C,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[o(u,{icon:"tabler-language",size:"24"}),o(V,{activator:"parent",location:t.location,offset:"14px"},{default:a(()=>[o(b,{"min-width":"175px"},{default:a(()=>[(r(!0),g(f,null,_(t.languages,e=>(r(),s(v,{key:e.i18nLang,value:e.i18nLang,onClick:y=>{i.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:a(()=>[o(x,null,{default:a(()=>[d(L(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},G={__name:"NavBarI18n",setup(l){const{isAppRtl:c}=h(),t=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],i=n=>{c.value=n==="ar"};return(n,p)=>(r(),s(k,{languages:t,onChange:i}))}};export{G as default};
