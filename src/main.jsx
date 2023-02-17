import React from 'react'
import ReactDOM from 'react-dom/client'
import { HarryPotterApp } from './HarryPotterApp'
import { BrowserRouter } from 'react-router-dom'

import './css/styles.css'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <HarryPotterApp />
      </BrowserRouter>
  </React.StrictMode>,
)
