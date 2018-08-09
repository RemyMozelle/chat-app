import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { messages } from "../../api/messages";
import moment from "moment";
import { Meteor } from "meteor/meteor";
// doit récuperer en componentDidMount les valeurs stocker en base de données
class Messages extends Component {
  componentWillUpdate() {
    const block = document.querySelector(".block-messages");
    if (!block) {
      return null;
    }
    block.scrollTop = block.scrollHeight;
  }

  goBottom() {
    const block = document.querySelector(".block-messages");
    if (!block) {
      return null;
    }
    block.scrollTop = block.scrollHeight;
  }

  deleteMessage(id) {
    Meteor.call("messages.delete", id);
  }

  updateMessage(id, message) {
    Meteor.call("messages.update", id, message);
    const sucess = document.createElement("span");
    const header = document.querySelector("header");
    sucess.className = "alert alert-success";
    sucess.innerHTML = "Modification bien effectuer !";
    header.appendChild(sucess);

    setTimeout(() => {
      header.removeChild(sucess);
    }, 2000);
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
              </p>
              <p className="text-pseudo">{mess.text}</p>
              <i
                className="fas fa-trash font-trash"
                onClick={() => this.deleteMessage(mess._id)}
              />
              <i
                className="fas fa-edit font-edit"
                onClick={() => {
                  const newMessage = prompt("edition du nouveau message");
                  this.updateMessage(mess._id, newMessage);
                }}
              />
            </div>
          );
        })}
        {this.goBottom()}
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
