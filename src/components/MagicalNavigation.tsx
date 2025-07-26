import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import kcetLogo from '@/assets/header-logos/kcet-logo.png';
import hackWithIndiaLogo from '@/assets/header-logos/hack-with-india-logo.png';
import hacksparkHeaderLogo from '@/assets/header-logos/hackspark-header-logo.png';

const MagicalNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Challenges', href: '#challenges' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-card-magical">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Sparkles className="text-primary w-8 h-8 animate-float" />
              <span className="text-2xl font-bold text-magical">
                HackSpark
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="magical" size="sm" className="animate-magical-pulse">
                Register Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}>
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="magical" size="sm" className="w-fit">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Logos Section */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-background/95 via-card/95 to-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-8 md:space-x-16">
            <div className="group flex items-center space-x-2">
              <img
                src={kcetLogo}
                alt="Khalsa College of Engineering and Technology"
                className="h-10 w-10 object-contain group-hover:scale-110 transition-all duration-300"
              />
              <span className="hidden md:block text-xs text-muted-foreground group-hover:text-primary transition-colors">
                KCET Amritsar
              </span>
            </div>
            
            <div className="h-8 w-px bg-border/50"></div>
            
            <div className="group flex items-center space-x-2">
              <img
                src={hackWithIndiaLogo}
                alt="Hack with India"
                className="h-10 w-10 object-contain group-hover:scale-110 transition-all duration-300"
              />
              <span className="hidden md:block text-xs text-muted-foreground group-hover:text-primary transition-colors">
                Hack with India
              </span>
            </div>
            
            <div className="h-8 w-px bg-border/50"></div>
            
            <div className="group flex items-center space-x-2">
              <img
                src={hacksparkHeaderLogo}
                alt="HackSpark"
                className="h-12 w-auto object-contain group-hover:scale-110 transition-all duration-300"
              />
              <span className="hidden md:block text-xs text-muted-foreground group-hover:text-primary transition-colors">
                Official Event
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MagicalNavigation;