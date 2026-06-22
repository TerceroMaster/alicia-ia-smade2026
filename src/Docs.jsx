import { ArrowLeft, Cpu, Database, Eye, ShieldAlert, Zap, Mic, Camera, Clock, Download } from 'lucide-react';
import './App.css';

function Docs({ onBack }) {
  return (
    <div className="app-container" style={{ overflowY: 'auto' }}>
      <div className="chat-card glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '30px', boxSizing: 'border-box' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '20px' }}>
          <button
            onClick={onBack}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1rem', marginRight: '20px' }}
          >
            <ArrowLeft size={24} /> Volver al Chat
          </button>
          <div>
            <h1 style={{ margin: 0, color: 'var(--text-dark)' }}>Documentación del Proyecto</h1>
            <p style={{ margin: 0, opacity: 0.7 }}>Farmacéutica Alicia IA - DACYTI UJAT</p>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ overflowY: 'auto', paddingRight: '15px' }} className="custom-scrollbar">

          {/* AVISO DE USUARIO OBJETIVO */}
          <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderLeft: '5px solid #e67e22', borderRadius: '8px', padding: '20px', marginBottom: '30px', display: 'flex', gap: '15px' }}>
            <div style={{ fontSize: '2rem', lineHeight: 1 }}>⚕️</div>
            <div>
              <h3 style={{ margin: '0 0 8px 0', color: '#7d4e00', fontSize: '1rem' }}>AVISO IMPORTANTE: Herramienta de Uso Profesional Exclusivo</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#856404', lineHeight: '1.6' }}>
                <b>Farmacéutica Alicia IA está diseñada exclusivamente para profesionales del área de la salud:</b> farmacéuticos, médicos, enfermeros, internos y químicos clínicos en entornos clínicos supervisados (hospitales, farmacias comunitarias, centros de salud).
              </p>
              <ul style={{ margin: '10px 0 0 0', fontSize: '0.9rem', color: '#856404', lineHeight: '1.7', paddingLeft: '20px' }}>
                <li><b>NO está dirigida a pacientes en casa</b> que busquen automedicarse o sustituir una consulta médica presencial.</li>
                <li><b>NO es una herramienta de diagnóstico definitivo.</b> Sus recomendaciones siempre deben ser validadas y ejecutadas por un profesional de la salud habilitado.</li>
                <li><b>NO está orientada a estudiantes</b> como fuente de consulta clínica independiente sin supervisión docente.</li>
              </ul>
              <p style={{ margin: '10px 0 0 0', fontSize: '0.85rem', color: '#7d4e00', fontStyle: 'italic' }}>
                Esta declaración es un requisito ético estándar para cualquier sistema de Inteligencia Artificial aplicado al ámbito de la salud (conforme a lineamientos de la OMS, FDA y normativas locales de salud digital).
              </p>
            </div>
          </div>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Database size={24} /> Tecnologías Utilizadas</h2>
            <ul style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              <li><b>Frontend:</b> React + Vite. Interfaz moderna y ultra rápida con diseño <i>Glassmorphism</i>.</li>
              <li><b>Iconografía:</b> Lucide React para iconografía consistente y moderna.</li>
              <li><b>Motor de Inferencia:</b> LM Studio corriendo un servidor local OpenAI-compatible.</li>
              <li><b>Modelo de Lenguaje:</b> Google Gemma 4 12B QAT. Un modelo masivo con 12 Billones de parámetros ejecutándose localmente.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px', backgroundColor: 'rgba(255,255,255,0.4)', padding: '20px', borderRadius: '12px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', marginTop: 0 }}><Zap size={24} /> ¿Qué es Gemma 4 12B QAT (Cuantización)?</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              <b>QAT</b> significa <i>Quantization-Aware Training</i> (Entrenamiento Consciente de la Cuantización).
            </p>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              Los modelos de IA originales (como Gemma 12B en su estado puro de bfloat16) requieren decenas de Gigabytes de memoria VRAM (normalmente tarjetas gráficas de miles de dólares). Para poder ejecutarlo en tu laptop con 6GB de VRAM, el modelo se "Cuantiza" (se comprime).
            </p>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              <b>¿Por qué se hace?</b> La cuantización reduce la precisión matemática de los pesos del modelo (de 16 bits a 4 bits, por ejemplo). Esto permite que el modelo quepa en la memoria de una laptop normal. La ventaja del formato <b>QAT</b> de Google es que el modelo fue entrenado <i>sabiendo</i> que iba a ser comprimido, por lo que sufre una pérdida de "inteligencia" clínica casi nula en comparación con la versión masiva original.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Eye size={24} /> Capacidades Multimodales</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              Gemma 4 12B no es solo un modelo de texto. Es un modelo <b>multimodal unificado</b>. Cuenta con un "Vision Encoder" (Ojo) y un Adaptador (Puente) que traducen píxeles a tokens semánticos en el mismo espacio que el lenguaje.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '12px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginTop: 0 }}><Camera size={20} /> Visión (Cámara e Imágenes)</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                  El modelo puede "ver" fotos de recetas, piel (para alergias), o cajas de medicamentos. Lo procesa extrayendo el texto (OCR implícito) y el contexto visual simultáneamente, permitiendo análisis clínicos dermatológicos o validación de dosis.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '20px', borderRadius: '12px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', marginTop: 0 }}><Mic size={20} /> Audio (Voz)</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                  A través de la integración de la API Web Speech, el sistema captura dictado por voz en tiempo real, transcribiendo los síntomas hablados por el paciente directamente al motor, garantizando accesibilidad y rapidez en la consulta.
                </p>
                <p style={{ margin: '10px 0 0 0', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  <b>Text-to-Speech (Lectura por Voz):</b> Alicia también puede responder con audio. Para lograrlo <b>no fue necesario instalar redes neuronales de audio ni consumir APIs de pago</b>. El sistema utiliza <code>window.speechSynthesis</code>, una tecnología nativa incorporada en todos los navegadores modernos que invoca la voz predeterminada del sistema operativo del usuario (Windows/macOS), haciéndolo instantáneo, 100% privado y sin costos.
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Cpu size={24} /> El "Cerebro" (System Prompt)</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              El comportamiento estricto y seguro de Alicia se logra inyectando este prompt en cada consulta:
            </p>
            <pre style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '15px', borderRadius: '8px', fontSize: '0.85rem', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
              {`<|think|>Eres la Farmacéutica Especialista Alicia, experta en Atención Farmacéutica y Seguimiento Farmacoterapéutico.
Tu objetivo principal es identificar Problemas Relacionados con Medicamentos (PRM) y prevenir Resultados Negativos asociados a la Medicación (RNM).

Definiciones que debes aplicar estrictamente:
- PRM (La causa): Fallos en el proceso de uso de fármacos.
- RNM (La consecuencia): Impacto clínico real y perjudicial en el paciente.

Instrucciones:
1. Analiza cuidadosamente la consulta, receta o caso clínico.
2. Identifica si existe algún PRM y clasifícalo.
3. Evalúa el riesgo de un RNM y explícalo.
4. Ofrece una recomendación farmacéutica profesional.
5. REGLA CRÍTICA: Tus respuestas deben ser MUY concisas y directas. No des explicaciones largas. Máximo 150 palabras.`}
            </pre>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><ShieldAlert size={24} /> Ventajas y Limitaciones de Alicia IA</h2>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{ color: 'var(--success)' }}>Lo que SÍ puede hacer de forma brillante</h3>
                <ul style={{ lineHeight: '1.6' }}>
                  <li><b>Identificar Interacciones:</b> Cruza bases de datos para detectar choques entre fármacos (ej. AINEs + Anticoagulantes).</li>
                  <li><b>Análisis Visual:</b> Leer recetas con mala caligrafía y analizar síntomas visuales básicos (dermatología).</li>
                  <li><b>Privacidad Total:</b> Al correr 100% local, ningún dato clínico sale a internet (HIPAA compliant por diseño).</li>
                  <li><b>Razonamiento Profundo:</b> Su modo "Think" previene alucinaciones precipitadas analizando variables ocultas.</li>
                </ul>
              </div>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{ color: 'var(--danger)' }}>Lo que NO puede hacer (Limitaciones)</h3>
                <ul style={{ lineHeight: '1.6' }}>
                  <li><b>Diagnóstico Definitivo:</b> Alicia es una herramienta de <i>apoyo</i> farmacéutico, no sustituye la valoración médica física presencial.</li>
                  <li><b>Sesgo de Sugestión (Text Bias):</b> Como vimos en las pruebas, la IA prioriza fuertemente el texto del usuario sobre la imagen. Si el usuario miente, la IA actuará bajo un protocolo de "Seguridad Primero" asumiendo la gravedad.</li>
                  <li><b>Límites Físicos:</b> Debido a la memoria VRAM (6GB), su velocidad de respuesta es limitada (aprox. 9 tokens/s) y requiere la poda de atención (Context Window Limit).</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Download size={24} /> Exportación de Registro Clínico</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <p style={{ margin: '0 0 15px 0', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                El sistema incluye una función de <b>Auditoría y Exportación</b> diseñada para estudios de validación clínica (doble ciego) y expediente médico electrónico.
              </p>
              
              <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>¿Qué exporta exactamente?</h4>
              <p style={{ margin: '0 0 15px 0', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                No exporta un solo mensaje, sino <b>toda la conversación visible en la pantalla de la sesión actual</b>. Esto incluye:
              </p>
              <ul style={{ margin: '0 0 15px 0', paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Todos los datos y recetas ingresadas por el usuario (texto o indicadores de fotos).</li>
                <li>Todas las respuestas finales emitidas por Farmacéutica Alicia IA.</li>
                <li><b>El Razonamiento Oculto (Cadena de Pensamiento):</b> Esto es crucial. Exporta las "hipótesis mentales" que la IA formuló antes de responder, permitiendo a los médicos expertos auditar <i>por qué</i> la IA llegó a esa conclusión de seguridad.</li>
              </ul>

              <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>¿Cómo funciona?</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                Al dar clic en el botón de <b>Exportar</b> (ubicado en la cabecera del chat), la plataforma genera en tiempo real un archivo de texto plano (<code>.txt</code>) estructurado de forma secuencial. Este archivo se guarda instantáneamente en la computadora local del usuario. <b>Cero bases de datos en la nube.</b> Esto garantiza que ninguna bitácora clínica cruce la red, manteniendo el 100% de la privacidad del paciente y simplificando la recolección de datos para estudios científicos.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Cpu size={24} /> Requisitos de Hardware y Costos</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              Para ejecutar el modelo <b>Gemma 4 12B QAT</b> localmente con una velocidad de inferencia aceptable, se requiere un equipo con especificaciones orientadas al procesamiento de IA. A continuación se detallan los requisitos recomendados y sus costos promedio (USD):
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.03)', padding: '15px', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Memoria VRAM (Tarjeta Gráfica) - <i>Requisito Crítico</i></h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dark)' }}><b>Mínimo:</b> 6GB a 8GB VRAM (Ej: NVIDIA RTX 3060 / 4060). <br /><b>Recomendado:</b> 12GB a 16GB VRAM (Ej: RTX 4070 Ti / 4080) para poder procesar la ventana de contexto completa y visión simultáneamente.<br /><b>Costo Promedio:</b> $300 - $800 USD dependiendo de la GPU.</p>
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.03)', padding: '15px', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Memoria RAM del Sistema</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dark)' }}><b>Mínimo:</b> 16GB RAM DDR4/DDR5.<br /><b>Recomendado:</b> 32GB RAM o más (especialmente si no se cuenta con suficiente VRAM y se debe delegar procesamiento a la CPU).<br /><b>Costo Promedio:</b> $60 - $120 USD.</p>
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.03)', padding: '15px', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Procesador (CPU)</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dark)' }}><b>Recomendado:</b> Intel Core i5/i7 (Generación 12+) o AMD Ryzen 5/7 (Serie 5000+).<br /><b>Costo Promedio:</b> $150 - $350 USD.</p>
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.03)', padding: '15px', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Almacenamiento</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dark)' }}><b>Recomendado:</b> SSD NVMe de al menos 500GB. Los modelos de lenguaje ocupan varios GBs de espacio y requieren lecturas muy rápidas al cargarse.<br /><b>Costo Promedio:</b> $40 - $80 USD.</p>
              </div>
            </div>

            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginTop: '20px', padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', border: '1px solid rgba(46, 204, 113, 0.3)' }}>
              <b>Costo Total Promedio (Equipo Completo):</b> Un equipo de escritorio o laptop preensamblado que cumpla con las características recomendadas ronda entre <b>$1,000 USD y $1,500 USD</b>. Aunque es una inversión inicial, elimina por completo los costos recurrentes de APIs en la nube (como GPT-4) y garantiza total privacidad clínica.
            </p>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginTop: '10px', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', border: '1px solid rgba(52, 152, 219, 0.3)' }}>
              <b>Perspectiva a Futuro (Descenso de Costos):</b> Es importante destacar que la industria del hardware de Inteligencia Artificial avanza a un ritmo acelerado. Los costos de los componentes computacionales (VRAM y procesadores) tienden a disminuir constantemente. Esto significa que la inversión inicial necesaria hoy, se reducirá de manera significativa en el futuro cercano, haciendo que estas herramientas clínicas sean cada vez más accesibles para cualquier consultorio o farmacia.
            </p>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginTop: '10px', padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', border: '1px solid rgba(243, 156, 18, 0.3)' }}>
              <b>¿Preensamblada de Tienda vs. Armada por Técnico?:</b> Al adquirir el hardware, <b>se recomienda fuertemente armar una computadora de escritorio por piezas con un técnico especializado</b>. Los equipos que se venden en tiendas departamentales (supermercados, Liverpool, etc.) suelen tener sobreprecio o incluir componentes que no benefician a la IA (mucha luz RGB pero poca VRAM). Armar el equipo a medida te permite destinar el presupuesto exactamente a lo que importa (Tarjeta Gráfica y RAM), obteniendo un rendimiento muy superior por el mismo dinero o incluso menos.
            </p>
          </section>

          <section style={{ marginBottom: '30px', backgroundColor: 'rgba(41,128,185,0.06)', padding: '24px', borderRadius: '14px', border: '1px solid rgba(41,128,185,0.2)' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', marginTop: 0 }}>🧬 Arquitectura de 7 Perfiles Clínicos Especializados</h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '16px' }}>
              Una de las innovaciones centrales de esta plataforma es que <b>un único modelo de lenguaje (Gemma 4 12B) puede comportarse de 7 maneras clínicamente distintas</b>, según el perfil del paciente seleccionado. Esto se logra mediante <b>System Prompts especializados</b> en <code>systemPrompts.js</code>. No se descarga ningún modelo adicional; el mismo cerebro IA recibe instrucciones de contexto adaptadas a cada grupo etario.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px', marginBottom: '20px' }}>
              {[
                { emoji: '👶', title: 'Neonatos y Bebés (0-12m)', color: '#e91e8c', desc: 'Dosificación mg/kg/día. Metabolismo hepático/renal inmaduro. Evita: Cloranfenicol, Aspirina, Sulfonamidas.' },
                { emoji: '🧒', title: 'Pediatría (1-12 años)', color: '#f39c12', desc: 'Cálculo mg/kg, límite en dosis adulto. Referencias: BNF for Children, OPS/PAHO.' },
                { emoji: '🧑', title: 'Adolescentes (13-17)', color: '#8e44ad', desc: 'Interacciones con anticonceptivos, riesgo SNC, alerta FDA para IRS.' },
                { emoji: '🧑‍⚕️', title: 'Adulto General (18-64)', color: '#2980b9', desc: 'Dosificación estándar. PRM/RNM según guías internacionales. Alicia 1.0 base.' },
                { emoji: '👴', title: 'Adulto Mayor (65+)', color: '#27ae60', desc: 'Criterios STOPP/START (2023), Criterios de Beers (AGS 2023), Cockroft-Gault renal.' },
                { emoji: '🤰', title: 'Embarazada', color: '#e74c3c', desc: 'Categorías FDA (A/B/C/D/X). Análisis por trimestre. Fármacos teratogénicos absolutos.' },
                { emoji: '🤱', title: 'Lactancia Materna', color: '#16a085', desc: 'LactMed NIH, e-lactancia.org. Dosis Relativa Infantil (DRI). Cociente Leche/Plasma.' },
              ].map(p => (
                <div key={p.title} style={{ background: 'white', borderRadius: '10px', padding: '14px', borderLeft: `4px solid ${p.color}`, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: p.color, marginBottom: '6px' }}>{p.emoji} {p.title}</div>
                  <p style={{ margin: 0, fontSize: '0.83rem', color: '#555', lineHeight: '1.4' }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: '#e8f4f8', borderRadius: '10px', padding: '15px', fontSize: '0.9rem', color: '#2c3e50', lineHeight: '1.6' }}>
              <b>¿Por qué es metodológicamente relevante?</b> En farmacología clínica, la farmacocinética (absorción, distribución, metabolismo, excreción) varía radicalmente según la etapa de vida. Al especializar el prompt por perfil, la IA internaliza los estándares de referencia correctos para cada grupo, reduciendo el riesgo de PRM por contexto inadecuado.
            </div>
          </section>

          {/* NUEVA SECCIÓN: ISO 42001 */}
          <section style={{ marginBottom: '30px', backgroundColor: 'rgba(231,76,60,0.06)', padding: '24px', borderRadius: '14px', border: '1px solid rgba(231,76,60,0.2)' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#c0392b', marginTop: 0 }}>
              <ShieldAlert size={24} /> SGIA ISO/IEC 42001 &amp; Seguridad Anti-Jailbreaking
            </h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              El sistema cumple con los principios del <b>Sistema de Gestión de Inteligencia Artificial (SGIA) según la norma ISO/IEC 42001</b>, el estándar internacional que define cómo las organizaciones deben desarrollar y operar sistemas de IA de forma ética, transparente y responsable.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', margin: '16px 0' }}>
              {[
                { icon: '🛡️', title: 'Transparencia Clínica', desc: 'Cada decisión de la IA es auditable. La cadena de pensamiento completa (Chain of Thought) se expone al profesional.' },
                { icon: '🔒', title: 'Privacidad por Diseño', desc: 'La arquitectura Air-Gapped local garantiza que ningún dato de salud protegido (PHI) abandona el dispositivo.' },
                { icon: '⚖️', title: 'Equidad y Mitigación de Sesgos', desc: 'Los 7 perfiles clínicos evitan aplicar criterios de adulto genérico a neonatos, embarazadas o adultos mayores.' },
                { icon: '🚫', title: 'Anti-Jailbreaking', desc: 'Defensa contra ataques DAN, inyecciones de prompt y System Prompt Leakage. El sistema rechaza instrucciones adversarias que comprometan la seguridad del paciente.' },
              ].map(item => (
                <div key={item.title} style={{ background: 'white', borderRadius: '10px', padding: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#c0392b', marginBottom: '6px' }}>{item.icon} {item.title}</div>
                  <p style={{ margin: 0, fontSize: '0.83rem', color: '#555', lineHeight: '1.4' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NUEVA SECCIÓN: Diseño Responsivo y Avatar */}
          <section style={{ marginBottom: '30px', backgroundColor: 'rgba(41,128,185,0.06)', padding: '24px', borderRadius: '14px', border: '1px solid rgba(41,128,185,0.2)' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', marginTop: 0 }}>
              💻 Avatar Holográfico y Diseño Responsivo Multidispositivo
            </h2>
            <p style={{ lineHeight: '1.6', color: 'var(--text-dark)' }}>
              La interfaz de usuario (UI) fue rediseñada incorporando dos avances clave:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.03)', padding: '15px', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>🤖 Avatar Holográfico (Avatar Alicia)</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                  Se integró una representación visual animada de la IA <b>visible en los 7 perfiles clínicos</b>. El avatar flota con una animación CSS suave (<code>@keyframes float</code>) y tiene un efecto de sombra dinámica (<code>drop-shadow</code>). Esto mejora significativamente el <i>engagement</i> del profesional con el sistema y humaniza la interfaz clínica.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.03)', padding: '15px', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0' }}>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>📐 Diseño Responsivo con <code>clamp()</code></h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                  La interfaz se adapta automáticamente a cualquier tamaño de pantalla —desde laptops de 13" hasta monitores de escritorio ultrawide— sin romperse ni perder legibilidad. Esto se logra con la función CSS <code>clamp(mínimo, ideal, máximo)</code>. Por ejemplo: <code>width: clamp(300px, 35vw, 700px)</code> ajusta el avatar proporcionalmente al ancho de pantalla disponible, garantizando siempre un layout óptimo.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Docs;
