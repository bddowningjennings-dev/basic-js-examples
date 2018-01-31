import rp from 'request-promise';

import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


const responseGoogle = (googleUser) => {
  let id_token = googleUser.getAuthResponse().id_token;
  console.log({accessToken: id_token});
  // rp({
  //   method: 'GET',
  //   uri: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + response.hg.id_token,
  //   json: true
  // }).then((res) => {
  //   console.log(res)
  // }).catch((err) => {
  //    console.log(err);
  // });
  var oauthToken = user.getAuthResponse().access_token;
  var xhr = new XMLHttpRequest();
  xhr.open('GET',
    'https://people.googleapis.com/v1/people/me/connections');
  xhr.setRequestHeader('Authorization',
    'Bearer ' + id_token);

  // var xhr = new XMLHttpRequest();
  // let uri = 'https://www.googleapis.com/drive/v3/about?fields=user&access_token=' + encodeURIComponent(id_token);
  // xhr.open('GET', uri);
  // xhr.setRequestHeader('Authorization',
  // 'Bearer ' + id_token);
  xhr.onreadystatechange = function (e) {
    console.log(xhr.response);
  };
  xhr.send();
}

ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('root')
);
