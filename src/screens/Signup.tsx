import Padding from '../components/Padding';
import TextField from '../components/TextField';
import React, { Component } from 'react';
import SlideInCard from '../components/SlideInCard';
import FormActionButton from '../components/FormComponents/FormActionButton';
import Typography from '../components/Typography';
import FullscreenWrapper from '../components/FullscreenWrapper';
import FormWrapper from '../components/FormComponents/FormCardWrapper';
import Header from '../components/Header';
import BottomRedirect from '../components/FormComponents/BottomRedirect';


export default class Signup extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <FullscreenWrapper id="signup" color="primary">
        <Header
          type="primary"
          firstText="Hey there 👋🏾"
          outstandingText="Create An Account"
        />
        <FormWrapper>
          <SlideInCard>
            <Padding padding={[0, 0, 20, 0]}>
              <TextField
                id="username"
                name="username"
                placeholder="Username"
              />
            </Padding>
            <Padding padding={[0, 0, 20, 0]}>
              <TextField
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
            </Padding>

            <Padding padding={[0, 0, 20, 0]}>
              <TextField
                id="confirm_password"
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
              />
            </Padding>

            <FormActionButton>
              <Typography type="h5">Log in</Typography>
            </FormActionButton>

            <BottomRedirect
              to="/login"
              linkText="Log in"
              text="Have an account already?"
            />
          </SlideInCard>
        </FormWrapper>
      </FullscreenWrapper>
    )
  }
}