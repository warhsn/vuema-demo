<template>
    <div class="content">
        <h1>Installation</h1>

        <article class="message is-warning">
            <div class="message-body">
                Ensure that Bulma has been installed into your application and is at version 1.0 or greater.
                If not simply run a npm i bulma.
            </div>
        </article>

        <p>Install the package via NPM.</p>

        <code class="is-fullwidth">
            npm i @warhsn/vuema
        </code>
        
        <p class="mt-3">Import the package into your vue application.</p>

        <highlightjs class="is-rounded" language='javascript' :code="installCode" />
    </div>
</template>
<script lang="ts" setup>
const installCode = `import { createApp } from 'vue'
import VueBulma from '@warhsn/vuema'

const app = createApp(App)
app.use(VueBulma)`

</script>