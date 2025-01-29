import{d as B,f as h,c as y,e as l,b as t,w as o,r,o as S,u as g,g as s}from"./index.aae0ec84.js";const k={class:"content"},C=B({__name:"buttons",setup(w){let u=h({processing:!1});const a=()=>{u.processing=!u.processing,setTimeout(()=>u.processing=!1,1e3)},c=()=>`<action-button 
    is-small is-danger
    @click="processing = true" 
    :loading="${u.processing}">
    Small Button
</action-button>

<action-button 
    is-medium is-warning
    @click="processing = true" 
    :loading="${u.processing}">
    Medium Button
</action-button>

<action-button 
    is-large is-success
    @click="processing = true" 
    :loading="${u.processing}">
    Large Button
</action-button>

<submit-button 
    right-icon="user"
    @submit="toggleProcessing" 
    :loading="${u.processing}">
    Submit Me
</submit-button>`,m=()=>`<buttons
    has-addons>
    <action-button 
        is-rounded
        left-icon="user"
        @click="toggleProcessing" 
        :loading="${u.processing}">
        Users
    </action-button>
    <action-button 
        is-rounded
        @click="toggleProcessing"
        :loading="${u.processing}">
        Action Button
    </action-button>
</buttons>`;return(v,n)=>{const i=r("action-button"),f=r("buttons",!0),b=r("submit-button"),e=r("column"),d=r("columns"),p=r("highlightjs");return S(),y("div",k,[n[20]||(n[20]=l("div",null,[l("h1",null,"Buttons"),l("hr")],-1)),t(d,null,{default:o(()=>[t(e,null,{default:o(()=>[n[11]||(n[11]=l("h4",null,"Action Button",-1)),n[12]||(n[12]=l("p",null," Action buttons serve as versatile interaction components. Size and style customization is facilitated through props. The 'loading' prop enables you to manage the loading state of the button dynamically. Icons can be positioned on the left or right using the 'left-icon' or 'right-icon' props. ",-1)),t(f,null,{default:o(()=>[t(i,{"is-small":"",onClick:a,loading:g(u).processing},{default:o(()=>n[0]||(n[0]=[s(" Small Button ")])),_:1},8,["loading"]),t(i,{"is-medium":"",onClick:a,loading:g(u).processing},{default:o(()=>n[1]||(n[1]=[s(" Medium Button ")])),_:1},8,["loading"]),t(i,{"is-large":"",onClick:a,loading:g(u).processing},{default:o(()=>n[2]||(n[2]=[s(" Large Button ")])),_:1},8,["loading"])]),_:1}),t(d,null,{default:o(()=>[t(e,null,{default:o(()=>[n[4]||(n[4]=l("h4",null,"Submit Button",-1)),n[5]||(n[5]=l("p",null," Submit buttons inherit all functionality of the action button with 2 slight differences. Submit buttons are typically used within forms. ",-1)),n[6]||(n[6]=l("ol",null,[l("li",null,"The component is declared as submit-button instead of action-button."),l("li",null,'The component emits a "submit" event instead of a click event.')],-1)),t(b,{"left-icon":"paper-plane",onSubmit:a,loading:g(u).processing},{default:o(()=>n[3]||(n[3]=[s(" Submit Me ")])),_:1},8,["loading"])]),_:1})]),_:1}),t(d,null,{default:o(()=>[t(e,null,{default:o(()=>[n[9]||(n[9]=l("h4",null,"Icons",-1)),n[10]||(n[10]=l("p",null," Icons can be placed to the left or right of the button text by specifying a left-icon or right-icon prop as shown in the examples on this page. Both left and right icon positions support different icon packs, types and have class support. ",-1)),t(f,null,{default:o(()=>[t(i,{"is-danger":"","left-icon":"times-circle","left-icon-type":"far"},{default:o(()=>n[7]||(n[7]=[s(" Remove ")])),_:1}),t(i,{"is-success":"","right-icon":"plus","right-icon-type":"fas"},{default:o(()=>n[8]||(n[8]=[s(" Create ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(e,{class:"is-4"},{default:o(()=>[t(d,null,{default:o(()=>[t(e,null,{default:o(()=>[n[13]||(n[13]=l("small",null,"Example",-1)),t(p,{class:"is-rounded",autodetect:"",code:c()},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1}),t(d,null,{default:o(()=>[t(e,null,{default:o(()=>[n[16]||(n[16]=l("h4",null,"Button Groups and Addons",-1)),n[17]||(n[17]=l("p",null," The buttons component is handy when multiple buttons need to be displayed together on the same line. The has-addons prop allows for powerful customization such as rounding the buttons or effecting the button sizes in unison. ",-1)),t(f,{"has-addons":""},{default:o(()=>[t(i,{"is-rounded":"","left-icon":"user",onClick:a,loading:g(u).processing},{default:o(()=>n[14]||(n[14]=[s(" Users ")])),_:1},8,["loading"]),t(i,{"is-rounded":"",onClick:a,loading:g(u).processing},{default:o(()=>n[15]||(n[15]=[s(" Action Button ")])),_:1},8,["loading"])]),_:1})]),_:1}),t(e,{class:"is-4"},{default:o(()=>[t(d,null,{default:o(()=>[t(e,null,{default:o(()=>[n[18]||(n[18]=l("small",null,"Example",-1)),t(p,{class:"is-rounded",autodetect:"",code:m()},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1}),t(d,null,{default:o(()=>[t(e,null,{default:o(()=>n[19]||(n[19]=[l("h4",null,"Props",-1),l("table",{class:"table is-fullwidth is-striped is-bordered"},[l("thead",null,[l("tr",null,[l("th",null,"Prop"),l("th",null,"Type"),l("th",null,"Default")])]),l("tbody",null,[l("tr",null,[l("td",null,"is-small"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-medium"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-large"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-rounded"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"are-normal"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"are-small"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"are-medium"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"are-large"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-info"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-primary"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-warning"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-danger"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"has-addons"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"left-icon"),l("td",null,"String"),l("td",null,"null")]),l("tr",null,[l("td",null,"left-icon-class"),l("td",null,"String"),l("td",null,"null")]),l("tr",null,[l("td",null,"left-icon-type"),l("td",null,"String"),l("td",null,"far")]),l("tr",null,[l("td",null,"right-icon"),l("td",null,"String"),l("td",null,"null")]),l("tr",null,[l("td",null,"right-icon-class"),l("td",null,"String"),l("td",null,"null")]),l("tr",null,[l("td",null,"right-icon-type"),l("td",null,"String"),l("td",null,"far")]),l("tr",null,[l("td",null,"icon-pack"),l("td",null,"String"),l("td",null,"Font Awesome Regular")]),l("tr",null,[l("td",null,"loading"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"disabled"),l("td",null,"Boolean"),l("td",null,"false")])])],-1)])),_:1})]),_:1})])}}});export{C as default};
