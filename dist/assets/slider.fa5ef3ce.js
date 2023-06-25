import{aK as k,k as V,O as z,o as _,c as $,m as a,x as R,q as n,p as e,w as l,b,aW as T,aI as P,y as I,ap as u,F as D,c7 as M,c6 as O,z as c}from"./index.e5c1e8e1.js";import{c as L}from"./index.1bcc5918.js";import{V as E}from"./VAvatar.d497555d.js";import{V as S}from"./VBtn.c5180d72.js";import{V as p}from"./VSlider.ba3dbec3.js";import{a as Y}from"./VImg.10863b21.js";import{a as m,V as f}from"./VRow.1f54dc9e.js";import{V as C}from"./VTextField.8a91b29c.js";import{_ as N}from"./AppCardCode.fcca560e.js";import"./router.0c602970.js";import"./position.2438c506.js";import"./VSliderTrack.021843fd.js";import"./VInput.cc0bea53.js";/* empty css                   */import"./VField.84115b4a.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.4b321610.js";import"./vue.runtime.esm-bundler.508f4d76.js";import"./VCard.8e399742.js";import"./VDivider.b5a2ab1e.js";const G=v=>(M("data-v-d27966a3"),v=v(),O(),v),q={class:"d-flex justify-space-between ma-4"},K=["textContent"],W=G(()=>a("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),H={__name:"DemoSliderAppendAndPrepend",setup(v){const t=V(40),s=40,i=218,r=V(!1),o=z(()=>t.value<100?"primary":t.value<125?"success":t.value<140?"info":t.value<175?"warning":"error"),d=z(()=>`${60/t.value}s`),w=()=>{t.value>s&&(t.value-=1)},y=()=>{t.value<i&&(t.value+=1)};return(g,h)=>(_(),$(D,null,[a("div",q,[a("div",null,[a("span",{class:"text-6xl font-weight-light",textContent:R(n(t))},null,8,K),W,e(L,null,{default:l(()=>[n(r)?(_(),b(E,{key:0,color:n(o),style:T({animationDuration:n(d)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):P("",!0)]),_:1})]),a("div",null,[e(S,{color:n(o),icon:"",elevation:"0",onClick:h[0]||(h[0]=x=>r.value=!n(r))},{default:l(()=>[e(I,{size:"large",icon:n(r)?"tabler-pause":"tabler-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:n(t),"onUpdate:modelValue":h[1]||(h[1]=x=>u(t)?t.value=x:null),color:n(o),step:1,min:s,max:i,"track-color":"secondary"},{prepend:l(()=>[e(S,{size:"small",variant:"text",icon:"tabler-minus",color:n(o),onClick:w},null,8,["color"])]),append:l(()=>[e(S,{size:"small",variant:"text",icon:"tabler-plus",color:n(o),onClick:y},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}},J=k(H,[["__scopeId","data-v-d27966a3"]]),Q={style:{width:"3rem"}},X={style:{width:"3rem"}},Z={style:{width:"3rem"}},ee={__name:"DemoSliderAppendTextField",setup(v){const t=V(161),s=V(105),i=V(255);return(r,o)=>(_(),$(D,null,[e(Y,{style:T({background:`rgb(${n(t)}, ${n(s)}, ${n(i)})`}),height:"150px"},null,8,["style"]),e(f,{class:"mt-5"},{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":o[1]||(o[1]=d=>u(t)?t.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-r"},{append:l(()=>[a("div",Q,[e(C,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=d=>u(t)?t.value=d:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=d=>u(s)?s.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-g"},{append:l(()=>[a("div",X,[e(C,{modelValue:n(s),"onUpdate:modelValue":o[2]||(o[2]=d=>u(s)?s.value=d:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[5]||(o[5]=d=>u(i)?i.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-b"},{append:l(()=>[a("div",Z,[e(C,{modelValue:n(i),"onUpdate:modelValue":o[4]||(o[4]=d=>u(i)?i.value=d:null),type:"number",variant:"underlined",max:255},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}},le={__name:"DemoSliderVertical",setup(v){const t=V(10);return(s,i)=>(_(),b(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>u(t)?t.value=r:null),direction:"vertical"},null,8,["modelValue"]))}},te=a("div",{class:"text-caption"}," Show ticks when using slider ",-1),oe=a("div",{class:"text-caption"}," Always show ticks ",-1),ae=a("div",{class:"text-caption"}," Tick size ",-1),se=a("div",{class:"text-caption"}," Tick labels ",-1),ne={__name:"DemoSliderTicks",setup(v){const t=V(0),s=V(1),i={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(r,o)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[te,e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=d=>u(t)?t.value=d:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[oe,e(p,{modelValue:n(t),"onUpdate:modelValue":o[1]||(o[1]=d=>u(t)?t.value=d:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ae,e(p,{modelValue:n(t),"onUpdate:modelValue":o[2]||(o[2]=d=>u(t)?t.value=d:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[se,e(p,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=d=>u(s)?s.value=d:null),ticks:i,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}},ie=a("div",{class:"text-caption"}," Show thumb when using slider ",-1),re=a("div",{class:"text-caption"}," Always show thumb label ",-1),de=a("div",{class:"text-caption"}," Custom thumb size ",-1),ce=a("div",{class:"text-caption"}," Custom thumb label ",-1),me={__name:"DemoSliderThumb",setup(v){const t=["\u{1F62D}","\u{1F622}","\u2639\uFE0F","\u{1F641}","\u{1F610}","\u{1F642}","\u{1F60A}","\u{1F601}","\u{1F604}","\u{1F60D}"],s=V(45);return(i,r)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[ie,e(p,{modelValue:n(s),"onUpdate:modelValue":r[0]||(r[0]=o=>u(s)?s.value=o:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[re,e(p,{modelValue:n(s),"onUpdate:modelValue":r[1]||(r[1]=o=>u(s)?s.value=o:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[de,e(p,{modelValue:n(s),"onUpdate:modelValue":r[2]||(r[2]=o=>u(s)?s.value=o:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[ce,e(p,{modelValue:n(s),"onUpdate:modelValue":r[3]||(r[3]=o=>u(s)?s.value=o:null),"thumb-label":"always"},{"thumb-label":l(({modelValue:o})=>[c(R(t[Math.min(Math.floor(o/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},ue={};function pe(v,t){return _(),b(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const Ve=k(ue,[["render",pe]]),ve={__name:"DemoSliderMinAndMax",setup(v){const t=V(-50),s=V(90),i=V(40);return(r,o)=>(_(),b(p,{modelValue:n(i),"onUpdate:modelValue":o[1]||(o[1]=d=>u(i)?i.value=d:null),max:n(s),min:n(t),step:1},{append:l(()=>[e(C,{modelValue:n(i),"onUpdate:modelValue":o[0]||(o[0]=d=>u(i)?i.value=d:null),variant:"underlined",type:"number",style:{width:"60px"}},null,8,["modelValue"])]),_:1},8,["modelValue","max","min"]))}},_e={__name:"DemoSliderValidation",setup(v){const t=V(30),s=[i=>i<=40||"Only 40 in stock"];return(i,r)=>(_(),b(p,{modelValue:n(t),"onUpdate:modelValue":r[0]||(r[0]=o=>u(t)?t.value=o:null),error:n(t)>40,rules:s,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}},be={__name:"DemoSliderStep",setup(v){const t=V(0);return(s,i)=>(_(),b(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>u(t)?t.value=r:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue","step"]))}},fe={__name:"DemoSliderIcons",setup(v){const t=V(0),s=V(0),i=V(10);return(r,o)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=d=>u(t)?t.value=d:null),"prepend-icon":"tabler-volume"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=d=>u(s)?s.value=d:null),"append-icon":"tabler-alarm"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>u(i)?i.value=d:null),"append-icon":"tabler-zoom-in","prepend-icon":"tabler-zoom-out"},null,8,["modelValue"])]),_:1})]),_:1}))}},he=a("div",{class:"text-caption"}," color ",-1),xe=a("div",{class:"text-caption"}," track-color ",-1),Ce=a("div",{class:"text-caption"}," thumb-color ",-1),we={__name:"DemoSliderColors",setup(v){const t=V(25),s=V(75),i=V(50);return(r,o)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[he,e(p,{modelValue:n(t),"onUpdate:modelValue":o[0]||(o[0]=d=>u(t)?t.value=d:null),color:"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[xe,e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=d=>u(s)?s.value=d:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[Ce,e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>u(i)?i.value=d:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}},ye={},Se=a("div",{class:"text-caption"}," Disabled ",-1),ke=a("div",{class:"text-caption"}," Readonly ",-1);function ge(v,t){return _(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[Se,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(m,{cols:"12"},{default:l(()=>[ke,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const ze=k(ye,[["render",ge]]),$e={__name:"DemoSliderBasic",setup(v){const t=V(30);return(s,i)=>(_(),b(f,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(p)]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>u(t)?t.value=r:null)},null,8,["modelValue"])]),_:1})]),_:1}))}},Re={ts:`<script setup lang="ts">
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
`},Te={ts:`<template>
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
`},De={ts:`<script lang="ts" setup>
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
`},Ue={ts:`<script lang="ts" setup>
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
`},Ae={ts:`<script lang="ts" setup>
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
`},Fe={ts:`<script lang="ts" setup>
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
`},je={ts:`<script lang="ts" setup>
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
`},Be={ts:`<script lang="ts" setup>
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
`},Pe={ts:`<script lang="ts" setup>
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
`},Ie={ts:`<template>
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
`},Me={ts:`<script lang="ts" setup>
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
`},Oe={ts:`<script lang="ts" setup>
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
`},Le={ts:`<script lang="ts" setup>
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
`},Ee=a("p",null,[c("The "),a("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),Ye=a("p",null,[c("You cannot interact with "),a("code",null,"disabled"),c(" and "),a("code",null,"readonly"),c(" sliders.")],-1),Ne=a("p",null,[c("You can set the colors of the slider using the props "),a("code",null,"color"),c(", "),a("code",null,"track-color"),c(" and "),a("code",null,"thumb-color"),c(".")],-1),Ge=a("p",null,[c("You can add icons to the slider with the "),a("code",null,"append-icon"),c(" and "),a("code",null,"prepend-icon"),c(" props.")],-1),qe=a("p",null,[c("Using the "),a("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),Ke=a("p",null,[c("Vuetify includes simple validation through the "),a("code",null,"rules"),c(" prop.")],-1),We=a("p",null,[c("You can set "),a("code",null,"min"),c(" and "),a("code",null,"max"),c(" values of sliders.")],-1),He=a("p",null,[c("Use "),a("code",null,"thumb-size"),c(", "),a("code",null,"tick-size"),c(", and "),a("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),Je=a("p",null,[c("You can display a thumb label while sliding or always with the "),a("code",null,"thumb-label"),c(" prop.")],-1),Qe=a("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),Xe=a("p",null,[c(" You can use the "),a("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),Ze=a("p",null,[c("Sliders can be combined with other components in its "),a("code",null,"append"),c(" slot, such as "),a("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),el=a("p",null,[c("Use slots such as "),a("code",null,"append"),c(" and "),a("code",null,"prepend"),c(" to easily customize the "),a("code",null,"v-slider"),c(" to fit any situation.")],-1),wl={__name:"slider",setup(v){return(t,s)=>{const i=$e,r=N,o=ze,d=we,w=fe,y=be,g=_e,h=ve,x=Ve,U=me,A=ne,F=le,j=ee,B=J;return _(),b(f,{class:"match-height"},{default:l(()=>[e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Basic",code:Re},{default:l(()=>[Ee,e(i)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Disabled and Readonly",code:Te},{default:l(()=>[Ye,e(o)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Colors",code:De},{default:l(()=>[Ne,e(d)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Icons",code:Ue},{default:l(()=>[Ge,e(w)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Step",code:Me},{default:l(()=>[qe,e(y)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Validation",code:Be},{default:l(()=>[Ke,e(g)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Min and Max",code:Pe},{default:l(()=>[We,e(h)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Size",code:Ie},{default:l(()=>[He,e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Thumb",code:Fe},{default:l(()=>[Je,e(U)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Ticks",code:Ae},{default:l(()=>[Qe,e(A)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Vertical",code:je},{default:l(()=>[Xe,e(F)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Append text field",code:Oe},{default:l(()=>[Ze,e(j)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Append and prepend",code:Le},{default:l(()=>[el,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{wl as default};
