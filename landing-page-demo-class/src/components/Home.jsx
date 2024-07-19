import React from "react";
import AboutUsSection from "./AboutUs/AboutUsSection";
import FAQ from "./FAQ/FAQ";
import Teacher from "./Teacher/Teacher";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import About from "./AboutUs/About";
import Contact from "./contact/Contact";
const Home = () => {
  return (
    <div>
      <About />

      <WhyChooseUs />
      {/* <Teacher /> */}
      <AboutUsSection />
      <Contact />
    </div>
  );
};

export default Home;
