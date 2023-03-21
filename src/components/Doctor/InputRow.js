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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    id="expDate"
                    label="Duration"
                    fullWidth
                    autoComplete="cc-exp"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    required
                    onChange={handleChange}
                    id="cvv"
                    label="consumption Ex: 3 Times a day/8 hourly"
                    fullWidth
                    autoComplete="cc-csc"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} >
                <div>
                    <IconButton onClick={handleRemove}>
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
