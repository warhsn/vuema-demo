<template>
    <div class="content">
        <h1>Dialogs</h1>
        <hr>
        <columns>
            <column>
                <h3>Confirm Dialog</h3>
                <p>A highly configurable confirmation component that supports asyncronous actions. You may optionally pass
                    a <code>confirming</code> prop that will emit a <code>confirm</code> event and start a loader 
                    when the confirmation button is clicked.
                </p>
                <columns>
                    <column>
                        <confirm 
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
                            Are you sure you want to proceed with this action?
                        </confirm>
                    </column>
                </columns>
                <table class="table is-fullwidth is-striped is-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>title</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>title-icon</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>title-icon-type</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>title-icon-class</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>confirming</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>confirming</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>confirm-text</td>
                            <td>String</td>
                            <td>Proceed</td>
                        </tr>
                        <tr>
                            <td>cancel-text</td>
                            <td>String</td>
                            <td>Cancel</td>
                        </tr>
                    </tbody>
                </table>
            </column>
            <column is-4>
                <small>Example</small>
                <highlightjs class="is-rounded" language='javascript' :code="codeExample()" />
            </column>
        </columns>

        <columns>
            <column>
                <h3>Alerts</h3>
                <p>The Alert component provides a simple interface for alert dialogs. It exposes a <code>title</code> prop
                    and the main message is passed into the default slot. As with the Confirm Dialog it allows you to customise
                    the trigger.
                </p>

                <alert
                    title="Payment Processed">
                    <template #trigger>
                        <action-button is-info>Click to Alert</action-button>
                    </template>
                    <p>
                        Your payment has been successfully processed.
                    </p>
                </alert>
            </column>
            <column is-4>
                <small>Example</small>
                <highlightjs class="is-rounded" language='javascript' :code="alertExample()" />
            </column>
        </columns>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useToaster } from '@warhsn/vuema'

const toaster = useToaster()

const confirming = ref(false)
const open = ref(false)

function processConfirmation() {
    confirming.value = true
    setTimeout(() => {
        confirming.value = false
        open.value = false
        toaster.success('Process Completed')
    }, 1500)
}

const codeExample = () => {
    return `<confirm 
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
</confirm>`
}

const alertExample = () => {
    return `<alert
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
</alert>`
}

</script>