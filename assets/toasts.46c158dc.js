import{d as T,q as C,c as w,e as o,b as n,w as l,r as u,o as x,u as m,g as e}from"./index.d68be814.js";const k={class:"content"},V=T({__name:"toasts",setup(B){const i=C(),f=()=>`<script lang="ts" setup>
import { useToaster } from '@warhsn/vuema'

const toast = useToaster()
<\/script>

<template>
    <action-button
        @click="toast.error('Whoops')">
        Click Me
    </action-button>
</template>`,g=()=>`import VueBulma from '@warhsn/vuema'

app.use(VueBulma, {
    toaster: {
        position: 'bottom-right',
        timeout: 4000,
        transition: 'toast'
    }
})
`,v=()=>`# ExampleCompnent.vue
<script lang="ts" setup>
import { useToaster } from '@warhsn/vuema'

const toast = useToaster()
<\/script>`,c=()=>`# ExampleCompnent.vue
<script lang="ts" setup>
import { useToaster } from '@warhsn/vuema'

const toast = useToaster()
toast.setPosition('top-right')
<\/script>`;return(E,t)=>{const a=u("action-button"),b=u("buttons"),s=u("column"),r=u("highlightjs"),p=u("columns");return x(),w("div",k,[t[18]||(t[18]=o("h1",null,"Toasts",-1)),t[19]||(t[19]=o("hr",null,null,-1)),n(p,null,{default:l(()=>[n(s,null,{default:l(()=>[t[8]||(t[8]=o("p",null,"The Toast utility implements Bulma's notification component, offering comprehensive configuration options including timeout duration, transition effects, and positioning settings. ",-1)),n(b,null,{default:l(()=>[n(a,{"is-success":"",onClick:t[0]||(t[0]=d=>m(i).success("Good Job"))},{default:l(()=>t[4]||(t[4]=[e("Success Toast")])),_:1}),n(a,{"is-info":"",onClick:t[1]||(t[1]=d=>m(i).info("Welcome Back"))},{default:l(()=>t[5]||(t[5]=[e("Info Toast")])),_:1}),n(a,{"is-danger":"",onClick:t[2]||(t[2]=d=>m(i).error("Whoops"))},{default:l(()=>t[6]||(t[6]=[e("Error Toast")])),_:1}),n(a,{"is-warning":"",onClick:t[3]||(t[3]=d=>m(i).warning("Be Careful"))},{default:l(()=>t[7]||(t[7]=[e("Warning Toast")])),_:1})]),_:1}),t[9]||(t[9]=o("p",null,"The available positions are as follows:",-1)),t[10]||(t[10]=o("ul",null,[o("li",null,[o("code",null,"bottom-left")]),o("li",null,[o("code",null,"bottom-center")]),o("li",null,[o("code",null,"bottom-right")]),o("li",null,[o("code",null,"top-left")]),o("li",null,[o("code",null,"top-center")]),o("li",null,[o("code",null,"top-right")])],-1))]),_:1}),n(s,{"is-4":""},{default:l(()=>[t[11]||(t[11]=o("small",null,"Example",-1)),n(r,{class:"is-rounded",language:"javascript",code:f()},null,8,["code"])]),_:1})]),_:1}),n(p,null,{default:l(()=>[n(s,null,{default:l(()=>[t[12]||(t[12]=o("h3",null,"Basic Usage",-1)),t[13]||(t[13]=o("p",null,[e("Import the "),o("code",null,"useToaster"),e(" composable into your component and instantiate it. Aferwards the toaster will be available on the instance. ")],-1)),n(r,{class:"is-rounded",language:"javascript",code:v()},null,8,["code"])]),_:1})]),_:1}),n(p,null,{default:l(()=>[n(s,null,{default:l(()=>[t[14]||(t[14]=o("h3",null,"Global Configuration",-1)),t[15]||(t[15]=o("p",null,"The Toaster utility can be configured at a global level when importing the Vuema plugin. ",-1)),n(r,{class:"is-rounded",language:"javascript",code:g()},null,8,["code"])]),_:1})]),_:1}),n(p,null,{default:l(()=>[n(s,null,{default:l(()=>[t[16]||(t[16]=o("h3",null,"Component Overrides",-1)),t[17]||(t[17]=o("p",null,"Toaster positions can be overriden at a component level. ",-1)),n(r,{class:"is-rounded",language:"javascript",code:c()},null,8,["code"])]),_:1})]),_:1})])}}});export{V as default};
