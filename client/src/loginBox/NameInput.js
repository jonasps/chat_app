import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";

import { getPreviousChatMessages, sendLoginName } from "../actions";
import { userPath } from "../constants";
import { setErrorMessage } from "../utils/setErrorMessage";

export class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      errorMessage: ""
    };
  }

  postNameToServer() {
    const { socketId, sendName, previousChatMessages } = this.props;
    const { name } = this.state;
    const data = { username: name, socketId };
    axios
      .post(userPath, data)
      .then(() => {
        sendName(name);
        previousChatMessages(socketId);
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMessage: setErrorMessage(error.response.status) });
      });
  }

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.postNameToServer();
    }
  };

  render() {
    return (
      <div>
        <div className="controlPanel">
          <input
            className="main-input-style"
            placeholder="Write your name and join"
            value={this.state.name}
            onChange={evt => {
              this.setState({ errorMessage: "" });
              this.setState({ name: evt.target.value });
            }}
            onKeyPress={this._handleKeyPress}
            autoFocus
          />
          <button
            className="main-input-button"
            onClick={() => this.postNameToServer()}
          >
            Log in!
          </button>
        </div>
        <div className="login-error-message" data-class="login-error">
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendName: bindActionCreators(sendLoginName, dispatch),
  previousChatMessages: bindActionCreators(getPreviousChatMessages, dispatch),
});

const mapStateToProps = state => ({
  name: state.name,
  socketId: state.socketId
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameInput);
