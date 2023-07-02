import{k as _,o as u,b as V,w as l,p as e,y as w,ae as A,z as o,q as c,V as D,v as U,c as S,aI as q,ap as x,aK as g,m as t}from"./index.e64df15f.js";import{c as j}from"./index.e4d4f866.js";import{V as N}from"./VTooltip.9ca6e0f1.js";import{c as L,V as B}from"./VBtn.e5e897d5.js";import{V as i}from"./VTextField.c5daeec6.js";import{a as s,V as v}from"./VRow.44a0774f.js";import{r as E,e as W}from"./validators.741d8b3f.js";import{V as z}from"./VForm.442a2ac4.js";import{_ as H}from"./AppCardCode.8494b910.js";import"./scopeId.4fd431f4.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.882dd49d.js";import"./router.7fdf4318.js";import"./lazy.c871e1a1.js";import"./easing.36b781ab.js";import"./VImg.1f0b6293.js";import"./position.771ba387.js";/* empty css                   */import"./VField.d8105e01.js";import"./VInput.e37c48cf.js";import"./VCounter.eeb76e28.js";import"./index.0d4b9ec4.js";import"./vue.runtime.esm-bundler.d7e205f8.js";import"./VCard.83701cac.js";import"./VAvatar.c8e7782f.js";import"./VDivider.f14d7027.js";const Y={key:0,class:"ms-3"},O={__name:"DemoTextfieldIconSlots",setup(b){const n=_("Hey!"),d=_(!1),m=()=>{d.value=!0,n.value="Wait for it...",setTimeout(()=>{d.value=!1,n.value="You've clicked me!"},2e3)};return(a,f)=>(u(),V(i,{modelValue:c(n),"onUpdate:modelValue":f[0]||(f[0]=r=>x(n)?n.value=r:null),clearable:"","clear-icon":"tabler-circle-x",label:"Message",type:"text"},{prepend:l(()=>[e(N,{location:"bottom"},{activator:l(({props:r})=>[e(w,A(r,{icon:"tabler-help"}),null,16)]),default:l(()=>[o(" I'm a tooltip ")]),_:1})]),"append-inner":l(()=>[e(j,{"leave-absolute":""},{default:l(()=>[c(d)?(u(),V(L,{key:0,size:"24",color:"info",indeterminate:""})):(u(),V(c(D),{key:1,nodes:c(U).app.logo},null,8,["nodes"]))]),_:1})]),append:l(()=>[e(B,{size:a.$vuetify.display.smAndDown?"small":"large",class:"mt-n3",icon:a.$vuetify.display.smAndDown,onClick:m},{default:l(()=>[e(w,{icon:"tabler-viewfinder"}),a.$vuetify.display.mdAndUp?(u(),S("span",Y,"Click me")):q("",!0)]),_:1},8,["size","icon"])]),_:1},8,["modelValue"]))}},K={__name:"DemoTextfieldPasswordInput",setup(b){const n=_(!1),d=_(!0),m=_("Password"),a=_("wqfasds"),f={required:r=>!!r||"Required.",min:r=>r.length>=8||"Min 8 characters"};return(r,p)=>(u(),V(v,null,{default:l(()=>[e(s,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:c(m),"onUpdate:modelValue":p[0]||(p[0]=h=>x(m)?m.value=h:null),"append-inner-icon":c(n)?"tabler-eye":"tabler-eye-off",rules:[f.required,f.min],type:c(n)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:appendInner":p[1]||(p[1]=h=>n.value=!c(n))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(s,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:c(a),"onUpdate:modelValue":p[2]||(p[2]=h=>x(a)?a.value=h:null),"append-inner-icon":c(d)?"tabler-eye":"tabler-eye-off",rules:[f.required,f.min],type:c(d)?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters","onClick:appendInner":p[3]||(p[3]=h=>d.value=!c(d))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1})]),_:1}))}},G={},J=t("strong",null,"icon",-1);function Q(b,n){return u(),V(i,null,{label:l(()=>[o(" What about \xA0"),J,o("\xA0here? "),e(w,{icon:"tabler-file-search"})]),_:1})}const X=g(G,[["render",Q]]),Z={__name:"DemoTextfieldIconEvents",setup(b){const n=_("Hey!"),d=_(!0),m=_(0),a=()=>{d.value=!d.value},f=()=>{n.value=""},r=()=>{m.value=0},p=()=>{r(),f()};return(h,C)=>(u(),V(i,{modelValue:c(n),"onUpdate:modelValue":C[0]||(C[0]=T=>x(n)?n.value=T:null),clearable:"",type:"text",label:"Message",color:"primary","clear-icon":"tabler-circle-x","append-icon":c(n)?"tabler-arrow-big-right-lines":"tabler-microphone","append-inner-icon":c(d)?"tabler-map-pin":"tabler-map-pin-off","onClick:appendInner":a,"onClick:append":p,"onClick:clear":f},null,8,["modelValue","append-icon","append-inner-icon"]))}},ee={__name:"DemoTextfieldValidation",setup(b){const n=_("");return(d,m)=>(u(),V(z,null,{default:l(()=>[e(i,{modelValue:c(n),"onUpdate:modelValue":m[0]||(m[0]=a=>x(n)?n.value=a:null),rules:[c(E),c(W)],label:"E-mail"},null,8,["modelValue","rules"])]),_:1}))}},le={};function te(b,n){return u(),V(i,{label:"Regular","single-line":""})}const oe=g(le,[["render",te]]),ne={__name:"DemoTextfieldPrefixesAndSuffixes",setup(b){const n=_(10.05),d=_(28.02),m=_("example"),a=_("04:56");return(f,r)=>(u(),V(v,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(n),"onUpdate:modelValue":r[0]||(r[0]=p=>x(n)?n.value=p:null),label:"Amount",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(d),"onUpdate:modelValue":r[1]||(r[1]=p=>x(d)?d.value=p:null),label:"Weight",suffix:"lbs"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(m),"onUpdate:modelValue":r[2]||(r[2]=p=>x(m)?m.value=p:null),label:"Email address",suffix:"@gmail.com"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(a),"onUpdate:modelValue":r[3]||(r[3]=p=>x(a)?a.value=p:null),label:"Label Text",type:"time",suffix:"PST"},null,8,["modelValue"])]),_:1})]),_:1}))}},ae={};function se(b,n){return u(),V(v,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Prepend","prepend-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Prepend Inner","prepend-inner-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Append","append-icon":"tabler-map-pin"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Append Inner","append-inner-icon":"tabler-map-pin"})]),_:1})]),_:1})}const ie=g(ae,[["render",se]]),re={};function ce(b,n){return u(),V(i,{color:"success",label:"First name"})}const de=g(re,[["render",ce]]),pe={};function me(b,n){return u(),V(i,{label:"Regular",clearable:""})}const ue=g(pe,[["render",me]]),fe={__name:"DemoTextfieldCounter",setup(b){const n=_("Preliminary report"),d=_("California is a state in the western United States"),m=[a=>a.length<=25||"Max 25 characters"];return(a,f)=>(u(),V(v,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(n),"onUpdate:modelValue":f[0]||(f[0]=r=>x(n)?n.value=r:null),rules:m,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(d),"onUpdate:modelValue":f[1]||(f[1]=r=>x(d)?d.value=r:null),rules:m,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1}))}},Ve={};function _e(b,n){return u(),V(v,null,{default:l(()=>[e(s,null,{default:l(()=>[e(i,{label:"Disabled",disabled:""})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Readonly",readonly:""})]),_:1})]),_:1})}const be=g(Ve,[["render",_e]]),xe={};function ge(b,n){return u(),V(v,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Outlined"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Filled",variant:"filled"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Solo",variant:"solo"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Plain",variant:"plain"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const he=g(xe,[["render",ge]]),ve={};function Ce(b,n){return u(),V(i,{label:"Compact",density:"compact"})}const Te=g(ve,[["render",Ce]]),we={};function ye(b,n){return u(),V(i,{label:"Regular"})}const Fe=g(we,[["render",ye]]),ke={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Re={ts:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`},Ie={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`},$e={ts:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`,js:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},Pe={ts:`<script lang="ts" setup>
import { emailValidator, requiredValidator } from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`},Ae={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},De={ts:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </VTextField>
</template>
`,js:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </VTextField>
</template>
`},Ue={ts:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`,js:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`},Se={ts:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`},qe={ts:`<template>
  <VTextField label="Regular" />
</template>
`,js:`<template>
  <VTextField label="Regular" />
</template>
`},je={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`},Ne={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},Le={ts:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="tabler-circle-x"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="tabler-circle-x"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`},Ee=t("p",null,"Text fields components are used for collecting user provided information.",-1),We=t("p",null,[o("The "),t("code",null,"density"),o(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),t("strong",null,"default"),o(", "),t("strong",null,"comfortable"),o(", and "),t("strong",null,"compact"),o(".")],-1),ze=t("p",null,[o("Use "),t("code",null,"solo"),o(", "),t("code",null,"filled"),o(", "),t("code",null,"outlined"),o(", "),t("code",null,"plain"),o(" and "),t("code",null,"underlined"),o(" option of "),t("code",null,"variant"),o(" prop to change the look of the textfield. ")],-1),He=t("p",null,"Text fields can be disabled or readonly.",-1),Ye=t("p",null,[o("Use a "),t("code",null,"counter"),o(" prop to inform a user of the character limit.")],-1),Oe=t("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Ke=t("p",null,[o("Use "),t("code",null,"color"),o(" prop to change the input text color.")],-1),Ge=t("p",null,[o("You can add icons to the text field with "),t("code",null,"prepend-icon"),o(", "),t("code",null,"append-icon"),o(" and "),t("code",null,"append-inner-icon"),o(" and "),t("code",null,"prepend-inner-icon"),o(" props.")],-1),Je=t("p",null,[o("The "),t("code",null,"prefix"),o(" and "),t("code",null,"suffix"),o(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),Qe=t("p",null,[t("code",null,"single-line"),o(" text fields do not float their label on focus or with data.")],-1),Xe=t("p",null,[o("Vuetify includes simple validation through the "),t("code",null,"rules"),o(" prop.")],-1),Ze=t("p",null,[t("code",null,"click:prepend"),o(", "),t("code",null,"click:append"),o(", "),t("code",null,"click:append-inner"),o(", and "),t("code",null,"click:clear"),o(" will be emitted when you click on the respective icon")],-1),el=t("p",null,[o("Text field label can be defined in "),t("code",null,"label"),o(" slot - that will allow to use HTML content.")],-1),ll=t("p",null,[o("Using the HTML input "),t("code",null,"type"),o(" password can be used with an appended icon and callback to control the visibility.")],-1),tl=t("p",null,[o("Instead of using "),t("code",null,"prepend"),o("/"),t("code",null,"append"),o("/"),t("code",null,"append-inner"),o(" icons you can use slots to extend input's functionality.")],-1),Il={__name:"textfield",setup(b){return(n,d)=>{const m=Fe,a=H,f=Te,r=he,p=be,h=fe,C=ue,T=de,y=ie,F=ne,k=oe,R=ee,I=Z,$=X,M=K,P=O;return u(),V(v,{class:"match-height"},{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Basic",code:qe},{default:l(()=>[Ee,e(m)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Density",code:$e},{default:l(()=>[We,e(f)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(a,{title:"Variant",code:Ae},{default:l(()=>[ze,e(r)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"State",code:Le},{default:l(()=>[He,e(p)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Counter",code:ke},{default:l(()=>[Ye,e(h)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Clearable",code:Se},{default:l(()=>[Oe,e(C)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Custom Colors",code:Ue},{default:l(()=>[Ke,e(T)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icons",code:Ie},{default:l(()=>[Ge,e(y)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Prefixes and suffixes",code:je},{default:l(()=>[Je,e(F)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Single line",code:Re},{default:l(()=>[Qe,e(k)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Validation",code:Pe},{default:l(()=>[Xe,e(R)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon events",code:Ne},{default:l(()=>[Ze,e(I)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Label Slot",code:De},{default:l(()=>[el,e($)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Password input",code:Me},{default:l(()=>[ll,e(M)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon slots",code:Be},{default:l(()=>[tl,e(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Il as default};
