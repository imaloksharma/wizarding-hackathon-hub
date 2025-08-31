import { Card, CardContent } from '@/components/ui/card';
import tfugJalandhar from '@/assets/partners/tfug-jalandhar.jpg';
import commudle from '@/assets/partners/commudle.jpg';
import ngDelhi from '@/assets/partners/ng-delhi.jpg';
import uipath from '@/assets/partners/uipath.jpg';
import partner5 from '@/assets/partners/partner5.jpg';
import partner6 from '@/assets/partners/partner6.jpg';

const CommunityPartnersSection = () => {
  const partners = [
    {
      name: "TFUG Jalandhar",
      logo: tfugJalandhar,
      website: "#"
    },
    {
      name: "Commudle",
      logo: commudle,
      website: "#"
    },
    {
      name: "NG Delhi",
      logo: ngDelhi,
      website: "#"
    },
    {
      name: "UIPath",
      logo: uipath,
      website: "#"
    },
    {
      name: "Endless domains",
      logo: partner5,
      website: "#"
    },
    {
      name: "The Elites",
      logo: partner6,
      website: "#"
    }
  ];

  return (
    <section id="partners" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Community Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to collaborate with amazing communities and organizations 
            that share our vision for innovation and technological advancement.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-20 h-20 mx-auto object-contain group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartnersSection;