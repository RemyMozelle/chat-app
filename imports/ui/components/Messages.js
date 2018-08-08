import React, { Component } from "react";
import MessageItem from "./MessageItem";
import { withTracker } from "meteor/react-meteor-data";
import { messages } from "../../api/messages";
import moment from "moment";
// doit récuperer en componentDidMount les valeurs stocker en base de données
class Messages extends Component {
  componentWillUpdate() {
    const block = document.querySelector(".block-messages");
    if (!block) {
      return null;
    }
    block.scrollTop = block.scrollHeight;
  }

  render() {
    if (this.props.messages.length === 0) {
      return (
        <div>
          <h2>Aucune données</h2>
        </div>
      );
    }

    return (
      <div className="block-messages">
        {this.props.messages.map(mess => {
          return (
            <div key={mess._id} className="box-message">
              <p className="pseudo">
                {mess.pseudo}
                <em className="date">
                  {moment(mess.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </em>
                <br />
                {mess.text}
              </p>
            </div>
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
