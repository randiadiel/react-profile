import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollRestoration from 'react-scroll-restoration'
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import "animate.css";
import "./App.css";
import Portfolio from "./components/pages/PortfolioPage/Portfolio";
import Bncc from "./components/Bncc/BnccPage";

function App() {
    return (
        <Router>
            <ScrollRestoration/>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/portfolio" exact component={Portfolio}></Route>
                <Route path="/bncc" exact component={Bncc}></Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
