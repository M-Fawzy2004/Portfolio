import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')
const loader = document.getElementById('loader')

const root = createRoot(rootEl)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (loader) {
  requestAnimationFrame(() => {
    loader.classList.add('hidden')
    setTimeout(() => loader.remove(), 700)
  })
}
