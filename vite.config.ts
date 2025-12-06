import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Obtener el nombre del repositorio desde la variable de entorno
  const repoName = process.env.VITE_REPO_NAME || 'Calorie-tracker'
  
  return {
    plugins: [react()],
    // Usa el nombre del repositorio desde la variable de entorno
    base: `/${repoName}/`,
  }
})
