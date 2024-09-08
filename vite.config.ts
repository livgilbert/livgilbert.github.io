import handlebars from 'vite-plugin-handlebars';
import resume from "./resume.json"
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    handlebars({
      context: resume,
      partialDirectory: resolve(__dirname, 'partials'),
      helpers: {
        isInteger: i => /^\d+$/.test(i),
        test: (i, options) => (true)
      }
      })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        plain: resolve(__dirname, "plain/index.html")
      }
    }
  }
})
