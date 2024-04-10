import React, { useState } from "react";
import aboutImg from "../images/about.jpg";

const AboutMe: React.FC = () => {
  // state
  const [IsActive, setIsActive] = useState(false);
  // function
  const readMoreBtnHandler = () => {
    setIsActive(true);
  };
  const readLessBtnHandler = () => {
    setIsActive(false);
  };
  // render
  return (
    <section className="about-me" id="about-me">
      <div className="about-me-container">
        <h2>ABOUT ME</h2>
        <p>
          My name is Keisuke. I am a passionate IT enthusiast, barista,
          nature-lover and a father based in Berlin.
        </p>
        <p>
          As a self-taught web developer, I am always very happy to work on
          challenging projects where my programming skills and sense of web
          design can be used to the fullest extent.
        </p>
        {!IsActive && (
          <div className="read-more">
            <div className="read-more-border"></div>
            <button className="read-more-button" onClick={readMoreBtnHandler}>
              Interested More?
            </button>
          </div>
        )}
        {IsActive && (
          <div className="about-me-full-text">
            <p>
              I started my job career as barista in 2016. Since then, I spread
              my passion for speciality coffee all the time. Once I had the
              opportunity to create a website for the café where I was working,
              I started to learn how to code.
            </p>
            <p>
              After one hour of learning, I realized that programming lit a fire
              in me.
            </p>
            <p>Immediately, I researched how to become a programmer.</p>
            <p>
              Now after deep learning about programming through self-study, I
              enjoy creating modern, fast, user-friendly, cross-browser
              compatible and easily maintainable website using following
              technology:
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS / SCSS</li>
              <li>JavaScript / TypeScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
            </ul>
            <p>
              I don't learn programming because I have to learn, I learn because
              I want to. It may sound childish, but it's the truth. That's so
              much fun for me to deepen my knowledge or to acquire new stuffs.
              After this process you achieve what you really want to develop and
              that is my happiest moment ever. In that sense, I can't stop
              learning.
            </p>
            <p>
              As you can imagine, I am very curious when it comes to
              programming. Let's talk about technology anytime, and I'd be very
              happy to work with you!
            </p>
            <div className="read-less">
              <div className="read-less-border"></div>
              <a href="#about-me">
                <button
                  className="read-less-button"
                  onClick={readLessBtnHandler}
                >
                  Show Less
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
      <div
        className={
          "about-me-img-background" + " " + (IsActive ? "do-fixed" : "")
        }
      >
        <img src={aboutImg} alt="about me" />
      </div>
    </section>
  );
};
export default AboutMe;
