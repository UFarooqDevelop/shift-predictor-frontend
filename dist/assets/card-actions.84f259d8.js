import{d as $,k as y,o as i,b as u,w as t,q as _,c as z,p as e,be as q,bf as S,m as a,n as V,y as c,aW as I,aI as m,z as l,x as b,a8 as N,af as O,ap as w,a as D,F as Y}from"./index.4ee6cde3.js";import{V as k}from"./index.2dd7ffb7.js";import{V as E,a as P,b as j,c as h}from"./VCard.51ac3a8a.js";import{V as R,c as F}from"./VBtn.0615207f.js";import{a as L}from"./VOverlay.a6de9318.js";import{V as U}from"./VTable.b65881dd.js";import{a as v,V as W}from"./VRow.c3eca72e.js";import{V as G}from"./VChip.7b3336fe.js";import"./VAvatar.23763371.js";import"./router.6f77ab28.js";import"./VImg.f62a2fa4.js";import"./position.96124056.js";import"./lazy.d36e2ba8.js";import"./easing.36b781ab.js";const H={key:0},J={class:"v-card-content"},K=$({inheritAttrs:!1}),M=Object.assign(K,{__name:"AppCardActions",props:{collapsed:{type:Boolean,required:!1,default:!1},noActions:{type:Boolean,required:!1,default:!1},actionCollapsed:{type:Boolean,required:!1,default:!1},actionRefresh:{type:Boolean,required:!1,default:!1},actionRemove:{type:Boolean,required:!1,default:!1},title:{type:String,required:!1,default:void 0}},emits:["collapsed","refresh","trash"],setup(o,{emit:f}){const r=o,s=y(r.collapsed),C=y(!1),n=y(!1),d=()=>{n.value=!1},A=()=>{s.value=!s.value,f("collapsed",s.value)},x=()=>{n.value=!0,f("refresh",d)},B=()=>{C.value=!0,f("trash")};return(p,g)=>(i(),u(k,null,{default:t(()=>[_(C)?m("",!0):(i(),z("div",H,[e(E,q(S(p.$attrs)),{default:t(()=>[e(P,null,{append:t(()=>[a("div",null,[V(p.$slots,"before-actions"),(!(o.actionRemove||o.actionRefresh)||o.actionCollapsed)&&!o.noActions?(i(),u(R,{key:0,icon:"",color:"default",variant:"text",size:"x-small",onClick:A},{default:t(()=>[e(c,{size:"20",icon:"tabler-chevron-up",style:I([{transform:_(s)?"rotate(-180deg)":null},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):m("",!0),(!(o.actionRemove||o.actionCollapsed)||o.actionRefresh)&&!o.noActions?(i(),u(R,{key:1,icon:"",size:"x-small",variant:"text",color:"default",onClick:x},{default:t(()=>[e(c,{size:"20",icon:"tabler-refresh"})]),_:1})):m("",!0),(!(o.actionRefresh||o.actionCollapsed)||o.actionRemove)&&!o.noActions?(i(),u(R,{key:2,icon:"",size:"x-small",variant:"text",color:"default",onClick:B},{default:t(()=>[e(c,{size:"20",icon:"tabler-x"})]),_:1})):m("",!0)])]),default:t(()=>[r.title||p.$slots.title?(i(),u(j,{key:0},{default:t(()=>[V(p.$slots,"title",{},()=>[l(b(r.title),1)])]),_:3})):m("",!0)]),_:3}),e(k,null,{default:t(()=>[N(a("div",J,[V(p.$slots,"default")],512),[[O,!_(s)]])]),_:3}),e(L,{modelValue:_(n),"onUpdate:modelValue":g[0]||(g[0]=T=>w(n)?n.value=T:null),contained:"",persistent:"",class:"align-center justify-center"},{default:t(()=>[e(F,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3}))}}),Q=a("thead",null,[a("tr",null,[a("th",{scope:"col"}," ACTION "),a("th",{scope:"col"}," ICON "),a("th",{scope:"col"}," DETAILS ")])],-1),X=a("p",null,[l("You can specifically add collapsible action using "),a("code",null,"actionCollapse"),l(" prop")],-1),Z=a("p",null,[l("You can specifically add refresh action using "),a("code",null,"actionRefresh"),l(" prop")],-1),ee=a("p",null,[l("You can specifically add remove action using "),a("code",null,"actionRemove"),l(" prop")],-1),te=a("p",null,[a("code",null,"app-card-actions"),l(" also provides "),a("code",null,"before-actions"),l(" and "),a("code",null,"after-actions"),l(" slot")],-1),ae=a("span",null,"You can find more details in our documentation",-1),_e={__name:"card-actions",setup(o){const f=[{action:"Collapse",icon:"tabler-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"tabler-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"tabler-x",details:"Remove card from page using remove card action"}],r=s=>{setTimeout(s,3e3)};return(s,C)=>{const n=M;return i(),u(W,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(n,{title:"Cards Actions",onRefresh:r},{default:t(()=>[e(h,null,{default:t(()=>[e(U,null,{default:t(()=>[Q,a("tbody",null,[(i(),z(Y,null,D(f,d=>a("tr",{key:d.icon},[a("td",null,b(d.action),1),a("td",null,[e(c,{size:"20",icon:d.icon},null,8,["icon"])]),a("td",null,b(d.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[e(h,null,{default:t(()=>[X,a("span",null,[l("Click on "),e(c,{size:"20",icon:"tabler-chevron-up"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:r},{default:t(()=>[e(h,null,{default:t(()=>[Z,a("span",null,[l("Click on "),e(c,{size:"20",icon:"tabler-refresh"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Remove Card","action-remove":""},{default:t(()=>[e(h,null,{default:t(()=>[ee,a("span",null,[l("Click on "),e(c,{size:"20",icon:"tabler-x"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Slots",onRefresh:r},{"before-actions":t(()=>[e(G,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[l(" 3 Updates ")]),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[te,ae]),_:1})]),_:1})]),_:1})]),_:1})}}};export{_e as default};