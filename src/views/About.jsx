import React, { Component } from "react";
import CV from "../components/Cv";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -69, scrollDuration: 1000 });

class Skills extends Component {
  render() {
    return (
      <ScrollableAnchor id={"About"}>
        <div className="About container h-100 ">
          <h1 className="display-4 text-center mb-5 font-weight-bold ">
            ABOUT ME
          </h1>

          <div className=" pl-5 h4 ">
            <p>
              I’m a passionate and pragmatic web developer, specializing in
              full-stack development using different technologies on the
              front/backend. <br />
              Strong in object-oriented analysis and design, and experience with
              a wide range of front-end and back-end frameworks. <br /> Also,
              being a handicraft, I have a good sense of design, colors,
              usability and can build beautiful and modern interfaces that
              people love. <br />I can assist in all stages of development,
              clean code. <br />I also have several years of experience leading.
              eager to learn new things and technologies.
            </p>
            <div className=" mt-5 clearfix aboutMe">
              <h1 className=" display-4 mt-5 text-center font-weight-bold">
                IT Skills
              </h1>
              <ul className="lang w-50 pt-5 pl-0 m-0 float-left ">
                <h1> Programming Languages & Environment </h1>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript& ES6 </li>
                <li>Nodejs</li>
              </ul>
              <ul className="lang w-50  py-5 float-right">
                <h1> Libraries & Tools </h1>
                <br />
                <li>Sass </li>
                <li>React</li>
                <li>react-router</li>
                <li>reactstrap</li>
                <li>Redux</li>
                <li>Express</li>
                <li>mongodb</li>
                <li>mongoose</li>
              </ul>
            </div>
          </div>
          <CV />
        </div>
      </ScrollableAnchor>
    );
  }
}
export default Skills;
