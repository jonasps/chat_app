import React, { Component } from "react";

import MessagePanel from "./chatBox/MessagePanel";
import ControlPanel from "./chatBox/ControlPanel";
import NameInput from "./loginBox/NameInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameInput />
          <MessagePanel />
          <ControlPanel />
        </header>
      </div>
    );
  }
}

export default App;
