import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import arpanGarg from '@/assets/speakers/arpan-garg.jpg';
import priyanshiRai from '@/assets/speakers/priyanshi-rai.jpg';
import judge1 from '@/assets/speakers/judge1.jpg';
import judge2 from '@/assets/speakers/judge2.jpg';
import judge3 from '@/assets/speakers/judge3.jpg';
import judge4 from '@/assets/speakers/judge4.jpg';
import loveleen from '@/assets/speakers/loveleen.jpg';

const SpeakersJudgesSection = () => {
  const speakers = [
    {
      name: "Arpan Garg",
      title: "Founder and Google Developer Groups NEW Delhi Organizer",
      organization: "Commudle",
      image: arpanGarg,
      type: "Speaker & Judge",
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
      name: "Ayush Kumar",
      title: "Lead DevRel Engineer ",
      organization: "NodeShift",
      image: judge2,
      type: "Judge",
      bio: "Ayush Kumar is a Developer Advocate. He is an Open Source Enthusiast, Full Stack Developer, Community Manager, DevRel Engineer, AWS Community Builder, and GitHub Campus Expert",
      social: {
        linkedin: "https://www.linkedin.com/in/ayush-kumar-984443191/",
        twitter: "#",
        email: "#"
      }
    },
      {
      name: "Loveleen Kaur",
      title: " Senior Android Engineer ",
      organization: " Probo",
      image: loveleen,
      type: "Judge",
      bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy girl loves mountains and works wonders with technology. She is working as Senior Engineer with 7 years of experience.",
      social: {
        linkedin: "https://www.linkedin.com/in/loveleen-kaur/",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Sheshank Srivastava",
      title: " Software Engineer ",
      organization: "Samsung",
      image: judge3,
      type: "Judge & Speaker",
      bio: "Sheshank Srivastava is a Software Engineer at Samsung with 5 years of experience in building scalable web applications and cloud solutions. He is passionate about technology and innovation.",
      social: {
        linkedin: "https://www.linkedin.com/in/andi-sheshank/overlay/about-this-profile/",
        twitter: "#",
        email: "sheshank281198@gmail.com"
      }
    },
    
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