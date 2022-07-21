import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function All_page_route() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
  )
}
