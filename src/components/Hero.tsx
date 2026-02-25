import React, { ReactElement, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { CONTROLS, DATE, DATE_STRING, END_DATE, REGISTER_LINK } from "../domain/consts";
import { VideoPlayer } from "./VideoPlayer";

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
    <div className="page-wrapper">
      <div className="left-bg-image" />
      <div className="logo-image-bg box-shadow-black" />
      <div className="logo-image-bg box-shadow-gold" />
      <img className="logo-image" src="images/logo-no-text.png" alt="" />
      <div className="gradient-bg"></div>

      <div className="video-side">
        <VideoPlayer />
      </div>

      <div className="text-side">
        <span className="hero-presents">Seattle Distance Skating Club presents:</span>
        <div className="info-box">
          <h1 className="hero-header">
            Spicy Salmon Roll
          </h1>
          <div className="hero-location">Seattle, WA</div>
          <div className="hero-date">{DATE_STRING}</div>

          <div className="hero-button-group">
            {!isPast && CONTROLS.registrationLive && (
                <button
                  className={`button button-hero ${!isUpcoming && "button-hero-secondary"}`}
                  onClick={registerButton}
                >
                  Register Here
                </button>
            )}
            {!isUpcoming && !isPast && (
                <a href={`/schedule#${today}`}>
                  <button className="button button-hero" onClick={registerButton}>
                    Today&apos;s Schedule
                  </button>
                </a>
            )}
          </div>
          {isUpcoming && countdown()}
        </div>
      </div>
    </div>
  );
};
