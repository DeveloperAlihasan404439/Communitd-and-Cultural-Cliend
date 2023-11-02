import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/Router/Router.jsx'
import AuthProviderContext from './pages/AuthProvider/AuthProviderContext/AuthProviderContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderContext>
    <RouterProvider router={router}/>
    </AuthProviderContext>
  </React.StrictMode>,
)
