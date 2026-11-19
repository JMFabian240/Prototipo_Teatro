---
name: Teatro de la Ciudad de Coatzacoalcos
description: Sistema visual cívico, cálido y cultural para la cartelera, taquilla directa de 1,730 butacas y portal de cotizaciones del recinto.
colors:
  azul-golfo: "#1E3A8A"
  arena-arquitectonica: "#D9CBB8"
  dorado-atardecer: "#E58E26"
  ambar-accesible: "#B45309"
  celeste-brisa: "#38BDF8"
  blanco-nube: "#F8F9FA"
  blanco-puro: "#FFFFFF"
  carbon-pizarra: "#0F172A"
  pizarra-oscuro: "#020617"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  container-x: "100px"
components:
  button-primary:
    backgroundColor: "{colors.dorado-atardecer}"
    textColor: "{colors.blanco-puro}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.blanco-puro}"
    textColor: "{colors.azul-golfo}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  card-surface:
    backgroundColor: "{colors.blanco-puro}"
    textColor: "{colors.carbon-pizarra}"
    rounded: "{rounded.md}"
    padding: "20px"
  input-field:
    backgroundColor: "{colors.blanco-nube}"
    textColor: "{colors.carbon-pizarra}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  badge-category:
    backgroundColor: "{colors.azul-golfo}"
    textColor: "{colors.blanco-puro}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Design System: Teatro de la Ciudad de Coatzacoalcos

## Overview

**Creative North Star: "El Foro Monumental"**

La identidad visual del portal traduce la presencia cívica y arquitectónica del recinto diseñado por el Arq. Abraham Zabludovsky a una experiencia digital cálida, cercana y cultural. El sistema equilibra la solemnidad de una institución pública con la vitalidad de una sala abierta a la ciudad: encabezados clásicos en serif romana (`Cinzel`) marcan los hitos del recinto, mientras que la tipografía geométrica humanista (`Manrope`) sostiene con claridad la lectura de cartelera, horarios, precios y formularios.

La composición prioriza el contenido real —fotografías del teatro, fichas de espectáculos y el plano interactivo de 1,730 butacas— sobre una arquitectura de capas sólidas y sobrias. Los controles son discretos, con transiciones contenidas y acentos dorados reservados exclusivamente para guiar la acción del público hacia la compra de boletos o la solicitud de renta.

**Key Characteristics:**
- Jerarquía editorial clara entre títulos monumentales (`Cinzel`) y lectura operativa (`Manrope`).
- Superficies luminosas (`#F8F9FA` y `#FFFFFF`) enmarcadas por bloques institucionales en Azul Golfo (`#1E3A8A`).
- Acentos cálidos (`#E58E26`) acotados a llamadas a la acción y estados activos, con variante accesible (`#B45309`) sobre fondos claros.
- Componentes sobrios y contenidos que ceden el protagonismo a la cartelera y al mapa de sala.

## Colors

Una paleta institucional sobria que combina azul profundo del Golfo, calidez arenosa inspirada en la arquitectura del recinto y un acento ámbar reservado para la acción.

### Primary
- **Azul Golfo** (`azul-golfo`): Color estructural principal para barras de navegación, cabeceras de sección, pie de página, etiquetas de categoría, estados activos y encabezados principales sobre fondo claro.
- **Dorado Atardecer** (`dorado-atardecer`): Acento principal de acción. Se usa en botones primarios de conversión ("Registrarse", "Ver más", "Confirmar Boletos", "Enviar Cotización"), indicadores de butaca seleccionada y fechas destacadas sobre fondo oscuro.

### Secondary
- **Arena Arquitectónica** (`arena-arquitectonica`): Tono cálido de apoyo para subtítulos institucionales en cabeceras oscuras ("Coatzacoalcos, Veracruz"), placeholder de tarjetas de espectáculo sin fotografía y detalles estructurales del escenario.

### Tertiary
- **Celeste Brisa** (`celeste-brisa`): Acento luminoso para enlaces activos sobre barra oscura, iconos de perfil, anillos de foco (`focus:ring`) y estados interactivos secundarios en navegación.

### Neutral
- **Blanco Nube** (`blanco-nube`): Lienzo general de la aplicación, fondo de campos de formulario y superficie base del visor del mapa de sala.
- **Blanco Puro** (`blanco-puro`): Superficie elevada de tarjetas de cartelera, paneles de formulario, barra de filtros fija, resumen de boletos y modales.
- **Carbón Pizarra** (`carbon-pizarra`): Texto principal de lectura sobre fondos claros y superficie del escenario en el plano de butacas.
- **Pizarra Oscuro** (`pizarra-oscuro`): Superficie de alto contraste para menú móvil desplegable, controles HUD flotantes sobre fotografías/mapa y barra lateral del panel de administración.
- **Ámbar Accesible** (`ambar-accesible`): Variante oscura de acento usada obligatoriamente en texto pequeño y subtítulos superiores (`eyebrows`) sobre fondo blanco o claro para garantizar contraste WCAG 2.1 AA (`>= 5.0:1`).

### Named Rules
**The Contrast-Aware Amber Rule.** Usa `Dorado Atardecer` en botones con texto blanco y sobre fondos oscuros, pero cambia siempre a `Ámbar Accesible` cuando el texto de acento vaya sobre `Blanco Puro` o `Blanco Nube`.

**The Solid Surface Priority Rule.** Los bloques estructurales y tarjetas se apoyan en colores sólidos y bordes limpios. Evita fondos con gradientes pesados o desenfoques invasivos (`blur-3xl`) que compitan con las fotografías del teatro o la legibilidad del mapa.

## Typography

**Display Font:** `Cinzel`, `Georgia, serif` (pesos `600`, `700`, `800`, `900`)
**Body Font:** `Manrope`, `system-ui, sans-serif` (pesos `400`, `500`, `600`, `700`, `800`)

**Character:** `Cinzel` aporta presencia escénica e institucional en títulos de obras y encabezados de página, mientras `Manrope` asegura lectura rápida y numérica limpia en horarios, precios en MXN, filas y formularios.

### Hierarchy
- **Display** (`800`, `3rem`–`3.75rem` / `48px`–`60px`, `line-height: 1.15`): Titular principal del mural de temporada en `index.html`.
- **Headline** (`800`–`900`, `1.5rem`–`3rem` / `24px`–`48px`, `line-height: 1.2`): Títulos de página (`boletos.html`, `cotizar.html`) y encabezados de sección (`h2` de cartelera y ficha técnica).
- **Title** (`700`, `1rem`–`1.25rem` / `16px`–`20px`, `line-height: 1.375`): Títulos de tarjetas de espectáculo, bloques de formulario y subtítulos de panel.
- **Body** (`400`–`500`, `0.875rem`–`1rem` / `14px`–`16px`, `line-height: 1.625`): Sinopsis, descripciones, preguntas frecuentes y cuerpo general (ancho máximo de lectura `65–75ch`).
- **Label** (`700`, `0.6875rem`–`0.75rem` / `11px`–`12px`, `letter-spacing: 0.05em`, mayúsculas en subtítulos de sección): Etiquetas de formulario, insignias de categoría, fechas, conteo de localidades y badges de estado.

### Named Rules
**The Bilingual Hierarchy Rule.** Reserva `Cinzel` exclusivamente para títulos de espectáculo, encabezados principales (`h1`, `h2`) y marcas de sección; nunca la uses en párrafos largos, tablas, inputs ni botones.

## Layout

El portal utiliza un contenedor fluido de ancho completo con margen lateral uniforme en escritorio (`100px` a partir de `768px`, `24px` en tablet y `16px` en móvil). La barra superior institucional (`80px` de alto) permanece fija (`sticky top-0`) en todas las vistas públicas, seguida de una cabecera de contexto (`bg-primary`) o el mural a pantalla completa (`min-height: calc(100vh - 80px)`).

En páginas operativas (compra de boletos y cotización), la retícula se divide en **12 columnas** en escritorio (`8 + 4` en `boletos.html` para priorizar el plano de sala junto al resumen fijo; `7 + 5` en `cotizar.html` para el formulario y el panel de estimación en tiempo real). La cartelera usa una cuadrícula responsiva de **1 a 3 columnas** con separación uniforme (`24px`). El panel de administración adopta barra lateral fija a la izquierda (`288px`) sobre escritorio y vista deslizable en el área principal.

## Elevation & Depth

El sistema trabaja con **capas sólidas y sombras sutiles de reposo** que solo ganan altura al interactuar o en elementos flotantes sobre contenido. Las tarjetas de contenido se delimitan primero mediante contraste tonal (`Blanco Puro` sobre `Blanco Nube`) y un borde sutil gris claro (`1px solid`), reservando las sombras intensas para menús desplegables, barra sticky, controles sobre fotografía/mapa y modales.

### Shadow Vocabulary
- **Reposo suave** (`box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05)`): Panel principal del mapa de butacas, preguntas frecuentes y alertas de confirmación.
- **Tarjeta / Barra activa** (`box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -2px rgba(15, 23, 42, 0.1)`): Tarjetas de espectáculo en reposo, barra de filtros sticky, resumen de reservación y botones primarios.
- **Elevación interactiva** (`box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.1)`): Hover de tarjetas de cartelera, desplegable de categorías y modales de confirmación o pase digital.

### Named Rules
**The Quiet Rest Rule.** Las superficies descansan con sombra mínima (`sm` o `md`) y borde de `1px`. La elevación pronunciada aparece únicamente en respuesta al puntero (`hover`), menús superpuestos o modales activos.

## Shapes

El lenguaje de formas combina **contenedores amplios suavizados** (`12px` a `24px` de radio) con **controles de acción en cápsula** (`9999px`). Los botones principales y secundarios emplean forma de píldora completa para diferenciarse con claridad de los campos de texto y checkboxes (`12px`), mientras que las tarjetas de cartelera usan radio medio (`12px`) y los paneles contenedores principales (`mapa`, `resumen`, `formularios`, `modales`) utilizan radio amplio (`24px`).

## Components

Los componentes priorizan la sobriedad, el orden y la legibilidad inmediata, con transiciones contenidas (`150ms–200ms`) y estados claros de interacción.

### Buttons
- **Shape:** Cápsula completa (`9999px`).
- **Primary:** Fondo `Dorado Atardecer`, texto `Blanco Puro`, negrita, relleno horizontal amplio (`10px 20px` en navbar/cartelera; `14px`–`16px` vertical en envío de formularios y compra).
- **Hover / Focus:** Aumento ligero de brillo (`brightness(1.1)`) y compresión sutil al presionar (`scale(0.95)`). Estados deshabilitados al `40%` de opacidad sin cursor interactivo.
- **Secondary / Ghost:** En barra oscura, fondo blanco translúcido (`rgba(255,255,255,0.1)`) con borde sutil (`rgba(255,255,255,0.2)`) o texto limpio con hover a `Celeste Brisa`. En modales claros, borde gris medio (`1px`) y texto oscuro.

### Chips
- **Style:** Etiquetas rectangulares compactas (`6px` de radio) en `Azul Golfo` o `Dorado Atardecer` con texto blanco en negrita (`11px`) y relleno `4px 10px`.
- **State:** En filtros de cartelera y zonas de acceso rápido (`boletos.html`), cápsulas o tarjetas con borde gris claro que resaltan el borde a `Azul Golfo` al pasar el cursor.

### Cards / Containers
- **Corner Style:** `12px` en tarjetas de cartelera; `24px` en paneles contenedores (`mapa`, `resumen`, `formulario`, `modales`).
- **Background:** `Blanco Puro` sobre lienzo `Blanco Nube`, con borde `1px` gris claro.
- **Shadow Strategy:** Sombra `md` en reposo; transición a sombra `xl` y desplazamiento vertical mínimo (`-4px`) en tarjetas interactivas de cartelera.
- **Internal Padding:** `20px` en tarjetas de espectáculo; `24px` a `40px` en paneles principales.

### Inputs / Fields
- **Style:** Fondo `Blanco Nube`, borde `1px` gris medio (`#D1D5DB`), radio `12px`, relleno `12px 16px` y sombra interior sutil.
- **Focus:** Anillo de enfoque en `Azul Golfo` (`2px`) sin borde adicional.
- **Labels:** Etiquetas superiores en negrita (`14px`), mayúsculas y tracking amplio.

### Navigation
- **Style:** Barra superior fija (`80px` de altura) en `Azul Golfo` con borde inferior translúcido (`rgba(255,255,255,0.1)`). A la izquierda, `img/LOGO.svg` en contenedor blanco redondeado (`12px`) junto al nombre institucional en mayúsculas y subtítulo en `Arena Arquitectónica`.
- **States:** Enlaces en blanco que cambian a `Celeste Brisa` con subrayado inferior de `2px` en la vista activa. En móvil, botón hamburguesa que despliega menú vertical sobre `Pizarra Oscuro`.

### Signature Component: Mapa Interactivo de Butacas
- **Structure:** Plano vectorial único (`img/plano-teatro.svg`, `viewBox="0 0 1100 940"`) montado en contenedor con visor interactivo (`overflow-hidden`), barra HUD superior izquierda (`Pizarra Oscuro` al `85%`) con indicador de zoom en monospace y controles de zoom (`+`, `−`, `1x`) arriba a la derecha.
- **Semantic Zoom (LOD):** En vista base (`1.0x`) muestra las **7 zonas oficiales** codificadas por color (Luneta `#DC2626`, Platea `#EA580C`, Mezzanine `#1E3A8A`, Primer Nivel `#15803D`, Segundo Nivel `#7E22CE`, Palcos 1° `#0284C7`, Palcos 2° `#BE185D`). Al acercar (`>= 1.7x`) o hacer clic en una zona, atenúa los bloques y revela las **1,730 butacas numeradas** con estados explícitos: libre, seleccionada (`#E58E26`) y ocupada.

## Do's and Don'ts

### Do:
- **Do** usar `Ámbar Accesible` (`#B45309`) en textos de acento y etiquetas sobre fondos blancos o `Blanco Nube`, manteniendo `Dorado Atardecer` (`#E58E26`) en botones y fondos oscuros.
- **Do** mantener `Cinzel` para titulares y `Manrope` para cuerpo, datos numéricos, formularios y navegación.
- **Do** usar `img/LOGO.svg` dentro de un contenedor blanco redondeado (`12px` en navbar, `8px` en footer) sobre superficies oscuras.
- **Do** indicar estados de butaca y formulario con forma, icono o etiqueta de texto además del color.

### Don't:
- **Don't** introducir gradientes decorativos llamativos ni desenfoques pesados (`blur-3xl`) que compitan con las fotografías del recinto o generen ruido visual.
- **Don't** usar `Cinzel` en textos largos, inputs, tablas de precios ni etiquetas de botones.
- **Don't** alterar las 7 zonas oficiales ni el total de `1,730` localidades en el mapa de butacas, ni mezclar estilos de boleteras externas.
