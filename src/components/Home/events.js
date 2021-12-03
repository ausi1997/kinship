import React ,{Component} from 'react';
import EventImg from '../../assets/images/yoga.png';


export default class EventsList extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <div className="container">
            <div className="event-list-main-div">
            <div className="row">
            <div className="col-md-12 col-lg-12"> 
            <div className="row">
            <div className="col-md-4 col-lg-4">
            <h4>Upcoming Live Events</h4>
            </div>
            <div className="col-md-2 col-lg-2" style={{display:'flex'}}>
            <div className="orders-head-line"></div>
            <p>View all</p>
            <i class="fa fa-arrow-right orders-head-arrow" aria-hidden="true"></i>
            </div>
           
            </div>
            </div>
            <div className="col-md-12 col-lg-12">
            <div className="orders-list-seperation-line"></div>
            </div>


            <div className="col-md-12 col-lg-12">
            <div className="event-list">
            <div className="row">
            <div className="col-md-2 col-lg-2">
            <div className="event-date">
            <h5>Wed, 12/01 10:30 AM</h5>
            <p>30 mins</p>
            </div>
            </div>
            <div className="col-md-3 col-lg-3">
            <div className="event-image">
            <img src={EventImg} alt="loading...."/>
            </div>
            </div>
            <div className="col-md-7 col-lg-7">
            <div className="event-description">
            <h6>Welcome Wednesday</h6>
            <p>Lorepum ispum is simply dummy text of printing and typesetting industry.</p>
            </div>
            </div>
            </div>
            </div>
            </div>

            <div className="col-md-12 col-lg-12">
            <div className="seperation-line"></div>
            </div>

            <div className="col-md-12 col-lg-12">
            <div className="event-list">
            <div className="row">
            <div className="col-md-2 col-lg-2">
            <div className="event-date">
            <h5>Wed, 12/01 10:30 AM</h5>
            <p>30 mins</p>
            </div>
            </div>
            <div className="col-md-3 col-lg-3">
            <div className="event-image">
            <img src={EventImg} alt="loading...."/>
            </div>
            </div>
            <div className="col-md-7 col-lg-7">
            <div className="event-description">
            <h6>Welcome Wednesday</h6>
            <p>Lorepum ispum is simply dummy text of printing and typesetting industry.</p>
            </div>
            </div>
            </div>
            </div>
            </div>

            <div className="col-md-12 col-lg-12">
            <div className="seperation-line"></div>
            </div>

            <div className="col-md-12 col-lg-12">
            <div className="event-list">
            <div className="row">
            <div className="col-md-2 col-lg-2">
            <div className="event-date">
            <h5>Wed, 12/01 10:30 AM</h5>
            <p>30 mins</p>
            </div>
            </div>
            <div className="col-md-3 col-lg-3">
            <div className="event-image">
            <img src={EventImg} alt="loading...."/>
            </div>
            </div>
            <div className="col-md-7 col-lg-7">
            <div className="event-description">
            <h6>Welcome Wednesday</h6>
            <p>Lorepum ispum is simply dummy text of printing and typesetting industry.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            </div>
            </div>
            </div>
            </div>
        )
    }
}