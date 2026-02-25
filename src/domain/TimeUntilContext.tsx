import React, { ReactNode, useState } from "react";
import dayjs from "dayjs";
import { DATE } from "./consts";

type TimeUntilContextType = {
  isUpcoming: boolean;
  timeUntil: TimeUntil
}

type TimeUntil = {
  day: number;
  hour: number;
  minute: number;
};

export const TimeUntilContext = React.createContext<TimeUntilContextType>({
  isUpcoming: true,
  timeUntil: { day: 0, hour: 0, minute: 0 }
});

const calcTimeUntil = (): TimeUntil => {
  const date = dayjs(DATE);
  const now = dayjs();
  return {
    day: date.diff(now, "day"),
    hour: date.diff(now, "hour") % 24,
    minute: date.diff(now, "minute") % 60,
  };
};

interface Props {
  children: ReactNode;
}


export const TimeUntilProvider = (props: Props) => {
  const [timeUntil, setTimeUntil] = useState<TimeUntil>(calcTimeUntil());
  const isUpcoming = timeUntil.day >= 0 && timeUntil.hour >= 0 && timeUntil.minute >= 0;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntil(calcTimeUntil());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <TimeUntilContext.Provider value={{ isUpcoming, timeUntil }}>
      {props.children}
    </TimeUntilContext.Provider>
  )
};
