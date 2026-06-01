import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootEl = document.getElementById('root')

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/** Hide static LCP shell after React paints the real hero. */
requestAnimationFrame(() => {
  document.body.classList.add('app-mounted')
})
