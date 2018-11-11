import React, { Component } from "react";
import { socketWrapper } from "../utils/socketWrapper";

export class MessagePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.socket);
    return (
      <div
        style={{
          margin: "0px auto",
          width: "30rem",
          height: "30rem",
          backgroundColor: "gray"
        }}
      />
    );
  }
}

export default socketWrapper()(MessagePanel);
