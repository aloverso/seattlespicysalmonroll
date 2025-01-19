import React, { ReactElement, useEffect } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";
import { INSTA_LINK, ORDINAL, YEAR } from "../src/domain/consts";

const Media = (): ReactElement => {
  useEffect(() => {
    const d = document,
      s = d.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    d.body.append(s);
  }, []);

  return (
    <div className="bg-theme">
      <Metadata
        title="Media"
        description={`Social media feed for Seattle's ${ORDINAL} annual skating event - the ${YEAR} Seattle Spicy Salmon Roll`}
      />
      <header>
        <NavBar active="media" />
      </header>
      <main className="container mtxl">
        <h1 className="text-xxl font-lilita mbd">Media</h1>
        <p>
          Visit&nbsp;
          <a href={INSTA_LINK} target="_blank" rel="noopener noreferrer">
            <img
              className="mrxs"
              src="/icons/instagram.svg"
              alt=""
              style={{ width: "16px", height: "16px" }}
            />
            seattle_weekly_distance_skate
          </a>
          &nbsp;for the latest updates!
        </p>
        <div data-behold-id="2HIuhuvsIPYYQ9zKd9AI"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
