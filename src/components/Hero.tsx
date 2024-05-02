import React, { ReactElement, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { REGISTER_LINK } from "../domain/consts";

type TimeUntil = {
  day: number;
  hour: number;
  minute: number;
};

const DATE = "2024-07-18";

const calcTimeUntil = (): TimeUntil => {
  const date = dayjs(DATE);
  const now = dayjs();
  return {
    day: date.diff(now, "day"),
    hour: date.diff(now, "hour") % 24,
    minute: date.diff(now, "minute") % 60,
  };
};

export const Hero = (): ReactElement => {
  const [timeUntil, setTimeUntil] = useState<TimeUntil>(calcTimeUntil());
  const router = useRouter();

  const registerButton = () => {
    router.push(REGISTER_LINK);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntil(calcTimeUntil());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="bg-hero">
        <div className="text-uppercase text-white fdr fjc hero-presents">
          Seattle Distance Skating Club presents:
        </div>
        <div className="fdr fje">
          <div className="hero-date">July 18–21, 2024</div>
        </div>
        <div className="fdr fje">
          <h1 className="hero-header">
            Seattle Spicy
            <br />
            Salmon Roll
          </h1>
        </div>
        <div className="fdr fje">
          <button className="button button-hero" onClick={registerButton}>
            Register Here
          </button>
        </div>
        <div className="fdr text-white hero-countdown fjc">
          <div className="fdc fac hero-countdown-item">
            <div className="hero-number">{timeUntil.day}</div>
            <div className="hero-label">days</div>
          </div>
          <div className="fdc fac hero-countdown-item">
            <div className="hero-number">{timeUntil.hour}</div>
            <div className="hero-label">hours</div>
          </div>
          <div className="fdc fac hero-countdown-item">
            <div className="hero-number">{timeUntil.minute}</div>
            <div className="hero-label">minutes</div>
          </div>
        </div>
      </div>
    </>
  );
};
