import React, { ReactElement, useEffect } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";

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
      <header>
        <NavBar active="media" />
      </header>
      <main className="container mtxl">
        <h1 className="text-xxl font-lilita mbd">Media</h1>
        <p>
          Use hashtag <b>#spicysalmonroll</b> on Instagram to get featured!
        </p>
        <div data-behold-id="dksy2MBq9ZvMabZldD2Y"></div>
      </main>
      <Footer />
    </>
  );
};

export default Media;
