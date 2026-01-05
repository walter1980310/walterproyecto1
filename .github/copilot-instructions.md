# Instrucciones para agentes AI (Copilot) — walterproyecto1

Breve: instrucciones prácticas para ser productivo rápidamente en este repo React + Vite.

- **Entradas / scripts**: Usa `npm run dev` para desarrollo (Vite HMR), `npm run build` para producción y `npm run preview` para una vista local del build. Ver: [package.json](package.json#L1-L40).

- **Punto de arranque**: La app monta en `src/main.jsx`. Observa que envuelve `App` con `BrowserRouter` y `CartProvider`: [src/main.jsx](src/main.jsx#L1-L20).

- **Rutas principales**: Las rutas están declaradas en `src/App.jsx` — `/`, `/about`, `/productos`, `/carrito`, `/login`. Revisa importaciones por inconsistencias (ej.: `ProductosPage`/`ProdutosPage` o `LoginPage` path). Archivo: [src/App.jsx](src/App.jsx#L1-L40).

- **Contexto de carrito**: `CartContext` persiste en `localStorage` y expone `{ cart, addToCart, removeFromCart }`. Si vas a cambiar su forma, actualiza consumidores en `src/components` y `src/pages`. Ver: [src/context/CartContext.js](src/context/CartContext.js#L1-L80).

- **Servicios / API**: Hay un archivo de servicios `src/Services/Services/apiSerce.js` actualmente vacío (nota el nombre/tipografía 'apiSerce'). Antes de implementar llamadas HTTP, confirma la convención de nombres y la estrategia (fetch/axios). Ver: [src/Services/Services/apiSerce.js](src/Services/Services/apiSerce.js#L1).

- **Hooks personalizados**: `src/hooks/useAuth.js` existe pero está vacío. Si añades autenticación, centraliza la lógica aquí y exporta provider/utiles reutilizables.

- **Convenciones detectadas**:
  - Estructura por características: `src/pages/*` para páginas, `src/components/*` para UI reutilizable, `src/Services/*` para integraciones.
  - Contexts persisten en `localStorage` (ver `CartContext`). Evita duplicar la persistencia en componentes.
  - Algunos archivos/directorios usan nombres en español/portugués (p.ej. `ProdutosPage`) y/o hay typos en imports. Verifica nombres exactos al mover/renombrar.

- **Errores/risks frecuentes a tener en cuenta**:
  - Imports con rutas incorrectas: en `src/main.jsx` la importación del provider apunta a `./context/CartContext.js/index.js` en lugar de `./context/CartContext.js`.
  - Inconsistencias entre carpetas y rutas en `App.jsx` (`ProductosPage` vs `ProdutosPage`, `LoginPage` path). Antes de cambiar nombres, busca por referencias globales.

- **Cómo probar cambios localmente**:
  1. Instala dependencias: `npm install`.
  2. Ejecuta dev server: `npm run dev`.
  3. Ejecuta lint rápido: `npm run lint`.

- **Al hacer refactors**:
  - Primero arregla import paths y nombres de ficheros pequeños (renombrados), luego corre `npm run dev` para detectar errores de runtime con HMR.
  - Si cambias la forma del `CartContext`, actualiza todas las referencias en `src/components` y `src/pages`.

- **Dónde buscar ejemplos**:
  - Barra de navegación y cards: `src/components/Navbar.jsx`, `src/components/Products/*` muestran cómo se consumen context y props.
  - Páginas de ejemplo: `src/pages/HomePage/HomePage.jsx`, `src/pages/CarritoPage/CarritoPage.jsx`.

- **Cambios que un agente AI puede hacer inmediatamente**:
  - Corregir imports rotos (normalizar rutas en `src/main.jsx` y `src/App.jsx`).
  - Implementar utilidades en `src/Services/Services/apiSerce.js` y documentar su uso.
  - Añadir tests ligeros o un stub de autenticación en `src/hooks/useAuth.js` si se requiere.

Si algo aquí está incompleto o quieres que expanda ejemplos concretos (p. ej. un PR que arregle los imports rotos), dime qué prioridad prefieres.
