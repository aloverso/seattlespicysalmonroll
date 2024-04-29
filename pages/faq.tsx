import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";

const Faq = (): ReactElement => {
  return (
    <div className="bg-theme">
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
