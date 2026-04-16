# Morocco Tourism Web

Landing page en React + Vite para una agencia de viajes entre España y Marruecos.

## Mejoras aplicadas (UX + visual)

- Diseño visual más premium: nueva jerarquía, métricas de confianza, bloques de proceso y FAQ.
- Formulario funcional con **validación real de campos** y mensajes de error visibles.
- Mejoras de accesibilidad: `skip link`, `aria-label`, `aria-invalid`, labels reales y carga diferida de imágenes.
- Estructura más escalable para evolucionar a producción (secciones desacopladas y datos fácilmente editables).

## Errores corregidos

- **Formulario sin funcionalidad:** antes no tenía estado ni validaciones.
- **Sin feedback de error al usuario:** ahora muestra mensajes de error por campo.
- **Sin feedback de éxito:** ahora confirma envío correctamente.
- **Campos sin etiquetas semánticas:** se agregaron labels para mejorar UX y accesibilidad.

## Cómo usarlo

1. Instala dependencias:

```bash
npm install
```

2. Inicia entorno de desarrollo:

```bash
npm run dev
```

3. Compila producción:

```bash
npm run build
```

4. Previsualiza build:

```bash
npm run preview
```

## Próximos pasos recomendados para producción

1. Conectar formulario a backend (Formspree/EmailJS/API propia).
2. Añadir CMS o archivos JSON para gestionar circuitos y testimonios.
3. Integrar analítica (GA4 / PostHog) y eventos de conversión.
4. Implementar SEO técnico (meta tags, OpenGraph, schema.org TravelAgency).
5. Crear páginas internas por circuito con rutas en React Router.
