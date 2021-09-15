import FullscreenWrapper from '../components/FullscreenWrapper';
import React, { Component } from 'react';
import Header from '../components/Header';
import { Link, RouteComponentProps } from 'react-router-dom';
import SlideInCard from '../components/SlideInCard';
import Typography from '../components/Typography';
import Padding from '../components/Padding';
import { styleConfig } from '../config';
import TextAreaBase from '../components/TextArea';
import Button from '../components/Button';
import SuccessResponse from 'components/SendMessageComponents/SuccessResponse';

interface Params {
  username: string;
}

interface Props extends RouteComponentProps<Params> { }

export default class SendMessage extends Component<Props, { submitted: boolean }> {

  constructor(props: Props) {
    super(props);

    this.state = {
      submitted: false
    }
  }

  render() {
    return (
      <FullscreenWrapper color="secondary">
        <Header
          height="25%"
          type="secondary"
          firstText="You're sending a message to"
          outstandingText={this.props.match.params.username}
        />
        {
          !this.state.submitted

            ? <SlideInCard>
              <form style={{ width: 'inherit', height: 'inherit' }}>
                <Padding padding={[0, 0, 15, 0]}>
                  <Typography
                    type="outstand-p"
                    color={styleConfig.color.textSecondary}
                  >Your message</Typography>
                </Padding>
                <TextAreaBase height="200px" width="100%" />
                <Button onClick={() => this.setState({ submitted: true })} style={{ float: 'right', marginTop: '15px' }}>
                  Send
                </Button>
              </form>
            </SlideInCard>

            : <SlideInCard>
              <SuccessResponse />
            </SlideInCard>
        }
      </FullscreenWrapper>
    )
  }

}
