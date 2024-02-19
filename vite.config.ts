import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  vitePluginSingleSpa  from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
  plugins: [react(), vitePluginSingleSpa({
      type: 'root',
      importMaps: {
          'dev': ['src/importMap.json']
      }
  })]
})
