import React from "react";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import Technologies from "../partials/Technologies";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesHome /> */}
        <FeaturesBlocks />
        <Technologies />
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
