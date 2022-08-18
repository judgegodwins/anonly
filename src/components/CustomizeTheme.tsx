import { FC, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { updateTheme } from "slices/theme/actions";
import { FlexContainer } from "./Container";

interface ColorBallProps {
  background: string;
}

const Container = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
`;

const ColorContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 22px;
  row-gap: 15px;
  flex-wrap: wrap;
  /* grid-template-rows: repeat(5,  20%); */
  /* grid-template-rows: repeat(auto, 5); */
  /* row-gap: 14px; */
`;

const ColorBall = styled.div<ColorBallProps>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${(props) => props.background};
`;

const ColorBallWrapper = styled.div<ColorBallProps & { active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  place-self: center;
  border-radius: 50%;
  border: 1px solid
    ${(props) => (props.active ? props.background : "transparent")};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const CustomizeTheme: FC<{}> = () => {
  const theme = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <ColorContainer>
        {[
          "#2185DC",
          "#7321DC",
          "#21DC7E",
          "#FF0C9E",
          "#FF9A23",
          "#FF3737",
          "#2EDFD4",
          "#00B929",
          "#F3E031",
          "#9DE00F",
        ].map((c, index) => (
          <ColorBallWrapper
            onClick={() => {
              dispatch(updateTheme(c));
            }}
            key={`${c}-${index}`}
            background={c}
            active={theme.color.primary === c}
          >
            <ColorBall background={c} />
          </ColorBallWrapper>
        ))}
      </ColorContainer>
    </Container>
  );
};

export default CustomizeTheme;
