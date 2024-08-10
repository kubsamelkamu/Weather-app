import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Header from './component/Header'

import MainSection from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <MainSection/>
  </StrictMode>,
)
