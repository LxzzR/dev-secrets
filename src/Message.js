import React from "react";

function Message({ message, className, font }) {
  return (
    <div className={`message ${className}`}>
      <p className={font}>{message}</p>
    </div>
  );
}

export default Message;
