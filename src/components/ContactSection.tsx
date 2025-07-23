import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle, Users, Calendar, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Send us an Owl",
      description: "Get answers to all your magical questions",
      contact: "wizards@hackathon.magic",
      action: "Email Us",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: MessageCircle,
      title: "Join the Guild",
      description: "Connect with fellow coding wizards",
      contact: "Discord Server",
      action: "Join Now",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Crystal Ball Hotline",
      description: "Speak directly to our magical support team",
      contact: "+91 9876543210",
      action: "Call Us",
      color: "from-green-500 to-teal-500"
    }
  ];

  const organizers = [
    {
      name: "Hogwarts Academy of Technology",
      role: "Main Organizer",
      logo: "🏰",
      description: "Premier magical institution for technological education"
    },
    {
      name: "Ministry of Magic Tech",
      role: "Technology Partner",
      logo: "⚡",
      description: "Leading magical technology solutions provider"
    },
    {
      name: "Wizarding World Ventures",
      role: "Sponsor",
      logo: "🧙‍♂️",
      description: "Investment partners for magical startups"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Summon Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need help with your magical journey? Our team of expert wizards is ready to assist you 
            with any questions about the hackathon, challenges, or registration process.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} p-4 shadow-magical group-hover:shadow-glow transition-all`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  {method.description}
                </p>
                <div className="font-semibold text-foreground">
                  {method.contact}
                </div>
                <Button variant="outline" className="w-full group-hover:shadow-magical transition-all">
                  {method.action}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6 text-center space-y-4">
              <Calendar className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-bold text-foreground">Event Dates</h3>
              <p className="text-muted-foreground">
                March 15-17, 2024<br />
                72 Hours of Magic
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6 text-center space-y-4">
              <MapPin className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-bold text-foreground">Location</h3>
              <p className="text-muted-foreground">
                Hogwarts Academy<br />
                Great Hall, Platform 9¾
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6 text-center space-y-4">
              <Users className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-bold text-foreground">Team Size</h3>
              <p className="text-muted-foreground">
                3-5 Wizards per Team<br />
                Solo participants welcome
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Organizers section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-magical mb-4">
              Organized by Magical Partners
            </h3>
            <p className="text-lg text-muted-foreground">
              Brought to you by the most prestigious magical institutions and organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-6xl mb-4">{organizer.logo}</div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {organizer.name}
                  </h4>
                  <div className="text-sm font-medium text-primary">
                    {organizer.role}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {organizer.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <Card className="mt-16 bg-gradient-card border-border shadow-glow">
          <CardContent className="p-12 text-center space-y-6">
            <h3 className="text-4xl font-bold text-magical">
              Ready to Begin Your Magical Journey?
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't miss this opportunity to showcase your coding magic, win legendary prizes, 
              and connect with the most talented developers in the wizarding world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button variant="hero" size="xl" className="animate-magical-pulse">
                Register Your Team Now
              </Button>
              <Button variant="outline" size="lg">
                Download Information Pack
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;