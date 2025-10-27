import { useEffect, useState } from 'react'
import MenuList from './components/MenuList'

export default function App() {
  const [status, setStatus] = useState('prüfe Backend …')

  useEffect(() => {
    fetch('/api/health')
      .then(r => r.json())
      .then(d => setStatus(d.ok ? 'Backend verbunden ✅' : 'Fehler ❌'))
      .catch(() => setStatus('Keine Verbindung ❌'))
  }, [])

  return (
    <div style={{minHeight:'100vh', background:'#1a1a1a', color:'#fff'}}>
      <div style={{maxWidth: 1100, margin: '0 auto', padding: '40px 16px'}}>
        <h1 style={{fontSize: 42, marginBottom: 6}}>Patty &amp; Chicken</h1>
        <p style={{marginBottom: 24, opacity:.9}}>{status}</p>

        {/* Speisekarte */}
        <MenuList />
      </div>
    </div>
  )
}
