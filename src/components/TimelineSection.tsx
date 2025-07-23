import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, CheckCircle } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "March 10",
      time: "11:59 PM",
      title: "Registration Closes",
      description: "Last chance to register your team and secure your spot in the magical tournament.",
      status: "upcoming",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      date: "March 15",
      time: "9:00 AM",
      title: "Opening Ceremony",
      description: "Welcome to Hogwarts! Meet your fellow wizards, get your magical supplies, and receive the first challenge.",
      status: "upcoming",
      icon: MapPin,
      color: "bg-purple-500"
    },
    {
      date: "March 15",
      time: "10:00 AM",
      title: "Dragon's Challenge Begins",
      description: "Face the Hungarian Horntail! 24 hours to build a scalable web application that breathes fire.",
      status: "upcoming",
      icon: Clock,
      color: "bg-red-500"
    },
    {
      date: "March 16",
      time: "10:00 AM",
      title: "Mermaid's Task Begins",
      description: "Dive into the Black Lake of algorithms. Top 50% teams advance to tackle data challenges.",
      status: "upcoming",
      icon: Clock,
      color: "bg-blue-500"
    },
    {
      date: "March 17",
      time: "4:00 AM",
      title: "Final Task Begins",
      description: "The Triwizard Cup awaits! Present your magical creation to expert judges.",
      status: "upcoming",
      icon: Clock,
      color: "bg-yellow-500"
    },
    {
      date: "March 17",
      time: "6:00 PM",
      title: "Awards Ceremony",
      description: "Celebrate the champions! Prize distribution and networking with industry leaders.",
      status: "upcoming",
      icon: CheckCircle,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Magical Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow the path to glory through our carefully crafted magical journey. 
            Each moment is designed to challenge and inspire your coding wizardry.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-magical z-10"></div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {event.date}
                        </Badge>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <CardTitle className="flex items-center space-x-3 text-xl group-hover:text-primary transition-colors">
                        <div className={`p-2 rounded-lg ${event.color} shadow-magical`}>
                          <event.icon className="w-5 h-5 text-white" />
                        </div>
                        <span>{event.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Date display for mobile */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Important notes */}
        <Card className="mt-16 bg-gradient-card border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-magical mb-6 text-center">
              Important Information
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Calendar className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Duration</h4>
                <p className="text-sm text-muted-foreground">
                  24 hours of intensive magical coding across 2 days
                </p>
              </div>
              <div className="space-y-2">
                <MapPin className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Venue</h4>
                <p className="text-sm text-muted-foreground">
                  Khalsa College of Engineering and Technology, Amritsar
                </p>
              </div>
              <div className="space-y-2">
                <Users className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Team Size</h4>
                <p className="text-sm text-muted-foreground">
                  3-5 wizards per team (solo participants welcome)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TimelineSection;