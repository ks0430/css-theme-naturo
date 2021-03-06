import React, { Component } from "react";
import logoWhite from "../../img/logo-white.png";
import { Link } from "react-router-dom";
import Card from "./components/card";

//  imgs
import nat1 from "../../img/nat-1-large.jpg";
import nat2 from "../../img/nat-2-large.jpg";
import nat3 from "../../img/nat-3-large.jpg";
import nat8 from "../../img/nat-8.jpg";
import nat9 from "../../img/nat-9.jpg";

import video from "../../img/video.mp4";
import videoWeb from "../../img/video.webm";

export default class Natours extends Component {
  render() {
    return (
      <div className="natours">
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  01 About Natours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  02 Your benefits
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  03 Popular tours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  04 Stories
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  05 Book now
                </a>
              </li>
            </ul>
          </nav>
        </div>
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
        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-md">
              <h2 className="heading-secondary">
                Exciting tours for adventurous people
              </h2>
            </div>

            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-sm">
                  You're going to fall in love with nature.
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  pariatur unde voluptates cum iste illo illum aut. Veniam,
                  debitis. Asperiores ea et corporis dignissimos eum laudantium
                  id nobis aperiam itaque.
                </p>

                <h3 className="heading-tertiary u-margin-bottom-sm">
                  Live advantures like you never have before
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  pariatur expedita ipsam, est nostrum itaque.
                </p>

                <Link to="/natours" className="btn-text">
                  Learn more &rarr;
                </Link>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src={nat1}
                    alt="nat1"
                    className="composition__photo composition__photo--p1"
                  />
                  <img
                    src={nat2}
                    alt="nat2"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src={nat3}
                    alt="nat3"
                    className="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="icon-basic-world feature-box__icon" />
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    dicta consequatur officia temporibus.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="icon-basic-compass feature-box__icon" />
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    Meet nature
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    dicta consequatur officia temporibus.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="icon-basic-map feature-box__icon" />
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    Find your way
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    dicta consequatur officia temporibus.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="icon-basic-heart feature-box__icon" />
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    Live a healthier life
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    dicta consequatur officia temporibus.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-md">
              <h2 className="heading-secondary">Most popular tours</h2>
            </div>

            <div className="row">
              <div className="col-1-of-3">
                <Card value={1} />
              </div>
              <div className="col-1-of-3">
                <Card value={2} />
              </div>
              <div className="col-1-of-3">
                <Card value={3} />
              </div>
            </div>

            <div className="u-center-text u-margin-top-md">
              <a href="#section-tours" className="btn btn--green">
                Discover all tours
              </a>
            </div>
          </section>

          <section className="section-stories">
            <div className="u-center-text u-margin-bottom-md">
              <h2 className="heading-secondary">
                We make people genuinely happy
              </h2>
            </div>
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                <source src={videoWeb} type="video/webm" />
                Your browser is not supported!
              </video>
            </div>

            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={nat9}
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">
                    Marry Smith
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    I had the best week ever with my family
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum repellat officiis architecto consectetur nisi maiores
                    alias veritatis suscipit unde. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Illum repellat officiis
                    architecto consectetur nisi maiores alias veritatis suscipit
                    unde.
                  </p>
                </div>
              </div>
              <div className="story">
                <figure className="story__shape">
                  <img
                    src={nat8}
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">
                    Marry Smith
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    I had the best week ever with my family
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum repellat officiis architecto consectetur nisi maiores
                    alias veritatis suscipit unde. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Illum repellat officiis
                    architecto consectetur nisi maiores alias veritatis suscipit
                    unde.
                  </p>
                </div>
              </div>
              <div className="u-center-text u-margin-top-md">
                <a href="#" className="btn-text">
                  Read all stories
                </a>
              </div>
            </div>
          </section>

          <section className="section-book">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-xm">
                    <h2 className="heading-secondary">Start booking now</h2>
                  </div>
                  <div className="form__group">
                    <input
                      id="name"
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      required
                    />
                    <label htmlFor="name" className="form__label">
                      Full name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      id="email"
                      type="email"
                      className="form__input"
                      placeholder="Email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email
                    </label>
                  </div>
                  <div className="form-group u-margin-bottom-xm">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button" />
                        Small tour group
                      </label>
                    </div>
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button" />
                        Large tour group
                      </label>
                    </div>
                  </div>
                  <button className="btn btn--green">Next Step</button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <div className="popup" id="popup">
          <div className="popup__content">
            <div className="popup__left">
              <img className="popup__img" src={nat8} alt="Photo8" />
              <img className="popup__img" src={nat9} alt="Photo9" />
            </div>
            <div className="popup__right">
              <a href="#section-tours" className="popup__close">
                &times;
              </a>
              <h2 className="heading-secondary u-margin-bottom-sm">
                Start booking now
              </h2>
              <h3 className="heading-tertiary  u-margin-bottom-sm">
                Important &ndash; Please read these terms before booking.
              </h3>
              <p className="popup__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                in quasi labore aperiam veniam culpa facilis suscipit velit quam
                provident, corporis, doloremque illo ullam dolorum ad est. Odio,
                deserunt voluptate.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolor in quasi labore aperiam veniam culpa
                facilis suscipit velit quam provident, corporis, doloremque illo
                ullam dolorum ad est. Odio, deserunt voluptate.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Dolor in quasi labore
                aperiam veniam culpa facilis suscipit velit quam provident,
                corporis, doloremque illo ullam dolorum ad est. Odio, deserunt
                voluptate.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolor in quasi labore aperiam veniam culpa facilis
                suscipit velit quam provident, corporis, doloremque illo ullam
                dolorum ad est. Odio, deserunt voluptate.
              </p>

              <Link to="/natours" className="btn btn--green">
                Book now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
