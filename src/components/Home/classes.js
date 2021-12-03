import React , {Component} from 'react';
import ClassImg from '../../assets/images/yoga.png';

export default class ClassesList extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <div className="container">
            <div className="classes-list-main-div">
            <div className="row">
            <div className="col-md-12 col-lg-12">
            <div className="orders-list-seperation-line"></div>
            </div>
            <div className="col-md-12 col-lg-12"> 
            <div className="row">
            <div className="col-md-4 col-lg-4">
            <h4>Upcoming Live Classes</h4>
            </div>
            <div className="col-md-2 col-lg-2" style={{display:'flex'}}>
            <div className="orders-head-line"></div>
            <p>View all</p>
            <i class="fa fa-arrow-right orders-head-arrow" aria-hidden="true"></i>
            </div>
           
            </div>
            </div>
            <div className="col-md-12 col-lg-12">
            <div className="classes-list">
            <div className="row">
            <div className="col-md-4 col-lg-4">
             <div className="classes-img">
             <img src={ClassImg} alt="loading..."/>
             <div className="classes-details">
             <h5>Gentle Stretch Workout 1</h5>
             <p>30 mins-Mobility</p>
             </div>
             </div>
            </div>

            <div className="col-md-4 col-lg-4">
            <div className="classes-img">
            <img src={ClassImg} alt="loading..."/>
            <div className="classes-details">
            <h5>Gentle Stretch Workout 1</h5>
            <p>30 mins-Mobility</p>
            </div>
            </div>
            </div>

            <div className="col-md-4 col-lg-4">
            <div className="classes-img">
            <img src={ClassImg} alt="loading..."/>
            <div className="classes-details">
            <h5>Gentle Stretch Workout 1</h5>
            <p>30 mins-Mobility</p>
            </div>
            </div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="col-md-12 col-lg-12">
            <div className="seperation-line" style={{margin:"0"}}></div>
            </div>

            
            
            </div>
            
            </div>
            
            </div>
            </div>
        )
    }
}