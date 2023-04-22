import React from "react";
import contact from "../assets/images/undraw-contact.jpg";
import Layout from "../components/Layout/Layout";
function Contact() {
  return (
    <Layout>
      <div className="contact-container">
        <div className="contact-container__body">
          <img src={contact} />
        </div>
        <div className="form-container">
          <form className="main-form">
            <h1>Contact Us</h1> <br />
            <div>
              <label>Name</label> <br />
              <input hint="Enter your name" type="text" id="name" readOnly />
            </div>
            <div className="form-element">
              <label>Email</label> <br />
              <input
                hint="Enter your Email ID"
                type="email"
                id="email"
                readOnly
              />
            </div>
            <div className="form-element">
              <label>Phone</label> <br />
              <input hint="Phone Number" type="text" id="phone" readOnly />
            </div>
            <div className="form-element">
              <label>Message</label> <br />
              <textarea
                readOnly
                id="msg"
                rows="5"
                placeholder="Questions/comments..."
              ></textarea>
            </div>
            <input className="click" type="Submit" value="Submit" readOnly />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
