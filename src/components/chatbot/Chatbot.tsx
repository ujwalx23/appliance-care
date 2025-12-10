import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const quickReplies = [
  "Washing Machine Repair",
  "AC Service",
  "Fridge Repair",
  "Book Service",
  "Get Quote",
];

const responses: Record<string, string> = {
  "washing": "🧺 Washing Machine Repair:\n\n• Not spinning or draining\n• Leaking water\n• Unusual noises\n• Won't start\n\nCall 7710074028 for quick service!",
  "ac": "❄️ AC Problems:\n\n• Not cooling\n• Strange noises\n• Water leakage\n\nCall 7710074028 for AC service!",
  "fridge": "🧊 Refrigerator Repair:\n\n• Not cooling properly\n• Ice buildup\n• Unusual sounds\n\nCall 7710074028 now!",
  "book": "📅 Book a Service:\n\n1. Call: 7710074028\n2. WhatsApp: 7710074028\n3. Visit Contact page\n\nSame-day service available!",
  "quote": "💰 Get a Free Quote:\n\nWashing Machine Repair: ₹199\nWashing Machine Service: ₹249\nInstallation: ₹549\n\nCall 7710074028 for details!",
  "default": "👋 Hello! I can help with:\n\n• Washing Machine Repair\n• AC Service\n• Fridge Repair\n• Microwave Repair\n\nHow can I assist you today?",
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
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[360px] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">WashingExpert</h3>
              <p className="text-xs text-primary-foreground/80">Online • Ready to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line ${
                    msg.isBot
                      ? "bg-background text-foreground border border-border rounded-bl-md"
                      : "bg-primary text-primary-foreground rounded-br-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto bg-muted/30">
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
          <div className="p-4 border-t border-border bg-background">
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
                className="flex-1 px-4 py-2.5 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <Button type="submit" size="icon" variant="default" className="rounded-xl shrink-0">
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
