import React, { FC } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { string, object, ref } from 'yup'
import Padding from 'components/Padding';
import TextField from 'components/TextField';
import SlideInCard from 'components/SlideInCard';
import FormActionButton from 'components/FormComponents/FormActionButton';
import Typography from 'components/Typography';
import FullscreenWrapper from 'components/FullscreenWrapper';
import FormWrapper from 'components/FormComponents/FormCardWrapper';
import Header from 'components/Header';
import BottomRedirect from 'components/FormComponents/BottomRedirect';
import Spinner from 'components/Spinner';
import { styleConfig } from 'config';

import { useAppDispatch } from 'hooks/reduxHooks';
import { signup } from 'slices/auth/actions';
// import {  } from 'react-router-dom';
import { SignupValues } from 'types/auth';
import { useNavigate } from 'react-router-dom';

const SignupSchema = object({
  username: string()
    .required('Username is required')
    .min(5, "Username should contain at least 5 characters"),
  password: string()
    .required('Password is required')
    .min(8, "Password should contain at least 8 characters"),
  confirm_password: string()
    .required('This is required')
    .oneOf([ref('password')], "Passwords should match.")
})

const initialValues: SignupValues = {
  username: "",
  password: "",
  confirm_password: ""
}


const Signup: FC<{}> = (props) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <FullscreenWrapper id="signup" color="primary">
      <Header
        noSidePaddingDesktop
        width="100%"
        height="25%"
        type="primary"
        firstText="Hey there 👋🏾"
        outstandingText="Create An Account"
      />
      <FormWrapper>
        <SlideInCard height="100%">
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              // actions.setSubmitting(false);

              dispatch(signup(values))
                .then((a) => {
                  actions.setSubmitting(false);
                  navigate('/set-email', { replace: true })
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

                  <Padding padding={[0, 0, 20, 0]}>
                    <TextField
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      error={Boolean(touched.confirm_password && errors.confirm_password)}
                      helperText={touched.confirm_password && errors.confirm_password}
                    />
                  </Padding>

                  <FormActionButton type="submit" disabled={isSubmitting}>
                    {
                      !isSubmitting
                        ? <Typography type="h5" color={styleConfig.color.white}>Sign up</Typography>
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
      </FormWrapper>
    </FullscreenWrapper>
  )
}

export default Signup;