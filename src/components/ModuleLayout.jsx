import './ModuleLayout.css'

export default function ModuleLayout({
  id,
  icon,
  title,
  description,
  concept,
  exercise,
  moduleNumber,
}) {
  return (
    <>
      <section id={id} className="module">
        <div className="module__header">
          <div className="container module__header-inner">
            <span className="module__number">{moduleNumber}</span>
            <i className={`ti ${icon} module__icon`} />
            <div className="module__meta">
              <h2 className="module__title">{title}</h2>
              <p className="module__description">{description}</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="module__body">
            <div className="module__panel">
              <p className="module__panel-label">Concepto</p>
              {concept}
            </div>
            <div className="module__panel module__panel--exercise">
              <p className="module__panel-label">Ejercicio interactivo</p>
              {exercise}
            </div>
          </div>
        </div>
      </section>

      <hr className="module__divider" />
    </>
  )
}
