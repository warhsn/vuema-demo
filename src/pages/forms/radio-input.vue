<template>
    <div class="content">
        <h1>Radio Input</h1>
        <columns>
            <column>
                <columns>
                    <column>
                        <h4>Basics</h4>
                        <p>
                            In it's most basic form a <span class="has-text-weight-bold">radio-input</span> component can
                            be used with nothing more than v-model and a
                            label if required. The default component slot is used for label text and offers an additional Inner
                            Label slot.
                        </p>
                    </column>
                </columns>

                <columns>
                    <column>
                        <radio-input 
                            v-model="onOff"
                            :items="[
                                {id: 1, label: 'Yes', disabled: false},
                                {id: 2, label: 'No', disabled: false},
                                {id: 2, label: 'Unsure', disabled: true},
                            ]">
                            On or Off?
                            <template #inner-label>Inner Label</template>
                        </radio-input>
                    </column>
                </columns>
            </column>
            <column class="is-4">
                <small>Example</small>
                <highlightjs class="is-rounded" language='javascript' :code="inputExample()" />
            </column>
        </columns>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const onOff = ref(null)

const inputExample = () => {
    return `<radio-input 
    v-model="onOff"
    :items="[
        {
            id: 1, 
            label: 'Yes',
            disabled: false
        },
        {
            id: 2, 
            label: 'No',
            disabled: false
        }
        {
            id: 2, 
            label: 'Unsure',
            disabled: true
        }
    ]">
    On or Off?
    <template #inner-label>
        Inner Label
    </template>
</radio-input>`
}

</script>