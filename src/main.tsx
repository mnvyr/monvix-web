import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root')
if (!root) throw new Error('Elemen #root tidak ditemukan')

document.documentElement.classList.add('reveal-on')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
