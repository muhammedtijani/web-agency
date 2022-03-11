import { BiLock } from "react-icons/bi";
import CaseStudies from "../components/Casestudies/CaseStudies.jsx";
import Count from "../components/Count/Count.jsx";
import HalfSection from "../components/HalfSection/HalfSection.jsx";
import Hero from "../components/Hero/Hero";
import HomeService from "../components/HomeServices/HomeService.jsx";
import HomeWelcome from "../components/HomeWelcome/HomeWelcome.jsx";
import OurExpertise from "../components/OurExpertise/OurExpertise.jsx";
import Process from "../components/Process/Process.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";

const Home = () => {
  return (
    <>
      <Hero style={{ display: "block" }} />
      <Count />
      <HomeWelcome />
      <HalfSection name="Core" title="services" />
      <HomeService />
      <HalfSection name="Portfolio that" title="speak!" />
      <CaseStudies />
      <Process />
      <OurExpertise />
      <Testimonials />
    </>
  );
};

export default Home;
