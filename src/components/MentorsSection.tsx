import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Twitter, Github } from 'lucide-react';
import mentor1 from '@/assets/mentors/mentor1.jpg';
import mentor2 from '@/assets/mentors/mentor2.jpg';
import mentor3 from '@/assets/mentors/mentor3.jpg';
import mentor4 from '@/assets/mentors/mentor4.jpg';
import mentor5 from '@/assets/mentors/mentor5.jpg';
import mentor6 from '@/assets/mentors/mentor6.jpg';
import mentor7 from '@/assets/mentors/mentor7.jpg';
import mentor8 from '@/assets/mentors/mentor8.jpg';
import mentor9 from '@/assets/mentors/mentor9.jpg';
import mentor10 from '@/assets/mentors/mentor10.jpg';
import mentor11 from '@/assets/mentors/mentor11.jpg';
import mentor12 from '@/assets/mentors/mentor12.jpg';
import Pra from '@/assets/mentors/Pra.jpg';
import Rohan from '@/assets/mentors/Rohan.jpeg';
import nikhil from '@/assets/mentors/nikhil.jpg';
import v from '@/assets/mentors/v.jpeg';
import sonu from '@/assets/mentors/sonu.jpeg';
import Bhavya from '@/assets/mentors/Bhavya.jpg';
import sargam from '@/assets/mentors/sargam.jpg';
import sarika from '@/assets/mentors/sarika.jpg';
import Akansha from '@/assets/mentors/Akansha.jpeg';
import Anurag from '@/assets/mentors/Anurag.jpeg';



const MentorsSection = () => {
  const mentors = [
    {
      name: "Sarika Purohit",
      title: "Specialist Programmer",
      company: " @Infosys",
      expertise: "Full Stack Development",
      image: sarika,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Prayesi Agarwal",
      title: "Academic Trainee",
      company: "KPMG",
      expertise: "Machine Learning",
      image: Pra,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Akanksha Mishra ",
      title: "— Senior SDET ",
      company: "@StarHealth",
      expertise: "Information Security",
      image: Akansha,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Sargam Tiwari — ",
      title: "Design Engineer",
      company: "Freelance",
      expertise: "Web3 & DeFi",
      image: sargam,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Rohan Goyal ",
      title: "Software Engineer ",
      company: "@Delhivery",
      expertise: "React Native",
      image: Rohan,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Anurag Mishra ",
      title: "Software Engineer ",
      company: "@PayU",
      expertise: "Data Analytics",
      image: Anurag,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Vikram Joshi",
      title: "Cloud Architect",
      company: "AWS",
      expertise: "Cloud Infrastructure",
      image: mentor7,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Meera Reddy",
      title: "DevOps Engineer",
      company: "Docker",
      expertise: "CI/CD & Deployment",
      image: mentor8,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Nikhil Shukla",
      title: " Builder ",
      company: "@HelpingGeeks",
      expertise: "Game Development",
      image: nikhil,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Sonu Kumar",
      title: "Cyber Security Expert",
      company: "Govt. of India",
      expertise: "Product Strategy",
      image: sonu,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Karan V",
      title: "Full Stack Developer ",
      company: "@Deployd.io",
      expertise: "Design Systems",
      image: v,
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Bhavya Vats ",
      title: "Team Lead ",
      company: "@U&I Trust",
      expertise: "Natural Language Processing",
      image: Bhavya,
      social: { linkedin: "#", twitter: "#", github: "#" }
    }
  ];

  return (
    <section id="mentors" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
            🧙‍♂️ Expert Guidance
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Meet Your Mentors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts who will guide you through your coding journey. 
            Our mentors come from top tech companies and are ready to help you succeed.
          </p>
        </div>

        {/* Mentors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden relative"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Rotating border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              
              <CardContent className="p-0 relative">
                {/* Image section with overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  {/* Magical overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating expertise badge */}
                  <div className="absolute top-3 right-3 transform group-hover:scale-110 transition-transform duration-300">
                    <Badge 
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-sm border border-primary/20"
                    >
                      {mentor.expertise}
                    </Badge>
                  </div>
                  
                  {/* Magic sparkles on hover */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-primary animate-pulse">✨</div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="text-secondary animate-pulse">⭐</div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {mentor.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {mentor.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {mentor.company}
                    </p>
                  </div>

                  {/* Social links with hover animations */}
                  <div className="flex space-x-3 pt-2">
                    <a 
                      href={mentor.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
                      aria-label={`${mentor.name} LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a 
                      href={mentor.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-rotate-12"
                      aria-label={`${mentor.name} Twitter`}
                    >
                      <Twitter size={16} />
                    </a>
                    <a 
                      href={mentor.social.github}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
                      aria-label={`${mentor.name} GitHub`}
                    >
                      <Github size={16} />
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

export default MentorsSection;