<template>
    <action-button 
        is-small 
        @click="open = true">
        Confirm
    </action-button>
    <confirm 
        :is-active="open"
        :confirming="confirming"
        title-icon="circle-xmark"
        title="Remove Item"
        title-icon-type="fa-regular"
        @cancel="open = false"
        @confirm="processConfirmation">
        Are you sure you want to proceed with this action?
    </confirm>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const confirming = ref(false)
const open = ref(false)

function processConfirmation() {
    confirming.value = true
    setTimeout(() => {
        confirming.value = false
        open.value = false
    }, 1500)
}

</script>