// === FORM ===
import React, { Component } from "react";

class Form extends Component {
  // Initialize State ----- +
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  // Component methods ----- +
  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.displayMessage(this.state.inputValue);

    this.setState({
      inputValue: "",
    });
  };

  // Render JSX ----- +
  render() {
    return (
      <form className="messageForm" action="/" onSubmit={this.handleSubmit}>
        <label htmlFor="message">Leave your message here:</label>
        <textarea
          type="text"
          id="message"
          placeholder="Your message here..."
          minLength="5"
          onChange={this.handleInput}
          value={this.state.inputValue}
          required
        />
        <div className="btnWrapper">
          <button type="button" onClick={this.props.displayPrompts}>
            Need a prompt?
          </button>
          <button type="submit" className="postMsg">
            Post Message
          </button>
          <button
            type="button"
            className="showSecrets"
            onClick={this.props.handleShowMsgs}
          >
            Just take me to the secrets..
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
