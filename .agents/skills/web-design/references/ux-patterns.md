# UX Patterns — Patrones de Experiencia de Usuario

Guía de patrones UX de alta calidad para interfaces web.

---

## Principios Fundamentales

### La Regla de 3 Segundos
El usuario debe entender en 3 segundos:
1. ¿Qué es esto?
2. ¿Qué puedo hacer aquí?
3. ¿Por qué debería hacerlo?

### Jerarquía de Acciones
- **Acción primaria**: 1 por vista, máximo visible
- **Acción secundaria**: 2-3 por vista, menos visible
- **Acción terciaria**: Links de texto, discretos

---

## Navigation Patterns

### Top Navigation (Classic)
**Cuándo usarlo:** Sites con pocas secciones (< 6)

```
┌─────────────────────────────────────────┐
│ Logo    Home  Products  About  Contact  │
└─────────────────────────────────────────┘
```

**Best practices:**
- Logo a la izquierda, links a la derecha (LTR)
- Máximo 5-7 links visibles
- Active state claro
- Mobile: hamburger menu

### Mega Menu
**Cuándo usarlo:** Sites con muchas categorías, e-commerce

```
┌─────────────────────────────────────────┐
│ Logo    Products ▼  About  Contact      │
│         ┌────────────────────────────────┐
│         │ Category 1  Category 2  Cat 3 │
│         │ - Item      - Item     - Item │
│         │ - Item      - Item     - Item │
│         │ Featured: [Image]              │
│         └────────────────────────────────┘
└─────────────────────────────────────────┘
```

**Best practices:**
- Máximo 4-5 columnas
- Imágenes destacadas opcionales
- Categorías claras con icons
- Hover delay (300ms) para evitar abrir accidentalmente

### Sidebar Navigation
**Cuándo usarlo:** Dashboards, apps, documentation

```
┌────────┬──────────────────────────────┐
│ Logo   │                              │
│        │                              │
│ Dashboard  │      Main Content        │
│ Projects   │                          │
│ Settings   │                          │
│ Help       │                          │
│            │                          │
└────────┴──────────────────────────────┘
```

**Best practices:**
- Ancho fijo: 240-280px (colapsable a 64-80px)
- Icons + labels (o solo icons cuando colapsado)
- Active state con fondo o border
- Grupos colapsables para sub-items

### Mobile Navigation
**Cuándo usarlo:** Cualquier site en mobile

**Opciones:**
1. **Bottom navigation** — 3-5 items principales
2. **Hamburger menu** — Muchas opciones
3. **Tab bar** — Apps con flujos distintos

**Best practices:**
- Bottom nav para acciones frecuentes
- Icons + labels siempre
- Thumb-friendly (48px mínimo touch target)
- FAB (Floating Action Button) para acción primaria

---

## Hero Section Patterns

### Centered Hero
**Cuándo usarlo:** Landing pages, páginas con un CTA claro

```
┌──────────────────────────────────────┐
│                                      │
│        Título Principal Grande       │
│                                      │
│    Descripción corta del valor       │
│                                      │
│   [CTA Primario]  [CTA Secundario]   │
│                                      │
│          [Imagen opcional]           │
│                                      │
└──────────────────────────────────────┘
```

### Split Hero (Image Left/Right)
**Cuándo usarlo:** Productos, apps, SaaS

```
┌──────────────────┬───────────────────┐
│                  │                   │
│  Título          │                   │
│  Descripción     │    [Imagen/       │
│  Beneficios      │     Video]        │
│  [CTA]           │                   │
│                  │                   │
└──────────────────┴───────────────────┘
```

**Best practices:**
- Texto a la izquierda en LTR (eye tracking)
- Imagen real del producto, no genérica
- CTA visible sin scroll (above the fold)

### Asymmetric Hero
**Cuándo usarlo:** Marcas creativas, portfolios

```
┌──────────────────────────────────────┐
│                                      │
│  Título que                          │
│  rompe el grid                       │
│                                      │
│  ┌──────────┐  Descripción           │
│  │  Imagen  │  más larga             │
│  └──────────┘  [CTA]                 │
│                                      │
└──────────────────────────────────────┘
```

---

## Forms Patterns

### Inline Form (Single Field)
**Cuándo usarlo:** Newsletter signup, search, simple actions

```
┌─────────────────────────────────────────┐
│ Join our newsletter                     │
│ ┌─────────────────────┐ ┌────────────┐  │
│ │ Enter your email    │ │ Subscribe  │  │
│ └─────────────────────┘ └────────────┘  │
└─────────────────────────────────────────┘
```

**Best practices:**
- Label dentro del input como placeholder (solo si es obvio)
- CTA button alineado con input
- Error message inline

### Multi-Step Form
**Cuándo usarlo:** Checkout, onboarding, surveys

```
Step 1 of 3: Personal Info
┌─────────────────────────────────────┐
│ ●────────○────────○ Progress Bar    │
├─────────────────────────────────────┤
│ Name: [_______________]              │
│ Email: [_______________]             │
│                                      │
│            [Next →]                  │
└─────────────────────────────────────┘
```

**Best practices:**
- Progress bar siempre visible
- Steps agrupados lógicamente (no por cantidad)
- Permitir volver atrás
- Guardar progreso (auto-save)

### Form Validation

**Inline Validation (Mejor UX):**
```
┌─────────────────────────────────────┐
│ Email: [email@invalid]              │
│        ↑ Please enter a valid email │
│                                      │
│ Password: [__________]               │
│          ✓ Strong password          │
│                                      │
│ [Submit] (disabled until valid)     │
└─────────────────────────────────────┘
```

**Best practices:**
- Validar en blur, no en cada keystroke
- Mensajes específicos, no genéricos
- Success states visuales (checkmarks verdes)
- Submit button habilitado solo cuando form es válido

---

## Button Patterns

### Primary Button
**Cuándo usarlo:** Acción principal de la vista

```css
.primary-button {
  background: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}

.primary-button:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

**Best practices:**
- Alto contraste con background
- Padding generoso (mínimo 44px touch target)
- Hover state visible
- No usar para links (usar <button>, no <a>)

### Secondary Button
**Cuándo usarlo:** Acciones alternativas

```css
.secondary-button {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
}

.secondary-button:hover {
  background: var(--primary);
  color: white;
}
```

### Ghost Button
**Cuándo usarlo:** Acciones terciarias, dialogs

```css
.ghost-button {
  background: transparent;
  color: var(--text);
  padding: 12px 24px;
}

.ghost-button:hover {
  background: var(--surface);
}
```

### Button Groups

```
┌────────────┐ ┌────────────┐
│  Primary   │ │ Secondary  │
└────────────┘ └────────────┘
(Primary alineado a la derecha del secondary en LTR)
```

---

## Card Patterns

### Feature Card
**Cuándo usarlo:** Features, benefits, services

```
┌─────────────────────────────┐
│ ┌───┐                       │
│ │ 🎯│  Icon + Title         │
│ └───┘                       │
│                             │
│ Description of the feature  │
│ that explains the value.    │
│                             │
│ [Learn more →]              │
└─────────────────────────────┘
```

**Best practices:**
- Icon alineado arriba
- Título corto (3-5 palabras)
- Descripción 1-2 líneas
- Link sutil, no botón

### Product Card (E-commerce)
**Cuándo usarlo:** Products, listings

```
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │
│ │                         │ │
│ │      [Product Image]    │ │
│ │                         │ │
│ └─────────────────────────┘ │
│ Category                    │
│ Product Name                │
│ $XX.XX                      │
│ ★★★★☆ (128 reviews)         │
│ [Add to Cart]              │
└─────────────────────────────┘
```

### Testimonial Card
**Cuándo usarlo:** Social proof

```
┌─────────────────────────────┐
│ "Quote from customer        │
│  about their experience."   │
│                             │
│ ┌───┐                       │
│ │ 👤│ Name                  │
│ └───┘ Role, Company         │
│     ★★★★★                   │
└─────────────────────────────┘
```

---

## Pricing Patterns

### 3-Tier Pricing
**Cuándo usarlo:** SaaS, subscriptions

```
┌─────────┬─────────────┬─────────┐
│  Basic  │     PRO      │  Team   │
│         │  ★ POPULAR ★ │         │
│  $9/mo  │   $29/mo    │ $99/mo  │
│         │             │         │
│  Feature│   Feature   │ Feature │
│  Feature│   Feature   │ Feature │
│  Feature│   Feature   │ Feature │
│         │             │         │
│ [CTA]   │ [CTA Bold]  │ [CTA]   │
└─────────┴─────────────┴─────────┘
```

**Best practices:**
- Tier del medio "highlighted" (popular choice)
- Precio prominente
- Features en bullet points
- CTA claro

### Feature Comparison Table
**Cuándo usarlo:** Enterprise, productos complejos

```
┌─────────────────┬───────┬───────┬───────┐
│ Feature         │ Basic │ Pro   │ Team  │
├─────────────────┼───────┼───────┼───────┤
│ Users           │ 1     │ 5     │ ∞     │
│ Storage         │ 1GB   │ 10GB  │ 100GB │
│ Support         │ Email │ Email │ Chat  │
│ API Access      │ ✗     │ ✓     │ ✓     │
└─────────────────┴───────┴───────┴───────┘
```

---

## Empty States

### First-Time Empty
**Cuándo usarlo:** Cuando el usuario ve algo por primera vez

```
┌─────────────────────────────────────┐
│                                      │
│           ┌─────────────┐            │
│           │   📄/🎨    │            │
│           │  Illustration │          │
│           └─────────────┘            │
│                                      │
│      No projects yet                 │
│      Create your first project      │
│      to get started                  │
│                                      │
│      [Create Project]               │
│                                      │
└─────────────────────────────────────┘
```

**Best practices:**
- Ilustración o icono friendly
- Mensaje claro y positivo
- CTA para resolver el problema
- No usar lenguaje negativo ("No tienes proyectos" → "Crea tu primer proyecto")

### Search Empty
**Cuándo usarlo:** Búsquedas sin resultados

```
┌─────────────────────────────────────┐
│                                      │
│        No results for "query"       │
│                                      │
│        Try:                         │
│        • Checking your spelling     │
│        • Using different keywords   │
│        • Browsing categories        │
│                                      │
│        [Clear search]               │
└─────────────────────────────────────┘
```

---

## Loading States

### Skeleton Loading
**Cuándo usarlo:** Cuando el contenido tarda en cargar

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--surface) 25%,
    var(--border) 50%,
    var(--surface) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Best practices:**
- Estructura similar al contenido real
- Animación sutil (shimmer)
- Evitar spinners para contenido estructurado

### Progress Indicators
**Cuándo usarlo:** Acciones con progreso conocido

```
Uploading... ████████░░░░ 67%
```

**Best practices:**
- Porcentaje cuando es posible
- Estimación de tiempo si se conoce
- Cancel button

### Spinner
**Cuándo usarlo:** Acciones cortas (< 3 segundos)

```css
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Error Handling

### Inline Error
**Cuándo usarlo:** Form validation, specific field errors

```
┌─────────────────────────────────────┐
│ Email: [invalid-email]              │
│        ⚠️ Please enter a valid email │
└─────────────────────────────────────┘
```

### Toast Notification
**Cuándo usarlo:** Success, error, info messages

```
┌─────────────────────────────────────┐
│ ✓ Changes saved successfully       [×]│
└─────────────────────────────────────┘
(fades out after 3-5 seconds)
```

**Best practices:**
- Auto-dismiss (3-5 segundos)
- Accionable si es error (retry button)
- Position: bottom-right o top-right
- No más de 1 a la vez

### Error Page
**Cuándo usarlo:** 404, 500, connection errors

```
┌─────────────────────────────────────┐
│                                      │
│             ┌─────────────┐          │
│             │   🤔/🎨    │          │
│             │ Illustration │         │
│             └─────────────┘          │
│                                      │
│        Oops! Something went wrong    │
│                                      │
│   We couldn't find the page you're  │
│   looking for.                       │
│                                      │
│   [Go Home]  [Go Back]              │
│                                      │
└─────────────────────────────────────┘
```

---

## Microinteractions

### Button States

```css
/* Default */
.button { /* base styles */ }

/* Hover */
.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Active (pressed) */
.button:active {
  transform: translateY(0);
  box-shadow: none;
}

/* Focus (keyboard navigation) */
.button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Loading */
.button.loading {
  position: relative;
  color: transparent;
}
.button.loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Disabled */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Input States

```css
/* Default */
.input {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

/* Focus */
.input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  outline: none;
}

/* Error */
.input.error {
  border-color: var(--danger);
}

/* Success */
.input.success {
  border-color: var(--success);
}
```

### Hover Cards

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
```

---

## Accessibility (WCAG AA)

### Focus Visible
```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### Skip Links
```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

### Alt Text
```html
<!-- ✅ Good -->
<img src="chart.png" alt="Sales increased 25% in Q4 2024">

<!-- ❌ Bad -->
<img src="chart.png" alt="chart">
<img src="chart.png" alt="image">
```

### Color Contrast
- Texto normal: ratio 4.5:1 mínimo
- Texto grande (>18px bold o >24px): ratio 3:1 mínimo
- UI Components: ratio 3:1 mínimo

### Keyboard Navigation
- Tab order lógico
- Skip links para secciones grandes
- Focus visible siempre
- No trap focus (modals deben poder cerrarse con Escape)

---

## Mobile-Specific Patterns

### Touch Targets
- Mínimo 44px x 44px (Apple HIG)
- Mínimo 48px x 48px (WCAG)
- Espacio entre targets: mínimo 8px

### Pull to Refresh
- Indicador visual de pull
- Feedback de progreso
- Acción al soltar

### Infinite Scroll vs Pagination
- **Infinite scroll:** Content feeds, social
- **Pagination:** Search results, e-commerce

### Bottom Sheet
**Cuándo usarlo:** Actions, filters, options

```
┌─────────────────────────────────────┐
│                                      │
│      [Main Content Area]            │
│                                      │
├─────────────────────────────────────┤
│ ───── (drag handle)                  │
│                                      │
│ Option 1                             │
│ Option 2                             │
│ Option 3                             │
│                                      │
│ [Cancel]                             │
└─────────────────────────────────────┘
```

---

## Quick Reference Checklist

### Navigation
- [ ] Máximo 5-7 items en nav principal
- [ ] Active state visible
- [ ] Mobile navigation implementada
- [ ] Logo link a home

### Forms
- [ ] Labels claros (no solo placeholders)
- [ ] Validation inline
- [ ] Error messages específicos
- [ ] CTA disabled hasta form válido
- [ ] Focus en primer campo

### Buttons
- [ ] Primary button para acción principal
- [ ] Hover/active/focus states
- [ ] Touch targets ≥ 44px
- [ ] Loading state si acción > 1s

### Accessibility
- [ ] Focus visible
- [ ] Alt text descriptivo
- [ ] Color contrast 4.5:1
- [ ] Keyboard navigable
- [ ] Skip links