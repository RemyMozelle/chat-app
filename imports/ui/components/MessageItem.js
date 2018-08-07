import React from "react";

const MessageItem = props => {
  return (
    <p>
      <strong>{props.users}</strong> : Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Libero blanditiis nesciunt mollitia iusto deserunt
      possimus fugit a necessitatibus minus quaerat. <br />
      <br />
      <em>le :{props.date}</em>
    </p>
  );
};

export default MessageItem;
