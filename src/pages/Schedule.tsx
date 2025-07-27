import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Schedule = () => {
  const day1Schedule = [
    { time: "09:00 AM", event: "Registration & Welcome Breakfast", icon: "🧙‍♂️", description: "Magical check-in and sorting into houses" },
    { time: "10:00 AM", event: "Opening Ceremony", icon: "⚡", description: "Welcome to Hogwarts... err, HackSpark!" },
    { time: "11:00 AM", event: "Team Formation & Networking", icon: "🤝", description: "Find your coding companions" },
    { time: "12:00 PM", event: "Problem Statement Release", icon: "📜", description: "The three legendary challenges revealed" },
    { time: "01:00 PM", event: "Magical Lunch Break", icon: "🍽️", description: "Feast in the Great Hall" },
    { time: "02:00 PM", event: "Coding Begins - Dragon Challenge", icon: "🐉", description: "Face the fiercest coding beast" },
    { time: "04:00 PM", event: "Mentor Sessions & Tea Break", icon: "☕", description: "Guidance from coding professors" },
    { time: "06:00 PM", event: "Mermaid Challenge Begins", icon: "🧜‍♀️", description: "Dive into algorithmic depths" },
    { time: "08:00 PM", event: "Dinner & Networking", icon: "🌙", description: "Evening feast and collaboration" },
    { time: "10:00 PM", event: "Midnight Coding Session", icon: "🌟", description: "When the real magic happens" }
  ];

  const day2Schedule = [
    { time: "08:00 AM", event: "Breakfast & Morning Briefing", icon: "🌅", description: "Fuel up for the final stretch" },
    { time: "09:00 AM", event: "Final Challenge Release", icon: "🏆", description: "The ultimate test of wizardry" },
    { time: "12:00 PM", event: "Code Freeze & Submission", icon: "⏰", description: "Time's up! Submit your magical creation" },
    { time: "01:00 PM", event: "Lunch Break", icon: "🍽️", description: "Relax before presentations" },
    { time: "02:00 PM", event: "Project Presentations", icon: "🎭", description: "Show off your magical solutions" },
    { time: "04:00 PM", event: "Judging & Deliberation", icon: "⚖️", description: "Wizards evaluate the submissions" },
    { time: "05:00 PM", event: "Awards Ceremony", icon: "🏅", description: "Crowning the coding champions" },
    { time: "06:00 PM", event: "Closing Ceremony", icon: "✨", description: "Farewell until next year's magic" },
    { time: "07:00 PM", event: "Networking & Farewell", icon: "🤗", description: "Keep the magical connections alive" }
  ];

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
              <Calendar className="w-5 h-5 mr-2" />
              Event Schedule
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-magical">
              Magical Timeline ⏰
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your complete guide through the 48-hour wizarding tournament
            </p>
          </div>
        </div>

        {/* Event Info */}
        <Card className="mb-12 bg-gradient-card border-border/50 shadow-magical">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-foreground">September 26-27, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">KCET Amritsar</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground">48 Hours of Magic</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Day 1 Schedule */}
        <Card className="mb-8 bg-gradient-card border-border/50 shadow-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-magical flex items-center space-x-2">
              <Sparkles className="w-6 h-6" />
              <span>Day 1 - September 26, 2025</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {day1Schedule.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-background/20 hover:bg-background/30 transition-colors">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-1">
                      <Badge variant="outline" className="font-mono">{item.time}</Badge>
                      <h3 className="text-lg font-semibold text-foreground">{item.event}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Day 2 Schedule */}
        <Card className="mb-12 bg-gradient-card border-border/50 shadow-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-magical flex items-center space-x-2">
              <Zap className="w-6 h-6" />
              <span>Day 2 - September 27, 2025</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {day2Schedule.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-background/20 hover:bg-background/30 transition-colors">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-1">
                      <Badge variant="outline" className="font-mono">{item.time}</Badge>
                      <h3 className="text-lg font-semibold text-foreground">{item.event}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-8 bg-gradient-card border-border/50 shadow-magical">
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Important Notes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-accent">⚡</span>
                <span>All participants must be present during registration and opening ceremony</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">🧙‍♂️</span>
                <span>Mentoring sessions are available throughout the event - don't hesitate to ask for help!</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">🍽️</span>
                <span>All meals and refreshments are included in the registration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">💻</span>
                <span>Bring your own laptop and chargers - power outlets will be available</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">🏆</span>
                <span>Final submissions must be completed by 12:00 PM on Day 2</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-magical text-background font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            🪄 Ready to Join the Magic?
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Register now and be part of the most magical coding tournament of 2025!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;