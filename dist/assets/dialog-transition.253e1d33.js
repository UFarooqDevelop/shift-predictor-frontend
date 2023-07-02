import{B as P,p as y,ae as b,T as u}from"./index.e64df15f.js";import{a as m,d as B,s as v,b as q,n as A}from"./easing.36b781ab.js";const V=P({name:"VDialogTransition",props:{target:Object},setup(c,o){let{slots:e}=o;const s={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,g){var i;await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),t.style.visibility="";const{x:a,y:l,sx:d,sy:f,speed:r}=x(c.target,t),h=m(t,[{transform:`translate(${a}px, ${l}px) scale(${d}, ${f})`,opacity:0},{transform:""}],{duration:225*r,easing:B});(i=w(t))==null||i.forEach(n=>{m(n,[{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*r,easing:v})}),h.finished.then(()=>g())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,g){var i;await new Promise(n=>requestAnimationFrame(n));const{x:a,y:l,sx:d,sy:f,speed:r}=x(c.target,t);m(t,[{transform:""},{transform:`translate(${a}px, ${l}px) scale(${d}, ${f})`,opacity:0}],{duration:125*r,easing:q}).finished.then(()=>g()),(i=w(t))==null||i.forEach(n=>{m(n,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:v})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>c.target?y(u,b({name:"dialog-transition"},s,{css:!1}),e):y(u,{name:"dialog-transition"},e)}});function w(c){var o;const e=(o=c.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:o.children;return e&&[...e]}function x(c,o){const e=c.getBoundingClientRect(),s=A(o),[t,g]=getComputedStyle(o).transformOrigin.split(" ").map(C=>parseFloat(C)),[i,a]=getComputedStyle(o).getPropertyValue("--v-overlay-anchor-origin").split(" ");let l=e.left+e.width/2;i==="left"||a==="left"?l-=e.width/2:(i==="right"||a==="right")&&(l+=e.width/2);let d=e.top+e.height/2;i==="top"||a==="top"?d-=e.height/2:(i==="bottom"||a==="bottom")&&(d+=e.height/2);const f=e.width/s.width,r=e.height/s.height,h=Math.max(1,f,r),n=f/h,E=r/h,p=s.width*s.height/(window.innerWidth*window.innerHeight),$=p>.12?Math.min(1.5,(p-.12)*10+1):1;return{x:l-(t+s.left),y:d-(g+s.top),sx:n,sy:E,speed:$}}export{V};
