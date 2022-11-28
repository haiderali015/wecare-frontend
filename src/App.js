import React from 'react';
// import "./App.css";
import WelcomePage from './components/WelcomePage'
import Homepage from './components/Homepage';
import Navbar from './components/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    </>
  );
}

export default App;
