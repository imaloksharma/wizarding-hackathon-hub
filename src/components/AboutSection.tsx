import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Users, Award, Zap, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Innovation",
      description: "Push the boundaries of technology while embodying excellence in software development.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "Learn from industry leaders and get mentored by experts from top tech companies.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Form teams of 3-5 magical developers and tackle challenges together.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Compete for substantial prizes and recognition as a coding champion.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Fast-Paced",
      description: "Experience the thrill of rapid development and creative problem-solving.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Globe,
      title: "Network",
      description: "Connect with like-minded developers and build lasting professional relationships.",
      gradient: "from-yellow-500 to-green-500"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
                Where Magic Meets Code
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Enter a realm where innovation meets professional excellence, and every line of code 
                carries the power to transform industries and create magical digital experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-2 rounded-lg mt-1">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">What</h3>
                  <p className="text-muted-foreground">
                    A professional hackathon where developers, designers, and innovators unite to create 
                    extraordinary digital experiences through three challenging rounds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-2 rounded-lg mt-1">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Why</h3>
                  <p className="text-muted-foreground">
                    Push the boundaries of technology while embodying excellence in software development. 
                    Compete for substantial prizes and recognition as a coding champion.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-2 rounded-lg mt-1">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">How</h3>
                  <p className="text-muted-foreground">
                    Form teams of 3-5 professionals, tackle three progressive challenges, and showcase 
                    your solutions to our panel of industry expert judges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-r ${feature.gradient} p-3 shadow-magical group-hover:shadow-glow transition-all`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlight section */}
        <Card className="bg-gradient-card border-border shadow-glow">
          <CardContent className="p-12 text-center space-y-6">
            <h3 className="text-3xl font-bold text-magical mb-4">
              Join the Magical Coding Revolution
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              This isn't just another hackathon – it's a magical journey where your coding skills will be 
              tested against mythical challenges, where innovation meets fantasy, and where the most creative 
              solutions will be rewarded with legendary prizes.
            </p>
            <div className="flex justify-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Participating Wizards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">72</div>
                <div className="text-muted-foreground">Hours of Magic</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">25+</div>
                <div className="text-muted-foreground">Expert Mentors</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;