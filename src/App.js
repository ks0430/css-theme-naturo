import React, { Component } from "react";
import { Switch, Route } from "react-router";

// main scss for all pages
import "./sass/main.scss";
import "./css/icon-font.css";

// Components
import Natours from "./components/natours";
import Grid from "./components/natours/grid/grid";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/grid" component={Grid} />
          <Route exact path="/" component={Natours} />
        </Switch>
      </div>
    );
  }
}

export default App;
