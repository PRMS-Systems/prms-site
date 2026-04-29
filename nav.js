// nav.js — shared navigation injected into every page
(function () {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

const links = [

  { href: '/', label: 'Home' },
  { href: '/lab', label: 'PRMS Architecture Lab' },
  { href: '/framework', label: 'Framework' },
  { href: '/applications', label: 'Applications' },
  { href: '/publications', label: 'Publications' },
  { href: '/renewable-horizons', label: 'Renewable Horizons' },
  { href: '/about', label: 'About' }, 
];

  const nav = document.getElementById('main-nav');
  if (!nav) return;

  nav.innerHTML = `
    <a class="nav-logo" href="/">
  <img src="/favicon.png" alt="PRMS">
</a>
    <ul class="nav-links">
      ${links.map(l => {
        const isActive = currentPath === l.href || currentPath === l.href + '/index';
        return `<li><a href="${l.href}" ${isActive ? 'class="active"' : ''}>${l.label}</a></li>`;
      }).join('')}
    </ul>
  `;
})();
