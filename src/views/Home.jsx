import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import Projects from "../views/Projects";
import Contact from "../views/Contact";
import Footer from "../components/Footer";
import About from "../views/About";
configureAnchors({ offset: -69, scrollDuration: 1000 });

class Home extends Component {
  render() {
    return (
      <ScrollableAnchor id={"Home"}>
        <div className="">
          <main className="col-sm-8 container d-flex justify-content-center home  mb-5 ">
            <div className="text-center  m-auto">
              <h1 className="  bounce-top display-2">Majed Shrendan</h1>
              <h2 className="mt-5"> JUNIOR FULL-STACK WEB DEVELOPER </h2>
              <button type="button" className="btn btn-dark mt-3 display-3">
                <a className="text-light" href="#About">
                  More About me
                </a>
              </button>
            </div>
          </main>
          <Footer />
          <About />
          <Projects />
          <Contact />
        </div>
      </ScrollableAnchor>
    );
  }
}
export default Home;
