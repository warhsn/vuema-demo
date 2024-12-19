<template>
    <div>
        <action-button @click="showModal = !showModal">Show Modal</action-button>
        <Teleport to="body">
            <modal 
                is-card
                :is-active="showModal"
                @close="showModal = false"
                title="Modal Title">
                content
            </modal>
        </Teleport>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)

</script>