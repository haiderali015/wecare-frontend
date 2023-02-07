import React from 'react';
// import "./App.css";
import WelcomePage from './components/WelcomePage'
import Homepage from './components/Homepage';
import{BrowserRouter, Routes ,Route} from "react-router-dom";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Patientregister from './components/Patientregister';
import { Home } from '@mui/icons-material';
import ContactUs from './components/ContactUs';
import Signin from './components/Signin';
import PatientHome from './components/PatientHome';
import DoctorDetails from './components/DoctorDetails';
import { Navbar } from 'react-bootstrap';


function App() {
  return (
    <>
    
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<Patientregister/>} />
    <Route path='/contactus' element={ <ContactUs/>} />
    <Route path='/signin' element={ <Signin/>} />
    <Route path='/bookappointment' element={ <PatientHome/>} />
    <Route path='/doctordetails' element={ <DoctorDetails/>} />



    </Routes>
    
    </BrowserRouter>
    

     </div>
    </>
  );
}

export default App;
