import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Trophy, MessageCircle } from 'lucide-react';
import magicalWand from '@/assets/magical-wand.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starry background */}
      <div className="starry-bg"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="px-6 py-2 text-lg font-medium bg-card/60 backdrop-blur-sm">
            <Trophy className="w-5 h-5 mr-2" />
            Grand Prize: ₹1,00,000
          </Badge>

          {/* Main title */}
          <div className="space-y-4">
            <div className="relative">
              <h1 className="text-3xl md:text-5xl font-bold text-muted-foreground leading-tight mb-2">
                Khalsa College of Engineering and Technology
              </h1>
              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer leading-tight px-4">
                  🎉 GRAND WELCOME 🎉
                </h1>
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              </div>
              <h1 className="text-2xl md:text-4xl font-medium text-muted-foreground leading-tight">
                to
              </h1>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-magical leading-tight">
              HackSpark
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold text-magical leading-tight">
              2025
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-semibold mt-6 italic">
              Where Magic Meets Innovation
            </p>
          </div>

          {/* Description */}
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed italic">
            Join the ultimate magical coding tournament where developers cast spells with code, 
            conjure innovative solutions, and compete for legendary prizes in three mystical challenges.
          </p>

          {/* Event details */}
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span>September 26-27, 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Khalsa College of Engineering and Technology, Amritsar</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span>Teams of 3-5 Wizards</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="animate-magical-pulse"
              onClick={() => window.open('https://devnovate.co/event/hackspark-2025-genai-hackathon', '_blank')}
            >
              Cast Your Spell - Register Now 
            </Button>
            <Button variant="outline" size="lg">
              Learn More About Challenges
            </Button>
          </div>

          {/* WhatsApp Join Button */}
          <div className="flex justify-center pt-4">
            <Button 
              variant="secondary" 
              size="lg" 
              className="magical-card bg-green-600 hover:bg-green-700 text-white border-green-500"
              onClick={() => window.open('https://chat.whatsapp.com/DbNq17fZ6eg2PQkEsqX62O', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join WhatsApp Community
            </Button>
          </div>

          {/* Magical wand image */}
          <div className="mt-12 relative">
            <img
              src={magicalWand}
              alt="Magical Wand"
              className="mx-auto w-full max-w-2xl rounded-lg shadow-glow opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Scroll to discover</p>
      </div>
    </section>
  );
};

export default HeroSection;