import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
// This code sets up a React application with routing capabilities using BrowserRouter.
// It imports necessary modules, including React, ReactDOM, and BrowserRouter from 'react-router-dom'.
// The main App component is imported from './App.jsx', and a global CSS file is imported from './index.css'.
// The application is rendered into the root element of the HTML document,
// wrapped in React.StrictMode for highlighting potential problems in the application.
// The BrowserRouter component enables the use of React Router for client-side routing,
// allowing the application to handle navigation and rendering of different components based on the URL.
// This setup is typical for modern React applications that require routing and state management.