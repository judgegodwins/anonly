import Padding from '../components/Padding';
import TextField from '../components/TextField';
import React, { Component } from 'react';
import AuthEnrollCard from '../components/FormComponents/AuthEnrollCard';
import FormActionButton from '../components/FormComponents/FormActionButton';
import Typography from '../components/Typography';
import Wrapper from '../components/FormComponents/Wrapper';
import FormWrapper from '../components/FormComponents/FormCardWrapper';
import Header from '../components/FormComponents/Header';


export default class Login extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Wrapper id="login">
        <Header heading="Log In"/>
        <FormWrapper>
          <AuthEnrollCard bottomRedirect="/signup">
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
              <Typography type="h5">Log in</Typography> 
            </FormActionButton>
          </AuthEnrollCard>
        </FormWrapper>
      </Wrapper>
    )
  }
}