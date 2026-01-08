import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base: "./"' asegura que la app funcione independientemente de si está 
  // en midominio.com o midominio.com/mi-repositorio/
  base: './', 
})