import React, { Component } from "react";
import io from "socket.io-client";

export const socketWrapper = () => {
  // this is a hoc component it enhance it's child with a socket prop
  return BaseComponent => {
    return class extends Component {
      constructor() {
        super();
        this.state = { connection: false };
      }
      componentDidMount() {
        this.socket = io("http://localhost:5000");
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
