<template>
    <div>
        <h4 class="title">Dropdown</h4>
    </div>

    <columns>
        <column>
            <dropdown
                align="right">
                <template #trigger>
                    Dropdown
                </template>

                <dropdown-item>Test</dropdown-item>
                <dropdown-item>Tester</dropdown-item>
                <dropdown-divider />
                <dropdown-item>Tester</dropdown-item>
            </dropdown>
        </column>
    </columns>
</template>