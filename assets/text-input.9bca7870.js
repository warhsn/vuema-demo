import{d as b,c,e as l,b as e,w as n,r as i,o as E,g as a}from"./index.d68be814.js";const N={class:"content"},j=b({__name:"text-input",setup(q){const r=()=>{alert("Clicked")},p=()=>`<text-input
    placeholder="Your name"
    v-model="user.first_name">
    Name
</text-input>`,m=()=>`<text-input
    required
    v-model="user.first_name"
    :error="'The name field is required'">
    Name
</text-input>`,x=()=>`<text-input
    required
    is-loading
    v-model="user.first_name">
    Name
</text-input>`,g=()=>`<text-input
    required
    left-icon="envelope"
    right-icon="user"
    v-model="user.first_name">
    Name
</text-input>`,_=()=>`<text-input
    required
    v-model="user.first_name">
    <template #description>
        <div>
            <small>Enter full name</small>
        </div>
    </template>
    Name
</text-input>`,v=()=>`<text-input
    required
    v-model="user.first_name">
    <template #left>
        <action-button>
            <icon icon="user"/>
        </action-button>
    </template>
    <template #right>
        <action-button>
            <icon icon="envelope"/>
        </action-button>
    </template>
    Name
</text-input>`;return(B,t)=>{const u=i("column"),d=i("columns"),o=i("text-input",!0),s=i("highlightjs"),f=i("icon-button");return E(),c("div",N,[t[25]||(t[25]=l("h1",null,"Text Input",-1)),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>t[0]||(t[0]=[l("h4",null,"Basics",-1),l("p",null,[a(" In it's most basic form a "),l("span",{class:"has-text-weight-bold"},"text-input"),a(" component can be used with nothing more than v-model and a label if required. The default component slot is used for label text. ")],-1)])),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(o,{placeholder:"Your name"},{default:n(()=>t[1]||(t[1]=[a(" Name ")])),_:1})]),_:1})]),_:1})]),_:1}),e(u,{class:"is-4"},{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[t[2]||(t[2]=l("small",null,"Example",-1)),e(s,{class:"is-rounded",language:"javascript",code:p()},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>t[3]||(t[3]=[l("h4",null,"Error Handling",-1),l("p",null," An :error prop is made available for error handling and excepts an Array of String values. ",-1)])),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(o,{required:"",error:["The name field is required"]},{default:n(()=>t[4]||(t[4]=[a(" Name ")])),_:1})]),_:1})]),_:1})]),_:1}),e(u,{class:"is-4"},{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[t[5]||(t[5]=l("small",null,"Example",-1)),e(s,{class:"is-rounded",language:"javascript",code:m()},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>t[6]||(t[6]=[l("h4",null,"Loading Indicator",-1),l("p",null," Simply add an is-loading prop to any text-input to display a loading indicator. ",-1)])),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(o,{required:"","is-loading":""},{default:n(()=>t[7]||(t[7]=[a(" Name ")])),_:1})]),_:1})]),_:1})]),_:1}),e(u,{class:"is-4"},{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[t[8]||(t[8]=l("small",null,"Example",-1)),e(s,{class:"is-rounded",language:"javascript",code:x()},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>t[9]||(t[9]=[l("h4",null,"Addons",-1),l("p",null," The text-input comes with several addon utilities to expand on style and function. ",-1)])),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[t[11]||(t[11]=l("h5",null,"Icons",-1)),t[12]||(t[12]=l("p",null,"Icons can be placed on either end of the text-input using icon-left or icon-right. The default icon pack is FontAwesome but other packs can be loaded as support becomes available.",-1)),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(o,{required:"","is-expanded":"","left-icon":"envelope","right-icon":"user"},{default:n(()=>t[10]||(t[10]=[a(" Name ")])),_:1})]),_:1})]),_:1})]),_:1}),e(u,{class:"is-4"},{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[t[13]||(t[13]=l("small",null,"Example",-1)),e(s,{class:"is-rounded",language:"javascript",code:g()},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[t[16]||(t[16]=l("h5",null,"Field Descriptions",-1)),t[17]||(t[17]=l("p",null,"Descriptions can be added to text-fields to further expand on the instruction for the user.",-1)),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(o,{required:""},{description:n(()=>t[14]||(t[14]=[l("div",{class:"has-text-grey is-size-6"},[l("small",null,"Please enter your full name.")],-1)])),default:n(()=>[t[15]||(t[15]=a(" Name "))]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{class:"is-4"},{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[t[18]||(t[18]=l("small",null,"Example",-1)),e(s,{class:"is-rounded",language:"javascript",code:_()},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[t[21]||(t[21]=l("h5",null,"Left and Right Addons",-1)),t[22]||(t[22]=l("p",null,"Descriptions can be added to text-fields to further expand on the instruction for the user.",-1)),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[e(o,{"has-addons":"","is-expanded":"","is-rounded":"","is-medium":"",required:""},{left:n(()=>[e(f,{"is-rounded":"","is-medium":"",icon:"user",onClick:r})]),default:n(()=>[t[19]||(t[19]=a(" Name "))]),_:1})]),_:1}),e(u,null,{default:n(()=>[e(o,{"has-addons":"","is-rounded":"","is-expanded":"","is-medium":"",required:""},{right:n(()=>[e(f,{"is-rounded":"","is-medium":"",icon:"envelope",onClick:r})]),default:n(()=>[t[20]||(t[20]=a(" Email "))]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{class:"is-4"},{default:n(()=>[e(d,null,{default:n(()=>[e(u,null,{default:n(()=>[t[23]||(t[23]=l("small",null,"Example",-1)),e(s,{class:"is-rounded",language:"javascript",code:v()},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(u,null,{default:n(()=>t[24]||(t[24]=[l("h4",null,"Props",-1),l("table",{class:"table is-fullwidth is-striped is-bordered"},[l("thead",null,[l("tr",null,[l("th",null,"Name"),l("th",null,"Type"),l("th",null,"Default")])]),l("tbody",null,[l("tr",null,[l("td",null,"required"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"placeholder"),l("td",null,"string"),l("td",null,"null")]),l("tr",null,[l("td",null,"is-loading"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-rounded"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-expanded"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"left-icon"),l("td",null,"string"),l("td",null,"null")]),l("tr",null,[l("td",null,"right-icon"),l("td",null,"string"),l("td",null,"null")]),l("tr",null,[l("td",null,"is-small"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-medium"),l("td",null,"Boolean"),l("td",null,"false")]),l("tr",null,[l("td",null,"is-large"),l("td",null,"Boolean"),l("td",null,"false")])])],-1)])),_:1})]),_:1})])}}});export{j as default};
