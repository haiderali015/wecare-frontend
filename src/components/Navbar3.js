import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ArrowDropDownSharp } from '@mui/icons-material';
const pages = ['Home', 'About us', 'Our plans', 'contact us'];
const settings = ['Dashboard', 'Logout'];

function Navbar3() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [userToken, setUserToken] = React.useState(localStorage.getItem("userToken"));
    const [hosp, setHosp] = React.useState(false);
    const navigate = useNavigate();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        setUserToken(null);
        navigate("/signin")
    }

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <a class="colrs" dbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            WeCare
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <a class="colrs" dbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>

                            ))}
                            <Button
                                // key={page}
                                onClick={() => setHosp(!hosp)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Hospitals<ArrowDropDownSharp />

                            </Button>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <a class="colrs" vatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>drop-right-header
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <IconButton color="inherit">
                            <ul>
                                <li onClick={handleLogout} >
                                    <LogoutIcon />Logout
                                </li>
                            </ul>                        
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            {hosp &&
                <div class="drop-down-wrapper" style={{ width: "100%", background: "#bdbdbd", position: "absolute", zIndex: "110" }}>
                    <div class="drop-down-inner container">
                        <div class="row">
                            <div class="col-3">
                                <div class="drop-right-header">
                                    <div class="menu-heading h1" >Hospitals of Lahore</div>
                                </div>
                                <ul class="main-drop">
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/lahore/hameed-latif-hospital">
                                            Hameed Latif Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/lahore/doctors-hospital">
                                            Doctors Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/lahore/evercare-hospital">
                                            Evercare Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/lahore/surgimed-hospital">
                                            Surgimed Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/lahore/omar-hospital-cardiac-centre">
                                            Omar Hospital &amp; Cardiac Centre
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/lahore/ittefaq-hospital-trust">
                                            Ittefaq Hospital (Trust)
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/lahore/akram-medical-complex-8605">
                                            Akram Medical Complex
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/lahore/iqra-medical-complex-8778">
                                            Iqra Medical Complex
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/lahore/fatima-memorial-hospital-18536">
                                            Fatima Memorial Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/lahore/mid-city-hospital-8572">
                                            Mid City Hospital
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <div class="drop-right-header">
                                    <div class="menu-heading h1">Hospitals of Karachi</div>
                                </div>
                                <ul class="main-drop">
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/karachi/dr-ziauddin-hospital-clifton">
                                            Dr. Ziauddin Hospital (Clifton)
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/karachi/altamash-general-hospital-9825">
                                            Altamash General Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/karachi/south-city-hospital">
                                            South City Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/karachi/aga-khan-university-hospital">
                                            Aga Khan University Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/karachi/darul-sehat-hospital">
                                            Darul Sehat Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/karachi/saifee-hospital-9254">
                                            Saifee Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/karachi/mamji-hospital-13045">
                                            Mamji Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/karachi/hashmanis-hospital-saddar">
                                            Hashmanis Hospital (Saddar)
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/karachi/medicare-cardiac-general-hospital">
                                            Medicare Cardiac &amp; General Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/karachi/national-medical-centre-karachi">
                                            National Medical Centre (Karachi)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <div class="drop-right-header">
                                    <div class="menu-heading h1">Hospitals of Islamabad</div>
                                </div>
                                <ul class="main-drop">
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/islamabad/life-care-international-hospital">
                                            Life Care International Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/islamabad/islamabad-international-hospital">
                                            Islamabad International Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/islamabad/zobia-hospital-g-9">
                                            Zobia Hospital (G-9)
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/islamabad/maxhealth-hospital">
                                            MaxHealth Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/islamabad/shifa-international-hospital-ltd">
                                            Shifa International Hospital Ltd
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/islamabad/ali-medical-center-islamabad-9089">
                                            Ali Medical Center (Islamabad)
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/islamabad/quaid-e-azam-international-hospital-9033">
                                            Quaid-e-Azam International Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/islamabad/maroof-international-hospital-8990">
                                            Maroof International Hospital
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/islamabad/islamabad-specialist-clinic-f-8-markaz">
                                            Islamabad Specialist Clinic (F-8 Markaz)
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs"
                                            href="/hospitals/islamabad/kulsum-international-hospital">
                                            Kulsum International Hospital
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <div class="drop-right-header">
                                    <div class="menu-heading h1">Hospitals in Pakistan</div>
                                </div>
                                <ul class="main-drop">
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/multan">
                                            Hospitals in Multan
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/faisalabad">
                                            Hospitals in Faisalabad
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/peshawar">
                                            Hospitals in Peshawar
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/quetta">
                                            Hospitals in Quetta
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/jhelum">
                                            Hospitals in Jhelum
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/gujrat">
                                            Hospitals in Gujrat
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/bahawalpur">
                                            Hospitals in Bahawalpur
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/hyderabad">
                                            Hospitals in Hyderabad
                                        </a>
                                    </li>
                                    <li style={{ marginTop: "10px" }}>
                                        <a class="colrs" href="/hospitals/rawalpindi">
                                            Hospitals in Rawalpindi
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}


        </>
    );
}
export default Navbar3;







