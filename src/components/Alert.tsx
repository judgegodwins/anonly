import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "hooks/reduxHooks";
import Typography from 'components/Typography';
import { SerializedError } from "@reduxjs/toolkit";

interface WrapperProps { elOpacity: boolean };

const AlertWrapper = styled.div<WrapperProps>`
  z-index: 1400;
  position: fixed;
  display: flex;
  opacity: ${(props) => props.elOpacity ? 1 : 0};
  left: 8px;
  right: 8px;
  /* -webkit-box-pack: start; */
  justify-content: flex-start;
  /* -webkit-box-align: center; */
  align-items: center;
  bottom: 8px;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;


  @media (min-width: 600px) {
    bottom: 24px;
    left: 24px;
    right: auto;
  }
`;

const AlertBase = styled.div`
  line-height: 1.43;
  font-weight: 500;
  display: flex;
  bottom: 25px;
  left: 8px;
  right: 8px;
  /* transform: translateX(-50%); */
  padding: 6px 16px;
  border-radius: 4px;
  z-index: 20;
  background: #f00;
  color: #fff;
  width: 100%;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
`;

const Alert: FC<{}> = () => {
  const [opacity, setOpacity] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);
  const latestError = useAppSelector(({ errors }): SerializedError | null => {
    if (errors.length <= 0) return null;
    return errors[errors.length - 1]
  });

    useEffect(() => {
      setDisplay(true);
      setOpacity(true); // for animation transition
      setTimeout(() => setOpacity(false), 5000); // animate opacity to 0 before removing item
      setTimeout(() => setDisplay(false), 6000);

    }, [latestError]);


  return (
    display
      ? <AlertWrapper elOpacity={opacity && Boolean(latestError)}>
        <AlertBase>
          <Typography type="p" color="#fff" fontWeight={500}>
            {latestError && latestError.message}
          </Typography>
        </AlertBase>
      </AlertWrapper>
      : <></>
  )
}

export default Alert;