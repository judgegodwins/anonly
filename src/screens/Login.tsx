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
import { styleConfig } from '../config';

export default class Login extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <FullscreenWrapper id="login" color="primary">
        <Header
          height="25%"
          type="primary"
          firstText="Hey there 👋🏾"
          outstandingText="Log In"
        />
        {/* <FormWrapper> */}
          <SlideInCard height="75%">
            <Padding padding={[0, 0, 20, 0]}>
              <TextField
                id="username"
                placeholder="Userame"
              />
            </Padding>
            <Padding padding={[0, 0, 20, 0]}>
              <TextField
                id="password"
                type="password"
                placeholder="Password"
              />
            </Padding>

            <FormActionButton>
              <Typography type="h5" color={styleConfig.color.white}>Log in</Typography> 
            </FormActionButton>

            <BottomRedirect 
              to="/signup"
              text="Don't have an account?"
              linkText="Sign up"
            />
          </SlideInCard>
        {/* </FormWrapper> */}
      </FullscreenWrapper>
    )
  }
}