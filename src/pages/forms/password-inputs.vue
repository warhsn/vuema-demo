<template>
    <div class="content">
        <h1>Password Input</h1>
        <columns>
            <column>
                <columns>
                    <column>
                        <h5>Basics</h5>
                        <p>
                            In it's most basic form a <span class="has-text-weight-bold">password-input</span> component can
                            be used with nothing more than v-model and a
                            label if required. The default component slot is used for label text.
                        </p>
                    </column>
                </columns>

                <columns>
                    <column>
                        <password-input 
                            with-toggle
                            is-expanded
                            required
                            v-model="password">
                            Password
                        </password-input>
                    </column>
                </columns>
            </column>
            <column class="is-4">
                <columns>
                    <column>
                        <h5>Example</h5>
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
                            <td>with-toggle</td>
                            <td>Boolean</td>
                            <td>false</td>
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
import { ref } from 'vue'
const password = ref('')

const inputExample = `<password-input
    required
    with-toggle
    is-expanded
    v-model="user.password">
    Password
</password-input>`

</script>