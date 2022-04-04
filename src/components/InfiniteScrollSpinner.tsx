import { FC } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const InfiniteScrollSpinnerWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`

const InfiniteScrollSpinner: FC<{}> = () => (
  <InfiniteScrollSpinnerWrapper>
    <Spinner size="2rem" spinnerColor="primary"/>
  </InfiniteScrollSpinnerWrapper>
);

export default InfiniteScrollSpinner;
