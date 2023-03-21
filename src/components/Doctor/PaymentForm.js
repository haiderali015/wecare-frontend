import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputRow } from './InputRow';
export default function PaymentForm(props) {
  const [diag, setDiag] = useState();
  const [allg, setAllg] = useState();
  const [notes, setNotes] = useState();
  console.log(props.props);
  const [inputFields, setInputFields] = useState([
    {
      Name: "",
      Duration: "",
      Quantity: "",
    }
  ])
  useEffect(() => {
    props.props[1]({...props.props[0],Medicines:inputFields})
  }, [inputFields]);
  const handleAdd = () => {
    setInputFields([
      ...inputFields,
      {
        Name: "",
        Duration: "",
        Quantity: ""
      }
    ])
  }
  const handleChange = (event, index) => {
    const values = [...inputFields]
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
            onChange={(e) => props.props[1]({...props.props[0],Diagnosis:e.target.value})}
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
            onChange={(e) =>  props.props[1]({...props.props[0],Allergies:e.target.value})}
          />
        </Grid>
        {inputFields.map((item, index) => (
          <InputRow
            inputFields={inputFields}
            set={setInputFields}
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
            onChange={(e) => props.props[1]({...props.props[0],Notes:e.target.value})}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}