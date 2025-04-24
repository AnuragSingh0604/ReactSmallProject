import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import Jobs from './layout/Jobs';
import JobsPage, { jobsLoader } from './pages/JobsPage';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/about' element={<About />} errorElement={<Error />} />
    </Route>
  ))

  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ContactLayout />} >
            <Route path="/products/info" element={<ContactInfo></ContactInfo>}></Route>
            <Route path='/products/form' element={<ContactForm />}></Route>
          </Route>
          <Route path="/jobs" element={<Jobs />}>
            <Route path='/' element={<JobsPage />} loader={jobsLoader}></Route>
          </Route>
          <Route path='/about' element={<About />} errorElement={<Error />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>

    </div>
  )
}

export default App
