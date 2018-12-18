import React, { Component } from "react";
import { Switch, Route } from "react-router";
import "./sass/main.scss";

import Natours from "./components/natours";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/natours" component={Natours} />
        </Switch>
      </div>
    );
  }
}

export default App;
