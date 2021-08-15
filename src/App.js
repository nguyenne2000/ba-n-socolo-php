
import './App.css';



import React, { Component } from 'react';
import Header from './header/header.js';
import Body from './body/body.js';
import Footer from './footer/footer';
import Dangnhap from './body/dangnhap';
import Dangxuat from './body/dangxuat';
import Routet from "./router/router";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {
  return (

   <Router>

  
    <div className="App">
      <Body/>

    </div>  </Router>
  );
}

export default App;
