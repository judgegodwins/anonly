import { FC } from "react";
import { styleConfig } from "config";
import Typography from "./Typography";
import { TextFieldBaseProps } from "./TextField";

interface HelperTextProps extends Pick<TextFieldBaseProps, "error"> {
  text: string;
}

const InputHelperText: FC<HelperTextProps> = (props) => (
  <Typography
    component="p"
    type="subtext"
    color={props.error ? "#f00" : styleConfig.color.text}
    style={{ margin: "3px 0 0 20px" }}
  >
    {props.text}
  </Typography>
);

export default InputHelperText;
