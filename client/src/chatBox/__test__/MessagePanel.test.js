import React from "react";
import ReactDOM from "react-dom";
import { MessagePanel } from "../MessagePanel";

describe("MessagePanel", () => {
  const mockSocket = {
    on: () => {}
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MessagePanel socket={mockSocket} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // TODO: mock messages in state and test
  // it("renders all messages saved in state", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<MessagePanel socket={mockSocket} />, div);
  //
  //   const numMessages = div.querySelectorAll("[data-class='message-in-chat']");
  //   console.log(numMessages.length);
  //
  //   ReactDOM.unmountComponentAtNode(div);
  // });
});
