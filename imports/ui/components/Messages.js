import React, { Component } from "react";
import MessageItem from "./MessageItem";
import { withTracker } from "meteor/react-meteor-data";
import { messages } from "../../api/messages";
// doit récuperer en componentDidMount les valeurs stocker en base de données
class Messages extends Component {
  render() {
    if (this.props.messages.length === 0) {
      return (
        <div>
          <h2>Aucune données</h2>
        </div>
      );
    }

    return (
      <div>
        {this.props.messages.map(mess => {
          //<MessageItem />
          return (
            <p key={mess._id}>
              {mess.pseudo} : {mess.text}
            </p>
          );
        })}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("messages");

  return {
    messages: messages.find({}).fetch()
  };
})(Messages);
