import React from "react";

const Header = () => {
  return (
    <header>
      <div className="pageWrapper">
        <div className="headingWrapper">
          <h1>
            <span>&lt;</span>Dev Secrets<span>&frasl;&gt;</span>
          </h1>
        </div>
        <p className="intro">
          The best cure for imposter syndrome is talking about it and knowing
          you're not alone. Leave a short 150 character message to inspire other
          devs or unload some stress, then take a peak into the inner world of
          other coders.
        </p>
      </div>
    </header>
  );
};

export default Header;
