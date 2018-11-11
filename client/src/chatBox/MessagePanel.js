import React, { Component } from "react";
import { socketWrapper } from "../utils/socketWrapper";

export class MessagePanel extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    this.props.socket.on("message", msg => {
      this.setState({
        messages: [...this.state.messages, msg]
      });
    });
  }

  renderMessages = () =>
    this.state.messages.map((item, index) => (
      <div data-class="message-in-chat" key={index}>
        {item.message}
      </div>
    ));

  render() {
    return (
      <div
        style={{
          margin: "0px auto",
          width: "30rem",
          height: "30rem",
          backgroundColor: "gray"
        }}
      >
        {this.renderMessages()}
      </div>
    );
  }
}

export default socketWrapper()(MessagePanel);
