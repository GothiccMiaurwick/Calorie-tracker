import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(() => {
  // IMPORTANTE: Cambia esto por el nombre EXACTO de tu repositorio en GitHub
  // El nombre debe coincidir exactamente (respetando mayúsculas y minúsculas)
  // Ejemplo: Si tu repo es "calorie-tracker" (minúsculas), cámbialo aquí
  const repoName = process.env.VITE_REPO_NAME || 'Calorie-tracker'
  
  return {
    plugins: [react()],
    // Usa el nombre del repositorio desde la variable de entorno
    base: `/${repoName}/`,
  }
})
