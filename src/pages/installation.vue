<template>
    <div class="content">
        <h1>Quick Start</h1>
        <hr>

        <p>
            A lightweight and powerful UI component library that seamlessly integrates Vue 3 with Bulma CSS framework. 
            Built with TypeScript and carefully crafted to provide a simple yet robust solution for building 
            modern user interfaces.
        </p>

        <p>
            Vuema bridges the gap between Vue 3's reactive framework and Bulma's flexible CSS components. 
            By providing a set of pre-built, type-safe components, it enables developers to rapidly build 
            responsive and maintainable applications without sacrificing customization options or performance.
        </p>

        <article class="message is-warning">
            <div class="message-body">
                Ensure that Bulma has been installed into your application and is at version 1.0 or greater.
                If not simply run <code>npm i bulma</code>.
            </div>
        </article>

        <h3>Requirements</h3>

        <ul>
            <li>Vue.js 3.0 or greater</li>
            <li>Bulma 1.0 or greater</li>
        </ul>

        <h3>Installation</h3>

        <highlightjs class="is-rounded" language='shell' :code="requireCode" />
        
        <p class="mt-3">Import the package into your vue application.</p>

        <highlightjs class="is-rounded" language='javascript' :code="installCode" />
    </div>
</template>
<script lang="ts" setup>
const installCode = `import { createApp } from 'vue'
import VueBulma from '@warhsn/vuema'
import '@warhsn/vuema/style.css'

const app = createApp(App)
app.use(VueBulma)`

const requireCode = `# Using npm
npm install @warhsn/vuema

# Using yarn
yarn add @warhsn/vuema`

</script>