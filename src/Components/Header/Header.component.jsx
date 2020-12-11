import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import header from "./header-image";
import "./Header.component.css";

const Header = (props) => {
  const [color1, setColor1] = useState("header-link");
  const [color2, setColor2] = useState("header-link");
  const [color3, setColor3] = useState("header-link");
  const [color4, setColor4] = useState("header-link");

  useEffect(() => {
    if (props.location.pathname === "/") {
      setColor1("color");
    } else if (props.location.pathname === "/skills") {
      setColor2("color");
    } else if (props.location.pathname === "/projects") {
      setColor3("color");
    } else if (props.location.pathname === "/about") {
      setColor4("color");
    }
  }, []);

  return (
    <div className="header">
      <div className="header-left">
        <img src={header.pic} className="desktop-logo" />
      </div>

      <div className="header-links">
        <p
          onClick={() => {
            props.history.push("/");
            setColor1("color");
            setColor2("header-link");
            setColor3("header-link");
            setColor4("header-link");
          }}
          className={color1}
        >
          home
        </p>
        <p
          onClick={() => {
            props.history.push("/skills");
            setColor1("header-link");
            setColor2("color");
            setColor3("header-link");
            setColor4("header-link");
          }}
          className={color2}
        >
          skills
        </p>
        <p
          onClick={() => {
            props.history.push("/projects");
            setColor1("header-link");
            setColor2("header-link");
            setColor3("color");
            setColor4("header-link");
          }}
          className={color3}
        >
          projects
        </p>
        <p
          onClick={() => {
            props.history.push("/about");
            setColor1("header-link");
            setColor2("header-link");
            setColor3("header-link");
            setColor4("color");
          }}
          className={color4}
        >
          about
        </p>
      </div>
    </div>
  );
};

export default withRouter(Header);
