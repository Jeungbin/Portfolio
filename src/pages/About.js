import React from "react";
import image from "../img/main-img.png";
const About = () => {
  return (
    <section className="about-container">
      <img src={image} alt="" />
      <p>
        One year of experience in the web design industry designing a website to
        fit a company’s image and meet users’ needs.
        <br /> Knowledge of design using FIGMA,
        <br /> styling a website using CSS and Bootstrap, and Building
        interactive JavaScript websites.
        <br />
        I love using 'React'.
        <br />
        My goal is to create a user-friendly and well- refined website.
      </p>
      <div className="fonts">
        <a href="https://jeungbin.tistory.com/" target="_blank">
          <i className="fa-solid fa-blog"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jeungbin-han-aa2815237"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
