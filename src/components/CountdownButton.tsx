import Button from "./Button";
import Countdown from 'react-countdown';
import { useState, FC } from "react";

interface CountdownButtonProps {
  time: string | number | Date,
}

const CountDownButton: FC<CountdownButtonProps> = ({time, ...rest}) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Button
      disabled={disabled}
      {...rest}
    >
      <Countdown
        date={time}
        renderer={({ seconds, completed }) => {
          if (completed) {
            setDisabled(false);
            return <></>
          } else {
            return <span>{seconds}</span>
          }
        }}
      />
    </Button>
  )
}

export default CountDownButton;
