import{k as m,o as v,b as k,w as s,p as e,m as r,q as t,V as x,v as y,aV as P,z as _,y as C,r as I}from"./index.3b451135.js";import{u as p}from"./useGenerateImageVariant.e44b9257.js";import{m as R,a as N}from"./misc-mask-light.8988a42a.js";import{b as u}from"./route-block.023af118.js";import{V as f}from"./VImg.a3ce540d.js";import{a,V as c}from"./VRow.fd5da9e5.js";import{V as B,c as w}from"./VCard.956ab590.js";import{V as T}from"./VForm.64367eab.js";import{V}from"./VTextField.e023f519.js";import{V as j}from"./VBtn.6501e66c.js";import"./router.a4e1d8e9.js";import"./VAvatar.eaf074d5.js";import"./position.440bbdda.js";import"./VInput.56d1203e.js";import"./index.e3636733.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.cf395f35.js";import"./easing.36b781ab.js";import"./VCounter.4abec5d0.js";const L="/assets/auth-v2-reset-password-illustration-dark.d3746a9f.png",M="/assets/auth-v2-reset-password-illustration-light.435863a4.png";const D={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},F={class:"d-flex align-center justify-center w-100 h-100"},S=r("h5",{class:"text-h5 font-weight-semibold mb-1"}," Reset Password \u{1F512} ",-1),U=r("p",{class:"mb-0"},[_(" for "),r("span",{class:"font-weight-bold"},"john.doe@email.com")],-1),$=r("span",null,"Back to login",-1),q={__name:"reset-password-v2",setup(z){const n=m({newPassword:"",confirmPassword:""}),h=p(M,L),b=p(N,R),i=m(!1),d=m(!1);return(G,o)=>{const g=I("RouterLink");return v(),k(c,{"no-gutters":"",class:"auth-wrapper"},{default:s(()=>[e(a,{md:"8",class:"d-none d-md-flex"},{default:s(()=>[r("div",D,[r("div",F,[e(f,{"max-width":"400",src:t(h),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(f,{class:"auth-footer-mask",src:t(b)},null,8,["src"])])]),_:1}),e(a,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:s(()=>[e(B,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[e(w,null,{default:s(()=>[e(t(x),{nodes:t(y).app.logo,class:"mb-6"},null,8,["nodes"]),S,U]),_:1}),e(w,null,{default:s(()=>[e(T,{onSubmit:o[4]||(o[4]=P(()=>{},["prevent"]))},{default:s(()=>[e(c,null,{default:s(()=>[e(a,{cols:"12"},{default:s(()=>[e(V,{modelValue:t(n).newPassword,"onUpdate:modelValue":o[0]||(o[0]=l=>t(n).newPassword=l),label:"New Password",type:t(i)?"text":"password","append-inner-icon":t(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[1]||(o[1]=l=>i.value=!t(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(V,{modelValue:t(n).confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=l=>t(n).confirmPassword=l),label:"Confirm Password",type:t(d)?"text":"password","append-inner-icon":t(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[3]||(o[3]=l=>d.value=!t(d))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(j,{block:"",type:"submit"},{default:s(()=>[_(" Set New Password ")]),_:1})]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(g,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v2"}},{default:s(()=>[e(C,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof u=="function"&&u(q);export{q as default};
