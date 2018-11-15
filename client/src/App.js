import React, { Component } from "react";
import { connect } from "react-redux";
import socket from "./utils/socket-io-singelton";

import MessagePanel from "./chatBox/MessagePanel";
import ControlPanel from "./chatBox/ControlPanel";
import NameInput from "./loginBox/NameInput";
import { setSocketConnectionId } from "./actions";
import { bindActionCreators } from "redux";

class App extends Component {
  componentDidMount() {
    socket.on("connect", () => {
      this.props.sendSocketConnectionId(socket.id);
    });
  }
  render() {
    return (
      <div className="App">
         <h1>Chat app</h1>
        <div className="container">
          {this.props.name ? (
            <div>
              <MessagePanel />
              <ControlPanel />
            </div>
          ) : (
            <div>
              <NameInput />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

const mapDispatchToProps = dispatch => ({
  sendSocketConnectionId: bindActionCreators(setSocketConnectionId, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
