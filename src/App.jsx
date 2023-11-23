import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";
import SignIn from "./pages/Signin";
import About from "./pages/About";




const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/signin" exact element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App