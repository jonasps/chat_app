import React, { Component } from "react";
import socket from "./socket-io-singelton";

export const socketWrapper = () => {
  // this is a hoc component it enhance it's child with a socket prop
  return BaseComponent => {
    return class extends Component {
      render() {
        if (socket.connected) {
          return (
            <BaseComponent {...this.props} {...this.state} socket={socket} />
          );
        }
        return <div>...Loading</div>;
      }
    };
  };
};
