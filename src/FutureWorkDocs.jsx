import React from 'react';
import { ArrowLeft, Rocket, Database, Bot, LineChart, Network, Stethoscope } from 'lucide-react';
import './App.css';

export default function FutureWorkDocs({ onBack }) {
  return (
    <div className="app-container" style={{ overflowY: 'auto' }}>
      <div className="chat-card glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '30px', boxSizing: 'border-box' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '20px', flexShrink: 0 }}>
          <button 
            onClick={onBack}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1rem', marginRight: '20px' }}
          >
            <ArrowLeft size={24} /> Volver al Chat
          </button>
          <div>
            <h1 style={{ margin: 0, color: 'var(--text-dark)' }}>El Futuro: Alicia 2.0</h1>
            <p style={{ margin: 0, opacity: 0.7 }}>Hacia un verdadero Seguimiento Farmacoterapéutico Longitudinal</p>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ overflowY: 'auto', paddingRight: '15px' }} className="custom-scrollbar">
          
          <div style={{ backgroundColor: 'rgba(142, 68, 173, 0.1)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(142, 68, 173, 0.3)', marginBottom: '30px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
            <Rocket size={32} color="#8e44ad" style={{ marginTop: '5px' }} />
            <div>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: '1.6' }}>
                Actualmente, <b>Alicia 1.0</b> funciona como un brillante <b>Asistente Analizador Transversal</b>: Evalúa una receta o consulta en el momento, detecta Problemas Relacionados con Medicamentos (PRM) y previene riesgos, pero "olvida" al paciente al cerrar la sesión. El siguiente gran paso arquitectónico es convertirla en un <b>Agente Clínico Autónomo</b> capaz de realizar un Seguimiento Longitudinal.
              </p>
            </div>
          </div>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Database size={24} /> 1. Memoria a Largo Plazo (RAG y Bases Vectoriales)</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                La limitante actual es la ventana de contexto (la cantidad de palabras que la IA puede recordar a la vez). En <b>Alicia 2.0</b>, implementaremos una Base de Datos Vectorial Local Encriptada (ej. ChromaDB).
              </p>
              <ul style={{ margin: '15px 0 0 0', paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: '1.5' }}>
                <li><b>Expediente Electrónico Semántico:</b> Cada vez que un paciente regrese, Alicia buscará automáticamente en la base de datos sus últimos laboratorios y cambios de medicación históricos.</li>
                <li><b>RAG Clínico (Retrieval-Augmented Generation):</b> Alicia extraerá solo la información histórica relevante de ese paciente específico y se la "inyectará" en el cerebro antes de emitir un juicio actual.</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Bot size={24} /> 2. Proactividad (Cron Jobs y Alertas)</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                El seguimiento real exige que el farmacéutico se adelante al problema. Alicia dejará de ser pasiva (esperar a que le hablen) y se volverá proactiva.
              </p>
              <ul style={{ margin: '15px 0 0 0', paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: '1.5' }}>
                <li><b>Motor de Tareas Programadas:</b> El sistema escaneará la base de datos diariamente en segundo plano.</li>
                <li><b>Alertas Preventivas:</b> Alicia generará avisos automáticos al farmacéutico: <i>"Aviso: El paciente Roberto lleva 6 meses tomando Amiodarona. Es mandatorio solicitar pruebas de función tiroidea esta semana."</i></li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Network size={24} /> 3. Sistema Multi-Agente (El Hospital Virtual)</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                Exigirle a un solo modelo que resuelva todo aumenta el riesgo de "alucinaciones". Alicia 2.0 delegará el trabajo a sub-agentes especializados:
              </p>
              <ul style={{ margin: '15px 0 0 0', paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: '1.5' }}>
                <li><b>Agente Lector (OCR):</b> Especializado únicamente en transcribir PDFs y pruebas de laboratorio.</li>
                <li><b>Agente Toxicólogo:</b> Un modelo más pequeño y ultrarrápido dedicado exclusivamente a cruzar fármacos para detectar interacciones.</li>
                <li><b>Alicia (Orquestadora):</b> Recibirá los reportes de los especialistas, unificará la decisión final y dialogará con el paciente o médico.</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><LineChart size={24} /> 4. Dashboards Longitudinales</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                Para visualizar verdaderamente el Seguimiento Farmacoterapéutico, la plataforma evolucionará de ser un "Chat" a incluir páneles de control. Los profesionales podrán ver <b>gráficas de tendencia</b> mostrando cómo los niveles de Hemoglobina Glicosilada o Presión Arterial del paciente responden a las intervenciones realizadas por Alicia a lo largo del tiempo.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Stethoscope size={24} /> 5. Validación mediante Métricas HCI</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                Para la validación del sistema en la práctica, integraremos un marco de evaluación basado en métricas de <b>Interacción Humano-Computadora (HCI)</b>:
              </p>
              <ul style={{ margin: '15px 0 0 0', paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: '1.5' }}>
                <li><b>Comportamiento (Performance):</b> Tasa de éxito, tiempo en la tarea, y reducción en la tasa de errores de prescripción.</li>
                <li><b>Carga Cognitiva:</b> Evaluación del esfuerzo mental mediante herramientas como NASA-TLX.</li>
                <li><b>Actitud y Satisfacción:</b> Medición subjetiva de los profesionales con escalas como SUS (System Usability Scale) y NPS.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
