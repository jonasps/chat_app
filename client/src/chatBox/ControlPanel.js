import React, { Component } from "react";
import { connect } from "react-redux";
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
    this.props.socket.emit("message", { message, name: this.props.name });
    this.setState({ message: "" });
  }

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.sendMessage();
    }
  };

  render() {
    return (
      <div className="controlPanel">
        <input
          placeholder="write text"
          className="main-input-style chat"
          value={this.state.message}
          onChange={evt => {
            this.setState({ message: evt.target.value });
          }}
          onKeyPress={this._handleKeyPress}
          autoFocus
        />
        <button
          className="main-input-button"
          onClick={() => this.sendMessage()}
        >
          send
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(socketWrapper()(ControlPanel));
