# Prototipo — Portal Web del Teatro de la Ciudad de Coatzacoalcos

Prototipo interactivo para el portal oficial del **Teatro de la Ciudad de Coatzacoalcos**, diseñado con HTML, Tailwind CSS (vía CDN) y JavaScript del lado del cliente con persistencia simulada en `localStorage`.

---

## ¿Qué hace el prototipo?

El sistema reúne en un solo flujo la experiencia del público visitante, los organizadores/productores de eventos y el administrador del recinto:

### 1. Cartelera y Mural Principal (`index.html`)
- **Mural interactivo con carrusel:** Presenta fotografías del recinto (incluyendo la fachada y la Gran Sala interior en `img/teatro-sala-interior.jpg`) acompañadas de una tarjeta de **Datos Curiosos del Centro de Convenciones** que cambia con cada diapositiva.
- **Buscador y filtros avanzados de cartelera:**
  - Búsqueda por texto de eventos.
  - Botón desplegable de **categorías** junto al buscador.
  - Filtro de **calendario por fecha única o rango de fechas** para consultar próximos espectáculos.
- **Sincronización en vivo:** Lee los cambios publicados desde el panel de administración (`tc_admin_cms` y `tc_admin_eventos` en `localStorage`) y actualiza automáticamente textos, carrusel y espectáculos.

### 2. Cotización Oficial del Recinto (`cotizar.html`)
- Formulario de solicitud de cotización para renta del Teatro de la Ciudad con los campos requeridos:
  - Nombre completo a quien irá dirigida la cotización.
  - Número telefónico de contacto directo o alterno.
  - Correo electrónico.
  - Cantidad estimada de personas.
  - Fecha o fechas estimadas del evento.
  - Nombre del evento y horarios.

### 3. Autenticación y Cuenta de Usuario (`registro.html`, `login.html`, `cuenta.html`)
- **`registro.html` y `login.html`:** Pantallas de registro e inicio de sesión para usuarios y productores.
- **`cuenta.html`:** Vista de perfil del usuario autenticado para consultar su información y actividad dentro del portal.

### 4. Panel de Administración (`admin.html`)
- **Resumen / Dashboard y gestión operativa:** Administración de espectáculos de la cartelera, cotizaciones recibidas y usuarios registrados.
- **Editor Visual Controlado (CMS inline):** Permite al administrador hacer clic directamente sobre textos del mural, cartelera, ficha técnica y datos de taquilla para editarlos sobre una vista previa protegida (sin alterar el diseño ni la maquetación).
- **Gestor del Carrusel del Mural:** Permite agregar nuevas fotografías (por URL, archivo local o galería pre-cargada), cambiar fotos existentes, eliminar diapositivas y editar el **Dato Curioso** y pie de foto de cada imagen, publicando los cambios en `index.html`.

---

## Estructura de archivos

```text
Prototipo_1/
├── index.html                 # Portal principal, carrusel con datos curiosos y cartelera
├── cotizar.html               # Formulario oficial de cotización de eventos
├── registro.html              # Registro de usuarios
├── login.html                 # Inicio de sesión
├── cuenta.html                # Perfil / cuenta de usuario
├── admin.html                 # Panel de administración y editor visual (CMS)
├── img/
│   └── teatro-sala-interior.jpg
└── README.md
```

---

## Cómo probarlo localmente

1. Clona o descarga este repositorio.
2. Abre `index.html` en cualquier navegador moderno (o usa una extensión como *Live Server*).
3. Para probar la edición en vivo, abre `admin.html` en otra pestaña, realiza cambios en la sección **Contenido del Sitio** y pulsa **Publicar Cambios en el Sitio** para verlos reflejados en `index.html`.
