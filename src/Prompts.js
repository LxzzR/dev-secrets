import React from "react";

const Prompts = ({ hidePrompts }) => {
  return (
    <section
      className="prompts"
      tabIndex="0"
      onClick={() => hidePrompts(false)}
    >
      <div className="promptsModal">
        <h2>Message Prompts</h2>
        <ul>
          <li>What are your dev + career related fears?</li>
          <li>What advice can you share for other developers?</li>
          <li>What would work be like if you had more confidence?</li>
          <li>What achievment are you most proud of?</li>
        </ul>
        <button
          type="button"
          className="backButton"
          onClick={() => hidePrompts(false)}
        >
          Back
        </button>
        <button
          className="faBack"
          aria-label="go back"
          onClick={() => hidePrompts(false)}
        >
          <i className="far fa-times-circle"></i>
        </button>
      </div>
    </section>
  );
};

export default Prompts;
