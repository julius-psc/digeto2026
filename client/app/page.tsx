import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyWeExist from "@/components/WhyWeExist";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Market from "@/components/Market";
import WhyFoundersChoose from "@/components/WhyFoundersChoose";
import Pricing from "@/components/Pricing";
import AboutDigeto from "@/components/AboutDigeto";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="problem">
        <WhyWeExist />
      </div>
      <WhatWeDo />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Market />
      <WhyFoundersChoose />
      <Pricing />
      <div id="about">
        <AboutDigeto />
      </div>
      <ContactCta />
      <Footer />
    </>
  );
}
