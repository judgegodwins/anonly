import Button from "components/Button";
import { styleConfig } from "config";
import { useShareDialog } from "contexts/shareContext";
import { FC } from "react";
import styled from "styled-components";

const DesktopBarBottomBase = styled.div`
  width: 100%;
  padding: ${styleConfig.screenPadding.mobile};
  position: fixed;
  bottom: 0;
  left: 0;
`;

const DesktopBarBottom: FC<{}> = () => {
  const { openDialog } = useShareDialog();
  return (
    <DesktopBarBottomBase>
      <Button variant="semi-primary" onClick={openDialog}>
        Share link
      </Button>
    </DesktopBarBottomBase>
  );
};

export default DesktopBarBottom;
