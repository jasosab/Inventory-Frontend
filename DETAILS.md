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


🖼️ Componentes implementados
ProductForm.vue: formulario para crear nuevos productos.

EntryForm.vue: formulario para registrar nuevas entradas con fecha de caducidad.

ExitForm.vue: formulario para registrar salidas de inventario aplicando lógica FIFO.

InventoryList.vue: tabla que muestra cantidad y estado (Vigente, Por vencer, Vencido) de cada producto.

ProductSearch.vue: permite buscar productos por nombre (puede expandirse con filtros).


⚙️ Instrucciones de ejecución
# Clonar el proyecto
git clone https://github.com/jasosab/frontend-inventario.git
cd frontend-inventario

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev


📌 Consideraciones
El proyecto está diseñado para ser modular y escalable.

Puede ser integrado con sistemas de autenticación si se requiere.

Se puede mejorar con notificaciones, validaciones adicionales, y control de errores por componente.


📄 Licencia
Este proyecto fue desarrollado como parte de una prueba técnica.
---

¿Deseas que lo empaquete como archivo descargable (`Details.md`) o que lo suba automáticamente al repositorio cuando lo tengas listo en GitHub?


