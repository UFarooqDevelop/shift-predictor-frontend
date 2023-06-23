import{aK as E,k as g,bb as Y,Q as B,O as M,o as V,b as C,w as t,p as l,z as i,q as s,ap as L,y as w,m as z,x as f,aI as R,aV as H,aT as F,U as O,c as T,F as K,a as P}from"./index.3b451135.js";import{V as Q,_ as G}from"./VDialog.16e25d7b.js";import{V as q,a as J,b as W,c as I}from"./VCard.956ab590.js";import{V as X}from"./VForm.64367eab.js";import{V as Z,a as _}from"./VRow.fd5da9e5.js";import{V as x}from"./VTextField.e023f519.js";import{V as $}from"./VBtn.6501e66c.js";import{h as j}from"./moment.9709ab41.js";import{V as h}from"./VDivider.a6fdab49.js";import{V as ee,a as ae,b as le,c as A}from"./VList.b0bc1e50.js";import{V as te}from"./VAvatar.eaf074d5.js";const oe={__name:"ShiftInfo",props:{shiftData:{type:Object,required:!0},isDialogVisible:{type:Boolean,required:!0}},emits:["update:modelValue","submit","update:isDialogVisible"],setup(S,{emit:v}){const m=S,n=g(structuredClone(Y(m.shiftData)));B(m,()=>{n.value=structuredClone(Y(m.shiftData))});const y=M(()=>{var o,a;return(((o=n.value)==null?void 0:o.start_time)||"N/A")+" - "+(((a=n.value)==null?void 0:a.end_time)||"N/A")}),r=g(!1),u=g(!1),c=g(""),b=M(()=>{var o;return((o=n.value)==null?void 0:o.us_action)===1?"Active":"Inactive"}),e=o=>{F.post("recomended_shifts/"+n.value.id,{...n.value||{},us_action:o,enjoyment_rating:r.value?1:(u.value,0)}).then(a=>{v("update:isDialogVisible",!1),v("submit",n.value)}).catch(a=>{console.log(a)})},p=o=>{var d,N,U;const a=(d=o==null?void 0:o.shift_date)==null?void 0:d.split("-"),k=a!=null&&a[(a==null?void 0:a.length)-1]?parseInt(a==null?void 0:a[(a==null?void 0:a.length)-1]):0;return console.log(new Date().getHours(),parseInt((N=o==null?void 0:o.end_time)==null?void 0:N.split(":")[0]),k),(o==null?void 0:o.us_action)===1&&(k<new Date().getDate()?(parseInt((U=o==null?void 0:o.end_time)==null?void 0:U.split(":")[0])<new Date().getHours(),!0):!1)},D=o=>{v("update:isDialogVisible",o)};return B([r,u],()=>{(r.value||u.value)&&n.value.us_action===1&&e(1)}),(o,a)=>{const k=G;return V(),C(Q,{width:o.$vuetify.display.smAndDown?"auto":700,"model-value":S.isDialogVisible,"onUpdate:modelValue":D},{default:t(()=>[l(k,{onClick:a[0]||(a[0]=d=>D(!1))}),l(q,{class:"pa-sm-14",style:{padding:"0 !important"}},{default:t(()=>[l(J,{class:"text-center"},{default:t(()=>[l(W,{class:"text-h5 mb-3"},{default:t(()=>[i(" Shift Details ")]),_:1})]),_:1}),l(I,null,{default:t(()=>[l(X,{class:"mt-6"},{default:t(()=>[l(Z,null,{default:t(()=>[l(_,{cols:"12",md:"6",lg:"4"},{default:t(()=>[l(x,{modelValue:s(n).location.address,"onUpdate:modelValue":a[1]||(a[1]=d=>s(n).location.address=d),label:"Location",readonly:""},null,8,["modelValue"])]),_:1}),l(_,{cols:"12",md:"6",lg:"4"},{default:t(()=>[l(x,{modelValue:s(n).shift_date,"onUpdate:modelValue":a[2]||(a[2]=d=>s(n).shift_date=d),label:"Date",readonly:""},null,8,["modelValue"])]),_:1}),l(_,{cols:"12",md:"6",lg:"4"},{default:t(()=>[l(x,{modelValue:s(y),"onUpdate:modelValue":a[3]||(a[3]=d=>L(y)?y.value=d:null),label:"Start/End Time",readonly:""},null,8,["modelValue"])]),_:1}),l(_,{cols:"12",md:"6"},{default:t(()=>[l(x,{modelValue:s(b),"onUpdate:modelValue":a[4]||(a[4]=d=>L(b)?b.value=d:null),label:"Status",readonly:""},null,8,["modelValue"])]),_:1}),p(s(n))?(V(),C(_,{key:0,cols:"12"},{default:t(()=>[l(I,{class:"pa-0 pb-2"},{default:t(()=>[i(" Did you enjoy this shift? "),l(_,{cols:"12"},{default:t(()=>[l(w,{class:"mr-2",color:s(r)?"primary":"grey",icon:"mdi-thumbs-up",onClick:a[5]||(a[5]=d=>(r.value=!s(r),u.value=!1))},null,8,["color"]),l(w,{class:"mr-2",color:s(u)?"primary":"grey",icon:"mdi-thumb-down",onClick:a[6]||(a[6]=d=>(u.value=!s(u),r.value=!1))},null,8,["color"])]),_:1}),s(c)?(V(),C(_,{key:0,class:"mt-0 pt-0 text-error",style:{"font-weight":"600"},cols:"12"},{default:t(()=>[z("span",null,f(s(c)),1)]),_:1})):R("",!0)]),_:1})]),_:1})):R("",!0),l(_,{cols:"12",class:"d-flex flex-wrap justify-start gap-4"},{default:t(()=>[l($,{disabled:p(s(n)),onClick:a[7]||(a[7]=H(d=>e(1),["stop"]))},{default:t(()=>[i(" Accept ")]),_:1},8,["disabled"]),l($,{disabled:p(s(n)),onClick:a[8]||(a[8]=d=>e(2))},{default:t(()=>[i(" Reject ")]),_:1},8,["disabled"]),l($,{disabled:p(s(n)),onClick:a[9]||(a[9]=d=>e(3))},{default:t(()=>[i(" Not Interested ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},se=E(oe,[["__scopeId","data-v-51c202a4"]]);const ne={key:0},de={key:1},ue={__name:"CardAdvanceSourceVisits",setup(S){const v=g([]),m=g(!1),n=g(),y=u=>{m.value=!0,n.value=u};O(()=>{r()});function r(){F.get("recomended_shifts").then(u=>{var c;v.value=(c=u.data)==null?void 0:c.data}).catch(u=>{console.log(u)})}return(u,c)=>(V(),C(q,{title:"Recommended Shifts","max-height":"550px",style:{"overflow-y":"auto"}},{default:t(()=>{var b;return[l(h,{class:"my-2"}),(b=s(v))!=null&&b.length?(V(),T("span",ne,[l(I,null,{default:t(()=>[l(ee,{class:"card-list"},{default:t(()=>[(V(!0),T(K,null,P(s(v),e=>(V(),C(ae,{key:e.id},{prepend:t(()=>[l(te,{border:!1,size:"34",color:(e==null?void 0:e.us_action)===0?"primary":"success",circle:""},{default:t(()=>[l(w,{icon:(e==null?void 0:e.us_action)===1?"tabler-check":"tabler-plus",onClick:p=>y(e)},null,8,["icon","onClick"])]),_:2},1032,["color"])]),default:t(()=>[l(le,{class:"font-weight-semibold"},{default:t(()=>{var p,D;return[i(f((p=e==null?void 0:e.location)!=null&&p.address?(D=e==null?void 0:e.location)==null?void 0:D.address:""),1)]}),_:2},1024),l(A,null,{default:t(()=>[i(f(e!=null&&e.shift_date?s(j)(e==null?void 0:e.shift_date).format("DD/MM/YYYY"):"")+" @ "+f(e!=null&&e.start_time?e==null?void 0:e.start_time:""),1)]),_:2},1024),l(A,null,{default:t(()=>[i(f(e!=null&&e.updated_at?s(j)(e==null?void 0:e.updated_at).format("DD/MM/YYYY"):""),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l(se,{isDialogVisible:s(m),"onUpdate:isDialogVisible":c[0]||(c[0]=e=>L(m)?m.value=e:null),"shift-data":s(n),onSubmit:r},null,8,["isDialogVisible","shift-data"])])):(V(),T("span",de,[l(I,{class:"text-center text-info"},{default:t(()=>[l(w,{class:"mr-2"},{default:t(()=>[i("mdi-info")]),_:1}),i(" No Data Available ")]),_:1})]))]}),_:1}))}},De=E(ue,[["__scopeId","data-v-52461f6d"]]);export{De as C};
