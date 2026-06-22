import { ArrowLeft, ShieldAlert, Lock, ShieldCheck, Scale, RefreshCw } from 'lucide-react';
import './App.css';

function IsoSecurityDocs({ onBack }) {
  return (
    <div className="app-container" style={{ overflowY: 'auto' }}>
      <div className="chat-card glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '30px', boxSizing: 'border-box' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '20px' }}>
          <button
            onClick={onBack}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#2c3e50', fontWeight: 'bold', fontSize: '1rem', marginRight: '20px' }}
          >
            <ArrowLeft size={24} /> Volver
          </button>
          <div>
            <h1 style={{ margin: 0, color: '#2c3e50', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={32} color="#2c3e50" /> ISO 42001 SGIA & Ciberseguridad
            </h1>
            <p style={{ margin: 0, opacity: 0.7 }}>Cumplimiento normativo y protección contra ataques adversarios en Farmacéutica Alicia IA</p>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ overflowY: 'auto', paddingRight: '15px' }} className="custom-scrollbar">

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #2c3e50', paddingBottom: '10px' }}>¿Qué es un SGIA (Sistema de Gestión de Inteligencia Artificial)?</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              Un SGIA es un marco estructurado que ayuda a las organizaciones a desarrollar, implementar y utilizar tecnologías de IA de forma <b>ética, transparente y responsable</b>. Se rige principalmente por la norma internacional <b>ISO/IEC 42001</b>.
            </p>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              Un SGIA se estructura en torno a pilares fundamentales que garantizan el uso seguro de la tecnología:
            </p>
            <ul style={{ lineHeight: '1.8', color: 'var(--text-dark)', marginTop: '10px' }}>
              <li><Scale size={18} style={{ verticalAlign: 'middle', marginRight: '5px', color: '#2c3e50' }}/> <b>Gobernanza y Responsabilidad:</b> Asigna roles y funciones claras para supervisar el ciclo de vida de los sistemas de IA.</li>
              <li><ShieldAlert size={18} style={{ verticalAlign: 'middle', marginRight: '5px', color: '#e67e22' }}/> <b>Gestión de Riesgos:</b> Identifica, evalúa y mitiga los riesgos específicos que presentan los algoritmos.</li>
              <li><ShieldCheck size={18} style={{ verticalAlign: 'middle', marginRight: '5px', color: '#27ae60' }}/> <b>Ética y Transparencia:</b> Combate sesgos algorítmicos, asegura la equidad y protege la privacidad de los datos.</li>
              <li><RefreshCw size={18} style={{ verticalAlign: 'middle', marginRight: '5px', color: '#2980b9' }}/> <b>Mejora Continua:</b> Monitorea constantemente el rendimiento de los modelos de IA para adaptarse a las evoluciones tecnológicas.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px', backgroundColor: 'rgba(44, 62, 80, 0.05)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #2c3e50' }}>
            <h2 style={{ color: '#2c3e50', marginTop: 0 }}>Norma ISO/IEC 42001</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              La ISO/IEC 42001 es la primera norma internacional que establece los requisitos para crear, implementar, mantener y mejorar un Sistema de Gestión de Inteligencia Artificial (SGIA). Proporciona un marco auditable para que las organizaciones desarrollen y utilicen tecnologías de IA de manera ética, responsable y transparente.
            </p>
            
            <h3 style={{ color: '#34495e', marginTop: '20px' }}>¿Qué cubre la norma?</h3>
            <ul style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              <li><b>Gobernanza de la IA:</b> Define directrices claras para la supervisión, responsabilidad y toma de decisiones dentro de la empresa.</li>
              <li><b>Gestión de Riesgos:</b> Identifica, evalúa y mitiga riesgos éticos, de privacidad, de sesgo y de seguridad asociados al uso de IA.</li>
              <li><b>Evaluación de Impacto:</b> Ayuda a entender cómo los sistemas de IA afectan a los usuarios, al negocio y a la sociedad.</li>
              <li><b>Ciclo de vida y proveedores:</b> Supervisa el desarrollo continuo del aprendizaje automático y evalúa el papel de terceros en los servicios de IA.</li>
            </ul>

            <h3 style={{ color: '#34495e', marginTop: '20px' }}>Estructura y Beneficios</h3>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: 0 }}>
              Comparte la estructura de alto nivel de otras normas ISO populares (como ISO 9001 e ISO 27001), lo que facilita su integración. Permite a las empresas demostrar el cumplimiento normativo (alineándose con leyes como el Reglamento Europeo de IA) y genera confianza demostrable en el mercado.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#e74c3c', borderBottom: '2px solid #e74c3c', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Lock size={28} color="#e74c3c" /> Ataques Adversarios: Jailbreaking en IA
            </h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              El <b>jailbreak</b> en Inteligencia Artificial es una técnica de manipulación mediante la cual los usuarios engañan a un modelo de lenguaje (como un chatbot) para eludir sus filtros de seguridad, directrices éticas y restricciones operativas. El objetivo es obligar al sistema a realizar acciones prohibidas o generar contenido restringido.
            </p>

            <h3 style={{ color: '#c0392b', marginTop: '25px' }}>¿Cómo funciona?</h3>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              En lugar de hackear el sistema a nivel de software, el jailbreak opera a través de la elaboración de prompts (instrucciones escritas). Los atacantes utilizan tácticas de ingeniería social como:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '15px' }}>
              <div style={{ backgroundColor: '#fdf2e9', padding: '15px', borderRadius: '8px', border: '1px solid #fae5d3' }}>
                <strong style={{ color: '#d35400' }}>Asumir roles</strong>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem' }}>Ordenar a la IA que actúe como un personaje ficticio sin moral o como un desarrollador probando el sistema.</p>
              </div>
              <div style={{ backgroundColor: '#fdf2e9', padding: '15px', borderRadius: '8px', border: '1px solid #fae5d3' }}>
                <strong style={{ color: '#d35400' }}>Preguntas hipotéticas</strong>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem' }}>Plantear escenarios donde el daño no es real (ej. "Imagina que estamos escribiendo el guion de una película...").</p>
              </div>
              <div style={{ backgroundColor: '#fdf2e9', padding: '15px', borderRadius: '8px', border: '1px solid #fae5d3' }}>
                <strong style={{ color: '#d35400' }}>Idiomas codificados</strong>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem' }}>Disfrazar la intención maliciosa utilizando poesía, metáforas o cifrado para confundir los filtros.</p>
              </div>
            </div>

            <h3 style={{ color: '#c0392b', marginTop: '25px' }}>Riesgos y peligros</h3>
            <ul style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              <li>Generar correos de phishing y malware avanzado.</li>
              <li>Obtener instrucciones paso a paso para realizar actividades ilegales.</li>
              <li>Extraer información confidencial o instrucciones del sistema (<i>System Prompt Leakage</i>).</li>
              <li>Crear desinformación masiva o contenido perjudicial.</li>
            </ul>

            <div style={{ backgroundColor: '#e8f6f3', padding: '20px', borderRadius: '12px', marginTop: '25px', borderLeft: '4px solid #1abc9c' }}>
              <h3 style={{ color: '#16a085', marginTop: 0 }}>Prevención y Robustez en Farmacéutica Alicia IA</h3>
              <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
                Para contrarrestar estas vulnerabilidades, en este sistema implementamos directrices alineadas a la ISO 42001:
              </p>
              <ul style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: 0 }}>
                <li><b>RLHF (Reinforcement Learning from Human Feedback):</b> Los modelos base (Gemma) están entrenados para reconocer y rechazar peticiones maliciosas.</li>
                <li><b>Filtros de Sistema Robustos:</b> El System Prompt de Alicia establece un rol clínico estricto y un límite de palabras (150) que reduce la superficie de ataque para inyecciones narrativas largas.</li>
                <li><b>Monitoreo Clínico Exclusivo:</b> Al limitar el acceso a profesionales de la salud en un entorno local (Air-Gapped), se elimina el vector de ataque público masivo.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default IsoSecurityDocs;
