// src/pages/Chat.jsx
import React, { useState, useRef, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const promptsRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { 
      sender: 'user', 
      text: input,
      emoji: '👤'
    };
    setMessages(prev => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      const responses = [
        { text: "I understand your question. Let me help with that...", emoji: '🤖' },
        { text: "Thanks for your message! Here's what I found...", emoji: '📦' },
        { text: "Interesting question! Here's some information...", emoji: '💬' }
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { sender: 'bot', ...response }]);
    }, 800);
  };

  const quickPrompts = [
    "Talk with a representative",
    "Start return process",
    "Track my package",
    "Refund policy"
  ];

  const handleQuickPrompt = (prompt) => {
    setMessages(prev => [...prev, { 
      sender: 'user', 
      text: prompt,
      emoji: '👤'
    }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: "Let me provide information about that...",
        emoji: '🤖'
      }]);
    }, 600);
  };

  return (
    <div className="h-full flex flex-col p-4">
      {/* Header with Gradient Text */}
      <div className="mb-4">
        <h1 className="bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-800 inline-block text-transparent bg-clip-text font-medium text-2xl leading-tight">
          How can I help you today?
        </h1>
        <p className="text-neutral-500 text-xs mt-1">
          Try one of these prompts or ask your own question
        </p>
      </div>

      

      {/* Messages Container */}
      <div className="flex-grow bg-white/50 rounded-xl shadow-xs border border-gray-100 p-3 mb-3 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-2 bg-gradient-to-r from-pink-200 via-violet-200 to-indigo-200 inline-block text-transparent bg-clip-text">💬</div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">No messages yet</h3>
            <p className="text-xs text-gray-400">Send a message to start chatting</p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div 
              key={i}
              className={`flex mb-3 last:mb-0 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-3 py-2 rounded-xl ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-br-none shadow-md'
                    : 'bg-gray-50 text-gray-800 rounded-bl-none border border-gray-100 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-2">
                  {msg.sender === 'bot' && <span className="text-sm">{msg.emoji}</span>}
                  <p className="text-sm">{msg.text}</p>
                  {msg.sender === 'user' && <span className="text-sm ml-1">{msg.emoji}</span>}
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
{/* Quick Prompts - Fixed Position */}
<div 
        ref={promptsRef}
        className="flex  gap-2 mb-1 overflow-x-auto pb-2 sticky top-0 bg-white/80 backdrop-blur-sm z-10 pt-2"
      >
        {quickPrompts.map((prompt, index) => (
          <div 
            key={index}
            className="flex-shrink-0  group relative bg-gradient-to-r from-pink-50/80 via-violet-50/80 to-indigo-50/80 hover:from-pink-100/80 hover:via-violet-200/80 hover:to-indigo-100/80 border border-gray-200/50 rounded-xl px-3 py-2 transition-all duration-200 cursor-pointer shadow-s"
            onClick={() => handleQuickPrompt(prompt)}
          >
            <p className="text-xs text-gray-700 whitespace-nowrap">{prompt}</p>
            <svg 
              className=" right-1 bottom-2 h-3 text-gray-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 16 16"
            >
              <g fill="none">
                <path d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8z" fill="currentColor"></path>
              </g>
            </svg>
          </div>
        ))}
      </div>
      {/* Input Area */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xs border border-gray-200 relative">
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 outline-none focus:outline-none active:border-transparent min-h-[60px] max-h-[100px] resize-none rounded-xl text-sm placeholder-gray-400 bg-transparent"
          placeholder="Type your question here..."
          rows={1}
        />
        
        <div className="absolute right-3 bottom-3 flex gap-2 items-center">
          <span className="text-xs text-gray-400">{input.length}/4000</span>
          <button
            onClick={sendMessage}
            className="bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 rounded-full text-white w-8 h-8 p-2 hover:opacity-90 transition-all flex items-center justify-center shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 244l144-144l144 144"></path>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M256 120v292"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;