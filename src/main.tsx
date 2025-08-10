import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App'
import './styles/global.css'
import { attachRailButtons } from './pages/Home.slider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

setTimeout(attachRailButtons, 0)
