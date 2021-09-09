import Padding from '../components/Padding';
import TextField from '../components/TextField';
import React, { Component } from 'react';
import styled from 'styled-components';
import AuthEnrollCard from '../components/AuthEnrollCard';
import Button from '../components/Button';
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
          <AuthEnrollCard>
            <Padding padding={[0, 0, 20, 0]}>
              <TextField
                id="name"
                placeholder="Name"

              />
            </Padding>
            <Padding padding={[0, 0, 20, 0]}>
              <TextField
                id="password"
                type="password"
                placeholder="Password"
              />
            </Padding>

            <Button fullWidth>
              <Typography type="h5">Log in</Typography> 
            </Button>
          </AuthEnrollCard>
        </FormWrapper>
      </Wrapper>
    )
  }
}