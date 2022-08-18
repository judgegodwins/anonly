import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

import Typography from "components/Typography";
import Spinner from "components/Spinner";

import AuthService from "services/AuthService";
import { ThemeProp } from "types/common";
import { useAppSelector } from "hooks/reduxHooks";
import { useQuery } from "hooks/routerHooks";

const Base = styled.div<ThemeProp>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.themeConfig.color.secondary};
`;

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column */
`;

const VerifyEmail: FC<{}> = () => {
  const query = useQuery();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const theme = useAppSelector(({ theme }) => theme);

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
    <Base themeConfig={theme}>
      {verified ? (
        <Wrapper>
          <Icon
            icon="bi:check-circle"
            fontSize="7rem"
            color={theme.color.success}
          />
          <Typography
            textAlign="center"
            type="p"
            color={theme.color.success}
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
                color={theme.color.error}
              />
              <Typography
                textAlign="center"
                type="p"
                color={theme.color.error}
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
