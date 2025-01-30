<template>
    <div class="content">
        <div>
            <h1>Buttons</h1>
            <hr>
        </div>

        <columns>
            <column>
                <h4>Action Button</h4>
                <p>
                    Action buttons serve as versatile interaction components. Size and style customization is facilitated through props. 
                    The 'processing' prop enables you to manage the loading 
                    state of the button dynamically. Icons can be positioned on the left or right using the 'left-icon' or 'right-icon' props.
                </p>
                <buttons>
                    <action-button 
                        is-small
                        @click="toggleProcessing" 
                        :loading="data.processing">
                        Small Button
                    </action-button>
                    <action-button 
                        is-medium
                        @click="toggleProcessing" 
                        :loading="data.processing">
                        Medium Button
                    </action-button>
                    <action-button 
                        is-large
                        @click="toggleProcessing" 
                        :loading="data.processing">
                        Large Button
                    </action-button>
                </buttons>
                
                <columns>
                    <column>
                        <h4>Submit Button</h4>
                        <p>
                            Submit buttons inherit all functionality of the action button with 2 slight differences. Submit buttons are
                            typically used within forms.
                        </p>
                        <ol>
                            <li>The component is declared as submit-button instead of action-button.</li>
                            <li>The component emits a "submit" event instead of a click event.</li>
                        </ol>

                        <submit-button 
                            left-icon="paper-plane"
                            @submit="toggleProcessing" 
                            :loading="data.processing">
                            Submit Me
                        </submit-button>
                    </column>
                </columns>

                <columns>
                    <column>
                        <h4>Icons</h4>
                        <p>
                            Icons can be placed to the left or right of the button text by specifying a left-icon or right-icon prop as shown in the
                            examples on this page. Both left and right icon positions support different icon packs, types and have class support.
                        </p>

                        <buttons>
                            <action-button 
                                is-danger 
                                left-icon="times-circle"
                                left-icon-type="far">
                                Remove
                            </action-button>
                            <action-button 
                                is-success 
                                right-icon="plus"
                                right-icon-type="fas">
                                Create
                            </action-button>
                        </buttons>
                    </column>
                </columns>
            </column>
             <column class="is-4">
                <columns>
                    <column>
                        <small>Example</small>
                        <highlightjs class="is-rounded" autodetect :code="buttonsExample()" />
                    </column>
                </columns>
            </column>
        </columns>

        <columns>
            <column>
                <h4>Button Groups and Addons</h4>

                <p>
                    The buttons component is handy when multiple buttons need to be displayed together on the same line. The has-addons prop
                    allows for powerful customization such as rounding the buttons or effecting the button sizes in unison.
                </p>

                <buttons has-addons>
                    <action-button 
                        is-rounded
                        left-icon="user"
                        @click="toggleProcessing" 
                        :loading="data.processing">
                        Users
                    </action-button>
                    <action-button 
                        is-rounded
                        @click="toggleProcessing"
                        :loading="data.processing">
                        Action Button
                    </action-button>
                </buttons>
            </column>
            <column class="is-4">
                <columns>
                    <column>
                        <small>Example</small>
                        <highlightjs class="is-rounded" autodetect :code="buttonAddonsExample()" />
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
                            <th>Prop</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
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
                        <tr>
                            <td>is-rounded</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>are-normal</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>are-small</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>are-medium</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>are-large</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>is-info</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>is-primary</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>is-warning</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>is-danger</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>has-addons</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>left-icon</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>left-icon-class</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>left-icon-type</td>
                            <td>String</td>
                            <td>far</td>
                        </tr>
                        <tr>
                            <td>right-icon</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>right-icon-class</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>right-icon-type</td>
                            <td>String</td>
                            <td>far</td>
                        </tr>
                        <tr>
                            <td>icon-pack</td>
                            <td>String</td>
                            <td>Font Awesome Regular</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
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
import { reactive } from 'vue';

    let data = reactive({
        processing: false
    })

    const toggleProcessing = () => {
        data.processing = !data.processing

        setTimeout(() => data.processing = false, 1000) 
    }

    const buttonsExample = () => {
        return `<action-button 
    is-small is-danger
    @click="processing = true" 
    :loading="${data.processing}">
    Small Button
</action-button>

<action-button 
    is-medium is-warning
    @click="processing = true" 
    :loading="${data.processing}">
    Medium Button
</action-button>

<action-button 
    is-large is-success
    @click="processing = true" 
    :loading="${data.processing}">
    Large Button
</action-button>

<submit-button 
    right-icon="user"
    @submit="toggleProcessing" 
    :loading="${data.processing}">
    Submit Me
</submit-button>`
    }


const buttonAddonsExample = () => {
        return `<buttons
    has-addons>
    <action-button 
        is-rounded
        left-icon="user"
        @click="toggleProcessing" 
        :loading="${data.processing}">
        Users
    </action-button>
    <action-button 
        is-rounded
        @click="toggleProcessing"
        :loading="${data.processing}">
        Action Button
    </action-button>
</buttons>`
    }
</script>