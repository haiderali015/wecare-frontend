import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function GetUserPresc() {

    const [getuserdata, setUserdata] = useState([]);

    const getdata2 = async () => {
        const res = await fetch(`/getprescriptiondown/${1}`, {
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
                            <h3 className="mt-3">Medicine: <span >{element.Medicines}</span></h3>
                            <h3 className="mt-3">Diagnosis: <span >{element.Diagnosis}</span></h3>
                            <h3 className="mt-3">Allergies: <span >{element.Allergies}</span></h3>
                            <h3 className="mt-3">Notes: <span>{element.Notes}</span></h3>


                        </>
                    )
                })
            }
        </Card>
    );
}
