import { defineConfig } from 'vitest/dist/config'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    libCss({})
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'krei',
      formats: ['es', 'umd'],
      fileName: 'krei'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'style.css'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
