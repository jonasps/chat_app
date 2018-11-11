import React, { Component } from "react";
import { socketWrapper } from "../utils/socketWrapper";

export class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  sendMessage() {
    const { message } = this.state;
    this.props.socket.emit("message", { message });
    this.setState({ message: "" });
  }

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.sendMessage();
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder="write text"
          value={this.state.message}
          onChange={evt => {
            this.setState({ message: evt.target.value });
          }}
          onKeyPress={this._handleKeyPress}
        />
        <button onClick={() => this.sendMessage()}>send</button>
      </div>
    );
  }
}

export default socketWrapper()(ControlPanel);
