import styled from 'styled-components';
import { styleConfig } from 'config';
import Check from 'svg/Check.svg';
import Padding from 'components/Padding';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const CompleteIndicatorCover = styled.div`
  background: #F0F2F4;
  border-radius: 10px;
  border: 2px solid ${styleConfig.color.adjustPrimary};
  display: flex;
  align-items: center;
  padding: 12px;
`

const TickBoxBase = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${styleConfig.color.adjustPrimary};
  border-radius: 5px;
`;

const CustomTypography = styled.div``;

const CompleteIndicator = () => {
  return (
    <CompleteIndicatorCover>
      <TickBoxBase>
        <Check />
      </TickBoxBase>
      <Padding padding={[0, 0, 0, 15]}>
        <Typography type="p" style={{ fontWeight: 500 }}>
          Your message has been sent
        </Typography>
      </Padding>
    </CompleteIndicatorCover>
  )
}

const SuccessResponse = () => (
  <Container>
    <CompleteIndicator />
    {/* <Padding padding={[20, 0, 20, 0]}> */}
    <Typography component="h2" type="h2">
      Start receiving anonymous messages from your friends.
    </Typography>
    {/* </Padding> */}
    <Padding padding={[20, 0, 20, 0]}>
      <Button style={{ marginTop: 10 }} as={Link} to="/signup">Get your link</Button>
    </Padding>
  </Container>
)

export default SuccessResponse;