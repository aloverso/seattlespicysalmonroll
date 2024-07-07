import React, { ReactElement, useEffect } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";

const Media = (): ReactElement => {
  useEffect(() => {
    const d = document,
      s = d.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    d.body.append(s);
  }, []);

  return (
    <>
      <Metadata
        title="Media"
        description="Social media feed for Seattle's debut annual skating event - the 2024 Seattle Spicy Salmon Roll"
      />
      <header>
        <NavBar active="media" />
      </header>
      <main className="container mtxl">
        <h1 className="text-xxl font-lilita mbd">Media</h1>
        <p>
          Visit&nbsp;
          <a href="https://www.instagram.com/seattle_weekly_distance_skate/">
            <img className="mrxs" src="/icons/instagram.svg" alt="" style={{ width: "16px", height: "16px" }} />
            seattle_weekly_distance_skate
          </a>
          &nbsp;for the latest updates!
        </p>
        <div data-behold-id="2HIuhuvsIPYYQ9zKd9AI"></div>
      </main>
      <Footer />
    </>
  );
};

export default Media;
