<template>
    <div class="content">
        <h1>Text Input</h1>
        <columns>
            <column>
                <columns>
                    <column>
                        <h4>Basics</h4>
                        <p>
                            In it's most basic form a <span class="has-text-weight-bold">text-input</span> component can be used with nothing more than v-model and a 
                            label if required. The default component slot is used for label text.
                        </p>
                    </column>
                </columns>

                <columns>
                    <column>
                        <text-input
                            placeholder="Your name">
                            Name
                        </text-input>
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
                <columns>
                    <column>
                        <h4>Error Handling</h4>
                        <p>
                            An :error prop is made available for error handling and excepts an Array of String values. 
                        </p>
                    </column>
                </columns>

                <columns>
                    <column>
                        <text-input
                            required
                            :error="['The name field is required']">
                            Name
                        </text-input>
                    </column>
                </columns>
            </column>
            <column class="is-4">
                <columns>
                    <column>
                        <small>Example</small>
                        <highlightjs class="is-rounded" language='javascript' :code="errorHandlingExample()" />
                    </column>
                </columns>
            </column>
        </columns>

        <columns>
            <column>
                <columns>
                    <column>
                        <h4>Loading Indicator</h4>
                        <p>
                            Simply add an is-loading prop to any text-input to display a loading indicator.  
                        </p>
                    </column>
                </columns>

                <columns>
                    <column>
                        <text-input
                            required
                            is-loading>
                            Name
                        </text-input>
                    </column>
                </columns>
            </column>
            <column class="is-4">
                <columns>
                    <column>
                        <small>Example</small>
                        <highlightjs class="is-rounded" language='javascript' :code="loadingIndicatorExample()" />
                    </column>
                </columns>
            </column>
        </columns>

        <columns>
            <column>
                <columns>
                    <column>
                        <h4>Addons</h4>
                        <p>
                            The text-input comes with several addon utilities to expand on style and function. 
                        </p>
                    </column>
                </columns>
            </column>
        </columns>

        <columns>
            <column>
                <h5>Icons</h5>
                <p>Icons can be placed on either end of the text-input using icon-left or icon-right. The default
                        icon pack is FontAwesome but other packs can be loaded as support becomes available.</p>

                <columns>
                    <column>
                        <text-input
                            required
                            is-expanded
                            left-icon="envelope"
                            right-icon="user">
                            Name
                        </text-input>
                    </column>
                </columns>
            </column>
            <column class="is-4">
                <columns>
                    <column>
                        <small>Example</small>
                        <highlightjs class="is-rounded" language='javascript' :code="iconsExample()" />
                    </column>
                </columns>
            </column>
        </columns>

        <columns>
            <column>
                <h5>Field Descriptions</h5>
                <p>Descriptions can be added to text-fields to further expand on the instruction for the user.</p>

                <columns>
                    <column>
                        <text-input
                            required>
                            Name
                            <template #description>
                                <div class="has-text-grey is-size-6">
                                    <small>Please enter your full name.</small>
                                </div>
                            </template>
                        </text-input>
                    </column>
                </columns>
            </column>
            <column class="is-4">
                <columns>
                    <column>
                        <small>Example</small>
                        <highlightjs class="is-rounded" language='javascript' :code="descriptionsExample()" />
                    </column>
                </columns>
            </column>
        </columns>

        <columns>
            <column>
                <h5>Left and Right Addons</h5>
                <p>Descriptions can be added to text-fields to further expand on the instruction for the user.</p>

                <columns>
                    <column>
                        <text-input
                            has-addons
                            is-expanded
                            is-rounded
                            is-medium
                            required>
                            Name
                            <template #left>
                                <icon-button
                                    is-rounded
                                    is-medium
                                    icon="user"
                                    @click="alertClick" />
                            </template>
                        </text-input>
                    </column>
                    <column>
                        <text-input
                            has-addons
                            is-rounded
                            is-expanded
                            is-medium
                            required>
                            Email
                            <template #right>
                                <icon-button
                                    is-rounded
                                    is-medium
                                    icon="envelope"
                                    @click="alertClick" />
                            </template>
                        </text-input>
                    </column>
                </columns>
            </column>
            <column class="is-4">
                <columns>
                    <column>
                        <small>Example</small>
                        <highlightjs class="is-rounded" language='javascript' :code="addonsExample()" />
                    </column>
                </columns>
            </column>
        </columns>

        <columns>
            <column>
                <h4>Props</h4>
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
                            <td>is-loading</td>
                            <td>Boolean</td>
                            <td>false</td>
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
                    </tbody>
                </table>
            </column>
        </columns>
    </div>
</template>
<script setup lang="ts">

    const alertClick = () => {
        alert('Clicked')
    }

    const inputExample = () => {
        return `<text-input
    placeholder="Your name"
    v-model="user.first_name">
    Name
</text-input>`
    }

    const errorHandlingExample = () => {
        return `<text-input
    required
    v-model="user.first_name"
    :error="'The name field is required'">
    Name
</text-input>`
    }

    const loadingIndicatorExample = () => {
        return `<text-input
    required
    is-loading
    v-model="user.first_name">
    Name
</text-input>`
    }

    const iconsExample = () => {
        return `<text-input
    required
    left-icon="envelope"
    right-icon="user"
    v-model="user.first_name">
    Name
</text-input>`
    }

    const descriptionsExample = () => {
        return `<text-input
    required
    v-model="user.first_name">
    <template #description>
        <div>
            <small>Enter full name</small>
        </div>
    </template>
    Name
</text-input>`
    }

    const addonsExample = () => {
        return `<text-input
    required
    v-model="user.first_name">
    <template #left>
        <action-button>
            <icon icon="user"/>
        </action-button>
    </template>
    <template #right>
        <action-button>
            <icon icon="envelope"/>
        </action-button>
    </template>
    Name
</text-input>`
    }

</script>