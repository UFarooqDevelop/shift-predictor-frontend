import{a as r,V as T}from"./VTabs.b33c16fd.js";import{k as I,o as u,c as m,p as e,w as t,y as x,z as s,q as p,ap as V,m as i,F as b,a as h,x as k,Q as O,b as W,aK as D}from"./index.e5c1e8e1.js";import{c as S,V as j}from"./VCard.8e399742.js";import{V as y,a as w}from"./VWindowItem.e06d9102.js";import{V as g}from"./VDivider.b5a2ab1e.js";import{V as C}from"./VBtn.c5180d72.js";import{_ as U}from"./AppCardCode.fcca560e.js";import{a as _,V as M}from"./VRow.1f54dc9e.js";import"./router.0c602970.js";import"./easing.36b781ab.js";import"./VSlideGroup.008dd6d3.js";import"./index.1bcc5918.js";import"./VAvatar.d497555d.js";import"./VImg.10863b21.js";import"./position.2438c506.js";import"./lazy.5465d1f6.js";import"./ssrBoot.e5a5a707.js";import"./vue.runtime.esm-bundler.508f4d76.js";const E={class:"d-flex flex-row gap-4"},R=i("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),G=i("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),H=i("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),K=i("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),L=i("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),Q=i("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),J={__name:"DemoTabsVerticalPill",setup(v){const a=I(0);return(l,d)=>(u(),m("div",E,[e(T,{modelValue:p(a),"onUpdate:modelValue":d[0]||(d[0]=o=>V(a)?a.value=o:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(r,null,{default:t(()=>[e(x,{start:"",icon:"tabler-user"}),s(" Option 1 ")]),_:1}),e(r,null,{default:t(()=>[e(x,{start:"",icon:"tabler-lock"}),s(" Option 2 ")]),_:1}),e(r,null,{default:t(()=>[e(x,{start:"",icon:"tabler-access-point"}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"]),e(j,null,{default:t(()=>[e(S,null,{default:t(()=>[e(y,{modelValue:p(a),"onUpdate:modelValue":d[1]||(d[1]=o=>V(a)?a.value=o:null)},{default:t(()=>[e(w,null,{default:t(()=>[R,G]),_:1}),e(w,null,{default:t(()=>[H,K]),_:1}),e(w,null,{default:t(()=>[L,Q]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}},X={__name:"DemoTabsBasicPill",setup(v){const a=I(0),l="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(d,o)=>(u(),m(b,null,[e(T,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=n=>V(a)?a.value=n:null),class:"v-tabs-pill"},{default:t(()=>[e(r,null,{default:t(()=>[s("Tab One")]),_:1}),e(r,null,{default:t(()=>[s("Tab Two")]),_:1}),e(r,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(j,{class:"mt-5"},{default:t(()=>[e(S,null,{default:t(()=>[e(y,{modelValue:p(a),"onUpdate:modelValue":o[1]||(o[1]=n=>V(a)?a.value=n:null)},{default:t(()=>[(u(),m(b,null,h(3,n=>e(w,{key:n},{default:t(()=>[s(k(l))]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}},Y={class:"text-center mt-9"},Z={__name:"DemoTabsDynamic",setup(v){const a=I(3),l=I(0);return O(a,d=>{l.value=d-1}),(d,o)=>(u(),m(b,null,[e(T,{modelValue:p(l),"onUpdate:modelValue":o[0]||(o[0]=n=>V(l)?l.value=n:null)},{default:t(()=>[(u(!0),m(b,null,h(p(a),n=>(u(),W(r,{key:n,value:n},{default:t(()=>[s(" Tab "+k(n),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(g),i("div",Y,[e(C,{disabled:!p(a),variant:"text",onClick:o[1]||(o[1]=n=>a.value--)},{default:t(()=>[s(" Remove Tab ")]),_:1},8,["disabled"]),e(C,{variant:"text",onClick:o[2]||(o[2]=n=>a.value++)},{default:t(()=>[s(" Add Tab ")]),_:1})])],64))}},ee={class:"text-center"},te={__name:"DemoTabsProgrammaticNavigation",setup(v){const a=I(0),l=["Appetizers","Entrees","Deserts","Cocktails"],d="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",o=l.length,n=()=>{a.value!==1&&(a.value-=1)},c=()=>{a.value!==o&&(a.value+=1)};return(P,q)=>(u(),m(b,null,[e(T,{modelValue:p(a),"onUpdate:modelValue":q[0]||(q[0]=f=>V(a)?a.value=f:null),grow:""},{default:t(()=>[(u(!0),m(b,null,h(l.length,f=>(u(),W(r,{key:f,value:f},{default:t(()=>[s(k(l[f-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(g),e(y,{modelValue:p(a),"onUpdate:modelValue":q[1]||(q[1]=f=>V(a)?a.value=f:null),class:"mt-5"},{default:t(()=>[(u(!0),m(b,null,h(l.length,f=>(u(),W(w,{key:f,value:f},{default:t(()=>[s(k(d))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),i("div",ee,[e(C,{variant:"text",disabled:p(a)===1,onClick:n},{default:t(()=>[s(" Previous ")]),_:1},8,["disabled"]),e(C,{variant:"text",disabled:p(a)===p(o),onClick:c},{default:t(()=>[s(" Next ")]),_:1},8,["disabled"])])],64))}},ae={__name:"DemoTabsGrow",setup(v){const a=I("Appetizers"),l=["Appetizers","Entrees","Deserts","Cocktails"],d="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.";return(o,n)=>(u(),m(b,null,[e(T,{modelValue:p(a),"onUpdate:modelValue":n[0]||(n[0]=c=>V(a)?a.value=c:null),grow:""},{default:t(()=>[(u(),m(b,null,h(l,c=>e(r,{key:c,value:c},{default:t(()=>[s(k(c),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(g),e(y,{modelValue:p(a),"onUpdate:modelValue":n[1]||(n[1]=c=>V(a)?a.value=c:null),class:"mt-6"},{default:t(()=>[(u(),m(b,null,h(l,c=>e(w,{key:c,value:c},{default:t(()=>[s(k(d))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},se={__name:"DemoTabsFixed",setup(v){const a=I("Appetizers"),l=["Fixed Tab 1","Fixed Tab 2","Fixed Tab 3","Fixed Tab 4"],d="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.";return(o,n)=>(u(),m(b,null,[e(T,{modelValue:p(a),"onUpdate:modelValue":n[0]||(n[0]=c=>V(a)?a.value=c:null),"fixed-tabs":""},{default:t(()=>[(u(),m(b,null,h(l,c=>e(r,{key:c,value:c},{default:t(()=>[s(k(c),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(g),e(y,{modelValue:p(a),"onUpdate:modelValue":n[1]||(n[1]=c=>V(a)?a.value=c:null),class:"mt-6"},{default:t(()=>[(u(),m(b,null,h(l,c=>e(w,{key:c,value:c},{default:t(()=>[s(k(d))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},oe={};function ie(v,a){return u(),m(b,null,[e(T,{"next-icon":"tabler-arrow-right","prev-icon":"tabler-arrow-left","show-arrows":""},{default:t(()=>[(u(),m(b,null,h(10,l=>e(r,{key:l},{default:t(()=>[s(" Item "+k(l),1)]),_:2},1024)),64))]),_:1}),e(g)],64)}const ne=D(oe,[["render",ie]]),le={};function re(v,a){return u(),m(b,null,[e(T,{"show-arrows":""},{default:t(()=>[(u(),m(b,null,h(10,l=>e(r,{key:l,value:l},{default:t(()=>[s(" Item "+k(l),1)]),_:2},1032,["value"])),64))]),_:1}),e(g)],64)}const ue=D(le,[["render",re]]),ce={},me={class:"d-flex flex-column gap-4"};function de(v,a){return u(),m("div",me,[i("div",null,[e(T,null,{default:t(()=>[e(r,null,{default:t(()=>[s("Home")]),_:1}),e(r,null,{default:t(()=>[s("Service")]),_:1}),e(r,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(g)]),i("div",null,[e(T,{centered:""},{default:t(()=>[e(r,null,{default:t(()=>[s("Home")]),_:1}),e(r,null,{default:t(()=>[s("Service")]),_:1}),e(r,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(g)]),i("div",null,[e(T,{end:""},{default:t(()=>[e(r,null,{default:t(()=>[s("Home")]),_:1}),e(r,null,{default:t(()=>[s("Service")]),_:1}),e(r,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(g)])])}const pe=D(ce,[["render",de]]),be={class:"d-flex flex-row"},Ve=i("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),Te=i("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),ve=i("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),fe=i("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),_e=i("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),we=i("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),ge={__name:"DemoTabsVertical",setup(v){const a=I(0);return(l,d)=>(u(),m("div",be,[e(T,{modelValue:p(a),"onUpdate:modelValue":d[0]||(d[0]=o=>V(a)?a.value=o:null),direction:"vertical"},{default:t(()=>[e(r,null,{default:t(()=>[e(x,{start:"",icon:"tabler-user"}),s(" Option 1 ")]),_:1}),e(r,null,{default:t(()=>[e(x,{start:"",icon:"tabler-lock"}),s(" Option 2 ")]),_:1}),e(r,null,{default:t(()=>[e(x,{start:"",icon:"tabler-access-point"}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"]),e(g,{vertical:""}),e(y,{modelValue:p(a),"onUpdate:modelValue":d[1]||(d[1]=o=>V(a)?a.value=o:null),class:"ms-3"},{default:t(()=>[e(w,null,{default:t(()=>[Ve,Te]),_:1}),e(w,null,{default:t(()=>[ve,fe]),_:1}),e(w,null,{default:t(()=>[_e,we]),_:1})]),_:1},8,["modelValue"])]))}},he=i("span",null,"Recent",-1),ke=i("span",null,"Favorites",-1),Ie=i("span",null,"Nearby",-1),xe={__name:"DemoTabsStacked",setup(v){const a=I("tab-1"),l="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.";return(d,o)=>(u(),m(b,null,[e(T,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=n=>V(a)?a.value=n:null),grow:"",stacked:""},{default:t(()=>[e(r,{value:"tab-1"},{default:t(()=>[e(x,{icon:"tabler-phone",class:"mb-2"}),he]),_:1}),e(r,{value:"tab-2"},{default:t(()=>[e(x,{icon:"tabler-heart",class:"mb-2"}),ke]),_:1}),e(r,{value:"tab-3"},{default:t(()=>[e(x,{icon:"tabler-user",class:"mb-2"}),Ie]),_:1})]),_:1},8,["modelValue"]),e(g),e(y,{modelValue:p(a),"onUpdate:modelValue":o[1]||(o[1]=n=>V(a)?a.value=n:null),class:"mt-5"},{default:t(()=>[(u(),m(b,null,h(3,n=>e(w,{key:n,value:`tab-${n}`},{default:t(()=>[s(k(l))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},ye={__name:"DemoTabsBasic",setup(v){const a=I(0),l="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";return(d,o)=>(u(),m(b,null,[e(T,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=n=>V(a)?a.value=n:null)},{default:t(()=>[e(r,null,{default:t(()=>[s("Tab One")]),_:1}),e(r,null,{default:t(()=>[s("Tab Two")]),_:1}),e(r,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(g),e(y,{modelValue:p(a),"onUpdate:modelValue":o[1]||(o[1]=n=>V(a)?a.value=n:null),class:"mt-5"},{default:t(()=>[(u(),m(b,null,h(3,n=>e(w,{key:n},{default:t(()=>[s(k(l))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},qe={ts:`<script lang="ts" setup>
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
`},We={ts:`<script lang="ts" setup>
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
`},Ce={ts:`<template>
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
`},De={ts:`<template>
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
`},Pe={ts:`<script lang="ts" setup>
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
`},Se={ts:`<script lang="ts" setup>
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
`},je={ts:`<script setup lang="ts">
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
`},Fe={ts:`<script setup lang="ts">
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
`},$e={ts:`<script lang="ts" setup>
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
`},Ae={ts:`<template>
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
`},Be={ts:`<script lang="ts" setup>
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
`},Ne={ts:`<script lang="ts" setup>
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
`},ze=i("p",null,[s("The "),i("code",null,"v-tabs"),s(" component is used for hiding content behind a selectable item.")],-1),Oe=i("p",null,[s("Using "),i("code",null,"stacked"),s(" prop you can have buttons that use both icons and text.")],-1),Ue=i("p",null,[s("The "),i("code",null,"vertical"),s(" prop allows for "),i("code",null,"v-tab"),s(" components to stack vertically.")],-1),Me=i("p",null,[s("Use "),i("code",null,"centered"),s(", "),i("code",null,"right"),s(" prop to change the tabs alignment.")],-1),Ee=i("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Re=i("p",null,[i("code",null,"prev-icon"),s(" and "),i("code",null,"next-icon"),s(" props can be used for applying custom pagination icons.")],-1),Ge=i("p",null,[s("The "),i("code",null,"fixed-tabs"),s(" prop forces "),i("code",null,"v-tab"),s(" to take up all available space up to the maximum width (300px).")],-1),He=i("p",null,[s("The "),i("code",null,"grow"),s(" prop will make the tab items take up all available space with no limit.")],-1),Ke=i("p",null,[s("Tabs can be dynamically added and removed. This allows you to update to any number and the "),i("code",null,"v-tabs"),s(" component will react.")],-1),Le=i("p",null,[s("Use our custom class "),i("code",null,".v-tabs-pill"),s(" along with "),i("code",null,"v-tabs"),s(" component to style pill tabs.")],-1),Qe=i("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),bt={__name:"tabs",setup(v){return(a,l)=>{const d=ye,o=U,n=xe,c=ge,P=pe,q=ue,f=ne,F=se,$=ae,A=te,B=Z,N=X,z=J;return u(),W(M,{class:"match-height"},{default:t(()=>[e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:Pe},{default:t(()=>[ze,e(d)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Stacked",code:qe},{default:t(()=>[Oe,e(n)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical",code:je},{default:t(()=>[Ue,e(c)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Alignment",code:De},{default:t(()=>[Me,e(P)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Pagination",code:Ce},{default:t(()=>[Ee,e(q)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom Icons",code:Ae},{default:t(()=>[Re,e(f)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Fixed",code:Ne},{default:t(()=>[Ge,e(F)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Grow",code:$e},{default:t(()=>[He,e($)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Programmatic Navigation",code:We},{default:t(()=>[e(A)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Dynamic",code:Be},{default:t(()=>[Ke,e(B)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{border:"",title:"Basic Pill",variant:"text",code:Se},{default:t(()=>[Le,e(N)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(o,{border:"",title:"Vertical Pill",variant:"text",code:Fe},{default:t(()=>[Qe,e(z)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{bt as default};
