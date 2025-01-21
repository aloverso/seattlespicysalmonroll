import React, { ReactElement, useEffect } from "react";
import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";
import { useRouter } from "next/router";
import { CONTROLS, DATE_STRING, REGISTER_LINK } from "../src/domain/consts";
import { Metadata } from "../src/components/Metadata";

const Index = (): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    if (CONTROLS.registrationLive) {
      router.push(REGISTER_LINK);
    }
  }, []);

  return (
    <>
      <Metadata
        description={`Join us ${DATE_STRING} in the Emerald City for the Seattle Distance Skating team’s first annual skating event - all skaters welcome!`}
      />
      <header>
        <NavBar active="home" />
      </header>
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Index;
