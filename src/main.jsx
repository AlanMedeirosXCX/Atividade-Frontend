import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Gatinho.css'
import App from './Gatinho.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
