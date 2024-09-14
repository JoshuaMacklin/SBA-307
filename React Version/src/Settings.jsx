import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Settings from './pages/settings.jsx'
import Header from './Header.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Settings />
  </StrictMode>,
)
