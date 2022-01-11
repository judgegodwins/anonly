import Button from "components/Button";
import styled from "styled-components";

const FormActionButton = styled(Button)`
  width: 100%;

  @media only screen and (min-width: 961px) {
    width: fit-content;
  }
`

export default FormActionButton;