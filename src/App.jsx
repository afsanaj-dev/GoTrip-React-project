import { useState } from 'react'
import Navbar from './layouts/Navbar'
import Home from './pages/Home';
import About from './pages/Offer';
import Footer from './layouts/Footer';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from './layouts/RootLayouts';
import Offer from './pages/Offer';
import Activity from './pages/Activity';
import Destination from './pages/Destination';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<RootLayouts/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/offer" element={<Offer/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/destination" element={<Destination/>}/>
      </Route>

      </>
      
  
    )
  );

  return (
    <>
      <RouterProvider
    router={router}
  />
    </>
  )
}

export default App
