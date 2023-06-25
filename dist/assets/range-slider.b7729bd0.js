import{m as J,u as K,V as Q,a as A,g as N}from"./VSliderTrack.021843fd.js";import{b as X,m as Z,u as ee,f as le,a as ae,V as te}from"./VInput.cc0bea53.js";import{B as se,k as b,S as oe,O as W,I as ue,p as a,F as ne,ag as re,o as S,b as R,q as x,ap as y,w as r,y as ie,m as i,z as d}from"./index.e5c1e8e1.js";import{_ as de}from"./AppCardCode.fcca560e.js";import{a as $,V as ce}from"./VRow.1f54dc9e.js";import"./index.1bcc5918.js";import"./router.0c602970.js";import"./VImg.10863b21.js";import"./vue.runtime.esm-bundler.508f4d76.js";import"./VCard.8e399742.js";import"./VAvatar.d497555d.js";import"./position.2438c506.js";import"./VBtn.c5180d72.js";import"./VDivider.b5a2ab1e.js";const D=se({name:"VRangeSlider",props:{...X(),...Z(),...J(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,s){let{slots:u}=s;const e=b(),l=b(),k=b();function h(n){if(!e.value||!l.value)return;const m=N(n,e.value.$el,t.direction),_=N(n,l.value.$el,t.direction),p=Math.abs(m),v=Math.abs(_);return p<v||p===v&&m<0?e.value.$el:l.value.$el}const{activeThumbRef:c,hasLabels:C,max:F,min:P,mousePressed:Y,onSliderMousedown:q,onSliderTouchstart:E,position:I,roundValue:G,trackContainerRef:H}=K({props:t,handleSliderMouseUp:n=>{var m;o.value=c.value===((m=e.value)==null?void 0:m.$el)?[n,o.value[1]]:[o.value[0],n]},handleMouseMove:n=>{var m;const[_,p]=o.value;if(!t.strict&&_===p&&_!==P.value){var v,V,f;c.value=n>_?(v=l.value)==null?void 0:v.$el:(V=e.value)==null?void 0:V.$el,(f=c.value)==null||f.focus()}c.value===((m=e.value)==null?void 0:m.$el)?o.value=[Math.min(n,p),p]:o.value=[_,Math.max(_,n)]},getActiveThumb:h}),o=oe(t,"modelValue",void 0,n=>!n||!n.length?[0,0]:n.map(m=>G(m))),{isFocused:M,focus:j,blur:z}=ee(t),L=W(()=>I(o.value[0])),O=W(()=>I(o.value[1]));return ue(()=>{const[n,m]=le(t),_=!!(t.label||u.label||u.prepend);return a(te,re({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||C.value,"v-slider--focused":M.value,"v-slider--pressed":Y.value,"v-slider--disabled":t.disabled}],ref:k},n,{focused:M.value}),{...u,prepend:_?p=>{var f;var v,V;return a(ne,null,[((f=(v=u.label)==null?void 0:v.call(u,p))!=null?f:t.label)?a(ae,{class:"v-slider__label",text:t.label},null):void 0,(V=u.prepend)==null?void 0:V.call(u,p)])}:void 0,default:p=>{var v,V;let{id:f}=p;return a("div",{class:"v-slider__container",onMousedown:q,onTouchstartPassive:E},[a("input",{id:`${f.value}_start`,name:t.name||f.value,disabled:t.disabled,readonly:t.readonly,tabindex:"-1",value:o.value[0]},null),a("input",{id:`${f.value}_stop`,name:t.name||f.value,disabled:t.disabled,readonly:t.readonly,tabindex:"-1",value:o.value[1]},null),a(Q,{ref:H,start:L.value,stop:O.value},{"tick-label":u["tick-label"]}),a(A,{ref:e,focused:M&&c.value===((v=e.value)==null?void 0:v.$el),modelValue:o.value[0],"onUpdate:modelValue":g=>o.value=[g,o.value[1]],onFocus:g=>{var T,w;if(j(),c.value=(T=e.value)==null?void 0:T.$el,o.value[0]===o.value[1]&&o.value[1]===P.value&&g.relatedTarget!==((w=l.value)==null?void 0:w.$el)){var U,B;(U=e.value)==null||U.$el.blur(),(B=l.value)==null||B.$el.focus()}},onBlur:()=>{z(),c.value=void 0},min:P.value,max:o.value[1],position:L.value},{"thumb-label":u["thumb-label"]}),a(A,{ref:l,focused:M&&c.value===((V=l.value)==null?void 0:V.$el),modelValue:o.value[1],"onUpdate:modelValue":g=>o.value=[o.value[0],g],onFocus:g=>{var T,w;if(j(),c.value=(T=l.value)==null?void 0:T.$el,o.value[0]===o.value[1]&&o.value[0]===F.value&&g.relatedTarget!==((w=e.value)==null?void 0:w.$el)){var U,B;(U=l.value)==null||U.$el.blur(),(B=e.value)==null||B.$el.focus()}},onBlur:()=>{z(),c.value=void 0},min:o.value[0],max:F.value,position:O.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),me={__name:"DemoRangeSliderVertical",setup(t){const s=b([20,40]);return(u,e)=>(S(),R(D,{modelValue:x(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},pe={__name:"DemoRangeSliderThumbLabel",setup(t){const s=["Winter","Spring","Summer","Fall"],u=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],e=b([1,2]);return(l,k)=>(S(),R(D,{modelValue:x(e),"onUpdate:modelValue":k[0]||(k[0]=h=>y(e)?e.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":r(({modelValue:h})=>[a(ie,{icon:u[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}},ve={__name:"DemoRangeSliderStep",setup(t){const s=b([20,40]);return(u,e)=>(S(),R(D,{modelValue:x(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},fe={__name:"DemoRangeSliderColor",setup(t){const s=b([10,60]);return(u,e)=>(S(),R(D,{modelValue:x(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null),color:"success","track-color":"secondary"},null,8,["modelValue"]))}},_e={__name:"DemoRangeSliderDisabled",setup(t){const s=b([30,60]);return(u,e)=>(S(),R(D,{modelValue:x(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},be={__name:"DemoRangeSliderBasic",setup(t){const s=b([10,60]);return(u,e)=>(S(),R(D,{modelValue:x(s),"onUpdate:modelValue":e[0]||(e[0]=l=>y(s)?s.value=l:null)},null,8,["modelValue"]))}},Ve={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},he={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},Se={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},ke={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},$e=i("p",null,[d("The "),i("code",null,"v-slider"),d(" component is a better visualization of the number input.")],-1),xe=i("p",null,[d("You cannot interact with "),i("code",null,"disabled"),d(" sliders.")],-1),ye=i("p",null,[d("Use "),i("code",null,"color"),d(" prop to the sets the slider color. "),i("code",null,"track-color"),d(" prop to sets the color of slider's unfilled track.")],-1),De=i("p",null,[i("code",null,"v-range-slider"),d(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Te=i("p",null,[d(" Using the "),i("code",null,"tick-labels"),d(" prop along with the "),i("code",null,"thumb-label"),d(" slot, you can create a very customized solution. ")],-1),we=i("p",null,[d("You can use the "),i("code",null,"vertical"),d(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Ye={__name:"range-slider",setup(t){return(s,u)=>{const e=be,l=de,k=_e,h=fe,c=ve,C=pe,F=me;return S(),R(ce,null,{default:r(()=>[a($,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Basic",code:Ve},{default:r(()=>[$e,a(e)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Disabled",code:he},{default:r(()=>[xe,a(k)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Color",code:ge},{default:r(()=>[ye,a(h)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Step",code:Se},{default:r(()=>[De,a(c)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Thumb label",code:Re},{default:r(()=>[Te,a(C)]),_:1},8,["code"])]),_:1}),a($,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Vertical",code:ke},{default:r(()=>[we,a(F)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ye as default};
