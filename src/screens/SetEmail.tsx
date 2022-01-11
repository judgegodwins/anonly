import React, { Component, FC, useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { serializeError } from 'serialize-error';
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
import Dialog from 'components/Dialog';


import { LoginValues, SetEmailValues } from 'types/auth';
import { styleConfig } from 'config';
import { useAppDispatch } from 'hooks/reduxHooks';
import { login } from 'slices/auth/actions';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import AuthService from 'services/AuthService';
import { pushError } from 'slices/error';
import { removeProposedEmail, setProposedEmail } from 'helpers/authHelpers';
import CountdownButton from 'components/CountdownButton';

const Schema = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid format'),
})


const SetEmail: FC<{}> = (props) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);

  const initialValues: SetEmailValues = { email: "" };

  return (
    <FullscreenWrapper id="login" color="primary">
      <Header
        noSidePaddingDesktop
        height="25%"
        type="primary"
        firstText="One last thing"
        outstandingText="Link your email"
      />
      <SlideInCard height="75%">
        <Formik
          initialValues={initialValues}
          validationSchema={Schema}
          onSubmit={(values, actions) => {
            AuthService.setEmail(values)
              .then(() => {
                actions.setSubmitting(false)

                setEmailSent(true);
                setProposedEmail(values.email);
              })
              .catch((e: Error) => {
                dispatch(pushError(serializeError(e)));
                actions.setSubmitting(false);
              })
            // actions.setSubmitting(false);
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
              <>
                <form onSubmit={handleSubmit}>
                  <Padding padding={[0, 0, 20, 0]}>
                    <TextField
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={values.email}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Padding>

                  <FormActionButton type="submit" disabled={isSubmitting}>
                    {
                      !isSubmitting
                        ? <Typography type="h5" color={styleConfig.color.white}>Link Email</Typography>
                        : <Spinner size={20} />
                    }
                  </FormActionButton>

                  <FormActionButton
                    as={Link}
                    to="/"
                    variant="secondary"
                    style={{ marginTop: 20 }}
                  >
                    I don't want to link my email
                  </FormActionButton>

                </form>
                {
                  emailSent &&
                  <Dialog
                    primaryButtonText="OK"
                    primaryClick={(e) => {
                      navigate('/', {replace: true})
                    }}
                    secondaryButton={() => (
                      <Button 
                        as={CountdownButton}
                        time={Date.now() + 60000}
                        variant="secondary"
                      />
                    )}
                  // secondaryClick={(e) => {
                  //   setEmailSent(false);
                  //   removeProposedEmail();
                  // }}
                  />
                }
              </>
            )
          }}
        </Formik>
      </SlideInCard>
    </FullscreenWrapper>
  )

}

export default SetEmail;