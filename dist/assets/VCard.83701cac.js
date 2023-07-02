import{B as _,G as H,I as V,p as n,d as N,a7 as m,D as q,C as z,E as J,O as A,a8 as K,a9 as M}from"./index.e64df15f.js";import{c as C,V as S}from"./VAvatar.c8e7782f.js";import{a as P,V as p,R as Q,m as U,h as W,b as X,i as Y,c as Z,j as ee,d as ae,e as te,k as ne,u as le,l as se,f as ie,n as de,g as oe,o as ce,p as re}from"./router.7fdf4318.js";import{m as ue,a as ve,b as me,c as fe,L as ge}from"./position.771ba387.js";import{V as ke}from"./VImg.1f0b6293.js";const be=_({name:"VCardActions",setup(e,s){let{slots:t}=s;return H({VBtn:{variant:"text"}}),V(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),pe=C("v-card-subtitle"),Ve=C("v-card-title"),Ce=N({name:"VCardItem",props:{appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:String,title:String,...P()},setup(e,s){let{slots:t}=s;return V(()=>{var a,d,o,c,r;const f=!!(e.prependAvatar||e.prependIcon||t.prepend),g=!!(e.appendAvatar||e.appendIcon||t.append),k=!!(e.title||t.title),b=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[f&&n(p,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__prepend"},[(l=(a=t.prepend)==null?void 0:a.call(t))!=null?l:n(S,null,null)])]}}),n("div",{class:"v-card-item__content"},[k&&n(Ve,{key:"title"},{default:()=>{var l;return[(l=(d=t.title)==null?void 0:d.call(t))!=null?l:e.title]}}),b&&n(pe,{key:"subtitle"},{default:()=>{var l;return[(l=(o=t.subtitle)==null?void 0:o.call(t))!=null?l:e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),g&&n(p,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__append"},[(l=(r=t.append)==null?void 0:r.call(t))!=null?l:n(S,null,null)])]}})])}),{}}}),Ie=C("v-card-text"),Pe=_({name:"VCard",directives:{Ripple:Q},props:{appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:Boolean,subtitle:String,text:String,title:String,...q(),...U(),...P(),...W(),...X(),...ue(),...Y(),...ve(),...Z(),...ee(),...z(),...ae({variant:"elevated"})},setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:d}=J(e),{borderClasses:o}=te(e),{colorClasses:c,colorStyles:r,variantClasses:f}=ne(e),{densityClasses:g}=le(e),{dimensionStyles:k}=se(e),{elevationClasses:b}=ie(e),{loaderClasses:l}=me(e),{locationStyles:x}=de(e),{positionClasses:$}=fe(e),{roundedClasses:B}=oe(e),u=ce(e,t),D=A(()=>e.link!==!1&&u.isLink.value),v=A(()=>!e.disabled&&e.link!==!1&&(e.link||u.isClickable.value));return V(()=>{var I,y,h;const L=D.value?"a":e.tag,T=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=T||R,O=!!(a.append||e.appendAvatar||e.appendIcon),j=!!(a.prepend||e.prependAvatar||e.prependIcon),w=!!(a.image||e.image),F=E||j||O,G=!!(a.text||e.text);return K(n(L,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},d.value,o.value,c.value,g.value,b.value,l.value,$.value,B.value,f.value],style:[r.value,k.value,x.value],href:u.href.value,onClick:v.value&&u.navigate},{default:()=>[w&&n(p,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var i;return[n("div",{class:"v-card__image"},[(i=(I=a.image)==null?void 0:I.call(a))!=null?i:n(ke,null,null)])]}}),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),F&&n(Ce,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),G&&n(Ie,{key:"text"},{default:()=>{var i;return[(i=(y=a.text)==null?void 0:y.call(a))!=null?i:e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(be,null,{default:a.actions}),re(v.value,"v-card")]}),[[M("ripple"),v.value]])}),{}}});export{Pe as V,Ce as a,Ve as b,Ie as c,pe as d,be as e};
