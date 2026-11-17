// Configuración compartida de Tailwind CSS con la paleta institucional + token de contraste accesible
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',      // Azul Golfo
        secondary: '#D9CBB8',    // Arena Arquitectónica
        accent: '#E58E26',       // Dorado Atardecer (botones y fondos oscuros)
        'accent-text': '#B45309',// Ámbar oscuro accesible (>= 5.0:1 sobre blanco)
        highlight: '#38BDF8',    // Celeste Brisa
        'base-bg': '#F8F9FA',    // Blanco Nube
        'base-text': '#0F172A',  // Carbón Pizarra
      }
    }
  }
};

window.PortalCore = (() => {
  function syncAuthNavbar(options = {}) {
    const authContainer = document.getElementById('nav-auth-container');
    if (!authContainer) return;
    const userRaw = localStorage.getItem('tc_usuario');

    if (userRaw) {
      try {
        JSON.parse(userRaw);
        if (options.hideWhenLoggedIn) {
          authContainer.innerHTML = '';
          return;
        }
        authContainer.innerHTML = `
          <a href="usuario.html"
            class="bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full border border-white/20 transition-all flex items-center gap-1.5">
            <svg class="w-4 h-4 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Perfil</span>
          </a>
        `;
      } catch (e) {
        localStorage.removeItem('tc_usuario');
      }
    } else {
      authContainer.innerHTML = `
        <a href="cuenta.html#login" class="text-white hover:text-highlight text-xs sm:text-sm font-semibold px-2 sm:px-3 py-2 transition-colors duration-200">
          Iniciar Sesión
        </a>
        <a href="cuenta.html#registro"
          class="bg-accent hover:brightness-110 active:scale-95 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z">
            </path>
          </svg>
          <span>Registrarse</span>
        </a>
      `;
    }
  }

  function initMobileMenu() {
    const btn = document.getElementById('btn-mobile-menu');
    const menu = document.getElementById('mobile-nav-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      const isHidden = menu.classList.contains('hidden');
      menu.classList.toggle('hidden', !isHidden);
      btn.setAttribute('aria-expanded', String(isHidden));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  return {
    syncAuthNavbar,
    initMobileMenu
  };
})();
