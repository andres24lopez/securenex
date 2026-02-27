
# SecurePro — Tienda de seguridad con React (Vite)

Proyecto listo para empezar a vender productos de seguridad electrónica (CCTV, alarmas, control de acceso y redes) con React, Vite y React Router. Incluye carrito, catálogo filtrable y checkout básico (simulado).

## 🧱 Estructura

```
seguridad-ecommerce-react/
├─ public/              # Logos e imágenes SVG
├─ src/
│  ├─ components/       # UI reutilizable (Navbar, Cards, etc.)
│  ├─ pages/            # Páginas (Inicio, Productos, Detalle, Carrito, ...)
│  ├─ context/          # Estado global del carrito
│  ├─ data/             # Productos (JSON)
│  ├─ utils/            # Utilidades (formato moneda)
│  ├─ App.jsx, main.jsx
│  └─ index.css         # Estilos generales
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

## 🚀 Cómo ejecutar

> Requisitos: [Node.js](https://nodejs.org/) 18+ y npm.

```bash
npm install
npm run dev
```
Luego abre `http://localhost:5173`.

### Construir para producción
```bash
npm run build
npm run preview
```

## ✨ Funcionalidades
- Catálogo con búsqueda y filtro por categoría.
- Páginas: Inicio, Productos, Detalle, Carrito, Checkout, Nosotros, Contacto.
- Carrito con cantidades, totales, envío gratis sobre Q1500, IVA 12% (ajústalo según tu país).
- Checkout simulado (puedes integrar pasarela real más adelante).
- Interfaz moderna, responsive y en español.

## 🔌 Próximos pasos (sugerencias)
- Integrar un backend / CMS (Strapi, Supabase, Firebase) para inventario real.
- Pasarela de pago: Paypal, Stripe, Niubiz, MercadoPago, etc.
- Autenticación y órdenes del cliente.
- Panel admin para CRUD de productos.
- SEO: metaetiquetas por producto y sitemap.

## 🛠️ Personalización rápida
- Edita productos en `src/data/products.json`.
- Colores/estilos en `src/index.css`.
- Marca (logo y textos) en `public/logo.svg` y `Navbar.jsx`.

---
Hecho con ❤️ para tu negocio de seguridad.
