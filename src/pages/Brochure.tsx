import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, Calendar, MapPin, Users, Trophy, Zap, Scroll, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Brochure = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Starry background */}
      <div className="starry-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-6 py-2 text-lg font-medium bg-card/60 backdrop-blur-sm">
              <Scroll className="w-5 h-5 mr-2" />
              Official Event Brochure
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-magical">
              HackSpark 2025 ⚡
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Ultimate Wizarding Code Tournament - Where Magic Meets Innovation
            </p>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Date</h3>
              <p className="text-muted-foreground">Sept 26-27, 2025</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Venue</h3>
              <p className="text-muted-foreground">KCET Amritsar</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Team Size</h3>
              <p className="text-muted-foreground">3-5 Wizards</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Prize Pool</h3>
              <p className="text-muted-foreground">₹100,000</p>
            </CardContent>
          </Card>
        </div>

        {/* Event Overview */}
        <Card className="mb-12 bg-gradient-card border-border/50 shadow-magical">
          <CardHeader>
            <CardTitle className="text-2xl text-magical flex items-center space-x-2">
              <Sparkles className="w-6 h-6" />
              <span>About the Tournament</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              HackSpark 2025 is not just another hackathon—it's a magical journey where developers transform into coding wizards, 
              wielding the power of technology to create innovative solutions. Set in the mystical atmosphere of Khalsa College 
              of Engineering and Technology, participants will embark on three legendary challenges that test their skills, 
              creativity, and magical coding abilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>What Makes It Magical?</span>
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">⚡</span>
                    <span>Harry Potter themed challenges and atmosphere</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">🏆</span>
                    <span>Competitive prize pool of ₹100,000</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">🧙‍♂️</span>
                    <span>Expert mentors as your coding professors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">🔮</span>
                    <span>Innovative problem statements from industry</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
                  <Trophy className="w-5 h-5" />
                  <span>Three Legendary Challenges</span>
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">🐉</span>
                    <span><strong>Dragon Challenge:</strong> Conquer the fiercest coding beast</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">🧜‍♀️</span>
                    <span><strong>Mermaid Challenge:</strong> Dive deep into algorithmic waters</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">🏆</span>
                    <span><strong>Final Challenge:</strong> The ultimate test of wizardry</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Brochure */}
        <div className="text-center">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-magical text-background font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Complete Brochure PDF
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Get the detailed brochure with complete event information, eligibility criteria, and registration details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brochure;