# 🌄 Comunidad Conectada y Segura

Plataforma web educativa para comunidades rurales de Colombia enfocada en seguridad digital y contactos de emergencia.

## 📋 Características

- ✅ **Contactos de emergencia por zona** - Números de policía, bomberos, fiscalía, defensoría y centros de salud
- ✅ **Filtro por ubicación** - Muestra siempre los contactos más cercanos según la zona seleccionada
- ✅ **7 Temáticas de seguridad digital**:
  - Acceso a internet en zonas rurales
  - Identificación de noticias falsas
  - Protección de información personal
  - Seguridad de niños en redes sociales
  - Denuncia de acoso y engaño en línea
  - Uso saludable del celular
  - Talleres para adultos mayores

- ✅ **Diseño icónico y claro** - Fácil de entender para cualquier persona
- ✅ **Responsive** - Funciona en celulares, tablets y computadores
- ✅ **Interactivo** - Click en tarjetas para más información o para llamar

## 🚀 Instalación

### Requisitos previos
- Node.js versión 22 o superior (actualmente tienes v20, necesitas actualizar)

### Pasos de instalación

1. **Actualizar Node.js** (importante):
   - Descarga Node.js v22 desde: https://nodejs.org/
   - Instala la versión LTS más reciente

2. **Instalar dependencias**:
   ```bash
   cd comunidad-conectada
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   - Visita: http://localhost:4321

## 📦 Comandos disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa del sitio construido localmente |

## 🎨 Personalización

### Agregar más zonas

Edita el archivo `src/pages/index.astro` y agrega más zonas en el array `zonasEmergencia`:

```javascript
const zonasEmergencia = [
  {
    zona: "Tu Zona",
    municipio: "Tu Municipio",
    policia: "123",
    bomberos: "119",
    defensoriaDelPueblo: "018000 914 814",
    fiscalia: "122",
    centroSalud: "Nombre del centro de salud"
  },
  // Agrega más zonas aquí...
];
```

### Modificar temáticas

Edita el array `tematicas` en el mismo archivo para agregar, quitar o modificar temas:

```javascript
const tematicas = [
  {
    id: 8,
    titulo: "Nueva Temática",
    descripcion: "Descripción de la nueva temática",
    icono: "🎯", // Emoji que represente el tema
    color: "#FF5722" // Color en hexadecimal
  }
];
```

## 🌐 Despliegue

Para publicar tu sitio en internet:

1. **Construir el sitio**:
   ```bash
   npm run build
   ```

2. **Opciones de hosting gratuito**:
   - **Netlify**: Arrastra la carpeta `dist/` a netlify.com/drop
   - **Vercel**: Conecta tu repositorio en vercel.com
   - **GitHub Pages**: Sube la carpeta `dist/` a tu repositorio

## 📱 Uso en comunidades

Esta plataforma está diseñada para:
- Líderes comunitarios que necesitan información rápida
- Talleres de alfabetización digital
- Puntos de acceso comunitario a internet
- Capacitaciones en escuelas rurales

## 🤝 Contribuir

Para agregar información de tu comunidad:
1. Edita los datos de contacto en `src/pages/index.astro`
2. Personaliza los colores y temáticas según tu región
3. Comparte con tu comunidad

## 📄 Licencia

Este proyecto es de código abierto y puede ser usado libremente por comunidades rurales de Colombia.

---

**Creado para el encuentro veredal en Vereda Indazurí, Santander - Mayo 2026**

*Líderes comunitarios • Madres • Jóvenes • Docentes*
