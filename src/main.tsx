import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import { GlobalStyle } from './globalstyle'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
)
