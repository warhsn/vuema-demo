<template>
    <div class="content">
        <h1>Modal</h1>
        <hr>
        <columns>
            <column>
                <h3>Basics</h3>
                <p>The Modal component runs on Vue's powerful <a href="https://vuejs.org/guide/built-ins/teleport" target="_blank">Teleport</a> feature. By default Modals are displayed as cards but can
                    be turned off via the <code>is-card</code> prop. The <code>is-dismissable</code> prop is handy for allowing Modals
                    to be closed when clicking outside of the modal itself.
                </p>
                <modal 
                    title="Modal Title"
                    :with-footer="false">
                    <template #trigger>
                        <action-button is-info>Show Modal</action-button>
                    </template>
                    Content
                </modal>

                <h3>Trigger</h3>
                <p>The Trigger slot accepts any html elements or Vue components. This allows for fine control over how the 
                    the modal is triggered.
                </p>
                <h3>Title</h3>
                <p>Titles can be displayed using the <code>title</code> prop when only text is required. If your title requires rich content such as 
                    icons or more actions a title slot is made available.
                </p>
                <modal>
                    <template #title>
                        <div class="is-flex">
                            <b-icon icon="user" class="mr-2"/>
                            <span>
                                Add User
                            </span>
                        </div>
                    </template>
                    <template #trigger>
                        <action-button is-info>
                            Show Modal
                        </action-button>
                    </template>
                    Content
                </modal>
            </column>
            <column is-4>
                <small>Example</small>
                <highlightjs class="is-rounded" language='javascript' :code="codeExample()" />
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
                            <td>is-card</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>is-dismissable</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>is-closeable</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>to</td>
                            <td>String</td>
                            <td>body</td>
                        </tr>
                        <tr>
                            <td>transition</td>
                            <td>String</td>
                            <td>modal</td>
                        </tr>
                        <tr>
                            <td>with-footer</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>with-header</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>with-cancel</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>cancel-button-classes</td>
                            <td>String</td>
                            <td>null</td>
                        </tr>
                    </thead>
                </table>
            </column>
        </columns>
    </div>

</template>
<script setup lang="ts">

const codeExample = () => {
    return `<modal
    :with-footer="false"
    title="Modal Title">
    <template #trigger>
        <action-button>
            Show Modal
        </action-button>
    </template>
    Content
</modal>

<modal>
    <template #title>
        <b-icon icon="user"/>
        <span>
            Title
        </span>
    </template>
    <template #trigger>
        <action-button>
            Show Modal
        </action-button>
    </template>
    Content
</modal>`
}

</script>