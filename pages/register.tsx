import React, { ReactElement, useEffect } from "react";
import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { Footer } from "../src/components/Footer";
import { useRouter } from "next/router";
import { REGISTER_LINK } from "../src/domain/consts";

const Index = (): ReactElement => {

  const router = useRouter()

  useEffect(() => {
    router.push(REGISTER_LINK)
  }, [])

  return (
    <>
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
