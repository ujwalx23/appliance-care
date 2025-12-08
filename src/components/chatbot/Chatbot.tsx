import { useState } from "react";
import { MessageCircle, X, Send, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const quickReplies = [
  "Washing Machine",
  "AC Repair",
  "Fridge Issue",
  "Book Service",
  "Get Quote",
];

const responses: Record<string, string> = {
  "washing machine": "🧺 Washing Machine Issues:\n\n• Not spinning or draining\n• Leaking water\n• Unusual noises\n• Won't start\n\nCall +91-9876543210 for quick service!",
  "ac": "❄️ AC Problems:\n\n• Not cooling\n• Strange noises\n• Gas leakage\n• Compressor issues\n\nBook a technician: +91-9876543210",
  "fridge": "🧊 Refrigerator Fixes:\n\n• Not cooling properly\n• Ice buildup\n• Unusual sounds\n• Door seal issues\n\nCall us: +91-9876543210",
  "book": "📅 Book a Service:\n\n1. Call: +91-9876543210\n2. Visit our Contact page\n3. Fill the online form\n\nSame-day service available!",
  "quote": "💰 Free Quote:\n\nShare your appliance type, brand, and issue description.\n\nCall +91-9876543210 or use our contact form!",
  "default": "👋 Hi! I can help with:\n\n• Washing Machines\n• Refrigerators\n• Air Conditioners\n• Microwaves\n• Dryers\n\nWhat needs fixing?",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: responses.default, isBot: true },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now(), text, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const lowerText = text.toLowerCase();
    let botResponse = responses.default;

    for (const [key, value] of Object.entries(responses)) {
      if (lowerText.includes(key)) {
        botResponse = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, isBot: true }]);
    }, 400);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl ${
          isOpen
            ? "bg-muted text-foreground rotate-0"
            : "bg-gradient-to-br from-primary to-secondary text-primary-foreground animate-pulse-glow"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[380px] glass-card rounded-3xl overflow-hidden animate-scale-in shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">AppliancesHelp</h3>
              <p className="text-xs text-white/80">Online • Ready to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-background/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line ${
                    msg.isBot
                      ? "bg-muted text-foreground rounded-bl-md"
                      : "bg-gradient-to-r from-primary to-secondary text-white rounded-br-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto bg-background/50">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium whitespace-nowrap hover:bg-primary/20 transition-colors border border-primary/20"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50 bg-card/50">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-muted border-0 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <Button type="submit" size="icon" variant="hero" className="rounded-xl shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
