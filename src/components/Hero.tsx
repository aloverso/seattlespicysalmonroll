import React, { ReactElement, useContext, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { CONTROLS, DATE_STRING, END_DATE, REGISTER_LINK } from "../domain/consts";
import { VideoPlayer } from "./VideoPlayer";
import { Countdown } from "./Countdown";
import { TimeUntilContext } from "../domain/TimeUntilContext";

export const Hero = (): ReactElement => {
  const router = useRouter();
  const { isUpcoming } = useContext(TimeUntilContext)

  const registerButton = () => {
    router.push(REGISTER_LINK);
  };

  const isPast = dayjs().isAfter(END_DATE);
  const today = dayjs().format("YYYY-MM-DD");


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
          <div className="desktop-only mtxl">
            <Countdown />
          </div>
        </div>
      </div>
    </div>
  );
};
