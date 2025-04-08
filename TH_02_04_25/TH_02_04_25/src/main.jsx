import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LabelProvider } from './hooks/LabelContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LabelProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </LabelProvider>
  </StrictMode>,
)
