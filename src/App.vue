<template>
  <div class="page-wrap">
    <div class="page-header is-flex is-justify-content-space-between is-align-items-center">
      <div class="is-flex is-align-items-center">
        <router-link :to="{ name: 'installation' }" class="logo-text is-clickable">Vuema</router-link>
      </div>
      <div>
        <action-button @click="toggleDarkMode" is-small class="mr-3 theme-button">
          <b-icon
            v-if="isDark"
            icon="sun" 
            class="has-text-warning"
          />
          <b-icon
            v-else
            icon="moon"
            icon-type="fas"
            class="has-text-info"
          />
        </action-button>
        <github-button 
          href="https://github.com/warhsn/vuema" 
          data-color-scheme="no-preference: light; light: light; dark: dark;" 
          data-size="large" 
          data-show-count="true" 
          aria-label="Star warhsn/vuema on GitHub">
          Star
        </github-button>
      </div>
    </div>
    <!-- <nav class="page-nav">
      Nav
    </nav> -->
    <main class="page-main">
      <RouterView />
    </main>
    <side-menu class="page-sidebar">
      <side-menu-list>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'installation' }">Quick Start</router-link>
        </side-menu-list-item>
      </side-menu-list>

      <side-menu-label>
        Basics
      </side-menu-label>

      <side-menu-list>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'columns' }">Columns</router-link>
        </side-menu-list-item>
      </side-menu-list>

      <side-menu-label>
        Elements
      </side-menu-label>

      <side-menu-list>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'buttons' }">Buttons</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'dropdown' }">Dropdown</router-link>
        </side-menu-list-item>
        
        <side-menu-label>
          Forms
        </side-menu-label>

        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'text-input' }">Text Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'number-input' }">Number Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'currency-input' }">Currency Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'checkbox-input' }">Checkbox Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'radio-input' }">Radio Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'password-input' }">Password Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'select-input' }">Select Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'file-input' }">File Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'date-picker' }">Date Picker</router-link>
        </side-menu-list-item>
      </side-menu-list>

      <side-menu-label>
        Components
      </side-menu-label>

      <side-menu-list>
        <side-menu-list-item>
          <router-link :to="{ name: 'modals' }">Modals & Dialogs</router-link>
          <side-menu-list>
            <side-menu-list-item>
              <router-link active-class="is-active" :to="{ name: 'modals' }">Modal</router-link>
              <router-link active-class="is-active" :to="{ name: 'dialogs' }">Dialogs</router-link>
            </side-menu-list-item>
          </side-menu-list>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link active-class="is-active" :to="{ name: 'toasts' }">Toasts</router-link>
        </side-menu-list-item>
      </side-menu-list>

    </side-menu>
    <!-- <footer class="page-footer">
      Footer
    </footer> -->
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import GithubButton from 'vue-github-button'
import { onMounted, ref } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  const theme = localStorage.getItem('theme')

  if (!theme || theme === '0') {
    console.log('moving from light', theme)
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', '1')
    console.log(isDark.value)
  } else {
    console.log('moving from dark', theme)
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', '0')
    console.log(isDark.value)
  }
}

onMounted(() => {
  const theme = localStorage.getItem('theme')

  if (!theme || theme === '0') {
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    isDark.value = true
  }
})

</script>
