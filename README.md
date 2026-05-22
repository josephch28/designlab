# DesignLab 🧪

DesignLab es una guía interactiva sobre los principios fundamentales del diseño de interfaces (Tipografía, Color, Iconografía, Estados, Consistencia Visual, Interacción). Ha sido desarrollado como un proyecto académico grupal para la materia de UX/DCU.

## 🚀 Cómo correr el proyecto localmente

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🔗 Enlaces del Proyecto

- **Sitio en Producción (GitHub Pages):** https://github.com/josephch28/designlab
- **Prototipo en Figma (Hi-Fi):** https://www.figma.com/design/O8zqIGY3W9569MAo2W7Dpg/Untitled?node-id=0-1&t=BmSiX1739uW6lzK5-1

## 👥 Integrantes del Equipo

- **Joseph:** Configuración base del repositorio, Layout principal (`ModuleLayout`), variables CSS, módulos de Tipografía y Color.
- **Pandy:** Módulos interactivos de Iconografía y Estados, documentación y recolección de research.
- **Jota:** Módulos de Consistencia Visual e Interacción (Próximamente).

## 🧠 Decisiones de Diseño

| Decisión | ¿Por qué se tomó? | Alternativa descartada |
|----------|-------------------|------------------------|
| **Uso de CSS plano con Variables (`:root`)** | Fomenta el entendimiento de las bases de CSS y mantiene un control centralizado sin sobrecargar el HTML. | TailwindCSS (se descartó para evitar curva de aprendizaje adicional y clases muy largas en el JSX). |
| **Iconos Outline de Tabler (`@tabler/icons-react`)** | Tienen un grosor de línea (stroke) uniforme y un estilo limpio que encaja perfectamente con el diseño Hi-Fi propuesto. | FontAwesome o Material Icons (descartados porque visualmente chocaban con la estética redondeada/moderna del proyecto). |
| **Normalización estricta de inputs (Iconografía)** | Quitar acentos, mayúsculas y espacios extra previene que el usuario falle injustamente por un error de tipeo menor, mejorando la UX del ejercicio. | Coincidencia exacta (Strict match). Se descartó porque causaba mucha frustración durante las pruebas. |
| **Transiciones CSS de 200ms en el Botón (Estados)** | `200ms ease` es el estándar en UI moderna; es lo suficientemente rápido para sentirse responsivo pero permite al ojo notar el cambio. | Transiciones instantáneas (0ms) o muy lentas (>300ms). Se descartaron por sentirse toscas o letárgicas. |

## 📁 Research
Las capturas y resultados de las encuestas de Google Forms se encuentran en el directorio `/research`.
