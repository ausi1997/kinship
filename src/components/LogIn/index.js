import React, {Component} from 'react';

import axios from 'axios';
import { BrowserRouter as Routes , Link } from 'react-router-dom';
import '../../assets/styling/style.css';
import LoginPage from './login';


export default class Login extends Component {
    
    constructor(){
        super();
        this.state = {
            txtLoginEmail:'',
            txtLoginPassword:'',
            txtLoginValidationMessage:'',
            txtFacebookLoginEmail:''
        }
    }

    

    HandleLoginInputs = (e)=>{
        const val = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: val });
        if (name === "txtLoginEmail") this.txtLoginEmail = val;
        else if (name === "txtLoginPassword") this.txtLoginPassword = val;
    }

    Login = ()=>{
        const emailExpn = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
        if(this.state.txtLoginEmail === '' || emailExpn.test(this.state.txtLoginEmail) !== true){
            this.setState({
                txtLoginValidationMessage:'Enter Valid Email'
            })
            return false

        }

        else{
            this.setState({
                txtLoginValidationMessage:''
            })
        }
        if(this.state.txtLoginPassword === ''){
            this.setState({
                txtLoginValidationMessage:'Please Enter your password'
            })
            return false
        }
        else{
            this.setState({
                txtLoginValidationMessage:''
            })
        }
        if(this.state.txtLoginValidationMessage === ''){
           let data = {
               email:this.state.txtLoginEmail,
               password:this.state.txtLoginPassword
            }

            console.log(data);
        }
    }

     responseSuccessGoogle = (response)=>{
       // console.log(response);
          let data = {
              email:response.profileObj.email
          }
          console.log(data);
      }

      responseFailureGoogle = (resp)=>{
        console.log(resp);
       }
     
     responseSuccessFacebook = (response)=>{
        axios({
          method:'GET',
          url:`https://graph.facebook.com/v2.11/${response.userID}/?fields=id,name,email&access_token=${response.accessToken}`
        }).then(res=>{
            this.setState({
                txtFacebookLoginEmail:res.data.email
            })
        })
       let data = {
           email:this.state.txtFacebookLoginEmail
       }
       console.log(data);
      }
    

    render(){
        
        return(
            <LoginPage txtLoginEmail={this.state.txtLoginEmail} txtLoginPassword={this.state.txtLoginPassword}
            txtLoginValidationMessage={this.state.txtLoginValidationMessage} txtFacebookLoginEmail={this.state.txtFacebookLoginEmail}
            Login={this.Login} HandleLoginInputs={this.HandleLoginInputs} responseSuccessGoogle={this.responseSuccessGoogle}
            responseFailureGoogle={this.responseFailureGoogle} responseSuccessFacebook={this.responseSuccessFacebook}
            />
        )
    }
    
}


