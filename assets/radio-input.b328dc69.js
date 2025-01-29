import{d as p,h as b,c,e as a,b as l,w as n,r as o,o as _,g as s}from"./index.d68be814.js";const g={class:"content"},O=p({__name:"radio-input",setup(x){const i=b(null),u=()=>`<radio-input 
    v-model="onOff"
    :items="[
        {
            id: 1, 
            label: 'Yes',
            disabled: false
        },
        {
            id: 2, 
            label: 'No',
            disabled: false
        }
        {
            id: 2, 
            label: 'Unsure',
            disabled: true
        }
    ]">
    On or Off?
    <template #inner-label>
        Inner Label
    </template>
</radio-input>`;return(v,e)=>{const t=o("column"),d=o("columns"),r=o("radio-input",!0),m=o("highlightjs");return _(),c("div",g,[e[5]||(e[5]=a("h1",null,"Radio Input",-1)),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>[l(d,null,{default:n(()=>[l(t,null,{default:n(()=>e[1]||(e[1]=[a("h4",null,"Basics",-1),a("p",null,[s(" In it's most basic form a "),a("span",{class:"has-text-weight-bold"},"radio-input"),s(" component can be used with nothing more than v-model and a label if required. The default component slot is used for label text and offers an additional Inner Label slot. ")],-1)])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>[l(r,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=f=>i.value=f),items:[{id:1,label:"Yes",disabled:!1},{id:2,label:"No",disabled:!1},{id:2,label:"Unsure",disabled:!0}]},{"inner-label":n(()=>e[2]||(e[2]=[s("Inner Label")])),default:n(()=>[e[3]||(e[3]=s(" On or Off? "))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(t,{class:"is-4"},{default:n(()=>[e[4]||(e[4]=a("small",null,"Example",-1)),l(m,{class:"is-rounded",language:"javascript",code:u()},null,8,["code"])]),_:1})]),_:1})])}}});export{O as default};
