import{k as s,o as k,b as h,w as l,p as e,z as w,aV as N,q as t,ap as r,m as C,s as W,c as J,F as Z,a as ee,x as le,y as oe,a8 as ae,ag as te}from"./index.325d6ed4.js";import{a as A,b as Y,c as j,V as se}from"./VExpansionPanel.c7252fab.js";import{V as _}from"./VForm.14c039e0.js";import{V as x,a as o}from"./VRow.65129dfa.js";import{V as m}from"./VTextField.330e36dc.js";import{V as re}from"./VTextarea.ffe68829.js";import{V as E}from"./VSelect.ec5ec0ab.js";import{a as ne}from"./VInput.4b71e1df.js";import{a as G,V as T}from"./VRadioGroup.88cc79e6.js";import{V as Q}from"./VDivider.12a11754.js";import{V as F}from"./VBtn.7196944a.js";import{a as K,V as de}from"./VTabs.c7080ec0.js";import{c as X,V as me}from"./VCard.b46aae65.js";import{V as ie,a as O}from"./VWindowItem.a57f7c59.js";import{r as U,e as ue}from"./validators.741d8b3f.js";import{V as R}from"./VCheckbox.d4b9d549.js";import{V as Ve}from"./VAutocomplete.6d8188c5.js";import{_ as ce}from"./AppCardCode.21a0918d.js";import"./router.90a3b117.js";import"./index.e3345482.js";import"./lazy.a1af5619.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.08f4a1eb.js";import"./position.232cccb7.js";import"./easing.36b781ab.js";import"./VImg.22665cbe.js";import"./VCounter.b82dbd97.js";import"./VList.3d9c8afc.js";import"./VAvatar.28b3e74f.js";import"./VMenu.bb6a3f56.js";import"./scopeId.f074d452.js";import"./VOverlay.0a5b803c.js";import"./dialog-transition.33804bd8.js";import"./VCheckboxBtn.74e2d12a.js";import"./VSelectionControl.d32f4b05.js";import"./VChip.bff53162.js";import"./VSlideGroup.91c9b322.js";import"./ssrBoot.8ea0ab62.js";import"./index.0d4b9ec4.js";import"./filter.32307d9f.js";import"./vue.runtime.esm-bundler.da7ea887.js";const pe=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),C("h6",{class:"text-base font-weight-bold"}," Free ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1),be=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h5",{class:"text-base font-weight-medium"}," Express "),C("h6",{class:"text-base font-weight-bold"}," $5.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1),fe=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Overnight "),C("h6",{class:"text-base font-weight-bold"}," $10.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1),Ce={class:"me-1"},ve={class:"d-flex gap-4"},we={__name:"DemoFormLayoutCollapsible",setup(g){const c=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],b=s("home"),u=s("standard"),i=s("credit-debit-card"),f=s(0),y=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"tabler-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"tabler-help"}];return(d,a)=>(k(),h(se,{modelValue:t(f),"onUpdate:modelValue":a[6]||(a[6]=n=>r(f)?f.value=n:null)},{default:l(()=>[e(A,null,{default:l(()=>[e(Y,null,{default:l(()=>[w("Delivery Address")]),_:1}),e(j,null,{default:l(()=>[e(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Full Name"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Phone No"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(re,{label:"Address",rows:"3"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Pincode"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Landmark"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"City"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(E,{items:c,label:"State"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(ne,{class:"mb-3"},{default:l(()=>[w(" Address Type ")]),_:1}),e(G,{modelValue:t(b),"onUpdate:modelValue":a[0]||(a[0]=n=>r(b)?b.value=n:null),inline:""},{default:l(()=>[C("div",null,[e(T,{label:"Home (All day delivery)",value:"home"}),e(T,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}),e(A,null,{default:l(()=>[e(Y,null,{default:l(()=>[w("Delivery Options")]),_:1}),e(j,null,{default:l(()=>[e(G,{modelValue:t(u),"onUpdate:modelValue":a[4]||(a[4]=n=>r(u)?u.value=n:null),class:"delivery-options"},{default:l(()=>[C("div",{class:W(["delivery-option d-flex rounded-t",t(u)==="standard"?"active":""]),onClick:a[1]||(a[1]=n=>u.value="standard")},[e(T,{inline:"",value:"standard",class:"mt-n4"}),pe],2),C("div",{class:W(["delivery-option d-flex",t(u)==="express"?"active":""]),onClick:a[2]||(a[2]=n=>u.value="express")},[e(T,{inline:"",class:"mt-n4",value:"express"}),be],2),C("div",{class:W(["delivery-option d-flex rounded-b",t(u)==="overnight"?"active":""]),onClick:a[3]||(a[3]=n=>u.value="overnight")},[e(T,{inline:"",class:"mt-n4",value:"overnight"}),fe],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(A,null,{default:l(()=>[e(Y,null,{default:l(()=>[w("Payment Method")]),_:1}),e(j,null,{default:l(()=>[e(x,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(_,null,{default:l(()=>[C("div",null,[e(G,{modelValue:t(i),"onUpdate:modelValue":a[5]||(a[5]=n=>r(i)?i.value=n:null),inline:""},{default:l(()=>[C("div",null,[(k(),J(Z,null,ee(y,n=>e(T,{key:n.radioValue,value:n.radioValue},{label:l(()=>[C("span",Ce,le(n.radioLabel),1),e(oe,{size:"18",icon:n.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),ae(e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{label:"Card Number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Name"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(m,{label:"Expiry Date"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(m,{label:"CVV Code"})]),_:1})]),_:1},512),[[te,t(i)==="credit-debit-card"]])]),_:1})]),_:1})]),_:1}),e(Q,{class:"my-5"}),C("div",ve,[e(F,null,{default:l(()=>[w("Place Order")]),_:1}),e(F,{color:"secondary",variant:"tonal"},{default:l(()=>[w(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ye={__name:"DemoFormLayoutFormWithTabs",setup(g){const c=s("personal-info"),b=s(""),u=s(""),i=s(),f=s(""),y=s(),d=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],a=["English","German","French","Spanish","Portuguese","Russian","Korean"],n=s(""),v=s(""),L=s(""),P=s(""),S=s(""),D=s(""),z=s(""),H=s(""),M=s(""),$=s(""),q=s([]),I=s(!1),B=s(!1);return(Ye,V)=>(k(),J(Z,null,[e(de,{modelValue:t(c),"onUpdate:modelValue":V[0]||(V[0]=p=>r(c)?c.value=p:null)},{default:l(()=>[e(K,{value:"personal-info"},{default:l(()=>[w(" Personal Info ")]),_:1}),e(K,{value:"account-details"},{default:l(()=>[w(" Account Details ")]),_:1}),e(K,{value:"social-links"},{default:l(()=>[w(" Social Links ")]),_:1})]),_:1},8,["modelValue"]),e(Q),e(me,{flat:""},{default:l(()=>[e(X,null,{default:l(()=>[e(ie,{modelValue:t(c),"onUpdate:modelValue":V[19]||(V[19]=p=>r(c)?c.value=p:null)},{default:l(()=>[e(O,{value:"personal-info"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(m,{modelValue:t(b),"onUpdate:modelValue":V[1]||(V[1]=p=>r(b)?b.value=p:null),label:"First name"},null,8,["modelValue"])]),_:1}),e(o,{md:"6",cols:"12"},{default:l(()=>[e(m,{modelValue:t(u),"onUpdate:modelValue":V[2]||(V[2]=p=>r(u)?u.value=p:null),label:"Last name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:t(i),"onUpdate:modelValue":V[3]||(V[3]=p=>r(i)?i.value=p:null),items:d,label:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:t(q),"onUpdate:modelValue":V[4]||(V[4]=p=>r(q)?q.value=p:null),items:a,multiple:"",chips:"",clearable:"",label:"Language"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(f),"onUpdate:modelValue":V[5]||(V[5]=p=>r(f)?f.value=p:null),label:"Birth Date",placeholder:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(y),"onUpdate:modelValue":V[6]||(V[6]=p=>r(y)?y.value=p:null),type:"number",label:"Phone No."},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"account-details"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(n),"onUpdate:modelValue":V[7]||(V[7]=p=>r(n)?n.value=p:null),label:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(v),"onUpdate:modelValue":V[8]||(V[8]=p=>r(v)?v.value=p:null),label:"Email",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(L),"onUpdate:modelValue":V[9]||(V[9]=p=>r(L)?L.value=p:null),label:"Password",type:t(I)?"text":"password","append-inner-icon":t(I)?"tabler-eye":"tabler-eye-off","onClick:appendInner":V[10]||(V[10]=p=>I.value=!t(I))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(P),"onUpdate:modelValue":V[11]||(V[11]=p=>r(P)?P.value=p:null),label:"Confirm Password",type:t(B)?"text":"password","append-inner-icon":t(B)?"tabler-eye":"tabler-eye-off","onClick:appendInner":V[12]||(V[12]=p=>B.value=!t(B))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"social-links"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(S),"onUpdate:modelValue":V[13]||(V[13]=p=>r(S)?S.value=p:null),label:"Twitter"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(D),"onUpdate:modelValue":V[14]||(V[14]=p=>r(D)?D.value=p:null),label:"Facebook"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(z),"onUpdate:modelValue":V[15]||(V[15]=p=>r(z)?z.value=p:null),label:"Google+"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(H),"onUpdate:modelValue":V[16]||(V[16]=p=>r(H)?H.value=p:null),label:"LinkedIn"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(M),"onUpdate:modelValue":V[17]||(V[17]=p=>r(M)?M.value=p:null),label:"Instagram"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t($),"onUpdate:modelValue":V[18]||(V[18]=p=>r($)?$.value=p:null),label:"Quora"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(Q),e(X,{class:"d-flex gap-4"},{default:l(()=>[e(F,null,{default:l(()=>[w("Submit")]),_:1}),e(F,{color:"secondary",variant:"tonal"},{default:l(()=>[w(" Cancel ")]),_:1})]),_:1})]),_:1})],64))}},xe={__name:"DemoFormLayoutFormValidation",setup(g){const c=s(""),b=s(""),u=["Item 1","Item 2","Item 3","Item 4"],i=s(),f=s(!1),y=s();return(d,a)=>(k(),h(_,{ref_key:"form",ref:y,"lazy-validation":""},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(c),"onUpdate:modelValue":a[0]||(a[0]=n=>r(c)?c.value=n:null),rules:[t(U)],label:"Name",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(b),"onUpdate:modelValue":a[1]||(a[1]=n=>r(b)?b.value=n:null),rules:[t(ue),t(U)],label:"E-mail",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(E,{modelValue:t(i),"onUpdate:modelValue":a[2]||(a[2]=n=>r(i)?i.value=n:null),items:u,rules:[t(U)],label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:t(f),"onUpdate:modelValue":a[3]||(a[3]=n=>r(f)?f.value=n:null),rules:[t(U)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(F,{color:"success",onClick:a[4]||(a[4]=n=>{var v;return(v=t(y))==null?void 0:v.validate()})},{default:l(()=>[w(" Validate ")]),_:1}),e(F,{color:"error",onClick:a[5]||(a[5]=n=>{var v;return(v=t(y))==null?void 0:v.reset()})},{default:l(()=>[w(" Reset Form ")]),_:1}),e(F,{color:"warning",onClick:a[6]||(a[6]=n=>{var v;return(v=t(y))==null?void 0:v.resetValidation()})},{default:l(()=>[w(" Reset Validation ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},Fe={__name:"DemoFormLayoutFormHint",setup(g){const c=s(""),b=s(""),u=s(),i=s(!1),f=["foo","bar","fizz","buzz"],y=s([]);return(d,a)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(c),"onUpdate:modelValue":a[0]||(a[0]=n=>r(c)?c.value=n:null),label:"Username",placeholder:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(b),"onUpdate:modelValue":a[1]||(a[1]=n=>r(b)?b.value=n:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(u),"onUpdate:modelValue":a[2]||(a[2]=n=>r(u)?u.value=n:null),label:"Password",type:"password","persistent-hint":"",placeholder:"Password",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(Ve,{modelValue:t(y),"onUpdate:modelValue":a[3]||(a[3]=n=>r(y)?y.value=n:null),items:f,chips:"",multiple:"",label:"Autocomplete"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:t(i),"onUpdate:modelValue":a[4]||(a[4]=n=>r(i)?i.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},_e={__name:"DemoFormLayoutMultipleColumn",setup(g){const c=s(""),b=s(""),u=s(""),i=s(""),f=s(""),y=s(""),d=s(!1);return(a,n)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(c),"onUpdate:modelValue":n[0]||(n[0]=v=>r(c)?c.value=v:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(b),"onUpdate:modelValue":n[1]||(n[1]=v=>r(b)?b.value=v:null),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(y),"onUpdate:modelValue":n[2]||(n[2]=v=>r(y)?y.value=v:null),label:"Email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(u),"onUpdate:modelValue":n[3]||(n[3]=v=>r(u)?u.value=v:null),label:"City",placeholder:"City"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(i),"onUpdate:modelValue":n[4]||(n[4]=v=>r(i)?i.value=v:null),label:"Country",placeholder:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:t(f),"onUpdate:modelValue":n[5]||(n[5]=v=>r(f)?f.value=v:null),label:"Company",placeholder:"Company"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:t(d),"onUpdate:modelValue":n[6]||(n[6]=v=>r(d)?d.value=v:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},ke={__name:"DemoFormLayoutVerticalFormWithIcons",setup(g){const c=s(""),b=s(""),u=s(),i=s(),f=s(!1);return(y,d)=>(k(),h(_,{onSubmit:N(a=>({}),["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(c),"onUpdate:modelValue":d[0]||(d[0]=a=>r(c)?c.value=a:null),"prepend-inner-icon":"tabler-user",label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(b),"onUpdate:modelValue":d[1]||(d[1]=a=>r(b)?b.value=a:null),"prepend-inner-icon":"tabler-mail",label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(u),"onUpdate:modelValue":d[2]||(d[2]=a=>r(u)?u.value=a:null),"prepend-inner-icon":"tabler-device-mobile",label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(i),"onUpdate:modelValue":d[3]||(d[3]=a=>r(i)?i.value=a:null),"prepend-inner-icon":"tabler-lock",label:"Password",type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:t(f),"onUpdate:modelValue":d[4]||(d[4]=a=>r(f)?f.value=a:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(F,{type:"submit",class:"me-2"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},ge={__name:"DemoFormLayoutVerticalForm",setup(g){const c=s(""),b=s(""),u=s(),i=s(),f=s(!1);return(y,d)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(c),"onUpdate:modelValue":d[0]||(d[0]=a=>r(c)?c.value=a:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(b),"onUpdate:modelValue":d[1]||(d[1]=a=>r(b)?b.value=a:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(u),"onUpdate:modelValue":d[2]||(d[2]=a=>r(u)?u.value=a:null),label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:t(i),"onUpdate:modelValue":d[3]||(d[3]=a=>r(i)?i.value=a:null),label:"Password",type:"password",placeholder:"password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:t(f),"onUpdate:modelValue":d[4]||(d[4]=a=>r(f)?f.value=a:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},he=C("label",{for:"firstNameHorizontalIcons"},"First Name",-1),Ne=C("label",{for:"emailHorizontalIcons"},"Email",-1),Re=C("label",{for:"mobileHorizontalIcons"},"Mobile",-1),Te=C("label",{for:"passwordHorizontalIcons"},"Password",-1),Le={__name:"DemoFormLayoutHorizontalFormWithIcons",setup(g){const c=s(""),b=s(""),u=s(),i=s(),f=s(!1);return(y,d)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[he]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"firstNameHorizontalIcons",modelValue:t(c),"onUpdate:modelValue":d[0]||(d[0]=a=>r(c)?c.value=a:null),"prepend-inner-icon":"tabler-user",placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ne]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"emailHorizontalIcons",modelValue:t(b),"onUpdate:modelValue":d[1]||(d[1]=a=>r(b)?b.value=a:null),"prepend-inner-icon":"tabler-mail",placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Re]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"mobileHorizontalIcons",modelValue:t(u),"onUpdate:modelValue":d[2]||(d[2]=a=>r(u)?u.value=a:null),type:"number","prepend-inner-icon":"tabler-device-mobile",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Te]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"passwordHorizontalIcons",modelValue:t(i),"onUpdate:modelValue":d[3]||(d[3]=a=>r(i)?i.value=a:null),"prepend-inner-icon":"tabler-lock",type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(R,{modelValue:t(f),"onUpdate:modelValue":d[4]||(d[4]=a=>r(f)?f.value=a:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},Pe=C("label",{for:"firstName"},"First Name",-1),Ie=C("label",{for:"email"},"Email",-1),Be=C("label",{for:"mobile"},"Mobile",-1),Ue=C("label",{for:"password"},"Password",-1),Ee={__name:"DemoFormLayoutHorizontalForm",setup(g){const c=s(""),b=s(""),u=s(),i=s(),f=s(!1);return(y,d)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Pe]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"firstName",modelValue:t(c),"onUpdate:modelValue":d[0]||(d[0]=a=>r(c)?c.value=a:null),placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ie]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"email",modelValue:t(b),"onUpdate:modelValue":d[1]||(d[1]=a=>r(b)?b.value=a:null),placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Be]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"mobile",modelValue:t(u),"onUpdate:modelValue":d[2]||(d[2]=a=>r(u)?u.value=a:null),type:"number",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ue]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"password",modelValue:t(i),"onUpdate:modelValue":d[3]||(d[3]=a=>r(i)?i.value=a:null),type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(R,{modelValue:t(f),"onUpdate:modelValue":d[4]||(d[4]=a=>r(f)?f.value=a:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},Se={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},De={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- \u{1F449} Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- \u{1F449} City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- \u{1F449} Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- \u{1F449} Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- \u{1F449} Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- \u{1F449} City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- \u{1F449} Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- \u{1F449} Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ze={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

`},He={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Me={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- \u{1F449} Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- \u{1F449} submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- \u{1F449} Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- \u{1F449} submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},$e={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},qe={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>
  <VDivider />

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>
  <VDivider />

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},We={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
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

const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Ae=C("h4",{class:"text-h6 font-weight-medium mb-5"}," Collapsible Section ",-1),Ul={__name:"form-layouts",setup(g){return(c,b)=>{const u=Ee,i=ce,f=Le,y=ge,d=ke,a=_e,n=Fe,v=xe,L=ye,P=we;return k(),J("div",null,[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form",code:ze},{default:l(()=>[e(u)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form with Icons",code:Se},{default:l(()=>[e(f)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form",code:He},{default:l(()=>[e(y)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form with Icons",code:$e},{default:l(()=>[e(d)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Multiple Column",code:De},{default:l(()=>[e(a)]),_:1},8,["code"])]),_:1})]),_:1}),e(x,{class:"match-height my-3"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Hint",code:Me},{default:l(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Validation",code:We},{default:l(()=>[e(v)]),_:1},8,["code"])]),_:1})]),_:1}),e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Form with Tabs","no-padding":"",code:qe},{default:l(()=>[e(L)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[Ae,e(P)]),_:1})]),_:1})])}}};export{Ul as default};
