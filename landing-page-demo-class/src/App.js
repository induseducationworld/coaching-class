import logo from "./logo.svg";
import Header from "./components/Header/Header";
import About from "./components/AboutUs/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import AboutUsSection from "./components/AboutUs/AboutUsSection";
import FAQ from "./components/FAQ/FAQ";
import Teacher from "./components/Teacher/Teacher";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <Preloader loading={loading} />

      <Header />
      <About />
      <AboutUsSection />
      <WhyChooseUs />
      <Teacher />

      {/* <FAQ /> */}
      <Contact />
    </div>
  );
}

export default App;
