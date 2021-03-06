import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="home">
          <div className="navHead side">
            <div className="side_left">
              <div className="logo">
                <h2><NavLink exact to="/">Happymovie</NavLink></h2>
              </div>
            </div>
            <div className="side_right">
              <div className="navigation">
                <ul className="navigation_list">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="banner__overlay"/>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </div>
          <div className="footer">
            <div className="copyright">
              <p>by Agus Andri Putra</p>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;