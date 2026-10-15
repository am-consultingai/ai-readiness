import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base, so the build works from any host or sub-path.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 5173, open: true },
})
