import{V as s}from"./VTextarea.903e0ba5.js";import{k as _,o as i,b as u,q as V,ap as w,aK as m,w as t,p as e,m as o,z as a}from"./index.f3a873c9.js";import{a as l,V as x}from"./VRow.d783d60c.js";import{_ as k}from"./AppCardCode.ca2d54d4.js";/* empty css                   */import"./VField.6b025d9e.js";import"./index.3dd6b812.js";import"./VInput.7c775bf8.js";import"./router.95c39f17.js";import"./VImg.c8e19ad1.js";import"./position.a7c75c96.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.d3962262.js";import"./vue.runtime.esm-bundler.fd40a88f.js";import"./VCard.9e396196.js";import"./VAvatar.b8bd2c01.js";import"./VBtn.095583cc.js";import"./VDivider.39d92552.js";const z={__name:"DemoTextareaValidation",setup(p){const r=_("Hello!"),d=[c=>c.length<=25||"Max 25 characters"];return(c,n)=>(i(),u(s,{modelValue:V(r),"onUpdate:modelValue":n[0]||(n[0]=h=>w(r)?r.value=h:null),label:"Validation",rules:d,rows:"2"},null,8,["modelValue"]))}},$={__name:"DemoTextareaNoResize",setup(p){const r=_("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.");return(d,c)=>(i(),u(s,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=n=>w(r)?r.value=n:null),label:"Text","no-resize":"",rows:"2"},null,8,["modelValue"]))}},j={};function H(p,r){return i(),u(x,null,{default:t(()=>[e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{label:"One row","auto-grow":"",rows:"1","row-height":"15"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{"auto-grow":"",label:"Two rows",rows:"2","row-height":"20"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{label:"Three rows","auto-grow":"",rows:"3","row-height":"25"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{"auto-grow":"",label:"Four rows",rows:"4","row-height":"30"})]),_:1})]),_:1})}const U=m(j,[["render",H]]),A={};function M(p,r){return i(),u(x,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(s,{label:"prepend-icon",rows:"1","prepend-icon":"tabler-message-2"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(s,{"append-icon":"tabler-message-2",label:"append-icon",rows:"1"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(s,{"prepend-inner-icon":"tabler-message-2",label:"prepend-inner-icon",rows:"1"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(s,{"append-inner-icon":"tabler-message-2",label:"append-inner-icon",rows:"1"})]),_:1})]),_:1})}const B=m(A,[["render",M]]),G={__name:"DemoTextareaCounter",setup(p){const r=_("Hello!");return(d,c)=>(i(),u(s,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=n=>w(r)?r.value=n:null),counter:"",label:"Text"},null,8,["modelValue"]))}},F={__name:"DemoTextareaClearable",setup(p){const r=_("This is clearable text.");return(d,c)=>(i(),u(s,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=n=>w(r)?r.value=n:null),clearable:"","clear-icon":"tabler-circle-x",label:"Text"},null,8,["modelValue"]))}},N={};function O(p,r){return i(),u(s,{autocomplete:"email",label:"Email"})}const P=m(N,[["render",O]]),S={};function W(p,r){return i(),u(x,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(s,{disabled:"",label:"Disabled",hint:"Hint text",rows:"2"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(s,{readonly:"",rows:"2",label:"Readonly",hint:"Hint text"})]),_:1})]),_:1})}const E=m(S,[["render",W]]),I={};function q(p,r){return i(),u(x,null,{default:t(()=>[e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{label:"Default",rows:"2"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{label:"Solo",rows:"2",variant:"solo"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{label:"Filled",rows:"2",variant:"filled"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{label:"Outlined",rows:"2",variant:"outlined"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{label:"Underlined",rows:"2",variant:"underlined"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(s,{label:"Plain",rows:"2",variant:"plain"})]),_:1})]),_:1})}const K=m(I,[["render",q]]),Y={__name:"DemoTextareaAutoGrow",setup(p){const r=_("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.");return(d,c)=>(i(),u(s,{modelValue:V(r),"onUpdate:modelValue":c[0]||(c[0]=n=>w(r)?r.value=n:null),label:"Auto Grow","auto-grow":""},null,8,["modelValue"]))}},J={};function L(p,r){return i(),u(s,{label:"Default"})}const Q=m(J,[["render",L]]),X={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},Z={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
  />
</template>
`},ee={ts:`<template>
  <VTextarea label="Default" />
</template>
`,js:`<template>
  <VTextarea label="Default" />
</template>
`},te={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`,js:`<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`},oe={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},ae={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},le={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="tabler-message-2"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="tabler-message-2"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},re={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`},se={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`,js:`<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`},ne={ts:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`,js:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`},ce={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`},ie=o("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1),ue=o("p",null,[a("When using the "),o("code",null,"auto-grow"),a(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1),pe=o("p",null,[a("Use "),o("code",null,"filled"),a(", "),o("code",null,"plain"),a(", "),o("code",null,"outlined"),a(", "),o("code",null,"solo"),a(" and "),o("code",null,"underlined"),a(" option of "),o("code",null,"variant"),a(" prop to change the look of file input.")],-1),de=o("p",null,[a("Use "),o("code",null,"disabled"),a(" and "),o("code",null,"readonly"),a(" prop to change the state of textarea.")],-1),me=o("p",null,[a(" The "),o("code",null,"autocomplete"),a(" prop gives you the option to enable the browser to predict user input. ")],-1),_e=o("p",null,[a("You can clear the text from a "),o("code",null,"v-textarea"),a(" by using the "),o("code",null,"clearable"),a(" prop, and customize the icon used with the "),o("code",null,"clearable-icon"),a(" prop.")],-1),Ve=o("p",null,[a(" The "),o("code",null,"counter"),a(" prop informs the user of a character limit for the "),o("code",null,"v-textarea"),a(". ")],-1),we=o("p",null,[a("The "),o("code",null,"append-icon"),a(", "),o("code",null,"prepend-icon"),a(", "),o("code",null,"append-inner-icon"),a(" and "),o("code",null,"prepend-inner-icon"),a(" props help add context to v-textarea.")],-1),xe=o("p",null,[a("The "),o("code",null,"rows"),a(" prop allows you to define how many rows the textarea has, when combined with the "),o("code",null,"row-height"),a(" prop you can further customize your rows by defining their height.")],-1),he=o("p",null,[o("code",null,"v-textarea"),a("'s have the option to remain the same size regardless of their content's size, using the "),o("code",null,"no-resize"),a(" prop.")],-1),be=o("p",null,[a("Use "),o("code",null,"rules"),a(" prop to validate the textarea.")],-1),Ne={__name:"textarea",setup(p){return(r,d)=>{const c=Q,n=k,h=Y,b=K,f=E,T=P,g=F,C=G,v=B,R=U,D=$,y=z;return i(),u(x,{class:"match-height"},{default:t(()=>[e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Basic",code:ee},{default:t(()=>[ie,e(c)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Auto Grow",code:te},{default:t(()=>[ue,e(h)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(n,{title:"Variant",code:X},{default:t(()=>[pe,e(b)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"States",code:oe},{default:t(()=>[de,e(f)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Browser autocomplete",code:ne},{default:t(()=>[me,e(T)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Clearable",code:Z},{default:t(()=>[_e,e(g)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Counter",code:ce},{default:t(()=>[Ve,e(C)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Icons",code:le},{default:t(()=>[we,e(v)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Rows",code:ae},{default:t(()=>[xe,e(R)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"No resize",code:se},{default:t(()=>[he,e(D)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Validation",code:re},{default:t(()=>[be,e(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ne as default};
