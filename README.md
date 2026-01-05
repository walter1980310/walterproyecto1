# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Alias / Redirect: `ProdutosPage` → `ProductosPage`

Se renombró la página de `ProdutosPage` (posible nombre en portugués) a `ProductosPage` (español) para mayor consistencia.

Si quieres mantener compatibilidad temporal con imports que todavía apuntan a la ruta antigua, puedes crear un archivo re-exportador en la ruta antigua que redirija al nuevo componente. Ejemplo:

1. Crear `src/pages/ProdutosPage/index.js` con este contenido:

```js
export { default } from "../ProductosPage/ProductosPage.jsx";
```

2. Alternativamente, puedes eliminar el directorio `src/pages/ProdutosPage` una vez que todas las referencias hayan sido actualizadas.

Notas:
- El import actual en la app apunta a `src/pages/ProductosPage/ProductosPage.jsx`. Revisa `src/App.jsx` si necesitas revertir o adaptar rutas.
- Ejecuta `npm run lint` y `npm run dev` tras cambios para detectar imports rotos.
