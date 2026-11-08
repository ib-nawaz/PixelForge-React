
import React, { useState } from "react";
import "./Contact.css";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {

  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fad7f993-f733-43db-b0fa-4b401433f11e");
    

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    }
    catch (error) {
      toast.error("Error", data);
    }
  };

  return (
    <div className="contact-section">

      {/* HEADING */}
      <h1 className="contact-heading">
        Reach Out To Us!
      </h1>

      <p className="contact-description">
        Ready to Grow Your Brand? Let's Contact and Build Something
        <span> Exceptional Together</span>
      </p>

      {/* CONTACT FORM */}
      <div className="contact-form">

        <form onSubmit={onSubmit}>

          {/* NAME + EMAIL */}
          <div className="contact-row">

            <div className="contact-field">
              <label>Your Name :</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-field">
              <label>Your Email :</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

          </div>

          {/* MESSAGE */}
          <div className="contact-field contact-message">

            <label>Your Message :</label>

            <textarea
              name="message"
              placeholder="Write your message..."
              rows={10}
              cols={30}
              required
            />

          </div>

          {/* SUBMIT BUTTON */}
          <button
            className="contact-submit"
            type="submit"
          >
            Submit

            <span className="contact-submit-icon">
              <ArrowRight size={20} />
            </span>
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;
