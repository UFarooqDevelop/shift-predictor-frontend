import{o as n,c as d,F as g,a as b,b as v,e as w,_ as $,f as k,g as V,i as z,j as C,k as N,l as I,m as e,n as m,p as o,q as t,s as f,t as L,w as r,V as R,v as h,x as S,y as B,T as x,r as y}from"./index.e5c1e8e1.js";/* empty css                                                      */import E from"./UserProfile.5805888d.js";import{V as H}from"./VSpacer.d0e97666.js";import{V as T}from"./VBtn.c5180d72.js";import"./useAppAbility.9b9be62b.js";import"./VBadge.7d8df854.js";import"./router.0c602970.js";import"./VImg.10863b21.js";import"./VAvatar.d497555d.js";import"./VMenu.0bbfb376.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.4b7ab931.js";import"./VOverlay.ad441d0c.js";import"./lazy.5465d1f6.js";import"./easing.36b781ab.js";import"./dialog-transition.7c9dd6d0.js";import"./VList.41b2bbf9.js";import"./index.1bcc5918.js";import"./VDivider.b5a2ab1e.js";import"./VListItemAction.5594a788.js";import"./position.2438c506.js";const W={class:"nav-items"},q={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(u){const i=l=>"children"in l?$:k;return(l,p)=>(n(),d("ul",W,[(n(!0),d(g,null,b(u.navItems,(a,c)=>(n(),v(w(i(a)),{key:c,item:a},null,8,["item"]))),128))]))}},D={class:"layout-navbar"},F={class:"navbar-content-container"},P={class:"layout-horizontal-nav"},j={class:"horizontal-nav-content-container"},A={class:"layout-page-content"},Y={class:"layout-footer"},G={class:"footer-content-container"},J={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(u){const{y:i}=V(),{width:l}=z(),p=C(),a=N(!1);p.beforeEach(()=>{a.value=!0}),p.afterEach(()=>{a.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:_}=I();return(s,Q)=>(n(),d("div",{class:f(["layout-wrapper",t(c)(t(l),t(i))])},[e("div",{class:f(["layout-navbar-and-nav-container",t(_)&&"header-blur"])},[e("div",D,[e("div",F,[m(s.$slots,"navbar")])]),e("div",P,[e("div",j,[o(t(q),{"nav-items":u.navItems},null,8,["nav-items"])])])],2),e("main",A,[s.$slots["content-loading"]?(n(),d(g,{key:0},[t(a)?m(s.$slots,"content-loading",{key:0}):m(s.$slots,"default",{key:1})],64)):m(s.$slots,"default",{key:1})]),e("footer",Y,[e("div",G,[m(s.$slots,"footer")])])],2))}},K=[{title:"Home",icon:{icon:"tabler-home"},to:"home"}],M=[...K],O={class:"app-title font-weight-bold leading-normal text-xl"},gt={__name:"DefaultLayoutWithHorizontalNav",setup(u){const{appRouteTransition:i}=L();return(l,p)=>{const a=y("RouterLink"),c=y("RouterView");return n(),v(t(J),{"nav-items":t(M)},{navbar:r(()=>[o(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[o(t(R),{nodes:t(h).app.logo},null,8,["nodes"]),e("h1",O,S(t(h).app.title),1)]),_:1}),o(H),o(T,{icon:"",variant:"text",color:"default",size:"small"},{default:r(()=>[o(B,{icon:"tabler-search",size:"24"})]),_:1}),o(E)]),default:r(()=>[o(c,null,{default:r(({Component:_,route:s})=>[o(x,{name:t(i),mode:"out-in"},{default:r(()=>[(n(),v(w(_),{key:s.path}))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{gt as default};
