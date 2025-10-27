import { useEffect, useState } from 'react'
import type { MenuItem } from '../types'

export default function MenuList() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('/api/menu')               // dank Vite-Proxy geht das an http://localhost:4000
      .then(r => {
        if (!r.ok) throw new Error('Fehler: ' + r.status)
        return r.json()
      })
      .then(data => setItems(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Lade Speisekarte…</p>
  if (error) return <p style={{color: '#ff6b6b'}}>Fehler: {error}</p>

  return (
    <div style={{maxWidth: 900}}>
      <h2 style={{fontSize: 28, marginBottom: 12}}>Unsere Speisekarte</h2>
      <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))'}}>
        {items.map(item => (
          <article key={item.id} style={{background:'#222', color:'#fff', borderRadius:14, padding:16, border:'1px solid #333'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', gap:12}}>
              <div>
                <h3 style={{margin:'0 0 6px 0', fontSize:18}}>{item.name}</h3>
                {item.description && <p style={{opacity:.8, margin:0}}>{item.description}</p>}
              </div>
              <strong>€ {item.price.toFixed(2)}</strong>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
