import React , {Component} from 'react';
import Logo from '../../assets/images/kinship-logo.svg';

export default class ForgotPage extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='forgot-password'>
            <div className="container">
            <div className="forgot-passwordMainDiv" style={{height:'100%'}}>
            <div className="LogoDiv">
            <img src={Logo} alt="logo"/>
            </div>
            <div className='forgot-password-content-div'>
            <h4>Forgot Your Password?</h4>
            <p>Enter your email address and we will send you instructions to reset your password.</p>
            </div>
            
            <form style={{paddingTop:'10px' , textAlign:'center'}}>
            <div class="form-group"  >
       
        <input type="email" class="form-control-ausi" id="txtForgotPasswordEmail" name="txtForgotPasswordEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
        
      </div>
      
      <button type="submit" class="btn login-button" id="btnForgotPasswordButton" name="btnForgotPasswordButton">Continue</button>
     
      <div className="forgot-password-back"><p>Back to your order</p></div>
     
      </form>
     
    
     
            </div>
            
            </div>
    
            
            </div> 
        )
    }
}