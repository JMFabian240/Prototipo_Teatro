# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Usuario principal: el público asistente.** Personas de Coatzacoalcos y del sur de Veracruz que buscan qué hay en el Teatro de la Ciudad y quieren comprar sus boletos **eligiendo su butaca** sobre el plano real de la sala. Las decisiones de producto se toman pensando primero en ellas.

Otras audiencias que ya existen en el prototipo (secundarias):
- **Productores y organizadores:** solicitan una cotización para rentar el teatro para su evento.
- **Administración del recinto:** publica la cartelera, atiende cotizaciones, gestiona usuarios y edita el contenido del sitio.

## Product Purpose

Portal oficial del Teatro de la Ciudad de Coatzacoalcos donde el recinto vende **todos** sus boletos directamente, con selección de butaca numerada, además de publicar la cartelera y recibir solicitudes de renta.

El proyecto es una **propuesta formal para la administración real del Teatro / Centro de Convenciones**. El éxito es convencer a esa administración de adoptarlo: el prototipo tiene que mostrar con credibilidad que el recinto puede manejar su propia venta y su relación con el público.

## Positioning

Hoy cada evento se vende en una boletera externa distinta (Eticket, TusBoletos.mx, Ticketmanía, Tiketpass, ShowBizTicket, Notikumi, entre otras), además de la taquilla física. Este portal **reemplaza esa fragmentación**: una sola venta, con la marca del propio teatro, sobre el plano real de sus 1,730 butacas. Una boletera genérica no puede ofrecer eso con la misma fidelidad ni con la identidad del recinto.

## Operating Context

- El recinto está en Av. Abraham Zabludovsky #201, dentro del complejo del Centro de Convenciones de Coatzacoalcos. La administración se coordina entre el Gobierno del Estado y el municipio.
- Programación variada: ballet (p. ej. El Cascanueces), conciertos pop, rock y sinfónicos, teatro, danza, eventos de academias locales y eventos religiosos.
- Hoy existen taquillas físicas del Teatro y del Centro de Convenciones.
- Algunos eventos actuales usan acceso por orden de llegada o venta gestionada por el organizador.
- El prototipo se revisa abriendo los HTML directamente (`file://`) en Brave/Chrome. Los datos viven simulados en `localStorage`.

## Capabilities and Constraints

**Ya presente en el prototipo:**
- **Cartelera:** búsqueda por texto, filtro por categoría y filtro por fecha única o por rango.
- **Compra de boletos:** mapa SVG del recinto con 7 zonas oficiales (Luneta 566, Platea 144, Mezzanine 291, Primer Nivel 287, Segundo Nivel 386, Palcos 1er nivel 28, Palcos 2do nivel 28 = 1,730). Al hacer zoom se ven las butacas individuales. Hay precio por zona en MXN y butacas ocupadas.
- **Cotización de renta:** nombre, teléfono, correo, aforo estimado, fechas, nombre del evento y horarios.
- **Cuentas:** registro, inicio de sesión y perfil con los boletos adquiridos.
- **Panel de administración:** resumen, cartelera, cotizaciones, usuarios y CMS con edición en línea del mural y del carrusel.

**Restricciones:**
- Idioma: español de México.
- Moneda: MXN.
- La capacidad mostrada debe coincidir con el plano oficial (1,730).

**Decisiones abiertas (no inventar):**
- Pasarela de pago y backend reales.
- Cómo se manejan los eventos con acceso por orden de llegada o con venta del organizador.
- Si el Auditorio anexo (220–224 personas) entra al alcance.
- Hay una discrepancia de aforo: el texto del footer dice 1,724 y el plano dice 1,730.

## Brand Commitments

- Nombre: **Teatro de la Ciudad de Coatzacoalcos**, parte del Centro de Convenciones de Coatzacoalcos, Veracruz.
- Logotipo oficial del prototipo: `img/LOGO.svg`. Existe también la variante `img/LOGO_OSCURO.svg`.
- Voz institucional del propio recinto, no la de una boletera comercial.

## Evidence on Hand

- Investigación del recinto, de sus secciones y de eventos de los últimos 3 años (fechas, horarios, precios por sección y boleteras): `../Inveztigaciones/*.md`.
- Plano oficial de la sala: `img/Plano_Teatro.jpeg`. Su versión interactiva: `img/plano-teatro.svg`.
- Fotografía de la Gran Sala: `img/teatro-sala-interior.jpg`.
- **Ausencias que no se deben fabricar:** no hay testimonios, cifras de venta, acuerdos con la administración, datos de usuarios reales, aliados ni comisiones. Los eventos y las butacas ocupadas del prototipo son datos de demostración.

## Product Principles

1. **La compra es el camino crítico.** Del cartel a la butaca pagada con la menor fricción posible. Todo lo demás se subordina a ese recorrido.
2. **Fidelidad al recinto real.** Zonas, aforo, numeración y precios reflejan el teatro verdadero. Si no se conoce un dato, se marca como pendiente.
3. **El teatro es dueño de su relación con el público.** Cada pantalla debe reforzar que la venta es del propio recinto.
4. **Operable por el personal del teatro.** La cartelera y el contenido se administran sin depender de un desarrollador.
5. **Credibilidad ante la administración.** Ninguna afirmación, cifra o promesa sin respaldo en la evidencia disponible.

## Accessibility & Inclusion

Sitio público institucional. Objetivo: contraste WCAG 2.1 AA, ya adoptado en el trabajo previo del prototipo. La selección de butacas debe poder hacerse en móvil y entenderse sin depender solo del color (estado libre, seleccionada u ocupada).
