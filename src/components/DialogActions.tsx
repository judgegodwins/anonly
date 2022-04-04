import { FC } from "react";
import styled, { AnyStyledComponent } from "styled-components";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const InnerButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;

  & > :not(:first-child) {
    margin-left: 8px;
  }
`;

export const DialogActions: FC<{}> = ({ children }) => (
  <ButtonContainer>
    <InnerButtonContainer>{children}</InnerButtonContainer>
  </ButtonContainer>
);
