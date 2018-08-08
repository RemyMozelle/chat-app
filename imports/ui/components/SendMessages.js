import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

export default class SendMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    Meteor.call("messages.insert", this.state.message, this.props.users);
    e.target.reset();
    this.goBottom();
  }

  goBottom() {
    const block = document.querySelector(".block-messages");
    if (!block) {
      return null;
    }
    block.scrollTop = block.scrollHeight;
  }

  render() {
    // Meteor.call("users.insert", this.props.users);
    return (
      <form onSubmit={this.handleSubmit} className="input-group ">
        <input
          type="text"
          onChange={this.handleChange}
          className="form-control fix-border-radius"
        />
        <div className="input-group-append">
          <button className="input-group-text fix-border-radius">
            envoyer
          </button>
        </div>
      </form>
    );
  }
}
