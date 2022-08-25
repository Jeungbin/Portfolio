import React from "react";
import image from "../img/main-img.png";

import image4 from "../img/KakaoTalk_20220825_083817267.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="center">
        <section className="first-info">
          <img className="about-img" src={image4} alt="" />
          <div>
            <h3>I'm Front-End Developer.</h3>
            <br />
            <br />
            <p>
              I majored in business administration and studied marketing at
              university. <br />
              While studying at university, I worked part-time as an English and
              Korean teacher at a small academy. Due to COVID-19, the number of
              students at the academy has decreased significantly.
              <br />I realized that We should start online education. I designed
              the website with Figma, And I made the website to use the WIX.
              <br></br> I worked as a web designer for a year. I was interested
              in web design and development and I am studying hard to become a
              web developer.
            </p>
          </div>
        </section>
      </div>
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
