import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
             
            <li className="nav-link">
              <NavLink  to="/home"  activeStyle={{
    fontWeight: "bold",
    color: "blues"
  }}>Home</NavLink>
            </li>
            <li className="nav-link">
              <Link   to="/dangxuat"  activeClassName="selected">dangxuat</Link>
            </li>
            <li className="nav-link">
              <NavLink   to="/dangnhap"  activeClassName="selected">dangnhap</NavLink>
            </li>
          
            </ul>
          </div>
        </div>
      </nav>
        );
    }
}

export default Header;