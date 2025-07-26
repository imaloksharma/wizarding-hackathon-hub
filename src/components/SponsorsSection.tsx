import hackWithIndia from '@/assets/sponsors/hack-with-india.jpg';
import kcetAmritsar from '@/assets/sponsors/kcet-amritsar.jpg';
import hacksparkLogo from '@/assets/sponsors/hackspark-logo.jpg';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Hack with India",
      logo: hackWithIndia,
      website: "#"
    },
    {
      name: "Khalsa College of Engineering and Technology Amritsar",
      logo: kcetAmritsar,
      website: "#"
    },
    {
      name: "HackSpark",
      logo: hacksparkLogo,
      website: "#"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-magical mb-4">
            Powered By
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In collaboration with leading organizations driving innovation in technology and education.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="flex justify-center items-center space-x-8 md:space-x-16">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="group transition-all duration-500 hover:scale-110"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 md:h-20 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;