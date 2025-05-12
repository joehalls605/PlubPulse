import { useState } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {

  return (
   // BrowserRouter enables routing in the application
   <BrowserRouter>
       <Header/>
       <AppRoutes/>
       <Footer/>
   </BrowserRouter>
  )
}
export default App
