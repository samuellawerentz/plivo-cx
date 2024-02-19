import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerSpas, runSpas } from './registerSpas.ts'


const root = createRoot(document.getElementById('main'));
root.render(<App />)


registerSpas()
runSpas()
