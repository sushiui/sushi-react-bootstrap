// Original
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SushiBootstrap',
      fileName: (format) => `sushi-bootstrap.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-bootstrap', 'bootstrap'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-bootstrap': 'ReactBootstrap',
          'bootstrap': 'Bootstrap'
        }
      }
    }
  }
})