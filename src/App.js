import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
//import axios from "axios";

function App() {

  var gapi = window.gapi
  var clientID = '70141150723-u5r46rtfre5e2tdtnnj3n175ks3jkjti.apps.googleusercontent.com';
  var apiKey = 'AIzaSyD8OUXA_eXFsX9eZCY0Oh0UOyMLExaRQ7c';
  var discovery_docs =  ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var scopes = "https://www.googleapis.com/auth/calendar.events";


  const responseSuccessGoogle = (response)=>{
    console.log(response);

    // axios({
    //   method:'POST',
    //   url:"http://localhost:8000/api/googlelogin",
    //   data:{tokenId: response.tokenId}
    // }).then(response =>{
    //   console.log(response);
    // })
  }

  const responseFailureGoogle = (resp)=>{
   console.log(resp);
  }

  const responseSuccessFacebook = (response)=>{
    console.log(response);
  }

  const addEvent = ()=>{
    gapi.load('client:auth2' , ()=>{
      console.log('loaded client');
      gapi.client.init({
        apiKey:apiKey,
        clientId:clientID,
        discoveryDocs:discovery_docs,
        scope:scopes
      })
      gapi.client.load('calendar', 'v3' , ()=>{
        console.log('bam!');
      })
      gapi.auth2.getAuthInstance().signIn()
      .then(()=>{
        var event = {
          'summary': 'NightOut',
         // 'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'A chance to hear more about Google\'s developer products.',
          'start': {
            'dateTime': '2021-12-29T12:00:00-07:00',
            'timeZone': 'UTC+05:30'
          },
          'end': {
            'dateTime': '2021-12-29T14:00:00-07:00',
            'timeZone': 'UTC+05:30'
          },
          // 'recurrence': [
          //   'RRULE:FREQ=DAILY;COUNT=2'
          // ],
          'attendees': [
            {'email': 'ausafsjc97@gmail.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        };
        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        });
        
        request.execute(event => {
          window.open(event.htmlLink);
        });
      })
    })
    
      
  }
  return (
    <div className="App" >
    <div>
    <button type="button" onClick={addEvent}>Add Event</button>
    </div>
    <div style={{marginTop:'20px'}}>
    <GoogleLogin
    clientId="70141150723-u5r46rtfre5e2tdtnnj3n175ks3jkjti.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseSuccessGoogle}
    onFailure={responseFailureGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </div>
  <div style={{marginTop:'20px'}}>
  <FacebookLogin
    appId="873255453283482"
    autoLoad={false}
    //fields="name,email,picture"
    //onClick={componentClicked}
    callback={responseSuccessFacebook}
     />,
  </div>
     
    </div>
  );
}

export default App;
