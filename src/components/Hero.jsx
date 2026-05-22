import './Hero.css'

const CHIPS = ['Tipografía', 'Color', 'Iconografía', 'Estados', 'Consistencia', 'Interacción']

export default function Hero() {
  const scrollToModules = () => {
    document.getElementById('tipografia').scrollIntoView({ behavior: 'smooth' })
  }

  const openGitHub = () => {
    window.open('https://github.com/TU_USUARIO/designlab', '_blank')
  }

  return (
    <section className="hero">
      <div className="container hero__content">

        <span className="badge badge-info hero__badge">
          <i className="ti ti-school" />
          Proyecto HCI — Interacción Humano Computador
        </span>

        <h1 className="hero__title">
          Domina los <span className="hero__title-accent">principios</span> del
          diseño de interfaces
        </h1>

        <p className="hero__description">
          Una guía interactiva de tipografía, color, iconografía, estados,
          consistencia visual y diseño de interacción.
        </p>

        <div className="hero__actions">
          <button className="btn-primary" onClick={scrollToModules}>
            <i className="ti ti-arrow-down" />
            Explorar módulos
          </button>
          <button className="btn-secondary" onClick={openGitHub}>
            <i className="ti ti-brand-github" />
            Ver en GitHub
          </button>
        </div>

        <div className="hero__chips">
          {CHIPS.map((chip) => (
            <span key={chip} className="hero__chip">{chip}</span>
          ))}
        </div>

      </div>
    </section>
  )
}
