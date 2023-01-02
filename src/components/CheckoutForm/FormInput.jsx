import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
    const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
        <Controller
            defaultValue=""
            control={control}
            name={name}
            // as={TextField}
            // fullWidth 
            // label={label}
            // required={required}
            render = {({ field})=> (
              <TextField
                  fullWidth
                  label={label}
                  required
              />
          )}
        />
    </Grid>
  )
}

export default FormInput