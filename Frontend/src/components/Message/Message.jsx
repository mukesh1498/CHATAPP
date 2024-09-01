import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          {/* <FaRegUserCircle /> */}

          <img alt="../../assets/boy.png" src="" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What is Upp?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
}

export default Message;
