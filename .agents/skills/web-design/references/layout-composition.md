# Layout and Composition — Principios de Composición Visual

Guía de diseño visual para crear layouts profesionales con jerarquía, balance y flow.

---

## Fundamentos de Composición

### El Problema del "AI Layout"

El default perezoso produce:
- Hero section genérico con texto centrado
- 3 columnas idénticas de features
- CTA button en "btn-primary" sin contexto
- Footer con links que nadie lee

**Esto NO es diseño. Es template con relleno.**

### Los 4 Principios de Composición

1. **Jerarquía Visual** — ¿Dónde va el ojo primero?
2. **Balance** — ¿Cómo se distribuye el peso visual?
3. **Espacio Negativo** — ¿Dónde descansa el ojo?
4. **Ritmo** — ¿Cómo fluye la información?

---

## Jerarquía Visual

### La Pregunta Clave

**Si el usuario solo ve 3 segundos, ¿qué debe recordar?**

Todo en la página debe servir a esa respuesta. Si un elemento no contribuye, está en el camino.

### Técnicas de Jerarquía

#### 1. Tamaño (La Más Obvia)

```
Título principal: 48-96px
Subtítulo: 24-32px
Body text: 16-18px
Caption: 12-14px
```

**Regla:** Los títulos deben ser 2.5-3x más grandes que el body.

#### 2. Peso Tipográfico

```
Display/Hero: 700-900
Headings: 600-700
Subheadings: 500-600
Body: 400
Caption: 300-400
```

**Regla:** El elemento más importante tiene el peso más alto.

#### 3. Color y Contraste

```
Elemento principal: Color primario o alto contraste
Elementos secundarios: Color muted o medio contraste
Elementos de fondo: Bajo contraste
```

#### 4. Posición

```
Arriba: Más importante (hero)
Izquierda (culturas LTR): Primero leído
Centro: Punto focal
Abajo: Información secundaria
```

#### 5. Aislamiento

Un elemento solo, rodeado de espacio negativo, automáticamente tiene más peso visual.

```
[                    ]

      [CTA]

[                    ]
```

El CTA aislado en el centro tiene más peso que si estuviera rodeado de otros elementos.

### F-Pattern vs Z-Pattern

**F-Pattern** — Para contenido denso:
- El ojo escanea horizontalmente arriba
- Luego baja verticalmente por la izquierda
- Lee en más detalle si algo interesa
- Ideal para: blogs, news sites, dashboards

**Z-Pattern** — Para páginas de conversión:
- El ojo sigue diagonal: top-left → top-right → bottom-left → bottom-right
- Ideal para: landing pages, páginas con un solo CTA

```
F-Pattern:              Z-Pattern:
┌─────────────┐         ┌─────────────┐
│█████████████│         │1──────────2│
│████████     │         │      ↘      │
│████         │         │      ↓     │
│████████     │         │3──────────4│
└─────────────┘         └─────────────┘
```

### Aplicación Práctica

**Para un hero section:**

```html
<!-- Jerarquía clara -->
<section class="hero">
  <h1>Título Principal</h1>          <!-- Máximo tamaño, peso alto -->
  <p class="subtitle">Subtítulo</p>   <!-- 60% del tamaño, peso medio -->
  <p class="description">...</p>      <!-- Body size, peso regular -->
  <button>CTA</button>                <!-- Aislado, con acento -->
</section>
```

**Para una card:**

```html
<!-- Jerarquía dentro de card -->
<article class="card">
  <img src="..." alt="...">           <!-- Imagen: máximo peso visual -->
  <h3>Título</h3>                     <!-- Segundo: título -->
  <p class="meta">Categoria • Fecha</p> <!-- Tercero: metadata -->
  <p>Descripción...</p>               <!-- Cuarto: body -->
  <a href="#">Leer más →</a>          <!-- CTA al final -->
</article>
```

---

## Spacing System

### La Unidad Base

**Siempre usar múltiplos de 4px o 8px.**

```
Base: 4px
Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
```

### 8pt Grid System

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-8: 3rem;     /* 48px */
  --space-10: 4rem;    /* 64px */
  --space-12: 5rem;    /* 80px */
  --space-16: 6rem;    /* 96px */
  --space-20: 8rem;    /* 128px */
}
```

### Spacing en Práctica

| Uso | Spacing |
|-----|---------|
| Inline spacing (icon + text) | 4-8px |
| Button padding | 8-16px |
| Card padding | 16-24px |
| Section padding (mobile) | 24-32px |
| Section padding (desktop) | 48-96px |
| Between elements (tight) | 8-16px |
| Between elements (normal) | 16-24px |
| Between elements (loose) | 32-48px |
| Between sections | 64-128px |

### Regla del Espacio Negativo

**El espacio negativo ES un elemento de diseño, no vacío.**

- Más espacio = más importancia
- Espacio consistente = profesionalismo
- Espacio generoso = premium
- Espacio apretado = denso, informativo

**Premium brands usan más espacio negativo.**

```css
/* Premium spacing */
.section {
  padding: 96px 0;  /* Generous */
}

.card {
  padding: 32px;   /* Airy */
}

/* Dense spacing (news, data) */
.section {
  padding: 32px 0;  /* Compact */
}

.card {
  padding: 16px;   /* Tight */
}
```

---

## Grid Systems

### El Grid de 12 Columnas

Estándar de la industria para layouts responsive.

```
Desktop: 12 columnas, gutter 24px
Tablet: 8 columnas, gutter 20px
Mobile: 4 columnas, gutter 16px
```

### Layouts Comunes

**Hero Section:**
```
┌──────────────────────────────────────┐
│         Hero (12 columnas)           │
│   Título centrado o alineado izq.    │
└──────────────────────────────────────┘
```

**Features en 3 columnas:**
```
Desktop:
┌────────┬────────┬────────┐
│  Col 4  │  Col 4 │  Col 4 │
└────────┴────────┴────────┘

Mobile:
┌────────────┐
│   Col 12   │
├────────────┤
│   Col 12   │
├────────────┤
│   Col 12   │
└────────────┘
```

**Split Layout (texto + imagen):**
```
Desktop:
┌─────────────┬─────────────┐
│   Col 6     │    Col 6    │
│   Texto     │   Imagen    │
└─────────────┴─────────────┘

Mobile:
┌─────────────┐
│   Col 12    │
│   Texto     │
├─────────────┤
│   Col 12    │
│   Imagen    │
└─────────────┘
```

**Asymmetrical Layout:**
```
Desktop:
┌──────────────────┬───────┐
│     Col 8        │ Col 4 │
│    Contenido     │ Side  │
└──────────────────┴───────┘
```

### Max Width Container

```css
.container {
  width: 100%;
  max-width: 1280px;  /* o 1440px para pantallas grandes */
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 48px;
  }
}
```

---

## Responsive Breakpoints

### Mobile-First Approach

Diseñar para mobile primero, luego escalar hacia arriba.

```css
/* Mobile first (default) */
.element { /* estilos mobile */ }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1280px) { }
```

### Breakpoints Estándar

| Nombre | Min-width | Uso |
|--------|-----------|-----|
| Mobile | 0 | Default |
| Tablet | 768px | Tablets, iPads |
| Desktop | 1024px | Laptops, desktops |
| Large | 1280px | Monitores grandes |
| XL | 1536px | Pantallas extra large |

### Tailwind Breakpoints (Referencia)

```css
/* sm */
@media (min-width: 640px) { }
/* md */
@media (min-width: 768px) { }
/* lg */
@media (min-width: 1024px) { }
/* xl */
@media (min-width: 1280px) { }
/* 2xl */
@media (min-width: 1536px) { }
```

---

## Composición de Páginas Comunes

### Hero Section

**Elementos:**
1. Título principal (H1)
2. Subtítulo/descripción
3. CTA primario
4. CTA secundario (opcional)
5. Imagen/ilustración/video (opcional)

**Layouts:**

```
Centrado (clásico):
┌──────────────────────────────┐
│                              │
│      Título Principal        │
│                              │
│    Descripción corta que     │
│      explica el valor        │
│                              │
│    [CTA Primario]  [Sec.]    │
│                              │
└──────────────────────────────┘

Split (moderno):
┌──────────────────┬───────────┐
│                  │           │
│  Título          │           │
│  Descripción     │  Imagen   │
│  [CTA]           │           │
│                  │           │
└──────────────────┴───────────┘

Asimétrico (premium):
┌────────────────────────────────┐
│                                │
│  Título                        │
│  muy grande                    │
│                                │
│  Descripción más larga que     │
│  ocupa espacio lateral         │
│  [CTA]                         │
│                                │
│                   ┌──────────┐  │
│                   │ Imagen  │  │
│                   └──────────┘  │
└────────────────────────────────┘
```

### Features Section

**Layouts:**

```
Grid 3 columnas:
┌─────────┬─────────┬─────────┐
│ Icono   │ Icono   │ Icono   │
│ Título  │ Título  │ Título  │
│ Desc    │ Desc    │ Desc    │
└─────────┴─────────┴─────────┘

Grid 2x2:
┌─────────────┬─────────────┐
│             │             │
│  Feature 1  │  Feature 2  │
│             │             │
├─────────────┼─────────────┤
│             │             │
│  Feature 3  │  Feature 4  │
│             │             │
└─────────────┴─────────────┘

Alternando (zigzag):
┌──────────────────┬─────────────┐
│ Texto Feature 1  │   Imagen    │
├──────────────────┼─────────────┤
│    Imagen        │ Texto F2    │
├──────────────────┼─────────────┤
│ Texto Feature 3  │   Imagen    │
└──────────────────┴─────────────┘

Bento Grid (moderno):
┌─────────────┬─────────────┐
│             │   Small     │
│   Large    1├─────────────┤
│             │   Small    2│
├─────────────┴─────────────┤
│        Wide Feature 3     │
└───────────────────────────┘
```

### Pricing Section

```
┌─────────┬─────────────┬─────────┐
│  Basic  │    PRO      │  Team   │
│         │  (Highlight)│         │
│  $9/mo  │   $29/mo    │ $99/mo  │
│         │             │         │
│  Feature│  Feature    │ Feature │
│  Feature│  Feature    │ Feature │
│  Feature│  Feature    │ Feature │
│         │             │         │
│ [CTA]   │ [CTA Bold]  │ [CTA]   │
└─────────┴─────────────┴─────────┘
```

### Footer

```
┌─────────────────────────────────────┐
│  Logo                               │
│                                     │
│  Company    Product     Resources   │
│  About      Features     Blog       │
│  Careers    Pricing      Docs       │
│  Contact    API          Help       │
│                                     │
│  © 2025 Company · Privacy · Terms   │
│                                     │
│  [Twitter] [GitHub] [LinkedIn]      │
└─────────────────────────────────────┘
```

---

## Asymmetry and Breaking the Grid

### Cuándo Romper el Grid

- Landing pages premium
- Sitios de marca/branding
- Portfolios creativos
- Hero sections impactantes

### Técnicas

**1. Overlap:**
```css
.element {
  position: relative;
  z-index: 10;
  transform: translateY(-50px);
}
```

**2. Asymmetric columns:**
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* 33% - 66% */
}
```

**3. Full-bleed images:**
```css
.image-full {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}
```

**4. Diagonal sections:**
```css
.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: inherit;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
}
```

---

## Visual Hierarchy Checklist

Antes de finalizar un layout:

- [ ] El título principal es el elemento más prominente (tamaño + peso)
- [ ] Hay un claro flow visual (F-pattern o Z-pattern)
- [ ] El CTA está aislado y destacado
- [ ] El espaciado es consistente (múltiplos de 4/8px)
- [ ] Hay suficiente espacio negativo (no está apretado)
- [ ] Los elementos relacionados están agrupados
- [ ] Los elementos no relacionados están separados
- [ ] En mobile, el contenido importante está arriba
- [ ] La jerarquía funciona en 3 niveles (primary, secondary, tertiary)
- [ ] Los colores y tamaños refuerzan la jerarquía (no la contradicen)

---

## Quick Reference: Common Patterns

### Landing Page Structure
```
1. Hero Section (above the fold)
2. Social Proof (logos, testimonials)
3. Features Section (grid)
4. How It Works (steps)
5. Pricing (table/cards)
6. Testimonials (carousel)
7. CTA Section (final)
8. Footer
```

### Blog/Content Page
```
1. Header/Nav
2. Article Title
3. Meta (author, date, read time)
4. Content (headings, paragraphs, images)
5. Author Bio
6. Related Articles
7. Comments (if applicable)
8. Footer
```

### Dashboard
```
1. Sidebar Navigation
2. Top Bar (search, profile, notifications)
3. Main Content Area
   - Summary Cards (stats)
   - Charts/Graphs
   - Data Table
   - Quick Actions
```

### E-commerce Product Page
```
1. Product Images (gallery)
2. Product Info (title, price, description)
3. Add to Cart (variant selector, quantity)
4. Product Details (tabs)
5. Reviews
6. Related Products
```