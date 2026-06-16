# Parcial React - ExamenProgWeb

Proyecto grupal de Programación Web (2026).

Somos Milagros Belen Pedrasa,Renato Gaston Ruiz , Torres Oliva Hector Gabriel y Nahuel Valentin Heredia. Armamos una app de posts con React que consume la API de JSONPlaceholder (https://jsonplaceholder.typicode.com/posts).

---
## Cómo correr el proyecto
Entrar a la carpeta ExamenProgWeb (no a ParcialReact, ahí no funciona):
```
cd ExamenProgWeb
npm install
npm run dev
```
Después abrir http://localhost:5173/#/
---
## Cómo nos organizamos
Al principio armamos un plan entre los cuatro para no pisarnos el trabajo. La idea fue separar por capas: primero lo que no dependía de nadie, después ir conectando todo.
Una regla que acordamos: **ningún componente ni page hace fetch directo**. Todo el fetch queda en el service, el context lo usa, y las pages llegan a los datos por hooks.
---
## Qué hizo cada uno

**RENATO**Inicio la base del proyecto. creo repo y las carpetas vacias para que los demas trabajen tranquilos en sus propias ramas 
**Milagros** arrancó con el ThemeContext (modo claro/oscuro) en `context/ThemeContext.jsx`, el hook `UseTheme.js` y los estilos en `theme.css`. Eso lo pudo hacer en paralelo sin esperar a nadie. Gabriel y Nahuel necesitaban eso para seguir con sus partes.

**Gabriel** se encargó del service en `services/posts.service.js`. Ahí están las 5 funciones del CRUD con fetch: getAll, getById, create, update y remove. Es el único archivo del proyecto que habla con la API. Cuando lo terminó avisó al grupo para hacer merge a main.

**Nahuel** hizo los componentes en la carpeta `components/`: PostCard, PostForm, ConfirmDeleteModal, LoadingSpinner, ErrorMessage, Navbar y Footer. Cada uno con su CSS. Mientras Gabriel terminaba el service, Nahuel pudo avanzar usando datos de prueba en los componentes.

**Renato** trabajó cuando el service ya estaba en main. Armó el `PostsContext` con useReducer (posts, loading, error) y los métodos cargarPosts, obtenerPostPorId, agregarPost, editarPost y eliminarPost. También creó los hooks en `usePosts.js`: usePosts, usePostsList y usePostDetail. Todo eso llama al service de Gabriel, no repite la lógica de fetch.

**Milagros** (después de que Rena y Nahuel terminaron) hizo la integración final: las pages, el router, el layout, Bootstrap y SweetAlert2.

**RENATO** se encarga de hacer deploy


En `page/` quedaron:
- PostsPage: listado con usePostsList y PostCard
- PostDetailPage: detalle con usePostDetail
- PostFormPage: crear y editar (la base del form la hizo Nahuel, la page ya estaba armada)
- NotFoundPage: error 404

También configuró AppRouter con las rutas (/ , /nuevoPost, /editarPost/:id, /detalle/:id), el Layout con Navbar y Footer, y main.jsx con los providers.
Le sumó Bootstrap encima de los CSS que ya había hecho Nahuel (no los borró). Para el modo oscuro agregó data-bs-theme en el Layout y reglas extra en theme.css.
Para los mensajes de confirmación y éxito instaló sweetalert2, creó utils/alerts.js y lo conectó en las pages de listado, detalle y formulario.

---

## Rutas de la app
- / → listado de posts
- /detalle/:id → detalle de un post
- /nuevoPost → crear post
- /editarPost/:id → editar post
- cualquier otra → página 404



## Tecnologías que usamos
React, Vite, React Router (HashRouter), Bootstrap 5 por CDN, SweetAlert2, JSONPlaceholder.
---

## Entrega
- README con este documento
- Deploy a GitHub Pages (npm run deploy)
- Comprimir en ParcialReact.zip
- Subir por Teams
---

## Cumplimiento de la consigna del proyecto
Acá dejamos punto por punto lo que pide el profe, qué tenemos hecho y qué nos falta todavía.
---

### Condiciones de presentación

**Lo que pide el profe:** entregar el código completo, un README con instrucciones e integrantes, una demo en GitHub Pages o un video, y subir un zip llamado `ParcialReact` por Teams (lo sube un solo integrante del grupo).

**Lo que cumplimos:**
- Código fuente completo del proyecto en React + Vite.
- Este README con cómo instalar (`npm install`) y correr (`npm run dev`) el proyecto.
- Nombres de los integrantes: Gabriel, Nahuel, Milagros Pedrasa y Rena.

**Lo que nos falta:**
- Publicar la app en GitHub Pages y pegar acá la URL (ejemplo: `https://TU-USUARIO.github.io/ParcialReact/`). Si no hacemos el deploy, hay que grabar el video demostrativo.
- Configurar el deploy: falta poner `base: '/ParcialReact/'` en `vite.config.js`, instalar `gh-pages` y agregar los scripts `predeploy` y `deploy` en el `package.json`.
- Comprimir todo en `ParcialReact.zip` y subirlo por Teams al momento de entregar.

**Nota:** ya tenemos `HashRouter` en `main.jsx`, que es lo que pide el Anexo A para que GitHub Pages no tire 404 al refrescar.

---

### 1. CRUD sobre la API (30 puntos)

**Lo que pide el profe:** una SPA que consuma JSONPlaceholder y haga GET, POST, PUT y DELETE sobre `/posts` usando solo `fetch`. Tiene que haber loading, errores amigables, y después de crear/editar/eliminar actualizar el estado local sin volver a hacer un GET.

**Lo que cumplimos:**
- Las 5 operaciones están en `services/posts.service.js` (getAll, getById, create, update, remove).
- Ningún componente hace `fetch` directo; todo pasa por el service y el `PostsContext`.
- Spinner de carga (`LoadingSpinner`) y mensajes de error (`ErrorMessage` y SweetAlert2).
- Al crear, editar o eliminar un post, la lista se actualiza sola sin recargar la página ni pedir la lista de nuevo a la API.

**Detalle menor:** el listado trae 15 posts (`?_limit=15`) en lugar de los 100. Funciona igual, pero la consigna dice "todos".

---

### 2. React Router (20 puntos)

**Lo que pide el profe:** al menos 3 rutas — listado en `/`, detalle en `/posts/:id`, y una ruta extra a elección. Usar HashRouter (para GitHub Pages), Link, useNavigate, useParams, y un Navbar.

**Lo que cumplimos:**
- `/` → listado de posts (`PostsPage`).
- `/detalle/:id` → detalle de un post con botón para volver (`PostDetailPage`).
- `/nuevoPost` y `/editarPost/:id` → formulario para crear y editar (`PostFormPage`).
- Ruta 404 para URLs que no existen (`NotFoundPage`).
- `HashRouter`, `Routes`, `Route`, `Link`, `useNavigate` y `useParams` implementados.
- Navbar con links a Posts y Nuevo Post.

**Detalle menor:** la ruta de detalle la hicimos como `/detalle/:id` en vez de `/posts/:id` como dice la consigna. Funciona igual, solo cambia el path.

---

### 3. Hooks avanzados (20 puntos)

**Lo que pide el profe:** implementar al menos uno de estos — useContext, useReducer, o un custom hook reutilizable usado en 2+ lugares.

**Lo que cumplimos (los tres):**
- **useContext:** `ThemeContext` para el modo claro/oscuro. Lo usan `Navbar` y `Layout`.
- **useReducer:** `PostsContext` con acciones para cargar, crear, editar y eliminar posts.
- **Custom hooks:** `usePosts`, `usePostsList`, `usePostDetail` y `useTheme` en la carpeta `hooks/`, usados en varias pages y componentes.

---

### 4. Arquitectura limpia (10 puntos)

**Lo que pide el profe:** separar en carpetas `services/`, `hooks/`, `components/` y pages. El fetch solo en services, la lógica fuera del JSX, nombres claros.

**Lo que cumplimos:**
- Carpetas organizadas: `services/`, `hooks/`, `components/`, `page/`, `context/`, `router/`, `layout/`.
- Cero llamadas a `fetch` en pages ni components.
- Services hacen HTTP, hooks/context manejan estado, components solo pintan UI.

---

### 5. useRef (5 puntos)

**Lo que pide el profe:** usar `useRef` en algo real — foco automático en un input, scroll al top al cambiar de ruta, etc. No vale un contador con useRef.

**Lo que nos falta:**
- Todavía no implementamos `useRef` en ninguna parte del proyecto. Es lo único técnico que falta del parcial.
---

### 6. Interfaz y experiencia de usuario (15 puntos)
**Lo que pide el profe:** Navbar funcional, diseño responsive, loading, errores amigables, y cards con título, contenido y botón de acción.

**Lo que cumplimos:**
- Navbar con navegación y toggle de tema claro/oscuro.
- Bootstrap 5 responsive (se ve bien en mobile y desktop).
- Spinner mientras carga la API y mensajes si algo falla.
- Cards con título, contenido y botones Ver / Editar / Eliminar (`PostCard`).

---

### Resumen

- **CRUD + API (30 pts):** listo.
- **React Router (20 pts):** listo. La ruta de detalle se llama `/detalle/:id` en vez de `/posts/:id`.
- **Hooks avanzados (20 pts):** listo. Implementamos useContext, useReducer y custom hooks.
- **Arquitectura limpia (10 pts):** listo.
- **useRef (5 pts):** falta.
- **UI/UX (15 pts):** listo.

**Pendiente antes de entregar:**
1. Agregar `useRef` (por ejemplo, foco automático en el título al abrir el formulario).
2. Deploy en GitHub Pages y URL en este README.
3. Comprimir como `ParcialReact.zip` y subir por Teams.


