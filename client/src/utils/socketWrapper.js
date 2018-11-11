import React, { Component } from "react";
import socket from "./socket-io-singelton";

export const socketWrapper = () => {
  // this is a hoc component it enhance it's child with a socket prop
  return BaseComponent => {
    return class extends Component {
      constructor() {
        super();
        this.state = { connection: false };
      }
      componentDidMount() {
        this.socket = socket;
        this.socket.on("connect", () => {
          this.setState({ connection: true });
        });
      }
      render() {
        if (this.state.connection) {
          return (
            <BaseComponent
              {...this.props}
              {...this.state}
              socket={this.socket}
            />
          );
        }
        return <div>...Loading</div>;
      }
    };
  };
};
