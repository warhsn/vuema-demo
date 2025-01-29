import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ImportProps from 'unplugin-vue-import-props/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vuema/',  // Add this line for GitHub Pages
  plugins: [
    vue(),
    ImportProps({
      configPath: resolve(__dirname, './tsconfig.json')
    })
  ],
  define: {
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': true
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});