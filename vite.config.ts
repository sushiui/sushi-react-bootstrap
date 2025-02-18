import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SushiBootstrap',
      fileName: (format) => `sushi-react-bootstrap.${format}.js`,
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
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.includes('style.css')) {
            return 'sushi-react-bootstrap.css';
          }
          return assetInfo.names?.[0] ?? assetInfo.name;
        }
      }
    },
    cssCodeSplit: false
  },
})