import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";

const Footer = props => (
  <div className="contact">
    <footer className="footer  navbar-expand-md">
      <span>
        <a
          href="https://www.linkedin.com/in/majed-shrendan-367244170/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className=" icon insta p-1" icon={faLinkedinIn} />
        </a>
      </span>
      <span>
        <a
          href="https://twitter.com/Majed_Sh_Rendan"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className="icon pl-1 " icon={faTwitter} />
        </a>
      </span>
      <span>
        <a
          href="https://github.com/Majed187"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className="icon git pl-1" icon={faGithubSquare} />
        </a>
      </span>
    </footer>
  </div>
);

export default Footer;
