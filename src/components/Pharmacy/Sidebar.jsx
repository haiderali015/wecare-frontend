import React, { useState } from 'react';
import "./pharmacy.css";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MedicationIcon from '@mui/icons-material/Medication';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/invoice",
            name:"Invoice",
            icon:<ReceiptIcon/>
        },
        
        {
            path:"/bill",
            name:"Bill",
            icon:<ShoppingCartIcon/>
        },
        {
            path:"/report",
            name:"Report",
            icon:<LeaderboardIcon/>
        },
        
        {
            path:"/medicines",
            name:"Medicines",
            icon:<MedicationIcon/>
        },
        
    ]
  return (
    <div className="container">
    <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Clinix</h1>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                <DensityMediumIcon onClick={toggle} style={{fontSize:"large"}} />
            </div>
        </div>
        
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
    <main>{children}</main>
 </div>
  )
}

export default Sidebar