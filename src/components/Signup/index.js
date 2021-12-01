import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Logo from '../../assets/kinship-logo.svg';
import Facebook from '../../assets/facebook.png';
import Google from '../../assets/google.png';
import '../../styling/style.css';


const SignUp = ()=>{
    return(
        <div className='login'>
        <div className="container">
        <div className="loginMainDiv" style={{height:'100%'}}>
        <div className="LogoDiv">
        <img src={Logo} alt="logo"/>
        
        </div>
        <div className='welcome-div'>
        <h4 className='welcome'>Welcome</h4>
        <p>Sign up to kinship to continue to your order</p>
        </div>
        
        <form style={{paddingTop:'10px' , textAlign:'center'}}>
  <div class="form-group"  >
   
    <input type="email" class="form-control-ausi" id="txtSignupEmail" name="txtSignupEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group" >
    <input type="password" class="form-control-ausi" id="txtSignupPassword" name="txtSignupPassword" placeholder="Password"/>
    
  </div>
  <button type="submit" class="btn login-button" id="btnSignupButton" name="btnSignupButton">Continue</button>
  <div className='signup-link-div'>
  <div><p>Already have an account?</p></div>
  <div className="sign-up-link"><p>Login</p></div>
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
  id="btnGoogleSignupButton"
  name="btnGoogleSignupButton"
 // onSuccess={responseSuccessGoogle}
  // onFailure={responseFailureGoogle}
  cookiePolicy={'single_host_origin'}
 />
  </div>
 
 <div className='facebook-login-btn' style={{display:'flex'}}>
 <img className="social-login-btn-logo" src={Facebook} alt = "facebook"/>
 <FacebookLogin
      appId="873255453283482"
      autoLoad={false}
      textButton="Continue with Facebook"
      id="btnFacebookSignupButton"
      name="btnFacebookSignupButton"
      //fields="name,email,picture"
      //onClick={componentClicked}
      //callback={responseSuccessFacebook}
       />
       </div>

  </div>
        </div>
        
        </div>

        
        </div>
        
    )
}


export default SignUp;