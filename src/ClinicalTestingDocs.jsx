import React from 'react';
import { ArrowLeft, Activity, Microscope, BrainCircuit, Target, BarChart, FileText, FlaskConical, GraduationCap } from 'lucide-react';
import './App.css';

export default function ClinicalTestingDocs({ onBack }) {
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
            <h1 style={{ margin: 0, color: 'var(--text-dark)' }}>Auditoría y Pruebas Clínicas</h1>
            <p style={{ margin: 0, opacity: 0.7 }}>Arquitectura del procesamiento, métricas y casos de estrés para Alicia</p>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ overflowY: 'auto', paddingRight: '15px' }} className="custom-scrollbar">
          
          <div style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(231, 76, 60, 0.3)', marginBottom: '30px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
              <b>Transparencia Total:</b> Esta sección está diseñada para médicos, farmacólogos e investigadores que desean entender cómo "piensa" la IA, cómo se auditan sus respuestas y cómo poner a prueba su conocimiento clínico.
            </p>
          </div>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><BrainCircuit size={24} /> 1. El Viaje de los Datos (¿Cómo funciona?)</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              
              <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '15px', marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Paso 1: Entrada Multimodal (Input)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  El profesional ingresa datos mediante texto, voz o imagen (receta médica). Al tener una <b>Arquitectura Encoder-Free (libre de codificadores)</b>, Alicia elimina los pesados modelos traductores tradicionales. El audio se procesa como ondas directas (cortes de 40ms proyectados linealmente al cerebro) y las imágenes usan un micro-procesador visual ultraligero (de solo 35M de parámetros). Toda la información entra directamente en crudo a la misma red neuronal sin "cuellos de botella".
                </p>
              </div>

              <div style={{ borderLeft: '3px solid #9b59b6', paddingLeft: '15px', marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#8e44ad' }}>Paso 2: Tokenización y Embeddings (Espacio Vectorial)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  La información se transforma en números matemáticos llamados <b>Embeddings</b>. Gracias a la tecnología <b>Matryoshka (MRL)</b>, estos números funcionan como "muñecas rusas", pudiendo hacerse más grandes para diagnósticos ultra-precisos o más pequeños para ahorrar memoria sin perder su conocimiento clínico. Así, la IA sabe matemáticamente que la palabra "Aspirina" está geométricamente cerca de "Sangrado".
                </p>
              </div>

              <div style={{ borderLeft: '3px solid #e67e22', paddingLeft: '15px', marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#d35400' }}>Paso 3: Mecanismo de Atención y Razonamiento (Cadena de Pensamiento)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Los tokens viajan por las capas de la red neuronal. Usando "Atención Flash", el modelo conecta todos los síntomas con los medicamentos.<br/><br/><b>¿Qué significa Autocorregirse y de dónde saca las "Reglas Médicas"?</b><br/>Las reglas vienen de dos partes:<br/>1) El <b>System Prompt</b> (las órdenes estrictas de buscar PRMs que le programaste).<br/>2) <b>Sus Pesos Neuronales (La base):</b> Es todo el conocimiento brutal que Google le inyectó entrenándola con millones de libros de medicina, química y guías clínicas (por eso sabe qué es el Losartán o la Oxibutinina sin que nosotros se lo digamos).<br/><br/>Si la IA inicialmente planea una respuesta peligrosa, su cerebro choca con estas reglas, detecta el riesgo fatal, "borra" ese pensamiento interno y genera una recomendación 100% segura antes de contestar.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--success)', paddingLeft: '15px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#27ae60' }}>Paso 4: Generación de Salida (Output)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Basado en su razonamiento, calcula las probabilidades estadísticas de la mejor respuesta farmacéutica y la genera token por token, decodificando los números nuevamente a palabras legibles y estructuradas.
                </p>
              </div>

            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><FlaskConical size={24} /> 2. Casos Clínicos de Prueba (Stress Testing)</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <p style={{ margin: '0 0 15px 0', fontSize: '0.95rem', color: 'var(--text-dark)' }}>Copia y pega estos ejemplos en el chat para auditar la capacidad de Alicia detectando errores sutiles:</p>
              
              <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#c0392b' }}>Prueba 1: Interacción Mayor (Riesgo Vital)</h4>
                <code style={{ display: 'block', padding: '10px', backgroundColor: '#eaecee', borderRadius: '5px', fontSize: '0.9rem', marginTop: '5px' }}>
                  "Paciente masculino de 65 años, hipertenso. Acude a urgencias por dolor articular intenso. Toma Losartán 50mg/día. El médico de guardia le receta Ibuprofeno 600mg cada 8h por 7 días. ¿Qué opinas?"
                </code>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.85rem', color: '#7f8c8d' }}><b>Lo que Alicia debe detectar:</b> Interacción grave (AINE + ARA II). Riesgo de fallo renal agudo y anulación del efecto antihipertensivo (PRM de Seguridad).</p>
              </div>

              <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#c0392b' }}>Prueba 2: Cascada Prescriptiva (Error Iatrogénico)</h4>
                <code style={{ display: 'block', padding: '10px', backgroundColor: '#eaecee', borderRadius: '5px', fontSize: '0.9rem', marginTop: '5px' }}>
                  "Paciente femenina de 70 años con Alzheimer en etapa temprana (en tratamiento con Donepezilo). Empieza a tener incontinencia urinaria y el médico le receta Oxibutinina. ¿Está bien?"
                </code>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.85rem', color: '#7f8c8d' }}><b>Lo que Alicia debe detectar:</b> La Oxibutinina es un anticolinérgico que anula por completo el efecto del Donepezilo (colinérgico) y empeorará drásticamente la demencia. (PRM de Efectividad).</p>
              </div>

              <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#c0392b' }}>Prueba 3: Duplicidad Terapéutica Oculta</h4>
                <code style={{ display: 'block', padding: '10px', backgroundColor: '#eaecee', borderRadius: '5px', fontSize: '0.9rem', marginTop: '5px' }}>
                  "Paciente con gripa severa está tomando Agrifen (paracetamol/clorfenamina/cafeína) 1 tableta cada 8h, pero como le sigue doliendo la cabeza, decidió tomar Tylenol (Paracetamol 500mg) extra cada 6 horas."
                </code>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.85rem', color: '#7f8c8d' }}><b>Lo que Alicia debe detectar:</b> Sobredosis hepática inminente por sumar el paracetamol del medicamento compuesto con el medicamento puro. (PRM de Seguridad - Toxicidad).</p>
              </div>

            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><BarChart size={24} /> 3. Métricas de Evaluación</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50', borderBottom: '2px solid #ecf0f1', paddingBottom: '5px' }}>A. Métricas Computacionales (Rendimiento)</h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                  <div style={{ flex: '1 1 300px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                    <h5 style={{ margin: '0 0 5px 0', color: 'var(--text-dark)' }}>Time To First Token (TTFT)</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#7f8c8d' }}>Tiempo exacto desde que envías el mensaje hasta que la IA genera su primera sílaba de respuesta. Mide el "lag" inicial.</p>
                  </div>
                  <div style={{ flex: '1 1 300px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                    <h5 style={{ margin: '0 0 5px 0', color: 'var(--text-dark)' }}>Tokens por Segundo (t/s)</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#7f8c8d' }}>Velocidad de escritura. Lo ideal en hardware local es mantener &gt; 10 t/s. Por debajo de 5 t/s, la experiencia de usuario decae.</p>
                  </div>
                  <div style={{ flex: '1 1 300px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                    <h5 style={{ margin: '0 0 5px 0', color: 'var(--text-dark)' }}>Tiempo de Razonamiento</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#7f8c8d' }}>Segundos dedicados a la "Cadena de Pensamiento" oculta. Un tiempo mayor frente a casos complejos demuestra análisis profundo y no mera repetición probabilística.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50', borderBottom: '2px solid #ecf0f1', paddingBottom: '5px', marginTop: '10px' }}>B. Métricas Médicas (Calidad Clínica)</h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                  <div style={{ flex: '1 1 300px', backgroundColor: '#fdfefe', border: '1px solid #d5dbdb', padding: '15px', borderRadius: '8px' }}>
                    <h5 style={{ margin: '0 0 5px 0', color: 'var(--primary)' }}>Sensibilidad Clínica</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#7f8c8d' }}>Capacidad de la IA para detectar un PRM cuando realmente existe (Verdadero Positivo). Evita que un error letal pase desapercibido.</p>
                  </div>
                  <div style={{ flex: '1 1 300px', backgroundColor: '#fdfefe', border: '1px solid #d5dbdb', padding: '15px', borderRadius: '8px' }}>
                    <h5 style={{ margin: '0 0 5px 0', color: 'var(--primary)' }}>Especificidad Clínica</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#7f8c8d' }}>Capacidad de la IA para <b>no</b> inventar problemas donde no los hay (Verdadero Negativo). Minimiza la alerta por fatiga (alert fatigue).</p>
                  </div>
                  <div style={{ flex: '1 1 300px', backgroundColor: '#fdfefe', border: '1px solid #d5dbdb', padding: '15px', borderRadius: '8px' }}>
                    <h5 style={{ margin: '0 0 5px 0', color: 'var(--primary)' }}>Tasa de Alucinación Médica</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#7f8c8d' }}>Porcentaje de veces que la IA inventa nombres de medicamentos o dosis inexistentes. Debe ser <b>0.0%</b> estricto.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><GraduationCap size={24} /> 4. Evolución y Entrenamiento (Fine-Tuning Local)</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  <b>La pregunta del millón:</b> ¿Se puede adaptar el cerebro de Gemma 4 12B para que conozca nombres comerciales en México (ej. <i>Tempra</i> en vez de Paracetamol) o remedios herbales locales (ej. <i>Té de Ruda</i>)?<br/><br/>
                  <b>La respuesta es SÍ.</b> Y la arquitectura "Encoder-Free" de Gemma lo hace mucho más fácil, ya que el audio, visión y texto comparten los mismos pesos, por lo que una sola actualización impacta todo el sistema. A este proceso se le llama <b>Fine-Tuning mediante QLoRA</b> (Quantized Low-Rank Adaptation).
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                <div style={{ paddingLeft: '15px', borderLeft: '3px solid #3498db' }}>
                  <h4 style={{ margin: '0 0 5px 0', color: '#2980b9' }}>Paso 1: Construir el Dataset (Mexicanización)</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-dark)' }}>Crear un archivo JSONL con miles de interacciones locales. Ej: <code>&#123;"prompt": "Aspirina y Té", "response": "[PRM]"&#125;</code></p>
                </div>

                <div style={{ paddingLeft: '15px', borderLeft: '3px solid #9b59b6' }}>
                  <h4 style={{ margin: '0 0 5px 0', color: '#8e44ad' }}>Paso 2: Entrenamiento Eficiente (Unsloth o Hugging Face)</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-dark)' }}><b>¡Ojo! Esto NO se hace dentro de LM Studio.</b> Se hace usando código en Python (con librerías como Unsloth o en plataformas como Google Colab). Ahí se carga el JSONL y se usa la técnica QLoRA para crear e inyectarle un "chip extra" súper ligero a las capas de atención del modelo, enseñándole la farmacopea local sin tener que entrenar los 12 Billones de parámetros desde cero.</p>
                </div>

                <div style={{ paddingLeft: '15px', borderLeft: '3px solid #27ae60' }}>
                  <h4 style={{ margin: '0 0 5px 0', color: '#2ecc71' }}>Paso 3: Fusión y Exportación (Merge a GGUF)</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-dark)' }}>El conocimiento del "chip extra" (LoRA) se funde con los pesos originales de Gemma 4. El resultado se exporta a un archivo cuantizado (GGUF) que se carga en <b>LM Studio</b>, naciendo así una "Alicia Mexicana" 100% autóctona y desconectada de internet.</p>
                </div>
                </div>

              {/* Glosario Rápido */}
              <div style={{ marginTop: '25px', backgroundColor: '#fdfefe', padding: '15px', borderRadius: '8px', border: '1px dashed #bdc3c7' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#7f8c8d', fontSize: '0.9rem', textTransform: 'uppercase' }}>Glosario Técnico</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-dark)' }}>
                  <li style={{ marginBottom: '8px' }}>
                    <b>Unsloth:</b> Es una librería de código (software libre) que optimiza las matemáticas de las tarjetas gráficas. Hace que el proceso de entrenamiento (Fine-Tuning) sea hasta 5 veces más rápido y consuma mucha menos memoria RAM, permitiendo entrenar inteligencias artificiales en computadoras caseras en lugar de mega-servidores.
                  </li>
                  <li>
                    <b>.GGUF (GPT-Generated Unified Format):</b> Es un formato de archivo comprimido y ultra-optimizado. Guarda todo el "cerebro" de la IA (vocabulario, pesos neuronales, configuración) en un solo archivo portátil que puedes compartir por USB y correr en LM Studio usando procesadores comunes, sin depender de tarjetas gráficas carísimas.
                  </li>
                </ul>
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
