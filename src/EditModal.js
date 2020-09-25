import React from "react";

const EditModal = ({ handleShowPrompts, message }) => {
  return (
    <section className="prompts" tabIndex="0" onClick={handleShowPrompts}>
      <div className="promptsModal">
        <h2>Please Double Check Your Message for Errors</h2>
        <p>{message}</p>
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

export default EditModal;
