import{k as s,o as C,b as y,w as o,p as l,q as e,ap as m,z as b,aV as T,m as B}from"./index.4ee6cde3.js";import{r as u,b as D,i as S,a as E,c as j,l as M,p as Y,d as $,f as A,e as R,u as L}from"./validators.741d8b3f.js";import{V as _,a}from"./VRow.c3eca72e.js";import{V as n}from"./VTextField.09239994.js";import{V as g}from"./VBtn.0615207f.js";import{V as N}from"./VForm.aebc804f.js";import{_ as O}from"./AppCardCode.b8eed905.js";import"./index.0d4b9ec4.js";/* empty css                   */import"./VField.6c34a9d5.js";import"./index.2dd7ffb7.js";import"./VInput.714af960.js";import"./router.6f77ab28.js";import"./VImg.f62a2fa4.js";import"./position.96124056.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.317f303d.js";import"./vue.runtime.esm-bundler.ec9644bb.js";import"./VCard.51ac3a8a.js";import"./VAvatar.23763371.js";import"./VDivider.1ede16c7.js";const z={__name:"DemoFormValidationTypes",setup(h){const f=s(""),V=s(""),F=s(""),p=s(""),i=s(""),v=s(""),d=s(""),c=s(""),w=s(""),x=s(""),U=s(""),q=s(""),P=s();return(W,t)=>(C(),y(N,{ref_key:"refForm",ref:P,onSubmit:t[13]||(t[13]=T(()=>{},["prevent"]))},{default:o(()=>[l(_,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(f),"onUpdate:modelValue":t[0]||(t[0]=r=>m(f)?f.value=r:null),"persistent-placeholder":"",placeholder:"This field is required",rules:[e(u)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(V),"onUpdate:modelValue":t[1]||(t[1]=r=>m(V)?V.value=r:null),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:[e(u),e(D)(e(V),10,20)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(F),"onUpdate:modelValue":t[2]||(t[2]=r=>m(F)?F.value=r:null),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:[e(u),e(S)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(p),"onUpdate:modelValue":t[3]||(t[3]=r=>m(p)?p.value=r:null),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:[e(u),e(E)(e(p),"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(i),"onUpdate:modelValue":t[4]||(t[4]=r=>m(i)?i.value=r:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:[e(u),e(j)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(v),"onUpdate:modelValue":t[5]||(t[5]=r=>m(v)?v.value=r:null),"persistent-placeholder":"",placeholder:"Length should not be less than the specified length : 3",rules:[e(u),e(M)(e(v),3)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(d),"onUpdate:modelValue":t[6]||(t[6]=r=>m(d)?d.value=r:null),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:[e(u),e(Y)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(c),"onUpdate:modelValue":t[7]||(t[7]=r=>m(c)?c.value=r:null),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:[e(u),e(M)(e(c),3),e(S)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(w),"onUpdate:modelValue":t[8]||(t[8]=r=>m(w)?w.value=r:null),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:[e(u),e($)(e(w),e(d))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(x),"onUpdate:modelValue":t[9]||(t[9]=r=>m(x)?x.value=r:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:[e(u),e(A)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(U),"onUpdate:modelValue":t[10]||(t[10]=r=>m(U)?U.value=r:null),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:[e(u),e(R)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(q),"onUpdate:modelValue":t[11]||(t[11]=r=>m(q)?q.value=r:null),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:[e(u),e(L)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(g,{type:"submit",onClick:t[12]||(t[12]=r=>{var k;return(k=e(P))==null?void 0:k.validate()})},{default:o(()=>[b(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},I={__name:"DemoFormValidationValidatingMultipleRules",setup(h){const f=s(""),V=s(""),F=s(),p=s(""),i=s("");return(v,d)=>(C(),y(N,{ref_key:"refForm",ref:F,onSubmit:d[5]||(d[5]=T(()=>{},["prevent"]))},{default:o(()=>[l(_,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(f),"onUpdate:modelValue":d[0]||(d[0]=c=>m(f)?f.value=c:null),placeholder:"Your Name","persistent-placeholder":"",rules:[e(u)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(V),"onUpdate:modelValue":d[1]||(d[1]=c=>m(V)?V.value=c:null),placeholder:"Your Email","persistent-placeholder":"",rules:[e(u),e(R)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(p),"onUpdate:modelValue":d[2]||(d[2]=c=>m(p)?p.value=c:null),type:"password",placeholder:"Your Password","persistent-placeholder":"",rules:[e(u),e(Y)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(i),"onUpdate:modelValue":d[3]||(d[3]=c=>m(i)?i.value=c:null),type:"password",placeholder:"Confirm Password","persistent-placeholder":"",rules:[e(u),e($)(e(i),e(p))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(g,{type:"submit",onClick:d[4]||(d[4]=c=>{var w;return(w=e(F))==null?void 0:w.validate()})},{default:o(()=>[b(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},G={__name:"DemoFormValidationSimpleFormValidation",setup(h){const f=s(""),V=s(""),F=s();return(p,i)=>(C(),y(N,{ref_key:"refForm",ref:F,onSubmit:i[3]||(i[3]=T(()=>{},["prevent"]))},{default:o(()=>[l(_,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(f),"onUpdate:modelValue":i[0]||(i[0]=v=>m(f)?f.value=v:null),label:"First Name",rules:[e(u)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(n,{modelValue:e(V),"onUpdate:modelValue":i[1]||(i[1]=v=>m(V)?V.value=v:null),label:"Email",rules:[e(u),e(R)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(g,{type:"submit",onClick:i[2]||(i[2]=v=>{var d;return(d=e(F))==null?void 0:d.validate()})},{default:o(()=>[b(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},H={ts:`<script lang="ts" setup>
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
`},K={ts:"",js:""},Q=B("p",null,[b("Use "),B("code",null,"Rules"),b(" prop to validate the input.")],-1),Ce={__name:"form-validation",setup(h){return(f,V)=>{const F=G,p=O,i=I,v=z;return C(),y(_,null,{default:o(()=>[l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Simple Form Validation",code:H},{default:o(()=>[Q,l(F)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Validating Multiple Rules",code:J},{default:o(()=>[l(i)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Validation Types",code:K},{default:o(()=>[l(v)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ce as default};
