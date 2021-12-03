import React , {Component} from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Logo from '../../assets/images/kinship-logo.svg';
import Facebook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';
import { BrowserRouter as Routes , Link } from 'react-router-dom';

export default class LoginPage extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className='login'>
            <div className="container">
            <div className="loginMainDiv" style={{height:'100%'}}>
            <div className="LogoDiv">
            <img src={Logo} alt="logo"/>
            </div>
            <div className='welcome-div'>
            <h4 className='welcome'>Welcome</h4>
            <p>Login to kinship to continue to your order</p>
            </div>
            
            <form style={{paddingTop:'10px' , textAlign:'center'}}>
      <div class="form-group"  >
       
        <input type="email" class="form-control-ausi" id="txtLoginEmail" name="txtLoginEmail" value={this.props.txtLoginEmail} onChange={this.props.HandleLoginInputs} placeholder="Enter email"/> 
      </div>
      <div class="form-group" >
        <input type="password" class="form-control-ausi" id="txtLoginPassword" name="txtLoginPassword" value={this.props.txtLoginPassword} onChange={this.props.HandleLoginInputs} placeholder="Password"/>
        <div style={{textAlign:'start', marginLeft:'10px' , marginTop:'5px'}}>
        <Routes>
        <Link to="/forgot-password">
        <small id="emailHelp" class="form-forgot-password">
        Forgot Password?</small>
        </Link>
        </Routes>
        
        </div>
      </div>
      {this.props.txtLoginValidationMessage!==''?
      <div>
          <div className="ausaf-errorMessage">{this.props.txtLoginValidationMessage}</div>
      </div>:null}
      <button type="button" class="btn login-button" id="btnLoginButton" name="btnLoginButton" onClick={this.props.Login}>Continue</button>
      <div className='signup-link-div'>
      <div className="signup-link-text"><p>Don't have an account?</p></div>
      <div className="sign-up-link"><p>Sign up</p></div>
      </div>
      </form>
      <div className='login-page-partition'>
      <div className='login-partition-line'></div>
      <span>OR</span>
      <div className='login-partition-line'></div>
      </div>
    
      <div className='social-login'>
      <div className="google-login-btn" style={{display:'flex'}}>
      <img className="social-login-btn-logo" src={Google} alt="google"/>

      <GoogleLogin
      clientId="70141150723-u5r46rtfre5e2tdtnnj3n175ks3jkjti.apps.googleusercontent.com"
      buttonText="Continue with Google"
      id="btnGoogleLoginButton"
      name="btnGoogleLoginButton"
      onSuccess={this.props.responseSuccessGoogle}
      onFailure={this.props.responseFailureGoogle}
      cookiePolicy={'single_host_origin'}
     />

      </div>
     
     <div className='facebook-login-btn' style={{display:'flex'}}>
     <img className="social-login-btn-logo" src={Facebook} alt = "facebook"/>
     <FacebookLogin
          appId="873255453283482"
          autoLoad={false}
          textButton="Continue with Facebook"
          id="btnFacebookLoginButton"
          name="btnFacebookLoginButton"
          fields="name,email,picture"
          //onClick={componentClicked}
          callback={this.props.responseSuccessFacebook}
           />
           </div>
    
      </div>
            </div>
            
            </div>
    
            
            </div>
           
        )
    }
}