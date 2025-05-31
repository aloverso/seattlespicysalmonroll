import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";
import { ThankYouLine } from "../src/components/ThankYouLine";
import { CONTROLS } from "../src/domain/consts";

const Thanks = (): ReactElement => {
  if (!CONTROLS.showThanks) return <></>;

  return (
    <div className="bg-theme">
      <Metadata
        title="Thanks"
        description="The people and organizations that are supporting us to make this happen"
      />
      <header>
        <NavBar active="thanks" />
      </header>
      <main className="container mtxl">
        <h1 className="text-xxl font-lilita mbd">Thank Yous</h1>
        <div className="col-md-8 bg-white">
          {CONTROLS.showSponsorship && (
            <>
              <h2 className="text-l bold pvd">Sponsors</h2>
              <img
                src="/images/shop-task-logo-black.jpg"
                alt="Shop Task"
                className="ptd pbm width-100"
              />

              <img
                src="/images/Z-full-logo.webp"
                alt="Zylberschtein's Delicatessen & Bakery"
                className="ptd pbm width-100"
              />
              <p>
                A huge thank-you to{" "}
                <a href="https://usa.shop-task.com/" target="_blank" rel="noopener noreferrer">
                  Shop Task
                </a>{" "}
                and{" "}
                <a href="https://zylberschtein.com/" target="_blank" rel="noopener noreferrer">
                  Zylberschtein&apos;s Deli
                </a>{" "}
                for sponsoring this event!
              </p>

              <p>
                <b>Shop Task</b> is located in South Lake Union in Seattle, and is an inline skate
                store by and for skaters. At any point during the event, they can be a source of
                skates, wheels, bearings, gear, and more.
              </p>
              <p>
                <b>Zylberschtein&apos;s</b> is a family-owned Jewish-style bakery in Pinehurst,
                serving top-rated bagels, smoked meats, and more. They will be generously donating
                bagels and food for skate event days!
              </p>
            </>
          )}

          {CONTROLS.showVolunteers && (
            <>
              <h2 className="text-l bold ptd">Volunteers</h2>
              <ul className="ptd bullet">
                <ThankYouLine name="George Ozerov" handle="@dunkles451" />
                <ThankYouLine name="Shaun Woods" handle="@snqk" />
                <ThankYouLine name="Dawn Johnston" handle="@damajo_rollin" />
              </ul>
              <ul className="pts">
                <ThankYouLine name="Michael Vincent" handle="@ebbandflow.state" />
                <ThankYouLine name="Cameron Shore" handle="@by_the_c_shore" />
                <ThankYouLine name="Alex Wilson" handle="@alekseywilson" />
                <ThankYouLine name="Woo Byeon" handle="@woo.norn.in.line" />
                <ThankYouLine name="Brian Leahy" handle="@brianleahwart" />
                <ThankYouLine name="Dmitry Ornatsky" handle="@dornatsky" />
                <ThankYouLine name="Anne LoVerso" handle="@dirt.and.roses" />
                <ThankYouLine name="Anna Quilter" handle="@ladygaza007" />
                <ThankYouLine name="Vanessa Zakowski" handle="@vanessazakowski" />
                <ThankYouLine name="Lila Faulhaber" handle="@lilafaulhaber" />
                <ThankYouLine name="Nate Sloan" handle="@zas.i.am" />
              </ul>
              <ul className="pts">
                <ThankYouLine name="Derek Macias" handle="@derek_macias_" />
                <ThankYouLine name="Aslie Juan" handle="@no_h_aslie" />
                <ThankYouLine name="Dan Duman" handle="@seattleweeklyskatesession" />
              </ul>
              <ul className="pts">
                <ThankYouLine name="Mason Sherry" handle="@my_iphone_camara" />
                <ThankYouLine name="Trish Alexander" handle="@skatejourneys" />
              </ul>

              <h2 className="text-l bold ptd">Local Skate Groups</h2>
              <ul className="ptd">
                <ThankYouLine name="Seattle Skates" handle="@seattle_skates" />
                <ThankYouLine
                  name="Seattle Weekly Session of Friendship"
                  handle="@seattleweeklyskatesession"
                />
              </ul>

              <h2 className="text-l bold ptd">Donors and Partners</h2>
              <ul className="ptd">
                <ThankYouLine name="Skate Journeys" handle="@skatejourneys" />
                <ThankYouLine name="Skate IA" handle="@skateia_" />
                <ThankYouLine name="DNA Skate School" handle="@dna_skate_school" />
                <ThankYouLine
                  name="Zylberschtein's Delicatessen & Bakery"
                  handle="@zylberschtein"
                />
              </ul>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Thanks;
