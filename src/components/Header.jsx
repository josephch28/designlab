import './Header.css'

const NAV_LINKS = [
  { href: '#tipografia', label: 'Tipografía' },
  { href: '#color',      label: 'Color' },
  { href: '#iconografia', label: 'Iconografía' },
  { href: '#estados',    label: 'Estados' },
  { href: '#consistencia', label: 'Consistencia' },
  { href: '#interaccion', label: 'Interacción' },
]

export default function Header({ darkMode, toggleDark }) {
  return (
    <header className="header">
      <div className="container header__inner">

        <a href="#" className="header__logo">
          <i className="ti ti-bolt header__logo-icon" />
          <span className="header__logo-text">DesignLab</span>
        </a>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="header__nav-link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="header__toggle"
          onClick={toggleDark}
          aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          <i className={`ti ${darkMode ? 'ti-sun' : 'ti-moon'}`} />
        </button>

      </div>
    </header>
  )
}
