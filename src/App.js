import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Teen Courtney
          </p>
        </header>

        <p className="App-description">
          Teen Courtney is a voice assistant with her own agenda. Now ready to live in your home and make your life easier by helping you focus on the important things.
        </p>

        <iframe
          allow="microphone;"
          width="350"
          height="430"
          title="Teen Courtney"
          src="https://console.dialogflow.com/api-client/demo/embedded/teenage-courtney">
        </iframe>
      </div>
    );
  }
}

export default App;
