import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

export const users = new Mongo.Collection("users");

if (Meteor.isServer) {
  Meteor.publish("users", function usersPublications() {
    return users.find();
  });
}

Meteor.methods({
  "users.insert"(pseudo) {
    check(pseudo, String);

    users.insert({
      pseudo
    });
  }
});
