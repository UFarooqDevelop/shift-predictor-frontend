import{k as s,o as C,b as _,w as o,p as l,q as e,ap as i,z as b,aV as T,m as k}from"./index.e64df15f.js";import{r as m,b as D,i as B,a as E,c as j,l as M,p as Y,d as $,f as A,e as R,u as L}from"./validators.741d8b3f.js";import{V as y,a}from"./VRow.44a0774f.js";import{V as u}from"./VTextField.c5daeec6.js";import{V as g}from"./VBtn.e5e897d5.js";import{V as N}from"./VForm.442a2ac4.js";import{_ as O}from"./AppCardCode.8494b910.js";import"./index.0d4b9ec4.js";/* empty css                   */import"./VField.d8105e01.js";import"./index.e4d4f866.js";import"./VInput.e37c48cf.js";import"./router.7fdf4318.js";import"./VImg.1f0b6293.js";import"./position.771ba387.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.eeb76e28.js";import"./vue.runtime.esm-bundler.d7e205f8.js";import"./VCard.83701cac.js";import"./VAvatar.c8e7782f.js";import"./VDivider.f14d7027.js";const z={__name:"DemoFormValidationTypes",setup(h){const f=s(""),V=s(""),F=s(""),p=s(""),n=s(""),v=s(""),d=s(""),c=s(""),w=s(""),x=s(""),U=s(""),q=s(""),P=s();return(W,t)=>(C(),_(N,{ref_key:"refForm",ref:P,onSubmit:t[13]||(t[13]=T(()=>{},["prevent"]))},{default:o(()=>[l(y,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(f),"onUpdate:modelValue":t[0]||(t[0]=r=>i(f)?f.value=r:null),"persistent-placeholder":"",placeholder:"This field is required",rules:[e(m)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(V),"onUpdate:modelValue":t[1]||(t[1]=r=>i(V)?V.value=r:null),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:[e(m),e(D)(e(V),10,20)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(F),"onUpdate:modelValue":t[2]||(t[2]=r=>i(F)?F.value=r:null),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:[e(m),e(B)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(p),"onUpdate:modelValue":t[3]||(t[3]=r=>i(p)?p.value=r:null),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:[e(m),e(E)(e(p),"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(n),"onUpdate:modelValue":t[4]||(t[4]=r=>i(n)?n.value=r:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:[e(m),e(j)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(v),"onUpdate:modelValue":t[5]||(t[5]=r=>i(v)?v.value=r:null),"persistent-placeholder":"",placeholder:"Length should not be less than the specified length : 3",rules:[e(m),e(M)(e(v),3)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(d),"onUpdate:modelValue":t[6]||(t[6]=r=>i(d)?d.value=r:null),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:[e(m),e(Y)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(c),"onUpdate:modelValue":t[7]||(t[7]=r=>i(c)?c.value=r:null),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:[e(m),e(M)(e(c),3),e(B)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(w),"onUpdate:modelValue":t[8]||(t[8]=r=>i(w)?w.value=r:null),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:[e(m),e($)(e(w),e(d))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(x),"onUpdate:modelValue":t[9]||(t[9]=r=>i(x)?x.value=r:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:[e(m),e(A)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(U),"onUpdate:modelValue":t[10]||(t[10]=r=>i(U)?U.value=r:null),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:[e(m),e(R)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(q),"onUpdate:modelValue":t[11]||(t[11]=r=>i(q)?q.value=r:null),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:[e(m),e(L)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(g,{type:"submit",onClick:t[12]||(t[12]=r=>{var S;return(S=e(P))==null?void 0:S.validate()})},{default:o(()=>[b(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},I={__name:"DemoFormValidationValidatingMultipleRules",setup(h){const f=s(""),V=s(""),F=s(),p=s(""),n=s("");return(v,d)=>(C(),_(N,{ref_key:"refForm",ref:F,onSubmit:T(()=>{},["prevent"])},{default:o(()=>[l(y,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(f),"onUpdate:modelValue":d[0]||(d[0]=c=>i(f)?f.value=c:null),placeholder:"Your Name","persistent-placeholder":"",rules:[e(m)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(V),"onUpdate:modelValue":d[1]||(d[1]=c=>i(V)?V.value=c:null),placeholder:"Your Email","persistent-placeholder":"",rules:[e(m),e(R)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(p),"onUpdate:modelValue":d[2]||(d[2]=c=>i(p)?p.value=c:null),type:"password",placeholder:"Your Password","persistent-placeholder":"",rules:[e(m),e(Y)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(n),"onUpdate:modelValue":d[3]||(d[3]=c=>i(n)?n.value=c:null),type:"password",placeholder:"Confirm Password","persistent-placeholder":"",rules:[e(m),e($)(e(n),e(p))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(g,{type:"submit",onClick:d[4]||(d[4]=c=>{var w;return(w=e(F))==null?void 0:w.validate()})},{default:o(()=>[b(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},G={__name:"DemoFormValidationSimpleFormValidation",setup(h){const f=s(""),V=s(""),F=s();return(p,n)=>(C(),_(N,{ref_key:"refForm",ref:F,onSubmit:T(()=>{},["prevent"])},{default:o(()=>[l(y,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(f),"onUpdate:modelValue":n[0]||(n[0]=v=>i(f)?f.value=v:null),label:"First Name",rules:[e(m)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(u,{modelValue:e(V),"onUpdate:modelValue":n[1]||(n[1]=v=>i(V)?V.value=v:null),label:"Email",rules:[e(m),e(R)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(g,{type:"submit",onClick:n[2]||(n[2]=v=>{var d;return(d=e(F))==null?void 0:d.validate()})},{default:o(()=>[b(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},H={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@validators'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},J={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import { confirmedValidator, emailValidator, passwordValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const refForm = ref<VForm>()
const password = ref('')
const confirmPassword = ref('')
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  confirmedValidator,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},K={ts:"",js:""},Q=k("p",null,[b("Use "),k("code",null,"Rules"),b(" prop to validate the input.")],-1),Ce={__name:"form-validation",setup(h){return(f,V)=>{const F=G,p=O,n=I,v=z;return C(),_(y,null,{default:o(()=>[l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Simple Form Validation",code:H},{default:o(()=>[Q,l(F)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Validating Multiple Rules",code:J},{default:o(()=>[l(n)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Validation Types",code:K},{default:o(()=>[l(v)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ce as default};
