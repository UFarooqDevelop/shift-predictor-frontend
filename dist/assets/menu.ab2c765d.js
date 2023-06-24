import{V as T}from"./VTooltip.47d16a72.js";import{V as s}from"./VBtn.1c5c346d.js";import{V as p,a as L}from"./VList.cdc47968.js";import{V as r}from"./VMenu.d6b4c9ed.js";import{o as u,b as O,w as e,p as t,be as l,bf as c,ag as B,z as a,m as i,k as x,q as h,cJ as y,ap as k,c as f,F as C,a as D,x as P}from"./index.e738b4e7.js";import{V as S,c as A,e as $}from"./VCard.10e5aa9e.js";import{V as j}from"./VDivider.97b27573.js";import{_ as I}from"./AppCardCode.8e83160f.js";import{a as _,V as F}from"./VRow.c652739d.js";import"./scopeId.cb213b8f.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.360cde10.js";import"./router.c4bf81d7.js";import"./lazy.3adf4924.js";import"./easing.36b781ab.js";import"./VImg.ce237d22.js";import"./position.c876b013.js";import"./index.c6a921d2.js";import"./VAvatar.5c76f4e9.js";import"./dialog-transition.36cd2ff7.js";import"./vue.runtime.esm-bundler.e2cb1899.js";const E=i("span",null,"I am a Tooltip",-1),J={__name:"DemoMenuActivatorAndTooltip",setup(V){const n=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),O(r,{location:"top"},{activator:e(({props:o})=>[t(T,{location:"top"},{activator:e(({props:v})=>[t(s,l(c(B(o,v))),{default:e(()=>[a(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:e(()=>[E]),_:2},1024)]),default:e(()=>[t(p,{items:n})]),_:1}))}},R={__name:"DemoMenuPopover",setup(V){const n=x(!1);return(d,m)=>(u(),O(r,{modelValue:h(n),"onUpdate:modelValue":m[0]||(m[0]=o=>k(n)?n.value=o:null),location:"top"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[a(" Menu as Popover ")]),_:2},1040)]),default:e(()=>[t(S,{"max-width":"300"},{default:e(()=>[t(p,null,{default:e(()=>[t(L,{"prepend-avatar":h(y),title:"John Leider",subtitle:"Founder of Vuetify"},null,8,["prepend-avatar"])]),_:1}),t(j),t(A,null,{default:e(()=>[a(" Gingerbread bear claw cake. Souffl\xE9 candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon drag\xE9e toffee. ")]),_:1}),t($,null,{default:e(()=>[t(s,{icon:"tabler-heart"}),t(s,{icon:"tabler-bookmark"}),t(s,{icon:"tabler-thumb-down"})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},G={__name:"DemoMenuOpenOnHover",setup(V){const n=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),O(r,{"open-on-hover":""},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[a(" On hover ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}))}},H={class:"demo-space-x"},N={__name:"DemoMenuLocation",setup(V){const n=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),f("div",H,[t(r,{location:"top"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[a(" Top ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{location:"bottom"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[a(" Bottom ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{location:"start"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[a(" Start ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{location:"end"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[a(" End ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1})]))}},X={class:"demo-space-x"},Y={__name:"DemoMenuCustomTransitions",setup(V){const n=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),f("div",X,[t(r,{transition:"scale-transition"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[a(" Scale Transition ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{transition:"slide-x-transition"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[a(" Slide X Transition ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{transition:"slide-y-transition"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[a(" Slide Y Transition ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1})]))}},z={class:"demo-space-x"},U={__name:"DemoMenuBasic",setup(V){const n=["primary","secondary","success","info","warning","error"],d=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(m,o)=>(u(),f("div",z,[(u(),f(C,null,D(n,v=>t(r,{key:v},{activator:e(({props:b})=>[t(s,B({color:v},b),{default:e(()=>[a(P(v),1)]),_:2},1040,["color"])]),default:e(()=>[t(p,{items:d})]),_:2},1024)),64))]))}},q={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},W={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},K={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Q={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},Z={ts:`<script lang="ts" setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard
      max-width="300"
    >
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Souffl\xE9 candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon drag\xE9e toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="tabler-heart" />
        <VBtn icon="tabler-bookmark" />
        <VBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard
      max-width="300"
    >
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Souffl\xE9 candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon drag\xE9e toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="tabler-heart" />
        <VBtn icon="tabler-bookmark" />
        <VBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},tt={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},et=i("p",null," Remember to put the element that activates the menu in the activator slot. ",-1),ot=i("p",null,[a("Vuetify comes with 3 standard transitions, "),i("code",null,"scale"),a(", "),i("code",null,"slide-x"),a(" and "),i("code",null,"slide-y"),a(". Use "),i("code",null,"transition"),a(" prop to add transition to a menu.")],-1),at=i("p",null,[a("Menu can be offset relative to the activator by using the "),i("code",null,"location"),a(" prop.")],-1),nt=i("p",null,[a("Menus can be accessed using hover instead of clicking with the "),i("code",null,"open-on-hover"),a(" prop.")],-1),it=i("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1),st=i("p",null,[a("With the new "),i("code",null,"v-slot"),a(" syntax, nested activators such as those seen with a "),i("code",null,"v-menu"),a(" and "),i("code",null,"v-tooltip"),a(" attached to the same activator button, need a particular setup in order to function correctly")],-1),yt={__name:"menu",setup(V){return(n,d)=>{const m=U,o=I,v=Y,b=N,M=G,w=R,g=J;return u(),O(F,{class:"match-height"},{default:e(()=>[t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Basic",code:K},{default:e(()=>[et,t(m)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Custom transitions",code:q},{default:e(()=>[ot,t(v)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Location",code:tt},{default:e(()=>[at,t(b)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Open on hover",code:W},{default:e(()=>[nt,t(M)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Popover",code:Z},{default:e(()=>[it,t(w)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Activator and tooltip",code:Q},{default:e(()=>[st,t(g)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{yt as default};
