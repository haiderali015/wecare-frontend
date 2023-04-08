import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5"; // import unfilled logout icon
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
// import "./NavbarAdmin.css";
import { NavLink, useLocation } from "react-router-dom";

const NavbarPharmacy = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const shouldnotShowContents = pathname === "/signinPharmacy";


  const handleh2 =()=>{
    navigate("/")
  }
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2 onClick={handleh2}>
            <span>W</span>e
            <span>C</span>are
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >

       
        </div>

      </nav>
    </>
  );
};

export default NavbarPharmacy;
