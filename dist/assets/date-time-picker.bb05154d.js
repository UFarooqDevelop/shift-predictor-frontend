import{_ as s}from"./AppDateTimePicker.d55518b8.js";import{k as u,o as l,b as n,q as i,ap as d,w as m,p as o}from"./index.4ee6cde3.js";import{_ as A}from"./AppCardCode.b8eed905.js";import{a as c,V as b}from"./VRow.c3eca72e.js";import"./VField.6c34a9d5.js";import"./index.2dd7ffb7.js";import"./VInput.714af960.js";import"./router.6f77ab28.js";import"./VImg.f62a2fa4.js";import"./position.96124056.js";import"./easing.36b781ab.js";import"./vue.runtime.esm-bundler.ec9644bb.js";import"./VCard.51ac3a8a.js";import"./VAvatar.23763371.js";import"./VBtn.0615207f.js";import"./VDivider.1ede16c7.js";const v={__name:"DemoDateTimePickerInline",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Inline",config:{inline:!0}},null,8,["modelValue"]))}},F={__name:"DemoDateTimePickerDisabledRange",setup(p){const e=new Date,r=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=u("");return(_,D)=>(l(),n(s,{modelValue:i(t),"onUpdate:modelValue":D[0]||(D[0]=f=>d(t)?t.value=f:null),label:"Disabled Range",config:{dateFormat:"Y-m-d",disable:[{from:`${i(a)}-${i(r)}-20`,to:`${i(a)}-${i(r)}-25`}]}},null,8,["modelValue","config"]))}},V={__name:"DemoDateTimePickerHumanFriendly",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Human Friendly",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"]))}},Y={__name:"DemoDateTimePickerRange",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Range",config:{mode:"range"}},null,8,["modelValue"]))}},$={__name:"DemoDateTimePickerMultipleDates",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Multiple Dates",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"]))}},R={__name:"DemoDateTimePickerDateAndTime",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Date & TIme",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"]))}},w={__name:"DemoDateTimePickerTimePicker",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Time picker",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"]))}},M={__name:"DemoDateTimePickerBasic",setup(p){const e=u("");return(r,a)=>(l(),n(s,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=t=>d(e)?e.value=t:null),label:"Default"},null,8,["modelValue"]))}},H={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`},I={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},j={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},x={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},U={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`},y={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`},C={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},h={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`},te={__name:"date-time-picker",setup(p){return(e,r)=>{const a=M,t=A,_=w,D=R,f=$,T=Y,k=V,P=F,g=v;return l(),n(b,null,{default:m(()=>[o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Basic",code:H},{default:m(()=>[o(a)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Time Picker",code:I},{default:m(()=>[o(_)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Date and Time",code:j},{default:m(()=>[o(D)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Multiple Dates",code:x},{default:m(()=>[o(f)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Range",code:U},{default:m(()=>[o(T)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Human Friendly",code:y},{default:m(()=>[o(k)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Disabled Range",code:C},{default:m(()=>[o(P)]),_:1},8,["code"])]),_:1}),o(c,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Inline",code:h},{default:m(()=>[o(g)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{te as default};
