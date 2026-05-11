# 🚀 Inicio Rápido - Comunidad Conectada

## ⚡ Opción 1: Usar AHORA MISMO (Sin instalación)

### 📱 Versión Simple HTML

**¡Puedes usar la página inmediatamente!**

1. Abre el archivo `version-simple.html` con cualquier navegador web:
   - Doble click en el archivo
   - O click derecho → "Abrir con" → Navegador (Chrome, Firefox, Edge)

2. ¡Listo! Ya puedes usar la página

3. Para compartir:
   - Copia el archivo `version-simple.html` a una USB
   - Envíalo por WhatsApp o email
   - Súbelo a Google Drive o Dropbox
   - Cualquiera puede abrirlo sin instalar nada

**✅ Ventajas**:
- No necesitas instalar nada
- Funciona sin internet (después de abrirlo una vez)
- Fácil de compartir
- Funciona en cualquier dispositivo

**❌ Limitaciones**:
- No puedes publicarlo en internet fácilmente
- Los cambios requieren editar el HTML directamente

---

## 🌐 Opción 2: Versión Completa con Astro (Recomendada para publicar)

### Requisitos
- Node.js v22 o superior

### Pasos

#### 1. Actualizar Node.js (IMPORTANTE)
Tu versión actual es v20.20.0, necesitas v22+

**Descargar e instalar**:
- Ve a: https://nodejs.org/
- Descarga la versión LTS (Long Term Support)
- Instala siguiendo el asistente
- Reinicia tu computador

**Verificar instalación**:
```bash
node --version
```
Debe mostrar v22.x.x o superior

#### 2. Instalar dependencias
```bash
cd comunidad-conectada
npm install
```

Esto puede tardar 2-3 minutos la primera vez.

#### 3. Iniciar el servidor
```bash
npm run dev
```

#### 4. Abrir en el navegador
- Abre: http://localhost:4321
- ¡Listo! Verás tu página funcionando

#### 5. Para detener el servidor
- Presiona `Ctrl + C` en la terminal

---

## 🎨 Personalizar la Página

### Cambiar datos de tu zona

**En version-simple.html**:
1. Abre el archivo con un editor de texto (Notepad++, VS Code, etc.)
2. Busca la sección `const zonasEmergencia`
3. Modifica los números y nombres
4. Guarda el archivo

**En la versión Astro**:
1. Abre `src/pages/index.astro`
2. Busca `const zonasEmergencia`
3. Modifica los datos
4. Guarda (el navegador se actualiza automáticamente)

### Ejemplo de cambio:
```javascript
{
  zona: "Tu Municipio - Tu Vereda",
  policia: "123",
  bomberos: "119",
  defensoria: "018000 914 814",
  fiscalia: "122",
  salud: "Nombre de tu centro de salud"
}
```

---

## 📤 Publicar en Internet

### Opción A: Netlify (Más fácil)

1. Construye el sitio:
   ```bash
   npm run build
   ```

2. Ve a: https://app.netlify.com/drop

3. Arrastra la carpeta `dist/` a la página

4. ¡Listo! Te dan una URL para compartir

### Opción B: GitHub Pages

1. Crea una cuenta en GitHub.com

2. Sube tu proyecto

3. Activa GitHub Pages en la configuración

4. Tu página estará en: `tu-usuario.github.io/comunidad-conectada`

### Opción C: Vercel

1. Ve a: https://vercel.com

2. Conecta tu cuenta de GitHub

3. Importa el proyecto

4. Vercel lo publica automáticamente

---

## 🆘 Solución de Problemas

### "npm no se reconoce como comando"
- Node.js no está instalado o no está en el PATH
- Reinstala Node.js y reinicia la computadora

### "Error: Cannot find module"
- Ejecuta: `npm install` de nuevo
- Verifica que estés en la carpeta correcta

### "Puerto 4321 ya está en uso"
- Cierra otros servidores que estén corriendo
- O usa: `npm run dev -- --port 3000`

### La página no se ve bien en el celular
- Asegúrate de tener la etiqueta viewport en el HTML
- Ya está incluida en ambas versiones

### No puedo editar el archivo
- Usa un editor de texto apropiado (VS Code, Notepad++)
- No uses Microsoft Word

---

## 📋 Checklist de Inicio

Antes de tu primer taller:

- [ ] Decidir qué versión usar (simple o completa)
- [ ] Abrir y probar la página
- [ ] Personalizar con datos de tu zona
- [ ] Verificar que todos los números sean correctos
- [ ] Probar en celular y computador
- [ ] Preparar ejemplos para cada temática
- [ ] Tener plan B (sin internet)
- [ ] Imprimir números de emergencia como respaldo

---

## 💡 Consejos Finales

### Para el primer uso:
1. **Empieza con la versión simple** (`version-simple.html`)
2. Pruébala en tu celular y computador
3. Muéstrasela a 2-3 personas para feedback
4. Ajusta según necesites
5. Cuando estés listo, publica la versión completa

### Para talleres:
- Siempre ten una copia offline
- Lleva los números impresos por si falla la tecnología
- Practica la navegación antes del taller
- Prepara ejemplos locales y relevantes

### Para compartir:
- Crea un enlace corto (bit.ly, tinyurl.com)
- Comparte por WhatsApp en grupos comunitarios
- Imprime códigos QR que lleven a la página
- Pega carteles en lugares públicos

---

## 🎯 Próximos Pasos

1. ✅ Abre `version-simple.html` AHORA
2. ✅ Explora todas las secciones
3. ✅ Lee `GUIA_LIDERES.md` para preparar talleres
4. ✅ Personaliza con datos de tu zona
5. ✅ Comparte con tu comunidad

---

## 📞 ¿Necesitas Ayuda?

- Lee el `README.md` para detalles técnicos
- Consulta `GUIA_LIDERES.md` para talleres
- Revisa `DATOS_EJEMPLO.md` para más zonas
- Busca en Google: "Astro tutorial español"
- Contacta a MinTIC para soporte técnico

---

**¡Éxito con tu proyecto comunitario!** 🌟

*Recuerda: La tecnología es solo una herramienta. Tu liderazgo y compromiso son lo que realmente hace la diferencia en tu comunidad.*
