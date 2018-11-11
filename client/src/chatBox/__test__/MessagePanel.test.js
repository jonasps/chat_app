import React from "react";
import ReactDOM from "react-dom";

// *** configure Enzyme can be put in own file
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
// *** end configure

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

  it("renders all messages in state", () => {
    //
    const messagePanel = shallow(<MessagePanel socket={mockSocket} />);
    const exampleMessagesList = [
      { message: "one" },
      { message: "two" },
      { message: "three" }
    ];
    messagePanel.setState(
      {
        messages: exampleMessagesList
      },
      () => {
        const numOfFoundMessages = messagePanel.find(
          "[data-class='message-in-chat']"
        ).length;
        expect(numOfFoundMessages).toBe(exampleMessagesList.length);
      }
    );
  });
});
