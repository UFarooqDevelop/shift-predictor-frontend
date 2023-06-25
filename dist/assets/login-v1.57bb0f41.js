import{k as u,o as h,c as g,m as s,p as e,q as o,w as t,V as v,v as p,z as m,x as c,aV as w,r as y}from"./index.e5c1e8e1.js";import{a as k,b as C}from"./auth-v1-top-shape.37562e7c.js";import{_ as B}from"./AuthProvider.7e0a9f24.js";import{b as f}from"./route-block.023af118.js";import{V as _}from"./VImg.10863b21.js";import{a as N,b as R,c as V,V as T}from"./VCard.8e399742.js";import{V as P}from"./VForm.1022f47e.js";import{V as S,a as n}from"./VRow.1f54dc9e.js";import{V as b}from"./VTextField.8a91b29c.js";import{V as j}from"./VCheckbox.dfaad139.js";import{V as F}from"./VBtn.c5180d72.js";import{V as x}from"./VDivider.b5a2ab1e.js";import"./router.0c602970.js";import"./VAvatar.d497555d.js";import"./position.2438c506.js";import"./VInput.cc0bea53.js";import"./index.1bcc5918.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.84115b4a.js";import"./easing.36b781ab.js";import"./VCounter.4b321610.js";import"./VCheckboxBtn.3db128f5.js";import"./VSelectionControl.7512a01f.js";const I={class:"auth-wrapper d-flex align-center justify-center pa-4"},L={class:"position-relative my-sm-16"},U={class:"d-flex"},D={class:"text-h5 font-weight-semibold mb-1"},E=s("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),$={class:"d-flex align-center justify-space-between flex-wrap mt-2 mb-4"},q=s("span",null,"New on our platform?",-1),z=s("span",{class:"mx-4"},"or",-1),M={__name:"login-v1",setup(W){const l=u({email:"",password:"",remember:!1}),i=u(!1);return(A,a)=>{const d=y("RouterLink");return h(),g("div",I,[s("div",L,[e(_,{src:o(k),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),e(_,{src:o(C),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),e(T,{class:"auth-card pa-4","max-width":"448"},{default:t(()=>[e(N,{class:"justify-center"},{prepend:t(()=>[s("div",U,[e(o(v),{nodes:o(p).app.logo},null,8,["nodes"])])]),default:t(()=>[e(R,{class:"font-weight-bold text-h5 py-1"},{default:t(()=>[m(c(o(p).app.title),1)]),_:1})]),_:1}),e(V,{class:"pt-1"},{default:t(()=>[s("h5",D," Welcome to "+c(o(p).app.title)+"! \u{1F44B}\u{1F3FB} ",1),E]),_:1}),e(V,null,{default:t(()=>[e(P,{onSubmit:a[4]||(a[4]=w(()=>{},["prevent"]))},{default:t(()=>[e(S,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(b,{modelValue:o(l).email,"onUpdate:modelValue":a[0]||(a[0]=r=>o(l).email=r),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(b,{modelValue:o(l).password,"onUpdate:modelValue":a[1]||(a[1]=r=>o(l).password=r),label:"Password",type:o(i)?"text":"password","append-inner-icon":o(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[2]||(a[2]=r=>i.value=!o(i))},null,8,["modelValue","type","append-inner-icon"]),s("div",$,[e(j,{modelValue:o(l).remember,"onUpdate:modelValue":a[3]||(a[3]=r=>o(l).remember=r),label:"Remember me"},null,8,["modelValue"]),e(d,{class:"text-primary ms-2 mb-1",to:{name:"pages-authentication-forgot-password-v1"}},{default:t(()=>[m(" Forgot Password? ")]),_:1})]),e(F,{block:"",type:"submit"},{default:t(()=>[m(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:t(()=>[q,e(d,{class:"text-primary ms-2",to:{name:"pages-authentication-register-v1"}},{default:t(()=>[m(" Create an account ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(x),z,e(x)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[e(B)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}};typeof f=="function"&&f(M);export{M as default};
