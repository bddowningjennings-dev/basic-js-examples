import React, { Component } from 'react';
import logo from './logo.svg';
import GoogleLogin from 'react-google-login';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  responseGoogle = (response, id) => {
    rp({
      method: 'GET',
      uri: window.location.origin + '/scheduler/public/api/auth.php?code=' + response.code,
      json: true
    }).then((res) => {
      return null;
    }).catch((err) => {
       console.log(err);
    });
  }
  render() {
    return (
      <div className="App">
      <GoogleLogin
                   clientId="720540403343-3gb1ne7ega70g4il1t8umgauspj74ei7.apps.googleusercontent.com"
                   scope="https://www.googleapis.com/auth/calendar"
                   autoLoad={true}
                   onSuccess={this.responseGoogle}
                   onFailure={this.responseGoogle}
                   offline={true}
                   disabled={true}
                   isSignedIn={true}
                 >
                 </GoogleLogin>
      </div>
    );
  }
}

export default App;
