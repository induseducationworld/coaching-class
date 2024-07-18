// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";

import Contact from "./components/contact/Contact";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import Footer from "./components/contact/Footer";
import AdminWrapper from "./components/Admin/AdminWrapper";
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
    <Router>
      <div className="App">
        <Preloader loading={loading} />

        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />

          {/* Add more routes here for other sections if needed */}
          <Route path="/admin" element={<AdminWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
