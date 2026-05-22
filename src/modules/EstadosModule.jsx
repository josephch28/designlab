import { useState } from 'react';
import ModuleLayout from '../components/ModuleLayout';
import './EstadosModule.css';

export default function EstadosModule() {
  const [activeState, setActiveState] = useState('default');

  const statesData = [
    { id: 'default', label: 'DEFAULT', desc: 'Estado de reposo. El botón está listo para ser usado.' },
    { id: 'hover', label: 'HOVER', desc: 'El cursor está sobre el botón. Indica que es interactivo.' },
    { id: 'active', label: 'ACTIVE', desc: 'El usuario está pulsando el botón en este momento.' },
    { id: 'disabled', label: 'DISABLED', desc: 'La acción no está disponible. El usuario no puede interactuar.' },
    { id: 'loading', label: 'LOADING', desc: 'El sistema está procesando. Evita acciones duplicadas del usuario.' },
  ];

  const currentDesc = statesData.find(s => s.id === activeState)?.desc;

  const conceptContent = (
    <div className="estados-concepto">
      <h3 className="estados-titulo">Feedback Interactivo</h3>
      <p className="estados-texto">
        El diseño de la interacción requiere respuestas visuales claras. Cada elemento interactivo debe comunicar su estado actual al usuario mediante cambios sutiles pero perceptibles en la interfaz.
      </p>
      <ul className="estados-lista">
        <li><strong>Hover:</strong> Confirma que el elemento es clickeable antes de la acción.</li>
        <li><strong>Active:</strong> Brinda certeza visual durante el momento del clic.</li>
        <li><strong>Disabled:</strong> Previene la frustración indicando qué acciones no se pueden realizar.</li>
      </ul>
    </div>
  );

  const exerciseContent = (
    <div className="estados-ejercicio">
      <div className="estados-simulador">
        {/* Componente simulado */}
        <div className="estados-preview-area">
          <button 
            className={`estados-btn-principal estados-btn-principal--${activeState}`}
            aria-disabled={activeState === 'disabled'}
            disabled={activeState === 'disabled'}
          >
            {activeState === 'loading' && <span className="estados-spinner"></span>}
            {activeState === 'loading' ? 'Cargando...' : 'Botón Principal'}
          </button>
        </div>

        {/* Controles */}
        <div className="estados-controles">
          <p className="estados-controles-label">Cambiar estado del componente:</p>
          <div className="estados-chips">
            {statesData.map(state => (
              <button
                key={state.id}
                className={`estados-chip ${activeState === state.id ? 'estados-chip--activo' : ''}`}
                onClick={() => setActiveState(state.id)}
              >
                {state.label}
              </button>
            ))}
          </div>
          <p className="estados-explicacion">
            <strong>{activeState.toUpperCase()}:</strong> {currentDesc}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <ModuleLayout
      id="estados"
      icon="ti-mouse"
      title="Estados"
      description="La comunicación visual de la disponibilidad y respuesta de los elementos interactivos."
      moduleNumber="04"
      concept={conceptContent}
      exercise={exerciseContent}
    />
  );
}
