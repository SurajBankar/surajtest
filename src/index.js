import React from 'react'
import ReactDom from 'react-dom'
import { App } from './App'

const r2 = ReactDom.createRoot(document.getElementById("r1"))

r2.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)