import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';


import { Container } from "@material-ui/core";
import Navbar2 from "../Navbar2";
import Footer from "../Footer";


export default function App() {


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const invoiceItems = [
    {
      qty: 1,
      price: 84.99,
      subtotal: 84.99,
      currency: "PKR",
      name: "Panadol"
    },
    {
      qty: 2,
      price: 99.99,
      subtotal: 199.98,
      currency: "PKR",
      name: "Augmentun"
    },
    {
      qty: 1,
      price: 19.99,
      subtotal: 19.99,
      currency: "PKR",
      name: "Infacol"
    }

  ];


  console.log("jisoo", Object.keys(invoiceItems[0]));
  console.log("lisa", invoiceItems.map((item) => item.name).sort());
  const [goto, setgoto] = useState(false);
  if (goto) {
    return <Navigate to="/Pharmacy" />
  }
  const printscreen=()=>{
    window.print();

  }

  return (
    <>
    <Navbar2/>
      <Box height={40} />

      <Container maxWidth="md">
        <h2 style={{ textAlign: "center" }}>My Profile</h2>
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontSize: "18px" }}>{Object.keys(invoiceItems[0])[4]}</TableCell>
                  <TableCell align="right" style={{ fontSize: "18px" }}>
                    {Object.keys(invoiceItems[0])[0]}
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: "18px" }}>
                    {Object.keys(invoiceItems[0])[1]}
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: "18px" }}>
                    {Object.keys(invoiceItems[0])[2]}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {invoiceItems
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .filter((item) => item.subtotal > 0)
                  .sort((a, b) => (a.name > b.name ? 1 : -1))
                  .map((item) => {
                    return (
                      <TableRow key={item.name}>
                        <TableCell style={{ fontSize: "18px" }}>{item.name}</TableCell>
                        <TableCell style={{ fontSize: "18px" }} align="right">{item.qty} </TableCell>
                        <TableCell style={{ fontSize: "18px" }} align="right">
                          {" "}
                          {(item.price * 0.84).toFixed(2)}{" "}
                        </TableCell>
                        <TableCell align="right" style={{ fontSize: "18px" }}>
                          {(item.subtotal * 0.84).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <strong style={{ fontSize: "18px" }}>Total Amount in PKR</strong>
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: "18px" }}>
                    {invoiceItems
                      .map((item) => item.subtotal * 0.84)
                      .reduce((acc, value) => acc + value)
                      .toFixed(2)}{" "}
                  </TableCell>
                  
                </TableRow>
              </TableBody>

            </Table>
            {/* <Button type="submit" variant="contained" onClick={() => { setgoto(true) }} >Back to Dashboard</Button> */}

            
          </TableContainer>
          

        </Paper>
        <div className='align-right'><Button variant="contained" color="primary" onClick={() => { printscreen() }} >Print Bill</Button></div>
            <div className='align-left'><Button variant="outlined" color="primary" onClick={() => { setgoto(true) }} >Back to Dashboard</Button></div>

      </Container>
      <Footer/>
    </>

  );
}
