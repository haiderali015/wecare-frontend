import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Navbar2 from '../Navbar2';
import { Drawer ,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Wecare
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Patient Information', 'Prescription details', 'Review your prescription'];



const theme = createTheme();

export default function Doctor() {
  const [patient,setPatient]=React.useState("");
  const {id}=1;
  const [app,setApp]=React.useState([]);
  const [data,setData]=React.useState({id:1,Diagnosis:"",Allergies:"",Medicines:[{Name:"",Quantity:"",Duration:""}],Notes:""});
  const saveapp= async ()=>
  {
      const res = await fetch(`http://localhost:8001/appointments/1`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            data
        })
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
          console.log("error ");
      } else {
      }
  }
  const getAppoints= async ()=>
  {
      const res = await fetch(`http://localhost:8001/appointments/1`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          },
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
          console.log("error ");
      } else {
          setApp(data);
      }
  }
React.useEffect(()=>{
  getAppoints();
},[]);
  const [activeStep, setActiveStep] = React.useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm props={patient}/>;
      case 1:
        return <PaymentForm props={[data,setData]}/>;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar2 />
      <Drawer
        open={patient==""?true:false}
      // onClose={toggleDrawer(anchor, false)}
      >
        <Box
          sx={{ width:250 }}
          role="presentation"
          // onClick={toggleDrawer(anchor, false)}
          // onKeyDown={toggleDrawer(anchor, false)}
        >
          <List style={{fontSize:"24px"}} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {app.map((text, index) => (
             new Date(text.Time).getDate() ==new Date().getDate() ?
             <ListItem key={text.patient} disablePadding>
             <ListItemButton onClick={()=>{setPatient(text.patient)}}>
               <ListItemText primary={text.patient.toUpperCase()} />
               <span>{new Date(text.Time).getHours()}:00</span>
             </ListItemButton>
           </ListItem>:<></>
            ))}
          </List>
        </Box>
      </Drawer>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Patient Information
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Checkup done
              </Typography>
              <Typography variant="subtitle1">
                Your medical report number is #2001539. We have emailed your medical report
                confirmation.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Finalize' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}