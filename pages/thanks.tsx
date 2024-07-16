import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";

const Faq = (): ReactElement => {
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
        <h1 className="text-xxl font-lilita mbd">Acknowledgements & Special Thanks</h1>
        <div className="col-md-8">
          <ul className="bg-white pvm">
            <li className="mbd">
              <a className="bold" href="https://www.instagram.com/dna_skate_school/">DNA Skate School</a> for safety, administration, and
              route guidance
            </li>
            <li className="mbd">
              <a className="bold" href="https://www.instagram.com/skatejourneys/">Skate Journeys</a> for consultation and advice
            </li>
            <li className="mbd">
              <a className="bold" href="https://www.instagram.com/woo.norn.in.line/">Woo Byeon</a> for original art and graphic design
            </li>
            <li className="mbd">
              <a className="bold" href="https://www.instagram.com/ebbandflow.state/">ebbandflow</a> for leading route design
            </li>
            <li className="mbd">
              <a className="bold" href="https://zylberschtein.com/">Zylberschtein&apos;s Delicatessen & Bakery</a> for their generous
              bagel donation
            </li>
            <li className="mbd">The entire SDS team for putting this event on!</li>
          </ul>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
