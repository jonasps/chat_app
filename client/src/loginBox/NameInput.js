import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { sendLoginName } from "../actions";

export class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  sendName() {
    const { name } = this.state;
    this.props.sendName(name);
    this.setState({ message: "" });
  }

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.sendName();
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder="Write your name"
          value={this.state.name}
          onChange={evt => {
            this.setState({ name: evt.target.value });
          }}
          onKeyPress={this._handleKeyPress}
        />
        <button onClick={() => this.sendName()}>Log in!</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendName: bindActionCreators(sendLoginName, dispatch)
});

const mapStateToProps = state => ({
  name: state.name
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameInput);