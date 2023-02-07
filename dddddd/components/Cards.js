import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import doctor from '../assets/doctor1.jpg';

export default function DCard() {
  return (
    <Card sx={{ maxWidth: 250 ,backgroundColor:"#eaf1f7"}}>
      <CardMedia
        component="img"
        height="150"
        image={doctor}
        alt="doctor"
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Zuhad Ul Hadi
        </Typography>
        <Typography gutterBottom variant="h5" style={{color:"#93a0b4"}} component="div">
          Dermatologist
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Zuhad Ul Hadi is a member of Doctor Asociation and degree from the University of Massachusetts Institute of Technology
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Book Appointment</Button>
      </CardActions>
    </Card>
  );
}