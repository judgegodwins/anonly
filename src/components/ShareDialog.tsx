import { styleConfig } from "config";
import { useShareDialog } from "contexts/shareContext";
import { FC } from "react";
import styled from "styled-components";
import Button from "./Button";
import Dialog from "./Dialog";
import Padding from "./Padding";

const MarginedButton = styled(Button)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const ShareDialog: FC<{}> = () => {
  const { open, closeDialog } = useShareDialog();
  const padding = styleConfig.screenPadding.mobile;

  return (
    <Dialog open={open} handleClose={closeDialog} title="Share Link">
      <Padding padding={`${padding} 0 0 0`}>
        <MarginedButton bg="#0f0">Share on WhatsApp</MarginedButton>
        <MarginedButton bg="#7c79fc">Share on Facebook</MarginedButton>
        <MarginedButton bg="#f5085b">Share on Instagram</MarginedButton>
      </Padding>
    </Dialog>
  );
};
