import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Calorie-tracker/', // Cambia esto por el nombre de tu repositorio en GitHub
})
