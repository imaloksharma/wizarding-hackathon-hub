import { Card, CardContent } from '@/components/ui/card';
import github from '@/assets/sponsors/github.jpg';
import endlessDomain from '@/assets/sponsors/endless-domain.jpg';
import hackWithIndia from '@/assets/sponsors/hack-with-india.jpg';
import kcetAmritsar from '@/assets/sponsors/kcet-amritsar.jpg';
import hacksparkLogo from '@/assets/sponsors/hackspark-logo.jpg';
import techcorp from '@/assets/sponsors/techcorp.jpg';
import innovatex from '@/assets/sponsors/innovatex.jpg';
import cloudsync from '@/assets/sponsors/cloudsync.jpg';
import dataflow from '@/assets/sponsors/dataflow.jpg';
import nextgen from '@/assets/sponsors/nextgen.jpg';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "GitHub",
      logo: github,
      website: "https://github.com"
    },
    {
      name: "Endless Domain",
      logo: endlessDomain,
      website: "#"
    },
    {
      name: "Hack with India",
      logo: hackWithIndia,
      website: "#"
    },
    {
      name: "KCET Amritsar",
      logo: kcetAmritsar,
      website: "#"
    },
    {
      name: "HackSpark",
      logo: hacksparkLogo,
      website: "#"
    },
    {
      name: "Prime",
      logo: techcorp,
      website: "#"
    },
    {
      name: "Future Finders",
      logo: innovatex,
      website: "#"
    },
  {
      name: "Geeks For Geeks",
      logo: cloudsync,
      website: "#"
    },


  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-magical mb-4">
            Sponsor By
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In collaboration with leading organizations driving innovation in technology and education.
          </p>
        </div>

        {/* Sponsors grid - 5x2 layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              className="group relative bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow cursor-pointer overflow-hidden"
            >
              {/* Magical background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Sparkle effect */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-100" />

              <CardContent className="p-6 text-center relative z-10">
                <div className="relative mb-3">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto object-contain group-hover:scale-110 transition-all duration-500 filter group-hover:brightness-110"
                  />

                  {/* Rotating border effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-30 group-hover:animate-spin transition-all duration-500" style={{ animationDuration: '3s' }} />
                </div>

                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-all duration-300">
                  {sponsor.name}
                </h3>

                {/* Magical underline */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-2 group-hover:w-full transition-all duration-500" />
              </CardContent>

              {/* Hover shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;