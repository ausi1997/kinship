import React , {Component} from 'react';
import Stars from '../../assets/images/Stars.svg';


export default class Orders extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <div className="container">
            <div className="orders-main-div">
            <div className="row">
            <div className="col-md-12 col-lg-12">
            <div className="row">
            <div className="col-md-1 col-lg-1">
            <h4>Orders</h4>
            </div>
            <div className="col-md-2 col-lg-2" style={{display:'flex'}}>
            <div className="orders-head-line"></div>
            <p>View all</p>
            <i class="fa fa-arrow-right orders-head-arrow" aria-hidden="true"></i>
            </div>
           
            </div>
            </div>
            <div className="col-md-12 col-lg-12">
            <div className="orders-list-div">
            <div className="row">
            <div className="col-md-2 col-lg-2">
            <div className="orders-stars">
            <img src={Stars}  alt="...."/>
            </div>
            </div>
            <div className="col-md-10 col-lg-10">
            <div className="orders-list-content"> <p>Kinship can help with all kinds of daily tasks</p></div>
            <div className="orders-list-btn">
            <button className="btn" type="button">Schedule meal</button>
            <button className="btn" type="button">Book a ride</button>
            <button className="btn" type="button">Schedule cleaning</button>
            <button className="btn" type="button">See all</button>
            
            </div>
            
            </div>
            </div>
            </div>
            </div>
            <div className="col-md-12 col-lg-12">
            <div className="orders-list-seperation-line"></div>
            </div>
            </div>
            
            </div>
            </div>
            </div>
        )
    }
}