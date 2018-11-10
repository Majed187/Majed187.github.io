import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./views/Home";

import SingelPagePorject from "./views/SingelPageProject.jsx";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects/:id" component={SingelPagePorject} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
