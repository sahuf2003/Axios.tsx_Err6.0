'use client';

import React, { useState } from "react";

const ChatbotPage = () => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([
        { sender: "chatbot", message: "Hello, how can I assist you today?" },
    ]);

    const handleSendMessage = () => {
        if (message.trim() === "") return;

        setChat([...chat, { sender: "user", message }]);
        setMessage("");

        setTimeout(() => {
            setChat((prevChat) => [
                ...prevChat,
                { sender: "chatbot", message: `You said: ${message}` },
            ]);
        }, 1000);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 h-screen flex flex-col">
            <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <h1 className="text-3xl font-bold text-blue-600">ChatX</h1>
            </div>

            <div className="flex-grow overflow-y-auto mt-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="space-y-4">
                    {chat.map((item, index) => (
                        <div
                            key={index}
                            className={`flex ${item.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-xs p-3 rounded-lg ${item.sender === "user"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                {item.message}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-300 flex items-center space-x-4">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type your message..."
                />
                <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatbotPage;
