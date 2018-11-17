import React from "react";

// *** configure Enzyme can be put in own file
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
// *** end configure

import { NameInput } from "../NameInput";
import { MessagePanel } from "../../chatBox/MessagePanel";

describe("MessagePanel", () => {
  const mockSocket = {
    on: () => {}
  };
  it("displays error messages if error in state", () => {
    const dummySocketId = 123456;
    const dummyName = "dummySocketId";
    const errorMessage = "Example error message";

    const nameInput = shallow(
      <NameInput socketId={dummySocketId} name={dummyName} />
    );
    nameInput.setState({ errorMessage }, () => {
      const error = nameInput.find("[data-class='login-error']").text();
      expect(error).toBe(errorMessage);
    });
  });
});
