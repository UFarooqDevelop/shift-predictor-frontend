import{o as a,c as b,m as y,x as n,q as r,p as e,w as t,b as s,y as l,z as i,j as h,A as v}from"./index.4ee6cde3.js";import{u as k}from"./useAppAbility.1fd1b108.js";import{V as u}from"./VBadge.63945618.js";import{V as p}from"./VAvatar.23763371.js";import{V as f}from"./VImg.f62a2fa4.js";import{V as x}from"./VMenu.6d7a889c.js";import{V as I,a as c,b as m}from"./VList.4c9f67d4.js";import{V as A}from"./VListItemAction.57d72c33.js";import{V as d}from"./VDivider.1ede16c7.js";import"./router.6f77ab28.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.fd5380d2.js";import"./VOverlay.a6de9318.js";import"./lazy.d36e2ba8.js";import"./easing.36b781ab.js";import"./dialog-transition.796b3152.js";import"./index.2dd7ffb7.js";const S={class:"d-flex align-center gap-2"},w={class:"text-lg-heading"},Q={__name:"UserProfile",setup(B){const _=h(),g=k(),o=JSON.parse(localStorage.getItem("userData")||"null"),V=()=>{localStorage.removeItem("userData"),localStorage.removeItem("userProfile"),localStorage.removeItem("accessToken"),_.push("/login").then(()=>{localStorage.removeItem("userAbilities"),g.update(v)})};return(D,L)=>(a(),b("div",S,[y("span",w,n(r(o).username)+" | ",1),e(u,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",bordered:"",color:"success"},{default:t(()=>[e(p,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:t(()=>[r(o)&&r(o).profile.picture?(a(),s(f,{key:0,src:r(o).profile.picture},null,8,["src"])):(a(),s(l,{key:1,icon:"tabler-user"})),e(x,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:t(()=>[e(I,null,{default:t(()=>[e(c,null,{prepend:t(()=>[e(A,{start:""},{default:t(()=>[e(u,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:t(()=>[e(p,{color:"primary",variant:"tonal"},{default:t(()=>[r(o)&&r(o).profile.picture?(a(),s(f,{key:0,src:r(o).profile.picture},null,8,["src"])):(a(),s(l,{key:1,icon:"tabler-user"}))]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(m,{class:"font-weight-semibold"},{default:t(()=>[i(n(r(o).username),1)]),_:1})]),_:1}),e(d,{class:"my-2"}),e(c,{to:{name:"apps-user-view-id",params:{id:r(o).id}}},{prepend:t(()=>[e(l,{class:"me-2",icon:"tabler-user",size:"22"})]),default:t(()=>[e(m,null,{default:t(()=>[i("Profile")]),_:1})]),_:1},8,["to"]),e(d,{class:"my-2"}),e(c,{link:"",onClick:V},{prepend:t(()=>[e(l,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[e(m,null,{default:t(()=>[i("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}};export{Q as default};