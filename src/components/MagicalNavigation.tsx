import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles, ChevronDown, Scroll, Calendar, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';

const MagicalNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Challenges', href: '#challenges' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  const eventItems = [
    { name: 'Brochure', href: '/brochure', icon: Scroll, description: 'Event details and guidelines' },
    { name: 'Schedule', href: '/schedule', icon: Calendar, description: 'Complete event timeline' },
    { name: 'Rules', href: '/rules', icon: Shield, description: 'Competition rules and regulations' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50 shadow-magical">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Harry Potter elements */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Sparkles className="text-primary w-8 h-8 animate-float" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-magical">
                HackSpark ⚡
              </span>
              <span className="text-sm text-muted-foreground font-medium hidden sm:block">
                Hack Spark
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                      Event Info 🏰
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-80 bg-card border border-border/50 rounded-lg shadow-glow">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-magical p-6 no-underline outline-none focus:shadow-md">
                              <Sparkles className="h-6 w-6 text-background" />
                              <div className="mb-2 mt-4 text-lg font-medium text-background">
                                Magical Event Hub
                              </div>
                              <p className="text-sm leading-tight text-background/90">
                                Everything you need to know about the wizarding tournament
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </div>
                        {eventItems.map((item) => (
                          <NavigationMenuLink key={item.name} asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                            >
                              <div className="flex items-center space-x-2">
                                <item.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <ThemeToggle />
              
              <Button variant="default" size="sm" className="bg-gradient-magical text-background font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105">
                🪄 Join the Magic
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
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
            "md:hidden overflow-hidden transition-all duration-300 bg-card/95 backdrop-blur-sm rounded-b-lg",
            isOpen ? "max-h-96 pb-4 border-b border-border/50" : "max-h-0"
          )}>
            <div className="flex flex-col space-y-3 pt-4 px-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-accent/20"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="border-t border-border/30 pt-3 mt-3">
                <div className="text-sm font-medium text-muted-foreground px-3 mb-2">Event Info 🏰</div>
                {eventItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-accent/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              <Button variant="default" size="sm" className="w-fit mx-3 bg-gradient-magical text-background">
                🪄 Join the Magic
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MagicalNavigation;