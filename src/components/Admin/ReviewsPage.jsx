import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const ReviewsPage = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/Admin");
  };

  const [reviewData, setReviewData] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem("userToken");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;

  const getReviewData = async () => {
    try {
      const res = await fetch(`/getReviews/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.status === 201) {
        const data = await res.json();
        setReviewData(data);
      } else {
        console.log("Error retrieving review data.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <Card sx={{ maxWidth: 600, margin: 20 }}>
      <Typography variant="h1" sx={{ fontWeight: 100 }}>
        Reviews
      </Typography>

      <CardMedia sx={{ height: 30 }} />

      {reviewData.length > 0 ? (
  reviewData.map((review, index) => (
    <React.Fragment key={index}>
      <Typography variant="h5" className="mt-3">
        Patient: <span>{review.name}</span>
      </Typography>
      <Typography variant="h5" className="mt-3">
        Review:{" "}
        <span
          style={{
            color: review.reviewtype === "positive" || review.reviewtype==="Positive" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {review.reviewtype}
        </span>
      </Typography>
      <Typography variant="h5" className="mt-3">
        Comments: <span>{review.comment}</span>
      </Typography>
      <br/>
      <br/>
      <br/>
    </React.Fragment>
  ))
) : (
  <Typography variant="h3" className="mt-3">
    No reviews found.
  </Typography>
)}

      <CardActions>
        <Button sx={{ fontSize: '1.2rem' }} size="large" onClick={back}>
          Back
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReviewsPage;
