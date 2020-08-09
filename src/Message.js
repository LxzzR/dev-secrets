import React from "react";

function Message({ message }) {
  return (
    <section className="pageWrapper message">
      <p>{message}</p>
    </section>
  );
}

export default Message;
