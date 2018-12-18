import React, { Component } from "react";
import logoWhite from "../../img/logo-white.png";

export default class Natours extends Component {
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
        <div className="test">Test</div>
      </div>
    );
  }
}
