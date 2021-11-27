import './App.css';

function App() {

  var gapi = window.gapi
  var clientID = '70141150723-u5r46rtfre5e2tdtnnj3n175ks3jkjti.apps.googleusercontent.com';
  var apiKey = 'AIzaSyD8OUXA_eXFsX9eZCY0Oh0UOyMLExaRQ7c';
  var discovery_docs =  ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var scopes = "https://www.googleapis.com/auth/calendar.events";


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
          'summary': 'PartyNight',
         // 'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'A chance to hear more about Google\'s developer products.',
          'start': {
            'dateTime': '2021-12-20T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2021-12-20T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'lpage@example.com'},
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
    <div className="App">
    <button type="button" onClick={addEvent}>Add Event</button>
     
    </div>
  );
}

export default App;
