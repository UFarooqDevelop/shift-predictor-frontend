import{C as re}from"./CardAdvanceSourceVisits.03ccc4c0.js";/* empty css                                                                     */import{aK as Z,k as p,o as _,b as k,w as n,p as a,m as t,z as b,x as v,q as o,cf as q,ce as ee,d as se,O as D,U as oe,Q as ce,aT as U,ap as T,c as S,F as H,a as le,aI as te,cW as R,r as fe}from"./index.e64df15f.js";import{V as ae}from"./VSpacer.5572a22c.js";import{c as ue,V as P}from"./VCard.83701cac.js";import{V as me,a as j,b as E}from"./VList.3284ee02.js";import pe from"./calendar.305b7c85.js";import{a as f,V as $}from"./VRow.44a0774f.js";import{V as _e}from"./VDivider.f14d7027.js";import{V as de}from"./VTextField.c5daeec6.js";import{V as ie}from"./VTable.18564e11.js";import{V as ve}from"./VPagination.d85da9b2.js";import{V as ne}from"./VSelect.2f3ad3e7.js";import{V as L}from"./VCheckbox.b419b51e.js";import{V as ge}from"./VBtn.e5e897d5.js";import{a as he}from"./formatters.2778bb47.js";import{V as ye}from"./VAvatar.c8e7782f.js";import{V as Ve}from"./VImg.1f0b6293.js";import{V as we,a as Ne}from"./VTabs.2aa0ef9a.js";import{V as be,a as X}from"./VWindowItem.91401ec2.js";import"./VDialog.c28267ac.js";import"./scopeId.4fd431f4.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.882dd49d.js";import"./router.7fdf4318.js";import"./lazy.c871e1a1.js";import"./easing.36b781ab.js";import"./dialog-transition.253e1d33.js";import"./VForm.442a2ac4.js";import"./VInput.e37c48cf.js";import"./index.e4d4f866.js";import"./position.771ba387.js";import"./VMain.1fbeb6a2.js";import"./ssrBoot.5cf129ba.js";import"./AppDateTimePicker.20afca42.js";import"./VField.d8105e01.js";/* empty css                   */import"./VCounter.eeb76e28.js";import"./VMenu.242d485f.js";import"./VCheckboxBtn.e50dc79e.js";import"./VSelectionControl.b09908f4.js";import"./VChip.7bddd4ad.js";import"./index.0d4b9ec4.js";import"./VSlideGroup.eaab063f.js";const W=d=>(q("data-v-7161c11b"),d=d(),ee(),d),xe={class:"text-base font-weight-semibold w-25"},ke=W(()=>t("span",{class:"ml-lg-15"},null,-1)),Te={class:"text-body-2"},Se={class:"text-base font-weight-semibold w-25"},Ie=W(()=>t("span",{class:"ml-lg-15"},null,-1)),Ce={class:"text-body-2 ml-lg-8"},De={class:"text-base font-weight-semibold w-25"},Ue=W(()=>t("span",{class:"ml-lg-15"},null,-1)),Pe={class:"text-body-2 ml-lg-9"},$e={class:"text-base font-weight-semibold w-25"},Me=W(()=>t("span",{class:"ml-lg-15"},null,-1)),Ye={class:"text-body-2 ml-lg-7"},Be={class:"text-base font-weight-semibold w-25"},Fe=W(()=>t("span",{class:"ml-lg-15"},null,-1)),je={class:"text-body-2 ml-lg-8"},Ee={__name:"UserInfoCard",setup(d){const e=p(JSON.parse(localStorage.getItem("userData"))||{});return(u,i)=>(_(),k(P,{title:"Information",style:{height:"550px","overflow-y":"auto"}},{default:n(()=>[a(ae),a(ue,null,{default:n(()=>[a(me,{class:"card-list"},{default:n(()=>[a(j,null,{default:n(()=>[a(E,null,{default:n(()=>[t("h6",xe,[b(" Reference: "),ke,t("span",Te,v(o(e).profile.reference),1)])]),_:1})]),_:1}),a(j,null,{default:n(()=>[a(E,null,{default:n(()=>[t("h6",Se,[b(" Name: "),Ie,t("span",Ce,v(o(e).username),1)])]),_:1})]),_:1}),a(j,null,{default:n(()=>[a(E,null,{default:n(()=>[t("h6",De,[b(" Email: "),Ue,t("span",Pe,v(o(e).email),1)])]),_:1})]),_:1}),a(j,null,{default:n(()=>[a(E,null,{default:n(()=>[t("h6",$e,[b(" Phone: "),Me,t("span",Ye,v(o(e).profile.phone_number),1)])]),_:1})]),_:1}),a(j,null,{default:n(()=>[a(E,null,{default:n(()=>{var h;return[t("h6",Be,[b(" Driver: "),Fe,t("span",je,v((h=o(e).profile)!=null&&h.is_driver?"Yes":"No"),1)])]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Le=Z(Ee,[["__scopeId","data-v-7161c11b"]]),We=se({__name:"OverView",setup(d){return(e,u)=>(_(),k($,null,{default:n(()=>[a(f,{cols:"12",class:"d-lg-flex flex-lg-row pa-0"},{default:n(()=>[a(f,{cols:"12",lg:"6",md:"12"},{default:n(()=>[a(Le)]),_:1}),a(_e,{class:"mx-2"}),a(f,{cols:"12",lg:"6",md:"12"},{default:n(()=>[a(P,null,{default:n(()=>[a($,null,{default:n(()=>[a(f,{cols:"12"},{default:n(()=>[a(re)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(f,{cols:"12"},{default:n(()=>[a(pe)]),_:1})]),_:1}))}});const Ae=d=>(q("data-v-395f2c81"),d=d(),ee(),d),Qe=Ae(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col","aria-sort":"ascending"}," QUALIFICATION "),t("th",{scope:"col"}," CERTIFICATE NUMBER "),t("th",{scope:"col"}," ISSUE DATE "),t("th",{scope:"col"}," EXPIRY DATE ")])],-1)),Oe={class:"d-flex align-center"},Re={class:"text-base mb-0"},He={class:"d-flex align-center"},Je={class:"text-base mb-0"},ze={class:"d-flex align-center"},Ke={class:"text-base mb-0"},Xe={class:"d-flex align-center"},Ge={class:"text-base mb-0"},G=10,Ze={__name:"QualificationCharts",setup(d){const e=p("");p("");const u=p([]);p(1);const i=p(1),h=D(()=>(i.value-1)*G),y=D(()=>h.value+G),r=D(()=>u.value.length),J=D(()=>Math.ceil(r.value/G));oe(()=>{K()});const z=D(()=>u.value.slice(h.value,y.value)),N=D(()=>{if(!e.value)return z.value;const V=e.value.toLowerCase().trim();return u.value.filter(w=>{var s;return(s=w.training)==null?void 0:s.name.toLowerCase().includes(V)}).slice(h.value,y.value)});ce(e,V=>{i.value=1});function K(){U.get("/my_courses").then(V=>{u.value=V.data.data}).catch(V=>{console.log(V)})}return(V,w)=>(_(),k(P,{title:"Qualifications"},{default:n(()=>[a(ae),a($,{class:"px-5 d-lg-flex justify-lg-end"},{default:n(()=>[a(f,{cols:"3"},{default:n(()=>[a(de,{modelValue:o(e),"onUpdate:modelValue":w[0]||(w[0]=s=>T(e)?e.value=s:null),placeholder:"Search","prepend-inner-icon":"tabler-search",outlined:""},null,8,["modelValue"])]),_:1})]),_:1}),o(u).length?(_(),k(ie,{key:0,items:o(N),sortable:"",hover:"",class:"text-no-wrap pa-8"},{default:n(()=>[Qe,t("tbody",null,[(_(!0),S(H,null,le(o(N),s=>{var c,g;return _(),S("tr",{key:s.id,style:{height:"3.75rem"}},[t("td",null,[t("div",Oe,[t("div",null,[t("p",Re,v((c=s.training)==null?void 0:c.name),1)])])]),t("td",null,[t("div",He,[t("div",null,[t("p",Je,v(s.license_id),1)])])]),t("td",null,[t("div",ze,[t("div",null,[t("p",Ke,v(V.$filters.CustomFormatDate((g=s==null?void 0:s.created_at)==null?void 0:g.split("T")[0])),1)])])]),t("td",null,[t("div",Xe,[t("div",null,[t("p",Ge,v(V.$filters.CustomFormatDate(s.expiry_date)),1)])])])])}),128))])]),_:1},8,["items"])):te("",!0),o(u).length?(_(),k(ve,{key:1,modelValue:o(i),"onUpdate:modelValue":w[1]||(w[1]=s=>T(i)?i.value=s:null),length:o(J),"prev-icon":"mdi-chevron-left","next-icon":"mdi-chevron-right",class:"mt-8",onPageChanged:w[2]||(w[2]=s=>i.value=s)},null,8,["modelValue","length"])):te("",!0)]),_:1}))}},qe=Z(Ze,[["__scopeId","data-v-395f2c81"]]);const el=d=>(q("data-v-ebfcc5b1"),d=d(),ee(),d),ll=el(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"}),t("th",{scope:"col"}," Morning "),t("th",{scope:"col"}," Afternoon "),t("th",{scope:"col"}," Evening "),t("th",{scope:"col"}," Awake Night "),t("th",{scope:"col"}," Sleep Night ")])],-1)),al={__name:"PreferencesChart",setup(d){const e=p([{id:1,name:"Monday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:2,name:"Tuesday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:3,name:"Wednesday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:4,name:"Thursday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:5,name:"Friday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:6,name:"Saturday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:7,name:"Sunday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1}]),u=p([]),i=p([]),h=p(""),y=p([]),r=p([]);oe(()=>{J(),z(),K()});function J(){U.get("/locations").then(s=>{y.value=s.data.data}).catch(s=>{console.log(s)})}function z(){U.get("/towns").then(s=>{r.value=s.data.data}).catch(s=>{console.log(s)})}const N=p({});function K(){U.get("/my_preferencs").then(s=>{var c,g,l,m,A,Q,O,M,Y,B,F;N.value=(c=s.data.data)==null?void 0:c[0],u.value=(Q=(A=(m=(l=(g=s.data)==null?void 0:g.data[0])==null?void 0:l.preferred_locations)==null?void 0:m.split(","))==null?void 0:A.map(I=>y.value.find(C=>C.id===parseInt(I))))==null?void 0:Q.filter(Boolean),i.value=(F=(B=(Y=(M=(O=s.data)==null?void 0:O.data[0])==null?void 0:M.preferred_towns)==null?void 0:Y.split(","))==null?void 0:B.map(I=>r.value.find(C=>C.id===parseInt(I))))==null?void 0:F.filter(Boolean),h.value=s.data.data[0].updated_at?R(s.data.data[0].updated_at).format("DD/MM/YYYY"):R(s.data.data[0].created_at).format("DD/MM/YYYY"),V(s.data.data)}).catch(s=>{console.log(s)})}function V(s){e.value.forEach((c,g)=>{const l=s[g];l!=null&&l.Monday&&(e.value[0].morning=l.Monday.includes("1"),e.value[0].afternoon=l.Monday.includes("2"),e.value[0].evening=l.Monday.includes("3"),e.value[0].awakeNight=l.Monday.includes("4"),e.value[0].sleepNight=l.Monday.includes("5")),l!=null&&l.Tuesday&&(e.value[1].morning=l.Tuesday.includes("1"),e.value[1].afternoon=l.Tuesday.includes("2"),e.value[1].evening=l.Tuesday.includes("3"),e.value[1].awakeNight=l.Tuesday.includes("4"),e.value[1].sleepNight=l.Tuesday.includes("5")),l!=null&&l.Wednesday&&(e.value[2].morning=l.Wednesday.includes("1"),e.value[2].afternoon=l.Wednesday.includes("2"),e.value[2].evening=l.Wednesday.includes("3"),e.value[2].awakeNight=l.Wednesday.includes("4"),e.value[2].sleepNight=l.Wednesday.includes("5")),l!=null&&l.Thursday&&(e.value[3].morning=l.Thursday.includes("1"),e.value[3].afternoon=l.Thursday.includes("2"),e.value[3].evening=l.Thursday.includes("3"),e.value[3].awakeNight=l.Thursday.includes("4"),e.value[3].sleepNight=l.Thursday.includes("5")),l!=null&&l.Friday&&(e.value[4].morning=l.Friday.includes("1"),e.value[4].afternoon=l.Friday.includes("2"),e.value[4].evening=l.Friday.includes("3"),e.value[4].awakeNight=l.Friday.includes("4"),e.value[4].sleepNight=l.Friday.includes("5")),l!=null&&l.Saturday&&(e.value[5].morning=l.Saturday.includes("1"),e.value[5].afternoon=l.Saturday.includes("2"),e.value[5].evening=l.Saturday.includes("3"),e.value[5].awakeNight=l.Saturday.includes("4"),e.value[5].sleepNight=l.Saturday.includes("5")),l!=null&&l.Sunday&&(e.value[6].morning=l.Sunday.includes("1"),e.value[6].afternoon=l.Sunday.includes("2"),e.value[6].evening=l.Sunday.includes("3"),e.value[6].awakeNight=l.Sunday.includes("4"),e.value[6].sleepNight=l.Sunday.includes("5"))})}const w=()=>{var Y,B,F,I,C;const s=JSON.parse(localStorage.getItem("userProfile")||"{}").id,c=[e.value[0].morning?"1":null,e.value[0].afternoon?"2":null,e.value[0].evening?"3":null,e.value[0].awakeNight?"4":null,e.value[0].sleepNight?"5":null].filter(Boolean).join(","),g=[e.value[1].morning?"1":null,e.value[1].afternoon?"2":null,e.value[1].evening?"3":null,e.value[1].awakeNight?"4":null,e.value[1].sleepNight?"5":null].filter(Boolean).join(","),l=[e.value[2].morning?"1":null,e.value[2].afternoon?"2":null,e.value[2].evening?"3":null,e.value[2].awakeNight?"4":null,e.value[2].sleepNight?"5":null].filter(Boolean).join(","),m=[e.value[3].morning?"1":null,e.value[3].afternoon?"2":null,e.value[3].evening?"3":null,e.value[3].awakeNight?"4":null,e.value[3].sleepNight?"5":null].filter(Boolean).join(","),A=[e.value[4].morning?"1":null,e.value[4].afternoon?"2":null,e.value[4].evening?"3":null,e.value[4].awakeNight?"4":null,e.value[4].sleepNight?"5":null].filter(Boolean).join(","),Q=[e.value[5].morning?"1":null,e.value[5].afternoon?"2":null,e.value[5].evening?"3":null,e.value[5].awakeNight?"4":null,e.value[5].sleepNight?"5":null].filter(Boolean).join(","),O=[e.value[6].morning?"1":null,e.value[6].afternoon?"2":null,e.value[6].evening?"3":null,e.value[6].awakeNight?"4":null,e.value[6].sleepNight?"5":null].filter(Boolean).join(","),M={...N.value?N.value:{},profile_id:s,preferred_locations:(Y=u.value)==null?void 0:Y.join(","),preferred_towns:(B=i.value)==null?void 0:B.join(","),updated_at:R().format("YYYY-MM-DD HH:mm:ss"),created_at:((F=N.value)==null?void 0:F.created_at)||R().format("YYYY-MM-DD HH:mm:ss"),Monday:c,Tuesday:g,Wednesday:l,Thursday:m,Friday:A,Saturday:Q,Sunday:O};(I=N.value)!=null&&I.id?U.post("my_preferencs/save",M).then(x=>{x.data.status==="success"&&alert("Preferences updated successfully")}).catch(x=>{console.log(x)}):U.post("my_preferencs/"+((C=N.value)==null?void 0:C.id),M).then(x=>{x.data.status==="success"&&alert("Preferences updated successfully")}).catch(x=>{console.log(x)})};return(s,c)=>{const g=fe("v-text");return _(),k(P,{title:"Preferences"},{default:n(()=>[a(ae),a($,{class:"pa-5"},{default:n(()=>[a(f,{cols:"4"},{default:n(()=>[a(g,null,{default:n(()=>[b(" Preferred Location ")]),_:1}),a(ne,{label:"",modelValue:o(u),"onUpdate:modelValue":c[0]||(c[0]=l=>T(u)?u.value=l:null),items:o(y),"item-value":"id","item-title":"address",multiple:"",outlined:"",clearable:""},null,8,["modelValue","items"])]),_:1}),a(f,{cols:"4"},{default:n(()=>[a(g,null,{default:n(()=>[b(" Preferred Towns ")]),_:1}),a(ne,{modelValue:o(i),"onUpdate:modelValue":c[1]||(c[1]=l=>T(i)?i.value=l:null),items:o(r),"item-title":"town","item-value":"id",label:"",outlined:"",multiple:"",clearable:""},null,8,["modelValue","items"])]),_:1}),a(f,{cols:"4"},{default:n(()=>[a(g,null,{default:n(()=>[b(" Last Updated ")]),_:1}),a(de,{modelValue:o(h),"onUpdate:modelValue":c[2]||(c[2]=l=>T(h)?h.value=l:null),readonly:"",placeholder:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1}),a(ie,{hover:"",class:"text-no-wrap pa-8"},{default:n(()=>[ll,t("tbody",null,[(_(!0),S(H,null,le(o(e),l=>(_(),S("tr",{key:l.id},[t("td",null,v(l.name),1),t("td",null,[a(L,{modelValue:l.morning,"onUpdate:modelValue":m=>l.morning=m},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[a(L,{modelValue:l.afternoon,"onUpdate:modelValue":m=>l.afternoon=m},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[a(L,{modelValue:l.evening,"onUpdate:modelValue":m=>l.evening=m},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[a(L,{modelValue:l.awakeNight,"onUpdate:modelValue":m=>l.awakeNight=m},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[a(L,{modelValue:l.sleepNight,"onUpdate:modelValue":m=>l.sleepNight=m},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),a($,{class:"pa-5"},{default:n(()=>[a(f,{cols:"12"},{default:n(()=>[a(ge,{color:"primary",class:"ml-4",onClick:w},{default:n(()=>[b(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1})}}},tl=Z(al,[["__scopeId","data-v-ebfcc5b1"]]),nl={key:1,class:"text-5xl font-weight-semibold"},sl={class:"text-h4"},ol={class:"text-body-4"},Gl=se({__name:"home",setup(d){const e=JSON.parse(localStorage.getItem("userData")||"null"),u=p(null),i=[{title:"Home",isDisabled:!1},{title:"Qualifications",isDisabled:!0},{title:"Preferences",isDisabled:!0}];return(h,y)=>(_(),S(H,null,[a(P,null,{default:n(()=>[a(f,{cols:"12"},{default:n(()=>[a($,null,{default:n(()=>[a(f,{cols:"12",md:"3",lg:"2",class:"d-flex justify-end"},{default:n(()=>[a(ye,{rounded:"",size:120,color:"primary",variant:"tonal"},{default:n(()=>[o(e).avatar?(_(),k(Ve,{key:0,src:o(e).avatar},null,8,["src"])):(_(),S("span",nl,v(o(he)(o(e).username)),1))]),_:1})]),_:1}),a(f,{cols:"12",md:"9",lg:"10"},{default:n(()=>[a(ue,null,{default:n(()=>{var r;return[t("h4",sl,v(o(e).username),1),t("p",ol,v((r=o(e))==null?void 0:r.reference),1)]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(P,{class:"mt-4"},{default:n(()=>[a(f,{cols:"12",md:"7",lg:"8"},{default:n(()=>[a(we,{modelValue:o(u),"onUpdate:modelValue":y[0]||(y[0]=r=>T(u)?u.value=r:null),class:"v-tabs--grow"},{default:n(()=>[(_(),S(H,null,le(i,r=>a(Ne,{key:r.title},{default:n(()=>[t("span",null,v(r.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{cols:"12",class:"ma-0 pa-0"},{default:n(()=>[a(be,{modelValue:o(u),"onUpdate:modelValue":y[1]||(y[1]=r=>T(u)?u.value=r:null),class:"mt-6 ma-0 pa-0"},{default:n(()=>[a(X,null,{default:n(()=>[a(We)]),_:1}),a(X,null,{default:n(()=>[a(qe)]),_:1}),a(X,null,{default:n(()=>[a(tl)]),_:1})]),_:1},8,["modelValue"])]),_:1})],64))}});export{Gl as default};
