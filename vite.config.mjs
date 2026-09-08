import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  server: {
    hmr: false,
    host: '127.0.0.1',
    port: 5181,
    strictPort: true,
  },
})
