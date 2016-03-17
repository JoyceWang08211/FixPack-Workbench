const $ = require('jquery');
import { Component, PropTypes } from 'react';
import {Col, Row, Button} from 'react-bootstrap'

const SCRIPT_ID = 'MChxBX6Ps-9u_YlnM7WLqlNQpCxtej4RD';

const CLIENT_ID = '288837666121-h7kn55j271f2l4ofamonkd4h4inmgj4a.apps.googleusercontent.com'
const SCOPES =
  ['https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://spreadsheets.google.com/feeds'];

function loadDriveApi() {
  gapi.client.load('drive', 'v3', ()=> {
    console.log('drive api has loaded successfully !!')
  });
}

function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    console.log('authorize successfully !!');
    loadDriveApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    console.log('authorize failed due to %s !!', authResult.error)
  }
}

function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
}

export default class Comparator extends Component {
  constructor(props) {
    super(props);
    this.rows = [];
    this.metadata = {};
    this.state = {
      isDisabledCompare: false,
      isDisabledSync: false
    }
  }

  handleAuth() {
    gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
      handleAuthResult);
  }

  handleCompare() {
    fetch('/crawler/get_compare', {
      method: 'post'
    }).then((res)=> {
      return res.json();
    }).then((json)=> {
      this.rows = json.rows;
      this.metadata = json.metadata;
    });
  }

  handleSync() {
    if (this.rows.length > 0) {
      //TODO google doc pre-works
      let scriptRequest = {
        'function': 'main',
        'parameters': [
          this.rows,
          this.metadata
        ],
        'devMode': true
      };

      let op = gapi.client.request({
        'root': 'https://script.googleapis.com',
        'path': 'v1/scripts/' + SCRIPT_ID + ':run',
        'method': 'POST',
        'body': scriptRequest
      });

      op.execute(function (resp) {
        if (resp.error && resp.error.status) {
          // The API encountered a problem before the script
          // started executing.
          alert('Error calling API:');
          console.log(JSON.stringify(resp, null, 2));
        }
        else if (resp.error) {
          // The API executed, but the script returned an error.

          // Extract the first (and only) set of error details.
          // The values of this object are the script's 'errorMessage' and
          // 'errorType', and an array of stack trace elements.
          let error = resp.error.details[0];
          alert('The API executed, but the script returned an error.');
          console.log('Script error message: ' + error.errorMessage);

          if (error.scriptStackTraceElements) {
            // There may not be a stacktrace if the script didn't start
            // executing.
            //appendPre('Script error stacktrace:');
            for (var i = 0; i < error.scriptStackTraceElements.length; i++) {
              var trace = error.scriptStackTraceElements[i];
              console.log('\t' + trace.function + ':' + trace.lineNumber);
            }
          }
        } else {
          // The structure of the result will depend upon what the Apps
          // Script function returns. Here, the function returns an Apps
          // Script Object with String keys and values, and so the result
          // is treated as a JavaScript object (folderSet).

          let fileObj = resp.response.result;

          alert('Sync finished !! The URL is ' + fileObj.fileURL)
        }
      })
    }
    else {
      alert('rows is empty !!')
    }

    return false;
  }

  render() {
    return (
      <Row className="show-grid">
        <Col xs={3}>
        </Col>
        <Col xs={2}>
          <Row>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleAuth.bind(this)} block>Authorize</Button>
          </Row>
        </Col>
        <Col xs={2}>
          <Row>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleCompare.bind(this)} block
                    disabled={this.state.isDisabledCompare}>Compare</Button>
          </Row>
        </Col>
        <Col xs={2}>
          <Row>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleSync.bind(this)} block
                    disabled={this.state.isDisabledSync}>Sync</Button>
          </Row>
        </Col>
        <Col xs={3}>3</Col>
      </Row>
    )
  }
};

Comparator.propTypes = {}



