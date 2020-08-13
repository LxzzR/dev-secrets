// === APP ===

// Imports ----- +
import React, { Component } from "react";
import firebase from "./firebase";
import Landing from "./Landing";
import Prompts from "./Prompts";
import Message from "./Message";

// Module variables + Functions ----- +
const msgColors = ["white", "yellow", "green", "blue", "purple"];

const msgFonts = [
  "annie",
  "reenie",
  "amatic",
  "sueEllen",
  "swanky",
  "arial",
  "nanum",
  "neucha",
  "architects",
  "amatic",
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
      isLandingVisible: true,
      isMsgVisible: false,
      isPromptsVisible: false,
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

  // Handles form onSubmit event listener and updates state + firebase with new message and akes text area input value as an argument
  displayMessage = (inputValue) => {
    const updatedMessages = [...this.state.messages];
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
      isHeaderVisible: false,
      isMsgVisible: true,
    });

    // pushes new message to firebase
    const dbRef = firebase.database().ref();
    dbRef.push(inputValue);
  };

  // Handles visibility of the prompts component
  handleShowPrompts = (boolean) => {
    this.setState({
      isPromptsVisible: boolean,
    });
  };

  // Handles visibility of landing and message sections
  handleShowMsgs = (boolean) => {
    this.setState({
      isLandingVisible: !boolean,
      isMsgVisible: boolean,
    });
  };

  // Render JSX ----- +
  render() {
    return (
      <div>
        {/* Display Landing Conditionally */}
        {this.state.isLandingVisible && (
          <Landing
            displayMessage={this.displayMessage}
            handleShowPrompts={() => this.handleShowPrompts(true)}
            handleShowMsgs={this.handleShowMsgs}
          />
        )}

        {/* Display messages conditionally */}
        {this.state.isMsgVisible && (
          <main>
            <section className="messages pageWrapper">
              <div className="messageHeading">
                <h2>Dev Secrets...</h2>
                <div className="btnWrapper">
                  <button onClick={() => this.handleShowMsgs(false)}>
                    Post Again
                  </button>
                </div>
              </div>

              {/* Map messages and append each to page */}
              {this.state.messages
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
        {this.state.isPromptsVisible && (
          <Prompts handleShowPrompts={() => this.handleShowPrompts(false)} />
        )}
      </div>
    );
  }
}

export default App;
