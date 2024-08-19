import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Redirect ke rute root ("/") atau ke bagian `Hero`
    if (window.location.pathname !== "/") {
      navigate("/"); // Ini mengarahkan kembali ke rute awal
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
