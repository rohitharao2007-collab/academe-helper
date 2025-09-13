import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, MapPin, Clock, Utensils, BookOpen, Building } from "lucide-react";
import { getCampusResponse } from "@/lib/campusData";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickActions = [
  { icon: Clock, text: "Class Schedules", query: "show me class schedules" },
  { icon: Utensils, text: "Dining Hours", query: "dining hall hours" },
  { icon: BookOpen, text: "Library Services", query: "library services and hours" },
  { icon: Building, text: "Campus Facilities", query: "campus facilities and buildings" },
  { icon: MapPin, text: "Campus Map", query: "campus map and directions" },
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm CampusPal, your friendly campus companion! I can help you with schedules, facilities, dining, library services, and administrative procedures. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getCampusResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (query: string) => {
    handleSendMessage(query);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Quick Actions */}
      <div className="mb-6 p-4 bg-card rounded-xl border shadow-sm">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="quick-action"
              size="sm"
              onClick={() => handleQuickAction(action.query)}
              className="flex flex-col items-center gap-1 h-auto p-3"
            >
              <action.icon className="h-4 w-4" />
              <span className="text-xs font-medium">{action.text}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <Card className="flex-1 flex flex-col overflow-hidden shadow-lg border-campus-blue-light/30">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.isBot ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.isBot
                    ? "bg-gradient-to-br from-campus-blue to-campus-blue-dark text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <div
                className={`max-w-[70%] rounded-xl p-3 ${
                  message.isBot
                    ? "bg-muted text-foreground"
                    : "bg-gradient-to-br from-campus-blue to-campus-blue-dark text-white"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <div
                  className={`text-xs mt-1 opacity-70 ${
                    message.isBot ? "text-muted-foreground" : "text-white/70"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-campus-blue to-campus-blue-dark text-white flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-muted rounded-xl p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-campus-blue rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-campus-blue rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-campus-blue rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-background/50">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about schedules, facilities, dining, or campus services..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
              className="flex-1"
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              variant="campus"
              size="icon"
              disabled={!inputValue.trim() || isTyping}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}