import{a as R,V as H}from"./VTabs.96f3768d.js";import{V as a}from"./VBadge.8887aa0d.js";import{o as p,b as z,w as e,c as v,F as k,a as D,p as t,z as o,x as O,k as _,cQ as I,y as g,q as s,m as n,cJ as d,aK as $}from"./index.26ca9a5e.js";import{V as B}from"./VBtn.fc10e72a.js";import{V as i}from"./VAvatar.e198df2c.js";import{V as l}from"./VImg.bf28cf83.js";import{_ as S}from"./AppCardCode.aa300dde.js";import{a as u,V as W}from"./VRow.6c18a1e2.js";import"./router.9dcd5247.js";import"./easing.36b781ab.js";import"./VSlideGroup.ca627d0d.js";import"./index.88e284ac.js";import"./position.f88bfc68.js";import"./vue.runtime.esm-bundler.3a8f4bd3.js";import"./VCard.f0ece592.js";import"./VDivider.a3094d05.js";const E={__name:"DemoBadgeTabs",setup(V){const c=[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}];return(f,m)=>(p(),z(H,{grow:"","show-arrows":""},{default:e(()=>[(p(),v(k,null,D(c,r=>t(R,{key:r.content,value:r.content},{default:e(()=>[t(a,{content:r.badge,"offset-x":-12,"offset-y":-4},{default:e(()=>[o(O(r.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1}))}},C={class:"demo-space-x"},N={__name:"DemoBadgeShowOnHover",setup(V){const c=_(),f=_(),m=_(),r=I(f),b=I(c),h=I(m);return(w,x)=>(p(),v("div",C,[t(a,{content:"3",transition:"slide-x-transition","model-value":s(r)},{default:e(()=>[t(g,{ref_key:"tRefTwitterBadge",ref:f,size:"25",icon:"tabler-brand-twitter"},null,512)]),_:1},8,["model-value"]),t(a,{content:"5",transition:"scale-transition","model-value":s(b)},{default:e(()=>[t(g,{ref_key:"tRefInstagramBadge",ref:c,size:"25",icon:"tabler-brand-instagram"},null,512)]),_:1},8,["model-value"]),t(a,{content:"1",transition:"slide-x-transition","model-value":s(h)},{default:e(()=>[t(g,{ref_key:"tRefWhatsappBadge",ref:m,size:"25",icon:"tabler-brand-whatsapp"},null,512)]),_:1},8,["model-value"])]))}},j={class:"d-flex align-center"},Y={class:"demo-space-x"},P={__name:"DemoBadgeDynamicNotifications",setup(V){const c=_();return(f,m)=>(p(),v("div",j,[t(a,{content:s(c),"model-value":!!s(c),color:"success",class:"me-5"},{default:e(()=>[t(g,{size:"40",icon:"tabler-brand-vue"})]),_:1},8,["content","model-value"]),n("div",Y,[t(B,{onClick:m[0]||(m[0]=r=>c.value=(s(c)||0)+1)},{default:e(()=>[o(" Send Message ")]),_:1}),t(B,{color:"error",onClick:m[1]||(m[1]=r=>c.value=0)},{default:e(()=>[o(" Clear Notifications ")]),_:1})])]))}},M={class:"demo-space-x"},F={__name:"DemoBadgeAvatarStatus",setup(V){return(c,f)=>(p(),v("div",M,[t(a,{dot:"",bordered:"",color:"success",location:"bottom end","offset-x":5,"offset-y":1},{default:e(()=>[t(i,{size:"large"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{dot:"",bordered:"",color:"warning",location:"bottom end","offset-x":5,"offset-y":1},{default:e(()=>[t(i,{size:"large"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{dot:"",bordered:"",color:"error",location:"bottom end","offset-x":5,"offset-y":1},{default:e(()=>[t(i,{size:"large"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1})]))}},q={class:"demo-space-x"},J={__name:"DemoBadgeIcon",setup(V){return(c,f)=>(p(),v("div",q,[t(a,null,{badge:e(()=>[t(g,{icon:"tabler-bulb"})]),default:e(()=>[t(i,null,{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{icon:"tabler-lock-open"},{default:e(()=>[t(i,null,{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1})]))}},K={class:"demo-space-x"},L={__name:"DemoBadgePosition",setup(V){return(c,f)=>(p(),v("div",K,[t(a,{content:"1",location:"end top"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{location:"bottom start",content:"2"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{location:"bottom end",content:"3"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{location:"top start",content:"4"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1})]))}},Q={},U={class:"demo-space-x"};function G(V,c){return p(),v("div",U,[t(a,{dot:"",color:"primary"},{default:e(()=>[t(g,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(a,{dot:"",color:"secondary"},{default:e(()=>[t(g,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(a,{dot:"",color:"success"},{default:e(()=>[t(g,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(a,{dot:"",color:"info"},{default:e(()=>[t(g,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(a,{dot:"",color:"warning"},{default:e(()=>[t(g,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(a,{dot:"",color:"error"},{default:e(()=>[t(g,{size:"25",icon:"tabler-brand-instagram"})]),_:1})])}const X=$(Q,[["render",G]]),Z={class:"demo-space-x d-flex align-center flex-wrap"},tt={__name:"DemoBadgeStyle",setup(V){return(c,f)=>(p(),v("div",Z,[t(a,{content:"1"},{default:e(()=>[t(B,{variant:"tonal"},{default:e(()=>[o(" Default ")]),_:1})]),_:1}),t(a,{content:"5",bordered:""},{default:e(()=>[t(B,{variant:"tonal"},{default:e(()=>[o(" Border ")]),_:1})]),_:1}),t(a,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{inline:"",content:"5"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1}),t(a,{rounded:"sm",content:"5"},{default:e(()=>[t(i,{size:"48"},{default:e(()=>[t(l,{src:s(d)},null,8,["src"])]),_:1})]),_:1})]))}},et={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="tabler-brand-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="tabler-brand-whatsapp"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="tabler-brand-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="tabler-brand-whatsapp"
      />
    </VBadge>
  </div>
</template>
`},at={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="tabler-brand-vue"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="tabler-brand-vue"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},ot={ts:`<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},nt={ts:`<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="tabler-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="tabler-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="tabler-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="tabler-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},st={ts:`<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},rt={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>
  </div>
</template>
`},ct={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs
    grow
    show-arrows
  >
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-12"
        :offset-y="-4"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs
    grow
    show-arrows
  >
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-12"
        :offset-y="-4"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},dt={ts:`<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- \u{1F449} Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- \u{1F449} Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- \u{1F449} top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},it=n("p",null,[o("You can use various props like "),n("code",null,"bordered"),o(", "),n("code",null,"dot"),o(", "),n("code",null,"inline"),o(", "),n("code",null,"rounded"),o(" etc. to style the badge.")],-1),lt=n("p",null,[o("Use "),n("code",null,"color"),o(" prop to create various background badges.")],-1),gt=n("p",null,[o("You can use "),n("code",null,"location"),o(" prop to change the position of the badge. Possible values are "),n("code",null,"top-end"),o(", "),n("code",null,"bottom-end"),o(", "),n("code",null,"bottom-start"),o(", "),n("code",null,"top-start"),o(".")],-1),mt=n("p",null,[o("You can use "),n("code",null,"icon"),o(" prop or use "),n("code",null,"slot"),o(" to render the icon")],-1),pt=n("p",null,"You can use badge with avatar as status.",-1),ft=n("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1),Vt=n("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1),ut=n("p",null,"Badges help convey information to the user in a variety of ways.",-1),Ot={__name:"badge",setup(V){return(c,f)=>{const m=tt,r=S,b=X,h=L,w=J,x=F,A=P,y=N,T=E;return p(),z(W,{class:"match-height"},{default:e(()=>[t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Style",code:ot},{default:e(()=>[it,t(m)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Color",code:rt},{default:e(()=>[lt,t(b)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Position",code:dt},{default:e(()=>[gt,t(h)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Icon",code:nt},{default:e(()=>[mt,t(w)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Avatar Status",code:st},{default:e(()=>[pt,t(x)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Dynamic notifications",code:at},{default:e(()=>[ft,t(A)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Show on hover",code:et},{default:e(()=>[Vt,t(y)]),_:1},8,["code"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Tabs",code:ct},{default:e(()=>[ut,t(T)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ot as default};
