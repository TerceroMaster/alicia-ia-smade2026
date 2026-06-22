import { useState, useRef, useEffect } from 'react';
import { Send, Image as ImageIcon, Mic, Pill, ChevronDown, ChevronRight, Camera, Info, X, Settings, BookOpen, Server, Activity, Award, Download, Volume2, Rocket } from 'lucide-react';
import Docs from './Docs';
import SettingsDashboard from './SettingsDashboard';
import IsoSecurityDocs from './IsoSecurityDocs';
import Manual from './Manual';
import LMStudioDocs from './LMStudioDocs';
import ClinicalTestingDocs from './ClinicalTestingDocs';
import ScientificArticleDocs from './ScientificArticleDocs';
import FutureWorkDocs from './FutureWorkDocs';
import { SYSTEM_PROMPTS } from './systemPrompts';
import './App.css';

const SYSTEM_PROMPT = `<|think|>Eres la Farmacéutica Especialista Alicia, experta en Atención Farmacéutica y Seguimiento Farmacoterapéutico.
Tu objetivo principal es identificar Problemas Relacionados con Medicamentos (PRM) y prevenir Resultados Negativos asociados a la Medicación (RNM).

Definiciones que debes aplicar estrictamente:
- PRM (La causa): Fallos en el proceso de uso de fármacos (Ej: Medicamento no necesario, Dosis inadecuada, Interacciones, Errores de uso).
- RNM (La consecuencia): Impacto clínico real y perjudicial en el paciente (Necesidad, Efectividad, Seguridad).

Instrucciones:
1. Analiza cuidadosamente la consulta, receta o caso clínico proporcionado.
2. Identifica si existe algún PRM y clasifícalo.
3. Evalúa el riesgo de un RNM y explícalo.
4. Ofrece una recomendación farmacéutica profesional.
5. REGLA CRÍTICA: Tus respuestas deben ser MUY concisas y directas. No des explicaciones largas. Máximo 150 palabras.`;

function ThoughtBlock({ thought }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!thought) return null;

  return (
    <div className="thought-process">
      <div className="thought-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        <span>Proceso de razonamiento clínico...</span>
      </div>
      {isOpen && <div className="thought-content">{thought}</div>}
    </div>
  );
}

function App({ profile, onBack, initialPage = 'chat' }) {
  const systemPrompt = SYSTEM_PROMPTS[profile?.id] || SYSTEM_PROMPTS['adulto'];
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [selectedLogo, setSelectedLogo] = useState(null);

  const [settings, setSettings] = useState({
    serverUrl: 'http://localhost:1234',
    model: 'google/gemma-4-12b-qat',
    temperature: 0.6,
    maxTokens: 4096
  });

  const [metrics, setMetrics] = useState({
    lastInferenceTime: null,
    avgResponseTime: null,
    totalRequests: 0,
    cumulativeTime: 0
  });

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const parseMessage = (text) => {
    let thought = "";
    let content = text;

    // Parse LM Studio/Gemma 4 12B thinking tags
    if (text.includes("<|channel>thought\n")) {
      const parts = text.split("<|channel>thought\n");
      if (parts.length > 1) {
        const subParts = parts[1].split("<channel|>");
        if (subParts.length > 1) {
          thought = subParts[0].trim();
          content = subParts[1].trim();
        } else {
          thought = subParts[0].trim();
          content = ""; // Still generating thought
        }
      }
    }

    return { thought, content };
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });

    // Reset input
    e.target.value = null;
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const startCamera = async () => {
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accediendo a la cámara: ", err);
      alert("No se pudo acceder a la cámara. Revisa los permisos de tu navegador.");
      setShowCamera(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setShowCamera(false);
  };

  const takeSnapshot = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg');
      setImages(prev => [...prev, dataUrl]);
      stopCamera();
    }
  };

  useEffect(() => {
    // Inicializar SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'es-ES';

      recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            currentTranscript += event.results[i][0].transcript + ' ';
          }
        }
        if (currentTranscript) {
          setInput(prev => prev + currentTranscript);
        }
      };

      recognition.onerror = (event) => {
        console.error("Error de reconocimiento de voz:", event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("Tu navegador no soporta reconocimiento de voz. Intenta usar Chrome o Edge.");
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && images.length === 0) || isLoading) return;

    // Detener grabación si está activa
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }

    // Build the user message content
    const userContent = [];
    if (input.trim()) {
      userContent.push({ type: "text", text: input.trim() });
    }
    images.forEach(img => {
      userContent.push({
        type: "image_url",
        image_url: { url: img }
      });
    });

    const newUserMessage = {
      role: 'user',
      content: userContent,
      displayContent: input.trim(),
      images: [...images]
    };

    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setInput('');
    setImages([]);
    setIsLoading(true);

    try {
      // Formatear mensajes para la API de OpenAI
      const apiMessages = [
        { role: 'system', content: systemPrompt },
        ...newMessages.map(m => ({ role: m.role, content: m.content || m.displayContent }))
      ];

      const startTime = performance.now();

      const baseUrl = settings.serverUrl.replace(/\/$/, '');

      const response = await fetch(`${baseUrl}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: settings.model, // Exact match with API Model Identifier
          messages: apiMessages,
          temperature: settings.temperature,
          max_tokens: settings.maxTokens,
          stream: false // Para un MVP rápido, deshabilitamos stream. 
        }),
      });

      if (!response.ok) {
        throw new Error('Error al conectar con LM Studio');
      }

      const data = await response.json();

      const endTime = performance.now();
      const timeTaken = endTime - startTime;

      setMetrics(prev => {
        const newTotal = prev.totalRequests + 1;
        const newCumulative = prev.cumulativeTime + timeTaken;
        return {
          lastInferenceTime: timeTaken,
          cumulativeTime: newCumulative,
          totalRequests: newTotal,
          avgResponseTime: newCumulative / newTotal
        };
      });

      const rawText = data.choices[0].message.content;

      const parsed = parseMessage(rawText);

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: parsed.content,
        displayContent: parsed.content,
        thought: parsed.thought
      }]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        displayContent: 'Lo siento, no pude conectar con el motor local (LM Studio). Asegúrate de que el servidor esté iniciado en el puerto 1234 y el modelo Gemma 4 12B esté cargado.',
        content: 'Lo siento, no pude conectar con el motor local.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const exportHistory = () => {
    if (messages.length === 0) {
      alert("No hay mensajes para exportar.");
      return;
    }

    let htmlContent = `
      <html>
      <head>
        <title>Registro Clínico - Farmacéutica Alicia IA</title>
        <style>
          body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #333; line-height: 1.6; max-width: 800px; margin: 0 auto; }
          .header { text-align: center; border-bottom: 2px solid #2980b9; padding-bottom: 20px; margin-bottom: 30px; }
          .header h1 { color: #2c3e50; margin: 0; font-size: 24px; }
          .header p { color: #7f8c8d; margin: 5px 0 0 0; font-size: 14px; }
          .message { margin-bottom: 25px; padding: 15px; border-radius: 8px; page-break-inside: avoid; }
          .user { background-color: #f8f9fa; border-left: 4px solid #95a5a6; }
          .assistant { background-color: #f0f8ff; border-left: 4px solid #2980b9; }
          .role { font-weight: bold; margin-bottom: 5px; font-size: 14px; color: #2c3e50; text-transform: uppercase; }
          .content { white-space: pre-wrap; font-size: 14px; }
          .thought { background-color: #fff3cd; padding: 10px; margin-bottom: 10px; border-radius: 4px; border-left: 4px solid #ffc107; font-size: 13px; color: #856404; }
          .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #95a5a6; border-top: 1px solid #eee; padding-top: 20px; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Farmacéutica Alicia IA</h1>
          <p>Reporte Oficial de Seguimiento Farmacoterapéutico</p>
          <p><strong>Fecha de Emisión:</strong> ${new Date().toLocaleString('es-MX')}</p>
        </div>
    `;

    messages.filter(m => m.role !== 'system').forEach(m => {
      const roleName = m.role === 'user' ? 'Profesional de la Salud (Usuario)' : 'Farmacéutica Alicia IA (Gemma 4 12B)';
      htmlContent += `<div class="message ${m.role}">`;
      htmlContent += `<div class="role">${roleName}</div>`;

      if (m.thought) {
        htmlContent += `<div class="thought"><strong>Razonamiento Clínico Oculto:</strong><br/>${m.thought.replace(/\n/g, '<br/>')}</div>`;
      }

      let textContent = m.displayContent || (typeof m.content === 'string' ? m.content : 'Contenido Multimedia Adjunto');
      textContent = textContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      textContent = textContent.replace(/\n/g, '<br/>');

      htmlContent += `<div class="content">${textContent}</div>`;
      htmlContent += `</div>`;
    });

    htmlContent += `
        <div class="footer">
          Generado automáticamente por el motor local inteligente de Farmacéutica Alicia IA.<br/>
          Confidencialidad: Este documento es de uso exclusivo clínico.
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(htmlContent);
    printWindow.document.close();

    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 250);
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-MX';
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Tu navegador no soporta lectura por voz.");
    }
  };

  return (
    <div className="app-container">



      {/* Visor de Logos (Lightbox) */}
      {selectedLogo && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedLogo(null)}>
          <button style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '10px' }} onClick={() => setSelectedLogo(null)}>
            <X size={32} />
          </button>
          <img src={selectedLogo} alt="Logo Ampliado" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', backgroundColor: 'white', padding: '20px', borderRadius: '15px' }} onClick={e => e.stopPropagation()} />
        </div>
      )}

      {showCamera && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h3 style={{ margin: 0, color: 'var(--text-dark)' }}>Tomar Foto de Receta</h3>
            <video ref={videoRef} autoPlay playsInline style={{ maxWidth: '100%', maxHeight: '60vh', borderRadius: '8px', border: '1px solid #ccc' }}></video>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#e2e8f0', cursor: 'pointer', fontWeight: 'bold' }} onClick={stopCamera}>Cancelar</button>
              <button style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--primary)', color: 'white', cursor: 'pointer', fontWeight: 'bold' }} onClick={takeSnapshot}>📸 Capturar</button>
            </div>
          </div>
        </div>
      )}

      {/* Determina a dónde va "Volver": al selector si se abrió desde ahí, al chat si es desde dentro */}
      {(() => {
        const fromSelector = initialPage !== 'chat';
        const backAction = fromSelector ? onBack : () => setCurrentPage('chat');

        if (currentPage === 'docs') return <Docs onBack={backAction} />;
        if (currentPage === 'manual') return <Manual onBack={backAction} />;
        if (currentPage === 'lmstudioDocs') return <LMStudioDocs onBack={backAction} />;
        if (currentPage === 'clinicalTesting') return <ClinicalTestingDocs onBack={backAction} />;
        if (currentPage === 'scientific') return <ScientificArticleDocs onBack={backAction} />;
        if (currentPage === 'future') return <FutureWorkDocs onBack={backAction} />;
        if (currentPage === 'isoSecurity') return <IsoSecurityDocs onBack={backAction} />;
        if (currentPage === 'settings') return <SettingsDashboard settings={settings} setSettings={setSettings} metrics={metrics} onBack={backAction} />;
        return null;
      })()}
      {currentPage === 'docs' || currentPage === 'manual' || currentPage === 'lmstudioDocs' || currentPage === 'clinicalTesting' || currentPage === 'scientific' || currentPage === 'future' || currentPage === 'isoSecurity' || currentPage === 'settings' ? null : (
        <div style={{ display: 'flex', width: '100%', maxWidth: '1800px', margin: '0 auto', gap: '40px', alignItems: 'center', justifyContent: 'center' }}>

          <div className="chat-card glass-panel" style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '90vh' }}>

            {/* Header con color del perfil */}
            <div className="chat-header" style={{ background: profile?.gradient || 'var(--gradient-primary)', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                  {profile?.emoji || '💊'}
                </div>
                <div className="chat-header-info">
                  <h1 style={{ margin: 0, color: 'white' }}>Farmacéutica Alicia IA</h1>
                  <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9, lineHeight: '1.4', color: 'white' }}>
                    <span className="status-dot"></span>
                    Gemma 4 12B · Modo: <b>{profile?.title}</b> &nbsp;|&nbsp; {profile?.age}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button
                  onClick={onBack}
                  style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 'bold', color: 'white' }}
                  title="Cambiar perfil de paciente"
                >
                  ← Perfil
                </button>
                <button
                  onClick={exportHistory}
                  style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}
                  title="Exportar Registro Clínico para Revisión"
                >
                  <Download size={18} />
                  Exportar
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.length === 0 && (
                <div className="message-wrapper assistant">
                  <div className="message assistant">
                    {profile?.id === 'neonato' && 'Hola. Soy Alicia, especialista en Farmacia Neonatal. Estoy lista para ayudarte a revisar dosificaciones mg/kg, identificar fármacos contraindicados en bebés (0-12 meses) y evaluar riesgos de PRM. Puedes describirme el caso o subir una foto de la receta.'}
                    {profile?.id === 'pediatrico' && 'Hola. Soy Alicia, especialista en Farmacia Pediátrica (1-12 años). Puedo ayudarte a calcular dosis por peso (mg/kg), identificar PRM y RNM en niños, y verificar la forma farmacéutica más adecuada. Indícame el peso del niño si es posible.'}
                    {profile?.id === 'adolescente' && 'Hola. Soy Alicia, especialista en Farmacoterapia Adolescente (13-17 años). Estoy atenta a interacciones con anticonceptivos, riesgo en el SNC en desarrollo, y señales de alarma en salud mental. ¿En qué caso clínico puedo ayudarte?'}
                    {(profile?.id === 'adulto' || !profile) && 'Hola. Soy Alicia, tu Farmacéutica Especialista local potenciada por Gemma 4 12B. Estoy aquí para ayudarte a analizar tratamientos, identificar Problemas Relacionados con Medicamentos (PRM) y prevenir Resultados Negativos (RNM). Puedes escribirme tus dudas o subir fotos de recetas médicas.'}
                    {profile?.id === 'adulto_mayor' && 'Hola. Soy Alicia, especialista en Farmacoterapia Geriátrica. Aplicaré los Criterios de Beers 2023 y STOPP/START para evaluar si algún medicamento es inapropiado para adultos mayores, y ajustaré las recomendaciones al nivel de función renal del paciente. ¿Cuál es el caso?'}
                    {profile?.id === 'embarazada' && 'Hola. Soy Alicia, especialista en Farmacoterapia Obstétrica. Evaluaré cada medicamento según las Categorías de Riesgo FDA y el trimestre de gestación para proteger al binomio madre-feto. Por favor indica el trimestre y los medicamentos prescritos.'}
                    {profile?.id === 'lactancia' && 'Hola. Soy Alicia, especialista en Farmacoterapia durante Lactancia Materna. Consultaré la base LactMed del NIH y calcularé la Dosis Relativa Infantil (DRI) para determinar la compatibilidad de cada fármaco con la lactancia. ¿Cuál es el caso clínico?'}
                  </div>
                </div>
              )}

              {messages.map((msg, idx) => (
                <div key={idx} className={`message-wrapper ${msg.role}`}>
                  <div className={`message ${msg.role}`}>
                    {msg.role === 'assistant' && <ThoughtBlock thought={msg.thought} />}

                    {msg.images && msg.images.length > 0 && (
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                        {msg.images.map((img, i) => (
                          <img key={i} src={img} alt="Upload" style={{ height: '80px', borderRadius: '8px' }} />
                        ))}
                      </div>
                    )}

                    <div className="message-content">{msg.displayContent}</div>
                    {msg.role === 'assistant' && (
                      <button
                        onClick={() => speakText(msg.displayContent)}
                        style={{ background: 'rgba(52, 152, 219, 0.1)', border: '1px solid rgba(52, 152, 219, 0.3)', color: 'var(--primary-dark)', cursor: 'pointer', marginTop: '10px', padding: '5px 10px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', fontWeight: 'bold' }}
                        title="Escuchar respuesta"
                      >
                        <Volume2 size={16} /> Escuchar
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="message-wrapper assistant">
                  <div className="typing-indicator">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
              {images.length > 0 && (
                <div className="image-preview">
                  {images.map((img, idx) => (
                    <div key={idx} className="image-thumb">
                      <img src={img} alt="preview" />
                      <button className="remove-image" onClick={() => removeImage(idx)}>×</button>
                    </div>
                  ))}
                </div>
              )}

              <div className="input-container">
                <div className="input-actions">
                  <button
                    className="btn-icon"
                    title="Tomar Foto"
                    onClick={startCamera}
                  >
                    <Camera size={20} />
                  </button>
                  <button
                    className="btn-icon"
                    title="Adjuntar Receta (Archivo)"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <ImageIcon size={20} />
                  </button>
                  <button
                    className="btn-icon"
                    title={isRecording ? "Detener Grabación" : "Grabar Audio"}
                    onClick={toggleRecording}
                    style={{ color: isRecording ? 'var(--danger)' : 'var(--primary)' }}
                  >
                    <Mic size={20} />
                  </button>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />
                </div>

                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Describe el caso clínico, síntomas o medicamentos..."
                  rows={input.split('\n').length > 1 ? Math.min(input.split('\n').length, 4) : 1}
                />

                <button
                  className="btn-send"
                  onClick={handleSend}
                  disabled={isLoading || (!input.trim() && images.length === 0)}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
          {/* Avatar Alicia */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '90vh' }}>
            <img
              src="/avatar-alicia%20.png"
              alt="Farmacéutica Alicia IA"
              style={{
                width: 'clamp(300px, 35vw, 700px)', /* Se ajusta dinámicamente según la pantalla */
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.2))',
                animation: 'float 6s ease-in-out infinite'
              }}
            />
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
