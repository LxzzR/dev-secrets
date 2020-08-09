// === APP ==

// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import Header from "./Header";
import Form from "./Form";
import Message from "./Message";

// App Class Component ----- +
class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (res) => {
      console.log(res.val());
    });
  }

  displayMessage = (inputValue) => {
    const updatedMessages = [...this.state.messages];
    updatedMessages.push(inputValue);

    this.setState({
      messages: updatedMessages,
    });
  };

  render() {
    console.log("rendered, this.state.messages:", this.state.messages);
    return (
      <div className="viewport">
        <Header />

        <Form displayMessage={this.displayMessage} />

        {this.state.messages.map((message, index) => {
          return <Message message={message} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
