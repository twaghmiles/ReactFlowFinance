import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';

function PersonalDetailsForm() {
  return (
    <React.Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="preferredName"
            name="preferredName"
            label="Preferred Name"
            fullWidth
            autoComplete="preferredName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="idNo"
            name="idNo"
            label="ID Number"
            fullWidth
            autoComplete="idNo"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="contactNo"
            name="contactNo"
            label="Contact Number"
            fullWidth
            autoComplete="contactNo"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="race"
            name="race"
            label="Race"
            fullWidth
            autoComplete="race"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="maritalStatus"
            select
            label="Marital Status"
            value={10}
            fullWidth
          >
            <MenuItem value={10}>Married</MenuItem>
            <MenuItem value={20}>Single</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="reason"
            name="reason"
            label="Reason For Loan"
            fullWidth
            autoComplete="reason"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="I consent FlowFinance to process my personal information and access my credit score."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PersonalDetailsForm;
