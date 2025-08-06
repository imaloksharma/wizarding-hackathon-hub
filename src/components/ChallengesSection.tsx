import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flame, Fish, Trophy, Clock, Users, Star, Lightbulb, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import aiGreenEconomyImg from '@/assets/tracks/ai-green-economy.jpg';
import aiBlueEconomyImg from '@/assets/tracks/ai-blue-economy.jpg';
import cyberSecurityImg from '@/assets/tracks/cyber-security.jpg';
import smartEducationImg from '@/assets/tracks/smart-education.jpg';
import aiHealthcareImg from '@/assets/tracks/ai-healthcare.jpg';
import openInnovationImg from '@/assets/tracks/open-innovation.jpg';

const ChallengesSection = () => {
  const challenges = [
    {
      id: 1,
      title: "AI for Green Economy",
      subtitle: "Track 1",
      description: "Develop AI-powered solutions that promote sustainability and environmental conservation. Create technologies that help reduce carbon footprint and support green initiatives.",
      image: aiGreenEconomyImg,
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
      image: aiBlueEconomyImg,
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
      image: cyberSecurityImg,
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
      image: smartEducationImg,
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
      image: aiHealthcareImg,
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
      image: openInnovationImg,
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

        {/* Challenge accordion */}
        <Accordion type="single" collapsible className="w-full mb-16">
          {challenges.map((challenge, index) => (
            <AccordionItem key={challenge.id} value={`track-${challenge.id}`} className="border rounded-lg mb-4 overflow-hidden bg-gradient-card">
              <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                <div className="flex items-center space-x-4 w-full">
                  {/* Track image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${challenge.color} opacity-20`}></div>
                    <div className="absolute top-2 right-2">
                      <challenge.icon className="w-4 h-4 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Track info */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                        Track {challenge.id}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{challenge.difficulty}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Enhanced image */}
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${challenge.color} opacity-20`}></div>
                  </div>

                  {/* Detailed info */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge Details</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>

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
                      <h4 className="font-semibold text-foreground mb-2">Required Skills</h4>
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
                      variant="default" 
                      className="w-full shadow-magical"
                    >
                      Learn More About This Challenge
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

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