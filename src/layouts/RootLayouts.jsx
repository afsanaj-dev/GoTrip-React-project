import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>

  )
}

export default RootLayouts