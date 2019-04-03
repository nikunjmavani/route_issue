import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import PageOne from "./pageOne";
import PageTwo from "./pageTwo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pageOne" component={PageOne} />
          <Route path="/pageTwo" component={PageTwo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
