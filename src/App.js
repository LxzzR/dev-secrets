// === APP ===

// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import Landing from "./Landing";
import Prompts from "./Prompts";
import Message from "./Message";

// Module variables + Functions ----- +
const msgBorderColors = ["white", "yellow", "green", "blue", "purple", "pink"];

const msgFonts = [
  "annie",
  "reenie",
  "sueEllen",
  "swanky",
  "arial",
  "nanum",
  "neucha",
  "architects",
];

// Takes an array and returns a random index value of that array
const getRandomClassName = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

// App Class Component ----- +
class App extends Component {
  // Initialize State ----- +
  constructor() {
    super();
    this.state = {
      messages: [{}],
      display: "landing",
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
          color: getRandomClassName(msgBorderColors),
          font: getRandomClassName(msgFonts),
        });
      }

      this.setState({
        messages: newMessages,
      });
    });
  }

  // Handles form onSubmit event listener and updates state + firebase with new message and akes text area input value as an argument
  createMessage = (inputValue) => {
    const updatedMessages = [...this.state.messages];
    const msgColor = getRandomClassName(msgBorderColors);
    const msgFont = getRandomClassName(msgFonts);

    // Pushes new message, color, and font to the copied array
    updatedMessages.push({
      message: inputValue,
      borderColor: msgColor,
      font: msgFont,
    });

    // Updates state with the copied state array + our new message value
    this.setState({
      display: "messages",
    });

    // pushes new message to firebase
    const dbRef = firebase.database().ref();
    dbRef.push(inputValue);
  };

  // Changes state depending on which elements should be displayed to the user
  setDisplay = (elementToDisplay) => {
    this.setState({
      display: elementToDisplay,
    });
  };

  // Render JSX ----- +
  render() {
    return (
      <div>
        {/* Display Landing Conditionally */}
        {(this.state.display === "landing" ||
          this.state.display === "prompts") && (
          <Landing
            createMessage={this.createMessage}
            handleShowPrompts={() => this.setDisplay("prompts")}
            handleShowMsgs={() => this.setDisplay("messages")}
          />
        )}

        {/* Display messages conditionally */}
        {this.state.display === "messages" && (
          <main>
            <section className="messages pageWrapper">
              <div className="messageHeading">
                <h2>Dev Secrets...</h2>
                <div className="btnWrapper">
                  <button onClick={() => this.setDisplay("landing")}>
                    Post Again
                  </button>
                </div>
              </div>

              {/* Map messages and append each to page */}
              {[...this.state.messages]
                .reverse()
                .map(({ message, color, font }, index) => {
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

        {/* Display prompts modal conditionally */}
        {this.state.display === "prompts" && (
          <Prompts handleShowPrompts={() => this.setDisplay("landing")} />
        )}
      </div>
    );
  }
}

export default App;
