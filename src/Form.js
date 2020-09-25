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
    this.props.createMessage(this.state.inputValue);

    this.setState({
      inputValue: "",
    });
  };

  // Render JSX ----- +
  render() {
    return (
      <form className="messageForm" action="/" onSubmit={this.handleSubmit}>
        <label htmlFor="message">Write a secret in the text box</label>
        <textarea
          type="text"
          id="message"
          placeholder="Write your dev secret or leave some motivation here..."
          minLength="5"
          maxLength="300"
          onChange={this.handleInput}
          value={this.state.inputValue}
          required
        />
        <div className="btnWrapper">
          <button
            type="button"
            className="showSecrets"
            onClick={this.props.handleShowMsgs}
          >
            Skip to Secrets
          </button>
          <button type="button" onClick={this.props.handleShowPrompts}>
            Need a prompt?
          </button>
          <button type="submit" className="postMsg">
            Post Message
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
