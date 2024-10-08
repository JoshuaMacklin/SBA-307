import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import About from './pages/about.jsx'
import Header from './Header.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
  </StrictMode>,
)
