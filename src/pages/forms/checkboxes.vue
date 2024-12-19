<template>
    <div class="content">
        <h1>Checkbox Input</h1>
        <columns>
            <column>
                <columns>
                    <column>
                        <h4>Basics</h4>
                        <p>
                            In it's most basic form a <span class="has-text-weight-bold">checkbox-input</span> component can
                            be used with nothing more than v-model and a
                            label if required. The default component slot is used for label text.
                        </p>
                    </column>
                </columns>

                <columns>
                    <column>
                        <checkbox-input 
                            v-model="checked">
                            On or Off?
                            <template #inner-label>Inner Label</template>
                        </checkbox-input>
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
                    <thead>
                        <tr>
                            <td>decimals</td>
                            <td>Integer</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>currency</td>
                            <td>String</td>
                            <td>$</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>NULL</td>
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
                            <td>NULL</td>
                        </tr>
                        <tr>
                            <td>right-icon</td>
                            <td>string</td>
                            <td>NULL</td>
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
import { ref } from 'vue'

const checked = ref(false)

const inputExample = () => {
    return `<checkbox-input
    placeholder="55.99"
    v-model="product.price">
    Price
</checkbox-input>`
}

</script>