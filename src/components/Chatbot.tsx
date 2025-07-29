import React, { useState, useEffect, useRef, KeyboardEvent, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Message = {
  from: "user" | "bot";
  text: string;
  // sources removed for display
  sources?: {
    id: string;
    metadata: { source: string };
    page_content: string;
  }[];
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true); // for controlling chatbot visibility
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data: { answer: string } = await response.json();

      // Show toast with answer
      toast.info(data.answer, {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        closeOnClick: true,
      });

      // Add bot answer message, no sources shown
      const botMessage: Message = {
        from: "bot",
        text: data.answer,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
      });
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Oops! Something went wrong. Please try again later." },
      ]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  if (!isOpen) return null; // Do not render chatbot if closed

  return (
    <>
      <div className="fixed bottom-4 right-4 left-4 md:left-auto md:right-4 max-w-md md:w-96 bg-white border rounded-lg shadow-lg flex flex-col overflow-hidden z-50 h-[480px] md:h-[600px]">
        <div className="bg-blue-600 text-white px-4 py-3 font-semibold text-lg flex justify-between items-center">
          <span>Chatbot</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
            className="text-white hover:text-gray-200 font-bold text-xl leading-none"
            title="Close"
            type="button"
          >
            &times;
          </button>
        </div>

        {/* Messages area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm md:text-base scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                msg.from === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`rounded px-3 py-2 max-w-[80%] whitespace-pre-wrap ${
                  msg.from === "user"
                    ? "bg-blue-100 text-blue-900"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        <div className="flex border-t">
          <input
            type="text"
            aria-label="Type your message"
            className="flex-1 px-4 py-3 text-sm md:text-base outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-5 py-3 md:py-4 text-sm md:text-base font-semibold hover:bg-blue-700 transition"
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </div>

      {/* Toast container to render toasts */}
      <ToastContainer />
    </>
  );
};

export default Chatbot;
