import{m as T,u as _,a as w,b as A}from"./VBtn.6501e66c.js";import{B as p,C as g,D as B,E as $,O as c,G as R,H as b,I as x,p as l,J as D,a7 as y,N as P,ab as V,a8 as S,a9 as G,y as L,af as j,M as z}from"./index.3b451135.js";import{R as N,b as O,c as F,f as H,g as J}from"./router.a4e1d8e9.js";import{V as M}from"./index.e3636733.js";import{m as I,u as q}from"./lazy.a31b93fb.js";const r=Symbol.for("vuetify:v-expansion-panel"),K=["default","accordion","inset","popout"],ae=p({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>K.includes(e)},readonly:Boolean,...T(),...g(),...B()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;_(e,r);const{themeClasses:a}=$(e),i=c(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return R({VExpansionPanel:{color:b(e,"color")},VExpansionPanelTitle:{readonly:b(e,"readonly")}}),x(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value]},n)),{}}}),E=D({color:String,expandIcon:{type:y,default:"$expand"},collapseIcon:{type:y,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"VExpansionPanelTitle"),Q=p({name:"VExpansionPanelTitle",directives:{Ripple:N},props:{...E()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=V(e,"color"),d=c(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return x(()=>{var v;return S(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value],style:u.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(v=n.default)==null?void 0:v.call(n,d.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):l(L,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[G("ripple"),e.ripple]])}),{}}}),U=p({name:"VExpansionPanelText",props:{...I()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=q(e,a.isSelected);return x(()=>{var d;return l(M,{onAfterLeave:u},{default:()=>[S(l("div",{class:"v-expansion-panel-text"},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(d=n.default)==null?void 0:d.call(n)])]),[[j,a.isSelected.value]])]})}),{}}}),ne=p({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...O(),...w(),...I(),...F(),...g(),...E()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=A(e,r),{backgroundColorClasses:i,backgroundColorStyles:u}=V(e,"bgColor"),{elevationClasses:d}=H(e),{roundedClasses:v}=J(e),C=c(()=>(a==null?void 0:a.disabled.value)||e.disabled),m=c(()=>a.group.items.value.reduce((s,t,f)=>(a.group.selected.value.includes(t.id)&&s.push(f),s),[])),h=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&m.value.some(t=>t-s===1)}),k=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&m.value.some(t=>t-s===-1)});return z(r,a),x(()=>{var s;const t=!!(n.text||e.text),f=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":h.value,"v-expansion-panel--after-active":k.value,"v-expansion-panel--disabled":C.value},v.value,i.value],style:u.value,"aria-expanded":a.isSelected.value},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...d.value]},null),f&&l(Q,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),t&&l(U,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(s=n.default)==null?void 0:s.call(n)]})}),{}}});export{ae as V,ne as a,Q as b,U as c};
