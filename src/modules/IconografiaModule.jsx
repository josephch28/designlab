import { useState } from 'react';
import ModuleLayout from '../components/ModuleLayout';
import {
  IconDeviceFloppy,
  IconSearch,
  IconTrash,
  IconShare,
  IconSettings,
  IconHome,
  IconBell,
  IconUser
} from '@tabler/icons-react';
import './IconografiaModule.css';

export default function IconografiaModule() {
  const [answers, setAnswers] = useState({
    deviceFloppy: '',
    search: '',
    trash: '',
    share: '',
    settings: '',
    home: '',
    bell: '',
    user: ''
  });

  const [feedback, setFeedback] = useState({});
  const [hasVerified, setHasVerified] = useState(false);
  const [score, setScore] = useState(0);

  const iconsData = [
    { id: 'deviceFloppy', component: <IconDeviceFloppy />, validAnswers: ['guardar', 'salvar'] },
    { id: 'search', component: <IconSearch />, validAnswers: ['buscar', 'busqueda', 'lupa'] },
    { id: 'trash', component: <IconTrash />, validAnswers: ['eliminar', 'borrar', 'basura', 'papelera'] },
    { id: 'share', component: <IconShare />, validAnswers: ['compartir', 'enviar'] },
    { id: 'settings', component: <IconSettings />, validAnswers: ['configuracion', 'ajustes', 'opciones', 'tuerca'] },
    { id: 'home', component: <IconHome />, validAnswers: ['inicio', 'casa', 'home'] },
    { id: 'bell', component: <IconBell />, validAnswers: ['notificacion', 'notificaciones', 'campana', 'avisos'] },
    { id: 'user', component: <IconUser />, validAnswers: ['usuario', 'perfil', 'cuenta', 'persona'] }
  ];

  const normalize = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  const handleChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleVerify = () => {
    let currentScore = 0;
    const newFeedback = {};

    iconsData.forEach(icon => {
      const userAnswer = normalize(answers[icon.id]);
      const isCorrect = icon.validAnswers.some(ans => normalize(ans) === userAnswer);
      
      if (isCorrect) {
        currentScore++;
        newFeedback[icon.id] = 'correct';
      } else {
        newFeedback[icon.id] = 'incorrect';
      }
    });

    setScore(currentScore);
    setFeedback(newFeedback);
    setHasVerified(true);
  };

  const handleRetry = () => {
    setAnswers({
      deviceFloppy: '',
      search: '',
      trash: '',
      share: '',
      settings: '',
      home: '',
      bell: '',
      user: ''
    });
    setFeedback({});
    setHasVerified(false);
    setScore(0);
  };

  const getMotivacionalText = () => {
    if (score === 8) return "¡Excelente! Dominas el lenguaje universal.";
    if (score >= 5) return "¡Bien hecho! Tienes una buena intuición.";
    return "Sigue practicando, la consistencia es clave.";
  };

  const conceptContent = (
    <div className="iconografia-concepto">
      <h3 className="iconografia-titulo">Lenguaje Universal</h3>
      <p className="iconografia-texto">
        Los iconos son los pictogramas modernos. Deben ser consistentes en
        su peso de línea, estilo (sólido o contorno) y tamaño. Su propósito es ayudar
        al usuario a predecir acciones de forma rápida y visual.
      </p>
      <figure className="iconografia-figura">
        <div className="iconografia-placeholder"></div>
        <figcaption>Diseñando con precisión geométrica</figcaption>
      </figure>
    </div>
  );

  const exerciseContent = (
    <div className="iconografia-ejercicio">
      <div className="iconografia-grid">
        {iconsData.map((icon) => (
          <div 
            key={icon.id} 
            className={`iconografia-item ${hasVerified ? `iconografia-item--${feedback[icon.id]}` : ''}`}
          >
            <div className="iconografia-icon-wrapper">
              {icon.component}
            </div>
            <label htmlFor={`input-${icon.id}`} className="sr-only">
              Significado del icono
            </label>
            <input
              id={`input-${icon.id}`}
              type="text"
              className="iconografia-input"
              value={answers[icon.id]}
              onChange={(e) => handleChange(icon.id, e.target.value)}
              disabled={hasVerified}
              placeholder="Significado..."
              autoComplete="off"
            />
          </div>
        ))}
      </div>
      
      {!hasVerified ? (
        <button className="iconografia-btn-primary" onClick={handleVerify}>
          Verificar Significado
        </button>
      ) : (
        <div className="iconografia-resultados">
          <div className="iconografia-puntaje">
            <p className="iconografia-puntaje-texto">Has acertado {score} de 8</p>
            <p className="iconografia-puntaje-motiva">{getMotivacionalText()}</p>
          </div>
          <button className="iconografia-btn-secondary" onClick={handleRetry}>
            Reintentar
          </button>
        </div>
      )}
    </div>
  );

  return (
    <ModuleLayout
      id="iconografia"
      icon="ti-apps"
      title="Iconografía"
      description="El uso de metáforas visuales para facilitar la interacción y la comprensión del sistema."
      moduleNumber="03"
      concept={conceptContent}
      exercise={exerciseContent}
    />
  );
}
