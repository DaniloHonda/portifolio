import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'

// Em produção o site fica em https://danilohonda.github.io/portifolio/,
// por isso o build usa o subcaminho /portifolio/. No dev a base continua "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portifolio/' : '/',
  plugins: [vue({ ...templateCompilerOptions })],
  server: { port: 5173 }
}))
