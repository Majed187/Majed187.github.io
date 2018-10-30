import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Badge } from "reactstrap";

import projects from "../projects.js";

class SingelPagePorject extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const project = projects[id];
    document.title = `${project.title} »»| Majed Projects`;
  }

  render() {
    const project = projects[this.props.match.params.id];
    console.log(project);

    console.log(this.props);
    return (
      <Fragment>
        <div className="text-center">
          <h1 className="display-3">{project.title}</h1>
          <img
            className="image projectImg img-fluid"
            src={project.imgUrl}
            alt={project.title}
          />
          <h2 className="display-4">{project.description}</h2>
          <div className="tags h3">
            {project.tags.map(tag => (
              <Badge key={tag} color="dark" pill>
                {tag}
              </Badge>
            ))}
          </div>
          <button className="btn btn-dark mt-3">
            <a href={project.projectUrl}>Check it On Github!</a>
          </button>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(SingelPagePorject);
