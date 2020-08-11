import React from "react";
import Form from "./Form";

const Header = ({ displayMessage }) => {
  return (
    <header>
      <div className="pageWrapper">
        <div className="headingWrapper">
          <h1>
            <span>&lt;</span>Dev Secrets<span>&frasl;&gt;</span>
          </h1>
        </div>
        <p className="intro">
          Dev Secrets is an anonymous message board for devs, inspired by "Post
          Secret". The antidote to imposter syndrome is talking about it and
          knowing that you're not alone. Leave an anonymous message to inspire
          other devs or unload some stress, then take a peak into the inner
          world of other coders who are just like you.
        </p>

        <Form displayMessage={displayMessage} />
      </div>
    </header>
  );
};

export default Header;
