import{d as f,c as g,e as l,b as o,w as n,r as u,o as b,g as e}from"./index.d68be814.js";const c={class:"content"},h={class:"is-flex"},M=f({__name:"modals",setup(w){const r=()=>`<modal
    :with-footer="false"
    title="Modal Title">
    <template #trigger>
        <action-button>
            Show Modal
        </action-button>
    </template>
    Content
</modal>

<modal>
    <template #title>
        <b-icon icon="user"/>
        <span>
            Title
        </span>
    </template>
    <template #trigger>
        <action-button>
            Show Modal
        </action-button>
    </template>
    Content
</modal>`;return(T,t)=>{const d=u("action-button"),a=u("modal"),m=u("b-icon"),s=u("column"),p=u("highlightjs"),i=u("columns");return b(),g("div",c,[t[13]||(t[13]=l("h1",null,"Modal",-1)),t[14]||(t[14]=l("hr",null,null,-1)),o(i,null,{default:n(()=>[o(s,null,{default:n(()=>[t[5]||(t[5]=l("h3",null,"Basics",-1)),t[6]||(t[6]=l("p",null,[e("The Modal component runs on Vue's powerful "),l("a",{href:"https://vuejs.org/guide/built-ins/teleport",target:"_blank"},"Teleport"),e(" feature. By default Modals are displayed as cards but can be turned off via the "),l("code",null,"is-card"),e(" prop. The "),l("code",null,"is-dismissable"),e(" prop is handy for allowing Modals to be closed when clicking outside of the modal itself. ")],-1)),o(a,{title:"Modal Title","with-footer":!1},{trigger:n(()=>[o(d,{"is-info":""},{default:n(()=>t[0]||(t[0]=[e("Show Modal")])),_:1})]),default:n(()=>[t[1]||(t[1]=e(" Content "))]),_:1}),t[7]||(t[7]=l("h3",null,"Trigger",-1)),t[8]||(t[8]=l("p",null,"The Trigger slot accepts any html elements or Vue components. This allows for fine control over how the the modal is triggered. ",-1)),t[9]||(t[9]=l("h3",null,"Title",-1)),t[10]||(t[10]=l("p",null,[e("Titles can be displayed using the "),l("code",null,"title"),e(" prop when only text is required. If your title requires rich content such as icons or more actions a title slot is made available. ")],-1)),o(a,null,{title:n(()=>[l("div",h,[o(m,{icon:"user",class:"mr-2"}),t[2]||(t[2]=l("span",null," Add User ",-1))])]),trigger:n(()=>[o(d,{"is-info":""},{default:n(()=>t[3]||(t[3]=[e(" Show Modal ")])),_:1})]),default:n(()=>[t[4]||(t[4]=e(" Content "))]),_:1})]),_:1}),o(s,{"is-4":""},{default:n(()=>[t[11]||(t[11]=l("small",null,"Example",-1)),o(p,{class:"is-rounded",language:"javascript",code:r()},null,8,["code"])]),_:1})]),_:1}),o(i,null,{default:n(()=>[o(s,null,{default:n(()=>t[12]||(t[12]=[l("h4",null,"Props",-1),l("table",{class:"table is-fullwidth"},[l("thead",null,[l("tr",null,[l("th",null,"Name"),l("th",null,"Type"),l("th",null,"Default")])]),l("thead",null,[l("tr",null,[l("td",null,"is-card"),l("td",null,"Boolean"),l("td",null,"true")]),l("tr",null,[l("td",null,"is-dismissable"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-closeable"),l("td",null,"Boolean"),l("td",null,"true")]),l("tr",null,[l("td",null,"to"),l("td",null,"String"),l("td",null,"body")]),l("tr",null,[l("td",null,"transition"),l("td",null,"String"),l("td",null,"modal")]),l("tr",null,[l("td",null,"with-footer"),l("td",null,"Boolean"),l("td",null,"true")]),l("tr",null,[l("td",null,"with-header"),l("td",null,"Boolean"),l("td",null,"true")]),l("tr",null,[l("td",null,"with-cancel"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"cancel-button-classes"),l("td",null,"String"),l("td",null,"null")])])],-1)])),_:1})]),_:1})])}}});export{M as default};
