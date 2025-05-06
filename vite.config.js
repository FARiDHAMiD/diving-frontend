import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    // host: '192.168.8.14', //for testing mobile version using MiFi
    port:3000,
    proxy:{
      '/api':{
        target:'http://localhost:8000',
        // target:'https://xxxxx:8080', // for deployment
        changeOrigin: true,
      },
    },
  }
})
