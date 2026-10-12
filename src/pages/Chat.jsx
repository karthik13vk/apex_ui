import React, { useState, useRef, useEffect } from "react";
import { Plus, Send } from "lucide-react";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const textareaRef = useRef(null);
    const bottomRef = useRef(null);

    const isEmpty = messages.length === 0;

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };

        const botMessage = {
            role: "bot",
            content: "This is a demo reply his is a demo replyhis is a demo replyhis is a demo replyhis is a demo replyhis is a demo replyhis is a demo replyhis is a demo replyhis is a demo replyhis is a demo replyhis is a demo reply👋", // ← replace later with API
        };

        setMessages((prev) => [...prev, userMessage, botMessage]);

        setInput("");
    };
    // Auto resize textarea
    const handleInput = (e) => {
        setInput(e.target.value);
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height =
            textareaRef.current.scrollHeight + "px";
    };

    // Enter / Shift+Enter logic
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // Auto scroll
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="h-screen bg-[#f7f7f8] flex flex-col">

            {/* Header */}
            <header className="flex justify-between px-6 py-3">
                <div className="font-medium">ChatGPT ▾</div>
                <div className="flex gap-3">
                    <button className="px-4 py-1.5 border rounded-full bg-white text-sm">
                        Log in
                    </button>
                    <button className="px-4 py-1.5 bg-black text-white rounded-full text-sm">
                        Sign up
                    </button>
                </div>
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto px-4">
                {!isEmpty && (
                    <div className="max-w-2xl mx-auto py-6 space-y-4">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`px-4 py-3 rounded-2xl max-w-[90%] text-sm
                                         ${msg.role === "user"
                                        ? "bg-black text-white"
                                        : "bg-white border border-gray-200"
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>
                )}
            </div>

            {isEmpty ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <h1 className="text-3xl font-medium mb-6 text-center">
                        Break down a topic
                    </h1>
                    <div className="w-full max-w-2xl">
                        <div className="flex items-end bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                            <Plus className="w-5 h-5 text-gray-400 mr-3 mb-2" />
                            <textarea
                                ref={textareaRef}
                                rows={1}
                                value={input}
                                onChange={handleInput}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask anything"
                                className="flex-1 resize-none outline-none
                                 text-sm bg-transparent" />
                            <button
                                onClick={handleSend}
                                className="ml-2 p-2 rounded-full bg-black text-white">
                                <Send size={16} />
                            </button>

                        </div>
                    </div>
                </div>
            ) : (
                <div className="sticky bottom-0 bg-[#f7f7f8]/80 backdrop-blur-md px-4 py-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="flex items-end bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                            <Plus className="w-5 h-5 text-gray-400 mr-3 mb-2" />

                            <textarea
                                ref={textareaRef}
                                rows={1}
                                value={input}
                                onChange={handleInput}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask anything"
                                className="flex-1 resize-none outline-none text-sm bg-transparent" />

                            <button
                                onClick={handleSend}
                                className="ml-2 p-2 rounded-full bg-black text-white"
                            >
                                <Send size={16} />
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chat
