import styled from "styled-components";
import { FC } from "react";
import { styleConfig } from "config";
import Typography from "./Typography";

interface DialogProps {
  open: boolean;
  title?: string;
  handleClose?: () => any;
}

const DialogWrapper = styled.div<Pick<DialogProps, "open">>`
  z-index: 1000;
  width: 100%;
  outline: 0px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.open ? "block" : "none")};
`;

const DialogBaseWrapper = styled.div`
  z-index: 1500;
  position: absolute;
  padding: ${styleConfig.screenPadding.mobile};
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  max-height: calc(100% - 64px);
  max-width: 600px;
`;

const DialogBase = styled.div`
  z-index: inherit;
  position: relative;
  background-color: rgb(255, 255, 255);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 8px;
  box-shadow: rgb(145 158 171 / 20%) 0px 11px 15px -7px,
    rgb(145 158 171 / 14%) 0px 24px 38px 3px,
    rgb(145 158 171 / 12%) 0px 9px 46px 8px;
  padding: ${styleConfig.screenPadding.mobile};
  width: fit-content;
  height: fit-content;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 64px);
  max-width: 600px;
`;

const Backdrop = styled.div`
  position: relative;
  z-index: inherit;
  width: 100%;
  outline: 0px;
  height: 100%;
  width: 100%;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background: linear-gradient(
    75deg,
    rgba(22, 28, 36, 0.48) 0%,
    rgb(22, 28, 36) 100%
  );
`;

const Dialog: FC<DialogProps> = ({ children, title, open, ...rest }) => (
  <DialogWrapper open={open}>
    <Backdrop onClick={rest.handleClose} />
    <DialogBaseWrapper>
      <DialogBase>
        {title && <Typography type="h5">{title}</Typography>}
        {children}
      </DialogBase>
    </DialogBaseWrapper>
  </DialogWrapper>
);

export default Dialog;
