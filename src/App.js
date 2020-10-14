import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer.js";
import Home from "./components/pages/HomePage/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
