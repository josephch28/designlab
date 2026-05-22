import { useState } from 'react'
import ModuleLayout from '../components/ModuleLayout'
import './ModuloInteraccion.css'

const concept = (
  <div className="interact-concept">
    <h3 className="interact-concept__heading">Flujo de interacción</h3>
    <p className="interact-concept__intro">
      Un flujo claro guía al usuario paso a paso. Aquí presentamos un ejemplo
      simple de tres fases que ayuda a estructurar decisiones y expectativas.
    </p>

    <div className="interact-concept__list">
      <div className="interact-concept__item">
        <span className="interact-concept__item-title">Affordance</span>
        <p className="interact-concept__item-text">Indica qué acciones son posibles: botones claros y estados visibles.</p>
      </div>

      <div className="interact-concept__item">
        <span className="interact-concept__item-title">Feedback</span>
        <p className="interact-concept__item-text">Respuesta inmediata tras la acción para confirmar que el sistema reaccionó.</p>
      </div>

      <div className="interact-concept__item">
        <span className="interact-concept__item-title">Visibilidad</span>
        <p className="interact-concept__item-text">Muestra el estado final y próximos pasos; el usuario nunca debe dudar.</p>
      </div>
    </div>

    <p className="interact-concept__note">
      <span className="badge badge-neutral">Affordance · Feedback · Visibilidad</span>
    </p>
  </div>
)

function FlowSteps() {
  const STEPS = [
    { id: 1, title: 'Inicio', desc: 'Presenta la affordance: ¿qué puede hacer el usuario?' },
    { id: 2, title: 'Acción', desc: 'Muestra feedback inmediato tras la interacción.' },
    { id: 3, title: 'Confirmación', desc: 'Cierra el flujo con visibilidad del resultado.' },
  ]

  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => Math.min(i + 1, STEPS.length - 1))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  const progress = Math.round(((index + 1) / STEPS.length) * 100)

  return (
    <div className="interact-flow">
      <div className="interact-header">
        <div className="interact-steps">
          {STEPS.map((s, i) => (
            <div key={s.id} className={`interact-step${i === index ? ' interact-step--active' : ''}`}>
              <span className="interact-step__num">{s.id}</span>
              <span className="interact-step__title">{s.title}</span>
            </div>
          ))}
        </div>

        <div className="interact-progress">
          <div className="interact-progress__bar">
            <div className="interact-progress__fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="interact-progress__label">{progress}%</div>
        </div>
      </div>

      <div className="interact-panel">
        <h4 className="interact-panel__title">{STEPS[index].title}</h4>
        <p className="interact-panel__desc">{STEPS[index].desc}</p>
      </div>

      <div className="interact-actions">
        <button className="btn-secondary" onClick={prev} disabled={index === 0}>Anterior</button>
        <button className="btn-primary" onClick={next} disabled={index === STEPS.length - 1}>Siguiente</button>
      </div>
    </div>
  )
}

export default function ModuloInteraccion() {
  return (
    <ModuleLayout
      id="interaccion"
      icon="ti-cursor-click"
      title="Diseño de interacción"
      description="Flujo básico: Inicio → Acción → Confirmación"
      moduleNumber="06"
      concept={concept}
      exercise={<FlowSteps />}
    />
  )
}
