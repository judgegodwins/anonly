import Button from "./Button";
import Countdown from "react-countdown";
import { FC, MouseEventHandler } from "react";

interface CountdownButtonProps {
  time: string | number | Date;
  text: string;
  // disabledText?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CountDownButton: FC<CountdownButtonProps> = ({
  time,
  // disabledText,
  text,
  ...rest
}) => {
  // const [disabled, setDisabled] = useState(true);

  return (
    <Countdown
      date={time}
    >
      <Button {...rest}>
        {text}
      </Button>
    </Countdown>
  );
};

export default CountDownButton;
