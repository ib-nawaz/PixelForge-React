
import React from "react";
import { ShieldCheck, LockKeyhole, Database, Cookie, Globe, Mail, ArrowUpRight, Sparkles, } from "lucide-react";
import "./Privacy.css";
import { NavLink } from "react-router-dom";

const Privacy = () => {
    const sections = [
        {
            icon: Database,
            title: "Information We Collect",
            text: "We may collect your name, email address, project details, and other information you voluntarily provide through our contact forms.",
        },
        {
            icon: LockKeyhole,
            title: "How We Use Your Information",
            text: "Your information helps us respond to inquiries, communicate with clients, improve our website, and provide requested services.",
        },
        {
            icon: Cookie,
            title: "Cookies & Tracking",
            text: "Our website may use cookies and similar technologies to improve functionality and enhance your browsing experience.",
        },
        {
            icon: ShieldCheck,
            title: "Data Protection",
            text: "We take reasonable security measures to protect your personal information against unauthorized access, disclosure, or misuse.",
        },
        {
            icon: Globe,
            title: "Third-Party Services",
            text: "Our website may include external services or links. Their privacy practices are governed by their respective policies.",
        },
        {
            icon: Mail,
            title: "Your Privacy Rights",
            text: "You may request access to, correction of, or deletion of your personal information, subject to applicable laws.",
        },
    ];

    return (
        <section className="privacy-section">

            {/* Background Glow */}
            <div className="privacy-glow" />

            <div className="privacy-container">

                {/* Hero */}
                <div className="privacy-hero">

                    <div className="privacy-badge">
                        <Sparkles size={15} />
                        Your Privacy Matters
                    </div>

                    <h1 className="privacy-heading">
                        Privacy{" "}
                        <span>Policy</span>
                    </h1>

                    <p className="privacy-description">
                        Transparency and trust are at the heart of everything we do.
                        Learn how Nexora handles and protects your information.
                    </p>

                    <p className="privacy-updated">
                        Last Updated · November 7, 2026
                    </p>

                </div>

                {/* Intro Card */}
                <div className="privacy-intro">

                    <div className="privacy-watermark">
                        <ShieldCheck size={180} />
                    </div>

                    <div className="privacy-intro-content">

                        <div className="privacy-intro-icon">
                            <ShieldCheck size={28} />
                        </div>

                        <div>
                            <h2 className="privacy-intro-title">
                                Your Trust, Our Responsibility
                            </h2>

                            <p className="privacy-intro-text">
                                At Nexora, we respect your privacy and are committed to
                                protecting the information you share with us. This policy
                                explains what information we collect, why we collect it,
                                and how you can stay in control of your data.
                            </p>
                        </div>

                    </div>

                </div>

                {/* Policy Grid */}
                <div className="privacy-grid">

                    {sections.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={index}
                                className="privacy-card"
                            >

                                <div className="privacy-card-icon">
                                    <Icon size={23} />
                                </div>

                                <h3 className="privacy-card-title">
                                    {item.title}
                                </h3>

                                <p className="privacy-card-text">
                                    {item.text}
                                </p>

                            </div>
                        );
                    })}

                </div>

                {/* Contact Card */}
                <div className="privacy-contact">

                    <div>
                        <h2 className="privacy-contact-title">
                            Have Questions About Privacy?
                        </h2>

                        <p className="privacy-contact-text">
                            We're here to help you understand how your information is handled.
                        </p>
                    </div>


                    <NavLink
                        to="/contact"
                        className="privacy-contact-button"
                    >
                        Contact Us
                        <ArrowUpRight size={18} />
                    </NavLink>

                </div>

                {/* Footer Note */}
                <div className="privacy-footer">
                    © 2026 Nexora. All rights reserved.
                </div>

            </div>
        </section >
    );
};

export default Privacy;
