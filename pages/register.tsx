import React, { ReactElement, useEffect } from "react";
import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";
import { useRouter } from "next/router";
import { REGISTER_LINK } from "../src/domain/consts";
import { Metadata } from "../src/components/Metadata";

const Index = (): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    router.push(REGISTER_LINK);
  }, []);

  return (
    <>
      <Metadata description="Join us July 18-21, 2024 in the Emerald City for the Seattle Distance Skating team’s first annual skating event - all skaters welcome!" />
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
