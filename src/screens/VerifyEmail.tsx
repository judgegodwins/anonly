import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

import { styleConfig } from "config";
import FullscreenWrapper from "components/FullscreenWrapper";
import Header from "components/Header";
import Spinner from "components/Spinner";
import { useQuery } from "hooks/routerHooks";
import Typography from "components/Typography";

import AuthService from "services/AuthService";

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${styleConfig.color.secondary};
`;

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column */
`;

const VerifyEmail: FC<{}> = () => {
  const query = useQuery();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const code = query.get("code");

    if (code === null) return setError(new Error("Code not sent"));

    AuthService.verifyEmail(code)
      .then(({ data }) => {
        if (data.success) setVerified(true);
      })
      .catch(setError);
  }, [query]);

  return (
    <Base>
      {verified ? (
        <Wrapper>
          <Icon
            icon="bi:check-circle"
            fontSize="7rem"
            color={styleConfig.color.success}
          />
          <Typography
            textAlign="center"
            type="p"
            color={styleConfig.color.success}
          >
            Email verified
          </Typography>
        </Wrapper>
      ) : (
        <>
          {error ? (
            <Wrapper>
              <Icon
                icon="clarity:error-line"
                fontSize="7rem"
                color={styleConfig.color.error}
              />
              <Typography
                textAlign="center"
                type="p"
                color={styleConfig.color.error}
              >
                {error.message}
              </Typography>
            </Wrapper>
          ) : (
            <Spinner spinnerColor="primary" size="50px" />
          )}
        </>
      )}
    </Base>
  );
};

export default VerifyEmail;
