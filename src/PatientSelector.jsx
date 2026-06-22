import { useState } from 'react';
import { Settings, Info, BookOpen, Server, Activity, Award, Rocket, ShieldCheck, X } from 'lucide-react';
import './App.css';

const PROFILES = [
  {
    id: 'neonato', emoji: '👶', title: 'Neonatos y Bebés', age: '0 – 12 meses',
    color: '#e91e8c', gradient: 'linear-gradient(135deg, #f8a5c2, #e91e8c)', shadow: 'rgba(233,30,140,0.4)',
    desc: 'Dosificación por peso (mg/kg). Metabolismo hepático y renal inmaduro. Lista farmacológica muy restringida.',
    badge: 'Alta especialización', badgeColor: '#e91e8c'
  },
  {
    id: 'pediatrico', emoji: '🧒', title: 'Pediatría', age: '1 – 12 años',
    color: '#f39c12', gradient: 'linear-gradient(135deg, #fde68a, #f39c12)', shadow: 'rgba(243,156,18,0.4)',
    desc: 'Cálculo mg/kg, formas farmacéuticas líquidas o masticables, guías pediátricas (OPS/PAHO).',
    badge: 'Dosificación especial', badgeColor: '#f39c12'
  },
  {
    id: 'adolescente', emoji: '🧑', title: 'Adolescentes', age: '13 – 17 años',
    color: '#8e44ad', gradient: 'linear-gradient(135deg, #c39bd3, #8e44ad)', shadow: 'rgba(142,68,173,0.4)',
    desc: 'Farmacocinética en transición, interacciones con anticonceptivos, salud mental y riesgo de dependencia.',
    badge: 'Transición metabólica', badgeColor: '#8e44ad'
  },
  {
    id: 'adulto', emoji: '🧑‍⚕️', title: 'Adulto General', age: '18 – 64 años',
    color: '#2980b9', gradient: 'linear-gradient(135deg, #74b9ff, #2980b9)', shadow: 'rgba(41,128,185,0.4)',
    desc: 'Dosificación estándar. Enfoque en interacciones, PRM y RNM según protocolos clínicos internacionales.',
    badge: 'Alicia 1.0 estándar', badgeColor: '#2980b9'
  },
  {
    id: 'adulto_mayor', emoji: '👴', title: 'Adulto Mayor', age: '65+ años',
    color: '#27ae60', gradient: 'linear-gradient(135deg, #55efc4, #27ae60)', shadow: 'rgba(39,174,96,0.4)',
    desc: 'Criterios STOPP/START, polifarmacia, ajuste renal (Cockroft-Gault), riesgo de caídas y deterioro cognitivo.',
    badge: 'Polifarmacia crítica', badgeColor: '#27ae60'
  },
  {
    id: 'embarazada', emoji: '🤰', title: 'Embarazada', age: 'Gestación (1er-3er trimestre)',
    color: '#e74c3c', gradient: 'linear-gradient(135deg, #fab1a0, #e74c3c)', shadow: 'rgba(231,76,60,0.4)',
    desc: 'Categorías de riesgo FDA/ADEC, paso placentario, fármacos teratogénicos y trimestre de riesgo.',
    badge: 'Teratogenicidad', badgeColor: '#e74c3c'
  },
  {
    id: 'lactancia', emoji: '🤱', title: 'Lactancia Materna', age: 'Post-parto y lactancia',
    color: '#16a085', gradient: 'linear-gradient(135deg, #81ecec, #16a085)', shadow: 'rgba(22,160,133,0.4)',
    desc: 'Paso al leche materna, compatibilidad LactMed, efecto en el lactante y alternativas seguras.',
    badge: 'Compatibilidad LactMed', badgeColor: '#16a085'
  }
];

const LOGOS = [
  { src: '/logos/UJAT.png', alt: 'UJAT', title: 'Universidad Juárez Autónoma de Tabasco' },
  { src: '/logos/dacyti.jpg', alt: 'DACYTI', title: 'DACYTI - División Academica de Ciencias y Tecnologías de la Información' },
  { src: '/logos/LBMYFG.png', alt: 'Laboratorio', title: 'Laboratorio de Biología Molecular y Farmacogenética' },
];

const MENU_ITEMS = [
  { icon: Settings, color: '#8e44ad', shadow: 'rgba(142,68,173,0.4)', title: 'Ajustes del Motor IA', id: 'settings' },
  { icon: Info, color: '#3498db', shadow: 'rgba(52,152,219,0.4)', title: 'Documentación del Proyecto', id: 'docs' },
  { icon: BookOpen, color: '#e67e22', shadow: 'rgba(230,126,34,0.4)', title: 'Manual de Usuario', id: 'manual' },
  { icon: Server, color: '#10b981', shadow: 'rgba(16,185,129,0.4)', title: 'Guía Técnica LM Studio', id: 'lmstudio' },
  { icon: Activity, color: '#e11d48', shadow: 'rgba(225,29,72,0.4)', title: 'Auditoría y Pruebas Clínicas', id: 'clinical' },
  { icon: Award, color: '#f1c40f', shadow: 'rgba(241,196,15,0.4)', title: 'Impacto Científico y Publicación', id: 'scientific' },
  { icon: ShieldCheck, color: '#2c3e50', shadow: 'rgba(44,62,80,0.4)', title: 'ISO 42001 SGIA & Ciberseguridad', id: 'isoSecurity' },
  { icon: Rocket, color: '#8e44ad', shadow: 'rgba(142,68,173,0.4)', title: 'El Futuro: Alicia 2.0', id: 'future' },
];

export default function PatientSelector({ onSelect, onOpenDoc }) {
  const [hovered, setHovered] = useState(null);
  const [zoomedLogo, setZoomedLogo] = useState(null);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 50%, #f3e5f5 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      position: 'relative'
    }}>

      {/* === Menú flotante de 7 iconos — SOLO aquí === */}
      <div style={{ position: 'fixed', right: '20px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 1000 }}>
        {MENU_ITEMS.map(({ icon: Icon, color, shadow, title, id }) => (
          <button
            key={id}
            onClick={() => onOpenDoc && onOpenDoc(id)}
            title={title}
            style={{ background: `linear-gradient(135deg, ${color}cc, ${color})`, border: 'none', color: 'white', cursor: 'pointer', padding: '11px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: `0 4px 14px ${shadow}`, transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.18)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Icon size={24} />
          </button>
        ))}
      </div>

      {/* === Header con logos a ambos lados === */}
      <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '800px', width: '100%' }}>
        {/* Emoji pastilla */}
        <div style={{ fontSize: '3.2rem', marginBottom: '10px' }}>💊</div>

        {/* Fila: logos izquierda | título | logos derecha */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
          {/* Logos izquierda */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {LOGOS.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                onClick={() => setZoomedLogo(logo)}
                style={{
                  width: '52px',
                  height: '52px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: 'white',
                  padding: '4px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.12)'; }}
              />
            ))}
          </div>

          {/* Título central */}
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#2c3e50', fontWeight: 800, whiteSpace: 'nowrap' }}>
            Farmacéutica Alicia IA
          </h1>

          {/* Logos derecha (mismos, espejo) */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {[...LOGOS].reverse().map((logo) => (
              <img
                key={logo.src + '_r'}
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                onClick={() => setZoomedLogo(logo)}
                style={{
                  width: '52px',
                  height: '52px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: 'white',
                  padding: '4px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.12)'; }}
              />
            ))}
          </div>
        </div>

        <p style={{ margin: '0 0 4px 0', fontSize: '1.05rem', color: '#7f8c8d' }}>
          Motor local · Gemma 4 12B · 100% privado
        </p>
        <p style={{ margin: 0, fontSize: '0.95rem', color: '#95a5a6' }}>
          Selecciona el <b style={{ color: '#2c3e50' }}>perfil del paciente</b> para activar el modo clínico especializado.
        </p>
        <div style={{ marginTop: '12px', backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: '8px', padding: '9px 18px', display: 'inline-block', fontSize: '0.82rem', color: '#856404' }}>
          ⚕️ Herramienta exclusiva para profesionales de la salud bajo supervisión clínica.
        </div>
      </div>

      {/* === Grid de perfiles === */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', maxWidth: '1000px', width: '100%' }}>
        {PROFILES.map((p) => (
          <div
            key={p.id}
            onClick={() => onSelect(p)}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: 'white', borderRadius: '16px', padding: '24px', cursor: 'pointer',
              border: `2px solid ${hovered === p.id ? p.color : 'transparent'}`,
              boxShadow: hovered === p.id ? `0 12px 40px ${p.shadow}` : '0 4px 20px rgba(0,0,0,0.07)',
              transform: hovered === p.id ? 'translateY(-6px)' : 'none',
              transition: 'all 0.25s ease', display: 'flex', flexDirection: 'column', gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: p.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.7rem', flexShrink: 0, boxShadow: `0 4px 12px ${p.shadow}` }}>
                {p.emoji}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#2c3e50' }}>{p.title}</div>
                <div style={{ fontSize: '0.82rem', color: '#7f8c8d', marginTop: '2px' }}>{p.age}</div>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.87rem', color: '#555', lineHeight: '1.5' }}>{p.desc}</p>
            <div style={{ alignSelf: 'flex-start', backgroundColor: `${p.badgeColor}18`, color: p.badgeColor, borderRadius: '20px', padding: '4px 12px', fontSize: '0.77rem', fontWeight: 700, border: `1px solid ${p.badgeColor}40` }}>
              {p.badge}
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: '35px', fontSize: '0.8rem', color: '#bdc3c7', textAlign: 'center' }}>
        DACYTI · UJAT · Proyecto de Investigación en Salud Digital Local
      </p>

      {/* === Lightbox de logos === */}
      {zoomedLogo && (
        <div
          onClick={() => setZoomedLogo(null)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.88)', zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}
        >
          <button
            onClick={() => setZoomedLogo(null)}
            style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <X size={36} />
          </button>
          <img
            src={zoomedLogo.src}
            alt={zoomedLogo.alt}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '500px', maxHeight: '80vh', objectFit: 'contain', backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }}
          />
          <p style={{ color: 'white', fontSize: '1rem', fontWeight: 600, textAlign: 'center' }}>{zoomedLogo.title}</p>
        </div>
      )}
    </div>
  );
}
