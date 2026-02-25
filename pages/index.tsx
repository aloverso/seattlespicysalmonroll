import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";
import { CONTROLS, DATE_STRING, INSTA_LINK, ORDINAL, YEAR } from "../src/domain/consts";
import { FaqBlock } from "../src/components/FaqBlock";
import { SPICE } from "../src/domain/types";
import { SpiceLevels } from "../src/components/SpiceLevels";

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

        <div className="bg-theme">
          <div className="container ptxl">

            <div className="row">
              <div className="col-md-10">
                <h2 className="text-xxl font-lilita">
                  Seattle&apos;s {ORDINAL} annual urban & distance skate festival
                </h2>
                <div className="bold text-xl font-italic">
                  hosted by Seattle Distance Skating Club
                </div>
              </div>
              <div className="col-md-7 mtl">
                <div className="bg-white pad brad">
                  <p>
                    The Spicy Salmon Roll brings together the Seattle skating community
                    for four days of exploring our beautiful Emerald City on skates.
                  </p>

                  <p>
                    Our team is committed to delivering high-energy, spicy routes that
                    embrace all the complexity of terrain our city has to offer. We also
                    revel in offering chill skates that cater to a wide diversity of
                    experience. All skaters are welcome!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img src="/images/logo2025.png" className="width-100"/>
              </div>
            </div>


            <div className="row mtxl">
              <div className="col-12 mbm">
                <div className="bold text-xl font-italic">
                  we&apos;re part of the
                </div>
                <h2 className="text-xxl font-lilita">
                  Pacific Northwest Skate Fest
                </h2>
              </div>
              <div className="col-md-7">
                <div className="bg-white pad brad">
                  <p>
                    Portland and Seattle are linking up to create a joint skate festival!
                  </p>
                  <p>
                    Two urban skate events join forces to create an experience that is louder, faster, and more
                    connected
                    than ever. This festival was created unite the PNW skating communities, and to make it
                    easy for visitors to experience both gems of the PNW.
                  </p>
                    <p>
                      The <a href="https://rosecityroll.com/" target="_blank" rel="noopener noreferrer">Rose City Roll</a> will take place
                      in Portland, OR from July 9—12. Once the roll concludes, join us on a train ride through the PNW from Portland to Seattle
                      where we will continue our roll with the Spicy Salmon Roll from July 16—19.
                    </p>
                </div>
              </div>
              <div className="col-md-5">
                <img src="/images/PNWSkateFest.svg" />
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
);
};

export default Index;
