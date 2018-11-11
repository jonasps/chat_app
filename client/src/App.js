import React, { Component } from "react";
import MessagePanel from "./chatBox/MessagePanel";
import ControlPanel from "./chatBox/ControlPanel";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MessagePanel />
          <ControlPanel />
        </header>
      </div>
    );
  }
}

export default App;
