import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  constructor() {
    super();
    this.content = [
      {
        title: "The sea explore",
        list: [
          "3 day tour",
          "Up to 30 people",
          "2 tour guides",
          "Sleep in cozy hotels",
          "Diffculty: very easy"
        ],
        price: "297"
      },
      {
        title: "The forest hiker",
        list: [
          "7 day tour",
          "Up to 40 people",
          "6 tour guides",
          "Sleep in provided tents",
          "Diffculty: very medium"
        ],
        price: "497"
      },
      {
        title: "The snow adventurer",
        list: [
          "5 day tour",
          "Up to 15 people",
          "3 tour guides",
          "Sleep in provided tents",
          "Diffculty: hard"
        ],
        price: "897"
      }
    ];
  }

  render() {
    const { value } = this.props;
    const content = this.content[value - 1];
    return (
      <React.Fragment>
        <div className="card">
          <div className="card__side card__side--front">
            <div className={`card__picture card__picture--${value}`}>
              &nbsp;
            </div>
            <h4 className="card__heading">
              <span
                className={`card__heading-span card__heading-span--${value}`}
              >
                {content.title}
              </span>
            </h4>
            <div className="card__details">
              <ul>
                {content.list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`card__side card__side--back card__side--back-${value}`}
          >
            <div className="card__cta">
              <div className="card__price-box">
                <div className="card__price-only">Only</div>
                <div className="card__price-value">{`$${content.price}`}</div>
              </div>
              <a href="#popup" className="btn btn--white">
                Book now
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
