import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import RootLayout from './layout/RootLayout';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/about' element={<About />} />
    </Route>
  ))

  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
