
import React, { useContext } from "react";
import ecommerce from "../assets/ecommerce.png";
import task from "../assets/task.png";
import protofolio from "../assets/protofolio.png";
import { DarkWhite } from "./Conetxt/context";
import "./OurWork.css";

const OurWork = () => {
  const { darkMode } = useContext(DarkWhite);

  const work = [
    {
      title: "E-Commerce Website",
      description:
        "A modern shopping platform with responsive design and smooth user experience.",
      image: ecommerce,
      category: "Web Development",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application to manage tasks, deadlines and daily activities.",
      image: task,
      category: "Web Application",
    },
    {
      title: "Personal Portfolio",
      description:
        "A creative portfolio website showcasing projects, skills and experience.",
      image: protofolio,
      category: "Portfolio",
    },
  ];

  return (
    <div className={`work-section m ${darkMode ? "work-dark" : "work-light"}`}>

      <div className="work-heading">
        <h1>Our Latest Work</h1>
        <p>Browse our portfolio of innovative digital projects</p>
        <p>showcasing creativity, performance and results.</p>
      </div>

      <div className="work-container">

        {work.map((project, index) => (
          <div key={index} className="work-card">

            <img
              src={project.image}
              alt={project.title}
              className="work-image"
            />

            <div className="work-content">

              <p className="work-category">
                {project.category}
              </p>

              <h2>{project.title}</h2>

              <p className="work-description">
                {project.description}
              </p>

            </div>
          </div>

        ))}

      </div>
    </div>
  );
};

export default OurWork;
