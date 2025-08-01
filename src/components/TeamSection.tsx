import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import member1 from '@/assets/team/member1.jpg';
import member2 from '@/assets/team/member2.jpg';
import member3 from '@/assets/team/member3.jpg';
import member4 from '@/assets/team/member4.jpg';
import member5 from '@/assets/team/member5.jpg';
import member6 from '@/assets/team/member6.jpg';
import member7 from '@/assets/team/member7.jpg';
import member8 from '@/assets/team/member8.jpg';
import member9 from '@/assets/team/member9.jpg';
import member10 from '@/assets/team/member10.jpg';
import vidhi from '@/assets/team/member1.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Vidhi",
      role: "Lead Organizer",
      bio: "Full-stack developer with 2+ years experience in AI and machine learning.",

      image: vidhi,
      social: {
        github: "#",
        linkedin: "#",
        email: "vidhiv671@gmail.com"
      }
    },
  {
      name: "Mehakdeep Kaur",
      role: "Marketing Lead",
      bio: "Veteran software engineer with deep expertise in healthcare technology systems.",
      image: member7,
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Jahanvi Rana",
      role: "Sponsership Lead",
      bio: "DevRel expert passionate about building inclusive tech communities and mentorship.",
      image: member3,
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Manpreet Singh",
      role: "Registration Lead",
      bio: "Data scientist and AI researcher with expertise in green technology solutions.",
      image: member4,
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Abhay Kaushal", 
      role: "All Events Management Lead",
      bio: "Security engineer and ethical hacker focused on protecting digital infrastructure.",
      image: member5,
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Arushi Sandhu",
      role: "Graphics Designer Lead",
      bio: "Design strategist creating intuitive user experiences for educational technologies.",
      image: member6,
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Aayushi Goel",
      role: "Graphics Designer",
      bio: "Cybersecurity & AI Learner | Hackathons, Open Source & Bug Bounty Explorer | Building in Public | Open to Collabs, Ideas & Real Conversations",
      image: member10,
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Arshdeep Singh",
      role: "Logistics Lead",
      bio: "Technology consultant specializing in blue economy and sustainable ocean tech.",
      image: member8,
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Kartik Mahajan",
      role: "Logistic",
      bio: "Cybersecurity consultant and blockchain developer focused on secure systems.",
      image: member9,
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
      {
      name: "Alok Kumar",
      role: "Core Team Member",
      bio: "Software architect specializing in scalable web applications and cloud computing.",
      image: member2,
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    
    
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Meet the Magical Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of tech innovators, industry experts, and community leaders 
            working together to create an extraordinary hackathon experience.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Member photo */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-magical group-hover:shadow-glow transition-all"
                  />
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Member info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-3 pt-2">
                  <a 
                    href={member.social.github} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <Card className="mt-16 bg-gradient-card border-border shadow-glow">
          <CardContent className="p-12 text-center space-y-6">
            <h3 className="text-3xl font-bold text-magical">
              Join Our Growing Community
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Want to be part of organizing future hackathons? We're always looking for passionate 
              individuals to join our team and help create amazing experiences for developers worldwide.
            </p>
            <div className="flex justify-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Volunteer Organizers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">25+</div>
                <div className="text-muted-foreground">Industry Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-muted-foreground">Expert Judges</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;