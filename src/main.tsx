import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PokeApi } from './Services/PokeApi.service'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ApiProvider api={PokeApi}>
    <App />
  </ApiProvider>
  </React.StrictMode>,
)
