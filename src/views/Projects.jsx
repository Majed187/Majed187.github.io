import React, { Component } from "react";
import projects from "../projects.js";
import { Link, withRouter } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -69, scrollDuration: 1000 });

class Projects extends Component {
  render() {
    return (
      <ScrollableAnchor id={"Projects"}>
        <div className="container">
          <div className="text-center">
            <h1 className="display-3 font-weight-bold ">Featured Work</h1>
          </div>

          {projects.map((project, i) => (
            <figure className="image figure p-3" key={i}>
              <img
                src={project.thumbnailUrl}
                className=" img-fluid  "
                alt={project.title}
              />
              <div className=" text-center">
                <figcaption className=" h2 pt-5 ">{project.title}</figcaption>

                <Link className="btn  btn-dark" to={`/projects/${i}`}>
                  See Project
                </Link>
              </div>
            </figure>
          ))}
        </div>
      </ScrollableAnchor>
    );
  }
}
export default withRouter(Projects);
