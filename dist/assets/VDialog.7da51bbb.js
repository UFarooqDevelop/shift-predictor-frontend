import{o as x,b as y,w as h,p as d,y as E,$ as S,S as B,k as P,av as w,Q as p,a6 as D,I,ag as g}from"./index.4ee6cde3.js";import{V as _}from"./VBtn.0615207f.js";import{u as $}from"./scopeId.fd5380d2.js";import{f as A}from"./forwardRefs.c003b6b8.js";import{m as O,f as R,a as T}from"./VOverlay.a6de9318.js";import{V as k}from"./router.6f77ab28.js";import{V as C}from"./dialog-transition.796b3152.js";const U={__name:"DialogCloseBtn",props:{icon:{type:String,required:!1,default:"tabler-x"}},setup(a){const u=a;return(i,n)=>(x(),y(_,{icon:"",class:"v-dialog-close-btn"},{default:h(()=>[d(E,{icon:u.icon},null,8,["icon"])]),_:1}))}};const W=S()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...O({origin:"center center",scrollStrategy:"block",transition:{component:C},zIndex:2400})},emits:{"update:modelValue":a=>!0},setup(a,u){let{slots:i}=u;const n=B(a,"modelValue"),{scopeId:V}=$(),t=P();function f(o){var e,l;const s=o.relatedTarget,r=o.target;if(s!==r&&(e=t.value)!=null&&e.contentEl&&(l=t.value)!=null&&l.globalTop&&![document,t.value.contentEl].includes(r)&&!t.value.contentEl.contains(r)){const c=[...t.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(m=>!m.hasAttribute("disabled")&&!m.matches('[tabindex="-1"]'));if(!c.length)return;const v=c[0],b=c[c.length-1];s===v?b.focus():v.focus()}}return w&&p(()=>n.value&&a.retainFocus,o=>{o?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0}),p(n,async o=>{if(await D(),o){var e;(e=t.value.contentEl)==null||e.focus({preventScroll:!0})}else{var l;(l=t.value.activatorEl)==null||l.focus({preventScroll:!0})}}),I(()=>{const[o]=R(a);return d(T,g({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable}]},o,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:g({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps)},V),{activator:i.activator,default:function(){for(var e,l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return d(k,{root:!0},{default:()=>[(e=i.default)==null?void 0:e.call(i,...s)]})}})}),A({},t)}});export{W as V,U as _};