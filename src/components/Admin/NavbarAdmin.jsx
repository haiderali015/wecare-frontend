import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5"; // import unfilled logout icon
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import "./NavbarAdmin.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";

const NavbarAdmin = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const shouldShowBackIcon = pathname !== "/Admin";
  const handleLogout = () => {
    navigate("/signinAdmin");
  };

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
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
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Admin/AddDoctor">Add Doctor</NavLink>
            </li>
            <li>
              <NavLink to="/Admin/AddPharmacy">Add Pharmacy</NavLink>
            </li>
            <li>
              <NavLink to="/stats">Check Stats</NavLink>
            </li>
            {shouldShowBackIcon && (
              <li>
                <NavLink to="/Admin"><ArrowBackIosNewIcon/>Back</NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
        <ul>
            <li onClick={handleLogout} className="logout-btn">
              <IoLogOutOutline />Logout
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarAdmin;
