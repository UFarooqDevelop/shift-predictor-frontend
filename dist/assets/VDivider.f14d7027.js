import{B as d,D as c,E as v,ak as u,H as h,O as m,a4 as i,I as g,p as k}from"./index.e64df15f.js";const f=d({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...c()},setup(e,a){let{attrs:t}=a;const{themeClasses:o}=v(e),{backgroundColorClasses:n,backgroundColorStyles:l}=u(h(e,"color")),s=m(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),r});return g(()=>k("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,n.value],style:[s.value,l.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};
