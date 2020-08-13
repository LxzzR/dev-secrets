import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

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
        </div>
      </form>
    );
  }
}

export default Form;
