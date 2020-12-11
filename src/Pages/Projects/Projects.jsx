import React from "react";
import "./Projects.css";

const Project = () => {
  return (
    <div className="projects">
      <div className="project-row">
        <div className="project-div">
          <p className="project-title">Client App</p>
          <p className="project-descriptions">
            <b className="bold">Description:</b> An application where insurance
            agents can record meetings and insurance applications to a
            user-created account and send them to their email as a PDF.
          </p>
          <p className="project-descriptions">
            <b className="bold">Achievement:</b> I got paid for the first time
            for programming and was also my first professional experience in
            code.
          </p>
          <p className="project-descriptions">
            <b className="bold">Learned:</b> Learned to use nodemailer and
            PDFkit mainly through the creation of this application.
          </p>
          <div className="button-div-p">
            <a href="https://blueanchor.app/">
              <button className="visit-button">Visit Client App</button>
            </a>
            <a href="https://github.com/bchong12/client-app">
              <button className="visit-button">View On Github</button>
            </a>
          </div>
        </div>
        <div className="project-div">
          <p className="project-title">Still Waters</p>
          <p className="project-descriptions">
            <b className="bold">Description:</b> A Devotional and Journal app
            that I made to replicate Momentum, the popular chrome extension.
          </p>
          <p className="project-descriptions">
            <b className="bold">Achievement:</b> This was my first full stack
            app, and out of my project, my favorite one because its an
            application that I can intergrate into my daily life.
          </p>
          <p className="project-descriptions">
            <b className="bold">Learned:</b> Learned how to integrate back-end
            and front-end code, and also the purpose of redux in an application
          </p>
          <div className="button-div-p">
            <a href="http://still-waters.co/">
              <button className="visit-button">Visit Still Waters</button>
            </a>
            <a href="https://github.com/bchong12/still-waters">
              <button className="visit-button">View On Github</button>
            </a>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project-div">
          <p className="project-title">ScanAndGo</p>
          <p className="project-descriptions">
            <b className="bold">Description:</b> A mobile application I made
            with a group at the end of my bootcamp. Designed to replicate
            AmazonGo and Walmart's ScanAndGo.
          </p>
          <p className="project-descriptions">
            <b className="bold">Achievement:</b> This was my first app working
            in a group setting! Made friends through working on a project
            together
          </p>
          <p className="project-descriptions">
            <b className="bold">Learned:</b> Learned how to use github
            organization, and also git checkout and branches while working in a
            team. Also used Trello for the first time.
          </p>
          <div className="button-div-p">
            <a href="https://scanandgo.jesusreyes.dev/">
              <button className="visit-button">Visit ScanAndGo</button>
            </a>
            <a href="https://github.com/Mobile-check-out-team/mobile-checkout">
              <button className="visit-button">View On Github</button>
            </a>
          </div>
        </div>
        <div className="project-div">
          <p className="project-title">Local Giver</p>
          <p className="project-descriptions">
            <b className="bold">Description:</b> An ecommerce site/mobile
            application where small businesses offer small gifts and services in
            exchange for help. Created during the COVID-19 epidemic
          </p>
          <p className="project-descriptions">
            <b className="bold">Achievement:</b> An app I made with my friend
            Danny to enter into a bunch of hackathons. We won three out of the
            four hackathons we entered in!
          </p>
          <p className="project-descriptions">
            <b className="bold">Learned:</b> Learned how to code within a 24
            hour time frame, and also how to host an application for the first
            time.
          </p>
          <div className="button-div-p">
            <a href="https://devpost.com/software/local-giver">
              <button className="visit-button">Visit Local Giver</button>
            </a>
            <a href="https://youtu.be/JTbIQUvHx5s">
              <button className="hidden-1 visit-button">View on Youtube</button>
            </a>
            <a href="https://github.com/bchong12/LocalGiver1">
              <button className="visit-button">View On Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
