import styled, { AnyStyledComponent } from 'styled-components';
import { FC, MouseEventHandler } from 'react';
import { styleConfig } from 'config';
import Typography from './Typography';
import Button from './Button';

interface DialogProps {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryClick?: MouseEventHandler<HTMLButtonElement>;
  secondaryClick?: MouseEventHandler<HTMLButtonElement>;
  primaryButton?: () => JSX.Element | AnyStyledComponent;
  secondaryButton?: () => JSX.Element | AnyStyledComponent;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: ${styleConfig.screenPadding.mobile};
  z-index: 1000;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogBase = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: ${styleConfig.screenPadding.mobile};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dialog: FC<DialogProps> = (props) => (
  <Wrapper>
    <DialogBase>
      <Typography component="p" type="h5">
        An email containing a verification link has been sent to your inbox.
      </Typography>
      <ButtonContainer>
        {
          (props.secondaryButton && props.secondaryButton())
          || <Button onClick={props.secondaryClick} variant="secondary">
            {props.secondaryButtonText}
          </Button>
        }
        {
          (props.primaryButton && props.primaryButton())
          || <Button onClick={props.primaryClick}>
            {props.primaryButtonText}
          </Button>
        }
      </ButtonContainer>
    </DialogBase>
  </Wrapper>
)

export default Dialog;