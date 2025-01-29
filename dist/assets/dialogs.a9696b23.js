import{d as x,q as h,h as m,c as w,e as t,b as n,w as e,r as i,o as v,g as o}from"./index.d68be814.js";const _={class:"content"},S=x({__name:"dialogs",setup(A){const c=h(),u=m(!1),f=m(!1);function p(){u.value=!0,setTimeout(()=>{u.value=!1,f.value=!1,c.success("Process Completed")},1500)}const g=()=>`<confirm 
    title-icon="triangle-exclamation"
    title="Remove Item"
    title-icon-type="fas"
    title-icon-class="has-text-warning"
    :confirming="confirming"
    @confirm="processConfirmation">
    <template #trigger>
        <action-button is-info>
            Click to Confirm
        </action-button>
    </template>
    Are you sure you want to
    proceed with this action?
</confirm>`,y=()=>`<alert
    title="Payment Processed">
    <template #trigger>
        <action-button 
            is-info>
            Click to Alert
        </action-button>
    </template>
    <p>
        Your payment has been 
        successfully processed.
    </p>
</alert>`;return(k,l)=>{const a=i("action-button"),C=i("confirm"),s=i("column"),r=i("columns"),d=i("highlightjs"),b=i("alert");return v(),w("div",_,[l[11]||(l[11]=t("h1",null,"Dialogs",-1)),l[12]||(l[12]=t("hr",null,null,-1)),n(r,null,{default:e(()=>[n(s,null,{default:e(()=>[l[2]||(l[2]=t("h3",null,"Confirm Dialog",-1)),l[3]||(l[3]=t("p",null,[o("A highly configurable confirmation component that supports asyncronous actions. You may optionally pass a "),t("code",null,"confirming"),o(" prop that will emit a "),t("code",null,"confirm"),o(" event and start a loader when the confirmation button is clicked. ")],-1)),n(r,null,{default:e(()=>[n(s,null,{default:e(()=>[n(C,{"title-icon":"triangle-exclamation",title:"Remove Item","title-icon-type":"fas","title-icon-class":"has-text-warning",confirming:u.value,onConfirm:p},{trigger:e(()=>[n(a,{"is-info":""},{default:e(()=>l[0]||(l[0]=[o(" Click to Confirm ")])),_:1})]),default:e(()=>[l[1]||(l[1]=o(" Are you sure you want to proceed with this action? "))]),_:1},8,["confirming"])]),_:1})]),_:1}),l[4]||(l[4]=t("table",{class:"table is-fullwidth is-striped is-bordered"},[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Type"),t("th",null,"Default")])]),t("tbody",null,[t("tr",null,[t("td",null,"title"),t("td",null,"String"),t("td",null,"null")]),t("tr",null,[t("td",null,"title-icon"),t("td",null,"String"),t("td",null,"null")]),t("tr",null,[t("td",null,"title-icon-type"),t("td",null,"String"),t("td",null,"null")]),t("tr",null,[t("td",null,"title-icon-class"),t("td",null,"String"),t("td",null,"null")]),t("tr",null,[t("td",null,"confirming"),t("td",null,"Boolean"),t("td",null,"false")]),t("tr",null,[t("td",null,"confirming"),t("td",null,"Boolean"),t("td",null,"false")]),t("tr",null,[t("td",null,"confirm-text"),t("td",null,"String"),t("td",null,"Proceed")]),t("tr",null,[t("td",null,"cancel-text"),t("td",null,"String"),t("td",null,"Cancel")])])],-1))]),_:1}),n(s,{"is-4":""},{default:e(()=>[l[5]||(l[5]=t("small",null,"Example",-1)),n(d,{class:"is-rounded",language:"javascript",code:g()},null,8,["code"])]),_:1})]),_:1}),n(r,null,{default:e(()=>[n(s,null,{default:e(()=>[l[8]||(l[8]=t("h3",null,"Alerts",-1)),l[9]||(l[9]=t("p",null,[o("The Alert component provides a simple interface for alert dialogs. It exposes a "),t("code",null,"title"),o(" prop and the main message is passed into the default slot. As with the Confirm Dialog it allows you to customise the trigger. ")],-1)),n(b,{title:"Payment Processed"},{trigger:e(()=>[n(a,{"is-info":""},{default:e(()=>l[6]||(l[6]=[o("Click to Alert")])),_:1})]),default:e(()=>[l[7]||(l[7]=t("p",null," Your payment has been successfully processed. ",-1))]),_:1})]),_:1}),n(s,{"is-4":""},{default:e(()=>[l[10]||(l[10]=t("small",null,"Example",-1)),n(d,{class:"is-rounded",language:"javascript",code:y()},null,8,["code"])]),_:1})]),_:1})])}}});export{S as default};
