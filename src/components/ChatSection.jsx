import React, { useState, useRef, useEffect } from "react";

const ChatSection = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Anonymous", text: "Hello! How are you feeling today?" },
    { id: 2, sender: "You", text: "I'm doing okay, thanks for asking!" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: messages.length + 1, sender: "You", text: input }]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        Talk and Feel at Ease
      </h1>

      {/* Chat Box */}
      <div className="flex flex-col w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-purple-600 text-white text-center py-4 text-xl font-semibold">
          1-on-1 Anonymous Chat
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-3 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[75%] px-4 py-2 rounded-2xl break-words shadow ${
                msg.sender === "You"
                  ? "bg-purple-500 text-white self-end rounded-br-none"
                  : "bg-white text-gray-800 self-start rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <div className="flex p-4 bg-white border-t border-gray-200">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSend}
            className="ml-3 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
