import React from "react";

const UserInput = () => {
  return (
    <div class="pageWrapper">
      <form action="/">
        <label htmlFor="message">Leave your message here:</label>
        <textarea
          type="text"
          id="message"
          placeholder="Your message here..."
          minLength="20"
          maxLength="150"
        />

        <button type="submit">Post Message</button>
      </form>
    </div>
  );
};

export default UserInput;
