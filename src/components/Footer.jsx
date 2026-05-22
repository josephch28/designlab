import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">

        <div className="footer__col">
          <p className="footer__logo">DesignLab</p>
          <p className="footer__tagline">Guía interactiva de principios HCI</p>
          <p className="footer__year">© {new Date().getFullYear()}</p>
        </div>

        <div className="footer__col">
          <p className="footer__team-label">Equipo de desarrollo</p>
          <p className="footer__team-names">Joseph · Pandy · Jota</p>
          <p className="footer__team-subject">Interacción Humano Computador</p>
        </div>

        <div className="footer__col footer__col--right">
          <a
            className="footer__repo-link"
            href="https://github.com/TU_USUARIO/designlab"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ti ti-brand-github" />
            Ver repositorio
          </a>
          <p className="footer__deploy">Desplegado en Vercel</p>
        </div>

      </div>
    </footer>
  )
}
