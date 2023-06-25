import{k as r,o as V,b as N,w as s,p as e,m as c,q as t,aV as C,ap as _,z as h,c as T,y as F,x as P,aI as R,aU as q,j as D,aT as j}from"./index.e5c1e8e1.js";import{u as E}from"./useGenerateImageVariant.279e004c.js";import{r as y,e as J}from"./validators.741d8b3f.js";import{a as O,b as U,c as z,d as G}from"./auth-v2-login-illustration-light.a2530d13.js";import{b as v}from"./route-block.023af118.js";import{V as M}from"./VImg.10863b21.js";import{a as d,V as w}from"./VRow.1f54dc9e.js";import{V as W,c as b}from"./VCard.8e399742.js";import{V as x}from"./VTextField.8a91b29c.js";import{V as $}from"./VBtn.c5180d72.js";import{V as A}from"./VForm.1022f47e.js";import"./index.0d4b9ec4.js";import"./router.0c602970.js";import"./VAvatar.d497555d.js";import"./position.2438c506.js";/* empty css                   */import"./VField.84115b4a.js";import"./index.1bcc5918.js";import"./VInput.cc0bea53.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.4b321610.js";const H={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},K={class:"d-flex align-center justify-center w-100 h-100"},Q=c("h3",{class:"text-h5 font-weight-semibold mb-6"}," Welcome to Roster Plan! ",-1),X=c("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),Y={key:0,class:"text-center text-error w-100",style:{"font-weight":"600"}},Z={__name:"login",setup(ee){const I=E(G,z,U,O,!0),i=r(!1),f=q(),k=D(),p=r({email:void 0,password:void 0}),g=r(),u=r(""),m=r("");r(!1);const n=r(""),S=()=>{j.post("/login?email="+u.value+"&password="+m.value).then(o=>{const{token:a,user:l}=o.data.data,{profile:L}=o.data.data.user;localStorage.setItem("userData",JSON.stringify(l)),localStorage.setItem("userProfile",JSON.stringify(L)),localStorage.setItem("accessToken",JSON.stringify(a)),k.replace(f.query.to?String(f.query.to):"/")}).catch(o=>{const{errors:a}=o.response.data.message;p.value.password=a,n.value="Failed to login",console.error(o.response.data.message)})},B=()=>{var o;n.value&&(n.value=""),(o=g.value)==null||o.validate().then(({valid:a})=>{a&&S()})};return(o,a)=>(V(),N(w,{"no-gutters":"",class:"auth-wrapper"},{default:s(()=>[e(d,{lg:"8",class:"d-none d-lg-flex"},{default:s(()=>[c("div",H,[c("div",K,[e(M,{"max-width":"505",src:t(I),class:"auth-illustration mt-16 mb-2"},null,8,["src"])])])]),_:1}),e(d,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:s(()=>[e(W,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[e(b,null,{default:s(()=>[Q,X]),_:1}),e(b,null,{default:s(()=>[e(t(A),{ref_key:"refVForm",ref:g,onSubmit:C(B,["prevent"])},{default:s(()=>[e(w,null,{default:s(()=>[e(d,{cols:"12"},{default:s(()=>[e(x,{modelValue:t(u),"onUpdate:modelValue":a[0]||(a[0]=l=>_(u)?u.value=l:null),label:"Email",type:"email",rules:[t(y),t(J)],"error-messages":t(p).email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(d,{cols:"12"},{default:s(()=>[e(x,{modelValue:t(m),"onUpdate:modelValue":a[1]||(a[1]=l=>_(m)?m.value=l:null),label:"Password",rules:[t(y)],type:t(i)?"text":"password","error-messages":t(p).password,"append-inner-icon":t(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[2]||(a[2]=l=>i.value=!t(i))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),e($,{class:"mt-5",block:"",type:"submit"},{default:s(()=>[h(" Login ")]),_:1})]),_:1}),t(n)?(V(),T("span",Y,[e(F,{class:"mr-2",icon:"mdi-info"}),h(P(t(n)),1)])):R("",!0)]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1}))}};typeof v=="function"&&v(Z);export{Z as default};
