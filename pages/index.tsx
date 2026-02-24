import React, { ReactElement, useEffect, useRef, useState } from "react";
import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";
import { CONTROLS, DATE_STRING, ORDINAL } from "../src/domain/consts";
import { GoFundMeBlock } from "../src/components/GoFundMeBlock";

const Index = (): ReactElement => {

  const VIDEOS = [
    "https://stream.mux.com/O9lf025TeKLvg8xzMUx7nWpdSYB02OJsCSJsPkCQcwSVc.m3u8",
    "https://stream.mux.com/02nWac25JxvSTO20201wKLx8ZUR7g02S1pddLIiRZH01e902k.m3u8",
  ]

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
            <div className="info-box">
              <span className="subtitle">Seattle Distance Skating Club presents:</span>
              <div className="fdr hero-parent">
                <h1 className="hero-header">
                  Spicy Salmon Roll
                </h1>
              </div>
              <div className="fdr hero-parent">
                <div className="hero-date">Seattle, WA</div>
              </div>
              <div className="fdr hero-parent">
                <div className="hero-date">{DATE_STRING}</div>
              </div>

              {/*<a href="/schedule" className="btn btn-primary mt-2">View Schedule</a>*/}
            </div>
          </div>

        </div>

      </main>
      <Footer />
    </>
  );
};

export default Index;
