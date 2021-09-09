import Padding from '../components/Padding';
import TextField from '../components/TextField';
import React, { Component } from 'react';
import AuthEnrollCard from '../components/FormComponents/AuthEnrollCard';
import FormActionButton from '../components/FormComponents/FormActionButton';
import Typography from '../components/Typography';
import Wrapper from '../components/FormComponents/Wrapper';
import FormWrapper from '../components/FormComponents/FormCardWrapper';
import Header from '../components/FormComponents/Header';


export default class Signup extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Wrapper id="signup">
        <Header heading="Create An Account"/>
        <FormWrapper>
          <AuthEnrollCard bottomRedirect="/">
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
          </AuthEnrollCard>
        </FormWrapper>
      </Wrapper>
    )
  }
}