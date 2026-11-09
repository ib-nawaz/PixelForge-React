
import React, { useContext } from "react";
import "./OurWork.css";
import { DarkWhite } from "./Conetxt/context";

const OurTeam = () => {
    const { darkMode } = useContext(DarkWhite);

    const avatars = [
        {
            id: 55,
            name: "Haley Carter",
            profession: "CEO & Founder"
        },
        {
            id: 54,
            name: "James Walker",
            profession: "Ads Manager"
        },
        {
            id: 21,
            name: "Jessica Morgan",
            profession: "Vice President"
        },
        {
            id: 24,
            name: "Ashley Bennett",
            profession: "Marketing & Sales"
        },
        {
            id: 45,
            name: "Emiley Parker",
            profession: "Content Marketer"
        },
        {
            id: 51,
            name: "Ryan Mitchell",
            profession: "Content Writer"
        },
        {
            id: 29,
            name: "Megan Brooks",
            profession: "Performance Manager"
        },
        {
            id: 38,
            name: "Amber Foster",
            profession: "Senior Writer"
        }
    ];

    return (
        <section className={`team-section ${darkMode ? "team-dark" : "team-light"}`}>

            <div className="team-heading">

                <span className="team-subtitle">
                    OUR CREATIVE PEOPLE
                </span>

                <h1>
                    Meet <span>Our Team</span>
                </h1>

                <p>
                    A passionate team of digital experts dedicated to your
                    <br className="team-break" />
                    brand's success.
                </p>

            </div>

            <div className="team-container">

                {avatars.map((avatar, index) => {
                    return (
                        <div key={index} className="team-card">

                            <img
                                src={`https://i.pravatar.cc/150?img=${avatar.id}`}
                                alt={avatar.name}
                                className="team-image"
                            />

                            <div className="team-name">
                                {avatar.name}
                            </div>

                            <div className="team-profession">
                                {avatar.profession}
                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default OurTeam;