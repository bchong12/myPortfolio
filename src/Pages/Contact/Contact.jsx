import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <img className="pic" src={require("../../Assets/branden.png")} />
      <div className="right-side">
        <p className="greeting">Hey There! 👋🏻</p>
        <p>a little about me..</p>
        <div className="section-fact">
          <p className="fact">
            • I graduated DevMountain, a coding bootcamp, in November 2020
          </p>
          <div className="fact">
            <p>• I am a sophmore studying Software Engineering</p>
            <p>studying at Arizona State University</p>
          </div>
        </div>
        <div className="section-fact">
          <p className="fact">
            • I'm a huge NBA geek, I love all things basketball
          </p>
          <p className="fact">
            • I have a passion for music, and all things related
          </p>
          <p className="fact">• Live to laugh, love, and learn</p>
        </div>
        <div className="section-fact">
          <p className="fact">
            I am currently located in Los Angeles, but am willing to relocate
            for any opportunities! I'm always open to work!
          </p>
        </div>
        <a href="https://docs.google.com/document/d/14owF852jv-_Qjw4nhG-w6d1UzFgcc1-IMIJulh0fGcE/edit">
          <button className="resume-button">RESUME</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
