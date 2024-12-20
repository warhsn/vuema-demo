<template>
    <div class="content">
        <h1>Date Picker</h1>
        <columns>
            <column>
                <columns>
                    <column>
                        <h4>Basics</h4>
                        <p>
                            In it's most basic form a <span class="has-text-weight-bold">date-picker</span> component can
                            be used with nothing more than v-model and a
                            label if required. The default component slot is used for label text.
                        </p>
                    </column>
                </columns>
                <columns>
                    <column>
                        <date-picker
                            v-model="date"
                            :min-date="'2024-01-01'"
                            :max-date="'2025-12-31'">
                            Start Date
                        </date-picker>
                    </column>
                </columns>
            </column>
            <column class="is-4">
                <columns>
                    <column>
                        <small>Example</small>
                        <highlightjs class="is-rounded" language='javascript' :code="inputExample()" />
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
                    <tbody>
                        <tr>
                            <td>min-date</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>max-date</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>String</td>
                            <td>YYYY-MM-DD</td>
                        </tr>
                        <tr>
                            <td>with-icon</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
            </column>
        </columns>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const date = ref('2024-12-04')

const inputExample = () => {
    return `<date-picker
    v-model="date"
    :min-date="'2024-01-01'"
    :max-date="'2025-12-31'">
    Start Date
</date-picker>`
}

</script>