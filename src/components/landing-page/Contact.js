import React, { Component } from "react";
import { ContactStyle } from "./ContactStyle";

class Contact extends Component {
  render() {
    return (
      <ContactStyle>
        <div className="container">
          <div className="contact-title">
            <h2>contact page here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A non
              mollitia velit fugiat ducimus.
            </p>
          </div>
        </div>
      </ContactStyle>
    );
  }
}

export default Contact;
