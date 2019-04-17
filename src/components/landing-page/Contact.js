import React, { Component } from "react";
import { ContactStyle } from "./ContactStyle";
import { toast } from "react-toastify";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import contact1 from "../../assets/contact1.svg";

class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    loading: false
  };
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const message = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      comments: this.state.comments
    };
    //https://lad-network.herokuapp.com
    this.setState({ loading: true }, () =>
      axios
        .post("https://lad-network.herokuapp.com/api/contactform", message)
        .then(res => this.setState({ loading: true }))
        .then(() => toast.success(`Your message was sucessfully sent`))
        .catch(err => {
          this.setState({ loading: false });
          const {
            email,
            firstName,
            lastName,
            comments,
            message
          } = err.response.data;
          toast.error(
            (err.response.data && email) ||
              firstName ||
              lastName ||
              comments ||
              message
          );
        })
    );

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      comments: ""
    });
  };

  render() {
    const { firstName, lastName, email, comments, loading } = this.state;
    return (
      <ContactStyle>
        <div className="container">
          <div className="contact-title" id="contact">
            {loading && <CircularProgress disableShrink />}
            <h2
              className="wow fadeInUp"
              data-wow-delay=".1s"
              data-wow-duration="2s"
            >
              Don’t Hesitate to Contact Us
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay=".2s"
              data-wow-duration="2s"
            >
              Get in touch with us to get started, or to get answers to any
              questions you may have—we’ll get back to you quickly.
            </p>
          </div>

          <div className="form-flex">
            <img
              src={contact1}
              alt="contact"
              className="wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="2s"
            />
            <form className="contact-form" onSubmit={this.onSubmitHandler}>
              <div className="row">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={this.onChangeHandler}
                    value={firstName}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  placeholder="Email Address"
                  className="form-control"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Comments"
                  cols={20}
                  rows={5}
                  className="form-control"
                  onChange={this.onChangeHandler}
                  name="comments"
                  value={comments}
                />
              </div>
              <div className="buttons_container contact-btn">
                <button type="submit" className="btn_blue">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </ContactStyle>
    );
  }
}

export default Contact;
