import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="327565181557-4tr9cusun5b7ftj4d39eslqdckd22lji.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
)
