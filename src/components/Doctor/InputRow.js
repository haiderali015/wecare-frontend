import { IconButton, Stack, TextField } from "@mui/material"
import React, { useState } from 'react';
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"
import Grid from "@mui/material/Grid";
export const InputRow = ({
    index,
    item,
    handleChange,
    handleRemove,
    handleAdd,
    values,
    inputFields
}) => {
    return (
        <>
            <Grid item xs={12} md={6}>
                <TextField
                    required
                    name={"Name"}
                    onChange={(e)=>handleChange(e,index)}
                    id="cardName"
                    label="Medicine Name"
                    fullWidth
                    autoComplete="cc-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    required
                    onChange={(e)=>handleChange(e,index)}

                    name={"Quantity"}
                    id="cardNumber"
                    label="Quantity"
                    fullWidth
                    autoComplete="cc-number"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    required
                    onChange={(e)=>handleChange(e,index)}

                    id="expDate"
                    name={"Duration"}
                    label="Duration"
                    fullWidth
                    autoComplete="cc-exp"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    required
                    onChange={(e)=>handleChange(e,index)}
                    id="cvv"
                    label="consumption Ex: 3 Times a day/8 hourly"
                    name={"Consumption"}
                    fullWidth
                    autoComplete="cc-csc"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} >
                <div>
                    <IconButton onClick={()=>handleRemove(index)}>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={handleAdd}>
                        <AddIcon />
                    </IconButton>
                </div>
            </Grid>
        </>
    )
}
