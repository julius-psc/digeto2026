import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyWeExist from "@/components/WhyWeExist";
import WhatWeDo from "@/components/WhatWeDo";
import WhyFoundersChoose from "@/components/WhyFoundersChoose";
import Market from "@/components/Market";
import AboutDigeto from "@/components/AboutDigeto";
import Pricing from "@/components/Pricing";
import Traction from "@/components/Traction";
import RealResults from "@/components/RealResults";
import TrustedBy from "@/components/TrustedBy";
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
      <WhyFoundersChoose />
      <Market />
      <AboutDigeto />
      <Pricing />
      <Traction />
      <RealResults />
      <TrustedBy />
      <ContactCta />
      <Footer />
    </>
  );
}
