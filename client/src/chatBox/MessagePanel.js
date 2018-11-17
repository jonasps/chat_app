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

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesBottom.scrollIntoView({ behavior: "smooth" });
  };

  renderMessages = () =>
    this.state.messages.map((item, index) => (
      <div className="chatMessage" data-class="message-in-chat" key={index}>
        <span style={{ textAlign: "left" }}>
          <span style={{ color: "black", marginLeft: "0.5rem" }}>
            {item.name}>
          </span>
          <span className="text-message-item">{item.message}</span>
        </span>
      </div>
    ));

  render() {
    return (
      <div className="message-panel">
        {this.renderMessages()}
        <div
          ref={el => {
            this.messagesBottom = el;
          }}
        />
      </div>
    );
  }
}

export default socketWrapper()(MessagePanel);
