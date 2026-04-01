import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";
import WhyWeExist from "@/components/WhyWeExist";
import WhyFoundersChoose from "@/components/WhyFoundersChoose";
import AboutDigeto from "@/components/AboutDigeto";
import RealResults from "@/components/RealResults";
import Pricing from "@/components/Pricing";
import TrustedBy from "@/components/TrustedBy";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhatWeDo />
      <WhyWeExist />
      <WhyFoundersChoose />
      <AboutDigeto />
      <Pricing />
      <RealResults />
      <TrustedBy />
      <ContactCta />
      <Footer />
    </>
  );
}
