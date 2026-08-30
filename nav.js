// nav.js — responsive navigation with mobile toggle
(function () {

  // ─────────────────────────────────────
  // CURRENT PATH
  // ─────────────────────────────────────

  const currentPath =
    window.location.pathname
      .replace(/\/index\.html$/, '')
      .replace(/\/$/, '') || '/';

  // ─────────────────────────────────────
  // PRMS MAIN NAVIGATION
  // ─────────────────────────────────────

  const links = [
    { href: '/', label: 'PRMS Architecture Lab' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/framework', label: 'Framework' },
    { href: '/applications', label: 'Applications' },
    { href: '/publications', label: 'Publications' },
    { href: '/renewable-horizons', label: 'Renewable Horizons' },
    { href: '/system-atlas', label: 'System Atlas' },
    { href: '/score', label: 'PRMS Score' },
    // PRMS RESEARCH DIALOGUE
    { href: '/contributions', label: 'Contributions' },
    // NEW — PRMS AI RESEARCH INFRASTRUCTURE
    { href: '/ai-discovery', label: 'AI Discovery' },

    { href: '/about', label: 'About' },
  ];

  // ─────────────────────────────────────
  // NAV CONTAINER
  // ─────────────────────────────────────

  const nav = document.getElementById('main-nav');

  if (!nav) return;

  // ─────────────────────────────────────
  // RENDER NAVIGATION
  // ─────────────────────────────────────

  nav.innerHTML = `
    <div class="nav-container">

<a class="nav-logo" href="/">
  <img src="/logoch.png" alt="PRMS Architecture Lab">

  <span class="nav-logo-text">
    <span class="nav-logo-name">PRMS Architecture Lab</span>
    <span class="nav-logo-subtitle">Performance-Regulated Metabolic System</span>
  </span>
</a>

      <!-- MOBILE MENU BUTTON -->
      <button
        class="nav-toggle"
        id="navToggle"
        aria-label="Open navigation menu"
        aria-expanded="false"
        type="button"
      >
        ☰
      </button>

      <ul class="nav-links" id="navLinks">

        ${links.map(link => {

          const linkPath =
            link.href.replace(/\/$/, '') || '/';

          const isActive =
            currentPath === linkPath ||
            currentPath.startsWith(linkPath + '/');

          return `
            <li>
              <a
                href="${link.href}"
                ${isActive ? 'class="active"' : ''}
              >
                ${link.label}
              </a>
            </li>
          `;

        }).join('')}

      </ul>

    </div>
  `;

  // ─────────────────────────────────────
  // MOBILE TOGGLE
  // ─────────────────────────────────────

  const toggle = document.getElementById('navToggle');
  const linksContainer = document.getElementById('navLinks');

  if (!toggle || !linksContainer) return;

  toggle.addEventListener('click', () => {

    const isOpen =
      linksContainer.classList.toggle('active');

    toggle.setAttribute(
      'aria-expanded',
      isOpen ? 'true' : 'false'
    );
  });
})();
