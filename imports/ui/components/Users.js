import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: ""
    };
  }

  componentDidMount() {
    const pseudo = prompt("votre pseudo");
    this.setState({
      pseudo
    });
    Meteor.call("users.insert", this.state.pseudo);
  }

  render() {
    return (
      <div>
        <h1>users:1</h1>
      </div>
    );
  }
}

export default Users;
