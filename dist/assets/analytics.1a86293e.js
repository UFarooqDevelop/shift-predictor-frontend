import{V as U}from"./vue3-apexcharts.common.6057203e.js";import{am as D,O as F,bg as I,o as n,b as k,w as e,p as t,m as a,y as v,c as m,F as g,a as y,z as c,x as r,q as u,aK as B,s as J,aS as lt,aT as ot,k as L,a5 as G,Q as rt,ap as Q,a8 as nt,ag as it,aI as ct,cf as X,ce as Z,h as dt,be as ut,bf as _t}from"./index.39cf7653.js";import{a as H,b as Y,d as pt,c as C,V as A}from"./VCard.9241d0e3.js";import{V as P}from"./VBtn.94b65b51.js";import{V as R}from"./VMenu.8d2b455b.js";import{V,a as $,b as S,c as M}from"./VList.29ca595a.js";import{V as O,a as i}from"./VRow.b94bad99.js";import{V as N}from"./VChip.c13b5928.js";import{V as T}from"./VAvatar.6e43e79e.js";import{V as q}from"./position.6e6d0a2f.js";import{a as mt}from"./formatters.2778bb47.js";import{a as ft}from"./VInput.caa41449.js";import{V as ht}from"./VTextField.bbc6c137.js";import{V as W}from"./VDivider.4465a1d4.js";import{V as bt}from"./VTable.48bd68f7.js";import{V as K}from"./VCheckbox.8571c0ac.js";import{V as vt}from"./VImg.bd5b1ee4.js";import{V as gt}from"./VPagination.8e7e2dd5.js";import{u as yt,b as xt,i as wt,a as kt,f as $t,c as Vt,V as St,d as Ct,s as Tt,e as It,g as At}from"./VCarouselItem.746a5194.js";import{_ as zt}from"./CardStatisticsVertical.4a1fe82d.js";import"./vue.runtime.esm-bundler.438ac113.js";import"./router.ebc804bf.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.ac16d18d.js";import"./VOverlay.bef24201.js";import"./lazy.457b0683.js";import"./easing.36b781ab.js";import"./dialog-transition.a31e82b6.js";import"./index.9c310313.js";import"./index.0d4b9ec4.js";/* empty css                   */import"./VField.a837d659.js";import"./VCounter.0418933a.js";import"./VCheckboxBtn.00ee6c99.js";import"./VSelectionControl.c86d27f1.js";import"./VWindowItem.3f13ab9c.js";import"./ssrBoot.d83792d0.js";const Lt={class:"mt-n4 me-n2"},Ot={class:"d-flex align-center gap-2 mb-2 pb-1 flex-wrap"},Pt=a("h4",{class:"text-4xl font-weight-semibold"}," $468 ",-1),Rt=a("p",{class:"text-sm"}," You informed of this week compared to last week ",-1),Et={class:"border rounded mt-3 pa-4"},Bt={class:"d-flex align-center"},Wt={class:"text-base font-weight-medium"},Dt={class:"text-h6 my-3"},Ft={__name:"AnalyticsEarningReportsWeeklyOverview",setup(_){const p=D(),f=[{data:[40,65,50,45,90,55,70]}],x=F(()=>{const l=p.current.value.colors,h=p.current.value.variables;return{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"60%",columnWidth:"38%",startingShape:"rounded",endingShape:"rounded",borderRadius:4,distributed:!0}},grid:{show:!1,padding:{top:-30,bottom:0,left:-10,right:-10}},colors:[`rgba(${I(l.primary)},${h["pressed-opacity"]})`,`rgba(${I(l.primary)},${h["pressed-opacity"]})`,`rgba(${I(l.primary)},${h["pressed-opacity"]})`,`rgba(${I(l.primary)},${h["pressed-opacity"]})`,l.primary,`rgba(${I(l.primary)},${h["pressed-opacity"]})`,`rgba(${I(l.primary)},${h["pressed-opacity"]})`],dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:`rgba(${I(l["on-surface"])},${h["disabled-opacity"]})`,fontSize:"14px",fontFamily:"Public Sans"}}},yaxis:{labels:{show:!1}},tooltip:{enabled:!1},responsive:[{breakpoint:1025,options:{chart:{height:199}}}]}}),s=[{color:"primary",icon:"tabler-currency-dollar",title:"Earnings",amount:"$545.69",progress:"55"},{color:"info",icon:"tabler-chart-pie-2",title:"Profit",amount:"$256.34",progress:"25"},{color:"error",icon:"tabler-brand-paypal",title:"Expense",amount:"$74.19",progress:"65"}];return(l,h)=>(n(),k(A,null,{default:e(()=>[t(H,{class:"pb-sm-0"},{append:e(()=>[a("div",Lt,[t(P,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(n(),m(g,null,y(["View More","Delete"],(o,d)=>t($,{key:d,value:d},{default:e(()=>[t(S,null,{default:e(()=>[c(r(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(Y,null,{default:e(()=>[c("Earning Reports")]),_:1}),t(pt,null,{default:e(()=>[c("Weekly Earnings Overview")]),_:1})]),_:1}),t(C,null,{default:e(()=>[t(O,null,{default:e(()=>[t(i,{cols:"12",sm:"5",class:"d-flex flex-column align-self-end"},{default:e(()=>[a("div",Ot,[Pt,t(N,{label:"",color:"success"},{default:e(()=>[c(" +4.2% ")]),_:1})]),Rt]),_:1}),t(i,{cols:"12",sm:"7",class:"pt-0"},{default:e(()=>[t(u(U),{options:u(x),series:f,height:"190"},null,8,["options"])]),_:1})]),_:1}),a("div",Et,[t(O,null,{default:e(()=>[(n(),m(g,null,y(s,o=>t(i,{key:o.title,cols:"12",sm:"4"},{default:e(()=>[a("div",Bt,[t(T,{rounded:"",size:"30",color:o.color,variant:"tonal",class:"me-2"},{default:e(()=>[t(v,{icon:o.icon},null,8,["icon"])]),_:2},1032,["color"]),a("h6",Wt,r(o.title),1)]),a("h6",Dt,r(o.amount),1),t(q,{"model-value":o.progress,color:o.color,height:"8",rounded:"","rounded-bar":""},null,8,["model-value","color"])]),_:2},1024)),64))]),_:1})])]),_:1})]),_:1}))}};const Mt={class:"mt-n4 me-n2"},Nt={class:"font-weight-medium text-medium-emphasis me-3"},jt={__name:"AnalyticsMonthlyCampaignState",setup(_){const p=[{avatarColor:"success",avatarIcon:"tabler-mail",title:"Emails",count:"12,346",stats:"0.3%",statsColor:"success"},{avatarColor:"info",avatarIcon:"tabler-link",title:"Opened",count:"8,734",stats:"2.1%",statsColor:"success"},{avatarColor:"warning",avatarIcon:"tabler-click",title:"Clicked",count:"967",stats:"1.4%",statsColor:"error"},{avatarColor:"primary",avatarIcon:"tabler-users",title:"Subscribe",count:"345",stats:"8.5%",statsColor:"success"},{avatarColor:"secondary",avatarIcon:"tabler-alert-triangle",title:"Complaints",count:"10",stats:"1.5%",statsColor:"error"},{avatarColor:"error",avatarIcon:"tabler-ban",title:"Unsubscribe",count:"86",stats:"0.8%",statsColor:"success"}];return(f,x)=>(n(),k(A,{title:"Monthly Campaign State",subtitle:"8.52k Social Visiters"},{append:e(()=>[a("div",Mt,[t(P,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(n(),m(g,null,y(["Refresh","Download","View All"],(s,l)=>t($,{key:l,value:l},{default:e(()=>[t(S,null,{default:e(()=>[c(r(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(C,null,{default:e(()=>[t(V,{class:"card-list"},{default:e(()=>[(n(),m(g,null,y(p,s=>t($,{key:s.title},{prepend:e(()=>[t(T,{color:s.avatarColor,variant:"tonal",size:"34",rounded:""},{default:e(()=>[t(v,{icon:s.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),append:e(()=>[a("span",Nt,r(s.count),1),a("span",{class:J(`text-${s.statsColor}`)},r(s.stats),3)]),default:e(()=>[t(S,{class:"font-weight-medium"},{default:e(()=>[c(r(s.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},Ut=B(jt,[["__scopeId","data-v-134780ef"]]),Ht=lt("ProjectStore",{actions:{fetchProjects(_){return ot.get("/dashboard/analytics/projects",{params:_})}}});const Yt={class:"d-flex align-center gap-2",style:{width:"272px"}},qt={scope:"col",class:"text-center"},Gt={style:{width:"1rem"}},Qt=a("th",{scope:"col",class:"font-weight-semibold"}," NAME ",-1),Kt=a("th",{scope:"col",class:"font-weight-semibold"}," LEADER ",-1),Jt=a("th",{scope:"col",class:"font-weight-semibold"}," TEAM ",-1),Xt=a("th",{scope:"col",class:"font-weight-semibold"}," STATUS ",-1),Zt=a("th",{scope:"col",class:"font-weight-semibold"},[a("span",{class:"ms-2"},"ACTIONS")],-1),te={style:{width:"1rem"}},ee={class:"d-flex align-center gap-3"},ae={key:1,class:"font-weight-semibold"},se={class:"text-base text-medium-emphasis font-weight-semibold"},le={class:"text-disabled"},oe={class:"text-medium-emphasis"},re={class:"text-center"},ne={class:"v-avatar-group"},ie={class:"text-center"},ce={class:"text-center",style:{width:"7.5rem"}},de=a("tr",null,[a("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),ue=[de],_e={class:"text-sm text-disabled"},pe={__name:"AnalyticsProjectTable",setup(_){const p=Ht(),f=L(""),x=L(5),s=L(1),l=L(1),h=L(0),o=L([]),d=L([]),E=L(!1);G(()=>{p.fetchProjects({q:f.value,perPage:x.value,currentPage:s.value}).then(w=>{o.value=w.data.projects,l.value=w.data.totalPage,h.value=w.data.totalProjects}).catch(w=>{console.log(w)})}),G(()=>{s.value>l.value&&(s.value=l.value)});const et=F(()=>{const w=o.value.length?(s.value-1)*x.value+1:0,z=o.value.length+(s.value-1)*x.value;return`Showing ${w} to ${z} of ${h.value} entries`}),at=()=>{E.value=!E.value,E.value?o.value.forEach(w=>{d.value.includes(`check${w.status}`)||d.value.push(`check${w.status}`)}):d.value=[]};rt(d,()=>{d.value.length||(E.value=!1)},{deep:!0});const st=w=>{if(d.value.includes(w)){const z=d.value.indexOf(w);d.value.splice(z,1)}else d.value.push(w),E.value=!0};return(w,z)=>u(o)?(n(),k(A,{key:0},{default:e(()=>[t(H,{class:"project-header d-flex flex-wrap justify-space-between py-4 gap-4"},{append:e(()=>[a("div",Yt,[t(ft,null,{default:e(()=>[c("Search:")]),_:1}),t(ht,{modelValue:u(f),"onUpdate:modelValue":z[0]||(z[0]=b=>Q(f)?f.value=b:null),placeholder:"Search"},null,8,["modelValue"])])]),default:e(()=>[t(Y,null,{default:e(()=>[c("Projects")]),_:1})]),_:1}),t(W),t(bt,{class:"text-no-wrap"},{default:e(()=>[a("thead",null,[a("tr",null,[a("th",qt,[a("div",Gt,[t(K,{"model-value":u(E),indeterminate:u(o).length!==u(d).length&&!!u(d).length,onClick:at},null,8,["model-value","indeterminate"])])]),Qt,Kt,Jt,Xt,Zt])]),a("tbody",null,[(n(!0),m(g,null,y(u(o),b=>(n(),m("tr",{key:b.name,style:{height:"3.5rem"}},[a("td",null,[a("div",te,[t(K,{id:`check${b.status}`,"model-value":u(d).includes(`check${b.status}`),onClick:j=>st(`check${b.status}`)},null,8,["id","model-value","onClick"])])]),a("td",null,[a("div",ee,[t(T,{variant:"tonal",color:"primary",size:"38"},{default:e(()=>[b.logo.length?(n(),k(vt,{key:0,src:b.logo},null,8,["src"])):(n(),m("span",ae,r(u(mt)(b.name)),1))]),_:2},1024),a("div",null,[a("h6",se,r(b.name),1),a("span",le,r(b.date),1)])])]),a("td",oe,r(b.leader),1),a("td",re,[a("div",ne,[(n(!0),m(g,null,y(b.team,j=>(n(),k(T,{key:j,size:32,image:j},null,8,["image"]))),128))])]),a("td",ie,[t(q,{"model-value":b.status,color:"primary",height:"6",rounded:"","rounded-bar":""},null,8,["model-value"])]),a("td",ce,[t(P,{icon:"",variant:"plain",color:"default",size:"x-small"},{default:e(()=>[t(v,{size:22,icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(V,{density:"compact"},{default:e(()=>[t($,{href:"#",title:"Details"}),t($,{href:"#",title:"Archive"})]),_:1})]),_:1})]),_:1})])]))),128))]),nt(a("tfoot",null,ue,512),[[it,!u(o).length]])]),_:1}),t(W),t(C,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:e(()=>[a("span",_e,r(u(et)),1),t(gt,{modelValue:u(s),"onUpdate:modelValue":z[1]||(z[1]=b=>Q(s)?s.value=b:null),size:"small","total-visible":2,length:u(l)},null,8,["modelValue","length"])]),_:1})]),_:1})):ct("",!0)}};const me={class:"mt-n4 me-n2"},fe={__name:"AnalyticsSalesByCountries",setup(_){const p=[{avatarImg:yt,stats:"$8,567k",subtitle:"United states",profitLoss:25.8},{avatarImg:xt,stats:"$2,415k",subtitle:"Brazil",profitLoss:-6.2},{avatarImg:wt,stats:"$865k",subtitle:"India",profitLoss:12.4},{avatarImg:kt,stats:"$745k",subtitle:"Australia",profitLoss:-11.9},{avatarImg:$t,stats:"$45",subtitle:"France",profitLoss:16.2},{avatarImg:Vt,stats:"$12k",subtitle:"China",profitLoss:14.8}];return(f,x)=>(n(),k(A,{title:"Sales by Countries",subtitle:"Monthly Sales Overview"},{append:e(()=>[a("div",me,[t(P,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(n(),m(g,null,y(["Refresh","Download","View All"],(s,l)=>t($,{key:l,value:l},{default:e(()=>[t(S,null,{default:e(()=>[c(r(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(C,null,{default:e(()=>[t(V,{class:"card-list"},{default:e(()=>[(n(),m(g,null,y(p,s=>t($,{key:s.stats},{prepend:e(()=>[t(T,{size:"34",color:"secondary",variant:"tonal",image:s.avatarImg},null,8,["image"])]),append:e(()=>[a("div",{class:J(`d-flex align-center font-weight-semibold ${s.profitLoss>0?"text-success":"text-error"}`)},[t(v,{icon:s.profitLoss>0?"tabler-chevron-up":"tabler-chevron-down",size:"18",class:"me-1"},null,8,["icon"]),a("span",null,r(Math.abs(s.profitLoss))+"%",1)],2)]),default:e(()=>[t(S,{class:"font-weight-medium"},{default:e(()=>[c(r(s.stats),1)]),_:2},1024),t(M,{class:"opacity-100 text-disabled"},{default:e(()=>[c(r(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},he=B(fe,[["__scopeId","data-v-a4823dfc"]]),be={},ve=a("div",{class:"d-flex align-center justify-space-between"},[a("span",{class:"text-sm text-disabled"},"Sales Overview"),a("span",{class:"text-success"},"+18.2%")],-1),ge=a("h5",{class:"text-h5"}," $42.5k ",-1),ye={class:"d-flex align-center mb-3"},xe=a("span",null,"Order",-1),we=a("h6",{class:"text-h6"}," 62.2% ",-1),ke=a("span",{class:"text-sm text-disabled"},"6,440",-1),$e={class:"d-flex flex-column align-center justify-center h-100"},Ve={class:"pa-1"},Se=a("span",{class:"text-xs pa-1"},"VS",-1),Ce={class:"d-flex align-center justify-end mb-3"},Te=a("span",{class:"me-2"},"Visits",-1),Ie=a("h6",{class:"text-h6"}," 25.5% ",-1),Ae=a("span",{class:"text-sm text-disabled"},"12,749",-1),ze={class:"mt-6"};function Le(_,p){return n(),k(A,null,{default:e(()=>[t(C,null,{default:e(()=>[ve,ge]),_:1}),t(C,null,{default:e(()=>[t(O,{"no-gutters":""},{default:e(()=>[t(i,{cols:"5"},{default:e(()=>[a("div",ye,[t(T,{color:"info",variant:"tonal",size:30,rounded:"",class:"me-2"},{default:e(()=>[t(v,{size:"18",icon:"tabler-shopping-cart"})]),_:1}),xe]),we,ke]),_:1}),t(i,{cols:"2"},{default:e(()=>[a("div",$e,[t(W,{vertical:"",class:"mx-auto"}),a("div",Ve,[t(N,{size:"20"},{default:e(()=>[Se]),_:1})]),t(W,{vertical:"",class:"mx-auto"})])]),_:1}),t(i,{cols:"5",class:"text-end"},{default:e(()=>[a("div",Ce,[Te,t(T,{color:"primary",variant:"tonal",size:30,rounded:""},{default:e(()=>[t(v,{size:"18",icon:"tabler-link"})]),_:1})]),Ie,Ae]),_:1})]),_:1}),a("div",ze,[t(q,{"model-value":"80",color:"info",height:"8",rounded:""})])]),_:1})]),_:1})}const Oe=B(be,[["render",Le]]);const Pe={class:"mt-n4 me-n2"},Re={class:"d-flex align-center"},Ee={class:"me-2"},Be={__name:"AnalyticsSourceVisits",setup(_){const p=[{avatarIcon:"tabler-shadow",title:"Direct Source",subtitle:"Direct link click",stats:"1.2k",profitLoss:4.2},{avatarIcon:"tabler-globe",title:"Social Network",subtitle:"Social Channels",stats:"31.5k",profitLoss:8.2},{avatarIcon:"tabler-mail",title:"Email Newsletter",subtitle:"Mail Campaigns",stats:"893",profitLoss:2.4},{avatarIcon:"tabler-external-link",title:"Referrals",subtitle:"Impact Radius Visits",stats:"342",profitLoss:-.4},{avatarIcon:"tabler-discount-2",title:"ADVT",subtitle:"Google ADVT",stats:"2.15k",profitLoss:9.1},{avatarIcon:"tabler-star",title:"Other",subtitle:"Many Sources",stats:"12.5k",profitLoss:6.2}];return(f,x)=>(n(),k(A,{title:"Source Visits",subtitle:"38.4k Visitors"},{append:e(()=>[a("div",Pe,[t(P,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(n(),m(g,null,y(["Refresh","Download","View All"],(s,l)=>t($,{key:l,value:l},{default:e(()=>[t(S,null,{default:e(()=>[c(r(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(C,null,{default:e(()=>[t(V,{class:"card-list"},{default:e(()=>[(n(),m(g,null,y(p,s=>t($,{key:s.title},{prepend:e(()=>[t(T,{size:"34",color:"secondary",variant:"tonal",rounded:""},{default:e(()=>[t(v,{icon:s.avatarIcon},null,8,["icon"])]),_:2},1024)]),append:e(()=>[a("div",Re,[a("span",Ee,r(s.stats),1),t(N,{label:"",color:s.profitLoss>0?"success":"error"},{default:e(()=>[c(r(s.profitLoss>0?"+":"")+" "+r(s.profitLoss)+"% ",1)]),_:2},1032,["color"])])]),default:e(()=>[t(S,{class:"font-weight-medium"},{default:e(()=>[c(r(s.title),1)]),_:2},1024),t(M,{class:"opacity-100 text-disabled"},{default:e(()=>[c(r(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},We=B(Be,[["__scopeId","data-v-cc081145"]]);const De=_=>(X("data-v-4b626e5c"),_=_(),Z(),_),Fe={class:"mt-n4 me-n2"},Me=De(()=>a("div",{class:"mb-4"},[a("h4",{class:"text-4xl font-weight-semibold mb-2"}," 164 "),a("p",{class:"text-sm"}," Total Tickets ")],-1)),Ne={__name:"AnalyticsSupportTracker",setup(_){const p=D(),f=[85],x=F(()=>{const l=p.current.value.colors,h=p.current.value.variables;return{labels:["Completed Task"],chart:{type:"radialBar"},plotOptions:{radialBar:{offsetY:10,startAngle:-140,endAngle:130,hollow:{size:"65%"},track:{background:l.surface,strokeWidth:"100%"},dataLabels:{name:{offsetY:-20,color:`rgba(${I(l["on-background"])},${h["disabled-opacity"]})`,fontSize:"14px",fontWeight:"400",fontFamily:"Public Sans"},value:{offsetY:10,color:`rgba(${I(l["on-background"])},${h["high-emphasis-opacity"]})`,fontSize:"38px",fontWeight:"600",fontFamily:"Public Sans"}}}},colors:[l.primary],fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.5,gradientToColors:[l.primary],inverseColors:!0,opacityFrom:1,opacityTo:.6,stops:[30,70,100]}},stroke:{dashArray:10},grid:{padding:{top:-20,bottom:5}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:960,options:{chart:{height:280}}}]}}),s=[{avatarColor:"primary",avatarIcon:"tabler-ticket",title:"New Tickets",subtitle:"142"},{avatarColor:"info",avatarIcon:"tabler-circle-check",title:"Open Tickets",subtitle:"28"},{avatarColor:"warning",avatarIcon:"tabler-clock",title:"Response Time",subtitle:"1 Day"}];return(l,h)=>(n(),k(A,{title:"Support Tracker",subtitle:"Last 7 Days"},{append:e(()=>[a("div",Fe,[t(P,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(n(),m(g,null,y(["View More","Delete"],(o,d)=>t($,{key:d,value:d},{default:e(()=>[t(S,null,{default:e(()=>[c(r(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(C,null,{default:e(()=>[t(O,null,{default:e(()=>[t(i,{cols:"12",md:"5",sm:"6",class:"mt-auto"},{default:e(()=>[Me,t(V,{class:"card-list"},{default:e(()=>[(n(),m(g,null,y(s,o=>t($,{key:o.title},{prepend:e(()=>[t(T,{rounded:"",size:"34",color:o.avatarColor,variant:"tonal"},{default:e(()=>[t(v,{icon:o.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),default:e(()=>[t(S,{class:"font-weight-medium"},{default:e(()=>[c(r(o.title),1)]),_:2},1024),t(M,{class:"opacity-100 text-disabled"},{default:e(()=>[c(r(o.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}),t(i,{cols:"12",md:"7",sm:"6"},{default:e(()=>[t(u(U),{options:u(x),series:f,height:"360"},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1}))}},je=B(Ne,[["__scopeId","data-v-4b626e5c"]]);const tt=_=>(X("data-v-b3b62062"),_=_(),Z(),_),Ue={class:"d-flex align-center mt-2"},He=tt(()=>a("h4",{class:"text-4xl font-weight-semibold me-2"}," 87% ",-1)),Ye={class:"text-success"},qe=tt(()=>a("span",{class:"text-base"},"25.8%",-1)),Ge={class:"mt-n10 me-n2"},Qe={class:"text-success"},Ke={__name:"AnalyticsTotalEarning",setup(_){const p=D(),f=[{name:"Earning",data:[15,10,20,8,12,18,12,5]},{name:"Expense",data:[-7,-10,-7,-12,-6,-9,-5,-8]}],x=F(()=>{const l=p.current.value.colors;return{chart:{parentHeightOffset:0,stacked:!0,type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"18%",borderRadius:5,startingShape:"rounded",endingShape:"rounded"}},colors:[l.primary,l.secondary],dataLabels:{enabled:!1},grid:{show:!1,padding:{top:-40,bottom:-20,left:-10,right:-2}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:1468,options:{plotOptions:{bar:{columnWidth:"22%"}}}},{breakpoint:1197,options:{chart:{height:228},plotOptions:{bar:{borderRadius:8,columnWidth:"26%"}}}},{breakpoint:783,options:{chart:{height:232},plotOptions:{bar:{borderRadius:6,columnWidth:"28%"}}}},{breakpoint:589,options:{plotOptions:{bar:{columnWidth:"16%"}}}},{breakpoint:520,options:{plotOptions:{bar:{borderRadius:6,columnWidth:"18%"}}}},{breakpoint:426,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"20%"}}}},{breakpoint:381,options:{plotOptions:{bar:{columnWidth:"24%"}}}}],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}}}),s=[{avatar:"tabler-currency-dollar",avatarColor:"primary",title:"Total Sales",subtitle:"Total Sales",earning:"+$98"},{avatar:"tabler-brand-paypal",avatarColor:"secondary",title:"Total Revenue",subtitle:"Client Payment",earning:"+$126"}];return(l,h)=>(n(),k(A,null,{default:e(()=>[t(H,{class:"pb-0"},{append:e(()=>[a("div",Ge,[t(P,{icon:"",size:"x-small",variant:"plain",color:"default"},{default:e(()=>[t(v,{size:"22",icon:"tabler-dots-vertical"}),t(R,{activator:"parent"},{default:e(()=>[t(V,null,{default:e(()=>[(n(),m(g,null,y(["View More","Delete"],(o,d)=>t($,{key:d,value:d},{default:e(()=>[t(S,null,{default:e(()=>[c(r(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:e(()=>[t(Y,null,{default:e(()=>[c("Total Earning")]),_:1}),a("div",Ue,[He,a("div",Ye,[t(v,{size:"18",icon:"tabler-chevron-up"}),qe])])]),_:1}),t(C,null,{default:e(()=>[t(u(U),{options:u(x),series:f,height:"210",class:"my-2"},null,8,["options"]),t(V,{class:"card-list mt-4"},{default:e(()=>[(n(),m(g,null,y(s,o=>t($,{key:o.title},{prepend:e(()=>[t(T,{icon:o.avatar,color:o.avatarColor,variant:"tonal",size:"34",rounded:""},null,8,["icon","color"])]),append:e(()=>[a("span",Qe,r(o.earning),1)]),default:e(()=>[t(S,{class:"font-weight-medium"},{default:e(()=>[c(r(o.title),1)]),_:2},1024),t(M,{class:"opacity-100 text-disabled"},{default:e(()=>[c(r(o.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},Je=B(Ke,[["__scopeId","data-v-b3b62062"]]);const Xe=a("h6",{class:"text-h6 text-white mb-1"}," Website Analytics ",-1),Ze=a("p",{class:"text-sm mb-0"}," Total 28.5% Conversion Rate ",-1),ta={class:"font-weight-semibold"},ea=["src"],aa={__name:"AnalyticsWebsiteAnalytics",setup(_){const p=[{name:"Traffic",slideImg:Tt,data:[{number:"1.5k",text:"Sessions"},{number:"3.1k",text:"Page Views"},{number:"1.2k",text:"Leads"},{number:"12%",text:"Conversions"}]},{name:"Spending",slideImg:It,data:[{number:"12h",text:"Spend"},{number:"182",text:"Order Size"},{number:"127",text:"Order"},{number:"23k",text:"Items"}]},{name:"Revenue Sources",slideImg:At,data:[{number:"268",text:"Direct"},{number:"890",text:"Organic"},{number:"622",text:"Referral"},{number:"1.2k",text:"Campaign"}]}];return(f,x)=>(n(),k(A,{color:"primary"},{default:e(()=>[t(St,{cycle:"",continuous:!1,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":()=>u(dt)(u(v),{icon:"fa-circle",size:"10"}),height:"auto",class:"carousel-delimiter-top-end web-analytics-carousel"},{default:e(()=>[(n(),m(g,null,y(p,s=>t(Ct,{key:s.name},{default:e(()=>[t(C,null,{default:e(()=>[t(O,null,{default:e(()=>[t(i,{cols:"12"},{default:e(()=>[Xe,Ze]),_:1}),t(i,{cols:"12",sm:"6",order:"2","order-sm":"1"},{default:e(()=>[t(O,null,{default:e(()=>[t(i,{cols:"12",class:"pb-0"},{default:e(()=>[a("p",ta,r(s.name),1)]),_:2},1024),(n(!0),m(g,null,y(s.data,l=>(n(),k(i,{key:l.number,cols:"6",class:"text-no-wrap"},{default:e(()=>[t(N,{label:"",class:"me-2"},{default:e(()=>[c(r(l.number),1)]),_:2},1024),a("span",null,r(l.text),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),t(i,{cols:"12",sm:"6",order:"1","order-sm":"2",class:"position-relative text-center"},{default:e(()=>[a("img",{src:s.slideImg,class:"card-website-analytics-img"},null,8,ea)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1},8,["delimiter-icon"])]),_:1}))}};const Fa={__name:"analytics",setup(_){const f=D().current.value.colors,x={title:"Revenue Generated",color:"success",icon:"tabler-credit-card",stats:"97.5k",height:120,series:[{data:[300,350,330,380,340,400,380]}],chartOptions:{chart:{height:110,type:"area",parentHeightOffset:0,toolbar:{show:!1},sparkline:{enabled:!0}},tooltip:{enabled:!1},markers:{colors:"transparent",strokeColors:"transparent"},grid:{show:!1},colors:[f.success],fill:{type:"gradient",gradient:{shadeIntensity:.8,opacityFrom:.6,opacityTo:.1}},dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},xaxis:{show:!0,lines:{show:!1},labels:{show:!1},stroke:{width:0},axisBorder:{show:!1}},yaxis:{stroke:{width:0},show:!1}}};return(s,l)=>(n(),k(O,{class:"match-height"},{default:e(()=>[t(i,{cols:"12",md:"6"},{default:e(()=>[t(aa)]),_:1}),t(i,{cols:"12",md:"3",sm:"6"},{default:e(()=>[t(Oe)]),_:1}),t(i,{cols:"12",md:"3",sm:"6"},{default:e(()=>[t(zt,ut(_t(x)),null,16)]),_:1}),t(i,{cols:"12",md:"6"},{default:e(()=>[t(Ft)]),_:1}),t(i,{cols:"12",md:"6"},{default:e(()=>[t(je)]),_:1}),t(i,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(he)]),_:1}),t(i,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(Je)]),_:1}),t(i,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(Ut)]),_:1}),t(i,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(We)]),_:1}),t(i,{cols:"12",lg:"8"},{default:e(()=>[t(pe)]),_:1})]),_:1}))}};export{Fa as default};
