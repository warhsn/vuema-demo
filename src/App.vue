<template>
  <div class="page-wrap">
    <div class="page-header is-flex is-justify-content-space-between is-align-items-center">
      <div>
        <p class="logo-text">Vuema</p>
      </div>
      <div>
        <action-button @click="toggleDarkMode" is-small class="mr-3 theme-button">
          <b-icon
            :icon="isDark ? 'sun' : 'moon'" 
            :class="{
              'has-text-warning': isDark,
              'has-text-info': !isDark,
            }"
          />
        </action-button>
        <github-button 
          href="https://github.com/warhsn/payfast" 
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
      <side-menu-label>
        General
      </side-menu-label>

      <side-menu-list>
        <side-menu-list-item>
          <router-link :to="{ name: 'welcome' }">Welcome</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'installation' }">Installation</router-link>
        </side-menu-list-item>
      </side-menu-list>

      <side-menu-label>
        Basics
      </side-menu-label>

      <side-menu-list>
        <side-menu-list-item>
          <router-link :to="{ name: 'columns' }">Columns</router-link>
        </side-menu-list-item>
      </side-menu-list>

      <side-menu-label>
        Elements
      </side-menu-label>

      <side-menu-list>
        <side-menu-list-item>
          <router-link :to="{ name: 'buttons' }">Buttons</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'dropdown' }">Dropdown</router-link>
        </side-menu-list-item>
        
        <side-menu-label>
          Forms
        </side-menu-label>

        <side-menu-list-item>
          <router-link :to="{ name: 'text-input' }">Text Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'number-input' }">Number Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'currency-input' }">Currency Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'checkbox-input' }">Checkbox Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'radio-input' }">Radio Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'password-input' }">Password Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'select-input' }">Select Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'file-input' }">File Input</router-link>
        </side-menu-list-item>
        <side-menu-list-item>
          <router-link :to="{ name: 'date-picker' }">Date Picker</router-link>
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
              <router-link :to="{ name: 'modals' }">Modal</router-link>
              <router-link :to="{ name: 'alert-dialogs' }">Alert Dialog</router-link>
              <router-link :to="{ name: 'confirm-dialogs' }">Confirm Dialog</router-link>
            </side-menu-list-item>
          </side-menu-list>
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
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', '1')
  } else {
    console.log(theme)
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', '0')
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
