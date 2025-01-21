import React, { ReactElement, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { CONTROLS, DATE, DATE_STRING, END_DATE, REGISTER_LINK } from "../domain/consts";
import { LiveUpdates } from "./LiveUpdates";

type TimeUntil = {
  day: number;
  hour: number;
  minute: number;
};

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

  const isUpcoming = timeUntil.day >= 0 && timeUntil.hour >= 0 && timeUntil.minute >= 0;
  const isPast = dayjs().isAfter(END_DATE);
  const today = dayjs().format("YYYY-MM-DD");

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntil(calcTimeUntil());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const countdown = () => (
    <div className="fdr text-white hero-countdown fjc">
      <div className="fdc fac hero-countdown-item">
        <div className="hero-number">{timeUntil.day}</div>
        <div className="hero-label">{timeUntil.day === 1 ? "day" : "days"}</div>
      </div>
      <div className="fdc fac hero-countdown-item">
        <div className="hero-number">{timeUntil.hour}</div>
        <div className="hero-label">{timeUntil.hour === 1 ? "hour" : "hours"}</div>
      </div>
      <div className="fdc fac hero-countdown-item">
        <div className="hero-number">{timeUntil.minute}</div>
        <div className="hero-label">{timeUntil.minute === 1 ? "minute" : "minutes"}</div>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-hero">
        <div className="text-uppercase text-white fdr fjc hero-presents">
          Seattle Distance Skating Club presents:
        </div>
        <div className="row">
          {CONTROLS.showLiveUpdates ? (
            <div className="col-lg-4 order-lg-0 order-2 mtl feed-parent">
              <LiveUpdates />
            </div>
          ) : (
            <div className="col-lg-3 order-lg-0 order-2 mtl feed-parent" />
          )}

          <div className="col-lg-8 order-1 mtl">
            <div className="fdr hero-parent">
              <div className="hero-date">{DATE_STRING}</div>
            </div>
            <div className="fdr hero-parent">
              <h1 className="hero-header">
                Seattle Spicy
                <br />
                Salmon Roll
              </h1>
            </div>
            {!isPast && CONTROLS.registrationLive && (
              <div className="fdr hero-parent">
                <button
                  className={`button button-hero ${!isUpcoming && "button-hero-secondary"}`}
                  onClick={registerButton}
                >
                  Register Here
                </button>
              </div>
            )}
            {!isUpcoming && !isPast && (
              <div className="fdr hero-parent mtd">
                <a href={`/schedule#${today}`}>
                  <button className="button button-hero" onClick={registerButton}>
                    Today&apos;s Schedule
                  </button>
                </a>
              </div>
            )}
            {isUpcoming && countdown()}
          </div>
        </div>
      </div>
    </>
  );
};
