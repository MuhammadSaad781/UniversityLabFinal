import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";

export default function LandingPage({ itemCount, updateItem }) {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}
