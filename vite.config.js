import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'

// Em produção o site fica em https://danilohonda.github.io/portfolio/,
// por isso o build usa o subcaminho /portfolio/. No dev a base continua "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [vue({ ...templateCompilerOptions })],
  server: { port: 5173 }
}))
