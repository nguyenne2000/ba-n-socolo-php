import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";


class body extends Component {
    constructor(props) {
        super(props);
    
         this.state={
          trangthai:0

        }
    }   
     




  

    
    thongbao = ()=>{alert("nguyện đẹp trai")}
    thongbao2 = (x) =>{ alert("xin chào "+x) ;}
    renderbtn = () =>(<div className="btn btn-primary" onClick={this.change}>gio</div>)
    renderform= ()=>( <div className="form-group">
                           
                    <input  className="form-control"  required name />
                </div>)

    displaycheck = ()=>{
      if(this.state.trangthai===0){
        return this.renderbtn();
      }
      else {
        return this.renderform();
      }
    }

    change =()=>{
      this.setState({trangthai:1})
    }


    render() {
      var ab=[{
        id: 1,
        title:"nguyện",
        note:"aloo đẹp trai"
  
      },  {
        id: 2,
        title:"nguyện1",
        note:"aloo đẹp trai"
  
      },{
        id: 3,
        title:"nguyện2",
        note:"aloo đẹp trai"
  
      },{
        id: 4,
        title:"nguyện3",
        note:"aloo đẹp trai"
  
      }]
        return (
            <section>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2">
                  <div className="p-5"><img className="img-fluid rounded-circle" src={this.props.anh} alt="..." /></div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="p-5">
                    <h2 className="display-4">For those about to rock...</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                    </div>
                       {this.displaycheck()}
                </div>
              <hr/>
            </div>
            
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  
            <div className="card">
            <NavLink   to="/dangnhap">
              <img className="card-img-top" src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/117595652_3286786824750444_5634990451537378460_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=P2S-Le2PeOMAX_Y4CH2&_nc_ht=scontent-hkg4-2.xx&oh=60e2e4002f2e44d575a4e87784ca2cda&oe=60D232EF" alt="anh" />
                <div className="card-body">
                  <h5 className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                </div>
              </NavLink>
                  <p className="card-text">contentennrkjewjhfehwjfhsdfffffffffffffffffffffisufuii</p>
 
</div>
         
            </div>
         </section>
          
        );
    }
}

export default body;