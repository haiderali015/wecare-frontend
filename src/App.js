import React from 'react';
import "./App.css";
import WelcomePage from './components/WelcomePage'
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Patientregister from './components/Patientregister';
import ContactUs from './components/ContactUs';
import Signin from './components/Signin';
import DoctorDetails from './components/DoctorDetails';
import MakeAppointment from './components/MakeAppointent';
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Sidebar from './components/Pharmacy/Sidebar.jsx';
import Invoice from './components/Pharmacy/Invoice.jsx';
import Customer from './components/Pharmacy/Customer.jsx';
import Medicine from './components/Pharmacy/Medicine.jsx';
import Report from './components/Pharmacy/Report.jsx';
import CalculateBill from './components/Pharmacy/CalculateBill';
import { Outlet } from 'react-router-dom';
import Doctor from './components/Doctor/Doctor';
import Sidenav from "./components/Pharmacy/Sidenav"
import Main from './components/Main';
import EditMedicine from './components/Pharmacy/EditMedicine';
import PatientHome from './components/Patient/PatientHome';
import Booking from './components/Patient/BookDoctor';
import Profilesettings from './components/Patient/Profilesettings';
import PatientProfile from './components/Patient/PatientProfile';
import DoctorSignin from './components/Doctor/DoctorSignin';
import SignInPharmacy from './components/Pharmacy/SigninPharmacy';
import SigninDoctor from './components/Doctor/SigninDoctor';
import Admin from './components/Admin/Admin';
import Edit from './components/Admin/Edit';
import AddDoctor from './components/Admin/AddDoctor';
import SigninAdmin from './components/Admin/SigninAdmin';
import { useSelector } from 'react-redux';
import  Spinner  from './components/Spinner';


const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);



function App() {
  const {loading} = useSelector(state => state.alerts)
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (

        <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
      {loading ? (
        <Spinner/>
      ):(
      <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Patientregister />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/WelcomePage' element={<WelcomePage />} />

            <Route path='/signinPharmacy' element={<SignInPharmacy />} />
            <Route path='/signinDoctor' element={<SigninDoctor />} />
            <Route path='/signinAdmin' element={<SigninAdmin />} />

            <Route path='/patienthome' element={<PatientHome/>} />
            <Route path='/doctordetails' element={<DoctorDetails />} />

            <Route path='/Admin' element={<Admin />} />




            <Route path='/makeappointment' element={<MakeAppointment />} />
            <Route path='/Doctor' element={<Doctor />} />
            <Route path='/Pharmacy' element={<Sidenav />} />
            <Route path='/Pharmacy/editMedicine/:id' element={<EditMedicine/>} />

            <Route path='/Admin/editDoctor/:id' element={<Edit/>} />
            <Route path='/Admin/AddDoctor' element={<AddDoctor/>}/>
            <Route path='/booking/:id' element={<Booking render={(params) => ({ ...params })}/>} />
            <Route path='/hospitals/:city/:hospital' element={<PatientHome  render={(params) => ({ ...params })}/>} />
            <Route path='/settings' element={<Profilesettings/>} />
            <Route path='/myprofile' element={<PatientProfile/>} />

            <Route path='/DoctorLogin' element={<DoctorSignin />} />

            <Route path="/bill" element={<CalculateBill />} /> 
        </Routes>

       )}
          
        </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
