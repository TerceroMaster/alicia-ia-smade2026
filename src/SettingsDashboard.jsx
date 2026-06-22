import React from 'react';
import { Settings2, Server, Thermometer, Hash, Activity, Clock, Cpu, ArrowLeft } from 'lucide-react';

export default function SettingsDashboard({ settings, setSettings, metrics, onBack }) {
  
  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="chat-card glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      
      {/* Header */}
      <div className="chat-header" style={{ flexShrink: 0 }}>
        <button onClick={onBack} className="back-btn" title="Volver al Chat">
          <ArrowLeft size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div className="icon-container" style={{ background: 'linear-gradient(135deg, #8e44ad 0%, #3498db 100%)' }}>
            <Settings2 size={28} color="white" />
          </div>
          <div className="chat-header-info">
            <h1 style={{ margin: 0 }}>Ajustes del Motor IA</h1>
            <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.85, lineHeight: '1.4' }}>
              Panel de Control y Métricas de Rendimiento
            </p>
          </div>
        </div>
      </div>

      <div className="settings-content" style={{ padding: '25px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Connection Status Card */}
        <div className="settings-card connection-card">
          <div className="card-header">
            <Server size={20} />
            <h3>Estado del Servidor</h3>
          </div>
          <div className="card-body">
            <div className="status-indicator">
              <div className="pulse-dot green"></div>
              <span>Conectado (Localhost)</span>
            </div>
            <div className="info-row">
              <span className="info-label">Modelo Activo:</span>
              <span className="info-value highlight">{settings.model}</span>
            </div>
            <div className="info-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px', borderBottom: 'none' }}>
              <span className="info-label" style={{ fontWeight: 'bold', color: '#333' }}>URL Base (Editable):</span>
              <input 
                type="text" 
                value={settings.serverUrl || 'http://localhost:1234'}
                onChange={(e) => handleSettingChange('serverUrl', e.target.value)}
                style={{ width: '100%', padding: '12px', minHeight: '45px', borderRadius: '8px', border: '2px solid #cbd5e1', backgroundColor: '#ffffff', color: '#000000', fontFamily: 'monospace', fontSize: '1rem', boxSizing: 'border-box' }}
              />
            </div>
          </div>
        </div>

        {/* Inference Settings */}
        <div className="settings-card">
          <div className="card-header">
            <Cpu size={20} />
            <h3>Parámetros de Inferencia</h3>
          </div>
          <div className="card-body">
            
            <div className="setting-control">
              <div className="control-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Thermometer size={18} className="text-primary" />
                  <label>Temperatura (Creatividad)</label>
                </div>
                <input 
                  type="number" 
                  min="0.1" max="2.0" step="0.1"
                  value={settings.temperature}
                  onChange={(e) => handleSettingChange('temperature', parseFloat(e.target.value))}
                  style={{ width: '60px', padding: '4px', borderRadius: '8px', border: '1px solid var(--glass-border)', textAlign: 'center', background: 'var(--primary)', color: 'white', fontWeight: 'bold' }}
                />
              </div>
              <p className="control-desc" style={{ fontSize: '0.95rem', lineHeight: '1.5', marginTop: '10px', marginBottom: '20px', color: '#475569' }}>Valores bajos (0.1 - 0.4) dan respuestas más precisas y clínicas. Valores altos dan respuestas más creativas.</p>
              <input 
                type="range" 
                min="0.1" 
                max="1.0" 
                step="0.1" 
                value={settings.temperature}
                onChange={(e) => handleSettingChange('temperature', parseFloat(e.target.value))}
                className="slider"
              />
            </div>

            <div className="setting-control" style={{ marginTop: '20px' }}>
              <div className="control-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Hash size={18} className="text-primary" />
                  <label>Máximo de Tokens</label>
                </div>
                <input 
                  type="number" 
                  min="128" max="8192" step="128"
                  value={settings.maxTokens}
                  onChange={(e) => handleSettingChange('maxTokens', parseInt(e.target.value))}
                  style={{ width: '80px', padding: '4px', borderRadius: '8px', border: '1px solid var(--glass-border)', textAlign: 'center', background: 'var(--primary)', color: 'white', fontWeight: 'bold' }}
                />
              </div>
              <p className="control-desc" style={{ fontSize: '0.95rem', lineHeight: '1.5', marginTop: '10px', marginBottom: '20px', color: '#475569' }}>Límite de longitud de la respuesta. Un token equivale aproximadamente a 3/4 de una palabra.</p>
              <input 
                type="range" 
                min="512" 
                max="8192" 
                step="256" 
                value={settings.maxTokens}
                onChange={(e) => handleSettingChange('maxTokens', parseInt(e.target.value))}
                className="slider"
              />
            </div>

          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="settings-card metrics-card">
          <div className="card-header">
            <Activity size={20} />
            <h3>Rendimiento y Métricas</h3>
          </div>
          <div className="card-body metrics-grid">
            
            <div className="metric-box">
              <Clock size={24} className="metric-icon" />
              <div className="metric-info">
                <span className="metric-label">Última Respuesta</span>
                <span className="metric-value">
                  {metrics.lastInferenceTime ? `${(metrics.lastInferenceTime / 1000).toFixed(2)}s` : '--'}
                </span>
              </div>
            </div>

            <div className="metric-box">
              <Activity size={24} className="metric-icon" />
              <div className="metric-info">
                <span className="metric-label">Tiempo Promedio</span>
                <span className="metric-value">
                  {metrics.avgResponseTime ? `${(metrics.avgResponseTime / 1000).toFixed(2)}s` : '--'}
                </span>
              </div>
            </div>

            <div className="metric-box">
              <Hash size={24} className="metric-icon" />
              <div className="metric-info">
                <span className="metric-label">Total Peticiones</span>
                <span className="metric-value">{metrics.totalRequests}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
