import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AuthProvider from './provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,
)
