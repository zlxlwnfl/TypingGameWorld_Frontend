import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import TextField from '@mui/material/TextField';

function RFTextField(
  props: FieldRenderProps<string, HTMLElement>,
) {
  const {
    autoComplete,
    input,
    InputProps,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <TextField
      error={Boolean(!!touched && (error || submitError))}
      {...input}
      {...other}
      InputProps={{
        inputProps: {
          autoComplete,
        },
        ...InputProps,
      }}
      helperText={touched ? error || submitError : ''}
      variant="standard"
    />
  );
}

export default RFTextField;
