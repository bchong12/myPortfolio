import React, { useEffect } from "react";
import Particles from "particlesjs";
import "./Landing.css";

const Landing = () => {
  useEffect(() => {
    Particles.init({
      selector: ".background",
      connectParticles: true,
      maxParticles: 100,
      color: "#DBE1E1",
      speed: 0.5,
      responsive: true,
    });
  }, []);
  return (
    <>
      <div className="landing">
        <section className="top-of-page">
          <p className="introduction">
            Branden <b className="hidden">Hwehyun</b> Chong
          </p>
          <p className="description">
            <b className="hidden">Full Stack</b> Web Developer • SWE{" "}
            <b className="hidden">ASU</b> Student •{" "}
            <b className="hidden">Coding</b> Bootcamp Graduate
          </p>
          <div className="link-wrapper">
            <a
              target="_blank"
              className="links"
              href="https://github.com/bchong12"
            >
              <img
                className="link-icon"
                src="https://s3-us-west-1.amazonaws.com/frankiehliu.com/github.svg"
              />
            </a>
            <a
              target="_blank"
              className="links"
              href="https://www.linkedin.com/in/brandenchong/"
            >
              <img
                className="link-icon"
                src="https://s3-us-west-1.amazonaws.com/frankiehliu.com/linkedin.svg"
              />
            </a>
            <a target="_blank" className="links" href="mailto:bchong2@asu.edu">
              <img
                className="letter-icon"
                src="https://s3-us-west-1.amazonaws.com/frankiehliu.com/letter.svg"
              />
            </a>
          </div>
        </section>

        <canvas class="background"></canvas>
      </div>
    </>
  );
};

export default Landing;
