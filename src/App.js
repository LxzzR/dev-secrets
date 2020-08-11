// === APP ==

// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import Header from "./Header";
import Message from "./Message";

// Module variables
const msgColors = ["red", "yellow", "green", "blue", "purple"];

const msgFonts = ["arial", "script", "times", "script", "arial"];

const getRandomClassName = (array) => {
  const randomNum = Math.floor(Math.random() * 5);
  return array[randomNum];
};

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
        newMessages.push({
          message: data[key],
          color: getRandomClassName(msgColors),
          font: getRandomClassName(msgFonts),
        });
      }

      this.setState({
        messages: newMessages,
      });
    });
  }

  // Handles form event listener and updates state + firebase with new message
  displayMessage = (inputValue) => {
    const updatedMessages = [...this.state.messages];

    updatedMessages.push({
      message: inputValue,
      color: getRandomClassName(msgColors),
      font: getRandomClassName(msgFonts),
    });

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
              {this.state.messages.map(({ message, color, font }, index) => {
                console.log(message);
                return (
                  <Message
                    message={message}
                    key={index}
                    className={color}
                    font={font}
                  />
                );
              })}
            </section>
          </main>
        )}
      </div>
    );
  }
}

export default App;
