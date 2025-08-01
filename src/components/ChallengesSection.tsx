import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flame, Fish, Trophy, Clock, Users, Star, Lightbulb } from 'lucide-react';
import dragonChallenge from '@/assets/dragon-challenge.jpg';
import mermaidChallenge from '@/assets/mermaid-challenge.jpg';
import finalChallenge from '@/assets/final-challenge.jpg';

const ChallengesSection = () => {
  const challenges = [
    {
      id: 1,
      title: "AI for Green Economy",
      subtitle: "Track 1",
      description: "Develop AI-powered solutions that promote sustainability and environmental conservation. Create technologies that help reduce carbon footprint and support green initiatives.",
      image: dragonChallenge,
      icon: Flame,
      difficulty: "Intermediate",
      duration: "24 Hours",
      teams: "All Teams",
      prize: "Special Recognition",
      skills: ["AI/ML", "Environmental Tech", "Data Analysis", "Sustainability"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "AI for Blue Economy",
      subtitle: "Track 2", 
      description: "Build AI solutions focused on marine and ocean technology. Develop systems that help protect our oceans while creating sustainable economic opportunities.",
      image: mermaidChallenge,
      icon: Fish,
      difficulty: "Advanced",
      duration: "24 Hours",
      teams: "All Teams",
      prize: "Special Recognition",
      skills: ["AI/ML", "Ocean Tech", "Marine Data", "Sustainability"],
      color: "from-blue-500 to-teal-500"
    },
    {
      id: 3,
      title: "Cyber Security",
      subtitle: "Track 3",
      description: "Create innovative cybersecurity solutions to protect digital infrastructure. Develop tools and systems that enhance security and privacy in our connected world.",
      image: finalChallenge,
      icon: Trophy,
      difficulty: "Expert",
      duration: "24 Hours",
      teams: "All Teams",
      prize: "Special Recognition",
      skills: ["Security", "Encryption", "Network Protection", "Privacy"],
      color: "from-red-500 to-orange-500"
    },
    {
      id: 4,
      title: "Smart Education System",
      subtitle: "Track 4",
      description: "Design intelligent educational platforms that enhance learning experiences. Build AI-powered tools that make education more accessible and effective.",
      image: dragonChallenge,
      icon: Star,
      difficulty: "Intermediate",
      duration: "24 Hours",
      teams: "All Teams",
      prize: "Special Recognition",
      skills: ["EdTech", "AI/ML", "UX/UI", "Learning Analytics"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      title: "AI Smart Healthcare",
      subtitle: "Track 5",
      description: "Develop AI-driven healthcare solutions that improve patient care and medical processes. Create systems that make healthcare more efficient and accessible.",
      image: mermaidChallenge,
      icon: Users,
      difficulty: "Advanced",
      duration: "24 Hours",
      teams: "All Teams",
      prize: "Special Recognition",
      skills: ["HealthTech", "AI/ML", "Medical Data", "Patient Care"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      title: "Open Innovation",
      subtitle: "Track 6",
      description: "Unlimited creativity track where teams can develop innovative solutions in any domain. Push boundaries and create disruptive technologies without restrictions.",
      image: finalChallenge,
      icon: Lightbulb,
      difficulty: "Open",
      duration: "24 Hours",
      teams: "All Teams",
      prize: "Special Recognition",
      skills: ["Innovation", "Cross-domain", "Creative Thinking", "Any Tech"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="challenges" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Six Innovation Tracks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your track and develop cutting-edge solutions that address real-world challenges. 
            Each track focuses on different aspects of technology and innovation.
          </p>
        </div>

        {/* Challenge cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <Card 
              key={challenge.id} 
              className="group relative overflow-hidden bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              {/* Challenge image */}
              <div className="relative h-24 overflow-hidden">
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
                    Track {challenge.id}
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
            <div className="text-4xl font-bold text-magical">6</div>
            <div className="text-muted-foreground">Innovation Tracks</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-magical">24</div>
            <div className="text-muted-foreground">Hours of Innovation</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-magical">₹50K+</div>
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