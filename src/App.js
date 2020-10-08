import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import "animate.css";
import "./App.css";
import Portfolio from "./components/pages/PortfolioPage/Portfolio";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/portfolio" exact component={Portfolio}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
