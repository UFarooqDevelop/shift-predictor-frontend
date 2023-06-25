import{k as c,a5 as D,O as R,q as i,o as _,b as z,w as l,p as t,m as e,ap as x,z as m,y as d,c as g,a as F,F as O,a8 as q,af as M,x as n,aI as Q,r as j,ag as k}from"./index.e5c1e8e1.js";import{u as G}from"./useInvoiceStore.32ef2b6e.js";import{a as H}from"./formatters.2778bb47.js";import{V as T}from"./VSelect.e14f290d.js";import{V}from"./VBtn.c5180d72.js";import{V as C}from"./VSpacer.d0e97666.js";import{V as J}from"./VTextField.8a91b29c.js";import{c as L,V as K}from"./VCard.8e399742.js";import{V as N}from"./VDivider.b5a2ab1e.js";import{V as W}from"./VTable.663d351a.js";import{V as X}from"./VPagination.cabbc3ca.js";import{V as Y}from"./VTooltip.56020e5e.js";import{V as B}from"./VAvatar.d497555d.js";import{V as Z}from"./VImg.10863b21.js";import{V as tt}from"./VChip.4163bfd2.js";import{V as et}from"./VMenu.0bbfb376.js";import{V as at,a as w,b as y}from"./VList.41b2bbf9.js";import"./index.0d4b9ec4.js";import"./forwardRefs.c003b6b8.js";import"./VCheckboxBtn.3db128f5.js";import"./VSelectionControl.7512a01f.js";import"./router.0c602970.js";import"./VInput.cc0bea53.js";import"./index.1bcc5918.js";import"./dialog-transition.7c9dd6d0.js";import"./easing.36b781ab.js";import"./position.2438c506.js";/* empty css                   */import"./VField.84115b4a.js";import"./VCounter.4b321610.js";import"./scopeId.4b7ab931.js";import"./VOverlay.ad441d0c.js";import"./lazy.5465d1f6.js";const lt={class:"d-flex align-center",style:{width:"135px"}},ot=e("span",{class:"text-no-wrap me-3"},"Show:",-1),st={class:"me-3"},nt={class:"d-flex align-center flex-wrap gap-4"},it={class:"invoice-list-filter"},rt={class:"invoice-list-filter"},ct={class:"text-uppercase"},dt=e("th",{scope:"col"}," #ID ",-1),ut={scope:"col",class:"text-center"},pt=e("th",{scope:"col"}," CLIENT ",-1),mt=e("th",{scope:"col",class:"text-center"}," TOTAL ",-1),_t=e("th",{scope:"col"}," Issued Date ",-1),ft=e("th",{scope:"col",class:"text-center"}," BALANCE ",-1),vt=e("th",{scope:"col"}," ACTIONS ",-1),ht={class:"text-center"},xt={class:"mb-0"},Vt={class:"mb-0"},bt={class:"mb-0"},gt={class:"d-flex align-center"},wt={key:1},yt={class:"d-flex flex-column"},St={class:"text-base font-weight-medium mb-0"},It={class:"text-disabled text-sm"},Pt={class:"text-center"},Dt={class:"text-center"},zt={style:{width:"8rem"}},kt=e("tr",null,[e("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),Tt=[kt],Ct={class:"text-sm text-disabled"},pe={__name:"index",setup(Lt){const A=G(),f=c(""),v=c(),u=c(10),r=c(1),h=c(1),S=c(0),p=c([]),I=c([]);D(()=>{A.fetchInvoices({q:f.value,status:v.value,perPage:u.value,currentPage:r.value}).then(o=>{p.value=o.data.invoices,h.value=o.data.totalPage,S.value=o.data.totalInvoices}).catch(o=>{console.log(o)})}),D(()=>{r.value>h.value&&(r.value=h.value)});const E=R(()=>{const o=p.value.length?(r.value-1)*u.value+1:0,s=p.value.length+(r.value-1)*u.value;return`Showing ${o} to ${s} of ${S.value} entries`}),P=(o,s)=>o===s?{status:"Unpaid",chip:{color:"error"}}:o===0?{status:"Paid",chip:{color:"success"}}:{status:o,chip:{variant:"text"}},b=o=>o==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:o==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:o==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:o==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:o==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:o==="Past Due"?{variant:"error",icon:"tabler-alert-circle"}:{variant:"secondary",icon:"tabler-x"};return(o,s)=>{const $=j("RouterLink");return i(p)?(_(),z(K,{key:0,id:"invoice-list"},{default:l(()=>[t(L,{class:"d-flex align-center flex-wrap gap-4"},{default:l(()=>[e("div",lt,[ot,t(T,{modelValue:i(u),"onUpdate:modelValue":s[0]||(s[0]=a=>x(u)?u.value=a:null),density:"compact",items:[10,20,30,50]},null,8,["modelValue"])]),e("div",st,[t(V,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:l(()=>[m(" Create invoice ")]),_:1})]),t(C),e("div",nt,[e("div",it,[t(J,{modelValue:i(f),"onUpdate:modelValue":s[1]||(s[1]=a=>x(f)?f.value=a:null),placeholder:"Search Invoice",density:"compact"},null,8,["modelValue"])]),e("div",rt,[t(T,{modelValue:i(v),"onUpdate:modelValue":s[2]||(s[2]=a=>x(v)?v.value=a:null),label:"Select Status",clearable:"","clear-icon":"tabler-x","single-line":"",items:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"]},null,8,["modelValue"])])])]),_:1}),t(N),t(W,{class:"text-no-wrap invoice-list-table"},{default:l(()=>[e("thead",ct,[e("tr",null,[dt,e("th",ut,[t(d,{icon:"tabler-trending-up"})]),pt,mt,_t,ft,vt])]),e("tbody",null,[(_(!0),g(O,null,F(i(p),a=>(_(),g("tr",{key:a.id,style:{height:"3.75rem"}},[e("td",null,[t($,{to:{name:"apps-invoice-preview-id",params:{id:a.id}}},{default:l(()=>[m(" #"+n(a.id),1)]),_:2},1032,["to"])]),e("td",ht,[t(Y,null,{activator:l(({props:U})=>[t(B,k({size:30},U,{color:b(a.invoiceStatus).variant,variant:"tonal"}),{default:l(()=>[t(d,{size:20,icon:b(a.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:l(()=>[e("p",xt,n(a.invoiceStatus),1),e("p",Vt," Balance: "+n(a.balance),1),e("p",bt," Due date: "+n(a.dueDate),1)]),_:2},1024)]),e("td",null,[e("div",gt,[t(B,{size:"34",color:b(a.invoiceStatus).variant,variant:"tonal",class:"me-3"},{default:l(()=>[a.avatar.length?(_(),z(Z,{key:0,src:a.avatar},null,8,["src"])):(_(),g("span",wt,n(i(H)(a.client.name)),1))]),_:2},1032,["color"]),e("div",yt,[e("h6",St,n(a.client.name),1),e("span",It,n(a.client.companyEmail),1)])])]),e("td",Pt," $"+n(a.total),1),e("td",null,n(a.issuedDate),1),e("td",Dt,[t(tt,k({label:""},P(a.balance,a.total).chip,{size:"small"}),{default:l(()=>[m(n(P(a.balance,a.total).status),1)]),_:2},1040)]),e("td",zt,[t(V,{icon:"",variant:"text",color:"default",size:"x-small"},{default:l(()=>[t(d,{icon:"tabler-mail",size:22})]),_:1}),t(V,{icon:"",variant:"text",color:"default",size:"x-small",to:{name:"apps-invoice-preview-id",params:{id:a.id}}},{default:l(()=>[t(d,{size:22,icon:"tabler-eye"})]),_:2},1032,["to"]),t(V,{icon:"",variant:"text",color:"default",size:"x-small"},{default:l(()=>[t(d,{size:22,icon:"tabler-dots-vertical"}),t(et,{activator:"parent"},{default:l(()=>[t(at,null,{default:l(()=>[t(w,{value:"download"},{prepend:l(()=>[t(d,{size:"24",class:"me-3",icon:"tabler-download"})]),default:l(()=>[t(y,null,{default:l(()=>[m("Download")]),_:1})]),_:1}),t(w,{to:{name:"apps-invoice-edit-id",params:{id:a.id}}},{prepend:l(()=>[t(d,{size:"24",class:"me-3",icon:"tabler-pencil"})]),default:l(()=>[t(y,null,{default:l(()=>[m("Edit")]),_:1})]),_:2},1032,["to"]),t(w,{value:"duplicate"},{prepend:l(()=>[t(d,{size:"24",class:"me-3",icon:"tabler-stack"})]),default:l(()=>[t(y,null,{default:l(()=>[m("Duplicate")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),q(e("tfoot",null,Tt,512),[[M,!i(p).length]])]),_:1}),t(N),t(L,{class:"d-flex align-center flex-wrap gap-4 py-3"},{default:l(()=>[e("span",Ct,n(i(E)),1),t(C),t(X,{modelValue:i(r),"onUpdate:modelValue":s[3]||(s[3]=a=>x(r)?r.value=a:null),size:"small","total-visible":5,length:i(h),onNext:s[4]||(s[4]=a=>I.value=[]),onPrev:s[5]||(s[5]=a=>I.value=[])},null,8,["modelValue","length"])]),_:1})]),_:1})):Q("",!0)}}};export{pe as default};
