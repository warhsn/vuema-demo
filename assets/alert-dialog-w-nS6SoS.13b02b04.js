import{d as y,h as C,r as i,o as a,c as o,e as s,j as m,m as b,b as n,w as c,n as r,p as d,y as B,g as x,T,z as h}from"./index.d68be814.js";const I={class:"modal-wrapper modal-content"},w={class:"box is-clipped"},N={key:0,class:"is-size-4 has-text-weight-bold mb-4 is-flex is-align-items-center"},V={key:0,class:"icon mr-2"},$=y({__name:"alert-dialog",props:{cancelText:{},confirmText:{},confirming:{type:Boolean},confirmButtonClass:{},cancelButtonClass:{},controlAlignment:{default:"right"},title:{},titleIcon:{default:null},titleIconType:{default:null},titleIconClass:{default:"has-text-danger"},to:{default:"body"},transition:{default:"modal"},okButtonClass:{default:"is-success"},isActive:{type:Boolean}},emits:["close"],setup(p,{emit:_}){const u=p,l=C(!1);function f(){l.value=!1}return(e,t)=>{const g=i("b-icon"),v=i("action-button"),k=i("buttons");return a(),o("div",null,[s("div",{class:"is-inline-block",onClick:t[0]||(t[0]=A=>l.value=!l.value)},[m(e.$slots,"trigger")]),(a(),b(h,{to:u.to},[n(T,{name:u.transition,mode:"in-out"},{default:c(()=>[l.value?(a(),o("div",{key:0,class:r(["modal",{"is-active":l.value}])},[t[2]||(t[2]=s("div",{class:"modal-background"},null,-1)),s("div",I,[s("div",w,[e.title?(a(),o("p",N,[e.titleIcon?(a(),o("span",V,[n(g,{icon:e.titleIcon,"icon-type":e.titleIconType,class:r(["mr-1",e.titleIconClass])},null,8,["icon","icon-type","class"])])):d("",!0),s("span",null,B(e.title),1)])):d("",!0),m(e.$slots,"default"),n(k,{class:"mt-4",align:e.controlAlignment},{default:c(()=>[n(v,{onClick:f,class:r(e.okButtonClass)},{default:c(()=>t[1]||(t[1]=[x(" Okay ")])),_:1},8,["class"])]),_:1},8,["align"])])])],2)):d("",!0)]),_:3},8,["name"])],8,["to"]))])}}});export{$ as default};
