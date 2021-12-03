import React , {Component} from 'react';
import Logo from '../assets/images/kinship-logo.svg';
import '../assets/styling/navbar.css';


export default class SideBar extends Component {
    constructor(){
        super()

    }

    render(){
        return(
            <div className="vertical-nav kinship-sidebar-main" id="sidebar">
            <div className="px-2 mb-4">
            <div className="media d-flex align-items-center sidebar-logo">
            <img src={Logo} alt='logo....'/>
            </div>
            <div className='sidebar-order-btn'>
            <button className='btn'>Schedule Order</button>
            </div>
            <ul className="nav flex-column mb-0">
            <li className="nav-item sidebar-list">
            <a href='#' className='nav-link sidebar-items'>
            <i class="fa fa-home fa-lg sidebar-icons" aria-hidden="true"></i>
            Home
            </a>
            
            </li>
            <li className="nav-item sidebar-list">
            <a href='/login' className='nav-link sidebar-items'>
            <i class="fa fa-calendar fa-lg sidebar-icons" aria-hidden="true"></i>
            Event Schedule
            </a>
            
            </li>
            <li className="nav-item sidebar-list">
            <a href='/signup' className='nav-link sidebar-items'>
            <i class="fa fa-play fa-lg sidebar-icons" aria-hidden="true"></i>
            Classes
            </a>
            
            </li>
            <li className="nav-item sidebar-list">
            <a href='#' className='nav-link sidebar-items'>
            <i class="fa fa-trophy fa-lg sidebar-icons" aria-hidden="true"></i>
            Games
            </a>
            
            </li>
            <li className="nav-item sidebar-list">
            <a href='#' className='nav-link sidebar-items'>
            <i class="fa fa-shopping-cart fa-lg sidebar-icons" aria-hidden="true"></i>
            Orders
            </a>
            
            </li>
            
            </ul>
            <div className="sidebar-more-from-hank">
            <p>MORE FROM KINSHIP</p>
            </div>
            <ul className="nav flex-column mb-0">
            <li className="nav-item sidebar-list">
            <a href='#' className='nav-link sidebar-items'>
            Resources
            </a>
            
            </li>
            <li className="nav-item sidebar-list">
            <a href='/login' className='nav-link sidebar-items'>            
            Contact Us
            </a>
            
            </li>
            <li className="nav-item sidebar-list">
            <a href='/signup' className='nav-link sidebar-items'>            
            How Kinship Works
            </a>
            
            </li>
            <li className="nav-item sidebar-list">
            <a href='#' className='nav-link sidebar-items'>            
            Friendly Calls
            </a>
            </li> 
            </ul>
            </div>
            
            </div>
        )
    }
}
