"use client";

import Footer from "./Component/Home/Footer";
import Hero from "./Component/Home/Hero";
import Navbar from "./Component/Home/Navbar";
import WhyAvowal from "./Component/Home/Whyavowal";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <Hero />
        <WhyAvowal />
        <Footer />
      </main>
    </div>
  );
}
