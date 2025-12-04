import React from "react";
import bgImage from "../assets/Arun1.jpg";

/**
 * Home Section - split layout
 */
const Home = () => {
  return (
    <section id="home">
      <div className="home-left">
        <img src={bgImage} alt="Arun KC" />
      </div>

      <div className="home-right">
        <h1>Hello, I'm Arun KC</h1>
        <h2>Junior Developer</h2>
        <p>Welcome to my personal portfolio website! I am passionate about building modern, responsive, and user-friendly web applications. I love exploring new technologies and applying them to real-world projects. My aim is to combine creativity with technical skills to create solutions that make a difference.</p>
        <p>📞 Phone: +977-9762551925</p>
        <p>✉ Email: kcarun3322@gmail.com</p>
        <button
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Home;
