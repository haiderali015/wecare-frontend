import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate, useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { TextField, Button } from '@mui/material';

export default function Reviewdoc() {

    const navigate = useNavigate();
    const back = () => {
        navigate("/patienthomepage")
    }
    // const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");
    const {id}=useParams();


    const handleSubmit = () => {



        getdata2();
        back();

    }
    const getdata2 = async () => {
        console.log("reached to API");     
           const res = await fetch(`http://localhost:5000/sentiment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text:comment
            })
        });

        
        const data = await res.json();
        //save this to db
        const res1 = await fetch(`/savereview`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,comment,type:data.result
            })
        });
        const data1 = await res1.json();


        console.log(data,data1);

        // if (res.status === 422 || !data) {
        //     console.log("error ");

        // } else {
        //     setUserdata(data)
        //     console.log("get data");

        // }
    }

    useEffect(() => {
        // getdata2();
    }, [])


    return (
        <Card sx={{ maxWidth: 600, margin: 20 }}>
            <h1 style={{ fontWeight: 100 }}>Review</h1>
            {/* <CardMedia
                sx={{ height: 30 }}
            /> */}
            {/* <form onSubmit={handleSubmit}> */}
            {/* <FormControl component="fieldset" fullWidth> */}
            {/* <FormGroup> */}
            {/* <Rating
                            name="rating"
                            value={rating}
                            onChange={(e, newValue) => setRating(newValue)}
                            size="large"
                        /> */}
            <TextField
                label="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                multiline
                rows={4}
                fullWidth
                mb={2}
            />
            {/* </FormGroup> */}
            {/* </FormControl> */}

            {/* </form> */}

            <CardActions>
                <Button m={2} type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <Button sx={{ fontSize: '1.2rem' }} size="large" onClick={back}>Back</Button>
            </CardActions>
        </Card>
    );
}
