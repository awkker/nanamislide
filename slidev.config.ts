import { defineConfig } from '@slidev/cli'
import { resolve } from 'path'

export default defineConfig({
  addons: [
    resolve(__dirname, './addon-d2')
  ]
})

