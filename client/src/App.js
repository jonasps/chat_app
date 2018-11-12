import React, { Component } from "react";
import { connect } from "react-redux";

import MessagePanel from "./chatBox/MessagePanel";
import ControlPanel from "./chatBox/ControlPanel";
import NameInput from "./loginBox/NameInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.name ? (
            <div>
              <MessagePanel />
              <ControlPanel />
            </div>
          ) : (
            <NameInput />
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(App);
