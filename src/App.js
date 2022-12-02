import React from 'react';
// import "./App.css";
import WelcomePage from './components/WelcomePage'
import Homepage from './components/Homepage';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Patientregister from './components/Patientregister';
import { Home } from '@mui/icons-material';


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/signup' element={<Patientregister />} /> */}
          <About />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
