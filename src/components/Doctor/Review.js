import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const addresses = ['General Hospital', 'Ferozpur Road', 'Ghazi Chowk', 'Pakistan'];
const payments = [
  { name: 'Allergies', detail: 'dust allergy' },
  { name: 'Notes', detail: 'recommended to goto psyhiotherapist' },
  { name: 'Restrictions', detail: 'Use only boiled water' },
];

export default function Review(props) {
  const products=props.props[0].Medicines;
  const patient=props.props[1];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Prescribtion summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.Name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.Name} secondary={product.Duration +" Days"} />
            <Typography variant="body2">{product.Consumption}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Patient
          </Typography>
          <Typography gutterBottom>{patient.name}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Patient Notes
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}