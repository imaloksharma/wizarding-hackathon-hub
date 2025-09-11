import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import drManjuBala from '@/assets/faculty/dr-manju-bala.jpg';
import drAtulAgnihotri from '@/assets/faculty/dr-atul-agnihotri.jpg';
import drManeetKaur from '@/assets/faculty/dr-maneet-kaur.jpg';
import jasleen from '@/assets/faculty/jasleen.jpg';
import maneetkaur from '@/assets/faculty/maneetkaur.jpg';

const FacultyCoordinatorsSection = () => {
  const facultyMembers = [
    {
      name: "Dr. Manju Bala",
      position: "Director",
      institution: "khalsa college of engineering and technology Amritsar",
      image: drManjuBala,
      email: "director@kcet.ac.in",
      phone: "+91-XXX-XXX-XXXX"
    },
      
    {
      name: "Jasleen Kaur",
      position: "HoD of CSE Department",
      institution: "khalsa college of engineering and technology Amritsar",
      image: jasleen,
      email: "jasleen@kcet.ac.in",
      phone: "+91-XXX-XXX-XXXX"
    },
    
    {
      name: "Dr. Maneet Kaur",
      position: "Alumni Cell Head",
      institution: "khalsa college of engineering and technology Amritsar",
      image: maneetkaur,
      Linkedin: "https://www.linkedin.com/in/maneet-bohmrah-401b0b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      phone: "+91-XXX-XXX-XXXX"
    }
  
  ];

  return (
    <section id="faculty" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Faculty Coordinators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our esteemed faculty coordinators who guide and support 
            the HackSpark 2025 initiative with their expertise and leadership.
          </p>
        </div>

        {/* Faculty grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {facultyMembers.map((faculty, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Faculty photo */}
                <div className="relative">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover shadow-magical group-hover:shadow-glow transition-all"
                  />
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Faculty info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {faculty.name}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-primary font-semibold">
                      {faculty.position}
                    </p>
                    <p className="text-muted-foreground">
                      {faculty.institution}
                    </p>
                  </div>
                </div>

                {/* Contact info */}
                <div className="flex justify-center space-x-4 pt-4">
                  <a 
                    href={`mailto:${faculty.email}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email ${faculty.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href={`tel:${faculty.phone}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Call ${faculty.name}`}
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyCoordinatorsSection;