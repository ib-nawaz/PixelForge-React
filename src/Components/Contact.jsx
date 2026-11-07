
import React, { useState } from 'react'
import "./Contact.css"
import { ArrowRight } from 'lucide-react'

const Contact = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [textarea, settextarea] = useState("")

  return (
    <div className="contact-section">

      <h1 className="contact-heading">
        Reach Out To Us!
      </h1>

      <p className="contact-description">
        Ready to Grow Your Brand? Let's Contact and Build Something
        <span>Exceptional Together</span>
      </p>

      <div className="contact-form">
        <form>

          {/* Name + Email */}
          <div className="contact-row">

            <div className="contact-field">
              <label>Your Name :</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div className="contact-field">
              <label>Your Email :</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

          </div>

          {/* Textarea Below */}
          <div className="contact-field contact-message">
            <label>Your Message :</label>
            <textarea
              placeholder="Write your message..."
              value={textarea}
              onChange={(e) => settextarea(e.target.value)}
              rows={10}
              cols={30}
            />
          </div>


          <button className="contact-submit"
            type='submit'>
            Submit
            <span className="contact-submit-icon">
              <ArrowRight size={20} />
            </span>
          </button>

        </form>
      </div>

    </div>
  )
}

export default Contact
