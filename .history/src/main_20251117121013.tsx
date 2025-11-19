import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hola mundo</h1>
    <p>Esto es un párrafo</p>

    <button>Click me</button>
  </StrictMode>,
)
