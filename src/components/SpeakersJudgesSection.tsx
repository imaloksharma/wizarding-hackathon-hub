import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import arpanGarg from '@/assets/speakers/arpan-garg.jpg';
import priyanshiRai from '@/assets/speakers/priyanshi-rai.jpg';
import judge1 from '@/assets/speakers/judge1.jpg';
import judge2 from '@/assets/speakers/judge2.jpg';
import judge3 from '@/assets/speakers/judge3.jpg';
import judge4 from '@/assets/speakers/judge4.jpg';

const SpeakersJudgesSection = () => {
  const speakers = [
    {
      name: "Arpan Garg",
      title: "Founder",
      organization: "Commudle",
      image: arpanGarg,
      type: "Speaker",
      bio: "Visionary founder building the future of community-driven tech education and collaboration.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Priyanshi Rai",
      title: "GitHub Campus Expert",
      organization: "GitHub",
      image: priyanshiRai,
      type: "Speaker",
      bio: "Passionate developer advocate and open source enthusiast at GitHub.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Pranav Kumar",
      title: "Associate Staff Engineer",
      organization: "Nagarro",
      image: judge1,
      type: "Judge",
      bio: "Innovative IT professional with a proven track record of over 8 years in the industry, fueling business success through cutting-edge solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Priya Sharma",
      title: "Startup Ecosystem Judge",
      organization: "Sequoia Capital",
      image: judge2,
      type: "Judge",
      bio: "Investment director focusing on early-stage tech startups and innovation.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Arjun Patel",
      title: "Industry Expert Judge",
      organization: "Microsoft India",
      image: judge3,
      type: "Judge",
      bio: "Principal architect leading cloud solutions and enterprise innovation.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Kavya Menon",
      title: "Product Innovation Judge",
      organization: "Google",
      image: judge4,
      type: "Judge",
      bio: "Senior product manager driving developer tools and platform innovation.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    }
  ];

  return (
    <section id="speakers-judges" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Speakers & Final Judges
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the industry experts, innovators, and thought leaders who will guide, 
            evaluate, and inspire our magical coding journey.
          </p>
        </div>

        {/* Speakers & Judges grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((person, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image section */}
                <div className="relative overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={person.type === 'Speaker' ? 'default' : 'secondary'}
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {person.type}
                    </Badge>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-primary font-semibold">
                      {person.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {person.organization}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {person.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex space-x-3 pt-2">
                    <a 
                      href={person.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${person.name} LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={person.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${person.name} Twitter`}
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href={person.social.email}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Contact ${person.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersJudgesSection;