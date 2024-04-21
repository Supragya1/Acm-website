import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/Navbar.css";
import "./components/Footer.css"
import Home from "./components/Home";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Initiatives from "./components/Initiatives";
import About from "./components/About";
import Card from "./components/Card";
import Contact from './components/Contact';
// import Committee from "./components/Committee";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Initiatives" element={<Initiatives />} />
          <Route path="/About" element={<About />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Contact" element={<Contact/>}/>
          {/* <Route path="/Committee" element={<Committee/>}/> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;