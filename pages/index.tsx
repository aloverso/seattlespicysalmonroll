import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";

const Index = (): ReactElement => {
  return (
    <>
      <header>
        <NavBar active="home" />
      </header>
      <main>
        <Hero />
        <div className="container mvxl">
          <div className="text-xxl font-lilita">Seattle&apos;s debut annual inline skate event</div>
          <div className="bold text-xl font-italic">hosted by Seattle Distance Skating Club.</div>

          <p className="bold mtl">The Seattle Spicy Salmon Roll: Official Recipe</p>

          <div className="col-md-8">
            <p>
              Take 6-12 fresh wheels (round, spacers included), stuffed with 12-24 bearings dipped
              in dino juice. You can also use LEDs (Light Emitting Dish) for extra spice. Put all of
              it into the frame and attach to your boot of choice. Wrap in seaweed.
            </p>

            <p>
              Take one helmet and a medley of pads wrapped around an adventurous individual…ready
              for a steaming four days of skating events in the Evergreen Kingdom. A tasty
              destination, with its unique and challenging landscapes, majestic views, paired with
              unforgettable routes through city and trails.
            </p>

            <p>
              On this bed of land, full of wizards and mystery, an amazing dish - with a spicy scale
              including all levels of urban skaters - is being meticulously prepared.
            </p>

            <p>Get your skate buds ready!</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
