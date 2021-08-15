import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Pody from '../body/body';
import Dangnhap from '../body/dangnhap';
import Dangxuat from '../body/dangxuat';

class router extends Component {
    render() {
        return (
            <div>
         
      
         
              <Switch>
                <Route path="/home">
                  <Pody />
                </Route>
                <Route path="/dangnhap">
                  <Dangnhap />
                </Route>
                <Route path = "/dangxuat">
                  <Dangxuat/>
                </Route>
              </Switch> 
            </div>
           
        );
    }
}

export default router;