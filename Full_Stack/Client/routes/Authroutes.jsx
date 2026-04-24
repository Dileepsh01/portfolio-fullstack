import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Register from '../components/Register'
import ProtectedRoute from '../components/ProtectedRoute'

import Home from '../components/Home'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Authroutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* 🔐 Protected Layout */}
        <Route 
          path='/' 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* 🔽 Nested Routes (IMPORTANT) */}
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Authroutes