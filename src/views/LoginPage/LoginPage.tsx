import * as React from 'react';
import { Field, Form } from 'react-final-form';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '../../components/Typography/Typography';
import AppForm from '../../components/Form/AppForm';
import { required } from '../../components/Form/validation';
import RFTextField from '../../components/Form/RFTextField';
import FormButton from '../../components/Form/FormButton';
import Header from '../../components/Header/Header';

function HomePage() {
  const [sent, setSent] = React.useState(false);

  const validate = (values: { [index: string]: string }) => {
    const errors = required(['id', 'password'], values);

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <React.Fragment>
      <Header />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Login
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              to="/join"
            >
              Join here
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2 }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="id"
                autoFocus
                component={RFTextField}
                disabled={sent}
                fullWidth
                label="ID"
                margin="normal"
                name="id"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={sent}
                size="large"
                color="secondary"
                fullWidth
              >
                { sent ? 'In progress…' : 'Join'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
    </React.Fragment>
  );
}

export default HomePage;
