"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MessageCircle, Minimize2, Send, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  time: string;
}

const QUICK_REPLIES = [
  "What products do you make?",
  "How to place a bulk order?",
  "Are your products natural?",
  "Contact details?",
];

function now() {
  return new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Namaste! I'm Nalla Assistant. Ask me anything about Nalla's Pooja Products!",
      time: now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (!open && messages.length > 1) setUnread(1);
    if (open) setUnread(0);
  }, [messages, open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text.trim(), time: now() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errMsg = data?.error || `Error ${res.status}`;
        throw new Error(errMsg);
      }

      const reply =
        (typeof data?.reply === "string" && data.reply.trim()) ||
        "Sorry, I didn't get a response. Please try again or call +91 91541 27230.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply, time: now() }]);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error("Chat Error:", message);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong.\n\nPlease reach us directly:\nCall / WhatsApp: +91 91541 27230\nEmail: info@nallaspooja.com",
          time: now(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen((o) => !o);
          setUnread(0);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #FF7A00 0%, #FFBF00 100%)" }}
        aria-label="Chat with Nalla Assistant"
      >
        {open ? <X size={22} className="text-white" /> : <MessageCircle size={22} className="text-white" />}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold animate-bounce">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div
          className={`fixed right-0 left-0 mx-3 sm:left-auto sm:right-6 sm:mx-0 sm:w-96 z-50 rounded-2xl shadow-2xl border border-gold-200 overflow-hidden transition-all duration-300 ${
            minimized ? "bottom-24 h-[60px]" : "bottom-[5.5rem] sm:bottom-24"
          }`}
        >
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #1A0500, #4A0E00)" }}
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-gold-400 flex-shrink-0">
              <Image src="/logo.jpeg" alt="Nalla Assistant" fill className="object-contain bg-white p-0.5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">Nalla Assistant</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <p className="text-white/55 text-xs truncate">Online</p>
              </div>
            </div>
            <button
              onClick={() => setMinimized((m) => !m)}
              className="text-white/50 hover:text-white p-1 transition-colors flex-shrink-0"
              aria-label="Minimize"
            >
              <Minimize2 size={15} />
            </button>
          </div>

          {!minimized && (
            <>
              <div className="chatbot-messages h-72 overflow-y-auto p-4 space-y-3" style={{ background: "#FAF6F0" }}>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-gold-300 flex-shrink-0">
                        <Image src="/logo.jpeg" alt="" width={24} height={24} className="object-contain bg-white" />
                      </div>
                    )}
                    <div className={`max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                      <div
                        className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                          msg.role === "user"
                            ? "text-white rounded-br-sm"
                            : "bg-white text-gray-700 rounded-bl-sm border border-gold-100 shadow-sm"
                        }`}
                        style={msg.role === "user" ? { background: "linear-gradient(135deg, #FF7A00, #FFBF00)" } : {}}
                      >
                        {msg.content}
                      </div>
                      <p className={`text-[10px] text-gray-400 mt-1 px-1 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-gold-300 flex-shrink-0">
                      <Image src="/logo.jpeg" alt="" width={24} height={24} className="object-contain bg-white" />
                    </div>
                    <div className="bg-white border border-gold-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {messages.length === 1 && !loading && (
                <div className="px-3 pb-2 flex flex-wrap gap-1.5" style={{ background: "#FAF6F0" }}>
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      className="text-xs border border-saffron-300 text-saffron-700 rounded-full px-3 py-1.5 bg-white hover:bg-saffron-50 hover:border-saffron-500 transition-all duration-150 active:scale-95"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              <div className="bg-white border-t border-gold-100 p-3 flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(input);
                    }
                  }}
                  placeholder="Type a message..."
                  disabled={loading}
                  className="flex-1 text-sm bg-gray-50 rounded-full px-4 py-2 outline-none border border-gray-200 focus:border-saffron-400 text-gray-800 placeholder-gray-400 transition-colors disabled:opacity-60"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-all duration-150 active:scale-90"
                  style={{ background: "linear-gradient(135deg, #FF7A00, #FFBF00)" }}
                  aria-label="Send"
                >
                  <Send size={14} className="text-white" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
