import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";
import { DATE_STRING, ORDINAL } from "../src/domain/consts";

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
            <div className="text-xxl font-lilita">
              Seattle&apos;s {ORDINAL} annual inline skate event
            </div>
            <div className="col-md-8">
              <div className="bold text-xl font-italic">
                hosted by Seattle Distance Skating Club.
              </div>

              <p className="bold mtl">The Seattle Spicy Salmon Roll: Official Recipe</p>

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
              <img alt="" src="/images/logo.png" className="width-100" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
