
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: '/libby7b8f3243629f411bb385456e9140c7c4/',
    build: {
      outDir: '.output/libby7b8f3243629f411bb385456e9140c7c4',
      emptyOutDir: true
    },
    server: {
      host: true,
      strictPort: true,
      port: 5173
    }
  })
