// === APP ==

// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import Header from "./Header";
import Message from "./Message";

// App Class Component ----- +
class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      isVisible: false,
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (res) => {
      const newMessages = [];
      const data = res.val();

      for (let key in data) {
        newMessages.push(data[key]);
      }

      this.setState({
        messages: newMessages,
      });
    });
  }

  // Handles form event listener and updates state + firebase with new message
  displayMessage = (inputValue) => {
    const updatedMessages = [...this.state.messages];
    updatedMessages.push(inputValue);

    this.setState({
      messages: updatedMessages,
      isVisible: true,
    });

    const dbRef = firebase.database().ref();
    dbRef.push(inputValue);
  };

  render() {
    return (
      <div className="viewport">
        <Header displayMessage={this.displayMessage} />
        {this.state.isVisible && (
          <main>
            <section className="messages pageWrapper">
              <h2>Dev Secrets...</h2>
              {/* Maps through messages array and appends new messages to page */}
              {this.state.messages.map((message, index) => {
                return <Message message={message} key={index} />;
              })}
            </section>
          </main>
        )}
      </div>
    );
  }
}

export default App;
