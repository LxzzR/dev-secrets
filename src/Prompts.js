import React from "react";

const Prompts = ({ hidePrompts }) => {
  return (
    <section className="prompts" tabIndex="0" onClick={hidePrompts}>
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
        <button type="button" className="backButton" onClick={hidePrompts}>
          Back
        </button>
        <button className="faBack" ariaLabel="go back" onClick={hidePrompts}>
          <i class="far fa-times-circle"></i>
        </button>
      </div>
    </section>
  );
};

export default Prompts;
