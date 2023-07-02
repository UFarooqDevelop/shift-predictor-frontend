import{aK as y,k as V,O as k,o as _,c as $,m as a,x as R,q as i,p as e,w as l,b,aW as T,aI as M,y as O,ap as u,F as D,cf as L,ce as E,z as c}from"./index.e64df15f.js";import{c as Y}from"./index.e4d4f866.js";import{V as N}from"./VAvatar.c8e7782f.js";import{V as w}from"./VBtn.e5e897d5.js";import{V as p}from"./VSlider.c98c956a.js";import{a as G}from"./VImg.1f0b6293.js";import{a as m,V as f}from"./VRow.44a0774f.js";import{V as C}from"./VTextField.c5daeec6.js";import{_ as q}from"./AppCardCode.8494b910.js";import"./router.7fdf4318.js";import"./position.771ba387.js";import"./VSliderTrack.77fbb54d.js";import"./VInput.e37c48cf.js";/* empty css                   */import"./VField.d8105e01.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.eeb76e28.js";import"./vue.runtime.esm-bundler.d7e205f8.js";import"./VCard.83701cac.js";import"./VDivider.f14d7027.js";const K=v=>(L("data-v-d27966a3"),v=v(),E(),v),W={class:"d-flex justify-space-between ma-4"},H=["textContent"],J=K(()=>a("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),g=40,z=218,Q={__name:"DemoSliderAppendAndPrepend",setup(v){const t=V(40),s=V(!1),n=k(()=>t.value<100?"primary":t.value<125?"success":t.value<140?"info":t.value<175?"warning":"error"),d=k(()=>`${60/t.value}s`),o=()=>{t.value>g&&(t.value-=1)},r=()=>{t.value<z&&(t.value+=1)};return(S,h)=>(_(),$(D,null,[a("div",W,[a("div",null,[a("span",{class:"text-6xl font-weight-light",textContent:R(i(t))},null,8,H),J,e(Y,null,{default:l(()=>[i(s)?(_(),b(N,{key:0,color:i(n),style:T({animationDuration:i(d)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):M("",!0)]),_:1})]),a("div",null,[e(w,{color:i(n),icon:"",elevation:"0",onClick:h[0]||(h[0]=x=>s.value=!i(s))},{default:l(()=>[e(O,{size:"large",icon:i(s)?"tabler-pause":"tabler-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:i(t),"onUpdate:modelValue":h[1]||(h[1]=x=>u(t)?t.value=x:null),color:i(n),step:1,min:g,max:z,"track-color":"secondary"},{prepend:l(()=>[e(w,{size:"small",variant:"text",icon:"tabler-minus",color:i(n),onClick:o},null,8,["color"])]),append:l(()=>[e(w,{size:"small",variant:"text",icon:"tabler-plus",color:i(n),onClick:r},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}},X=y(Q,[["__scopeId","data-v-d27966a3"]]),Z={style:{width:"3rem"}},ee={style:{width:"3rem"}},le={style:{width:"3rem"}},te={__name:"DemoSliderAppendTextField",setup(v){const t=V(161),s=V(105),n=V(255);return(d,o)=>(_(),$(D,null,[e(G,{style:T({background:`rgb(${i(t)}, ${i(s)}, ${i(n)})`}),height:"150px"},null,8,["style"]),e(f,{class:"mt-5"},{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(t),"onUpdate:modelValue":o[1]||(o[1]=r=>u(t)?t.value=r:null),max:255,step:1,"prepend-icon":"tabler-letter-r"},{append:l(()=>[a("div",Z,[e(C,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(s),"onUpdate:modelValue":o[3]||(o[3]=r=>u(s)?s.value=r:null),max:255,step:1,"prepend-icon":"tabler-letter-g"},{append:l(()=>[a("div",ee,[e(C,{modelValue:i(s),"onUpdate:modelValue":o[2]||(o[2]=r=>u(s)?s.value=r:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(n),"onUpdate:modelValue":o[5]||(o[5]=r=>u(n)?n.value=r:null),max:255,step:1,"prepend-icon":"tabler-letter-b"},{append:l(()=>[a("div",le,[e(C,{modelValue:i(n),"onUpdate:modelValue":o[4]||(o[4]=r=>u(n)?n.value=r:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}},oe={__name:"DemoSliderVertical",setup(v){const t=V(10);return(s,n)=>(_(),b(p,{modelValue:i(t),"onUpdate:modelValue":n[0]||(n[0]=d=>u(t)?t.value=d:null),direction:"vertical"},null,8,["modelValue"]))}},ae=a("div",{class:"text-caption"}," Show ticks when using slider ",-1),se=a("div",{class:"text-caption"}," Always show ticks ",-1),ne=a("div",{class:"text-caption"}," Tick size ",-1),ie=a("div",{class:"text-caption"}," Tick labels ",-1),re={__name:"DemoSliderTicks",setup(v){const t=V(0),s=V(1),n={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(d,o)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[ae,e(p,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[se,e(p,{modelValue:i(t),"onUpdate:modelValue":o[1]||(o[1]=r=>u(t)?t.value=r:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ne,e(p,{modelValue:i(t),"onUpdate:modelValue":o[2]||(o[2]=r=>u(t)?t.value=r:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ie,e(p,{modelValue:i(s),"onUpdate:modelValue":o[3]||(o[3]=r=>u(s)?s.value=r:null),ticks:n,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}},de=a("div",{class:"text-caption"}," Show thumb when using slider ",-1),ce=a("div",{class:"text-caption"}," Always show thumb label ",-1),me=a("div",{class:"text-caption"}," Custom thumb size ",-1),ue=a("div",{class:"text-caption"}," Custom thumb label ",-1),pe={__name:"DemoSliderThumb",setup(v){const t=["\u{1F62D}","\u{1F622}","\u2639\uFE0F","\u{1F641}","\u{1F610}","\u{1F642}","\u{1F60A}","\u{1F601}","\u{1F604}","\u{1F60D}"],s=V(45);return(n,d)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[de,e(p,{modelValue:i(s),"onUpdate:modelValue":d[0]||(d[0]=o=>u(s)?s.value=o:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ce,e(p,{modelValue:i(s),"onUpdate:modelValue":d[1]||(d[1]=o=>u(s)?s.value=o:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[me,e(p,{modelValue:i(s),"onUpdate:modelValue":d[2]||(d[2]=o=>u(s)?s.value=o:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ue,e(p,{modelValue:i(s),"onUpdate:modelValue":d[3]||(d[3]=o=>u(s)?s.value=o:null),"thumb-label":"always"},{"thumb-label":l(({modelValue:o})=>[c(R(t[Math.min(Math.floor(o/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},Ve={};function ve(v,t){return _(),b(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const _e=y(Ve,[["render",ve]]),be={__name:"DemoSliderMinAndMax",setup(v){const t=V(-50),s=V(90),n=V(40);return(d,o)=>(_(),b(p,{modelValue:i(n),"onUpdate:modelValue":o[1]||(o[1]=r=>u(n)?n.value=r:null),max:i(s),min:i(t),step:1},{append:l(()=>[e(C,{modelValue:i(n),"onUpdate:modelValue":o[0]||(o[0]=r=>u(n)?n.value=r:null),variant:"underlined",type:"number",style:{width:"60px"}},null,8,["modelValue"])]),_:1},8,["modelValue","max","min"]))}},fe={__name:"DemoSliderValidation",setup(v){const t=V(30),s=[n=>n<=40||"Only 40 in stock"];return(n,d)=>(_(),b(p,{modelValue:i(t),"onUpdate:modelValue":d[0]||(d[0]=o=>u(t)?t.value=o:null),error:i(t)>40,rules:s,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}},he={__name:"DemoSliderStep",setup(v){const t=V(0);return(s,n)=>(_(),b(p,{modelValue:i(t),"onUpdate:modelValue":n[0]||(n[0]=d=>u(t)?t.value=d:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"]))}},xe={__name:"DemoSliderIcons",setup(v){const t=V(0),s=V(0),n=V(10);return(d,o)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),"prepend-icon":"tabler-volume"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(s),"onUpdate:modelValue":o[1]||(o[1]=r=>u(s)?s.value=r:null),"append-icon":"tabler-alarm"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(n),"onUpdate:modelValue":o[2]||(o[2]=r=>u(n)?n.value=r:null),"append-icon":"tabler-zoom-in","prepend-icon":"tabler-zoom-out"},null,8,["modelValue"])]),_:1})]),_:1}))}},Ce=a("div",{class:"text-caption"}," color ",-1),we=a("div",{class:"text-caption"}," track-color ",-1),ye=a("div",{class:"text-caption"}," thumb-color ",-1),Se={__name:"DemoSliderColors",setup(v){const t=V(25),s=V(75),n=V(50);return(d,o)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[Ce,e(p,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=r=>u(t)?t.value=r:null),color:"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[we,e(p,{modelValue:i(s),"onUpdate:modelValue":o[1]||(o[1]=r=>u(s)?s.value=r:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ye,e(p,{modelValue:i(n),"onUpdate:modelValue":o[2]||(o[2]=r=>u(n)?n.value=r:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}},ke={},ge=a("div",{class:"text-caption"}," Disabled ",-1),ze=a("div",{class:"text-caption"}," Readonly ",-1);function $e(v,t){return _(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[ge,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(m,{cols:"12"},{default:l(()=>[ze,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const Re=y(ke,[["render",$e]]),Te={__name:"DemoSliderBasic",setup(v){const t=V(30);return(s,n)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p)]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:i(t),"onUpdate:modelValue":n[0]||(n[0]=d=>u(t)?t.value=d:null)},null,8,["modelValue"])]),_:1})]),_:1}))}},De={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="sliderValue"
      />
    </VCol>
  </VRow>
</template>
`},Ue={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Fe={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-zoom-in"
        prepend-icon="tabler-zoom-out"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-zoom-in"
        prepend-icon="tabler-zoom-out"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['\u{1F62D}', '\u{1F622}', '\u2639\uFE0F', '\u{1F641}', '\u{1F610}', '\u{1F642}', '\u{1F60A}', '\u{1F601}', '\u{1F604}', '\u{1F60D}']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '\u{1F62D}',
  '\u{1F622}',
  '\u2639\uFE0F',
  '\u{1F641}',
  '\u{1F610}',
  '\u{1F642}',
  '\u{1F60A}',
  '\u{1F601}',
  '\u{1F604}',
  '\u{1F60D}',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Pe={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <VTextField
        v-model="slider"
        variant="underlined"
        type="number"
        style="width: 60px ;"
      />
    </template>
  </VSlider>
</template>
`},Oe={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Le={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Ee={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-r"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-g"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="greenColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-b"
      >
        <template #append>
          <div style="width: 3rem;">
            <VTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ye={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Ne=a("p",null,[c("The "),a("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),Ge=a("p",null,[c("You cannot interact with "),a("code",null,"disabled"),c(" and "),a("code",null,"readonly"),c(" sliders.")],-1),qe=a("p",null,[c("You can set the colors of the slider using the props "),a("code",null,"color"),c(", "),a("code",null,"track-color"),c(" and "),a("code",null,"thumb-color"),c(".")],-1),Ke=a("p",null,[c("You can add icons to the slider with the "),a("code",null,"append-icon"),c(" and "),a("code",null,"prepend-icon"),c(" props.")],-1),We=a("p",null,[c("Using the "),a("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),He=a("p",null,[c("Vuetify includes simple validation through the "),a("code",null,"rules"),c(" prop.")],-1),Je=a("p",null,[c("You can set "),a("code",null,"min"),c(" and "),a("code",null,"max"),c(" values of sliders.")],-1),Qe=a("p",null,[c("Use "),a("code",null,"thumb-size"),c(", "),a("code",null,"tick-size"),c(", and "),a("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),Xe=a("p",null,[c("You can display a thumb label while sliding or always with the "),a("code",null,"thumb-label"),c(" prop.")],-1),Ze=a("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),el=a("p",null,[c(" You can use the "),a("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),ll=a("p",null,[c("Sliders can be combined with other components in its "),a("code",null,"append"),c(" slot, such as "),a("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),tl=a("p",null,[c("Use slots such as "),a("code",null,"append"),c(" and "),a("code",null,"prepend"),c(" to easily customize the "),a("code",null,"v-slider"),c(" to fit any situation.")],-1),Sl={__name:"slider",setup(v){return(t,s)=>{const n=Te,d=q,o=Re,r=Se,S=xe,h=he,x=fe,U=be,A=_e,F=pe,j=re,B=oe,P=te,I=X;return _(),b(f,{class:"match-height"},{default:l(()=>[e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Basic",code:De},{default:l(()=>[Ne,e(n)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Disabled and Readonly",code:Ue},{default:l(()=>[Ge,e(o)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Colors",code:Ae},{default:l(()=>[qe,e(r)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Icons",code:Fe},{default:l(()=>[Ke,e(S)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Step",code:Le},{default:l(()=>[We,e(h)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Validation",code:Ie},{default:l(()=>[He,e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Min and Max",code:Me},{default:l(()=>[Je,e(U)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Size",code:Oe},{default:l(()=>[Qe,e(A)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Thumb",code:Be},{default:l(()=>[Xe,e(F)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Ticks",code:je},{default:l(()=>[Ze,e(j)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Vertical",code:Pe},{default:l(()=>[el,e(B)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Append text field",code:Ee},{default:l(()=>[ll,e(P)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Append and prepend",code:Ye},{default:l(()=>[tl,e(I)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Sl as default};
