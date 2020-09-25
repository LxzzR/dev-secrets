import React, { useState } from "react";

function Message({ message, className, font }) {
  const [likeCounter, setLikeCounter] = useState(0);
  return (
    <div className={`message ${className}`}>
      <p className={font}>{message}</p>
      <div className="buttonWrapper">
        {likeCounter}
        <button onClick={() => setLikeCounter(likeCounter + 1)} type="button">
          <i class="fas fa-heart like"></i>
        </button>
      </div>
    </div>
  );
}

export default Message;
