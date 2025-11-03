import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "🌼 Namaste! I'm your Saree Assistant. Need help finding your perfect drape?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    "Browse by Fabric",
    "Track My Order",
    "Size & Fabric Help",
    "Speak with Support",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
    }, 500);
  };

  const getBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("fabric") || message.includes("material")) {
      return "We offer Silk, Cotton, Designer, Handloom & Banarasi sarees. Which would you like to explore? 🎨";
    } else if (message.includes("track") || message.includes("order")) {
      return "Please provide your order number, and I'll help you track your shipment! 📦";
    } else if (message.includes("size") || message.includes("help")) {
      return "Most sarees are 5.5-6 meters. Need styling tips or blouse measurements? I'm here to help! 👗";
    } else if (message.includes("price") || message.includes("cost")) {
      return "Our sarees range from ₹1,499 to ₹15,999. Would you like to see our budget-friendly or premium collections? 💰";
    } else {
      return "I'd be happy to help! You can browse our collection, track orders, or get styling advice. What interests you? ✨";
    }
  };

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { text: reply, isBot: false }]);
    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
    }, 500);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-elegant hover:shadow-gold bg-gradient-to-r from-primary to-primary-glow text-primary-foreground z-50 animate-float"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-card rounded-2xl shadow-elegant border border-border z-50 flex flex-col animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground p-4 flex items-center justify-between rounded-t-2xl">
            <div>
              <h3 className="font-semibold">SareeVastra Assistant</h3>
              <p className="text-xs opacity-90">Usually replies instantly</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 pattern-bg">
            <div className="space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-fade-in`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? "bg-muted text-foreground"
                        : "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {quickReplies.map((reply) => (
                    <Button
                      key={reply}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs hover:bg-primary hover:text-primary-foreground"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-gold"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
