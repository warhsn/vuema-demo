<template>
<div class="content">
    <h1>Columns</h1>
    <hr>
    <columns>
        <column>
            <p>The columns and column components provide an elegant interface for building responsive layouts.</p>
            <columns>
                <column>
                    <box class="has-background-primary">
                        <p class="has-text-black">First</p>
                    </box>
                </column>
                <column is-narrow>
                    <box class="has-background-primary">
                        <p class="has-text-black">Narrow</p>
                    </box>
                </column>
            </columns>
            <columns>
                <column is-2>
                    <box class="has-background-primary">
                        <p class="has-text-black">First</p>
                    </box>
                </column>
                <column is-3>
                    <box class="has-background-primary">
                        <p class="has-text-black">Second</p>
                    </box>
                </column>
                <column is-narrow>
                    <box class="has-background-primary">
                        <p class="has-text-black">Narrow</p>
                    </box>
                </column>
                <column>
                    <box class="has-background-primary">
                        <p class="has-text-black">Dynamic</p>
                    </box>
                </column>
            </columns>

            <columns>
                <column>
                    <table class="table is-fullwidth is-striped is-bordered">
                        <thead>
                            <tr>
                                <th>Props</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>is-multiline</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>is-centered</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>is-gapless</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>is-mobile</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>is-x</td>
                                <td class="has-text-grey">0 through 12, i.e. is-2</td>
                            </tr>
                            <tr>
                                <td>is-narrow</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>is-half</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>is-desktop</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>is-half-x</td>
                                <td class="has-text-grey">mobile, tablet, desktop, widescreen, fullhd, i.e. is-half-tablet</td>
                            </tr>
                            <tr>
                                <td>is-one-quarter-x</td>
                                <td class="has-text-grey">mobile, tablet, desktop, widescreen, fullhd, i.e. is-one-quarter-tablet</td>
                            </tr>
                            <tr>
                                <td>is-one-third-x</td>
                                <td class="has-text-grey">mobile, tablet, desktop, widescreen, fullhd, i.e. is-one-third-tablet</td>
                            </tr>
                            <tr>
                                <td>is-two-thirds-x</td>
                                <td class="has-text-grey">mobile, tablet, desktop, widescreen, fullhd, i.e. is-two-thirds-tablet</td>
                            </tr>
                            <tr>
                                <td>is-three-quarters-x</td>
                                <td class="has-text-grey">mobile, tablet, desktop, widescreen, fullhd, i.e. is-three-quarters-tablet</td>
                            </tr>
                        </tbody>
                    </table>
                </column>
            </columns>
        </column>
        <column is-4>
            <columns>
                <column>
                     <h5>Usage</h5>
                </column>
                <column is-narrow>
                    <a target="_blank" href="https://bulma.io/documentation/columns/basics/">Bulma Docs</a>
                </column>
            </columns>
           
            <highlightjs class="is-rounded" language='html' :code="columnExample" />
        </column>
    </columns>
</div>
</template>
<script lang="ts" setup>

const columnExample = `<columns>
    <column>
        First Column
    </column>
    <column is-narrow>
        Narrow Column
    </column>    
</columns>

<columns>
    <column is-2>
        <box>
            First Column
        </box>
    </column>
    <column is-3>
        <box>
            Second Column
        </box>
    </column>
    <column is-narrow>
        <box>
            Narrow Column
        </box>
    </column>
    <column>
        <box>
            Dynamic Column
        </box>
    </column>
</columns>`

</script>