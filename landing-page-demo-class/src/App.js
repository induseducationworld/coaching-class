import logo from "./logo.svg";
import Header from "./components/Header/Header";
import About from "./components/AboutUs/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import AboutUsSection from "./components/AboutUs/AboutUsSection";
import FAQ from "./components/FAQ/FAQ";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <AboutUsSection />

      <Contact />
    </div>
  );
}

export default App;
