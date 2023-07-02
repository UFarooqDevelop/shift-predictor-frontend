import{a as r,V}from"./VTabs.2aa0ef9a.js";import{k,o as c,c as m,p as e,w as t,y as I,z as s,q as d,ap as b,m as i,F as p,a as g,x as h,Q as O,b as q,aK as C}from"./index.e64df15f.js";import{c as P,V as S}from"./VCard.83701cac.js";import{V as x,a as _}from"./VWindowItem.91401ec2.js";import{V as w}from"./VDivider.f14d7027.js";import{V as W}from"./VBtn.e5e897d5.js";import{_ as U}from"./AppCardCode.8494b910.js";import{a as f,V as M}from"./VRow.44a0774f.js";import"./router.7fdf4318.js";import"./easing.36b781ab.js";import"./VSlideGroup.eaab063f.js";import"./index.e4d4f866.js";import"./VAvatar.c8e7782f.js";import"./VImg.1f0b6293.js";import"./position.771ba387.js";import"./lazy.c871e1a1.js";import"./ssrBoot.5cf129ba.js";import"./vue.runtime.esm-bundler.d7e205f8.js";const E={class:"d-flex flex-row gap-4"},R=i("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),G=i("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),H=i("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),K=i("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),L=i("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),Q=i("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),J={__name:"DemoTabsVerticalPill",setup(T){const a=k(0);return(u,n)=>(c(),m("div",E,[e(V,{modelValue:d(a),"onUpdate:modelValue":n[0]||(n[0]=o=>b(a)?a.value=o:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(r,null,{default:t(()=>[e(I,{start:"",icon:"tabler-user"}),s(" Option 1 ")]),_:1}),e(r,null,{default:t(()=>[e(I,{start:"",icon:"tabler-lock"}),s(" Option 2 ")]),_:1}),e(r,null,{default:t(()=>[e(I,{start:"",icon:"tabler-access-point"}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"]),e(S,null,{default:t(()=>[e(P,null,{default:t(()=>[e(x,{modelValue:d(a),"onUpdate:modelValue":n[1]||(n[1]=o=>b(a)?a.value=o:null)},{default:t(()=>[e(_,null,{default:t(()=>[R,G]),_:1}),e(_,null,{default:t(()=>[H,K]),_:1}),e(_,null,{default:t(()=>[L,Q]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}},X="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",Y={__name:"DemoTabsBasicPill",setup(T){const a=k(0);return(u,n)=>(c(),m(p,null,[e(V,{modelValue:d(a),"onUpdate:modelValue":n[0]||(n[0]=o=>b(a)?a.value=o:null),class:"v-tabs-pill"},{default:t(()=>[e(r,null,{default:t(()=>[s("Tab One")]),_:1}),e(r,null,{default:t(()=>[s("Tab Two")]),_:1}),e(r,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(S,{class:"mt-5"},{default:t(()=>[e(P,null,{default:t(()=>[e(x,{modelValue:d(a),"onUpdate:modelValue":n[1]||(n[1]=o=>b(a)?a.value=o:null)},{default:t(()=>[(c(),m(p,null,g(3,o=>e(_,{key:o},{default:t(()=>[s(h(X))]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}},Z={class:"text-center mt-9"},ee={__name:"DemoTabsDynamic",setup(T){const a=k(3),u=k(0);return O(a,n=>{u.value=n-1}),(n,o)=>(c(),m(p,null,[e(V,{modelValue:d(u),"onUpdate:modelValue":o[0]||(o[0]=l=>b(u)?u.value=l:null)},{default:t(()=>[(c(!0),m(p,null,g(d(a),l=>(c(),q(r,{key:l,value:l},{default:t(()=>[s(" Tab "+h(l),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(w),i("div",Z,[e(W,{disabled:!d(a),variant:"text",onClick:o[1]||(o[1]=l=>a.value--)},{default:t(()=>[s(" Remove Tab ")]),_:1},8,["disabled"]),e(W,{variant:"text",onClick:o[2]||(o[2]=l=>a.value++)},{default:t(()=>[s(" Add Tab ")]),_:1})])],64))}},te={class:"text-center"},ae="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",se={__name:"DemoTabsProgrammaticNavigation",setup(T){const a=k(0),u=["Appetizers","Entrees","Deserts","Cocktails"],n=u.length,o=()=>{a.value!==1&&(a.value-=1)},l=()=>{a.value!==n&&(a.value+=1)};return(D,y)=>(c(),m(p,null,[e(V,{modelValue:d(a),"onUpdate:modelValue":y[0]||(y[0]=v=>b(a)?a.value=v:null),grow:""},{default:t(()=>[(c(!0),m(p,null,g(u.length,v=>(c(),q(r,{key:v,value:v},{default:t(()=>[s(h(u[v-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(w),e(x,{modelValue:d(a),"onUpdate:modelValue":y[1]||(y[1]=v=>b(a)?a.value=v:null),class:"mt-5"},{default:t(()=>[(c(!0),m(p,null,g(u.length,v=>(c(),q(_,{key:v,value:v},{default:t(()=>[s(h(ae))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),i("div",te,[e(W,{variant:"text",disabled:d(a)===1,onClick:o},{default:t(()=>[s(" Previous ")]),_:1},8,["disabled"]),e(W,{variant:"text",disabled:d(a)===d(n),onClick:l},{default:t(()=>[s(" Next ")]),_:1},8,["disabled"])])],64))}},oe="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.",ie={__name:"DemoTabsGrow",setup(T){const a=k("Appetizers"),u=["Appetizers","Entrees","Deserts","Cocktails"];return(n,o)=>(c(),m(p,null,[e(V,{modelValue:d(a),"onUpdate:modelValue":o[0]||(o[0]=l=>b(a)?a.value=l:null),grow:""},{default:t(()=>[(c(),m(p,null,g(u,l=>e(r,{key:l,value:l},{default:t(()=>[s(h(l),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(w),e(x,{modelValue:d(a),"onUpdate:modelValue":o[1]||(o[1]=l=>b(a)?a.value=l:null),class:"mt-6"},{default:t(()=>[(c(),m(p,null,g(u,l=>e(_,{key:l,value:l},{default:t(()=>[s(h(oe))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},ne="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.",le={__name:"DemoTabsFixed",setup(T){const a=k("Appetizers"),u=["Fixed Tab 1","Fixed Tab 2","Fixed Tab 3","Fixed Tab 4"];return(n,o)=>(c(),m(p,null,[e(V,{modelValue:d(a),"onUpdate:modelValue":o[0]||(o[0]=l=>b(a)?a.value=l:null),"fixed-tabs":""},{default:t(()=>[(c(),m(p,null,g(u,l=>e(r,{key:l,value:l},{default:t(()=>[s(h(l),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(w),e(x,{modelValue:d(a),"onUpdate:modelValue":o[1]||(o[1]=l=>b(a)?a.value=l:null),class:"mt-6"},{default:t(()=>[(c(),m(p,null,g(u,l=>e(_,{key:l,value:l},{default:t(()=>[s(h(ne))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},re={};function ue(T,a){return c(),m(p,null,[e(V,{"next-icon":"tabler-arrow-right","prev-icon":"tabler-arrow-left","show-arrows":""},{default:t(()=>[(c(),m(p,null,g(10,u=>e(r,{key:u},{default:t(()=>[s(" Item "+h(u),1)]),_:2},1024)),64))]),_:1}),e(w)],64)}const ce=C(re,[["render",ue]]),me={};function de(T,a){return c(),m(p,null,[e(V,{"show-arrows":""},{default:t(()=>[(c(),m(p,null,g(10,u=>e(r,{key:u,value:u},{default:t(()=>[s(" Item "+h(u),1)]),_:2},1032,["value"])),64))]),_:1}),e(w)],64)}const pe=C(me,[["render",de]]),be={},Ve={class:"d-flex flex-column gap-4"};function Te(T,a){return c(),m("div",Ve,[i("div",null,[e(V,null,{default:t(()=>[e(r,null,{default:t(()=>[s("Home")]),_:1}),e(r,null,{default:t(()=>[s("Service")]),_:1}),e(r,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(w)]),i("div",null,[e(V,{centered:""},{default:t(()=>[e(r,null,{default:t(()=>[s("Home")]),_:1}),e(r,null,{default:t(()=>[s("Service")]),_:1}),e(r,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(w)]),i("div",null,[e(V,{end:""},{default:t(()=>[e(r,null,{default:t(()=>[s("Home")]),_:1}),e(r,null,{default:t(()=>[s("Service")]),_:1}),e(r,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(w)])])}const ve=C(be,[["render",Te]]),fe={class:"d-flex flex-row"},_e=i("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),we=i("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),ge=i("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),he=i("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),ke=i("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),Ie=i("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),xe={__name:"DemoTabsVertical",setup(T){const a=k(0);return(u,n)=>(c(),m("div",fe,[e(V,{modelValue:d(a),"onUpdate:modelValue":n[0]||(n[0]=o=>b(a)?a.value=o:null),direction:"vertical"},{default:t(()=>[e(r,null,{default:t(()=>[e(I,{start:"",icon:"tabler-user"}),s(" Option 1 ")]),_:1}),e(r,null,{default:t(()=>[e(I,{start:"",icon:"tabler-lock"}),s(" Option 2 ")]),_:1}),e(r,null,{default:t(()=>[e(I,{start:"",icon:"tabler-access-point"}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"]),e(w,{vertical:""}),e(x,{modelValue:d(a),"onUpdate:modelValue":n[1]||(n[1]=o=>b(a)?a.value=o:null),class:"ms-3"},{default:t(()=>[e(_,null,{default:t(()=>[_e,we]),_:1}),e(_,null,{default:t(()=>[ge,he]),_:1}),e(_,null,{default:t(()=>[ke,Ie]),_:1})]),_:1},8,["modelValue"])]))}},ye=i("span",null,"Recent",-1),qe=i("span",null,"Favorites",-1),We=i("span",null,"Nearby",-1),Ce="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",De={__name:"DemoTabsStacked",setup(T){const a=k("tab-1");return(u,n)=>(c(),m(p,null,[e(V,{modelValue:d(a),"onUpdate:modelValue":n[0]||(n[0]=o=>b(a)?a.value=o:null),grow:"",stacked:""},{default:t(()=>[e(r,{value:"tab-1"},{default:t(()=>[e(I,{icon:"tabler-phone",class:"mb-2"}),ye]),_:1}),e(r,{value:"tab-2"},{default:t(()=>[e(I,{icon:"tabler-heart",class:"mb-2"}),qe]),_:1}),e(r,{value:"tab-3"},{default:t(()=>[e(I,{icon:"tabler-user",class:"mb-2"}),We]),_:1})]),_:1},8,["modelValue"]),e(w),e(x,{modelValue:d(a),"onUpdate:modelValue":n[1]||(n[1]=o=>b(a)?a.value=o:null),class:"mt-5"},{default:t(()=>[(c(),m(p,null,g(3,o=>e(_,{key:o,value:`tab-${o}`},{default:t(()=>[s(h(Ce))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},Pe="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",Se={__name:"DemoTabsBasic",setup(T){const a=k(0);return(u,n)=>(c(),m(p,null,[e(V,{modelValue:d(a),"onUpdate:modelValue":n[0]||(n[0]=o=>b(a)?a.value=o:null)},{default:t(()=>[e(r,null,{default:t(()=>[s("Tab One")]),_:1}),e(r,null,{default:t(()=>[s("Tab Two")]),_:1}),e(r,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(w),e(x,{modelValue:d(a),"onUpdate:modelValue":n[1]||(n[1]=o=>b(a)?a.value=o:null),class:"mt-5"},{default:t(()=>[(c(),m(p,null,g(3,o=>e(_,{key:o},{default:t(()=>[s(h(Pe))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},je={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="tabler-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="tabler-heart"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="tabler-user"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="tabler-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="tabler-heart"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="tabler-user"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Fe={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`},$e={ts:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
  <VDivider />
</template>
`,js:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
  <VDivider />
</template>
`},Ae={ts:`<template>
  <div class="d-flex flex-column gap-4">
    <!-- Default -->
    <div>
      <VTabs>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>

    <!-- Center -->
    <div>
      <VTabs centered>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>

    <!-- Right -->
    <div>
      <VTabs end>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>
  </div>
</template>
`,js:`<template>
  <div class="d-flex flex-column gap-4">
    <!-- Default -->
    <div>
      <VTabs>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>

    <!-- Center -->
    <div>
      <VTabs centered>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>

    <!-- Right -->
    <div>
      <VTabs end>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>
  </div>
</template>
`},Be={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},Ne={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ze={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex flex-row">
    <VTabs
      v-model="currentTab"
      direction="vertical"
    >
      <VTab>
        <VIcon
          start
          icon="tabler-user"
        />
        Option 1
      </VTab>

      <VTab>
        <VIcon
          start
          icon="tabler-lock"
        />
        Option 2
      </VTab>

      <VTab>
        <VIcon
          start
          icon="tabler-access-point"
        />
        Option 3
      </VTab>
    </VTabs>
    <VDivider vertical />

    <VWindow
      v-model="currentTab"
      class="ms-3"
    >
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>

        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>

        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex flex-row">
    <VTabs
      v-model="currentTab"
      direction="vertical"
    >
      <VTab>
        <VIcon
          start
          icon="tabler-user"
        />
        Option 1
      </VTab>

      <VTab>
        <VIcon
          start
          icon="tabler-lock"
        />
        Option 2
      </VTab>

      <VTab>
        <VIcon
          start
          icon="tabler-access-point"
        />
        Option 3
      </VTab>
    </VTabs>
    <VDivider vertical />

    <VWindow
      v-model="currentTab"
      class="ms-3"
    >
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>

        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>

      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>

        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`},Oe={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex flex-row gap-4">
    <VTabs
      v-model="currentTab"
      direction="vertical"
      class="v-tabs-pill"
    >
      <VTab>
        <VIcon
          start
          icon="tabler-user"
        />
        Option 1
      </VTab>

      <VTab>
        <VIcon
          start
          icon="tabler-lock"
        />
        Option 2
      </VTab>

      <VTab>
        <VIcon
          start
          icon="tabler-access-point"
        />
        Option 3
      </VTab>
    </VTabs>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex flex-row gap-4">
    <VTabs
      v-model="currentTab"
      direction="vertical"
      class="v-tabs-pill"
    >
      <VTab>
        <VIcon
          start
          icon="tabler-user"
        />
        Option 1
      </VTab>

      <VTab>
        <VIcon
          start
          icon="tabler-lock"
        />
        Option 2
      </VTab>

      <VTab>
        <VIcon
          start
          icon="tabler-access-point"
        />
        Option 3
      </VTab>
    </VTabs>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`},Ue={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Me={ts:`<template>
  <VTabs
    next-icon="tabler-arrow-right"
    prev-icon="tabler-arrow-left"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
  <VDivider />
</template>
`,js:`<template>
  <VTabs
    next-icon="tabler-arrow-right"
    prev-icon="tabler-arrow-left"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
  <VDivider />
</template>
`},Ee={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>
  <VDivider />

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>
  <VDivider />

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`},Re={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Fixed Tab 1', 'Fixed Tab 2', 'Fixed Tab 3', 'Fixed Tab 4']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    fixed-tabs
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Fixed Tab 1',
  'Fixed Tab 2',
  'Fixed Tab 3',
  'Fixed Tab 4',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    fixed-tabs
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Ge=i("p",null,[s("The "),i("code",null,"v-tabs"),s(" component is used for hiding content behind a selectable item.")],-1),He=i("p",null,[s("Using "),i("code",null,"stacked"),s(" prop you can have buttons that use both icons and text.")],-1),Ke=i("p",null,[s("The "),i("code",null,"vertical"),s(" prop allows for "),i("code",null,"v-tab"),s(" components to stack vertically.")],-1),Le=i("p",null,[s("Use "),i("code",null,"centered"),s(", "),i("code",null,"right"),s(" prop to change the tabs alignment.")],-1),Qe=i("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Je=i("p",null,[i("code",null,"prev-icon"),s(" and "),i("code",null,"next-icon"),s(" props can be used for applying custom pagination icons.")],-1),Xe=i("p",null,[s("The "),i("code",null,"fixed-tabs"),s(" prop forces "),i("code",null,"v-tab"),s(" to take up all available space up to the maximum width (300px).")],-1),Ye=i("p",null,[s("The "),i("code",null,"grow"),s(" prop will make the tab items take up all available space with no limit.")],-1),Ze=i("p",null,[s("Tabs can be dynamically added and removed. This allows you to update to any number and the "),i("code",null,"v-tabs"),s(" component will react.")],-1),et=i("p",null,[s("Use our custom class "),i("code",null,".v-tabs-pill"),s(" along with "),i("code",null,"v-tabs"),s(" component to style pill tabs.")],-1),tt=i("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),wt={__name:"tabs",setup(T){return(a,u)=>{const n=Se,o=U,l=De,D=xe,y=ve,v=pe,j=ce,F=le,$=ie,A=se,B=ee,N=Y,z=J;return c(),q(M,{class:"match-height"},{default:t(()=>[e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:Be},{default:t(()=>[Ge,e(n)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Stacked",code:je},{default:t(()=>[He,e(l)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical",code:ze},{default:t(()=>[Ke,e(D)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Alignment",code:Ae},{default:t(()=>[Le,e(y)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Pagination",code:$e},{default:t(()=>[Qe,e(v)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom Icons",code:Me},{default:t(()=>[Je,e(j)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Fixed",code:Re},{default:t(()=>[Xe,e(F)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Grow",code:Ue},{default:t(()=>[Ye,e($)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Programmatic Navigation",code:Fe},{default:t(()=>[e(A)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Dynamic",code:Ee},{default:t(()=>[Ze,e(B)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{border:"",title:"Basic Pill",variant:"text",code:Ne},{default:t(()=>[et,e(N)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(o,{border:"",title:"Vertical Pill",variant:"text",code:Oe},{default:t(()=>[tt,e(z)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{wt as default};
