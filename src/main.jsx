import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import App from "./App.jsx";
import "./index.css";
import Hero from "./components/Hero.jsx";
import Login from "./components/Login.jsx";
import Layout from "./Layout.jsx";




const router = createBrowserRouter(

  createRoutesFromElements(

   <Route path='/' element = {<Layout/>} >

     <Route path='' element={<Hero/>}/>
     <Route path='login' element={<Login/>}/>

   </Route>
 


  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
