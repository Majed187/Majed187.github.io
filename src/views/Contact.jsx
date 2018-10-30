import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -69, scrollDuration: 1000 });
class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id={"Contact"}>
        <main className="contact container mt-5  ">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>Contact</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center ">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
              <form
                id="contact-form "
                className="form"
                action="https://formspree.io/majdsy369@gmail.com"
                method="POST"
              >
                <div className="form-group">
                  <label className="form-label h3" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control h3"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label h3" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control h3"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    I'll never share your email with anyone.
                  </small>
                </div>
                <div className="form-group">
                  <label className="form-label h3" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control h3"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    cols="50"
                    name="message"
                    className="form-control h3"
                    id="message"
                    placeholder="Message..."
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-start-order">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </ScrollableAnchor>
    );
  }
}
export default Contact;
