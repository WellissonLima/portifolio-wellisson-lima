import React from 'react'
import { ReactQueryProvider } from 'github-automated-repos'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ReactQueryProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </ReactQueryProvider>
);
