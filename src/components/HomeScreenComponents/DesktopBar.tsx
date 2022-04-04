import { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "hooks/reduxHooks";
import { styleConfig } from "config";
import Header from "components/Header";
import Button from "components/Button";
import DesktopTabs from "./DesktopTabs";
import DesktopBarBottom from "./DesktopBarBottom";

const DesktopBarBase = styled.div`
  display: none; // do not display for desktop

  @media only screen and (min-width: 1366px) {
    display: block;
    width: 25%;
    background: ${styleConfig.color.primary};
    border-radius: 0px 30px 30px 0px;
  }
`;

const DesktopBar: FC<{}> = () => {
  const user = useAppSelector(({ auth }) => auth.user);

  return (
    user && (
      <DesktopBarBase>
        <Header
          height="25%"
          type="primary"
          firstText="Welcome ✨"
          outstandingText={user.username}
        />
        {/* <Button
          as="a"
          href={encodeURI(
            `https://api.whatsapp.com/send?text=Send me an anonymous message on Anonly Beta https://anonly.netlify.app/m/${user.username}`
          )}
          variant="transparent"
          style={{ padding: "10px 5px"}}
          textColor={styleConfig.color.text}
        >
          Share link
        </Button> */}
        <DesktopTabs />
        <DesktopBarBottom />
      </DesktopBarBase>
    )
  );
};

export default DesktopBar;
