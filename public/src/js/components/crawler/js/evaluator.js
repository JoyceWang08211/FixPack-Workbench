const $ = require('jquery');
import React from 'react';

//fetch(target, {
//  method: "POST",
//  headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json'
//  },
//  body: JSON.stringify(payload)

var SCRIPT_ID = 'MChxBX6Ps-9u_YlnM7WLqlNQpCxtej4RD';

var CLIENT_ID = '288837666121-h7kn55j271f2l4ofamonkd4h4inmgj4a.apps.googleusercontent.com';

var SCOPES = ['https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://spreadsheets.google.com/feeds'];


/**
 * Check if current user has authorized this application.
 */
function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadDriveApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

/**
 * Load Drive API client library.
 */
function loadDriveApi() {
  gapi.client.load('drive', 'v3', demo1);
  //gapi.client.load('spreadsheets', 'v3', ()=> {
  //  console.log('yeah')
  //})
}

function demo1() {
  //var request = gapi.client.drive.files.get({
  //  fileId: '10SWWIBLHs7xKYzn0xiukNW7Q2QI1s9AerLUCOn-jKRU'
  //});
  //
  //request.execute(function (res) {
  //  console.log(res.name)
  //})

  var scriptRequest = {
    'function': 'main'
  }

  var op = gapi.client.request({
    'root': 'https://script.googleapis.com',
    'path': 'v1/scripts/' + SCRIPT_ID + ':run',
    'method': 'POST',
    'body': scriptRequest
  });

  op.execute(function (res) {

  })
}

/**
 * Print files.
 */
function listFiles() {
  var request = gapi.client.drive.files.list({
    'pageSize': 100,
    'fields': "nextPageToken, files(id, name)"
  });

  request.execute(function (resp) {
    appendPre('Files:');
    var files = resp.files;
    if (files && files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        appendPre(file.name + ' (' + file.id + ')');
      }
    } else {
      appendPre('No files found.');
    }
  });
}

/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

let Evaluator = React.createClass({
  render(){
    return (<div>
      <div id="authorize-div">
        <span>Authorize access to Drive API</span>

        <button id="authorize-button" onClick={()=>{handleAuthClick(event)}}>
          Authorize
        </button>
      </div>
      <pre id="output"></pre>
    </div>)
  }
});

module.exports = Evaluator;