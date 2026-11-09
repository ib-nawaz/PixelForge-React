import React, { useContext, useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { DarkWhite } from './Conetxt/context';
import toast from 'react-hot-toast';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Layers3 } from "lucide-react";

const Footer = () => {

    const { darkMode } = useContext(DarkWhite)
    const [subs, setsubs] = useState("")

    function Handle() {
        if (!subs.includes("@") || !subs.includes(".") || subs.length < 3) {
            toast.error("Please enter a valid email address!")
            setsubs("")
            return
        }
        setsubs("")
        toast.success("ThankYou For Subscribe Us!")
    }

    return (

        <footer className={`footer ${darkMode ? "dark-footer" : "light-footer"}`}>

            {/* BRAND */}
            <div className="footer-top">

                <div className="footer-brand">
                    <div className="footer-logo">

                        <span className="footer-logo-icon">
                            <Layers3 size={24} />
                        </span>

                        <span className="footer-logo-text">
                            PixelForge<span>.</span>
                        </span>

                    </div>

                    <p className="footer-description">
                        From strategy to execution, we craft
                        digital solutions that move your
                        business forward.
                    </p>
                </div>

                {/* NAVIGATION */}
                <div className="footer-links ">
                    <h3>Quick Links</h3>

                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/ourwork">Our Work</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/privacy">Privacy Policy</NavLink>
                </div>

                {/* NEWSLETTER */}
                <div className="footer-newsletter">

                    <h3>Subscribe to our Newsletter</h3>

                    <p>
                        The latest news, articles and resources,
                        sent to your mailbox weekly.
                    </p>

                    <form
                        className="newsletter-form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={subs}
                            onChange={(e) => setsubs(e.target.value)}
                            required
                        />

                        <button type="submit"
                            onClick={Handle}>
                            Subscribe
                        </button>
                    </form>

                </div>

            </div>

            {/* BOTTOM FOOTER */}
            <div className="footer-bottom ">

                <p className="footer-copyright">
                    © 2026 PixelForge. All rights reserved.
                </p>

                {/* SOCIAL ICONS */}
                <div className="footer-socials">

                    <FaInstagram className="social-instagram" />

                    < FaLinkedin className="social-linkedin" />

                    < FaGithub className="social-github" />

                    <FaTwitter className="social-twitter" />

                </div>

            </div>

        </footer>
    );
};

export default Footer;
