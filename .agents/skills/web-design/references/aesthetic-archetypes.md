# Aesthetic Archetypes — Directorio de Arquetipos Estéticos

Catálogo de estilos visuales con tipografía, paleta, layout y referentes web.

---

## Cómo Usar Este Archivo

1. Identifica el arquetipo que mejor encaja con el proyecto
2. Usa las recomendaciones como punto de partida
3. Adapta según la marca y audiencia específica

---

## 1. Swiss / International Style

**Vibe:** Clásico, atemporal, profesional, limpio.

**Filosofía:** Diseño funcional sobre decorativo. Grid rígido, tipografía fuerte, espacio negativo generoso. Inspirado en el diseño suizo de los años 50-60.

**Cuándo usarlo:**
- Marcas profesionales (consultoría, law firms)
- Publicaciones editoriales
- Portfolios minimalistas
- Cualquier proyecto que necesite credibilidad

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **Helvetica Now** (commercial) / **Inter** | 700-900 | Clásica, legible, neutra |
| Body | **Inter** / **Source Sans 3** | 400-500 | Máxima legibilidad |
| Mono | **IBM Plex Mono** | 400 | Técnico |

**Alternativa premium:** Neue Haas Grotesk, Akzidenz-Grotesk

### Paleta

```css
/* Swiss minimal */
--background: #ffffff;
--surface: #f5f5f5;
--primary: #000000;      /* Black as primary */
--accent: #ff0000;       /* Signal red for highlights */
--text: #000000;
--text-muted: #666666;
--border: #e5e5e5;

/* Swiss colored accent */
--background: #ffffff;
--surface: #f5f5f5;
--primary: #000000;
--accent: #0057ff;      /* Swiss blue */
--text: #000000;
--text-muted: #666666;
--border: #e5e5e5;
```

### Layout

- Grid de 12 columnas rígido
- Márgenes generosos
- Sin decoración innecesaria
- Tipografía como elemento visual principal
- Fotografía en blanco y negro o color sólido

### Referentes Web

- [Swiss Design](https://www.swiss-design.com/)
- [Helvetica](https://www.myfonts.com/fonts/monotype/helvetica/) (commercial)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

### Ejemplo de Hero

```html
<section class="hero" style="padding: 96px 48px;">
  <h1 style="font-size: 96px; font-weight: 900; line-height: 1; margin-bottom: 24px;">
    Design<br>is problem<br>solving.
  </h1>
  <p style="font-size: 18px; max-width: 480px;">
    We create digital experiences that matter.
  </p>
</section>
```

---

## 2. Brutalist / Neo-Brutalist

**Vibe:** Crudo, auténtico, disruptivo, sin filtros.

**Filosofía:** Rechazar la belleza convencional. Mostrar la estructura. Uso de bordes, sombras duras, tipografía monoespaciada, colores primarios. "Feo" como statement.

**Cuándo usarlo:**
- Marcas que quieren destacar
- Startups disruptivas
- Agencias creativas
- Proyectos artísticos
- Cryptoweb3

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **Space Mono** / **JetBrains Mono** | 700 | Técnico, distintivo |
| Body | **Space Grotesk** / **Outfit** | 400-600 | Moderno, legible |
| Mono | **Space Mono** | 400 | Consistencia |

### Paleta

```css
/* Brutalist classic */
--background: #ffffff;
--surface: #f0f0f0;
--primary: #000000;
--accent: #ff4d00;       /* Signal orange */
--text: #000000;
--text-muted: #666666;
--border: #000000;

/* Brutalist colored */
--background: #f5f5f5;
--surface: #ffffff;
--primary: #0000ff;      /* Blue */
--accent: #ff0000;        /* Red */
--text: #000000;
--text-muted: #666666;
--border: #000000;

/* Neo-brutalist soft */
--background: #f5f5dc;   /* Beige */
--surface: #fffef0;
--primary: #1a1a1a;
--accent: #ff6b35;
--text: #1a1a1a;
--text-muted: #666666;
--border: #1a1a1a;
```

### Layout

- Bordes negros visibles (2-4px)
- Sombras duras (sin blur)
- Grid aparente (líneas visibles)
- Cards con borders definidos
- Sin bordes redondeados (border-radius: 0)
- Tipografía grande y bold

### CSS Key

```css
.brutalist-card {
  border: 3px solid #000;
  box-shadow: 8px 8px 0 #000;
  border-radius: 0;
}

.brutalist-button {
  border: 2px solid #000;
  box-shadow: 4px 4px 0 #000;
  transition: transform 0.1s;
}

.brutalist-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #000;
}
```

### Referentes Web

- [Brutalist Websites](https://brutalistwebsites.com/)
- [Pierre Janneau Portfolio](https://pierrejanneau.com/)
- [Cassette Tape](https://cassetteta.pe/)

---

## 3. Glassmorphism / Frosted Glass

**Vibe:** Moderno, tech-forward, elegante, fluido.

**Filosofía:** Capas translúcidas sobre fondos coloridos. Profundidad a través de blur y transparencia. Popularizado por Apple en macOS Big Sur.

**Cuándo usarlo:**
- Apps modernas
- Dashboards
- Interfaces de software
- Marcas tech premium

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **Outfit** / **Manrope** | 600-700 | Moderno, geométrico |
| Body | **Inter** / **Source Sans 3** | 400-500 | Legibilidad en glass |
| Mono | **JetBrains Mono** | 400 | Técnico |

### Paleta

```css
/* Glassmorphism light */
--background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--glass-bg: rgba(255, 255, 255, 0.15);
--glass-border: rgba(255, 255, 255, 0.3);
--glass-shadow: rgba(0, 0, 0, 0.1);
--text: #ffffff;
--text-muted: rgba(255, 255, 255, 0.7);

/* Glassmorphism dark */
--background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-shadow: rgba(0, 0, 0, 0.3);
--text: #ffffff;
--text-muted: rgba(255, 255, 255, 0.6);
```

### CSS Key

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### Layout

- Cards flotantes sobre gradientes
- Bordes sutiles con transparencia
- Blur en backgrounds
- Iconos con glow sutil
- Animaciones de hover suaves

### Referentes Web

- [Glassmorphism CSS Generator](https://glassmorphism.com/)
- [Apple macOS](https://www.apple.com/macos/)
- [Stripe Dashboard](https://dashboard.stripe.com/)

---

## 4. Luxury / Refined

**Vibe:** Elegante, premium, sofisticado, aspiracional.

**Filosofía:** Menos es más. Espacio negativo generoso. Tipografía serif elegante. Colores oscuros con acentos dorados o metálicos. Calidad sobre cantidad.

**Cuándo usarlo:**
- Marcas de lujo
- Hoteles premium
- Jewelry / watches
- Fashion high-end
- Productos premium

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **Cormorant** / **Playfair Display** | 400-600 | Elegante, editorial |
| Body | **Manrope** / **Outfit** | 300-400 | Moderno, limpio |
| Accent | **Cormorant** | 400-600 | Consistencia |

### Paleta

```css
/* Luxury dark */
--background: #0a0a0a;
--surface: #141414;
--primary: #d4af37;      /* Gold */
--accent: #ffffff;
--text: #ffffff;
--text-muted: #888888;
--border: #2a2a2a;

/* Luxury light */
--background: #faf8f5;   /* Off-white warm */
--surface: #ffffff;
--primary: #1a1a1a;      /* Black */
--accent: #b8860b;       /* Dark gold */
--text: #1a1a1a;
--text-muted: #666666;
--border: #e5e5e0;

/* Luxury navy */
--background: #0f172a;
--surface: #1e293b;
--primary: #fbbf24;      /* Amber */
--accent: #f8fafc;
--text: #f8fafc;
--text-muted: #94a3b8;
--border: #334155;
```

### Layout

- Mucho espacio negativo
- Tipografía elegante y espaciada
- Imágenes de alta calidad (productos, lifestyle)
- Líneas finas y delicadas
- Animaciones sutiles
- Bordes redondeados mínimos (0-8px)

### CSS Key

```css
.luxury-heading {
  font-family: 'Cormorant', serif;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.luxury-card {
  border: 1px solid rgba(212, 175, 55, 0.3);
  transition: all 0.5s ease;
}

.luxury-card:hover {
  border-color: rgba(212, 175, 55, 0.6);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Referentes Web

- [Aesop](https://www.aesop.com/)
- [Apple Watch Edition](https://www.apple.com/watch/)
- [Hermès](https://www.hermes.com/)

---

## 5. Playful / Friendly

**Vibe:** Divertido, accesible, humano, cálido.

**Filosofía:** Diseño que no se toma en serio. Colores vibrantes, ilustraciones, iconos playfulness, tipografía rounded. Joyful design.

**Cuándo usarlo:**
- Apps consumer
- Marcas para niños/familias
- Startups friendly
- Food & beverage
- Lifestyle brands

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **Nunito** / **Poppins** | 700-800 | Rounded, friendly |
| Body | **Nunito** / **Source Sans 3** | 400-600 | Legible, warm |
| Accent | **Righteous** / **Quicksand** | 400-700 | Distinctive |

### Paleta

```css
/* Playful bright */
--background: #fef3c7;   /* Warm yellow */
--surface: #ffffff;
--primary: #f97316;      /* Orange */
--primary-hover: #ea580c;
--accent: #06b6d4;       /* Cyan */
--accent-secondary: #8b5cf6; /* Purple */
--text: #1f2937;
--text-muted: #6b7280;
--border: #fcd34d;

/* Playful pastel */
--background: #fdf2f8;  /* Pink tint */
--surface: #ffffff;
--primary: #ec4899;      /* Pink */
--accent: #06b6d4;       /* Cyan */
--text: #1f2937;
--text-muted: #6b7280;
--border: #fbcfe8;

/* Playful vibrant */
--background: #f0fdf4;  /* Green tint */
--surface: #ffffff;
--primary: #10b981;      /* Green */
--accent: #f59e0b;       /* Amber */
--text: #1f2937;
--text-muted: #6b7280;
--border: #bbf7d0;
```

### Layout

- Bordes redondeados (16-32px)
- Colores vibrantes y contrastantes
- Ilustraciones y iconos custom
- Sombras suaves
- Microinteracciones playfulness
- Elementos asimétricos

### CSS Key

```css
.playful-card {
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.playful-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.playful-button {
  border-radius: 100px;
  padding: 16px 32px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.playful-button:hover {
  transform: scale(1.05);
}
```

### Referentes Web

- [Mailchimp](https://mailchimp.com/)
- [Notion](https://www.notion.so/)
- [Headspace](https://www.headspace.com/)

---

## 6. Editorial / Magazine

**Vibe:** Journalism, contenido, storytelling, elegancia.

**Filosofía:** Tipografía serif prominente. Grid editorial. Imágenes grandes. Jerarquía tipográfica fuerte. Inspirado en revistas impresas.

**Cuándo usarlo:**
- Blogs
- Revistas digitales
- News sites
- Portfolios de fotografía
- Publicaciones

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **Playfair Display** / **Cormorant** | 400-700 | Editorial, elegante |
| Body | **Source Serif 4** / **Lora** / **Spectral** | 400-500 | Reading optimized |
| Sans | **Source Sans 3** | 400-600 | UI elements |

### Paleta

```css
/* Editorial classic */
--background: #fefdfb;   /* Warm white */
--surface: #ffffff;
--primary: #000000;
--accent: #c9563c;       /* Terracotta */
--text: #1a1a1a;
--text-muted: #666666;
--border: #e5e5e0;

/* Editorial modern */
--background: #0f0f0f;
--surface: #1a1a1a;
--primary: #ffffff;
--accent: #e53e3e;       /* Red */
--text: #ffffff;
--text-muted: #888888;
--border: #2a2a2a;

/* Editorial magazine */
--background: #f8f5f0;   /* Cream */
--surface: #ffffff;
--primary: #1a1a1a;
--accent: #0066cc;       /* Blue */
--text: #1a1a1a;
--text-muted: #555555;
--border: #d4d0c8;
```

### Layout

- Grid de 12+ columnas (magazine style)
- Tipografía grande y expresiva
- Imágenes a sangre (full-bleed)
- Pull quotes
- Drop caps
- Líneas finas como divisores

### CSS Key

```css
.editorial-heading {
  font-family: 'Playfair Display', serif;
  font-size: 64px;
  line-height: 1.1;
  font-weight: 400;
}

.editorial-body {
  font-family: 'Source Serif 4', serif;
  font-size: 18px;
  line-height: 1.7;
  max-width: 680px;
}

.drop-cap::first-letter {
  float: left;
  font-size: 4em;
  line-height: 0.8;
  margin-right: 0.1em;
  font-weight: 700;
}

.pull-quote {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-style: italic;
  border-left: 4px solid var(--accent);
  padding-left: 24px;
  margin: 48px 0;
}
```

### Referentes Web

- [Medium](https://medium.com/)
- [The New York Times](https://www.nytimes.com/)
- [Vogue](https://www.vogue.com/)

---

## 7. Tech / SaaS Modern

**Vibe:** Profesional, confiable, moderno, clean.

**Filosofía:** Funcionalidad sobre forma. UI limpia con acentos de color sutiles. Tipografía sans-serif. Dark mode first. Optimizado para conversión.

**Cuándo usarlo:**
- SaaS B2B
- Developer tools
- Dashboards
- Enterprise software
- Productivity apps

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **Outfit** / **Manrope** | 600-700 | Moderno, limpio |
| Body | **Inter** / **Source Sans 3** | 400-500 | Legibilidad |
| Mono | **JetBrains Mono** | 400 | Código |

### Paleta

```css
/* Tech dark */
--background: #0a0a0f;
--surface: #12121a;
--surface-elevated: #1e1e2e;
--primary: #6366f1;      /* Indigo */
--primary-hover: #4f46e5;
--accent: #06b6d4;      /* Cyan */
--text: #f8fafc;
--text-muted: #94a3b8;
--border: #27272a;

/* Tech light */
--background: #fafbfc;
--surface: #ffffff;
--primary: #4f46e5;     /* Indigo */
--primary-hover: #4338ca;
--accent: #0891b2;     /* Cyan */
--text: #0f172a;
--text-muted: #64748b;
--border: #e2e8f0;

/* Tech gradient */
--gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
--gradient-accent: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
```

### Layout

- Grid limpio de 12 columnas
- Cards con borders sutiles o shadows suaves
- Espaciado consistente (8px base)
- Dark mode como primera opción
- CTAs prominentes
- Data visualization integrado

### CSS Key

```css
.tech-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.tech-card:hover {
  border-color: var(--primary);
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
}

.tech-button {
  background: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.2s, transform 0.1s;
}

.tech-button:hover {
  background: var(--primary-hover);
}

.tech-button:active {
  transform: scale(0.98);
}
```

### Referentes Web

- [Linear](https://linear.app/)
- [Vercel](https://vercel.com/)
- [Stripe](https://stripe.com/)

---

## 8. Y2K / Neo-Retro

**Vibe:** Nostálgico, disruptivo, experimental, Gen Z.

**Filosofía:** Referencias a los 2000s con twist moderno. Colores vibrantes, bordes redondeados excesivos, sombras paralelas, tipografía bold.

**Cuándo usarlo:**
- Marcas Gen Z
- Creative agencies
- Music/artists
- Fashion streetwear
- Gaming

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **Space Grotesk** / **Syne** | 700-800 | Distintivo, techy |
| Body | **Space Grotesk** / **Outfit** | 400-600 | Consistente |
| Accent | **Righteous** / **Bebas Neue** | 400 | Bold impact |

### Paleta

```css
/* Y2K vibrant */
--background: #fef08a;  /* Yellow */
--surface: #ffffff;
--primary: #ec4899;      /* Pink */
--accent: #06b6d4;      /* Cyan */
--accent-secondary: #8b5cf6; /* Purple */
--text: #1a1a1a;
--text-muted: #4b5563;
--border: #a855f7;      /* Purple border */

/* Y2K chrome */
--background: linear-gradient(180deg, #c0c0c0 0%, #ffffff 50%, #c0c0c0 100%);
--surface: rgba(255, 255, 255, 0.9);
--primary: #0000ff;      /* Blue */
--accent: #ff00ff;       /* Magenta */
--text: #000000;
--border: #808080;

/* Y2K dark */
--background: #0f0f23;  /* Deep blue/purple */
--surface: #1a1a2e;
--primary: #ff00ff;      /* Magenta */
--accent: #00ffff;      /* Cyan */
--text: #ffffff;
--text-muted: #888888;
--border: #ff00ff;
```

### Layout

- Bordes muy redondeados (24-48px)
- Sombras paralelas (hard shadows)
- Gradientes vibrantes
- Iconos y emojis como decoración
- Animaciones exageradas
- Layouts asimétricos

### CSS Key

```css
.y2k-card {
  background: linear-gradient(135deg, #ff00ff 0%, #00ffff 100%);
  border-radius: 32px;
  padding: 3px; /* Gradient border hack */
}

.y2k-card-inner {
  background: white;
  border-radius: 30px;
  padding: 24px;
}

.y2k-shadow {
  box-shadow: 8px 8px 0 #000;
  transition: transform 0.1s;
}

.y2k-shadow:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 #000;
}

.y2k-text {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Referentes Web

- [Y2K Aesthetic](https://y2k.pictures/)
- [Gumroad](https://gumroad.com/) (some elements)
- [Figma](https://www.figma.com/) (sidebar gradient)

---

## 9. Minimal / Japanese

**Vibe:** Zen, minimalista, elegante, atemporal.

**Filosofía:** Eliminar todo lo innecesario. Espacio como elemento principal. Tipografía sutil. Colores neutros. Inspirado en el diseño japonés y en movements como Muji, Dieter Rams.

**Cuándo usarlo:**
- Marcas premium minimalistas
- Architecture studios
- Photography portfolios
- Lifestyle brands
- Wellness/spa

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **Outfit** / **Manrope** | 300-400 | Ultra-light, clean |
| Body | **Inter** / **Source Sans 3** | 300-400 | Legible, sutil |
| Japanese | **Noto Sans JP** | 300-400 | Japanese support |

### Paleta

```css
/* Minimal white */
--background: #ffffff;
--surface: #fafafa;
--primary: #000000;
--accent: #808080;       /* Gray */
--text: #000000;
--text-muted: #666666;
--border: #e5e5e5;

/* Minimal warm */
--background: #faf9f6;  /* Off-white warm */
--surface: #ffffff;
--primary: #2d2d2d;
--accent: #8b7355;      /* Warm brown */
--text: #2d2d2d;
--text-muted: #666666;
--border: #e8e4de;

/* Minimal dark */
--background: #0a0a0a;
--surface: #141414;
--primary: #ffffff;
--accent: #666666;
--text: #fafafa;
--text-muted: #888888;
--border: #2a2a2a;
```

### Layout

- Espacio negativo extremo
- Tipografía light (300-400)
- Líneas finas y sutiles
- Animaciones imperceptibles
- Grid invisible pero presente
- Contenido centrado

### CSS Key

```css
.minimal-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 128px 48px;
}

.minimal-heading {
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 48px;
}

.minimal-divider {
  width: 60px;
  height: 1px;
  background: #000;
  margin: 48px 0;
}
```

### Referentes Web

- [Muji](https://www.muji.com/)
- [Apple](https://www.apple.com/)
- [Stripe](https://stripe.com/) (minimal sections)

---

## 10. Organic / Natural

**Vibe:** Natural, cálido, sostenible, auténtico.

**Filosofía:** Formas orgánicas, colores tierra, texturas naturales. Inspirado en la naturaleza, bienestar, sustainability. Evitar lo sintético.

**Cuándo usarlo:**
- Brands de bienestar
- Organic products
- Sustainable fashion
- Cafés/restaurantes
- Eco-friendly brands

### Tipografía

| Uso | Fuente | Peso | Por qué |
|-----|--------|------|---------|
| Display | **DM Serif Display** / **Cormorant** | 400-600 | Elegante, natural |
| Body | **Karla** / **Lato** | 400-500 | Warm, legible |
| Accent | **Libre Baskerville** | 400 | Editorial touch |

### Paleta

```css
/* Organic earth */
--background: #f5f0e6;   /* Warm cream */
--surface: #ffffff;
--primary: #5c4033;      /* Brown */
--accent: #7a9e7e;       /* Sage green */
--accent-secondary: #c9a959; /* Gold */
--text: #2d2d2d;
--text-muted: #666666;
--border: #d4c8b8;

/* Organic green */
--background: #f4f9f4;
--surface: #ffffff;
--primary: #2d5a27;      /* Forest green */
--accent: #b8860b;      /* Amber */
--text: #1a1a1a;
--text-muted: #555555;
--border: #c5d5c5;

/* Organic ocean */
--background: #f0f8f8;
--surface: #ffffff;
--primary: #2c5282;      /* Ocean blue */
--accent: #4a7c59;      /* Moss green */
--text: #1a1a1a;
--text-muted: #555555;
--border: #b8d4e8;
```

### Layout

- Bordes redondeados suaves (16-24px)
- Espaciado generoso
- Imágenes de naturaleza/products
- Texturas sutiles (paper, linen)
- Sombras suaves
- Grid orgánico (no rígido)

### CSS Key

```css
.organic-card {
  background: var(--surface);
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border);
}

.organic-texture {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}
```

### Referentes Web

- [Headspace](https://www.headspace.com/)
- [Glossier](https://www.glossier.com/)
- [Patagonia](https://www.patagonia.com/)

---

## Quick Selection Guide

| Si el proyecto es... | Usa el arquetipo... |
|---------------------|---------------------|
| Finance / Banking | Tech Modern o Swiss |
| Health / Wellness | Organic o Tech Modern |
| Creative Agency | Brutalist o Y2K |
| Luxury Brand | Luxury / Refined |
| SaaS B2B | Tech Modern |
| Blog / Magazine | Editorial |
| Kids / Family | Playful |
| Portfolio (dev) | Minimal o Tech Modern |
| Portfolio (designer) | Brutalist o Editorial |
| E-commerce (premium) | Luxury |
| E-commerce (casual) | Playful o Organic |
| Dashboard | Tech Modern o Glassmorphism |
| Landing page (startup) | Tech Modern o Minimal |