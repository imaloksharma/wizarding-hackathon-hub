import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Calendar } from 'lucide-react';
import drAjaySharma from '@/assets/chief-guest/dr-ajay-sharma.jpg';

const ChiefGuestSection = () => {
  return (
    <section id="chief-guest" className="py-24 relative overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-3 text-base font-medium bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30">
            🎖️ Distinguished Honor
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-magical mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Our Chief Guest
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are honored to have a distinguished leader grace our event
          </p>
        </div>

        {/* Chief Guest Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="group bg-gradient-to-br from-background/90 via-background/95 to-background/90 border-2 border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            
            {/* Floating elements */}
            <div className="absolute top-8 right-8 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
              <Star className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
              <Award className="w-6 h-6 text-secondary animate-pulse" />
            </div>
            
            <CardContent className="p-0 relative">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image section */}
                <div className="relative overflow-hidden group">
                  <img
                    src={drAjaySharma}
                    alt="Dr Ajay Sharma - Director NIT Delhi"
                    className="w-full h-96 md:h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                  
                  {/* Prestigious badge */}
                  <div className="absolute bottom-6 left-6">
                    <Badge 
                      variant="secondary"
                      className="bg-background/90 backdrop-blur-sm border border-primary/30 px-4 py-2 text-sm font-semibold"
                    >
                      🏛️ Chief Guest
                    </Badge>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                  {/* Title and name */}
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      Dr. Ajay Sharma
                    </h3>
                    <div className="space-y-2">
                      <p className="text-xl font-semibold text-primary">
                        Director
                      </p>
                      <p className="text-lg text-muted-foreground">
                        National Institute of Technology (NIT) Delhi
                      </p>
                    </div>
                  </div>

                  {/* Distinguished achievements */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm">Distinguished Academic Leader</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Star className="w-5 h-5 text-secondary" />
                      <span className="text-sm">Research Excellence in Engineering</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm">Decades of Educational Leadership</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      A visionary leader in engineering education and research, Dr. Ajay Sharma brings 
                      extensive experience in fostering innovation and academic excellence. His leadership 
                      at NIT Delhi has been instrumental in shaping the next generation of technologists.
                    </p>
                    <p className="text-sm text-primary font-semibold italic">
                      "Inspiring innovation through education and research excellence"
                    </p>
                  </div>

                  {/* Prestigious highlight */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
                    <p className="text-center text-foreground font-semibold">
                      🎯 We are privileged to have Dr. Sharma inaugurate HackSpark 2025
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuestSection;