import FullscreenWrapper from '../components/FullscreenWrapper';
import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { RouteComponentProps } from 'react-router-dom';
import SlideInCard from '../components/SlideInCard';
import Typography from '../components/Typography';
import Padding from '../components/Padding';
import { styleConfig } from '../config';
import TextAreaBase from '../components/TextArea';
import Button from '../components/Button';

interface Params {
  username: string;
}

interface Props extends RouteComponentProps<Params> { }

export default class SendMessage extends Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <FullscreenWrapper color="secondary">
        <Header

          type="secondary"
          firstText="You're sending a message to"
          outstandingText={this.props.match.params.username}
        />
        <SlideInCard height="75%">
          <form style={{ width: 'inherit', height: 'inherit' }}>
            <Padding padding={[0, 0, 15, 0]}>
              <Typography
                type="outstand-p"
                color={styleConfig.color.textSecondary}
              >Your message</Typography>
            </Padding>
            <TextAreaBase height="100%" width="100%" />
            <Button style={{ float: 'right', marginTop: '15px' }}>
              Send
            </Button>
          </form>
        </SlideInCard>
      </FullscreenWrapper>
    )
  }

}