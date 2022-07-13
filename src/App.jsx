import React from "react";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Header from "./components/header/header";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
const App = () => {
  return (
    <>
      <Nav />
      <div class="dummy">.</div>
      <Header />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
