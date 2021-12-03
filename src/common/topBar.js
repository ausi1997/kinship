import React , {Component} from 'react';
import '../assets/styling/topbar.css';

export default class TopBar extends Component{
    constructor(){
        super()
        this.state = {
            showdropdown:false
        }
    }

    render(){
        return(
            <div className="kinship-topbar-main" id="topbar">
            <nav class="navbar navbar-light justify-content-end">
{
    this.state.showdropdown === false ?

            <div>
            <button class="btn mr-2 login-btn" type="button">Login</button>
            <button class="btn mr-4 signup-btn" type="button">Sign up</button>
            </div>

     :
            <div style={{display:'flex'}}>
            
            <button class="btn mr-2 after-login-btn" type="button">Lorepum Ispum</button>
            <a class="nav-link dropdown-toggle topbar-dropdown" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Your Account
          </a>
          <div class="dropdown-menu topbar-dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
          </div>
}
            
            </nav>
            </div>
        )
    }
}