import { useState } from 'react'
import ModuleLayout from '../components/ModuleLayout'
import './ModuloColor.css'

function getLuminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const toLinear = (c) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

function getContrast(hex1, hex2) {
  const l1 = getLuminance(hex1)
  const l2 = getLuminance(hex2)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

function getWCAGBadge(ratio) {
  if (ratio < 3)   return { variant: 'error',   text: '✗ No pasa WCAG — ilegible' }
  if (ratio < 4.5) return { variant: 'warning',  text: '~ Nivel A — solo texto grande' }
  if (ratio < 7)   return { variant: 'success',  text: '✓ Nivel AA — estándar profesional' }
  return             { variant: 'success',  text: '✓✓ Nivel AAA — accesibilidad máxima' }
}

const WCAG_ROWS = [
  { nivel: 'AA',  ratio: '4.5 : 1', uso: 'Texto normal — estándar profesional' },
  { nivel: 'AA+', ratio: '3 : 1',   uso: 'Texto grande (+18px o +14px negrita)' },
  { nivel: 'AAA', ratio: '7 : 1',   uso: 'Accesibilidad máxima' },
]

const EXAMPLES = [
  { label: '✓ Buen contraste', texto: '#0F172A', fondo: '#FFFFFF' },
  { label: '~ Límite AA',      texto: '#767676', fondo: '#FFFFFF' },
  { label: '✗ Falla',          texto: '#BBBBBB', fondo: '#FFFFFF' },
]

const concept = (
  <div className="color-concept">
    <h3 className="color-concept__heading">Color y accesibilidad en interfaces</h3>
    <p className="color-concept__intro">
      El color en UX no es solo estético. Un mal contraste puede hacer que el
      texto sea ilegible para millones de personas.
    </p>
    <p className="color-concept__wcag">
      El estándar WCAG (Web Content Accessibility Guidelines) define ratios
      mínimos de contraste para garantizar legibilidad en interfaces digitales.
    </p>

    <table className="color-table">
      <thead>
        <tr>
          <th className="color-table__cell color-table__cell--header">Nivel</th>
          <th className="color-table__cell color-table__cell--header">Ratio mínimo</th>
          <th className="color-table__cell color-table__cell--header">Uso</th>
        </tr>
      </thead>
      <tbody>
        {WCAG_ROWS.map(({ nivel, ratio, uso }) => (
          <tr key={nivel}>
            <td className="color-table__cell">{nivel}</td>
            <td className="color-table__cell">{ratio}</td>
            <td className="color-table__cell">{uso}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="color-concept__note">
      <span className="badge badge-success">
        ✓ Todo texto profesional debe pasar mínimo AA
      </span>
    </div>
  </div>
)

function EjercicioColor() {
  const [colorTexto, setColorTexto] = useState('#0F172A')
  const [colorFondo, setColorFondo] = useState('#F8FAFC')

  const ratio = getContrast(colorTexto, colorFondo)
  const wcag = getWCAGBadge(ratio)
  const ratioColor =
    ratio >= 4.5 ? 'var(--color-success)' :
    ratio >= 3   ? 'var(--color-warning)' :
                   'var(--color-error)'

  return (
    <div className="color-exercise">

      <div className="color-pickers">
        <div className="color-picker">
          <label className="color-picker__label">Color del texto</label>
          <input
            className="color-picker__input"
            type="color"
            value={colorTexto}
            onChange={(e) => setColorTexto(e.target.value)}
          />
          <span className="color-picker__hex">{colorTexto}</span>
        </div>
        <div className="color-picker">
          <label className="color-picker__label">Color del fondo</label>
          <input
            className="color-picker__input"
            type="color"
            value={colorFondo}
            onChange={(e) => setColorFondo(e.target.value)}
          />
          <span className="color-picker__hex">{colorFondo}</span>
        </div>
      </div>

      <div
        className="color-preview"
        style={{ backgroundColor: colorFondo, color: colorTexto }}
      >
        <p style={{ fontSize: '16px' }}>Texto de muestra — 16px</p>
        <p style={{ fontSize: '24px', fontWeight: 700 }}>Texto grande — 24px bold</p>
      </div>

      <div className="color-ratio">
        <p className="color-ratio__label">Ratio de contraste</p>
        <p className="color-ratio__value" style={{ color: ratioColor }}>
          {ratio.toFixed(2)} : 1
        </p>
      </div>

      <div className="color-wcag">
        <span className={`badge badge-${wcag.variant}`}>{wcag.text}</span>
      </div>

      <div className="color-examples">
        {EXAMPLES.map(({ label, texto, fondo }) => (
          <button
            key={label}
            className="color-examples__btn"
            onClick={() => { setColorTexto(texto); setColorFondo(fondo) }}
          >
            {label}
          </button>
        ))}
      </div>

    </div>
  )
}

export default function ModuloColor() {
  return (
    <ModuleLayout
      id="color"
      icon="ti-palette"
      title="Color"
      description="Entiende el contraste, la accesibilidad y el estándar WCAG"
      moduleNumber={2}
      concept={concept}
      exercise={<EjercicioColor />}
    />
  )
}
