import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MedicationIcon from '@mui/icons-material/Medication';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import Invoice  from '../Pharmacy/Invoice';
import CalculateBill  from '../Pharmacy/CalculateBill';
import AddMedicine  from '../Pharmacy/AddMedicine';
import { useNavigate, useParams } from "react-router-dom";
import {useEffect } from 'react'
import jwtDecode from 'jwt-decode';


import Medicine  from '../Pharmacy/Medicine';
import logo from "../Pharmacy/wecarelogo.png";
import { Button} from '@material-ui/core';
import Profilesettings from './Profilesettings';
import PatientHome from './PatientHome';
import Appointments from "./Appointments"
import MedicinesRecord from './MedicinesRecord';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const [userToken, setuserToken] = useState(localStorage.getItem('userToken'));
   
  const token = localStorage.getItem('userToken');

  const decodedToken = jwtDecode(token);
  const PatientName = decodedToken.username; 
    
    const navigate = useNavigate();
    useEffect(() => {
        if (!userToken) {
          navigate('/signin');
        }
      }, [userToken, navigate]);
    
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const[menudata,setmenudata]=useState("Book Doctor");

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setuserToken(null);
    navigate("/signin")
}


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Hi {PatientName} ,
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setmenudata("Appointments")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    fontSize:"35px"
                  }}
                >
                 <MedicationIcon/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} primary={"Appointments"}/>
              </ListItemButton>
            </ListItem>


            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setmenudata("Medicines Record")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    fontSize:"35px"
                  }}
                >
                 <MedicationIcon/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} primary={"Medicines Record"}/>
              </ListItemButton>
            </ListItem>





            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setmenudata("Book Doctor")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    fontSize:"35px"
                  }}
                >
                 <MedicationIcon/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} primary={"Book Doctor"}/>
              </ListItemButton>
            </ListItem>



            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setmenudata("Profile")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    fontSize:"35px"
                  }}
                >
                 <MedicationIcon/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} primary={"Profile"}/>
              </ListItemButton>
            </ListItem>


            <ListItem  disablePadding sx={{ display: 'block' }} onClick={handleLogout}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    fontSize:"35px"
                  }}
                >
                 <MedicationIcon/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}} primary={"Logout"}/>
              </ListItemButton>
            </ListItem>


        </List>
        <Divider />
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {menudata=="Book Doctor" && <PatientHome/>}
        {menudata=="Profile" && <Profilesettings/>}
        {menudata=="Appointments" && <Appointments/>}
        {menudata=="Medicines Record" && <MedicinesRecord/>}


      </Box>
    </Box>
  );
}