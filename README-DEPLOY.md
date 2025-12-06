# Guía de Deploy en GitHub Pages

## Verificar el nombre de tu repositorio

El nombre de tu repositorio en GitHub debe coincidir exactamente con la configuración. Para verificar:

1. Ve a tu repositorio en GitHub
2. El nombre aparece en la URL: `https://github.com/TU-USUARIO/NOMBRE-DEL-REPO`
3. Copia el nombre exacto (respetando mayúsculas y minúsculas)

## Configuración actual

Si tu repositorio se llama diferente a `Calorie-tracker`, actualiza el archivo `vite.config.ts`:

```typescript
base: '/TU-NOMBRE-EXACTO-DE-REPO/',
```

## Pasos para hacer deploy

1. **Haz commit de los cambios:**
   ```bash
   git add .
   git commit -m "Configurar deploy en GitHub Pages"
   git push origin main
   ```

2. **Habilita GitHub Pages:**
   - Ve a Settings → Pages en tu repositorio
   - En "Source", selecciona "GitHub Actions"

3. **Espera a que el workflow termine:**
   - Ve a la pestaña "Actions"
   - Espera a que el workflow "Deploy to GitHub Pages" termine exitosamente

4. **Accede a tu sitio:**
   - Tu sitio estará disponible en: `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

## Solución de problemas

Si ves errores 404:
- Verifica que el nombre del repositorio en `vite.config.ts` coincida exactamente
- Asegúrate de que el workflow se haya ejecutado correctamente
- Verifica que GitHub Pages esté habilitado y usando "GitHub Actions" como fuente

