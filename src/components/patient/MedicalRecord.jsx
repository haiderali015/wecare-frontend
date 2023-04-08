import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function MedicalRecord() {

    const navigate = useNavigate();
    const back = () => {
        navigate("/patienthomepage")
    }
    const [getuserdata, setUserdata] = useState([]);

    const [inpval, setINP] = useState({
        Diagnosis: "",
        Allergies: "",
        Medicines: "",
        Notes: "",
    })

    const token = localStorage.getItem("userToken");
    const decodedToken = jwtDecode(token);
    const userid = decodedToken.userId;

    const getdata = async () => {
        const res = await fetch(`/getprescription/${userid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const data = await res.json();
        console.log(data);
    
        if (res.status === 422 || !data || data.length === 0) {
            console.log("error ");
    
        } else {
            setINP(data[0])
            console.log("get data");
    
        }
    }
    

    useEffect(() => {
        getdata();
        console.log("user id is " + userid + " diagnosis is " + inpval.Diagnosis)

    }, []);



    const getdata2 = async () => {
        const res = await fetch(`/getAppointment/${userid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }

    }

    useEffect(() => {
        getdata2();
    }, [])


    return (
        <Card sx={{ maxWidth: 600, margin: 20 }}>
            <h1 style={{ fontWeight: 100 }}>Prescription</h1>

            <CardMedia
                sx={{ height: 30 }}
            />
            {
                getuserdata.map((element, Id) => {
                    return (
                        <>
                            <h3 className="mt-3">Doctor Name: <span >{element.DoctorName}</span></h3>
                            <h3 className="mt-3">Doctor Fee: <span >{element.DoctorFee}</span></h3>
                            <h3 className="mt-3">Medicine: <span >{element.Medicines}</span></h3>
                            <h3 className="mt-3">Hospital: <span >{element.Hospital}</span></h3>
                            <h3 className="mt-3">Diagnosis: <span >{inpval.Diagnosis}</span></h3>
                            <h3 className="mt-3">Allergies: <span >{inpval.Allergies}</span></h3>
                            <h3 className="mt-3">Notes: <span>{inpval.Notes}</span></h3>


                        </>
                    )
                })
            }


            <CardActions>
                <Button sx={{ fontSize: '1.2rem' }} size="large" onClick={back}>Back</Button>
            </CardActions>
        </Card>
    );
}
