import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

export const messages = new Mongo.Collection("messages");

if (Meteor.isServer) {
  Meteor.publish("messages", function messagesPublication() {
    return messages.find();
  });
}

Meteor.methods({
  "messages.insert"(text, pseudo) {
    check(text, String);
    check(pseudo, String);

    messages.insert({
      text,
      pseudo,
      createdAt: new Date()
    });
  }
});
