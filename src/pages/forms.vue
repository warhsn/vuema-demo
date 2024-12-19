<template>
    <div>
        <columns>
            <column>
                <h4 class="title">Forms</h4>
            </column>
        </columns>

        <columns>
            <column>
                <text-input
                    classes="is-round"
                    placeholder="Type something..."
                    required
                    has-addons
                    v-model="name">
                    Username
                    <template #left>
                        <action-button class="is-static">https://</action-button>
                    </template>
                    <template #right>
                        <action-button class="is-info">Search</action-button>
                    </template>
                </text-input>
            </column>
        </columns>
        
        <columns>
            <column>
                <select-input
                    required
                    value-key="id"
                    label-key="name"
                    :items="names"
                    v-model="name">
                    Select a Country
                </select-input>
            </column>
        </columns>
        
        <columns>
            <column>
                <radio-input
                    required
                    :items="radioOptions"
                    v-model="going">
                    Are you going?
                </radio-input>
            </column>
            <column>
                <checkbox-input
                    required
                    v-model="on">
                    Are you going?
                </checkbox-input>
            </column>
        </columns>
        <columns>
            <column>
                <text-area
                    required
                    v-model="name">
                    Are you going?
                </text-area>
            </column>
        </columns>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')

const names = ref([
    { id: 1, name: 'warren' },
    { id: 2, name: 'hansen' },
])

const radioOptions = [
    { label: 'Yes', id: 1 },
    { label: 'No', id: 2 },
    { label: 'Maybe', id: 3 },
]

const going = ref(1)
const on = ref(true)

</script>