import{d,h as c,r as p,o as u,c as v,b as m,w as f,j as s,e as r,n as g}from"./index.d68be814.js";const h={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},b=d({__name:"dropdown",props:{hoverable:{type:Boolean},align:{}},setup(l){const a=l,e=c(!1);function t(){a.hoverable||(e.value=!e.value)}return(o,n)=>{const i=p("dropdown-trigger");return u(),v("div",{class:g(["dropdown",{"is-active":e.value,"is-hoverable":a.hoverable,"is-right":o.align==="right","is-left":o.align==="left"}])},[m(i,{onClick:t},{default:f(()=>[s(o.$slots,"trigger",{isActive:e.value})]),_:3}),r("div",h,[r("div",{class:"dropdown-content",onClick:n[0]||(n[0]=w=>e.value=!1)},[s(o.$slots,"default")])])],2)}}});export{b as default};
