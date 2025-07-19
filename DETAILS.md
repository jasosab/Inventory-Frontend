# 📦 Frontend - Inventario de Productos Perecederos

Este módulo corresponde al **frontend** de la prueba técnica para el cargo de Ingeniero de Desarrollo. La aplicación permite gestionar productos perecederos, registrar entradas y salidas de inventario, y visualizar el estado de cada producto según su fecha de vencimiento.

---

## 🧰 Tecnologías utilizadas

- **Vue 3** con composición API y script setup
- **TypeScript**
- **Vite** como herramienta de desarrollo
- **Axios** para consumo de la API
- Estilos base con HTML y CSS (puede integrarse Tailwind o Bootstrap según necesidad)

---

## 🧭 Estructura de Carpetas

frontend-inventario/
├── public/
├── src/
│ ├── components/
│ │ ├── ProductForm.vue
│ │ ├── EntryForm.vue
│ │ ├── ExitForm.vue
│ │ ├── InventoryList.vue
│ │ └── ProductSearch.vue
│ ├── services/
│ │ └── api.ts
│ └── App.vue
├── .env
├── package.json
├── tsconfig.json
└── vite.config.ts


## 🔌 Conexión con Backend

El frontend consume los siguientes endpoints del backend desarrollado en Spring Boot:

| Endpoint                  | Método | Descripción                           |
|--------------------------|--------|---------------------------------------|
| `/api/products`          | GET    | Listar productos                      |
| `/api/products`          | POST   | Crear un producto                     |
| `/api/inventory/entries` | POST   | Registrar entrada al inventario       |
| `/api/inventory/exits`   | POST   | Registrar salida del inventario       |
| `/api/inventory`         | GET    | Obtener el estado del inventario      |

La URL base se configura en `src/services/api.ts` como:

```ts
baseURL: 'http://localhost:8080/api'

---

🖼️ Componentes implementados
ProductForm.vue: formulario para crear nuevos productos.

EntryForm.vue: formulario para registrar nuevas entradas con fecha de caducidad.

ExitForm.vue: formulario para registrar salidas de inventario aplicando lógica FIFO.

InventoryList.vue: tabla que muestra cantidad y estado (Vigente, Por vencer, Vencido) de cada producto.

ProductSearch.vue: permite buscar productos por nombre (puede expandirse con filtros).

---

⚙️ Instrucciones de ejecución
# Clonar el proyecto
git clone https://github.com/jasosab/frontend-inventario.git
cd frontend-inventario

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

---

📌 Consideraciones
El proyecto está diseñado para ser modular y escalable.

Puede ser integrado con sistemas de autenticación si se requiere.

Se puede mejorar con notificaciones, validaciones adicionales, y control de errores por componente.

---

🧩 Sugerencias para Escalar o Mejorar la Solución - Frontend
🔐 Autenticación y gestión de sesiones
Implementar login de usuarios con JWT, guardar token en localStorage o cookies seguras, y proteger rutas según rol (ej. admin, operador).

📦 Gestión de estados (State Management)
Utilizar una librería como Pinia o Vuex para manejar el estado global de productos, inventario y usuarios.

📊 Dashboards visuales
Incorporar gráficos de barras, tortas o líneas (usando Chart.js o ApexCharts) para visualizar inventario por estado o evolución de entradas/salidas.

📅 Filtros y búsquedas avanzadas
Agregar filtros por fecha de vencimiento, búsqueda por nombre y paginación del inventario.

🌍 Internacionalización (i18n)
Usar vue-i18n para soportar múltiples idiomas en la interfaz.

🎨 Diseño responsive y accesible
Mejorar la experiencia móvil con BootstrapVue, Tailwind CSS o Vuetify. Agregar accesibilidad (a11y) para lectores de pantalla.

📤 Exportación de reportes
Agregar botón para descargar el inventario como PDF o Excel usando librerías como jspdf, xlsx o html2canvas.

📬 Notificaciones en tiempo real
Mostrar alertas de productos por vencer o vencidos con toast o modal, y opcionalmente integrar WebSockets.

⚙️ Configuración por entorno (.env)
Externalizar la URL base del backend, claves o flags en un archivo .env y usar import.meta.env.

🚀 Despliegue continuo (CI/CD)
Integrar Vite + GitHub Actions para compilar y desplegar automáticamente en Vercel, Netlify o GitHub Pages.

---

📄 Licencia
Este proyecto fue desarrollado como parte de una prueba técnica.
---

¿Deseas que lo empaquete como archivo descargable (`Details.md`) o que lo suba automáticamente al repositorio cuando lo tengas listo en GitHub?


