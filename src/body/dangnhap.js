import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,NavLink, Redirect} from "react-router-dom";

class dangnhap extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
      red :false,
      taikhoan :"",
      matkhau:""
    }
    
  }
  
  submit = (event) => { event.preventDefault();
  this.setState({red:true})
  }
  change = (event )=>{
    const tk = event.target.name;
    const mk = event.target.value;
    this.setState({
      [tk] : mk
    })
  }

    render() {
      console.log(this.state)
      if(this.state.red ){
       return <Redirect to ="/dangxuat"/>;
      }
      
        return (
            
            <div className="container">
              <div className="d-flex justify-content-center h-100">
                <div className="card">
                  <div className="card-header">
                    <h3>Sign In</h3>
                    <div className="d-flex justify-content-end social_icon">
                      <span><i className="fab fa-facebook-square" /></span>
                      <span><i className="fab fa-google-plus-square" /></span>
                      <span><i className="fab fa-twitter-square" /></span>
                    </div>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fas fa-user" /></span>
                        </div>
                        <input onChange={(event) => this.change(event)} name="taikhoan" type="text" className="form-control" placeholder="username" />
                      </div>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fas fa-key" /></span>
                        </div>
                        <input onChange={(event) => this.change(event)} name="matkhau"  type="password" className="form-control" placeholder="password" />
                      </div>
                      <div className="row align-items-center remember">
                        <input type="checkbox" />Remember Me
                      </div>
                      <div className="form-group">
                        <input type="submit"  onChange={(event) => this.change(event)} onClick={(event) => this.submit(event)} defaultValue="Login" className="btn float-right login_btn" />
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                      Don't have an account?<a href="/">Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center">
                      <a href="/">Forgot your password?</a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  
                  <div className="card">
                  <NavLink   to="/dangxuat">
                    <img className="card-img-top" src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/117595652_3286786824750444_5634990451537378460_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=P2S-Le2PeOMAX_Y4CH2&_nc_ht=scontent-hkg4-2.xx&oh=60e2e4002f2e44d575a4e87784ca2cda&oe=60D232EF" alt="anh" />
                      <div className="card-body">
                        <h5 className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                      </div>
                    </NavLink>
                        <p className="card-text">contentennrkjewjhfehwjfhsdfffffffffffffffffffffisufuii</p>
       
      </div>
               
                  </div>
              </div>

            </div>
          
          
        );
    }
}

export default dangnhap;