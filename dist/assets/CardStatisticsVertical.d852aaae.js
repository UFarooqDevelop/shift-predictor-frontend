import{V as c}from"./vue3-apexcharts.common.26a491f7.js";import{c as l,V as p}from"./VCard.83701cac.js";import{V as u}from"./VAvatar.c8e7782f.js";import{o as t,b as r,w as s,p as a,aI as d,m as o,x as i,q as m}from"./index.e64df15f.js";const h={class:"text-h6 mt-3 mb-1"},_={class:"text-sm"},C={__name:"CardStatisticsVertical",props:{title:{type:String,required:!0},color:{type:String,required:!1,default:"primary"},icon:{type:String,required:!0},stats:{type:String,required:!0},height:{type:Number,required:!0},series:{type:Array,required:!0},chartOptions:{type:null,required:!0}},setup(n){const e=n;return(f,y)=>(t(),r(p,null,{default:s(()=>[a(l,{class:"d-flex flex-column pb-0"},{default:s(()=>[e.icon?(t(),r(u,{key:0,size:"42",variant:"tonal",color:e.color,icon:e.icon},null,8,["color","icon"])):d("",!0),o("h6",h,i(e.stats),1),o("span",_,i(e.title),1)]),_:1}),a(m(c),{series:e.series,options:e.chartOptions,height:e.height},null,8,["series","options","height"])]),_:1}))}};export{C as _};
