import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Clock } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

interface HeroSectionProps {
  onStartChat: () => void;
}

export function HeroSection({ onStartChat }: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl mb-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={campusHero}
          alt="Beautiful university campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-campus-blue/80 via-campus-blue/60 to-campus-blue-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
            <MessageCircle className="h-12 w-12" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Campus
          <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            {" "}AI Assistant
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
          Get instant answers about schedules, facilities, dining, library services,
          <br className="hidden md:block" />
          and administrative procedures—all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            onClick={onStartChat}
            variant="campus"
            size="lg"
            className="bg-white text-campus-blue hover:bg-white/90 hover:text-campus-blue-dark shadow-xl text-lg px-8 py-3"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Chatting
          </Button>
          
          <Button
            variant="campus-outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Explore Features
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            "Class Schedules",
            "Campus Map",
            "Dining Hours",
            "Library Services",
            "Quick Support"
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm font-medium"
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-white/80">Available Support</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">
              <Clock className="inline h-8 w-8 mr-1" />
              Instant
            </div>
            <div className="text-white/80">Response Time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-white/80">Campus Topics</div>
          </div>
        </div>
      </div>
    </section>
  );
}