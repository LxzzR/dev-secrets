// === LANDING ===

// Imports ----- +
import React from "react";
import Form from "./Form";

// Landing Component ----- +
const Landing = ({ createMessage, handleShowMsgs, handleShowPrompts }) => {
  return (
    <header>
      <div className="pageWrapper">
        <div className="headingWrapper">
          <h1>
            <span>&lt;</span>Dev Secrets...<span>&gt;</span>
          </h1>
        </div>
        <div className="intro">
          <p>
            It's often said that the antidote to imposter syndrome is talking
            about it with others and realizing you're not alone. Dev Secrets is
            an anonymous message board for devs, inspired by "Post Secret", to
            help combat imposter syndrome.
          </p>
          <p>
            Leave an anonymous message to inspire other devs or unload some
            stress, then take a peek into the inner world of other coders who
            are just like you.
          </p>
        </div>

        <Form
          createMessage={createMessage}
          handleShowPrompts={handleShowPrompts}
          handleShowMsgs={handleShowMsgs}
        />
      </div>
    </header>
  );
};

export default Landing;
