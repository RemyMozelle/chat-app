import React, { Component } from "react";
import Messages from "./components/Messages";
import SendMessages from "./components/SendMessages";
import Users from "./components/Users";

class App extends Component {
  getPseudo() {
    return prompt("votre pseudo");
  }

  render() {
    return (
      <div>
        <header>
          <h1 style={{ textAlign: "center" }}>#général</h1>
        </header>
        <Messages />
        <SendMessages users={this.getPseudo()} />
      </div>
    );
  }
}

export default App;
