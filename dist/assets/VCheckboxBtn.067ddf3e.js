import{m as d,V as m}from"./VSelectionControl.4a43d5b7.js";import{J as f,a7 as k,B as I,S as o,O as c,I as x,p as V,ag as b,ae as h}from"./index.3b451135.js";const v=f({indeterminate:Boolean,indeterminateIcon:{type:k,default:"$checkboxIndeterminate"},...d({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),C=I({name:"VCheckboxBtn",props:v(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{slots:r}=i;const n=o(e,"indeterminate"),t=o(e,"modelValue");function l(a){n.value&&(n.value=!1)}const u=c(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),s=c(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return x(()=>V(m,b(e,{modelValue:t.value,"onUpdate:modelValue":[a=>t.value=a,l],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:u.value,trueIcon:s.value,"aria-checked":e.indeterminate?"mixed":void 0}),r)),{}}});function P(e){return h(e,Object.keys(C.props))}export{C as V,P as f,v as m};
