import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { Metadata } from "../src/components/Metadata";

const Faq = (): ReactElement => {
  return (
    <div className="bg-theme">
      <Metadata
        title="FAQ"
        description="Get answers to you questions about Seattle's debut annual skating event - the 2024 Seattle Spicy Salmon Roll"
      />
      <header>
        <NavBar active="faq" />
      </header>
      <main className="container mtxl">
        <h1 className="text-xxl font-lilita mbd">FAQ</h1>
        <p>Coming soon...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
