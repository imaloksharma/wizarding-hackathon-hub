import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Calendar,
  Sparkles,
  Heart,
  ExternalLink
} from 'lucide-react';

const MagicalFooter = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  const quickLinks = [
    { name: "HackSpark 2025 Problem Statements", href: "https://docs.google.com/document/d/1RlPwPsrsJ-2ouulQbwoenKxHPTnpJRrvqvLNdSpzMEo/edit?usp=sharing" },
    { name: "Challenges", href: "#challenge" },
    { name: "Prizes", href: "#prizes" },
    { name: "Timeline", href: "#timeline" },
    { name: "Rules", href: "#rules" },
    { name: "Contact", href: "#contact" }
  ];

  const resources = [
    { name: "Registration Guide", href: "#" },
    { name: "Team Formation", href: "#" },
    { name: "Code of Conduct", href: "https://docs.google.com/document/d/1ta58gaozQHkNnPkAjWz6ZH-k2653KAO4fpJyA1aq3sY/edit?usp=sharing" },
    { name: "FAQs", href: "#" },
    { name: "Past Winners", href: "#" },
    { name: "Media Kit", href: "#" }
  ];

  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo and description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <Sparkles className="text-primary w-10 h-10 animate-float" />
                <div className="text-3xl font-bold text-magical">
                  HackSpark
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Where magic meets innovation. Join the ultimate coding tournament where developers 
                cast spells with code and compete for legendary prizes in three mystical challenges.
              </p>
              
              {/* Event info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Sepetember 26-27, 2025</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Hogwarts Academy of Technology</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hackspark2025@gmail.com</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/20 hover:text-primary transition-colors"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                    >
                      {resource.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Newsletter signup */}
              <div className="pt-4">
                <h4 className="font-semibold text-foreground mb-3">Stay Updated</h4>
                <Button variant="outline" className="w-full">
                  Subscribe to Updates
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 HackSpark.Designed & Developed By: Alok Kumar All rights reserved. Made with{" "}
              <Heart className="w-4 h-4 inline text-red-500 animate-pulse" />{" "}
              and magic.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="https://docs.google.com/document/d/1ta58gaozQHkNnPkAjWz6ZH-k2653KAO4fpJyA1aq3sY/edit?usp=sharing" className="text-muted-foreground hover:text-primary transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Magical sparkles effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping"></div>
      </div>
    </footer>
  );
};

export default MagicalFooter;