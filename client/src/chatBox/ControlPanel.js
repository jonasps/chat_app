import React, { Component } from "react";

export class ControlPanel extends Component {
  render() {
    return (
      <div>
        <input placeholder="write text" />
        <button>send</button>
      </div>
    );
  }
}
