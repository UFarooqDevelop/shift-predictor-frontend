import{C as re}from"./CardAdvanceSourceVisits.2335a820.js";/* empty css                                                                     */import{aK as Z,k as p,o as _,b as k,w as n,p as a,m as t,z as b,x as v,q as o,cf as q,ce as ee,d as se,O as $,U as oe,Q as ce,aT as M,ap as T,c as S,F as z,a as le,aI as te,cW as J,r as fe}from"./index.f3a873c9.js";import{V as ae}from"./VSpacer.d33fdffd.js";import{c as ue,V as P}from"./VCard.9e396196.js";import{V as me,a as L,b as W}from"./VList.c8c965d0.js";import pe from"./calendar.1d0b8aaf.js";import{a as f,V as Y}from"./VRow.d783d60c.js";import{V as _e}from"./VDivider.39d92552.js";import{V as de}from"./VTextField.efd31a75.js";import{V as ie}from"./VTable.ab7f728b.js";import{V as ve}from"./VPagination.55aa685e.js";import{V as ne}from"./VSelect.aff18b1d.js";import{V as A}from"./VCheckbox.e153de4f.js";import{V as ge}from"./VBtn.095583cc.js";import{a as he}from"./formatters.2778bb47.js";import{V as ye}from"./VAvatar.b8bd2c01.js";import{V as Ve}from"./VImg.c8e19ad1.js";import{V as we,a as Ne}from"./VTabs.190cc78f.js";import{V as be,a as X}from"./VWindowItem.cef4118e.js";import"./VDialog.50ba79fb.js";import"./scopeId.66623688.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.2df53f03.js";import"./router.95c39f17.js";import"./lazy.5e6a9972.js";import"./easing.36b781ab.js";import"./dialog-transition.85d740f2.js";import"./VForm.25723817.js";import"./VInput.7c775bf8.js";import"./index.3dd6b812.js";import"./position.a7c75c96.js";import"./VMain.d345f159.js";import"./ssrBoot.0b3ca931.js";import"./AppDateTimePicker.f79a9776.js";import"./VField.6b025d9e.js";/* empty css                   */import"./VCounter.d3962262.js";import"./VMenu.c40ba8bc.js";import"./VCheckboxBtn.a47347aa.js";import"./VSelectionControl.5037ca95.js";import"./VChip.f79f094a.js";import"./index.0d4b9ec4.js";import"./VSlideGroup.124aa623.js";const Q=i=>(q("data-v-7161c11b"),i=i(),ee(),i),xe={class:"text-base font-weight-semibold w-25"},ke=Q(()=>t("span",{class:"ml-lg-15"},null,-1)),Te={class:"text-body-2"},Se={class:"text-base font-weight-semibold w-25"},Ie=Q(()=>t("span",{class:"ml-lg-15"},null,-1)),Ce={class:"text-body-2 ml-lg-8"},De={class:"text-base font-weight-semibold w-25"},Ue=Q(()=>t("span",{class:"ml-lg-15"},null,-1)),$e={class:"text-body-2 ml-lg-9"},Me={class:"text-base font-weight-semibold w-25"},Pe=Q(()=>t("span",{class:"ml-lg-15"},null,-1)),Ye={class:"text-body-2 ml-lg-7"},Be={class:"text-base font-weight-semibold w-25"},Fe=Q(()=>t("span",{class:"ml-lg-15"},null,-1)),je={class:"text-body-2 ml-lg-8"},Ee={__name:"UserInfoCard",setup(i){const e=p(JSON.parse(localStorage.getItem("userData"))||{});return(u,r)=>(_(),k(P,{title:"Information",style:{height:"550px","overflow-y":"auto"}},{default:n(()=>[a(ae),a(ue,null,{default:n(()=>[a(me,{class:"card-list"},{default:n(()=>[a(L,null,{default:n(()=>[a(W,null,{default:n(()=>[t("h6",xe,[b(" Reference: "),ke,t("span",Te,v(o(e).profile.reference),1)])]),_:1})]),_:1}),a(L,null,{default:n(()=>[a(W,null,{default:n(()=>[t("h6",Se,[b(" Name: "),Ie,t("span",Ce,v(o(e).username),1)])]),_:1})]),_:1}),a(L,null,{default:n(()=>[a(W,null,{default:n(()=>[t("h6",De,[b(" Email: "),Ue,t("span",$e,v(o(e).email),1)])]),_:1})]),_:1}),a(L,null,{default:n(()=>[a(W,null,{default:n(()=>[t("h6",Me,[b(" Phone: "),Pe,t("span",Ye,v(o(e).profile.phone_number),1)])]),_:1})]),_:1}),a(L,null,{default:n(()=>[a(W,null,{default:n(()=>{var h;return[t("h6",Be,[b(" Driver: "),Fe,t("span",je,v((h=o(e).profile)!=null&&h.is_driver?"Yes":"No"),1)])]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Le=Z(Ee,[["__scopeId","data-v-7161c11b"]]),We=se({__name:"OverView",setup(i){return(e,u)=>(_(),k(Y,null,{default:n(()=>[a(f,{cols:"12",class:"d-lg-flex flex-lg-row pa-0"},{default:n(()=>[a(f,{cols:"12",lg:"6",md:"12"},{default:n(()=>[a(Le)]),_:1}),a(_e,{class:"mx-2"}),a(f,{cols:"12",lg:"6",md:"12"},{default:n(()=>[a(P,null,{default:n(()=>[a(Y,null,{default:n(()=>[a(f,{cols:"12"},{default:n(()=>[a(re)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(f,{cols:"12"},{default:n(()=>[a(pe)]),_:1})]),_:1}))}});const Ae=i=>(q("data-v-395f2c81"),i=i(),ee(),i),Qe=Ae(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col","aria-sort":"ascending"}," QUALIFICATION "),t("th",{scope:"col"}," CERTIFICATE NUMBER "),t("th",{scope:"col"}," ISSUE DATE "),t("th",{scope:"col"}," EXPIRY DATE ")])],-1)),Oe={class:"d-flex align-center"},Re={class:"text-base mb-0"},He={class:"d-flex align-center"},Je={class:"text-base mb-0"},ze={class:"d-flex align-center"},Ke={class:"text-base mb-0"},Xe={class:"d-flex align-center"},Ge={class:"text-base mb-0"},G=10,Ze={__name:"QualificationCharts",setup(i){const e=p("");p("");const u=p([]);p(1);const r=p(1),h=$(()=>(r.value-1)*G),V=$(()=>h.value+G),d=$(()=>u.value.length),I=$(()=>Math.ceil(d.value/G));oe(()=>{K()});const C=$(()=>u.value.slice(h.value,V.value)),y=$(()=>{if(!e.value)return C.value;const w=e.value.toLowerCase().trim();return u.value.filter(N=>{var s;return(s=N.training)==null?void 0:s.name.toLowerCase().includes(w)}).slice(h.value,V.value)});ce(e,w=>{r.value=1});function K(){M.get("/my_courses").then(w=>{u.value=w.data.data}).catch(w=>{console.log(w)})}return(w,N)=>(_(),k(P,{title:"Qualifications"},{default:n(()=>[a(ae),a(Y,{class:"px-5 d-lg-flex justify-lg-end"},{default:n(()=>[a(f,{cols:"3"},{default:n(()=>[a(de,{modelValue:o(e),"onUpdate:modelValue":N[0]||(N[0]=s=>T(e)?e.value=s:null),placeholder:"Search","prepend-inner-icon":"tabler-search",outlined:""},null,8,["modelValue"])]),_:1})]),_:1}),o(u).length?(_(),k(ie,{key:0,items:o(y),sortable:"",hover:"",class:"text-no-wrap pa-8"},{default:n(()=>[Qe,t("tbody",null,[(_(!0),S(z,null,le(o(y),s=>{var c,g;return _(),S("tr",{key:s.id,style:{height:"3.75rem"}},[t("td",null,[t("div",Oe,[t("div",null,[t("p",Re,v((c=s.training)==null?void 0:c.name),1)])])]),t("td",null,[t("div",He,[t("div",null,[t("p",Je,v(s.license_id),1)])])]),t("td",null,[t("div",ze,[t("div",null,[t("p",Ke,v(w.$filters.CustomFormatDate((g=s==null?void 0:s.created_at)==null?void 0:g.split("T")[0])),1)])])]),t("td",null,[t("div",Xe,[t("div",null,[t("p",Ge,v(w.$filters.CustomFormatDate(s.expiry_date)),1)])])])])}),128))])]),_:1},8,["items"])):te("",!0),o(u).length?(_(),k(ve,{key:1,modelValue:o(r),"onUpdate:modelValue":N[1]||(N[1]=s=>T(r)?r.value=s:null),length:o(I),"prev-icon":"mdi-chevron-left","next-icon":"mdi-chevron-right",class:"mt-8",onPageChanged:N[2]||(N[2]=s=>r.value=s)},null,8,["modelValue","length"])):te("",!0)]),_:1}))}},qe=Z(Ze,[["__scopeId","data-v-395f2c81"]]);const el=i=>(q("data-v-d6b13bd5"),i=i(),ee(),i),ll=el(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"}),t("th",{scope:"col"}," Morning "),t("th",{scope:"col"}," Afternoon "),t("th",{scope:"col"}," Evening "),t("th",{scope:"col"}," Awake Night "),t("th",{scope:"col"}," Sleep Night ")])],-1)),al={__name:"PreferencesChart",setup(i){const e=p([{id:1,name:"Monday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:2,name:"Tuesday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:3,name:"Wednesday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:4,name:"Thursday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:5,name:"Friday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:6,name:"Saturday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1},{id:7,name:"Sunday",morning:!1,afternoon:!1,evening:!1,awakeNight:!1,sleepNight:!1}]),u=p([]),r=p([]),h=p(""),V=p([]),d=p([]);oe(()=>{I(),C(),K()});function I(){M.get("/locations").then(s=>{V.value=s.data.data}).catch(s=>{console.log(s)})}function C(){M.get("/towns").then(s=>{d.value=s.data.data}).catch(s=>{console.log(s)})}const y=p({});function K(){M.get("/my_preferencs").then(s=>{var c,g,l,m,O,R,H,B,F,j,E;y.value=(c=s.data.data)==null?void 0:c[0],u.value=(R=(O=(m=(l=(g=s.data)==null?void 0:g.data[0])==null?void 0:l.preferred_locations)==null?void 0:m.split(","))==null?void 0:O.map(D=>V.value.find(U=>U.id===parseInt(D))))==null?void 0:R.filter(Boolean),r.value=(E=(j=(F=(B=(H=s.data)==null?void 0:H.data[0])==null?void 0:B.preferred_towns)==null?void 0:F.split(","))==null?void 0:j.map(D=>d.value.find(U=>U.id===parseInt(D))))==null?void 0:E.filter(Boolean),h.value=s.data.data[0].updated_at?J(s.data.data[0].updated_at).format("DD/MM/YYYY"):J(s.data.data[0].created_at).format("DD/MM/YYYY"),w(s.data.data)}).catch(s=>{console.log(s)})}function w(s){e.value.forEach((c,g)=>{const l=s[g];l!=null&&l.Monday&&(e.value[0].morning=l.Monday.includes("1"),e.value[0].afternoon=l.Monday.includes("2"),e.value[0].evening=l.Monday.includes("3"),e.value[0].awakeNight=l.Monday.includes("4"),e.value[0].sleepNight=l.Monday.includes("5")),l!=null&&l.Tuesday&&(e.value[1].morning=l.Tuesday.includes("1"),e.value[1].afternoon=l.Tuesday.includes("2"),e.value[1].evening=l.Tuesday.includes("3"),e.value[1].awakeNight=l.Tuesday.includes("4"),e.value[1].sleepNight=l.Tuesday.includes("5")),l!=null&&l.Wednesday&&(e.value[2].morning=l.Wednesday.includes("1"),e.value[2].afternoon=l.Wednesday.includes("2"),e.value[2].evening=l.Wednesday.includes("3"),e.value[2].awakeNight=l.Wednesday.includes("4"),e.value[2].sleepNight=l.Wednesday.includes("5")),l!=null&&l.Thursday&&(e.value[3].morning=l.Thursday.includes("1"),e.value[3].afternoon=l.Thursday.includes("2"),e.value[3].evening=l.Thursday.includes("3"),e.value[3].awakeNight=l.Thursday.includes("4"),e.value[3].sleepNight=l.Thursday.includes("5")),l!=null&&l.Friday&&(e.value[4].morning=l.Friday.includes("1"),e.value[4].afternoon=l.Friday.includes("2"),e.value[4].evening=l.Friday.includes("3"),e.value[4].awakeNight=l.Friday.includes("4"),e.value[4].sleepNight=l.Friday.includes("5")),l!=null&&l.Saturday&&(e.value[5].morning=l.Saturday.includes("1"),e.value[5].afternoon=l.Saturday.includes("2"),e.value[5].evening=l.Saturday.includes("3"),e.value[5].awakeNight=l.Saturday.includes("4"),e.value[5].sleepNight=l.Saturday.includes("5")),l!=null&&l.Sunday&&(e.value[6].morning=l.Sunday.includes("1"),e.value[6].afternoon=l.Sunday.includes("2"),e.value[6].evening=l.Sunday.includes("3"),e.value[6].awakeNight=l.Sunday.includes("4"),e.value[6].sleepNight=l.Sunday.includes("5"))})}const N=()=>{var F,j,E,D,U;const s=JSON.parse(localStorage.getItem("userProfile")||"{}").id,c=[e.value[0].morning?"1":null,e.value[0].afternoon?"2":null,e.value[0].evening?"3":null,e.value[0].awakeNight?"4":null,e.value[0].sleepNight?"5":null].filter(Boolean).join(","),g=[e.value[1].morning?"1":null,e.value[1].afternoon?"2":null,e.value[1].evening?"3":null,e.value[1].awakeNight?"4":null,e.value[1].sleepNight?"5":null].filter(Boolean).join(","),l=[e.value[2].morning?"1":null,e.value[2].afternoon?"2":null,e.value[2].evening?"3":null,e.value[2].awakeNight?"4":null,e.value[2].sleepNight?"5":null].filter(Boolean).join(","),m=[e.value[3].morning?"1":null,e.value[3].afternoon?"2":null,e.value[3].evening?"3":null,e.value[3].awakeNight?"4":null,e.value[3].sleepNight?"5":null].filter(Boolean).join(","),O=[e.value[4].morning?"1":null,e.value[4].afternoon?"2":null,e.value[4].evening?"3":null,e.value[4].awakeNight?"4":null,e.value[4].sleepNight?"5":null].filter(Boolean).join(","),R=[e.value[5].morning?"1":null,e.value[5].afternoon?"2":null,e.value[5].evening?"3":null,e.value[5].awakeNight?"4":null,e.value[5].sleepNight?"5":null].filter(Boolean).join(","),H=[e.value[6].morning?"1":null,e.value[6].afternoon?"2":null,e.value[6].evening?"3":null,e.value[6].awakeNight?"4":null,e.value[6].sleepNight?"5":null].filter(Boolean).join(","),B={...y.value?y.value:{},profile_id:s,preferred_locations:(F=u.value)==null?void 0:F.join(","),preferred_towns:(j=r.value)==null?void 0:j.join(","),updated_at:J().format("YYYY-MM-DD HH:mm:ss"),created_at:((E=y.value)==null?void 0:E.created_at)||J().format("YYYY-MM-DD HH:mm:ss"),Monday:c,Tuesday:g,Wednesday:l,Thursday:m,Friday:O,Saturday:R,Sunday:H};(D=y.value)!=null&&D.id?M.post("my_preferencs/"+((U=y.value)==null?void 0:U.id),B).then(x=>{alert("Preferences updated successfully"),x.data.status}).catch(x=>{console.log(x)}):M.post("my_preferencs/save",B).then(x=>{x.data.status}).catch(x=>{console.log(x)})};return(s,c)=>{const g=fe("v-text");return _(),k(P,{title:"Preferences"},{default:n(()=>[a(ae),a(Y,{class:"pa-5"},{default:n(()=>[a(f,{cols:"4"},{default:n(()=>[a(g,null,{default:n(()=>[b(" Preferred Location ")]),_:1}),a(ne,{label:"",modelValue:o(u),"onUpdate:modelValue":c[0]||(c[0]=l=>T(u)?u.value=l:null),items:o(V),"item-value":"id","item-title":"address",multiple:"",outlined:"",clearable:""},null,8,["modelValue","items"])]),_:1}),a(f,{cols:"4"},{default:n(()=>[a(g,null,{default:n(()=>[b(" Preferred Towns ")]),_:1}),a(ne,{modelValue:o(r),"onUpdate:modelValue":c[1]||(c[1]=l=>T(r)?r.value=l:null),items:o(d),"item-title":"town","item-value":"id",label:"",outlined:"",multiple:"",clearable:""},null,8,["modelValue","items"])]),_:1}),a(f,{cols:"4"},{default:n(()=>[a(g,null,{default:n(()=>[b(" Last Updated ")]),_:1}),a(de,{modelValue:o(h),"onUpdate:modelValue":c[2]||(c[2]=l=>T(h)?h.value=l:null),readonly:"",placeholder:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1}),a(ie,{hover:"",class:"text-no-wrap pa-8"},{default:n(()=>[ll,t("tbody",null,[(_(!0),S(z,null,le(o(e),l=>(_(),S("tr",{key:l.id},[t("td",null,v(l.name),1),t("td",null,[a(A,{modelValue:l.morning,"onUpdate:modelValue":m=>l.morning=m},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[a(A,{modelValue:l.afternoon,"onUpdate:modelValue":m=>l.afternoon=m},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[a(A,{modelValue:l.evening,"onUpdate:modelValue":m=>l.evening=m},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[a(A,{modelValue:l.awakeNight,"onUpdate:modelValue":m=>l.awakeNight=m},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[a(A,{modelValue:l.sleepNight,"onUpdate:modelValue":m=>l.sleepNight=m},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),a(Y,{class:"pa-5"},{default:n(()=>[a(f,{cols:"12"},{default:n(()=>[a(ge,{color:"primary",class:"ml-4",onClick:N},{default:n(()=>[b(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1})}}},tl=Z(al,[["__scopeId","data-v-d6b13bd5"]]),nl={key:1,class:"text-5xl font-weight-semibold"},sl={class:"text-h4"},ol={class:"text-body-4"},Gl=se({__name:"home",setup(i){const e=JSON.parse(localStorage.getItem("userData")||"null"),u=p(null),r=[{title:"Home",isDisabled:!1},{title:"Qualifications",isDisabled:!0},{title:"Preferences",isDisabled:!0}];return(h,V)=>(_(),S(z,null,[a(P,null,{default:n(()=>[a(f,{cols:"12"},{default:n(()=>[a(Y,null,{default:n(()=>[a(f,{cols:"12",md:"3",lg:"2",class:"d-flex justify-end"},{default:n(()=>[a(ye,{rounded:"",size:120,color:"primary",variant:"tonal"},{default:n(()=>{var d,I,C,y;return[(I=(d=o(e))==null?void 0:d.profile)!=null&&I.picture?(_(),k(Ve,{key:0,src:"data:image/jpeg;base64,"+((y=(C=o(e))==null?void 0:C.profile)==null?void 0:y.picture)},null,8,["src"])):(_(),S("span",nl,v(o(he)(o(e).username)),1))]}),_:1})]),_:1}),a(f,{cols:"12",md:"9",lg:"10"},{default:n(()=>[a(ue,null,{default:n(()=>{var d;return[t("h4",sl,v(o(e).username),1),t("p",ol,v((d=o(e))==null?void 0:d.reference),1)]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(P,{class:"mt-4"},{default:n(()=>[a(f,{cols:"12",md:"7",lg:"8"},{default:n(()=>[a(we,{modelValue:o(u),"onUpdate:modelValue":V[0]||(V[0]=d=>T(u)?u.value=d:null),class:"v-tabs--grow"},{default:n(()=>[(_(),S(z,null,le(r,d=>a(Ne,{key:d.title},{default:n(()=>[t("span",null,v(d.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(f,{cols:"12",class:"ma-0 pa-0"},{default:n(()=>[a(be,{modelValue:o(u),"onUpdate:modelValue":V[1]||(V[1]=d=>T(u)?u.value=d:null),class:"mt-6 ma-0 pa-0"},{default:n(()=>[a(X,null,{default:n(()=>[a(We)]),_:1}),a(X,null,{default:n(()=>[a(qe)]),_:1}),a(X,null,{default:n(()=>[a(tl)]),_:1})]),_:1},8,["modelValue"])]),_:1})],64))}});export{Gl as default};