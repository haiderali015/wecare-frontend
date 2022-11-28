import React, { useEffect, useState } from "react";
import Homepage from "./Homepage";
import "./HomePage.css";
import Patientregister from './Patientregister'

function WelcomePage() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 4000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner" >
              <span style={{  fontFamily: "Lucida Handwriting", fontSize:"100px"}}>WeCare</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed"></div>
          )}
        </>
      ) : (
        <>
        <Homepage/>
        </>
      )}
    </>
  );
}

export default WelcomePage;