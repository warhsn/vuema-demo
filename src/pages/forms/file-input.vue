<template>
    <div class="content">
        <h1>File Input</h1>
        <columns>
            <column>
                <columns>
                    <column>
                        <h4>Basics</h4>
                        <p>
                            In it's most basic form a <span class="has-text-weight-bold">file-input</span> component can
                            be used with nothing more than v-model and a
                            label if required. The default component slot is used for label text.
                        </p>
                    </column>
                </columns>

                <columns>
                    <column>
                        <file-input>
                            Profile Picture
                        </file-input>
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
    </div>
</template>
<script setup lang="ts">

const printValue = (val: any) => {
    console.log(val)
}

const inputExample = () => {
    return `<file-input
    @selected="handleFileSelection">
    Profile Picture
</file-input>`
}

</script>