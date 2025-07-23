import MagicalNavigation from '@/components/MagicalNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ChallengesSection from '@/components/ChallengesSection';
import TimelineSection from '@/components/TimelineSection';
import PrizesSection from '@/components/PrizesSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import MagicalFooter from '@/components/MagicalFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <MagicalNavigation />
      <HeroSection />
      <AboutSection />
      <ChallengesSection />
      <PrizesSection />
      <TeamSection />
      <TimelineSection />
      <ContactSection />
      <MagicalFooter />
    </div>
  );
};

export default Index;
