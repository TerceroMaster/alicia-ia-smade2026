import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PatientSelector from './PatientSelector.jsx'

function Root() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [initialPage, setInitialPage] = useState('chat');

  const handleSelectProfile = (profile) => {
    setInitialPage('chat');
    setSelectedProfile(profile);
  };

  const handleOpenDoc = (docId) => {
    // Map doc IDs from PatientSelector to App.jsx page names
    const pageMap = {
      settings: 'settings',
      docs: 'docs',
      manual: 'manual',
      lmstudio: 'lmstudioDocs',
      clinical: 'clinicalTesting',
      scientific: 'scientific',
      isoSecurity: 'isoSecurity',
      future: 'future',
    };
    setInitialPage(pageMap[docId] || 'docs');
    setSelectedProfile({ id: 'adulto', emoji: '🧑‍⚕️', title: 'Adulto General', age: '18–64 años', gradient: 'linear-gradient(135deg, #74b9ff, #2980b9)' });
  };

  if (!selectedProfile) {
    return (
      <PatientSelector
        onSelect={handleSelectProfile}
        onOpenDoc={handleOpenDoc}
      />
    );
  }

  return (
    <App
      profile={selectedProfile}
      onBack={() => { setSelectedProfile(null); setInitialPage('chat'); }}
      initialPage={initialPage}
    />
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
