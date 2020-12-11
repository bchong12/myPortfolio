import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import Header from "./Components/Header/Header.component";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/skills">
        <Skills />
      </Route>
      <Route exact path="/projects">
        <Project />
      </Route>
      <Route exact path="/about">
        <Contact />
      </Route>
    </BrowserRouter>
  );
}

export default App;
