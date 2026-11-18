/**
 * Respaldo local e inyector dinámico para img/plano-teatro.svg.
 * En servidor HTTP/HTTPS carga directamente img/plano-teatro.svg via fetch;
 * al abrir el HTML directamente con file:// (bloqueado por CORS en el navegador),
 * utiliza window.PLANO_TEATRO_SVG de manera transparente conservando el DOM interactivo.
 */
window.PLANO_TEATRO_SVG = `<svg id="svg-teatro-map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 940" class="w-full h-full">
  <g id="map-world">

    <!-- CAPA 1: BLOQUES DE ZONA (Estado base y fondo suave al acercar) -->
    <g id="layer-zone-blocks">
      <!-- SEGUNDO NIVEL -->
      <g class="map-zone cursor-pointer" data-zone="segundo-nivel">
        <path class="zone-shape transition-all duration-200" d="M 155 48 Q 550 -8 945 48 L 932 228 Q 550 185 168 228 Z" fill="#7E22CE" stroke="#FFFFFF" stroke-width="3" />
        <g class="zone-label">
          <text x="550" y="130" text-anchor="middle" fill="#FFFFFF" font-size="22" font-weight="900">SEGUNDO NIVEL</text>
          <text x="550" y="154" text-anchor="middle" fill="#F3E8FF" font-size="14" font-weight="600">386 butacas · $300 MXN</text>
        </g>
      </g>

      <!-- PRIMER NIVEL -->
      <g class="map-zone cursor-pointer" data-zone="primer-nivel">
        <path class="zone-shape transition-all duration-200" d="M 185 245 Q 550 198 915 245 L 905 362 Q 550 320 195 362 Z" fill="#15803D" stroke="#FFFFFF" stroke-width="3" />
        <g class="zone-label">
          <text x="550" y="295" text-anchor="middle" fill="#FFFFFF" font-size="21" font-weight="900">PRIMER NIVEL</text>
          <text x="550" y="319" text-anchor="middle" fill="#DCFCE7" font-size="14" font-weight="600">287 butacas · $380 MXN</text>
        </g>
      </g>

      <!-- MEZZANINE -->
      <g class="map-zone cursor-pointer" data-zone="mezzanine">
        <path class="zone-shape transition-all duration-200" d="M 145 382 Q 550 335 955 382 L 945 498 Q 550 458 155 498 Z" fill="#1E3A8A" stroke="#FFFFFF" stroke-width="3" />
        <g class="zone-label">
          <text x="550" y="432" text-anchor="middle" fill="#FFFFFF" font-size="22" font-weight="900">MEZZANINE</text>
          <text x="550" y="456" text-anchor="middle" fill="#DBEAFE" font-size="14" font-weight="600">291 butacas · $480 MXN</text>
        </g>
      </g>

      <!-- PALCOS 2DO NIVEL (IZQ y DER) -->
      <g class="map-zone cursor-pointer" data-zone="palcos-2">
        <g transform="translate(88, 280) rotate(-28)">
          <rect class="zone-shape" x="-44" y="-85" width="88" height="205" rx="12" fill="#BE185D" stroke="#FFFFFF" stroke-width="3" />
          <g class="zone-label">
            <text x="0" y="10" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="900">PALCOS 2°</text>
            <text x="0" y="28" text-anchor="middle" fill="#FCE7F3" font-size="10" font-weight="700">12 · 13 · 14</text>
          </g>
        </g>
        <g transform="translate(1012, 280) rotate(28)">
          <rect class="zone-shape" x="-44" y="-85" width="88" height="205" rx="12" fill="#BE185D" stroke="#FFFFFF" stroke-width="3" />
          <g class="zone-label">
            <text x="0" y="10" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="900">PALCOS 2°</text>
            <text x="0" y="28" text-anchor="middle" fill="#FCE7F3" font-size="10" font-weight="700">9 · 10 · 11</text>
          </g>
        </g>
      </g>

      <!-- PLATEA (IZQ y DER) -->
      <g class="map-zone cursor-pointer" data-zone="platea">
        <path class="zone-shape transition-all duration-200" d="M 162 522 L 258 518 L 254 786 L 166 782 Z" fill="#EA580C" stroke="#FFFFFF" stroke-width="3" />
        <g class="zone-label">
          <text x="210" y="655" text-anchor="middle" fill="#FFFFFF" font-size="15" font-weight="900" transform="rotate(-90 210 655)">PLATEA IZQ. · $520</text>
        </g>
        <path class="zone-shape transition-all duration-200" d="M 842 518 L 938 522 L 934 782 L 846 786 Z" fill="#EA580C" stroke="#FFFFFF" stroke-width="3" />
        <g class="zone-label">
          <text x="890" y="655" text-anchor="middle" fill="#FFFFFF" font-size="15" font-weight="900" transform="rotate(90 890 655)">PLATEA DER. · $520</text>
        </g>
      </g>

      <!-- LUNETA -->
      <g class="map-zone cursor-pointer" data-zone="luneta">
        <path class="zone-shape transition-all duration-200" d="M 272 514 L 828 514 L 814 812 L 286 812 Z" fill="#DC2626" stroke="#FFFFFF" stroke-width="3" />
        <g class="zone-label">
          <text x="550" y="652" text-anchor="middle" fill="#FFFFFF" font-size="26" font-weight="900">LUNETA</text>
          <text x="550" y="678" text-anchor="middle" fill="#FEE2E2" font-size="15" font-weight="600">566 butacas · $650 MXN</text>
        </g>
      </g>

      <!-- PALCOS 1ER NIVEL (IZQ y DER) -->
      <g class="map-zone cursor-pointer" data-zone="palcos-1">
        <g transform="translate(86, 595) rotate(-28)">
          <rect class="zone-shape" x="-44" y="-120" width="88" height="255" rx="12" fill="#0284C7" stroke="#FFFFFF" stroke-width="3" />
          <g class="zone-label">
            <text x="0" y="-2" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="900">PALCOS 1°</text>
            <text x="0" y="16" text-anchor="middle" fill="#E0F2FE" font-size="10" font-weight="700">Palcos 5 y 8</text>
          </g>
        </g>
        <g transform="translate(1014, 595) rotate(28)">
          <rect class="zone-shape" x="-44" y="-120" width="88" height="255" rx="12" fill="#0284C7" stroke="#FFFFFF" stroke-width="3" />
          <g class="zone-label">
            <text x="0" y="-2" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="900">PALCOS 1°</text>
            <text x="0" y="16" text-anchor="middle" fill="#E0F2FE" font-size="10" font-weight="700">Palcos 1 a 4</text>
          </g>
        </g>
      </g>
    </g>

    <!-- CAPA 2: LOS 1,730 ASIENTOS INDIVIDUALES (Se revelan al hacer zoom >= 1.7x) -->
    <g id="layer-seats" style="display: none;"></g>

    <!-- CAPA 3: ESCENARIO -->
    <g id="layer-stage">
      <path d="M 300 835 L 800 835 L 835 865 L 775 925 L 325 925 L 265 865 Z" fill="#0F172A" stroke="#D9CBB8" stroke-width="3" />
      <circle cx="550" cy="922" r="24" fill="none" stroke="#64748B" stroke-width="1.5" stroke-dasharray="4 3" />
      <text x="550" y="886" text-anchor="middle" fill="#FFFFFF" font-size="22" font-weight="900" letter-spacing="4">ESCENARIO</text>
    </g>

  </g>
</svg>`;

/**
 * Monta el SVG del plano del teatro dentro de containerId intentando fetch primero
 * y usando window.PLANO_TEATRO_SVG si se abre localmente via file://.
 */
window.mountPlanoTeatroSvg = async function mountPlanoTeatroSvg(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  let svgMarkup = '';
  if (window.location.protocol !== 'file:') {
    try {
      const response = await fetch('img/plano-teatro.svg');
      if (response.ok) {
        svgMarkup = await response.text();
      }
    } catch (_err) {
      // Fallback al respaldo local si falla la lectura de red
    }
  }

  if (!svgMarkup) {
    svgMarkup = window.PLANO_TEATRO_SVG || '';
  }

  container.innerHTML = svgMarkup;
  return container.querySelector('#svg-teatro-map');
};
