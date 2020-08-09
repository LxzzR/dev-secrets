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
  };

  render() {
    return (
      <div className="pageWrapper">
        <form action="/" onSubmit={this.handleSubmit}>
          <label htmlFor="message">Leave your message here:</label>
          <textarea
            type="text"
            id="message"
            placeholder="Your message here..."
            minLength="20"
            maxLength="150"
            onChange={this.handleInput}
            value={this.state.value}
            required
          />

          <button type="submit">Post Message</button>
        </form>
      </div>
    );
  }
}

export default Form;
