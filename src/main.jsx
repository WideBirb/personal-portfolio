
// Node Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Componenets
import './index.css'

// CSS Link
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
