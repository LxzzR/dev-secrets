import React from "react";

const Prompts = ({ hidePrompts }) => {
  return (
    <section className="prompts">
      <div className="promptsModal">
        <h2>Message Prompts</h2>
        <ul>
          <li>Share a time you were scared</li>
          <li>
            What's something you didn't think you'd be able to do but actually
            accomlished?
          </li>
          <li>Share something related to coding that's been on your mind</li>
          <li>What small coding achievment are you most proud of?</li>
        </ul>

        <button type="button" onClick={hidePrompts}>
          Back
        </button>
      </div>
    </section>
  );
};

export default Prompts;
