import{aU as x,k as _,Q as T,q as s,o,b as n,w as e,p as t,m as k,x as m,ap as b,c as p,F as d,a as f,z as v,y as V,aI as w,aT as B}from"./index.e64df15f.js";import{b as y}from"./route-block.023af118.js";import{a as h,V as C}from"./VRow.44a0774f.js";import{V as I,a as z}from"./VTabs.2aa0ef9a.js";import{V as D,a as L}from"./VWindowItem.91401ec2.js";import{V as N,c as R}from"./VCard.83701cac.js";import{V as U}from"./VAvatar.c8e7782f.js";import{V as F,a as H,b as W}from"./VList.3284ee02.js";import{V as q}from"./VBtn.e5e897d5.js";import"./router.7fdf4318.js";import"./easing.36b781ab.js";import"./VSlideGroup.eaab063f.js";import"./index.e4d4f866.js";import"./lazy.c871e1a1.js";import"./VImg.1f0b6293.js";import"./ssrBoot.5cf129ba.js";import"./position.771ba387.js";import"./VDivider.f14d7027.js";const A={class:"text-base mb-3"},E=k("span",null,"Back to help center",-1),Q={__name:"index",setup(S){const g=x(),l=_(),r=_("");return T(r,()=>B.get("/pages/help-center/subcategory",{params:{category:g.params.category,subcategory:g.params.subcategory}}).then(u=>{l.value=u.data.data,r.value=u.data.activeTab}),{immediate:!0}),(u,i)=>s(l)?(o(),n(C,{key:0},{default:e(()=>[t(h,{cols:"12",md:"4"},{default:e(()=>[k("h6",A,m(s(l).title),1),t(I,{modelValue:s(r),"onUpdate:modelValue":i[0]||(i[0]=a=>b(r)?r.value=a:null),direction:"vertical",class:"v-tabs-pill"},{default:e(()=>[(o(!0),p(d,null,f(s(l).subCategories,a=>(o(),n(z,{key:a.slug,value:a.slug,to:{name:"pages-help-center-category-subcategory",params:{category:s(l).slug,subcategory:a.slug}}},{default:e(()=>[v(m(a.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(h,{cols:"12",md:"8"},{default:e(()=>[t(D,{modelValue:s(r),"onUpdate:modelValue":i[1]||(i[1]=a=>b(r)?r.value=a:null),class:"disable-tab-transition"},{default:e(()=>[(o(!0),p(d,null,f(s(l).subCategories,a=>(o(),n(L,{key:a.slug,value:a.slug},{default:e(()=>[t(N,{title:a.title},{prepend:e(()=>[t(U,{color:"primary",variant:"tonal",rounded:"",size:"42"},{default:e(()=>[t(V,{icon:a.icon,size:"26"},null,8,["icon"])]),_:2},1024)]),default:e(()=>[t(R,null,{default:e(()=>[t(F,{class:"card-list mb-6"},{default:e(()=>[(o(!0),p(d,null,f(a.articles,c=>(o(),n(H,{key:c.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:s(l).slug,subcategory:a.slug,article:c.slug}}},{prepend:e(()=>[t(V,{icon:"tabler-chevron-right",size:"18",class:"me-2"})]),default:e(()=>[t(W,{class:"text-primary"},{default:e(()=>[v(m(c.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024),t(q,{variant:"tonal",to:{name:"pages-help-center"}},{default:e(()=>[t(V,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),E]),_:1})]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):w("",!0)}};typeof y=="function"&&y(Q);export{Q as default};
