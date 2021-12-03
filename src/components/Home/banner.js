import React, {Component} from "react";
import Yoga from '../../assets/images/yoga.png';

export default class Banner extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <div className="container">
        <div className="home-banner">
        <div className="row" style={{height:'100%'}}>
        <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="home-banner-content-div">
        <h4>Welcome to Kinship</h4>
        <p>See all the classes, games, and help with daily tasks that you get before signing up</p>
        <button className="btn">Start your free trial</button>
        </div>
        
        
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="home-banner-img-div">
        <img src={Yoga} alt="loading..."/>
        </div>
        </div>
        </div>
        </div>
        </div>
            </div>
        )
    }
}