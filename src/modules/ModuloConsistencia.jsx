import { useState } from 'react'
import ModuleLayout from '../components/ModuleLayout'
import './ModuloConsistencia.css'

const DIFFERENCES = [
  'Tipografías inconsistentes',
  'Colores aleatorios',
  'Botones distintos',
  'Espaciados desiguales',
  'Iconografía inconsistente',
]

const concept = (
  <div className="consistency-concept">
    <h3 className="consistency-concept__heading">Consistencia visual</h3>
    <p className="consistency-concept__intro">
      Una interfaz consistente mantiene un mismo lenguaje visual: tipografía,
      colores, botones y espaciado que siempre funcionan igual.
    </p>

    <div className="consistency-concept__list">
      <div className="consistency-concept__item">
        <span className="consistency-concept__item-title">Reglas claras</span>
        <p className="consistency-concept__item-text">
          Aplica los mismos estilos a elementos equivalentes para que el diseño sea predecible.
        </p>
      </div>
      <div className="consistency-concept__item">
        <span className="consistency-concept__item-title">Elementos uniformes</span>
        <p className="consistency-concept__item-text">
          Botones y tarjetas deben compartir tamaños, bordes y jerarquía visual.
        </p>
      </div>
      <div className="consistency-concept__item">
        <span className="consistency-concept__item-title">Sistema único</span>
        <p className="consistency-concept__item-text">
          Usa variables y una escala de espaciado común para que todo encaje con el diseño general.
        </p>
      </div>
    </div>

    <p className="consistency-concept__note">
      <span className="badge badge-neutral">Tipografía · Color · Espaciado · Componentes</span>
    </p>
  </div>
)

function ExerciseCards({ showDifferences, onReveal }) {
  return (
    <div className="consistency-exercise">
      <div className="consistency-actions">
        <button
          className="btn-secondary consistency-reveal-btn"
          onClick={onReveal}
          disabled={showDifferences}
        >
          {showDifferences ? 'Diferencias reveladas' : 'Revelar diferencias'}
        </button>
      </div>

      <div className="consistency-card-grid">
        <div className={`consistency-card consistency-card--inconsistent${showDifferences ? ' consistency-card--revealed' : ''}`}>
          <div className="consistency-card__media">
            <i className="ti ti-heart inconsistent-icon" />
          </div>
          <div className="consistency-card__body">
            <h4 className="consistency-card__title" style={{ fontFamily: 'Georgia, serif' }}>
              Oferta especial — inconsistente
            </h4>
            <p className="consistency-card__text" style={{ color: '#8a2be2' }}>
              Tipografías mezcladas, colores que no respetan la paleta, y espaciados
              irregulares que confunden la jerarquía.
            </p>
            <div className="consistency-card__actions">
              <button className="btn inconsistent-btn inconsistent-btn--primary">Comprar</button>
              <button className="btn inconsistent-btn inconsistent-btn--ghost">Más info</button>
            </div>
          </div>
        </div>

        <div className="consistency-card consistency-card--consistent">
          <div className="consistency-card__media">
            <i className="ti ti-star consistent-icon" />
          </div>
          <div className="consistency-card__body">
            <h4 className="consistency-card__title">
              Oferta especial — consistente
            </h4>
            <p className="consistency-card__text">
              Tipografía, colores y espaciado unificados; botones y jerarquía claros.
            </p>
            <div className="consistency-card__actions">
              <button className="btn btn-primary">Comprar</button>
              <button className="btn btn-ghost">Más info</button>
            </div>
          </div>
        </div>
      </div>

      {showDifferences && (
        <div className="consistency-differences">
          <p className="consistency-differences__label">Errores detectados</p>
          <ul className="consistency-differences__list">
            {DIFFERENCES.map((difference) => (
              <li key={difference} className="consistency-differences__item">
                {difference}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function ModuloConsistencia() {
  const [showDifferences, setShowDifferences] = useState(false)

  return (
    <ModuleLayout
      id="consistencia"
      icon="ti-ruler"
      title="Consistencia visual"
      description="Muestra comparativa: diseño inconsistente vs consistente"
      moduleNumber={3}
      concept={concept}
      exercise={
        <ExerciseCards
          showDifferences={showDifferences}
          onReveal={() => setShowDifferences(true)}
        />
      }
    />
  )
}
