import React from "react";
import Form from "./Form";

const Header = ({ displayMessage, displayPrompts }) => {
  return (
    <header>
      <div className="pageWrapper">
        <div className="headingWrapper">
          <h1>
            <span>&lt;</span>Dev Secrets<span>&frasl;&gt;</span>
          </h1>
        </div>
        <p className="intro">
          The antidote to imposter syndrome is talking about it and knowing that
          you're not alone. Dev Secrets is an anonymous message board for devs
          inspired by "Post Secret". Leave an anonymous message to inspire other
          devs or unload some stress, then take a peak into the inner world of
          other coders who are just like you.
        </p>

        <Form displayMessage={displayMessage} displayPrompts={displayPrompts} />
      </div>
    </header>
  );
};

export default Header;
