import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ChatInterface } from "@/components/ChatInterface";

export default function CampusChat() {
  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
    // Scroll to chat section smoothly
    setTimeout(() => {
      document.getElementById("chat-section")?.scrollIntoView({ 
        behavior: "smooth" 
      });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-campus-blue-light/10 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <HeroSection onStartChat={handleStartChat} />

        {/* Chat Interface Section */}
        <section id="chat-section" className="min-h-[70vh]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Campus Information Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask questions about anything on campus. I'm here to help you navigate 
              student life, academic resources, and campus services.
            </p>
          </div>
          
          <ChatInterface />
        </section>

        {/* Footer */}
        <footer className="mt-16 py-8 text-center border-t border-border">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span>📞 Emergency: (555) 123-HELP</span>
              <span>🏥 Campus Safety: (555) 123-SAFE</span>
              <span>💻 IT Support: (555) 123-TECH</span>
            </div>
            <p className="text-muted-foreground text-sm">
              CampusPal • Available 24/7 • Powered by AI Technology
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}