import { useState } from 'react'
import ModuleLayout from '../components/ModuleLayout'
import './ModuloTipografia.css'

const SCALE = [
  { label: 'H1',      size: 32, weight: 800, text: 'Título principal',          muted: false },
  { label: 'H2',      size: 24, weight: 700, text: 'Subtítulo de sección',       muted: false },
  { label: 'H3',      size: 20, weight: 500, text: 'Encabezado de componente',   muted: false },
  { label: 'Body',    size: 15, weight: 400, text: 'Texto de párrafo regular',   muted: false },
  { label: 'Caption', size: 13, weight: 400, text: 'Texto de apoyo',             muted: true  },
]

const FONTS = [
  { value: 'DM Sans, sans-serif',         label: 'DM Sans (sans-serif)'       },
  { value: 'Playfair Display, serif',     label: 'Playfair Display (serif)'   },
  { value: 'Roboto Mono, monospace',      label: 'Roboto Mono (monospace)'    },
]

const WEIGHTS = [
  { label: 'Regular (400)', value: 400 },
  { label: 'Medio (500)',   value: 500 },
  { label: 'Negrita (700)', value: 700 },
]

function getLegibility(tamano, fuente) {
  if (tamano < 13)
    return {
      variant: 'error',
      text: '✗ Ilegible — el texto es muy pequeño',
      explanation: 'Los textos por debajo de 13px dificultan la lectura para la mayoría de los usuarios.',
    }
  if (tamano <= 15)
    return {
      variant: 'warning',
      text: '⚠ Aceptable — algo pequeño para body',
      explanation: 'Considera aumentar el tamaño a al menos 16px para texto de interfaz.',
    }
  if (fuente.includes('Mono'))
    return {
      variant: 'warning',
      text: '⚠ Aceptable — mono es mejor para código',
      explanation: 'Las fuentes monoespaciadas son más legibles en bloques de código que en texto corrido.',
    }
  if (tamano <= 20)
    return {
      variant: 'success',
      text: '✓ Óptimo para texto de interfaz',
      explanation: 'Este rango es ideal para texto de cuerpo en interfaces digitales.',
    }
  return {
    variant: 'warning',
    text: '⚠ Grande — mejor para títulos',
    explanation: 'Este tamaño es más adecuado para títulos o elementos de énfasis visuales.',
  }
}

const concept = (
  <div className="tipo-concept">
    <h3 className="tipo-concept__heading">¿Qué es la jerarquía tipográfica?</h3>
    <p className="tipo-concept__intro">
      La tipografía en interfaces no es solo estética. Define qué lee el usuario
      primero, qué es importante y qué es secundario.
    </p>

    <div className="tipo-scale">
      {SCALE.map(({ label, size, weight, text, muted }) => (
        <div key={label} className="tipo-scale__row">
          <span
            className={`tipo-scale__text${muted ? ' tipo-scale__text--muted' : ''}`}
            style={{ fontSize: size + 'px', fontWeight: weight }}
          >
            {text}
          </span>
          <span className="tipo-scale__meta">{size}px / {weight}</span>
        </div>
      ))}
    </div>

    <p className="tipo-concept__note">
      <i className="ti ti-info-circle" />
      Usa máximo 2 familias tipográficas por interfaz
    </p>
  </div>
)

function EjercicioTipografia() {
  const [fuente, setFuente] = useState('DM Sans, sans-serif')
  const [tamano, setTamano] = useState(16)
  const [peso, setPeso] = useState(400)

  const legibility = getLegibility(tamano, fuente)

  return (
    <div className="tipo-exercise">
      <div className="tipo-exercise__field">
        <label className="tipo-exercise__label">Familia tipográfica</label>
        <select
          className="tipo-exercise__select"
          value={fuente}
          onChange={(e) => setFuente(e.target.value)}
        >
          {FONTS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className="tipo-exercise__field">
        <label className="tipo-exercise__label">
          Tamaño
          <span className="tipo-exercise__value">{tamano}px</span>
        </label>
        <input
          className="tipo-exercise__range"
          type="range"
          min={12}
          max={24}
          step={1}
          value={tamano}
          onChange={(e) => setTamano(Number(e.target.value))}
        />
      </div>

      <div className="tipo-exercise__field">
        <label className="tipo-exercise__label">Peso</label>
        <div className="tipo-exercise__weights">
          {WEIGHTS.map(({ label, value }) => (
            <button
              key={value}
              className={`tipo-exercise__weight-btn${peso === value ? ' tipo-exercise__weight-btn--active' : ''}`}
              onClick={() => setPeso(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <p
        className="tipo-exercise__preview"
        style={{ fontFamily: fuente, fontSize: tamano + 'px', fontWeight: peso }}
      >
        El buen diseño tipográfico guía la mirada del usuario a través de la
        interfaz de forma natural e intuitiva.
      </p>

      <div className="tipo-exercise__legibility">
        <span className={`badge badge-${legibility.variant}`}>
          {legibility.text}
        </span>
        <p className="tipo-exercise__legibility-desc">{legibility.explanation}</p>
      </div>
    </div>
  )
}

export default function ModuloTipografia() {
  return (
    <ModuleLayout
      id="tipografia"
      icon="ti-typography"
      title="Tipografía"
      description="Aprende cómo la tipografía guía la atención del usuario en una interfaz"
      moduleNumber={1}
      concept={concept}
      exercise={<EjercicioTipografia />}
    />
  )
}
