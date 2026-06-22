import React from 'react';
import { ArrowLeft, Server, Cpu, Database, Settings, Zap, Download } from 'lucide-react';
import './App.css';

export default function LMStudioDocs({ onBack }) {
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
            <h1 style={{ margin: 0, color: 'var(--text-dark)' }}>Guía Técnica de LM Studio</h1>
            <p style={{ margin: 0, opacity: 0.7 }}>Aprende a configurar el servidor local como un experto</p>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ overflowY: 'auto', paddingRight: '15px' }} className="custom-scrollbar">
          
          <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(52, 152, 219, 0.3)', marginBottom: '30px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
              <b>LM Studio</b> tiene decenas de perillas ocultas que pueden hacer que Alicia responda al instante o recuerde conversaciones larguísimas. Aquí te explicamos las opciones más críticas del menú de la derecha.
            </p>
          </div>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Download size={24} /> Guía de Descargas: ¿Cuál modelo elegir?</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Paso 1: ¿A quién descargarle? (Autores de Confianza)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Al buscar un modelo (ej. <i>Llama 3 8B</i>), verás muchísimos resultados. Siempre prioriza descargar los archivos subidos por <b>lmstudio-community</b>, <b>bartowski</b> o <b>QuantFactory</b>. Ellos son los expertos mundiales reconocidos en "comprimir" los modelos originales para que corran en laptops comunes sin virus ni errores de cálculo.
                </p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Paso 2: ¿Qué archivo específico bajo? (Los niveles Q)</h4>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  A la derecha verás una lista de archivos <code>.GGUF</code> con etiquetas como Q4, Q8, etc. A esto se le llama <b>Cuantización (Compresión matemática)</b>:
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><b>Q4_K_M (Recomendado):</b> Es el <i>Estándar de Oro</i>. Ofrece el equilibrio perfecto. La IA no pierde casi nada de inteligencia clínica, corre rápido y consume poca RAM (aprox 5 a 6 GB). Es la que está resaltada en la captura.</li>
                  <li><b>Q8_0 (Alta precisión):</b> Es la versión más fiel al cerebro original en los super-servidores, pero es muy pesada. Úsala solo si tienes una computadora extremadamente potente (con 16GB+ de memoria RAM/VRAM dedicada).</li>
                  <li><b>Q2_K o Q3_K (Ultra ligeros):</b> Son versiones que le "borran" mucha memoria a la IA para que quepa en computadoras muy viejas. Corre rapidísimo, pero <b>la IA se vuelve torpe y "alucina" inventando datos médicos</b>. Evítalos para temas de salud.</li>
                </ul>
              </div>

            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Database size={24} /> Context and Offload (Contexto y Descarga)</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Longitud del Contexto (Context Length: 4096)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Es la <b>"memoria a corto plazo"</b> de la IA. 4096 tokens equivalen a unas 3,000 palabras de conversación continua. Si subes este valor (ej. a 8192 o más), Alicia podrá recordar detalles que le dijiste horas atrás en el chat, pero consumirá exponencialmente más memoria (RAM/VRAM). Si lo bajas, responderá más rápido pero será olvidadiza.
                </p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Descarga a GPU (GPU Offload: 28)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Gemma 4 12B tiene múltiples "capas" cerebrales. Este número le dice al sistema <b>cuántas capas se procesarán en tu Tarjeta Gráfica</b> (súper rápida) vs en tu CPU (más lento). Si tienes una GPU con mucha memoria VRAM (ej. 12GB+), arrastra la barra al máximo (Max). El modelo literalmente volará. Si tienes poca VRAM, usa números bajos o la computadora colapsará.
                </p>
              </div>

            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}><Settings size={24} /> Advanced (Ajustes Avanzados)</h2>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>CPU Thread Pool Size (Hilos de CPU)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Determina cuántos "trabajadores" de tu procesador principal (CPU) se usarán para pensar. <b>Regla de oro:</b> Nunca lo pongas al máximo o tu PC entera se congelará. Déjalo exactamente en el número de núcleos físicos de tu procesador (ej. 6 u 8).
                </p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Tamaño del Lote de Evaluación (Prompt Eval Batch Size)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Indica cuántas palabras procesa "de golpe" cuando tú le envías un mensaje inicial súper largo (como un expediente médico completo). Valores altos (ej. 2048 o 4096) hacen que lea el texto inmenso en fracciones de segundo, pero exigen picos altísimos de VRAM.
                </p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Offload KV Cache to GPU Memory</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  La caché KV es el archivo de "anotaciones mentales rápidas" de la IA. Si enciendes este botón, guardará esas anotaciones en la memoria ultrarrápida de la Tarjeta Gráfica. <b>Actívalo siempre</b> para ganar fluidez al chatear, a menos que tu tarjeta gráfica ya esté al límite de su capacidad.
                </p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Mantener el Modelo en Memoria (Keep Model in Memory)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Si lo enciendes (ON), el modelo (que pesa más de 7 Gigabytes) se quedará suspendido en la RAM de tu PC aunque dejes de chatear. La ventaja es que la próxima vez que le hables, <b>despertará al instante</b> sin tener que volver a cargar todo desde el disco duro.
                </p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--primary-dark)' }}>Atención Flash (Flash Attention)</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Es un algoritmo matemático casi mágico de nueva generación. Permite que la IA lea textos larguísimos usando muchísima menos memoria y siendo mucho más rápida. <b>Debe estar siempre encendido (ON)</b> para hardware moderno.
                </p>
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
