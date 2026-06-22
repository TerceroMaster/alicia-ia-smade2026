import React, { useState } from 'react';
import { ArrowLeft, Play, Download, Search, CheckCircle, MonitorPlay, Package, Terminal, Globe, Cpu, FolderOpen, AlertTriangle, Rocket } from 'lucide-react';
import './App.css';

const StepCard = ({ num, icon: Icon, title, children, color = 'var(--primary)', success = false }) => (
  <div className="settings-card" style={{ padding: '22px', borderLeft: success ? '4px solid var(--success)' : `4px solid ${color}` }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '12px' }}>
      <div style={{ backgroundColor: success ? 'var(--success)' : color, color: 'white', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
        {num}
      </div>
      <h3 style={{ margin: 0, color: success ? 'var(--success)' : 'var(--primary-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        {Icon && <Icon size={20} />} {title}
      </h3>
    </div>
    <div style={{ marginLeft: '49px', color: 'var(--text-dark)', lineHeight: '1.7', fontSize: '0.95rem' }}>
      {children}
    </div>
  </div>
);

const CodeBlock = ({ children }) => (
  <pre style={{ backgroundColor: '#1e293b', color: '#7dd3fc', padding: '12px 16px', borderRadius: '8px', fontSize: '0.88rem', margin: '10px 0', overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
    {children}
  </pre>
);

const SectionTitle = ({ icon: Icon, children, color = 'var(--primary)' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '35px 0 18px 0', paddingBottom: '10px', borderBottom: `2px solid ${color}` }}>
    {Icon && <Icon size={26} color={color} />}
    <h2 style={{ margin: 0, color }}>{children}</h2>
  </div>
);

export default function Manual({ onBack }) {
  const [activeTab, setActiveTab] = useState('install');

  const tabStyle = (tab) => ({
    padding: '10px 22px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    transition: 'all 0.2s',
    background: activeTab === tab ? 'var(--primary)' : 'rgba(0,0,0,0.07)',
    color: activeTab === tab ? 'white' : 'var(--text-dark)',
  });

  return (
    <div className="app-container" style={{ overflowY: 'auto' }}>
      <div className="chat-card glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '30px', boxSizing: 'border-box' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '20px', flexShrink: 0 }}>
          <button
            onClick={onBack}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1rem', marginRight: '20px' }}
          >
            <ArrowLeft size={24} /> Volver al Chat
          </button>
          <div>
            <h1 style={{ margin: 0, color: 'var(--text-dark)' }}>Manual de Usuario</h1>
            <p style={{ margin: 0, opacity: 0.7 }}>Instalación completa + Guía de uso diario</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexShrink: 0 }}>
          <button style={tabStyle('install')} onClick={() => setActiveTab('install')}>
            🚀 Instalación desde Cero
          </button>
          <button style={tabStyle('lmstudio')} onClick={() => setActiveTab('lmstudio')}>
            ⚙️ Arrancar LM Studio
          </button>
        </div>

        {/* Contenido */}
        <div style={{ overflowY: 'auto', paddingRight: '15px' }} className="custom-scrollbar">

          {/* ===== TAB: INSTALACIÓN ===== */}
          {activeTab === 'install' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              <div style={{ backgroundColor: 'rgba(52,152,219,0.1)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(52,152,219,0.3)' }}>
                <h3 style={{ margin: '0 0 6px 0', color: 'var(--primary)' }}>📋 Requisitos Previos</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Antes de comenzar, asegúrate de tener: <b>Windows 10/11</b> (o macOS/Linux), <b>mínimo 16 GB de RAM</b>, <b>6+ GB de VRAM</b> (GPU NVIDIA recomendada) y conexión a internet para la descarga inicial.
                </p>
              </div>

              <SectionTitle icon={Package} color="#8e44ad">PARTE 1 — Instalar las herramientas base</SectionTitle>

              <StepCard num="1" icon={Globe} title="Instalar Node.js (motor de JavaScript)">
                <p>Node.js es el entorno que permite ejecutar la interfaz web del sistema. Sin él, la aplicación no arrancará.</p>
                <p><b>Pasos:</b></p>
                <ol style={{ paddingLeft: '20px' }}>
                  <li>Ve a <code>https://nodejs.org</code> y descarga la versión <b>LTS</b> (la recomendada).</li>
                  <li>Ejecuta el instalador <code>.msi</code> y acepta todas las opciones por defecto.</li>
                  <li>Cuando termine, abre una terminal (<b>PowerShell</b> o <b>CMD</b>) y verifica la instalación:</li>
                </ol>
                <CodeBlock>node --version{'\n'}npm --version</CodeBlock>
                <p>✅ Si ves números de versión (ej. <code>v22.0.0</code>), la instalación fue exitosa.</p>
              </StepCard>

              <StepCard num="2" icon={Download} title="Descargar e instalar LM Studio">
                <p>LM Studio es el programa que actúa como servidor local de IA. Es gratuito y no requiere internet para funcionar una vez configurado.</p>
                <ol style={{ paddingLeft: '20px' }}>
                  <li>Ve a <code>https://lmstudio.ai</code> y descarga el instalador para tu sistema operativo.</li>
                  <li>Instálalo con las opciones por defecto.</li>
                  <li>Ábrelo al terminar — verás la pantalla principal con un buscador de modelos.</li>
                </ol>
              </StepCard>

              <StepCard num="3" icon={Search} title="Descargar el modelo Gemma 4 12B QAT">
                <p>Dentro de LM Studio, busca y descarga el modelo de IA:</p>
                <ol style={{ paddingLeft: '20px' }}>
                  <li>En el panel izquierdo, haz clic en la lupa 🔍 (<b>Discover</b>).</li>
                  <li>En la barra de búsqueda escribe: <code>gemma-4-12b</code></li>
                  <li>Busca el modelo publicado por <b>Google</b> llamado <b>Gemma 4 12B QAT</b>.</li>
                  <li>Selecciónalo y haz clic en <b>Download</b>. La descarga pesa aprox. <b>7-8 GB</b> — ten paciencia.</li>
                </ol>
                <div style={{ backgroundColor: 'rgba(243,156,18,0.1)', padding: '10px 14px', borderRadius: '8px', marginTop: '10px' }}>
                  ⚠️ <b>Importante:</b> Esta descarga solo se hace UNA vez. El modelo queda guardado en tu computadora permanentemente.
                </div>
              </StepCard>

              <SectionTitle icon={FolderOpen} color="#27ae60">PARTE 2 — Instalar la Aplicación (Farmacéutica Alicia IA)</SectionTitle>

              <StepCard num="4" icon={FolderOpen} title="Copiar el proyecto a la nueva computadora">
                <p>Copia la carpeta completa del proyecto a cualquier ubicación de la nueva computadora. Por ejemplo:</p>
                <CodeBlock>C:\Proyectos IA Antigravity\gemma_4_12b_agente_ia_farmaceutica</CodeBlock>
                <p>Puedes transferirla vía USB, disco duro externo, o red local. <b>No es necesaria ninguna cuenta ni licencia</b>.</p>
              </StepCard>

              <StepCard num="5" icon={Terminal} title="Instalar las dependencias de la aplicación">
                <p>Abre una terminal <b>PowerShell</b> o <b>CMD</b>, navega a la carpeta del proyecto e instala las dependencias:</p>
                <CodeBlock>cd "C:\Proyectos IA Antigravity\gemma_4_12b_agente_ia_farmaceutica"{'\n'}npm install</CodeBlock>
                <p>Este comando descarga todas las librerías necesarias (React, Vite, Lucide, etc.). Solo tarda unos segundos y solo se hace <b>una vez por computadora</b>.</p>
                <p>✅ Cuando termine verás un mensaje como: <code>added 150 packages in 8s</code></p>
              </StepCard>

              <StepCard num="6" icon={Rocket} title="¡Arrancar la aplicación!" success>
                <p>Con todo instalado, para iniciar la aplicación ejecuta:</p>
                <CodeBlock>npm run dev</CodeBlock>
                <p>La terminal mostrará algo como:</p>
                <CodeBlock>  VITE v6.x.x  ready in 300 ms{'\n'}{'\n'}  ➜  Local:   http://localhost:5173{'\n'}  ➜  Network: http://192.168.x.x:5173</CodeBlock>
                <p>🌐 Abre tu navegador (<b>Microsoft Edge</b> recomendado para voz local) y ve a: <b>http://localhost:5173</b></p>
                <div style={{ backgroundColor: 'rgba(46,204,113,0.1)', padding: '10px 14px', borderRadius: '8px', marginTop: '10px' }}>
                  🎉 <b>¡Listo!</b> Verás la pantalla de selección de perfil de Farmacéutica Alicia IA funcionando.
                </div>
              </StepCard>

              <div style={{ backgroundColor: 'rgba(231,76,60,0.08)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(231,76,60,0.25)', marginTop: '8px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#c0392b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertTriangle size={20} /> Recuerda: Siempre arranca LM Studio PRIMERO
                </h3>
                <p style={{ margin: 0, fontSize: '0.93rem', lineHeight: '1.6' }}>
                  Cada vez que quieras usar la aplicación debes: <b>1)</b> Abrir LM Studio y cargar el modelo Gemma 4 12B → <b>2)</b> Ejecutar <code>npm run dev</code> → <b>3)</b> Abrir el navegador. El orden importa.
                </p>
              </div>

            </div>
          )}

          {/* ===== TAB: LM STUDIO ===== */}
          {activeTab === 'lmstudio' && (
            <div>
              <div style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(231, 76, 60, 0.3)', marginBottom: '24px' }}>
                <h3 style={{ margin: '0 0 5px 0', color: 'var(--danger)' }}>¿Por qué necesito hacer esto cada vez?</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  Para que Alicia pueda responderte, necesita que el "motor" esté encendido. Este motor es <b>LM Studio</b> y el "combustible" es el modelo <b>Gemma 4 12B QAT</b>. Si no lo cargas, la IA no sabrá cómo pensar.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <StepCard num="1" icon={MonitorPlay} title='Abre la pestaña "Developer"'>
                  Abre el programa <b>LM Studio</b>. En el menú lateral izquierdo, haz clic en el ícono del "marciano" (<b>Developer</b>). Asegúrate de que el estado en la parte superior diga <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>Status: Running</span>.
                </StepCard>

                <StepCard num="2" icon={Download} title="Cargar el Modelo">
                  En la parte superior, busca el botón azul <b>"+ Load Model"</b> y haz clic. Alternativamente presiona <code>Ctrl + L</code>.
                </StepCard>

                <StepCard num="3" icon={Search} title="Seleccionar Gemma 4 12B">
                  Se abrirá una ventana emergente. En la lista de "Your Models", busca y haz clic en <b>Gemma 4 12B QAT</b>.
                </StepCard>

                <StepCard num="4" icon={Play} title="Confirmar Carga">
                  Deja las opciones avanzadas como están y presiona el botón azul <b>"Cargar Modelo (Ctrl + Enter)"</b> en la esquina inferior derecha.
                </StepCard>

                <StepCard num="5" icon={CheckCircle} title="¡Listo!" success>
                  Espera a que la barra de carga llegue al 100%. Cuando veas una etiqueta verde <b>READY</b> junto al modelo, la IA ya está escuchando. ¡Puedes volver a la app y empezar a chatear!
                </StepCard>

                <div style={{ backgroundColor: 'rgba(243, 156, 18, 0.1)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(243, 156, 18, 0.3)', marginTop: '8px' }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#d35400' }}>⚠️ Solución de Error Común (CORS)</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', lineHeight: '1.6' }}>
                    Si al chatear ves un error <code>[ERROR] 'messages' field is required</code>:<br/><br/>
                    <b>1.</b> En LM Studio, haz clic en <b>⚙️ Server Settings</b>.<br/>
                    <b>2.</b> Activa la opción <b>Enable CORS</b> (ON).<br/>
                    <b>3.</b> Reinicia el servidor apagando y encendiendo el botón "Status".
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}


