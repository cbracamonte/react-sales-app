import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/**
 * React.StrictMode
 *  -> Muestra advertencias adicionales en el modo de desarrollo
 *  -> Mejora la calidad del código
 */