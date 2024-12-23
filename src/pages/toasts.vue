<template>
<div class="content">
    <h1>Toasts</h1>
    <hr>

    <columns>
        <column>
            <action-button @click="toast.error('Whoops')">Click Me</action-button>
        </column>
        <column is-4>
            <small>Example</small>
            <highlightjs class="is-rounded" language='javascript' :code="codeExample()" />
        </column>
    </columns>
</div>
</template>
<script lang="ts" setup>
import { useToaster } from '@billow/vue-bulma'
const toast = useToaster()

const codeExample = () => {
    return `<script lang="ts" setup>
import { useToaster } from '@billow/vue-bulma'
const toast = useToaster()
<\/script>

<template>
    <action-button
        @click="toast.error('Whoops')">
        Click Me
    </action-button>
</template>`
}
</script>