// Configuración de Tailwind CSS con la paleta de colores institucional
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',     // Azul Golfo
        secondary: '#D9CBB8',   // Arena Arquitectónica
        accent: '#E58E26',      // Dorado Atardecer
        highlight: '#38BDF8',   // Celeste Brisa
        'base-bg': '#F8F9FA',   // Blanco Nube
        'base-text': '#0F172A', // Carbón Pizarra
      }
    }
  }
};

window.AdminCore = (() => {
  const DEFAULT_EVENTS = [
    {
      id: 'ev-1',
      title: 'Camilo Séptimo / Fonseca',
      category: 'conciertos',
      badge: 'Concierto Pop',
      date: '2026-11-13',
      time: '20:30 hrs',
      price: 'Desde $450 MXN',
      status: 'publicado',
      desc: 'El galardonado cantautor colombiano presenta su más reciente producción en un concierto acústico e inolvidable.'
    },
    {
      id: 'ev-2',
      title: 'El Cascanueces: World Ballet Tour',
      category: 'danza',
      badge: 'Ballet Clásico',
      date: '2026-11-14',
      time: '20:00 hrs',
      price: 'Boletos en Taquilla',
      status: 'publicado',
      desc: 'Magistral espectáculo navideño de talla internacional con solistas de primer nivel y escenografía deslumbrante.'
    },
    {
      id: 'ev-3',
      title: 'Concierto de Marco Barrientos',
      category: 'conciertos',
      badge: 'Concierto Aniversario',
      date: '2026-11-20',
      time: '16:00 hrs',
      price: 'Desde $350 MXN',
      status: 'publicado',
      desc: 'Celebración del 40 Aniversario de la Iglesia Cristiana Emmanuel, acompañado de Conquistando Fronteras.'
    },
    {
      id: 'ev-4',
      title: 'La Dama de Negro',
      category: 'teatro',
      badge: 'Teatro de Suspenso',
      date: '2026-11-21',
      time: '19:00 hrs',
      price: 'Desde $400 MXN',
      status: 'publicado',
      desc: 'La célebre puesta en escena que ha estremecido a México por más de 30 años ininterrumpidos en su gira oficial.'
    },
    {
      id: 'ev-5',
      title: 'Esquizofrenia: Rafael Perrín',
      category: 'teatro',
      badge: 'Psicoterror Inmersivo',
      date: '2026-11-27',
      time: '20:30 hrs',
      price: 'Desde $350 MXN',
      status: 'publicado',
      desc: 'Aclamada obra teatral de terror psicológico donde el espectador experimenta en carne propia los misterios de la mente.'
    },
    {
      id: 'ev-6',
      title: 'Manuhere: El vuelo de un alma libre',
      category: 'danza',
      badge: 'Danza y Folclore',
      date: '2026-11-29',
      time: '16:30 hrs',
      price: 'Boletos en Taquilla',
      status: 'publicado',
      desc: 'Espectáculo de danzas polinesias y percusiones en vivo presentado por la prestigiada Academia Tamure.'
    },
    {
      id: 'ev-7',
      title: 'Aladdin: La Magia de la Danza',
      category: 'danza',
      badge: 'Teatro Familiar',
      date: '2026-12-04',
      time: '18:00 hrs',
      price: 'Familiar',
      status: 'publicado',
      desc: 'Espectáculo teatral y coreográfico para toda la familia producido por la compañía CONARTE.'
    },
    {
      id: 'ev-8',
      title: 'El Cascanueces: Yessel Ballet School',
      category: 'danza',
      badge: 'Ballet Escolar',
      date: '2026-12-06',
      time: '18:30 hrs',
      price: 'Taquilla Abierta',
      status: 'publicado',
      desc: 'La academia regional presenta la clásica suite navideña de Tchaikovsky con jóvenes talentos veracruzanos.'
    },
    {
      id: 'ev-9',
      title: 'El Cascanueces: Ballet Ruso Mary El',
      category: 'danza',
      badge: 'Gala Rusa',
      date: '2026-12-15',
      time: '19:00 hrs',
      price: 'Boletos Numerados',
      status: 'publicado',
      desc: 'La prestigiosa compañía rusa deleitará al público porteño con virtuosismo técnico, elegancia y vestuarios de época.'
    },
    {
      id: 'ev-10',
      title: 'Érase Una Vez: Concierto Navideño',
      category: 'conciertos',
      badge: 'Concierto Navideño',
      date: '2026-12-16',
      time: '18:30 hrs',
      price: 'Preventa Especial',
      status: 'publicado',
      desc: 'Un recorrido por los grandes clásicos de fantasía y villancicos con la voz estelar de Beto Castillo.'
    },
    {
      id: 'ev-11',
      title: 'Gala Sinfónica de Invierno',
      category: 'conciertos',
      badge: 'Música Clásica',
      date: '2026-12-19',
      time: '20:00 hrs',
      price: 'Desde $280 MXN',
      status: 'publicado',
      desc: 'Magno concierto de temporada con solistas invitados interpretando oberturas clásicas y villancicos orquestales.'
    },
    {
      id: 'ev-12',
      title: 'Enjambre: Daños Luz Tour',
      category: 'conciertos',
      badge: 'Rock Nacional',
      date: '2026-12-20',
      time: '21:00 hrs',
      price: 'Desde $450 MXN',
      status: 'publicado',
      desc: 'La aclamada banda de rock contemporáneo presenta sus más grandes éxitos en una noche estelar en el Teatro de la Ciudad.'
    }
  ];

  const DEFAULT_QUOTES = [
    {
      folio: 'TC-COT-2026-081',
      nombre: 'Lic. Mariana Fernández Ramos',
      telefono: '9211234567',
      correo: 'producciones.fernandez@gmail.com',
      evento: 'Gala Anual de Danza Contemporánea',
      fechas: '18 y 19 de Enero 2027',
      horarios: '17:00 a 22:00 hrs (Función a las 19:30)',
      personas: '1,200 personas estimadas',
      status: 'pendiente',
      servicios: 'Tramoya completa (varas), 10 camerinos, conchas acústicas y vestimenta teatral.'
    },
    {
      folio: 'TC-COT-2026-080',
      nombre: 'Ing. Roberto Carlos Méndez',
      telefono: '9219876543',
      correo: 'rmendez@culturaveracruz.org',
      evento: 'Concierto Filarmónico de Año Nuevo',
      fechas: '25 de Enero 2027',
      horarios: '18:00 a 21:30 hrs',
      personas: '1,700 personas (aforo casi total)',
      status: 'revision',
      servicios: 'Foso de orquesta, iluminación modular, andenes de carga y camerinos.'
    },
    {
      folio: 'TC-COT-2026-079',
      nombre: 'Productora Teatral del Sureste S.A.',
      telefono: '9214567890',
      correo: 'contacto@teatrosureste.com',
      evento: 'Obra Teatral Infantil: El Mago de Oz',
      fechas: '7 y 8 de Febrero 2027',
      horarios: 'Matine 12:00 hrs y vespertina 17:00 hrs',
      personas: '900 niños y padres por función',
      status: 'aprobada',
      servicios: 'Ciclorama, gasa negra, telón principal gris, 6 pares de piernas y tramoya.'
    },
    {
      folio: 'TC-COT-2026-078',
      nombre: 'Dra. Carmen Alicia Salgado',
      telefono: '9217890123',
      correo: 'congresomedico@coatza.com',
      evento: 'Ceremonia de Graduación y Ponencias Médicas',
      fechas: '14 de Febrero 2027',
      horarios: '09:00 a 14:00 hrs',
      personas: '1,400 asistentes',
      status: 'pendiente',
      servicios: 'Estacionamiento 700 vehículos, conchas acústicas e iluminación de escenario.'
    }
  ];

  const DEFAULT_USERS = [
    { nombre: 'Mariana Fernández', correo: 'producciones.fernandez@gmail.com', telefono: '(921) 123 4567', rol: 'Productor', status: 'Activo' },
    { nombre: 'Roberto Carlos Méndez', correo: 'rmendez@culturaveracruz.org', telefono: '(921) 987 6543', rol: 'Productor', status: 'Activo' },
    { nombre: 'Juan Carlos Gómez', correo: 'jgomez@gmail.com', telefono: '(921) 555 1234', rol: 'Espectador', status: 'Activo' },
    { nombre: 'Admin General', correo: 'admin@teatrocoatza.gob.mx', telefono: '(921) 210 6616', rol: 'Administrador', status: 'Activo' }
  ];

  function getEvents() {
    return JSON.parse(localStorage.getItem('tc_admin_eventos')) || [...DEFAULT_EVENTS];
  }
  function saveEvents(list) {
    localStorage.setItem('tc_admin_eventos', JSON.stringify(list));
    updateSidebarBadges();
  }
  function getQuotes() {
    return JSON.parse(localStorage.getItem('tc_admin_cotizaciones')) || [...DEFAULT_QUOTES];
  }
  function saveQuotes(list) {
    localStorage.setItem('tc_admin_cotizaciones', JSON.stringify(list));
    updateSidebarBadges();
  }
  function getUsers() {
    return JSON.parse(localStorage.getItem('tc_admin_usuarios')) || [...DEFAULT_USERS];
  }

  function showToast(msg) {
    const toast = document.getElementById('admin-toast');
    const toastMsg = document.getElementById('toast-message');
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 2800);
    }
  }

  function updateSidebarBadges() {
    const events = getEvents();
    const quotes = getQuotes();
    const pendingCount = quotes.filter(q => q.status === 'pendiente').length;
    const badgeEvents = document.getElementById('badge-events-count');
    const badgeQuotes = document.getElementById('badge-quotes-count');
    if (badgeEvents) badgeEvents.textContent = events.length;
    if (badgeQuotes) badgeQuotes.textContent = `${pendingCount} Nuevas`;
  }

  function initShell(options = {}) {
    updateSidebarBadges();
    const btnQuickNew = document.getElementById('btn-quick-new-event');
    if (btnQuickNew && !options.customQuickNew) {
      btnQuickNew.addEventListener('click', () => {
        window.location.href = 'cartelera.html?nuevo=1';
      });
    }

    window.addEventListener('storage', (e) => {
      if (e.key === 'tc_admin_cotizaciones' || e.key === 'tc_admin_eventos' || e.key === 'tc_admin_usuarios') {
        updateSidebarBadges();
        if (typeof options.onStorage === 'function') options.onStorage(e);
      }
    });
  }

  return {
    DEFAULT_EVENTS,
    DEFAULT_QUOTES,
    DEFAULT_USERS,
    getEvents,
    saveEvents,
    getQuotes,
    saveQuotes,
    getUsers,
    showToast,
    updateSidebarBadges,
    initShell
  };
})();
