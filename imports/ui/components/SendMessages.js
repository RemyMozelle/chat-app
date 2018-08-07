import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

export default class SendMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
    Meteor.call("messages.insert", this.state.value, this.props.users);
    e.target.reset();
  }

  render() {
    // Meteor.call("users.insert", this.props.users);
    return (
      <form onSubmit={this.handleSubmit} className="message-form">
        <input
          type="text"
          onChange={this.handleChange}
          className="input-message"
        />
        <button>envoyer</button>
      </form>
    );
  }
}
