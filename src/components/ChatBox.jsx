import React from "react";
import "./ChatBox.css";

function ChatBox() {
  return (
    <div className="chatbox fill">
      <div className="chatbox_message position_left">
        Hi, How are you doing?
      </div>

      <div className="chatbox_message position_right">Good, and u?</div>
      <div className="chatbox_message position_left">
        Here I have some recommended places, let’s see
      </div>

      <div className="chatbox_message position_right">
        Wow that’s an interesting place
      </div>
    </div>
  );
}

export default ChatBox;
