import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputRow } from './InputRow';
export default function PaymentForm() {
  const [inputFields, setInputFields] = useState([
    {
      title: "",
      image: "",
      description: "",
      location: ""
    }
  ])
  const handleAdd = () => {
    setInputFields([
      ...inputFields,
      {
        title: "",
        description: "",
        location: ""
      }
    ])
  }
  const handleChange = (event, index) => {
    const values = [...inputFields]
    console.log("momo", values)
    values[index][event.target.name] = event.target.value

    setInputFields(values)
  }
  const handleRemove = (index) => {
    if (inputFields.length !== 1) {
      const values = [...inputFields]
      values.splice(index, 1)
      setInputFields(values)
    }
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Prescribtion Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Diagnosis"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Allergies"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        {inputFields.map((item, index) => (
                <InputRow
                  inputFields={inputFields}
                  index={index}
                  item={item}
                  handleChange={handleChange}
                  handleRemove={handleRemove}
                  handleAdd={handleAdd}
                />
            ))}

        
        <Grid item xs={12}>
          <TextField
            required
            id="cvv"
            label="Notes"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}