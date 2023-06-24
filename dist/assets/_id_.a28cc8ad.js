import{aK as q,k as g,bb as O,o as c,b as h,w as t,p as e,z as p,aV as K,q as s,c as C,x as V,aI as B,m as l,ap as J,aT as Y,F as G,c7 as H,c6 as Q,aU as W}from"./index.4ee6cde3.js";import{u as X}from"./useUserListStore.36a3e294.js";import{a as P}from"./formatters.2778bb47.js";import{V as Z,_ as ee}from"./VDialog.7da51bbb.js";import{r as R,e as te}from"./validators.741d8b3f.js";import{V as z,a as se,b as ae,c as I}from"./VCard.51ac3a8a.js";import{V as le}from"./VForm.aebc804f.js";import{V as T,a as x}from"./VRow.c3eca72e.js";import{V as L}from"./VImg.f62a2fa4.js";import{V as A}from"./VAvatar.23763371.js";import{V as oe}from"./VFileInput.e18b8096.js";import{V as k}from"./VTextField.09239994.js";import{V as N}from"./VBtn.0615207f.js";import{V as re}from"./VDivider.1ede16c7.js";import{V as ie,a as w,b as U}from"./VList.4c9f67d4.js";import"./useInvoiceStore.3759a098.js";/* empty css                                                                     */import"./index.0d4b9ec4.js";import"./scopeId.fd5380d2.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.a6de9318.js";import"./router.6f77ab28.js";import"./lazy.d36e2ba8.js";import"./easing.36b781ab.js";import"./dialog-transition.796b3152.js";import"./position.96124056.js";import"./VInput.714af960.js";import"./index.2dd7ffb7.js";import"./VField.6c34a9d5.js";import"./VChip.7b3336fe.js";import"./VCounter.317f303d.js";/* empty css                   */const ne={key:0,class:"text-5xl font-weight-semibold"},ue={id:"inspire"},de={__name:"UserInfoEditDialog",props:{userData:{type:Object,required:!0},isDialogVisible:{type:Boolean,required:!0}},emits:["update:modelValue","submit","update:isDialogVisible"],setup(_,{emit:u}){const o=_,a=g(structuredClone(O(o.userData)));g(!1),g(JSON.parse(localStorage.getItem("accessToken"))).value.replace(/"/g,"");const y=()=>{u("update:modelValue",a.value),d(JSON.parse(JSON.stringify(a.value)))},f=()=>{a.value=structuredClone(O(o.userData)),u("update:isDialogVisible",!0)},r=n=>{u("update:isDialogVisible",n)},d=n=>{Y.post(`/profile/${n.profile.id}`,n.profile).then(i=>{localStorage.setItem("userData",JSON.stringify(n))}).catch(i=>{console.log(i)}),u("submit",n)},D=g(1);return(n,i)=>{const M=ee;return c(),h(Z,{width:n.$vuetify.display.smAndDown?"auto":700,"model-value":o.isDialogVisible,"onUpdate:modelValue":r},{default:t(()=>[e(M,{onClick:i[0]||(i[0]=m=>r(!1))}),e(z,{class:"pa-sm-14 pa-5"},{default:t(()=>[e(se,{class:"text-center"},{default:t(()=>[e(ae,{class:"text-h5 mb-3"},{default:t(()=>[p(" Edit Information ")]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(le,{class:"mt-6",ref:"editUserForm",onSubmit:K(y,["prevent"])},{default:t(()=>[e(T,null,{default:t(()=>[e(x,{cols:"12",class:"d-flex justify-center align-baseline"},{default:t(()=>{var m,$,E,F;return[($=(m=s(a))==null?void 0:m.profile)!=null&&$.picture?(c(),h(L,{key:0,src:(F=(E=s(a))==null?void 0:E.profile)==null?void 0:F.picture,"max-width":"80","max-height":"80"},null,8,["src"])):(c(),h(A,{key:1,rounded:"",size:80,color:"primary",variant:"tonal"},{default:t(()=>{var S,j;return[(j=(S=s(a))==null?void 0:S.profile)!=null&&j.picture?B("",!0):(c(),C("span",ne,V(s(P)(s(a).username)),1))]}),_:1})),l("span",ue,[e(oe,{modelValue:s(D),"onUpdate:modelValue":i[1]||(i[1]=S=>J(D)?D.value=S:null),accept:"image/*","show-size":"",class:"ml-4","prepend-icon":"mdi-camera","hide-input":""},null,8,["modelValue"])])]}),_:1}),e(x,{cols:"12",md:"6"},{default:t(()=>[e(k,{modelValue:s(a).username,"onUpdate:modelValue":i[2]||(i[2]=m=>s(a).username=m),label:"Name",rules:[s(R)]},null,8,["modelValue","rules"])]),_:1}),e(x,{cols:"12",md:"6"},{default:t(()=>[e(k,{modelValue:s(a).email,"onUpdate:modelValue":i[3]||(i[3]=m=>s(a).email=m),label:"Email",rules:[s(R),s(te)]},null,8,["modelValue","rules"])]),_:1}),e(x,{cols:"12",md:"6"},{default:t(()=>[e(k,{modelValue:s(a).profile.phone_number,"onUpdate:modelValue":i[4]||(i[4]=m=>s(a).profile.phone_number=m),label:"Contact"},null,8,["modelValue"])]),_:1}),e(x,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:t(()=>[e(N,{type:"submit"},{default:t(()=>[p(" Submit ")]),_:1}),e(N,{color:"secondary",variant:"tonal",onClick:f},{default:t(()=>[p(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},me=q(de,[["__scopeId","data-v-358d74fe"]]);const v=_=>(H("data-v-7ca7e21f"),_=_(),Q(),_),pe={key:1,class:"text-5xl font-weight-semibold"},ce={class:"text-h6 mt-4"},_e=v(()=>l("p",{class:"text-sm text-uppercase text-disabled"}," Details ",-1)),fe={class:"text-base font-weight-semibold w-25"},Ve=v(()=>l("span",{class:"ml-lg-15"},null,-1)),ge={class:"text-body-2"},be={class:"text-base font-weight-semibold w-25"},xe=v(()=>l("span",{class:"ml-lg-15"},null,-1)),De={class:"text-body-2 ml-lg-8"},he={class:"text-base font-weight-semibold w-25"},ve=v(()=>l("span",{class:"ml-lg-15"},null,-1)),ye={class:"text-body-2 ml-lg-9"},we={class:"text-base font-weight-semibold w-25"},Ue=v(()=>l("span",{class:"ml-lg-15"},null,-1)),Ie={class:"text-body-2 ml-lg-7"},Se={class:"text-base font-weight-semibold w-25"},ke=v(()=>l("span",{class:"ml-lg-15"},null,-1)),Ce={class:"text-body-2 ml-lg-8"},Ne={__name:"UserBioPanel",props:{userData:{type:Object,required:!0}},emits:["update:user-data"],setup(_,{emit:u}){const o=_,a=y=>{console.log(y),u("update:user-data",y)},b=g(!1);return g(!1),(y,f)=>(c(),C(G,null,[e(T,{class:"d-flex justify-center"},{default:t(()=>[e(x,{cols:"12",lg:"8",xl:"9",sm:"12",md:"12"},{default:t(()=>[o.userData?(c(),h(z,{key:0},{default:t(()=>[e(I,{class:"text-center pt-15"},{default:t(()=>[e(A,{rounded:"",size:120,color:"primary",variant:"tonal"},{default:t(()=>{var r,d,D,n;return[(d=(r=o.userData)==null?void 0:r.profile)!=null&&d.picture?(c(),h(L,{key:0,src:(n=(D=o.userData)==null?void 0:D.profile)==null?void 0:n.picture},null,8,["src"])):(c(),C("span",pe,V(s(P)(o.userData.username))+" ",1))]}),_:1}),l("h6",ce,V(o.userData.username)+" ",1)]),_:1}),e(I,{class:"d-flex flex-column justify-center flex-wrap mt-3"},{default:t(()=>[e(re),e(I,null,{default:t(()=>[_e,e(ie,{class:"card-list"},{default:t(()=>[e(w,null,{default:t(()=>[e(U,null,{default:t(()=>[l("h6",fe,[p(" Reference: "),Ve,l("span",ge,V(o.userData.reference),1)])]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(U,null,{default:t(()=>[l("h6",be,[p(" Name: "),xe,l("span",De,V(o.userData.username)+" ",1)])]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(U,null,{default:t(()=>[l("h6",he,[p(" Email: "),ve,l("span",ye,V(o.userData.email),1)])]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(U,null,{default:t(()=>{var r,d;return[l("h6",we,[p(" Phone: "),Ue,l("span",Ie,V((d=(r=o.userData)==null?void 0:r.profile)==null?void 0:d.phone_number),1)])]}),_:1})]),_:1}),e(w,null,{default:t(()=>[e(U,null,{default:t(()=>{var r,d;return[l("h6",Se,[p(" Driver: "),ke,l("span",Ce,V((d=(r=o.userData)==null?void 0:r.profile)!=null&&d.is_driver?"Yes":"No"),1)])]}),_:1})]),_:1})]),_:1})]),_:1}),e(I,{class:"d-flex justify-center mt-sm-2"},{default:t(()=>[e(N,{variant:"elevated",class:"me-3",onClick:f[0]||(f[0]=r=>b.value=!0)},{default:t(()=>[p(" Edit ")]),_:1})]),_:1})]),_:1})]),_:1})):B("",!0)]),_:1})]),_:1}),e(me,{isDialogVisible:s(b),"onUpdate:isDialogVisible":f[1]||(f[1]=r=>J(b)?b.value=r:null),"user-data":o.userData,onSubmit:f[2]||(f[2]=r=>b.value=!1),"onUpdate:modelValue":a},null,8,["isDialogVisible","user-data"])],64))}},Be=q(Ne,[["__scopeId","data-v-7ca7e21f"]]);const dt={__name:"[id]",setup(_){X(),W();const u=g(JSON.parse(localStorage.getItem("userData")||"{}"));g(null);const o=a=>{u.value=a};return(a,b)=>s(u)?(c(),h(T,{key:0},{default:t(()=>[e(x,{cols:"12"},{default:t(()=>[e(Be,{"user-data":s(u),"onUpdate:userData":o},null,8,["user-data"])]),_:1})]),_:1})):B("",!0)}};export{dt as default};