import{aX as m,k as v,Q as f,B as i,aY as y,aZ as p,I as c,p as u,C as V,a_ as L}from"./index.e5c1e8e1.js";import{u as b}from"./ssrBoot.e5a5a707.js";const S=(e=void 0)=>{const{mdAndDown:l,name:a}=m(),t=e||l,s=v(!0);return(()=>{s.value=!t.value})(),f(a,()=>{s.value=!t.value}),{isLeftSidebarOpen:s}};const k=i({name:"VLayout",props:y(),setup(e,l){let{slots:a}=l;const{layoutClasses:t,layoutStyles:s,getLayoutItem:o,items:n,layoutRef:d}=p(e);return c(()=>{var r;return u("div",{ref:d,class:t.value,style:s.value},[(r=a.default)==null?void 0:r.call(a)])}),{getLayoutItem:o,items:n}}});const $=i({name:"VMain",props:{scrollable:Boolean,...V({tag:"main"})},setup(e,l){let{slots:a}=l;const{mainStyles:t}=L(),{ssrBootStyles:s}=b();return c(()=>{var o,n;return u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,s.value]},{default:()=>[e.scrollable?u("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(n=a.default)==null?void 0:n.call(a)]})}),{}}});export{$ as V,k as a,S as u};
