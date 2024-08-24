import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-form-container">
      <iframe
        id="JotFormIFrame-242325612882052"
        title="GET IN TOUCH !"
        onload="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/242325612882052"
        frameborder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "920px",
          border: "none",
          borderRadius:"15px",
        }}
        scrolling="yes"
      />
      <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" />
      <script>
        {`window.jotformEmbedHandler("iframe[id='JotFormIFrame-242325612882052']", "https://form.jotform.com/")`}
      </script>
    </div>
  );
};

export default Contact;