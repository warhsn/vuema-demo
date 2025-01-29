import{d as i,i as t,o as a,c as o,n as s,l as n,y as u}from"./index.d68be814.js";const c=["src"],p=i({__name:"avatar",props:{name:{},size:{default:"48"},radius:{},isRound:{type:Boolean},backgroundColour:{default:"grey"},textColor:{default:"white"},imageUrl:{}},setup(l){const e=l,r=t(()=>({"is-48x48":e.size==="48"}));return(d,m)=>(a(),o("figure",{class:s(["image is-clickable",r.value])},[e.imageUrl?(a(),o("img",{key:0,src:e.imageUrl,class:s({"is-rounded":e.isRound})},null,10,c)):(a(),o("div",{key:1,style:n(`
                width: ${e.size}px; 
                height: ${e.size}px; 
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${e.backgroundColour};
                color: ${e.textColor};`)},u(e.name),5))],2))}});export{p as default};
