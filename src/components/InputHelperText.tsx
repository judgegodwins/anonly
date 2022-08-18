import { FC } from "react";
import { useAppSelector } from "hooks/reduxHooks";
import Typography from "./Typography";
import { TextFieldBaseProps } from "./TextField";

interface HelperTextProps extends Pick<TextFieldBaseProps, "error"> {
  text: string;
}

const InputHelperText: FC<HelperTextProps> = (props) => {
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <Typography
    component="p"
    type="subtext"
    color={props.error ? "#f00" : theme.color.text}
    style={{ margin: "3px 0 0 20px" }}
  >
    {props.text}
  </Typography>
  );
};

export default InputHelperText;
