import { useAppSelector } from "hooks/reduxHooks";
import { FC } from "react";
import styled from "styled-components";
import Button from "components/Button";
import { useShareDialog } from "contexts/shareContext";
import { ThemeProp } from "types/common";

const DesktopBarBottomBase = styled.div<ThemeProp>`
  width: 100%;
  padding: ${(props) => props.themeConfig.screenPadding.mobile};
  position: fixed;
  bottom: 0;
  left: 0;
`;

const DesktopBarBottom: FC<{}> = () => {
  const theme = useAppSelector(({ theme }) => theme);

  const { openDialog } = useShareDialog();
  return (
    <DesktopBarBottomBase themeConfig={theme}>
      <Button variant="semi-primary" onClick={openDialog}>
        Share link
      </Button>
    </DesktopBarBottomBase>
  );
};

export default DesktopBarBottom;
