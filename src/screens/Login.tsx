import React, { Component, FC } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
import Padding from 'components/Padding';
import TextField from 'components/TextField';
import SlideInCard from 'components/SlideInCard';
import FormActionButton from 'components/FormComponents/FormActionButton';
import Typography from 'components/Typography';
import FullscreenWrapper from 'components/FullscreenWrapper';
import Header from 'components/Header';
import BottomRedirect from 'components/FormComponents/BottomRedirect';
import Spinner from 'components/Spinner';

import { LoginValues } from 'types/auth';
import { styleConfig } from 'config';
import { useAppDispatch } from 'hooks/reduxHooks';
import { login } from 'slices/auth/actions';

const LoginSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
})

const Login: FC<{}> = (props) => {

  const dispatch = useAppDispatch();

  const initialValues: LoginValues = {
    username: "",
    password: ""
  }

  return (
    <FullscreenWrapper id="login" color="primary">
      <Header
        noSidePaddingDesktop
        height="25%"
        type="primary"
        firstText="Hey there 👋🏾"
        outstandingText="Log In "
      />
      <SlideInCard height="75%">
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            // actions.setSubmitting(false);

            dispatch(login(values))
              .then((a) => {
                actions.setSubmitting(false);
              })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Padding padding={[0, 0, 20, 0]}>
                  <TextField
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}
                    error={Boolean(touched.username && errors.username)}
                    helperText={touched.username && errors.username}
                    value={values.username}
                  />
                </Padding>
                <Padding padding={[0, 0, 20, 0]}>
                  <TextField
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Padding>

                <FormActionButton type="submit" disabled={isSubmitting}>
                  {
                    !isSubmitting
                      ? <Typography type="h5" color={styleConfig.color.white}>Log in</Typography>
                      : <Spinner size={20} />
                  }
                </FormActionButton>

                <BottomRedirect
                  to="/signup"
                  text="Don't have an account?"
                  linkText="Sign up"
                />
              </form>
            )
          }}
        </Formik>
      </SlideInCard>
    </FullscreenWrapper>
  )

}

export default Login;