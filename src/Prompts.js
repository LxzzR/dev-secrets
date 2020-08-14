import React from "react";

const Prompts = ({ handleShowPrompts }) => {
  return (
    <section className="prompts" tabIndex="0" onClick={handleShowPrompts}>
      <div className="promptsModal">
        <h2>Message Prompts</h2>
        <ul>
          <li>What are your dev + career related fears?</li>
          <li>What advice can you share for other developers?</li>
          <li>Tell us something about your dev journey no one knows.</li>
          <li>What are you most proud of as a developer?</li>
        </ul>
        <button
          type="button"
          className="backButton"
          onClick={handleShowPrompts}
        >
          Back
        </button>
        <button
          className="faBack"
          aria-label="go back"
          onClick={handleShowPrompts}
        >
          <i className="far fa-times-circle "></i>
        </button>
      </div>
    </section>
  );
};

export default Prompts;
