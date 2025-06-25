import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";
import { CONTROLS, DATE_STRING, ORDINAL } from "../src/domain/consts";
import { GoFundMeBlock } from "../src/components/GoFundMeBlock";

const Index = (): ReactElement => {
  return (
    <>
      <Metadata
        description={`Join us ${DATE_STRING} in the Emerald City for the Seattle Distance Skating team’s ${ORDINAL} annual skating event - all skaters welcome!`}
      />
      <header>
        <NavBar active="home" />
      </header>
      <main>
        <Hero />
        <div className="container mvxl">
          <div className="row">
            <h2 className="text-xxl font-lilita">
              Seattle&apos;s {ORDINAL} annual inline skate event
            </h2>
            <div className="col-md-8">
              <div className="bold text-xl font-italic mbm">
                hosted by Seattle Distance Skating Club.
              </div>

              {CONTROLS.showGoFundMe && <GoFundMeBlock />}

              <h3 className="text-l bold mtl mbd">
                The Seattle Spicy Salmon Roll: Official Recipe
              </h3>

              <p>
                Take 6-12 fresh wheels (round, spacers included), stuffed with 12-24 bearings dipped
                in dino juice. You can also use LEDs (Light Emitting Dish) for extra spice. Put all
                of it into the frame and attach to your boot of choice. Wrap in seaweed.
              </p>

              <p>
                Take one helmet and a medley of pads wrapped around an adventurous individual…ready
                for a steaming four days of skating events in the Evergreen Kingdom. A tasty
                destination, with its unique and challenging landscapes, majestic views, paired with
                unforgettable routes through city and trails.
              </p>

              <p>
                On this bed of land, full of wizards and mystery, an amazing dish - with a spicy
                scale including all levels of urban skaters - is being meticulously prepared.
              </p>

              <p>Get your skate buds ready!</p>
            </div>
            <div className="col-md-4 fdc fae">
              <img alt="" src="/images/logo2025.png" className="width-100" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 mtl">
              <p className="text-m small-caps letters-spaced">
                looking for more skate event opportunities?
              </p>
              <h3 className="text-l bold mbd">
                Check out the Trail Skate Challenge from{" "}
                <a href="https://skatejourneys.org/" target="_blank" rel="noopener noreferrer">
                  Skate&nbsp;Journeys
                </a>
              </h3>

              <p>
                Skate with Skate Journeys on 5k and 10k skates! All skill levels are welcome on
                quads or inlines. All Challenge registration fees are donated to Skate Journeys, a
                non-profit 501c(3).
              </p>
              <p>
                This friendly trail-skate distance skate series occurs multiple days over June,
                July, and August 2025, and is designed to help you push your limits, develop new
                skills, and build endurance to skate longer distances.
              </p>

              <a
                href="https://skatejourneys.org/2025-hit-your-stride-trail-skate-challenge/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black button bg-teal pad hover-light-teal"
              >
                Visit Skate Journeys to learn more
                <img
                  src="/icons/external.svg"
                  alt=""
                  className="mls"
                  style={{ marginBottom: "3px", width: "16px", height: "16px" }}
                />
              </a>
            </div>
            <div className="col-md-4 fdc fae">
              <img alt="" src="/images/hit-your-stride-logo.PNG" className="width-100" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
