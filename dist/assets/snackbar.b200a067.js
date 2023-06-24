import{V as u}from"./VBtn.0615207f.js";import{i as P,c as E,d as F,n as R,k as A,g as j,p as q,V as L}from"./router.6f77ab28.js";import{a as M,c as H}from"./position.96124056.js";import{$ as z,al as N,S as J,k as d,Q as $,U as W,I as Q,p as a,ag as O,o as _,c as x,w as e,z as t,q as m,ap as p,y as B,F as w,b as G,m as k}from"./index.4ee6cde3.js";import{u as K}from"./scopeId.fd5380d2.js";import{f as X}from"./forwardRefs.c003b6b8.js";import{m as Y,f as Z,a as h}from"./VOverlay.a6de9318.js";import{_ as aa}from"./AppCardCode.b8eed905.js";import{a as I,V as ea}from"./VRow.c3eca72e.js";import"./lazy.d36e2ba8.js";import"./easing.36b781ab.js";import"./VImg.f62a2fa4.js";import"./vue.runtime.esm-bundler.ec9644bb.js";import"./index.2dd7ffb7.js";import"./VCard.51ac3a8a.js";import"./VAvatar.23763371.js";import"./VDivider.1ede16c7.js";const S=z()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...P({location:"bottom"}),...M(),...E(),...F(),...N(Y({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":f=>!0},setup(f,l){let{slots:c}=l;const n=J(f,"modelValue"),{locationStyles:o}=R(f),{positionClasses:b}=H(f),{scopeId:v}=K(),{colorClasses:r,colorStyles:V,variantClasses:g}=A(f),{roundedClasses:T}=j(f),i=d();$(n,C),$(()=>f.timeout,C),W(()=>{n.value&&C()});let s=-1;function C(){window.clearTimeout(s);const y=Number(f.timeout);!n.value||y===-1||(s=window.setTimeout(()=>{n.value=!1},y))}function D(){window.clearTimeout(s)}return Q(()=>{const[y]=Z(f);return a(h,O({ref:i,class:["v-snackbar",{"v-snackbar--active":n.value,"v-snackbar--multi-line":f.multiLine&&!f.vertical,"v-snackbar--vertical":f.vertical},b.value]},y,{modelValue:n.value,"onUpdate:modelValue":U=>n.value=U,contentProps:O({style:o.value},y.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none"},v),{default:()=>[a("div",{class:["v-snackbar__wrapper",r.value,T.value,g.value],style:[V.value],onPointerenter:D,onPointerleave:C},[q(!1,"v-snackbar"),c.default&&a("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[c.default()]),c.actions&&a(L,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[c.actions()])]})])],activator:c.activator})}),X({},i)}}),ta={class:"demo-space-x"},na={__name:"DemoSnackbarTransition",setup(f){const l=d(!1),c=d(!1),n=d(!1);return(o,b)=>(_(),x("div",ta,[a(u,{onClick:b[0]||(b[0]=v=>l.value=!0)},{default:e(()=>[t(" fade snackbar ")]),_:1}),a(S,{modelValue:m(l),"onUpdate:modelValue":b[1]||(b[1]=v=>p(l)?l.value=v:null),transition:"fade-transition",location:"top start"},{default:e(()=>[t(" I'm a fade transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[2]||(b[2]=v=>c.value=!0)},{default:e(()=>[t(" Scale snackbar ")]),_:1}),a(S,{modelValue:m(c),"onUpdate:modelValue":b[3]||(b[3]=v=>p(c)?c.value=v:null),transition:"scale-transition",location:"bottom end"},{default:e(()=>[t(" I'm a scale transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[4]||(b[4]=v=>n.value=!0)},{default:e(()=>[t(" scroll y reverse ")]),_:1}),a(S,{modelValue:m(n),"onUpdate:modelValue":b[5]||(b[5]=v=>p(n)?n.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:e(()=>[t(" I'm a scroll y reverse transition snackbar. ")]),_:1},8,["modelValue"])]))}},la={class:"demo-space-x"},ia={__name:"DemoSnackbarVariants",setup(f){const l=d(!1),c=d(!1),n=d(!1),o=d(!1),b=d(!1);return(v,r)=>(_(),x("div",la,[a(u,{onClick:r[0]||(r[0]=V=>l.value=!0)},{default:e(()=>[t(" Default ")]),_:1}),a(S,{modelValue:m(l),"onUpdate:modelValue":r[1]||(r[1]=V=>p(l)?l.value=V:null),location:"top start"},{default:e(()=>[t(" Jelly chocolate bar candy canes apple pie. ")]),_:1},8,["modelValue"]),a(u,{onClick:r[2]||(r[2]=V=>c.value=!0)},{default:e(()=>[t(" tonal ")]),_:1}),a(S,{modelValue:m(c),"onUpdate:modelValue":r[3]||(r[3]=V=>p(c)?c.value=V:null),location:"top end",variant:"tonal"},{default:e(()=>[t(" Ice cream cake candy canes. ")]),_:1},8,["modelValue"]),a(u,{onClick:r[4]||(r[4]=V=>n.value=!0)},{default:e(()=>[t(" Text ")]),_:1}),a(S,{modelValue:m(n),"onUpdate:modelValue":r[5]||(r[5]=V=>p(n)?n.value=V:null),location:"end center",variant:"text"},{default:e(()=>[t(" Pie icing biscuit souffl\xE9 liquorice topping. ")]),_:1},8,["modelValue"]),a(u,{onClick:r[6]||(r[6]=V=>o.value=!0)},{default:e(()=>[t(" Outlined ")]),_:1}),a(S,{modelValue:m(o),"onUpdate:modelValue":r[7]||(r[7]=V=>p(o)?o.value=V:null),location:"bottom end",variant:"outlined",color:"error"},{default:e(()=>[t(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"]),a(u,{onClick:r[8]||(r[8]=V=>b.value=!0)},{default:e(()=>[t(" Flat ")]),_:1}),a(S,{modelValue:m(b),"onUpdate:modelValue":r[9]||(r[9]=V=>p(b)?b.value=V:null),location:"bottom start",variant:"flat",color:"error"},{default:e(()=>[t(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"])]))}},oa={class:"demo-space-x"},sa={__name:"DemoSnackbarPosition",setup(f){const l=d(!1),c=d(!1),n=d(!1),o=d(!1),b=d(!1),v=d(!1),r=d(!1),V=d(!1),g=d(!1);return(T,i)=>(_(),x("div",oa,[a(u,{icon:"",variant:"text",onClick:i[0]||(i[0]=s=>c.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-up"})]),_:1}),a(S,{modelValue:m(c),"onUpdate:modelValue":i[1]||(i[1]=s=>p(c)?c.value=s:null),location:"top"},{default:e(()=>[t(" I'm a top snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[2]||(i[2]=s=>n.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-up-right"})]),_:1}),a(S,{modelValue:m(n),"onUpdate:modelValue":i[3]||(i[3]=s=>p(n)?n.value=s:null),location:"top end"},{default:e(()=>[t(" I'm a top right snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[4]||(i[4]=s=>r.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-right"})]),_:1}),a(S,{modelValue:m(r),"onUpdate:modelValue":i[5]||(i[5]=s=>p(r)?r.value=s:null),location:"end center"},{default:e(()=>[t(" I'm a center end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[6]||(i[6]=s=>o.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-down-right"})]),_:1}),a(S,{modelValue:m(o),"onUpdate:modelValue":i[7]||(i[7]=s=>p(o)?o.value=s:null),location:"bottom end"},{default:e(()=>[t(" I'm a bottom end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[8]||(i[8]=s=>b.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-down"})]),_:1}),a(S,{modelValue:m(b),"onUpdate:modelValue":i[9]||(i[9]=s=>p(b)?b.value=s:null)},{default:e(()=>[t(" I'm a bottom snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[10]||(i[10]=s=>v.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-down-left"})]),_:1}),a(S,{modelValue:m(v),"onUpdate:modelValue":i[11]||(i[11]=s=>p(v)?v.value=s:null),location:"bottom start"},{default:e(()=>[t(" I'm a bottom start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[12]||(i[12]=s=>V.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-left"})]),_:1}),a(S,{modelValue:m(V),"onUpdate:modelValue":i[13]||(i[13]=s=>p(V)?V.value=s:null),location:"start center"},{default:e(()=>[t(" I'm a center start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[14]||(i[14]=s=>l.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrow-up-left"})]),_:1}),a(S,{modelValue:m(l),"onUpdate:modelValue":i[15]||(i[15]=s=>p(l)?l.value=s:null),location:"top start"},{default:e(()=>[t(" I'm a top start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:i[16]||(i[16]=s=>g.value=!0)},{default:e(()=>[a(B,{icon:"tabler-arrows-minimize"})]),_:1}),a(S,{modelValue:m(g),"onUpdate:modelValue":i[17]||(i[17]=s=>p(g)?g.value=s:null),location:"center"},{default:e(()=>[t(" I'm a center snackbar. ")]),_:1},8,["modelValue"])]))}},ra={__name:"DemoSnackbarVertical",setup(f){const l=d(!1);return(c,n)=>(_(),x(w,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(S,{modelValue:m(l),"onUpdate:modelValue":n[3]||(n[3]=o=>p(l)?l.value=o:null),vertical:""},{actions:e(()=>[a(u,{color:"success",onClick:n[1]||(n[1]=o=>l.value=!1)},{default:e(()=>[t(" Undo ")]),_:1}),a(u,{color:"error",onClick:n[2]||(n[2]=o=>l.value=!1)},{default:e(()=>[t(" Close ")]),_:1})]),default:e(()=>[t(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")]),_:1},8,["modelValue"])],64))}},ca={__name:"DemoSnackbarTimeout",setup(f){const l=d(!1);return(c,n)=>(_(),x(w,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(S,{modelValue:m(l),"onUpdate:modelValue":n[1]||(n[1]=o=>p(l)?l.value=o:null),timeout:2e3},{default:e(()=>[t(" My timeout is set to 2000. ")]),_:1},8,["modelValue"])],64))}},ba={__name:"DemoSnackbarMultiLine",setup(f){const l=d(!1);return(c,n)=>(_(),x(w,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(S,{modelValue:m(l),"onUpdate:modelValue":n[2]||(n[2]=o=>p(l)?l.value=o:null),"multi-line":""},{actions:e(()=>[a(u,{color:"error",onClick:n[1]||(n[1]=o=>l.value=!1)},{default:e(()=>[t(" Close ")]),_:1})]),default:e(()=>[t(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")]),_:1},8,["modelValue"])],64))}},ua={__name:"DemoSnackbarWithAction",setup(f){const l=d(!1);return(c,n)=>(_(),x(w,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(S,{modelValue:m(l),"onUpdate:modelValue":n[2]||(n[2]=o=>p(l)?l.value=o:null)},{actions:e(()=>[a(u,{color:"error",onClick:n[1]||(n[1]=o=>l.value=!1)},{default:e(()=>[t(" Close ")]),_:1})]),default:e(()=>[t(" Hello, I'm a snackbar with actions. ")]),_:1},8,["modelValue"])],64))}},ka={__name:"DemoSnackbarBasic",setup(f){const l=d(!1);return(c,n)=>(_(),x(w,null,[a(u,{onClick:n[0]||(n[0]=o=>l.value=!0)},{default:e(()=>[t(" Open Snackbar ")]),_:1}),a(S,{modelValue:m(l),"onUpdate:modelValue":n[1]||(n[1]=o=>p(l)?l.value=o:null)},{default:e(()=>[t(" Hello, I'm a snackbar ")]),_:1},8,["modelValue"])],64))}},Va={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},da={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit souffl\xE9 liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit souffl\xE9 liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},ma={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},pa={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},Sa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},fa={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},va={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ba={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},_a=k("p",null,[t("The "),k("code",null,"v-snackbar"),t(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),ga=k("p",null,[t("Use "),k("code",null,"actions"),t(" slot to add action button. A "),k("code",null,"v-snackbar"),t(" in its simplest form displays a temporary and closable notification to the user.")],-1),Ia=k("p",null,[t("The "),k("code",null,"multi-line"),t(" property extends the height of the "),k("code",null,"v-snackbar"),t(" to give you a little more room for content.")],-1),xa=k("p",null,[t("The "),k("code",null,"timeout"),t(" property lets you customize the delay before the "),k("code",null,"v-snackbar"),t(" is hidden.")],-1),ya=k("p",null,[t("The "),k("code",null,"vertical"),t(" property allows you to stack the content of your "),k("code",null,"v-snackbar"),t(".")],-1),wa=k("p",null,[t("Use "),k("code",null,"location"),t(" prop to change the position of snackbar.")],-1),Ta=k("p",null,[t("Apply different styles to the snackbar using props such as "),k("code",null,"shaped"),t(", "),k("code",null,"rounded"),t(", "),k("code",null,"color"),t(", "),k("code",null,"text"),t(", "),k("code",null,"outlined"),t(", "),k("code",null,"tile"),t(" and more.")],-1),Ca=k("p",null,"Use transition prop to sets the component transition.",-1),Wa={__name:"snackbar",setup(f){return(l,c)=>{const n=ka,o=aa,b=ua,v=ba,r=ca,V=ra,g=sa,T=ia,i=na;return _(),G(ea,{class:"match-height"},{default:e(()=>[a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Basic",code:ma},{default:e(()=>[_a,a(n)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"With Action",code:Va},{default:e(()=>[ga,a(b)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Multi Line",code:Ba},{default:e(()=>[Ia,a(v)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Timeout",code:Sa},{default:e(()=>[xa,a(r)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Vertical",code:va},{default:e(()=>[ya,a(V)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Position",code:pa},{default:e(()=>[wa,a(g)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Variants",code:da},{default:e(()=>[Ta,a(T)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Transition",code:fa},{default:e(()=>[Ca,a(i)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Wa as default};
