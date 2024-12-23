<template>
<div class="content">
    <h1>Toasts</h1>
    <hr>

    <columns>
        <column>
            <p>The Toast utility implements Bulma's notification component, offering comprehensive 
                configuration options including timeout duration, transition effects, and positioning settings.
            </p>

            <buttons>
                <action-button is-success @click="toast.success('Good Job')">Success Toast</action-button>
                <action-button is-info @click="toast.info('Welcome Back')">Info Toast</action-button>
                <action-button is-danger @click="toast.error('Whoops')">Error Toast</action-button>
                <action-button is-warning @click="toast.warning('Be Careful')">Warning Toast</action-button>
            </buttons>

            <p>The available positions are as follows:</p>

            <ul>
                <li>
                    <code>bottom-left</code>
                </li>
                <li>
                    <code>bottom-center</code>
                </li>
                <li>
                    <code>bottom-right</code>
                </li>
                <li>
                    <code>top-left</code>
                </li>
                <li>
                    <code>top-center</code>
                </li>
                <li>
                    <code>top-right</code>
                </li>
            </ul>
        </column>
        <column is-4>
            <small>Example</small>
            <highlightjs class="is-rounded" language='javascript' :code="codeExample()" />
        </column>
    </columns>

    <columns>
        <column>
            <h3>Basic Usage</h3>
            <p>Import the <code>useToaster</code> composable into your component and instantiate it. Aferwards the
                toaster will be available on the instance.
            </p>
            <highlightjs class="is-rounded" language='javascript' :code="setupExample()" />
        </column>
    </columns>

    <columns>
        <column>
            <h3>Global Configuration</h3>
            <p>The Toaster utility can be configured at a global level when importing the Vuema plugin.
            </p>
            <highlightjs class="is-rounded" language='javascript' :code="globalConfig()" />
        </column>
    </columns>
    
    <columns>
        <column>
            <h3>Component Overrides</h3>
            <p>Toaster positions can be overriden at a component level.
            </p>
            <highlightjs class="is-rounded" language='javascript' :code="overrideExample()" />
        </column>
    </columns>
</div>
</template>
<script lang="ts" setup>
import { useToaster } from '@warhsn/vuema'
const toast = useToaster()

const codeExample = () => {
    return `<script lang="ts" setup>
import { useToaster } from '@warhsn/vuema'

const toast = useToaster()
<\/script>

<template>
    <action-button
        @click="toast.error('Whoops')">
        Click Me
    </action-button>
</template>`
}

const globalConfig = () => {
    return `import VueBulma from '@warhsn/vuema'

app.use(VueBulma, {
    toaster: {
        position: 'bottom-right',
        timeout: 4000,
        transition: 'toast'
    }
})
`
}

const setupExample = () => {
    return `# ExampleCompnent.vue
<script lang="ts" setup>
import { useToaster } from '@warhsn/vuema'

const toast = useToaster()
<\/script>`
}

const overrideExample = () => {
    return `# ExampleCompnent.vue
<script lang="ts" setup>
import { useToaster } from '@warhsn/vuema'

const toast = useToaster()
toast.setPosition('top-right')
<\/script>`
}
</script>