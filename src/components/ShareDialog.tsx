import { styleConfig } from "config";
import { useShareDialog } from "contexts/shareContext";
import { useAppSelector } from "hooks/reduxHooks";
import { FC } from "react";
import styled from "styled-components";
import Button from "./Button";
import Dialog from "./Dialog";
import Padding from "./Padding";

const MarginedButton = styled(Button)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ShareDialog: FC<{}> = () => {
  const { open, closeDialog } = useShareDialog();
  const user = useAppSelector(({ auth }) => auth.user);
  const padding = styleConfig.screenPadding.mobile;

  return (
    user && (
      <Dialog open={open} handleClose={closeDialog} title="Share Link">
        <Padding padding={`${padding} 0 0 0`}>
          <MarginedButton
            bg="#0f0"
            as="a"
            href={encodeURI(
              `https://api.whatsapp.com/send?text=Write an anonymous message to me. I won't know who wrote it ❤️ \n ${window.location.origin}/m/${user.username}`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on WhatsApp
          </MarginedButton>
          <MarginedButton
            bg="#7c79fc"
            as="a"
            href={`https://web.facebook.com/sharer/?u=${window.location.origin}/m/${user.username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on Facebook
          </MarginedButton>
          <MarginedButton
            as="a"
            bg={styleConfig.color.primary}
            onClick={() => {
              if (navigator.clipboard)
                navigator.clipboard.writeText(
                  `${window.location.origin}/m/${user.username}`
                );
            }}
          >
            Copy link
          </MarginedButton>
        </Padding>
      </Dialog>
    )
  );
};
