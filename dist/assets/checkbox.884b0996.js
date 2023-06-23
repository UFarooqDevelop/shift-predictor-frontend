import{a as x,V as v}from"./VRow.fd5da9e5.js";import{V as b}from"./VCheckbox.1cffb94f.js";import{V as g}from"./VTextField.e023f519.js";import{k as m,o as h,c as f,p as e,w as i,q as a,ap as u,F as C,b as V,m as s,z as d,ag as S,aV as O,x as I,a as U}from"./index.3b451135.js";import{V as z}from"./VTooltip.885a52f0.js";import{_ as $}from"./AppCardCode.74a788f4.js";import"./VInput.56d1203e.js";import"./router.a4e1d8e9.js";import"./index.e3636733.js";import"./VImg.a3ce540d.js";import"./VCheckboxBtn.067ddf3e.js";import"./VSelectionControl.4a43d5b7.js";/* empty css                   */import"./VField.cf395f35.js";import"./position.440bbdda.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.4abec5d0.js";import"./scopeId.c51831e6.js";import"./VOverlay.6a95ffa6.js";import"./lazy.a31b93fb.js";import"./vue.runtime.esm-bundler.2a06472f.js";import"./VCard.956ab590.js";import"./VAvatar.eaf074d5.js";import"./VBtn.6501e66c.js";import"./VDivider.a6fdab49.js";const D={__name:"DemoCheckboxInlineTextField",setup(k){const o=m(!0),t=m(!1);return(r,l)=>(h(),f(C,null,[e(v,null,{default:i(()=>[e(x,{sm:"1",cols:"2"},{default:i(()=>[e(b,{modelValue:a(o),"onUpdate:modelValue":l[0]||(l[0]=c=>u(o)?o.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{sm:"11",cols:"10"},{default:i(()=>[e(g,{label:"Include files"})]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(x,{cols:"2",sm:"1"},{default:i(()=>[e(b,{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=c=>u(t)?t.value=c:null)},null,8,["modelValue"])]),_:1}),e(x,{cols:"10",sm:"11"},{default:i(()=>[e(g,{disabled:!a(t),label:"I only work if you check the box"},null,8,["disabled"])]),_:1})]),_:1})],64))}},J={__name:"DemoCheckboxLabelSlot",setup(k){const o=m(!1);return(t,r)=>(h(),V(b,{modelValue:a(o),"onUpdate:modelValue":r[1]||(r[1]=l=>u(o)?o.value=l:null)},{label:i(()=>[s("div",null,[d(" I agree that "),e(z,{location:"bottom"},{activator:i(({props:l})=>[s("a",S({href:"https://vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer"},l,{onClick:r[0]||(r[0]=O(()=>{},["stop"]))})," Vuetify ",16)]),default:i(()=>[d(" Opens in new window ")]),_:1}),d(" is awesome ")])]),_:1},8,["modelValue"]))}},A={class:"demo-space-x"},F={__name:"DemoCheckboxStates",setup(k){const o=m(!0),t=m(!0),r=m(!0),l=m(!1);return(c,n)=>(h(),f("div",A,[e(b,{modelValue:a(o),"onUpdate:modelValue":n[0]||(n[0]=p=>u(o)?o.value=p:null),label:"On"},null,8,["modelValue"]),e(b,{modelValue:a(l),"onUpdate:modelValue":n[1]||(n[1]=p=>u(l)?l.value=p:null),label:"Off"},null,8,["modelValue"]),e(b,{indeterminate:a(t),"onUpdate:indeterminate":n[2]||(n[2]=p=>u(t)?t.value=p:null),modelValue:a(t),"onUpdate:modelValue":n[3]||(n[3]=p=>u(t)?t.value=p:null),label:"Indeterminate"},null,8,["indeterminate","modelValue"]),e(b,{"model-value":a(r),disabled:"",label:"On disabled"},null,8,["model-value"]),e(b,{disabled:"",label:"Off disabled"})]))}},j={class:"demo-space-x"},E={__name:"DemoCheckboxCheckboxValue",setup(k){const o=m(1),t=m("Show");return(r,l)=>(h(),f("div",j,[e(b,{modelValue:a(o),"onUpdate:modelValue":l[0]||(l[0]=c=>u(o)?o.value=c:null),"true-value":1,"false-value":0,label:`${a(o).toString()}`},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=c=>u(t)?t.value=c:null),"true-value":"Show","false-value":"Hide",color:"success",label:`${a(t).toString()}`},null,8,["modelValue","label"])]))}},R={class:"demo-space-x"},B={__name:"DemoCheckboxIcon",setup(k){const o=m(!0),t=m(!0),r=m(!0),l=c=>{const n=c.toString();return n.charAt(0).toUpperCase()+n.slice(1)};return(c,n)=>(h(),f("div",R,[e(b,{modelValue:a(o),"onUpdate:modelValue":n[0]||(n[0]=p=>u(o)?o.value=p:null),label:l(a(o)),"true-icon":"tabler-check","false-icon":"tabler-x"},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":n[1]||(n[1]=p=>u(t)?t.value=p:null),label:l(a(t)),"true-icon":"tabler-alarm","false-icon":"tabler-alarm",color:"success"},null,8,["modelValue","label"]),e(b,{modelValue:a(r),"onUpdate:modelValue":n[2]||(n[2]=p=>u(r)?r.value=p:null),label:l(a(r)),"true-icon":"tabler-check","false-icon":"tabler-circle-x",color:"error"},null,8,["modelValue","label"])]))}},M={class:"demo-space-x"},H={class:"mt-1"},P={__name:"DemoCheckboxModelAsArray",setup(k){const o=m(["John"]);return(t,r)=>(h(),f(C,null,[s("div",M,[e(b,{modelValue:a(o),"onUpdate:modelValue":r[0]||(r[0]=l=>u(o)?o.value=l:null),label:"John",value:"John"},null,8,["modelValue"]),e(b,{modelValue:a(o),"onUpdate:modelValue":r[1]||(r[1]=l=>u(o)?o.value=l:null),label:"Jacob",color:"success",value:"Jacob"},null,8,["modelValue"]),e(b,{modelValue:a(o),"onUpdate:modelValue":r[2]||(r[2]=l=>u(o)?o.value=l:null),label:"Johnson",color:"info",value:"Johnson"},null,8,["modelValue"])]),s("p",H,I(a(o)),1)],64))}},N={class:"demo-space-x"},W={__name:"DemoCheckboxColors",setup(k){const o=m(["Primary","Secondary","Success","Info","Warning","Error"]),t=m([]);return(r,l)=>(h(),f("div",N,[(h(!0),f(C,null,U(a(o),c=>(h(),V(b,{key:c,modelValue:a(t),"onUpdate:modelValue":l[0]||(l[0]=n=>u(t)?t.value=n:null),label:c,color:c.toLowerCase(),value:c},null,8,["modelValue","label","color","value"]))),128))]))}},q={class:"demo-space-x"},Y={__name:"DemoCheckboxDensity",setup(k){const o=m(!0),t=m(!1),r=l=>{const c=l.toString();return c.charAt(0).toUpperCase()+c.slice(1)};return(l,c)=>(h(),f("div",q,[e(b,{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=n=>u(o)?o.value=n:null),density:"compact",label:r(a(o))},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":c[1]||(c[1]=n=>u(t)?t.value=n:null),density:"compact",label:r(a(t))},null,8,["modelValue","label"])]))}},G={class:"demo-space-x"},K={__name:"DemoCheckboxBasic",setup(k){const o=m(!0),t=m(!1),r=l=>{const c=l.toString();return c.charAt(0).toUpperCase()+c.slice(1)};return(l,c)=>(h(),f("div",G,[e(b,{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=n=>u(o)?o.value=n:null),label:r(a(o))},null,8,["modelValue","label"]),e(b,{modelValue:a(t),"onUpdate:modelValue":c[1]||(c[1]=n=>u(t)?t.value=n:null),label:r(a(t))},null,8,["modelValue","label"])]))}},Q={ts:`<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`},X={ts:`<script lang="ts" setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`,js:`<script setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`},Z={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},ee={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},le={ts:`<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`},oe={ts:`<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`},te={ts:`<script lang="ts" setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`,js:`<script setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`},ce={ts:`<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`},ae={ts:`<script lang="ts" setup>
const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`,js:`<script setup>
const colorCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`},se=s("p",null,[s("code",null,"v-checkbox"),d(" in its simplest form provides a toggle between 2 values.")],-1),ne=s("p",null,[d("Use "),s("code",null,"density"),d(" prop to reduces the input height. Available options are: "),s("code",null,"default"),d(", "),s("code",null,"comfortable"),d(", and "),s("code",null,"compact"),d(".")],-1),re=s("p",null,[d("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),s("code",null,"color"),d(" prop.")],-1),de=s("p",null,[d("Multiple "),s("code",null,"v-checkbox"),d("'s can share the same "),s("code",null,"v-model"),d(" by using an array.")],-1),ie=s("p",null,[d("Use "),s("code",null,"off-icon"),d(" and "),s("code",null,"on-icon"),d(" prop to change the icon on the checkbox.")],-1),be=s("p",null,[d("Use "),s("code",null,"false-value"),d(" and "),s("code",null,"true-value"),d(" prop to sets value for truthy and falsy state")],-1),ue=s("p",null,[s("code",null,"v-checkbox"),d(" can have different states such as "),s("code",null,"default"),d(", "),s("code",null,"disabled"),d(", and "),s("code",null,"indeterminate"),d(".")],-1),me=s("p",null,[d("Checkbox labels can be defined in "),s("code",null,"label"),d(" slot - that will allow to use HTML content.")],-1),pe=s("p",null,[d("You can place "),s("code",null,"v-checkbox"),d(" in line with other components such as "),s("code",null,"v-text-field"),d(".")],-1),Be={__name:"checkbox",setup(k){return(o,t)=>{const r=K,l=$,c=Y,n=W,p=P,_=B,T=E,w=F,L=J,y=D;return h(),V(v,{class:"match-height"},{default:i(()=>[e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Basic",code:Z},{default:i(()=>[se,e(r)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Density",code:ee},{default:i(()=>[ne,e(c)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Colors",code:ae},{default:i(()=>[re,e(n)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Model as array",code:X},{default:i(()=>[de,e(p)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Icon",code:oe},{default:i(()=>[ie,e(_)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Checkbox Value",code:Q},{default:i(()=>[be,e(T)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"States",code:ce},{default:i(()=>[ue,e(w)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Label Slot",code:te},{default:i(()=>[me,e(L)]),_:1},8,["code"])]),_:1}),e(x,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Inline text-field",code:le},{default:i(()=>[pe,e(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Be as default};
