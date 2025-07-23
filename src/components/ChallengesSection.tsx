import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flame, Fish, Trophy, Clock, Users, Star } from 'lucide-react';
import dragonChallenge from '@/assets/dragon-challenge.jpg';
import mermaidChallenge from '@/assets/mermaid-challenge.jpg';
import finalChallenge from '@/assets/final-challenge.jpg';

const ChallengesSection = () => {
  const challenges = [
    {
      id: 1,
      title: "The Dragon's Challenge",
      subtitle: "First Task",
      description: "Face the Hungarian Horntail of coding! Build a scalable web application that can handle massive traffic while maintaining performance. Your code must be as resilient as dragon scales.",
      image: dragonChallenge,
      icon: Flame,
      difficulty: "Intermediate",
      duration: "24 Hours",
      teams: "All Teams",
      prize: "₹15,000",
      skills: ["Frontend", "Backend", "Database", "API Design"],
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "The Mermaid's Task",
      subtitle: "Second Task",
      description: "Dive deep into the Black Lake of algorithms! Solve complex data challenges and create intelligent solutions that process information as gracefully as mermaids swim.",
      image: mermaidChallenge,
      icon: Fish,
      difficulty: "Advanced",
      duration: "18 Hours",
      teams: "Top 50%",
      prize: "₹20,000",
      skills: ["AI/ML", "Data Science", "Algorithms", "Analytics"],
      color: "from-blue-500 to-teal-500"
    },
    {
      id: 3,
      title: "The Triwizard Cup",
      subtitle: "Final Task",
      description: "The ultimate test awaits! Present your magical creation to the panel of expert judges. Only the most innovative and complete solutions will claim the Triwizard Cup.",
      image: finalChallenge,
      icon: Trophy,
      difficulty: "Expert",
      duration: "12 Hours",
      teams: "Top 20%",
      prize: "₹50,000",
      skills: ["Innovation", "Presentation", "UX/UI", "Impact"],
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="challenges" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Three Trials of Mastery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate through three increasingly challenging rounds, each designed to test different aspects 
            of your magical coding abilities and innovative thinking.
          </p>
        </div>

        {/* Challenge cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <Card 
              key={challenge.id} 
              className="group relative overflow-hidden bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              {/* Challenge image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${challenge.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Challenge icon */}
                <div className="absolute top-4 left-4">
                  <div className="bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-magical">
                    <challenge.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Challenge number */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Task {challenge.id}
                  </Badge>
                </div>
              </div>

              <CardHeader className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">{challenge.subtitle}</p>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {challenge.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {challenge.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Challenge stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{challenge.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{challenge.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{challenge.teams}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary">{challenge.prize}</span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {challenge.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:shadow-magical transition-all"
                >
                  Learn More About This Challenge
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-magical">3</div>
            <div className="text-muted-foreground">Magical Challenges</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-magical">48</div>
            <div className="text-muted-foreground">Hours of Magic</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-magical">₹85K+</div>
            <div className="text-muted-foreground">Total Prize Pool</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-magical">∞</div>
            <div className="text-muted-foreground">Opportunities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;