import React, { Component } from "react";
import "./css/style.css";
import logoWhite from "./img/logo-white.png";

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__logo-box">
            <img src={logoWhite} alt="logo" className="header__logo" />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Outdoors</span>{" "}
              <span className="heading-primary--sub">
                is where life happens
              </span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">
              Discover our tours
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
