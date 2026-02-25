import React, { ReactElement, useEffect, useRef, useState } from "react";
import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";
import { CONTROLS, DATE, DATE_STRING, ORDINAL } from "../src/domain/consts";
import { GoFundMeBlock } from "../src/components/GoFundMeBlock";
import dayjs from "dayjs";

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

const Index = (): ReactElement => {

  const VIDEOS = [
    "https://stream.mux.com/O9lf025TeKLvg8xzMUx7nWpdSYB02OJsCSJsPkCQcwSVc.m3u8",
    "https://stream.mux.com/02nWac25JxvSTO20201wKLx8ZUR7g02S1pddLIiRZH01e902k.m3u8",
  ]

  const [timeUntil, setTimeUntil] = useState<TimeUntil>(calcTimeUntil());
  const isUpcoming = timeUntil.day >= 0 && timeUntil.hour >= 0 && timeUntil.minute >= 0;
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

  const [indexA, setIndexA] = useState(0);
  const [indexB, setIndexB] = useState(1);
  const [fading, setFading] = useState(false);
  const [activeIsA, setActiveIsA] = useState(true);

  const refA = useRef(null);
  const refB = useRef(null);

  useEffect(() => {
    if (refA.current) {
      refA.current.src = VIDEOS[indexA];
      refA.current.play();
    }
    if (refB.current) {
      refB.current.src = VIDEOS[indexB];
      refB.current.load();
    }
  }, []);

  function handleVideoEnd() {
    if (fading) return;
    setFading(true);

    // Play the preloaded next video
    if (activeIsA) {
      if (refB.current) refB.current.play();
    } else {
      if (refA.current) refA.current.play();
    }

    // After fade completes, swap active/next and preload the one after
    setTimeout(() => {
      const newNext = indexB + 1 >= VIDEOS.length ? 0 : indexB + 1

      if (activeIsA) {
        setIndexA(newNext);
        refA.current.src = VIDEOS[newNext];
        refA.current.load();
        setActiveIsA(false)
      } else {
        setIndexB(newNext);
        refB.current.src = VIDEOS[newNext];
        refB.current.load();
        setActiveIsA(true)
      }

      setFading(false);
    }, 1600);
  }

  return (
    <>
      <Metadata
        description={`Join us ${DATE_STRING} in the Emerald City for the Seattle Distance Skating team’s ${ORDINAL} annual skating event - all skaters welcome!`}
      />
      <header>
        <NavBar active="home" />
      </header>
      <main>

        <div className="page-wrapper">

          <div className="left-bg-image" />
          <div className="logo-image-bg box-shadow-black" />
          <div className="logo-image-bg box-shadow-gold" />
          <img className="logo-image" src="images/logo-no-text.png" alt="" />
          <div className="gradient-bg"></div>

          <div className="video-side">
            <video
              ref={refA}
              className={activeIsA ? (fading ? "" : "active") : (fading ? "active" : "")}
              muted
              playsInline
              onEnded={handleVideoEnd}
            />
            <video
              ref={refB}
              className={activeIsA ? (fading ? "active" : "") : (fading ? "" : "active")}
              muted
              playsInline
              onEnded={handleVideoEnd}
            />
          </div>

          <div className="text-side">
            <span className="hero-presents">Seattle Distance Skating Club presents:</span>
            <div className="info-box">
              <h1 className="hero-header">
                Spicy Salmon Roll
              </h1>
              <div className="hero-location">Seattle, WA</div>
              <div className="hero-date">{DATE_STRING}</div>

              {isUpcoming && countdown()}
            </div>
          </div>

        </div>

      </main>
      <Footer />
    </>
  );
};

export default Index;
