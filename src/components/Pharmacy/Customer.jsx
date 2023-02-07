import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from './Sidebar';


const CalculateBill = () => {
  return (

    <>
    <h1 style={{textAlign:"center", fontWeight:"550"}}>Reciept</h1>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell  style={{fontSize:"12px", fontWeight:"550"}}colSpan={3}>
              Bill# <br/> CounterSale
            </TableCell>
            <TableCell align="right" style={{fontSize:"12px", fontWeight:"550"}}>Date : 1/19/2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{fontSize:"14px", fontWeight:"550"}}>Medicine</TableCell>
            <TableCell align="right" style={{fontSize:"14px", fontWeight:"550"}}>Qty.</TableCell>
            <TableCell align="right" style={{fontSize:"14px", fontWeight:"550"}}>Unit</TableCell>
            <TableCell align="right" style={{fontSize:"14px", fontWeight:"550"}}>Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell style={{fontSize:"12px", fontWeight:"550"}}>Panadol</TableCell>
              <TableCell align="right" style={{fontSize:"12px", fontWeight:"550"}}>3</TableCell>
              <TableCell align="right" style={{fontSize:"12px", fontWeight:"550"}}>10mg</TableCell>
              <TableCell align="right" style={{fontSize:"12px", fontWeight:"550"}}>200</TableCell>
            </TableRow>
          

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2} style={{fontSize:"12px", fontWeight:"550"}}>Subtotal</TableCell>
            <TableCell align="right" style={{fontSize:"12px", fontWeight:"550"}}>1000</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell colSpan={2} style={{fontSize:"12px", fontWeight:"550"}}>Total</TableCell>
            <TableCell align="right" style={{fontSize:"12px", fontWeight:"550"}}>1 Lakh</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default CalculateBill