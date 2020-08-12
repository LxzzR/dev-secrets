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
      headerVisible: true,
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

  // === COMPONENT METHODS ===

  // Handles form onSubmit event listener and updates state + firebase with new message and akes text area input value as an argument
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
      headerVisible: false,
      msgVisible: true,
    });

    // pushes our new message to firebase
    const dbRef = firebase.database().ref();
    dbRef.push(inputValue);
  };

  // Handles visibility of the prompts component
  displayPrompts = (boolean) => {
    this.setState({
      promptsVisible: boolean,
    });
  };

  resetPage = () => {
    this.setState({
      headerVisible: true,
      msgVisible: false,
    });
  };

  render() {
    return (
      <div className="viewport">
        {/* Header Component*/}
        {this.state.headerVisible && (
          <Header
            displayMessage={this.displayMessage}
            displayPrompts={this.displayPrompts}
          />
        )}

        {/* Shows this section only if msgVisible state is set to true */}
        {this.state.msgVisible && (
          <main>
            <section className="messages pageWrapper">
              <div className="messageHeading">
                <h2>Dev Secrets...</h2>
                <div className="btnWrapper">
                  <button onClick={this.resetPage}>Post Again</button>
                </div>
              </div>

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

        {/* Shows prompts component only if promptsVisible state is true */}
        {this.state.promptsVisible && (
          //Prompts Component
          <Prompts hidePrompts={this.displayPrompts} />
        )}
      </div>
    );
  }
}

export default App;
