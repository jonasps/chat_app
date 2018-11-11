import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import MessagePanel from "./chatBox/MessagePanel";
import ControlPanel from "./chatBox/ControlPanel";
import NameInput from "./loginBox/NameInput";
import { chatReducer } from "./reducers";

import "./App.css";

const store = createStore(chatReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
              <NameInput />
            <MessagePanel />
            <ControlPanel />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
