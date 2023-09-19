import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Spin } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div className="loading-container">
    <div className="loading-spinner"></div>
  </div>}>
      <App />
    </Suspense>,
)
