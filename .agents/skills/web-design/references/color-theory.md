# Color Theory — Construcción de Paletas Profesionales

Guía completa para construir paletas coherentes, accesibles y con personalidad.

---

## Principios Fundamentales

### El Problema del "AI Slop"
El default perezoso de AI es:
- Purple gradient (#6C63FF → #8B5CF6)
- Un solo acento sin sistema
- Dark mode = "invertir colores"

**Esto NO es un sistema de color profesional.**

### Los 6 Tokens Mínimos

Toda paleta profesional necesita mínimo:

1. **Background** — Color de fondo principal
2. **Surface** — Cards, modals, elevations
3. **Primary** — Acciones principales, CTAs
4. **Accent** — Acento secundario, highlights
5. **Text** — Texto principal
6. **Muted** — Texto secundario, disabled states

Plus, si aplica:
- **Success / Warning / Danger / Info** — Semantic colors

---

## Construcción de Paleta desde un Color Semilla

### Método 60-30-10

Regla clásica de interior design aplicada a web:

- **60% Dominante** — Background + surfaces
- **30% Secundario** — Texto, elementos estructurales
- **10% Acento** — CTAs, highlights, interactivos

### Algoritmo de Construcción

#### Paso 1: Elegir el Color Semilla (Primary)

El color que define la marca. Preguntas clave:
- ¿Qué emoción queremos transmitir?
- ¿Qué industria? (fintech ≠ gaming)
- ¿Qué diferenciación de competencia?

| Emoción | Colores Asociados | Ejemplos |
|---------|-------------------|----------|
| Confianza / Profesionalismo | Azules, verdes oscuros | Bancos, consultoría |
| Innovación / Tech | Violetas, cyans, azules eléctricos | SaaS, startups |
| Energía / Acción | Naranjas, rojos, amarillos | Fintech, gaming |
| Calma / Bienestar | Verdes, azules suaves | Health, wellness |
| Lujo / Premium | Negros, dorados, azul marino | Luxury brands |
| Creatividad / Arte | Púrpuras, magentas, colores vibrantes | Agencies, design |

#### Paso 2: Generar Tonal Scale

Del color semilla, generar 9-11 tonos:

```
--primary-50:  muy claro (backgrounds tinted)
--primary-100: claro (hover states light)
--primary-200: light medium
--primary-300: medium light
--primary-400: medium (icons, accents)
--primary-500: base (primary brand color)
--primary-600: medium dark (hover on primary)
--primary-700: dark (pressed states)
--primary-800: darker
--primary-900: muy oscuro (text on light bg)
--primary-950: casi negro (contraste extremo)
```

**Cómo calcular tonos:**
- Usar HSL para variar Lightness manteniendo Hue y Saturation
- O usar herramientas como: Tailwind Shades, Radix Colors, o Chromatic

#### Paso 3: Definir Neutros

Los neutros NO son blanco y negro puro. Son colores con un tinte del semilla.

**Warm Neutrals** (para marcas cálidas):
- Base gris con tinte naranja/amarillo
- Ideal para: lifestyle, food, wellness

**Cool Neutrals** (para marcas frías):
- Base gris con tinte azul
- Ideal para: tech, SaaS, finance

**True Neutrals**:
- Gris puro sin tinte
- Ideal para: sistemas neutrales, herramientas

Ejemplo de escala de neutros:
```
--gray-50:  #fafafa  /* background */
--gray-100: #f5f5f5  /* surface */
--gray-200: #e5e5e5  /* border */
--gray-300: #d4d4d4  /* border hover */
--gray-400: #a3a3a3  /* placeholder */
--gray-500: #737373  /* text muted */
--gray-600: #525252  /* text secondary */
--gray-700: #404040  /* text primary light mode */
--gray-800: #262626  /* text primary dark mode */
--gray-900: #171717  /* heading dark mode */
--gray-950: #0a0a0a  /* background dark mode */
```

#### Paso 4: Definir Background y Surface

**Light Mode:**
```
--background: #ffffff (o gray-50 con tinte)
--surface: gray-50 (cards, modals)
--surface-elevated: white (con shadow)
```

**Dark Mode:**
```
--background: gray-950 (o custom dark)
--surface: gray-900 (cards)
--surface-elevated: gray-800 (modals)
```

#### Paso 5: Definir Text

```
--text-primary: gray-900 (light mode) / gray-100 (dark mode)
--text-secondary: gray-600 (light mode) / gray-400 (dark mode)
--text-muted: gray-500 (light mode) / gray-500 (dark mode)
--text-disabled: gray-400 (light mode) / gray-600 (dark mode)
```

#### Paso 6: Definir Accent (Opcional)

Un color complementario al primary para:
- Highlights especiales
- Badges
- Elementos que necesitan destacar pero no son CTAs

**Cómo elegir:**
- **Complementario**: Opuesto en el color wheel (máximo contraste)
- **Análogo**: Adyacente al primary (armonía)
- **Split-complementario**: Dos colores adyacentes al complementario
- **Triádico**: Tres colores equidistantes en el wheel

---

## Paletas por Industria / Tono

### 💰 Fintech — Confianza + Modernidad

**Primary:** Azul profundo o verde esmeralda
**Accents:** Naranja o dorado para CTAs
**Vibe:** Profesional pero no aburrido

```css
/* Fintech Palette Example */
--background: #fafbfc;
--surface: #ffffff;
--primary: #0066ff;      /* Trust blue */
--primary-hover: #0052cc;
--accent: #ff6b35;      /* Action orange */
--text: #0f172a;
--text-muted: #64748b;
--success: #10b981;
--border: #e2e8f0;
```

**Dark Mode:**
```css
--background: #0f172a;
--surface: #1e293b;
--primary: #3b82f6;
--accent: #f97316;
--text: #f8fafc;
--text-muted: #94a3b8;
```

---

### 🏥 Health / Wellness — Calma + Confianza

**Primary:** Verde suave o azul claro
**Accents:** Coral suave o turquesa
**Vibe:** Limpio, natural, trustworthy

```css
--background: #f0fdf4;   /* Green tint */
--surface: #ffffff;
--primary: #059669;      /* Emerald */
--primary-hover: #047857;
--accent: #14b8a6;      /* Teal */
--text: #0f172a;
--text-muted: #6b7280;
--success: #10b981;
--border: #d1d5db;
```

---

### 🎮 Gaming / Entertainment — Energía + Diversión

**Primary:** Púrpura vibrante, cyan, o rosa
**Accents:** Contrastes brillantes
**Vibe:** Exciting, immersive

```css
--background: #0c0c14;
--surface: #1a1a2e;
--primary: #8b5cf6;      /* Vibrant purple */
--primary-hover: #7c3aed;
--accent: #06b6d4;      /* Cyan */
--accent-secondary: #ec4899; /* Pink */
--text: #f8fafc;
--text-muted: #a1a1aa;
--border: #27272a;
```

---

### 🎨 Creative Agency — Distinctive + Bold

**Primary:** Cualquier cosa MENOS azul genérico
**Accents:** Contrastes inesperados
**Vibe:** Memorable, artistic

```css
--background: #fafaf9;   /* Warm white */
--surface: #ffffff;
--primary: #f97316;     /* Orange */
--primary-hover: #ea580c;
--accent: #8b5cf6;      /* Purple */
--text: #1c1917;
--text-muted: #57534e;
--border: #e7e5e4;
```

---

### 💼 Enterprise / B2B — Profesional + Confiable

**Primary:** Azul oscuro o slate
**Accents:** Cyan o verde para success states
**Vibe:** Corporate but modern

```css
--background: #f8fafc;
--surface: #ffffff;
--primary: #1e40af;      /* Deep blue */
--primary-hover: #1e3a8a;
--accent: #0891b2;      /* Cyan */
--text: #0f172a;
--text-muted: #64748b;
--success: #059669;
--border: #e2e8f0;
```

---

### ✨ Luxury / Premium — Elegante + Exclusivo

**Primary:** Negro, dorado, o azul marino
**Accents:** Dorado/bronce
**Vibe:** Sophisticated, minimal

```css
--background: #0a0a0a;   /* Rich black */
--surface: #141414;
--primary: #d4af37;      /* Gold */
--primary-hover: #c9a227;
--accent: #f5f5f5;      /* Off-white */
--text: #fafaf9;
--text-muted: #a8a29e;
--border: #262626;
```

---

## Dark Mode: No Invertir, Rediseñar

### El Error Común

```css
/* ❌ MAL: Dark mode como inversión */
.dark {
  --background: black;
  --text: white;
  --primary: [mismo color];
}
```

**Problemas:**
- Los colores diseñados para fondo claro no funcionan en oscuro
- El contraste es diferente
- La saturación debe ajustarse
- Los colores brillantes "queman" los ojos

### Principios de Dark Mode

1. **Dark ≠ Black**: Usar grises oscuros (gray-950, navy, slate-900)
2. **Elevation = Lighter**: En dark mode, elementos elevados son MÁS claros
3. **Saturación reducida**: Los colores brillantes deben desaturarse 10-20%
4. **Contraste WCAG**: Verificar con fondo oscuro, no asumir

```css
/* ✅ BIEN: Dark mode con su propia lógica */
.light {
  --background: #ffffff;
  --surface: #f4f4f5;
  --primary: #3b82f6;    /* Bright blue */
  --primary-hover: #2563eb;
  --text: #18181b;
  --text-muted: #71717a;
}

.dark {
  --background: #09090b;  /* Rich dark, not pure black */
  --surface: #18181b;     /* Elevated = lighter */
  --surface-elevated: #27272a;
  --primary: #60a5fa;      /* Lighter, desaturated */
  --primary-hover: #3b82f6;
  --text: #fafafa;
  --text-muted: #a1a1aa;
}
```

### Elevación en Dark Mode

```
Nivel 0 (background):  #09090b  (más oscuro)
Nivel 1 (cards):       #18181b  (un paso más claro)
Nivel 2 (modals):      #27272a  (otro paso más claro)
Nivel 3 (menus):       #3f3f46  (más claro aún)
```

---

## Semantic Colors (Success, Warning, Danger, Info)

Colores para feedback del sistema. Deben ser reconocibles universalmente.

```css
/* Semantic colors - Light mode */
--success: #10b981;      /* Green */
--success-bg: #d1fae5;
--warning: #f59e0b;      /* Amber */
--warning-bg: #fef3c7;
--danger: #ef4444;        /* Red */
--danger-bg: #fee2e2;
--info: #3b82f6;         /* Blue */
--info-bg: #dbeafe;

/* Semantic colors - Dark mode */
--success: #34d399;
--success-bg: #064e3b;
--warning: #fbbf24;
--warning-bg: #78350f;
--danger: #f87171;
--danger-bg: #7f1d1d;
--info: #60a5fa;
--info-bg: #1e3a5f;
```

---

## WCAG Contrast Ratios

### Requisitos Mínimos

| Tipo de Texto | AA (mínimo) | AAA (ideal) |
|---------------|-------------|-------------|
| Texto normal (< 18px) | 4.5:1 | 7:1 |
| Texto grande (≥ 18px bold o ≥ 24px) | 3:1 | 4.5:1 |
| UI Components (borders, icons) | 3:1 | — |

### Cómo Verificar

**Herramientas:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors#color-contrast) (incluye contrast ratios)

**Fórmula:**
```
Contrast Ratio = (L1 + 0.05) / (L2 + 0.05)
Donde L1 = luminance del más claro, L2 = luminance del más oscuro
```

### Tips para AA con Estética

1. **Texto oscuro en fondo claro**: Fácil de pasar AA
2. **Texto claro en fondo oscuro**: Más difícil — usar grises cálidos
3. **Texto sobre imágenes**: Overlay semitransparente o shadow
4. **Links**: Subrayado o diferenciación clara, no solo color
5. **Placeholder text**: No necesita pasar contraste, pero debe ser legible

---

## Paletas Listas para Usar

### Tech Modern (Outfit + palette)

```css
:root {
  --background: #0a0a0f;
  --surface: #12121a;
  --primary: #6366f1;    /* Indigo */
  --primary-hover: #4f46e5;
  --accent: #06b6d4;    /* Cyan */
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --border: #1e1e2e;
}
```

### Warm Minimal (Libre Baskerville + palette)

```css
:root {
  --background: #fefdfb;
  --surface: #f5f5f0;
  --primary: #1a1a1a;   /* Near black */
  --accent: #c9563c;    /* Terracotta */
  --text: #1a1a1a;
  --text-muted: #666666;
  --border: #e5e5e0;
}
```

### Ocean Calm (DM Sans + palette)

```css
:root {
  --background: #f0f9ff;
  --surface: #ffffff;
  --primary: #0369a1;    /* Sky blue */
  --primary-hover: #0284c7;
  --accent: #0891b2;    /* Teal */
  --text: #0c4a6e;
  --text-muted: #64748b;
  --border: #bae6fd;
}
```

### Forest Natural (Karla + palette)

```css
:root {
  --background: #f4f9f4;
  --surface: #ffffff;
  --primary: #166534;    /* Green */
  --primary-hover: #15803d;
  --accent: #ca8a04;    /* Amber */
  --text: #1c1917;
  --text-muted: #57534e;
  --border: #d1d5db;
}
```

---

## Quick Reference: Color Psychology

| Color | Emoción | Uso | Evitar Para |
|-------|---------|-----|-------------|
| **Azul** | Confianza, calma, profesionalismo | Finance, enterprise, healthcare | Creative/agencias (overused) |
| **Verde** | Naturaleza, crecimiento, salud | Wellness, fintech (money), eco | Luxury (demasiado casual) |
| **Rojo** | Energía, urgencia, pasión | CTAs, alerts, entertainment | Finance (danger signal), health |
| **Naranja** | Amistad, creatividad, acción | CTAs alternativos, creative, gaming | Enterprise conservador |
| **Amarillo** | Optimismo, atención, energía | Highlights, accents, playful | Texto (legibilidad), dark mode |
| **Púrpura** | Creatividad, lujo, innovación | Creative, tech premium, luxury | Finance conservador |
| **Rosa/Magenta** | Divertido, moderno, disruptivo | Creative, lifestyle, beauty | Enterprise B2B |
| **Negro** | Elegancia, lujo, minimalismo | Luxury, fashion, premium | Health (demasiado pesado) |
| **Blanco** | Limpieza, simplicidad, espacio | Casi todo | Luxury dark mode |
| **Cyan/Turquesa** | Tech, modernidad, frescura | Tech, SaaS, modern brands | Traditional enterprise |

---

## Checklist Final

Antes de entregar una paleta:

- [ ] Tiene mínimo 6 tokens: background, surface, primary, accent, text, muted
- [ ] Tiene tonal scale del primary (50-950)
- [ ] Tiene semantic colors (success, warning, danger)
- [ ] Todos los pares texto/fondo pasan WCAG AA (4.5:1)
- [ ] Dark mode tiene su propia lógica (no es simple inversión)
- [ ] Los colores tienen justificación de por qué se eligieron
- [ ] No usa Inter/Roboto/purple-gradient por defecto sin justificación