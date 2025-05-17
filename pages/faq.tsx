import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";
import Link from "next/link";
import { FaqBlock } from "../src/components/FaqBlock";
import { SPICE } from "../src/domain/types";
import { SpiceLevels } from "../src/components/SpiceLevels";
import { CONTROLS, INSTA_LINK, ORDINAL, YEAR } from "../src/domain/consts";

const Faq = (): ReactElement => {
  return (
    <div className="bg-theme">
      <Metadata
        title="FAQ"
        description={`Get answers to you questions about Seattle's ${ORDINAL} annual skating event - the ${YEAR} Seattle Spicy Salmon Roll`}
      />
      <header>
        <NavBar active="faq" />
      </header>
      <main className="container mtxl">
        <h1 className="text-xxl font-lilita mbd">FAQ</h1>
        <div className="col-md-8">
          {CONTROLS.showEvents && (
            <FaqBlock q={`What do the ${SPICE} spice levels mean?`} a={<SpiceLevels />} />
          )}

          <FaqBlock
            q="What can I expect from this event?"
            a={
              <p>
                Check out the specific <Link href="/schedule">schedule of events</Link>. You can
                expect 4 days of skating routes exploring the diverse and beautiful skating terrain
                that Seattle has to offer! Each route will be handcrafted by our local experts and
                range across a diversity of skill level, distance, and difficulty. We expect to have
                folks join from all over - the bigger the group, the more fun the skate! There will
                be many opportunities to socialize and meet people from skating communities all
                over.
              </p>
            }
          />

          <FaqBlock
            q="Who is hosting this?"
            a={
              <p>
                The{" "}
                <a href={INSTA_LINK} target="_blank" rel="noopener noreferrer">
                  Seattle Distance Skating Club
                </a>
                &nbsp;is hosting this event! We host weekly skates in the Seattle area to bring
                skaters of all levels together to explore trails amd city landscapes, enjoying the
                views and the friendship. Our regular Tuesday skates are all-level, at the pace of
                the slowest skater, no one left behind. Our regular Saturday skates are at the
                intermediate/advanced level and explore more difficult, hilly, or diverse terrain.
                All skaters are welcome to join and start having fun with us.
              </p>
            }
          />

          <FaqBlock
            q="Where in the city will the skates take place?"
            a={
              <p>
                The routes will take place in diverse locations all over Seattle, showing off the
                best of what our beautiful Emerald City has to offer. Check out the{" "}
                <Link href="/schedule">schedule</Link> to find route details for each day of the
                event!
              </p>
            }
          />

          <FaqBlock
            q="How good do you have to be to participate?"
            a={
              <p>
                Each skate will be rated on a <b>1-5 {SPICE} spice scale</b> for skaters to assess
                against their own skill level and what they can expect from each route. In general,
                skaters should be able to stride, turn, and perform at least one basic stop. All
                skates will have regular rest stops to regroup, refuel, hydrate, and recover.
                Additionally, each skate will have a leader to ensure no one gets left behind or
                lost on the route.
              </p>
            }
          />

          <FaqBlock
            q="What do I need to bring?"
            a={
              <>
                <p>
                  We ask that all skaters use protective equipment: helmets, elbow pads, kneepads,
                  and wrist guards. Additionally, for nighttime skates, you need to bring a form of
                  light - the more the better. Headlamps, blinking lights, reflective clothing or
                  accessories are highly encouraged for post-sunset skates.
                </p>
                <p>
                  For every skate, skaters should assess the weather and dress appropriately.
                  Seattle can get hot in the summer! Bring adequate water and food on each skate.
                </p>
              </>
            }
          />

          <FaqBlock
            q="Where can I get gear? Skates, wheels, bearings, etc"
            a={
              <p>
                Check out{" "}
                <a href="https://usa.shop-task.com/" target="_blank" rel="noopener noreferrer">
                  Shop Task
                </a>{" "}
                in South Lake Union!
              </p>
            }
          />

          <FaqBlock
            q="Can I ride Seattle’s public transit with skates on?"
            a={
              <>
                <p>
                  <a
                    href="https://app.leg.wa.gov/rcw/default.aspx?cite=9.91.025"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Legally
                  </a>
                  : &quot;[Unlawful transit conduct:] Skates on roller skates or in-line skates, or
                  rides in or upon or by any means a coaster, skateboard, toy vehicle, or any
                  similar device. However, a person may walk while wearing skates or carry a
                  skateboard while on or in a transit vehicle or in or at a transit station if that
                  conduct is not otherwise prohibited by law.&quot;
                </p>
                <p>
                  In summary: if you are very careful to &quot;walk&quot; and not &quot;skate&quot;
                  then it is legal to wear skates on King County metro, including buses and the
                  light rail; otherwise you may be subject to a fine. We cannot endorse any
                  particular behavior, you may choose behavior at your own risk.
                </p>
              </>
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
