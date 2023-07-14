import React from 'react';
import gif from '../assets/Social media (3).gif';
import Box from '@mui/material/Box';
 
import { Grid, TextField, Button } from '@mui/material';

export default function Contactus() {
  return (
    <div class="shadow p-3 mb-5 bg-body rounded">
    <div style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <img src={gif} alt="" style={{ width: '100%', maxWidth: '400px' }} />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="formcontact mt-4">
            <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField label="Name" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Phone" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Place" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Email" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Grid>
    </Grid>
          
            </div>
        
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
