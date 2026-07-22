// In-page section anchors keyed by content route. The Header and Footer render
// the set that matches the current route, so hash links only ever point at
// sections that actually exist on the page being viewed. The ids here must stay
// in sync with the `id` on each section (see Web/* components and Music.jsx).
export const NAV_BY_ROUTE = {
  '/web': [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  '/music': [
    { label: 'Home', href: '#music-home' },
    { label: 'About', href: '#music-about' },
    { label: 'Listen', href: '#music-listen' },
    { label: 'Shows', href: '#music-shows' },
    { label: 'Contact', href: '#music-contact' },
  ],
};
