// === APP ==

// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import Header from "./Header";
import Prompts from "./Prompts";
import Message from "./Message";

// Module variables
const msgColors = ["white", "yellow", "green", "blue", "purple"];

const msgFonts = ["annie", "reenie", "gaegu", "sueEllen", "swanky", "arial"];

// Takes an array and returns a random index value of that array
const getRandomClassName = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

// App Class Component ----- +
class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [{}],
      // headerVisible: true,
      msgVisible: false,
      promptsVisible: false,
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

  // Handles form onSubmit event listener and updates state + firebase with new message
  // Takes text area input value as an argument
  displayMessage = (inputValue) => {
    // Creates a copy of the array currently stored in state
    const updatedMessages = [...this.state.messages];
    // Assigns a random font and border colour and stores it in variable
    const msgColor = getRandomClassName(msgColors);
    const msgFont = getRandomClassName(msgFonts);

    // Pushes new message, color, and font to the copied array
    updatedMessages.push({
      message: inputValue,
      color: msgColor,
      font: msgFont,
    });

    // Updates state with the copied state array + our new message value
    // Sets message visible to true
    this.setState({
      messages: updatedMessages,
      msgVisible: true,
    });

    // pushes our new message to firebase
    const dbRef = firebase.database().ref();
    dbRef.push(inputValue);
  };

  displayPrompts = () => {
    this.setState({
      // headerVisible: false,
      promptsVisible: true,
    });
  };

  hidePrompts = () => {
    this.setState({
      // headerVisible: true,
      promptsVisible: false,
    });
  };

  render() {
    return (
      <div className="viewport">
        {/* Header Component*/}
        {/* {this.state.headerVisible && ( */}
          <Header
            displayMessage={this.displayMessage}
            displayPrompts={this.displayPrompts}
          />
        {/* )} */}

        {/* Shows this section only if msgVisible state is set to true */}
        {this.state.msgVisible && (
          <main>
            <section className="messages pageWrapper">
              <h2>Dev Secrets...</h2>
              {/* Maps through messages array and appends all message components to page */}
              {this.state.messages.map(({ message, color, font }, index) => {
                console.log(message);
                return (
                  // Message Component
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
        {/* Show prompts component only if promptsVisible state is true */}
        {this.state.promptsVisible && (
          //Prompts Component
          <Prompts hidePrompts={this.hidePrompts} />
        )}
      </div>
    );
  }
}

export default App;
