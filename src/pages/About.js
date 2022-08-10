import React from "react";
import image from "../img/main-img.png";

import image4 from "../img/KakaoTalk_20220805_120053768.png";
import image5 from "../img/Group 1.svg";
import image6 from "../img/Group 2.svg";
import image7 from "../img/KakaoTalk_20220805_121255442.png";
const About = () => {
  return (
    <section className="about-container">
      <div className="center">
        <section className="first-info">
          <img className="about-img" src={image} alt="" />
          <p>
            I majored in business administration and studied marketing at
            university. <br></br>While studying at university, I worked
            part-time as an English and Korean teacher at a small academy.
          </p>
        </section>
        <section className="sec-info">
          <i className="fa-solid fa-virus-covid"></i>
          <div className="sec-info-box">
            <p>
              Due to COVID-19, <br></br>
              the number of students at the academy has decreased significantly.
            </p>
          </div>
        </section>

        <section className="third-info">
          <div className="third-info-box">
            <p>I realized that We should start online education.</p>
          </div>
          <img src={image4} className="school-img" alt="" />
        </section>

        <section className="four-info">
          <img src={image5} alt="" />
          <div className="four-info-box">
            <p>
              I designed the website with Figma, And I made the website to use
              the WIX.<br></br> I worked as a web designer for a year.
            </p>
          </div>
        </section>

        <section className="five-info">
          <div className="five-info-box">
            <p>
              I was interested in web design and development and I am studying
              hard to become a web developer.
            </p>
          </div>
          <img src={image6} className="program-works" alt="" />
          <img src={image7} className="study-img" alt="" />
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
