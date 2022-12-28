import React from 'react';
// import "./App.css";
import WelcomePage from './components/WelcomePage'
import Homepage from './components/Homepage';
import Navbar from './components/navbar';
import{BrowserRouter, Routes ,Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Patientregister from './components/Patientregister';
import { Home } from '@mui/icons-material';
import ContactUs from './components/ContactUs';
import Signin from './components/Signin';


function App() {
  return (
    <>
    
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<Patientregister/>} />
    <Route path='/contactus' element={ <ContactUs/>} />
    <Route path='/signin' element={ <Signin/>} />


    </Routes>
    </BrowserRouter>
     </div>
    </>
  );
}

export default App;
