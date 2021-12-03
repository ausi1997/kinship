import './App.css';
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
//import Profile from './profile.js';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/LogIn';
import SignUp from './components/Signup';
import ForgotPassword from './components/Forgot';
//import axios from "axios";

function App() {

 
  return (
    <div className="App" >
    <Routes>
    <switch>
    

    <Route exact path='/'>
    <Home/>
    </Route>
    <Route path='/login'>

    <Login/>
    </Route>
    <Route path='/signup'><SignUp/></Route>
    <Route path='/forgot-password'><ForgotPassword/></Route>
    </switch>
    </Routes>
     
    </div>
  );
}

export default App;
