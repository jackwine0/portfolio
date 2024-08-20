import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-container">
      <div className="contact-header">
        <h2>GET IN TOUCH !</h2>
        <p>
          Want to discuss a project or just say hi? I'd love to hear from you!
        </p>
      </div>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;