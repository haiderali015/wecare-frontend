import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function MedicalRecord() {
  const navigate = useNavigate();
  const back = () => {
    navigate('/patienthomepage');
  };

  const [getuserdata, setUserdata] = useState([]);
  const { id } = useParams();

  const token = localStorage.getItem('userToken');
  const decodedToken = jwtDecode(token);
  const userid = decodedToken.userId;

  const getdata2 = async () => {
    const res = await fetch(`/getprescription/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log('error');
    } else {
      setUserdata(data[0]);
      console.log('get data');
    }
  };

  useEffect(() => {
    getdata2();
  }, []);

  return (
    <Card sx={{ maxWidth: 600, margin: 20 }}>
      <h1 style={{ fontWeight: 100 }}>Prescription</h1>

      <CardMedia sx={{ height: 30 }} />

      {getuserdata ? (
        <>
          <h3 className="mt-3">
            Doctor Name: <span>{getuserdata.DoctorName}</span>
          </h3>
          <h3 className="mt-3">
            Doctor Fee: <span>{getuserdata.DoctorFee}</span>
          </h3>
          <h3 className="mt-3">
            Medicine: <span>{getuserdata.Medicines}</span>
          </h3>
          <h3 className="mt-3">
            Hospital: <span>{getuserdata.Hospital}</span>
          </h3>
          <h3 className="mt-3">
            Diagnosis: <span>{getuserdata.Diagnosis}</span>
          </h3>
          <h3 className="mt-3">
            Allergies: <span>{getuserdata.Allergies}</span>
          </h3>
          <h3 className="mt-3">
            Notes: <span>{getuserdata.Notes}</span>
          </h3>
        </>
      ) : (
        <Typography variant="h3" className="mt-3">
          Oops! <br/>
          You have'nt visited Doctor yet.
        </Typography>
      )}

      <CardActions>
        <Button sx={{ fontSize: '1.2rem' }} size="large" onClick={back}>
          Back
        </Button>
      </CardActions>
    </Card>
  );
}
