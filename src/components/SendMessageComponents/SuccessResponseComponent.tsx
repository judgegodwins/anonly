import styled from "styled-components";
import Check from "svg/Check.svg";
import Padding from "components/Padding";
import Typography from "components/Typography";
import Button from "components/Button";
import { Link } from "react-router-dom";
import { FC, Fragment } from "react";
import FormActionButton from "components/FormComponents/FormActionButton";
import { ThemeProp } from "types/common";
import { useAppSelector } from "hooks/reduxHooks";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const CompleteIndicatorCover = styled.div<ThemeProp>`
  background: #f0f2f4;
  border-radius: 10px;
  border: 2px solid ${(props) => props.themeConfig.color.adjustPrimary};
  display: flex;
  align-items: center;
  padding: 12px;
`;

const TickBoxBase = styled.div<ThemeProp>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.themeConfig.color.adjustPrimary};
  border-radius: 5px;
`;

const CustomTypography = styled.div``;

const CompleteIndicator: FC<ThemeProp> = (props) => {
  return (
    <CompleteIndicatorCover themeConfig={props.themeConfig}>
      <TickBoxBase themeConfig={props.themeConfig}>
        <Check />
      </TickBoxBase>
      <Padding padding={[0, 0, 0, 15]}>
        <Typography type="p" style={{ fontWeight: 500 }}>
          Your message has been sent
        </Typography>
      </Padding>
    </CompleteIndicatorCover>
  );
};

const SuccessResponse = () => {
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <Container>
      <CompleteIndicator themeConfig={theme}/>
      {/* <Padding padding={[20, 0, 20, 0]}> */}
      <Typography component="h2" type="h2">
        Start receiving anonymous messages from your friends.
      </Typography>
      {/* </Padding> */}
      <Padding padding={[20, 0, 20, 0]}>
        <Link to="/signup">
          <FormActionButton style={{ marginTop: 10 }}>
            Get your link
          </FormActionButton>
        </Link>
      </Padding>
    </Container>
  );
};

export default SuccessResponse;
