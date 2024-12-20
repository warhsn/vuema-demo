<template>
    <div>
        <h4 class="title">Dropdown</h4>
        <hr>
    </div>

    <columns>
        <column>
            <columns>
                <column>
                    <p>
                        Dropdown menus are versitile components allowing for rich content. By default the component reacts to click events
                        but can be set to hover by adding the hoverable prop. Dropdown Items emit click events.
                    </p>
                </column>
            </columns>
            <dropdown>
                <template #trigger>
                    Dropdown
                </template>

                <dropdown-item>
                    <div>
                        <p>Rich content</p>
                    </div>
                </dropdown-item>
                <dropdown-item>
                    <a href="#">Links</a>
                </dropdown-item>
                <dropdown-divider />
                <dropdown-item>Tester</dropdown-item>
            </dropdown>
        </column>
        <column class="is-4">
            <columns>
                <column>
                    <small>Example</small>
                    <highlightjs class="is-rounded" autodetect :code="dropDownExample()" />
                </column>
            </columns>
        </column>
    </columns>

    <columns>
        <column>
            <h4 class="title is-4">Props</h4>
            <table class="table is-striped is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>hoverable</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>align</td>
                        <td>String</td>
                        <td>right</td>
                    </tr>
                </tbody>
            </table>
        </column>
    </columns>
</template>
<script lang="ts" setup>
const dropDownExample = () => {
        return `<dropdown
    align="left">
    <template #trigger>
        Dropdown
    </template>

    <dropdown-item>
        <div>
            <p>Rich content</p>
        </div>
    </dropdown-item>
    <dropdown-item>
        <a href="#">Links</a>
    </dropdown-item>
    <dropdown-divider />
    <dropdown-item>Tester</dropdown-item>
</dropdown>`
    }
</script>