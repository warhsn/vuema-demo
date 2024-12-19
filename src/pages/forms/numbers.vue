<template>
    <div class="content">
        <h1>Number Input</h1>
        <columns>
            <column>
                <columns>
                    <column>
                        <h4>Basics</h4>
                        <p>
                            The <span class="has-text-weight-bold">number-input</span> inherits all functionality from the
                            <span class="has-text-weight-bold">text-input</span> component, however, it only allows for the input
                            of numerical values.
                        </p>
                    </column>
                </columns>
                <columns>
                    <column>
                        <number-input 
                            required
                            :decimals="2"
                            :min="0"
                            :max="1000"
                            v-model="age">
                            Age
                        </number-input>
                    </column>
                </columns>
            </column>
            <column class="is-4">
                <columns>
                    <column>
                        <small>Example</small>
                        <highlightjs class="is-rounded" language='javascript' :code="inputExample" />
                    </column>
                </columns>
            </column>
        </columns>

        <columns>
            <column>
                <h4>Props</h4>
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>decimals</td>
                            <td>Integer</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>Number</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>Number</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>is-rounded</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>is-expanded</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>left-icon</td>
                            <td>string</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>right-icon</td>
                            <td>string</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>is-small</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>is-medium</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>is-large</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </thead>
                </table>
            </column>
        </columns>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'


const age = ref(50)

const inputExample = computed(() => {
    return `<number-input
    :decimals="2"
    :min="0"
    :max="1000"
    placeholder="50"
    v-model="${age.value}">
    Age
</number-input>`
})

</script>