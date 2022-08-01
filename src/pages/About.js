import React from "react";
import image from "../components/main-img.png";
const About = () => {
  return (
    <section className="about-container">
      <img className="about-img" src={image} alt="" />
      <p>
        One year of experience in the web design industry designing a website to
        fit a company’s image and meet users’ needs.
        <br /> Knowledge of design using <span>FIGMA</span>,
        <br /> styling a website using <span>CSS</span> and{" "}
        <span>Bootstrap</span>, and Building interactive <span>JavaScript</span>{" "}
        websites.
        <br />I love using <span>'React'</span>.
        <br />
        I'm learning <span>Node</span> and <span>Express</span>! I'm enjoying
        learning.
        <br />
        My goal is to create a user-friendly and well- refined website.
      </p>
      <div className="fonts">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jeungbin.tistory.com/"
        >
          <i className="fa-solid fa-blog"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jeungbin-han-aa2815237"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
