import{k as l,aU as S,j as L,o as B,b as N,w as s,p as e,m as d,q as a,aV as T,ap as g,z as C,aT as P}from"./index.e64df15f.js";import{u as R}from"./useGenerateImageVariant.503d94e9.js";import{r as V,e as q}from"./validators.741d8b3f.js";import{a as F,b as j,c as D,d as J}from"./auth-v2-login-illustration-light.13c259be.js";import{b as _}from"./route-block.023af118.js";import{a as u,V as h}from"./VRow.44a0774f.js";import{V as O}from"./VImg.1f0b6293.js";import{V as U,c as b}from"./VCard.83701cac.js";import{V as w}from"./VTextField.c5daeec6.js";import{V as E}from"./VBtn.e5e897d5.js";import{V as z}from"./VForm.442a2ac4.js";import"./index.0d4b9ec4.js";import"./router.7fdf4318.js";import"./VAvatar.c8e7782f.js";import"./position.771ba387.js";/* empty css                   */import"./VField.d8105e01.js";import"./index.e4d4f866.js";import"./VInput.e37c48cf.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.eeb76e28.js";const G={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},M={class:"d-flex align-center justify-center w-100 h-100"},W=d("h3",{class:"text-h5 font-weight-semibold mb-6"}," Welcome to Roster Plan! ",-1),$=d("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),A={__name:"login",setup(H){const y=R(J,D,j,F,!0),i=l(!1),c=S(),v=L(),p=l({email:void 0,password:void 0}),f=l(),n=l("ali@gmail.com"),m=l("1234");l(!1);const x=()=>{P.post("/login?email="+n.value+"&password="+m.value).then(o=>{const{token:t,user:r}=o.data.data,{profile:k}=o.data.data.user;localStorage.setItem("userData",JSON.stringify(r)),localStorage.setItem("userProfile",JSON.stringify(k)),localStorage.setItem("accessToken",JSON.stringify(t)),v.replace(c.query.to?String(c.query.to):"/")}).catch(o=>{const{errors:t}=o.response.data.message;p.value.password=t,console.error(o.response.data.message)})},I=()=>{var o;(o=f.value)==null||o.validate().then(({valid:t})=>{t&&x()})};return(o,t)=>(B(),N(h,{"no-gutters":"",class:"auth-wrapper"},{default:s(()=>[e(u,{lg:"8",class:"d-none d-lg-flex"},{default:s(()=>[d("div",G,[d("div",M,[e(O,{"max-width":"505",src:a(y),class:"auth-illustration mt-16 mb-2"},null,8,["src"])])])]),_:1}),e(u,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:s(()=>[e(U,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[e(b,null,{default:s(()=>[W,$]),_:1}),e(b,null,{default:s(()=>[e(a(z),{ref_key:"refVForm",ref:f,onSubmit:T(I,["prevent"])},{default:s(()=>[e(h,null,{default:s(()=>[e(u,{cols:"12"},{default:s(()=>[e(w,{modelValue:a(n),"onUpdate:modelValue":t[0]||(t[0]=r=>g(n)?n.value=r:null),label:"Email",type:"email",rules:[a(V),a(q)],"error-messages":a(p).email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(u,{cols:"12"},{default:s(()=>[e(w,{modelValue:a(m),"onUpdate:modelValue":t[1]||(t[1]=r=>g(m)?m.value=r:null),label:"Password",rules:[a(V)],type:a(i)?"text":"password","error-messages":a(p).password,"append-inner-icon":a(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[2]||(t[2]=r=>i.value=!a(i))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),e(E,{class:"mt-5",block:"",type:"submit"},{default:s(()=>[C(" Login ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1}))}};typeof _=="function"&&_(A);export{A as default};
