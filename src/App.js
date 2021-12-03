import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Social from "./components/Social";
import Product from "./components/product";
// import Soon from "./components/Soon";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Soon /> */}
      <Product />
      <Social />
    </div>
  );
}
export default App;
