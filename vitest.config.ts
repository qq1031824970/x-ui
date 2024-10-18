/// <reference types="vitest" />
// import { defineConfig } from "vite";
import { resolve } from "path";
import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  define: {
    PROD: JSON.stringify(false),
    DEV: JSON.stringify(false),
    TEST: JSON.stringify(true)
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      exclude: ['**/Select/**', ...coverageConfigDefaults.exclude],
    },
    setupFiles: [resolve(__dirname, "./vitest.setup.ts")],
  },
});
