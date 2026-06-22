import React from 'react';
import { ArrowLeft, ShieldCheck, Globe, LineChart, Cpu, FileText } from 'lucide-react';
import './App.css';

export default function ScientificArticleDocs({ onBack }) {
  return (
    <div className="app-container" style={{ overflowY: 'auto' }}>
      <div className="chat-card glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '30px', boxSizing: 'border-box' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '20px', flexShrink: 0 }}>
          <button onClick={onBack} className="back-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1rem', padding: '10px 15px', borderRadius: '8px', transition: 'all 0.2s', marginRight: '20px' }}>
            <ArrowLeft size={20} style={{ marginRight: '8px' }} />
            Volver al Chat
          </button>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h1 style={{ margin: 0, color: 'var(--primary-dark)', fontSize: '2rem', fontWeight: 800 }}>Impacto Científico y Publicación</h1>
            <p style={{ margin: '5px 0 0 0', color: 'var(--text-dark)', fontSize: '1rem' }}>Valor académico, privacidad y reproducibilidad de Farmacéutica Alicia IA</p>
          </div>
        </div>

        {/* Content */}
        <div style={{ overflowY: 'auto', paddingRight: '15px' }} className="custom-scrollbar">
          
          <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(52, 152, 219, 0.3)', marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
            <FileText size={30} color="#2980b9" style={{ marginTop: '5px' }} />
            <div>
              <h3 style={{ margin: '0 0 5px 0', color: '#2980b9' }}>Potencial para Artículo Científico</h3>
              <p style={{ margin: 0, color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Este proyecto cuenta con los elementos exactos que buscan las revistas de informática médica (ej. JMIR) hoy en día. El título tentativo del artículo podría ser: <b>"Implementación de Inteligencia Artificial Multimodal Local (Encoder-Free) para el Seguimiento Farmacoterapéutico y Detección de PRMs en Entornos de Alta Privacidad"</b>.
              </p>
            </div>
          </div>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><ShieldCheck size={24} /> ¿Por qué llama tanto la atención hoy en día?</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '15px' }}>
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <h4 style={{ margin: '0 0 10px 0', color: 'var(--primary-dark)', fontSize: '1.1rem' }}>1. El Santo Grial de la Privacidad</h4>
                <p style={{ margin: 0, color: 'var(--text-dark)', fontSize: '0.95rem' }}>
                  El mayor terror de los hospitales al usar herramientas como ChatGPT es que los datos clínicos del paciente viajan a servidores de Estados Unidos, violando normativas como la Ley HIPAA o leyes de privacidad locales. Este proyecto soluciona esto de tajo: al ejecutarse mediante arquitectura local en LM Studio, <b>los datos del paciente nunca salen de la clínica ni tocan internet</b>.
                </p>
              </div>

              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <h4 style={{ margin: '0 0 10px 0', color: 'var(--primary-dark)', fontSize: '1.1rem' }}>2. Cero Costos Recurrentes y Off-Grid</h4>
                <p style={{ margin: 0, color: 'var(--text-dark)', fontSize: '0.95rem' }}>
                  La arquitectura propuesta es ideal para países en vías de desarrollo, clínicas rurales o farmacias comunitarias comunitarias. Funciona perfectamente donde el internet falla constantemente o no existe presupuesto para pagar licencias costosas mensuales a gigantes tecnológicos.
                </p>
              </div>

              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <h4 style={{ margin: '0 0 10px 0', color: 'var(--primary-dark)', fontSize: '1.1rem' }}>3. Transparencia Clínica (Evitando Cajas Negras)</h4>
                <p style={{ margin: 0, color: 'var(--text-dark)', fontSize: '0.95rem' }}>
                  La comunidad médica rechaza los sistemas IA que operan como "cajas negras". La integración de métricas de procesamiento (TTFT, t/s), la visualización del razonamiento oculto de la IA y el panel de auditoría de Pruebas Clínicas representan el estándar de oro en transparencia y el lenguaje riguroso que demandan los comités éticos y revisores científicos.
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Globe size={24} /> Reproducibilidad Global</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <p style={{ margin: '0 0 15px 0', color: 'var(--text-dark)', fontSize: '0.95rem' }}>
                <b>¿Es reproducible en otros estados o países? ¡100%!</b> Esa es la magia de la infraestructura abierta. Cualquier investigador, estudiante o institución de salud en Colombia, España o cualquier comunidad, solo requiere:
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-dark)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><b>Hardware Estándar:</b> Una computadora o laptop comercial promedio (tipo gamer).</li>
                <li><b>Motor de Inferencia:</b> Descargar gratuitamente LM Studio.</li>
                <li><b>Pesos Computacionales:</b> Descargar el archivo <code>.GGUF</code> de Gemma 4 12B.</li>
                <li><b>Interfaz Clínica:</b> Clonar esta misma plataforma web.</li>
              </ul>
              <p style={{ margin: '15px 0 0 0', color: 'var(--success)', fontWeight: 'bold' }}>
                ¡Listo! Con esos 4 pasos, el sistema replica la exactitud farmacológica de Alicia en cualquier rincón del mundo.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
