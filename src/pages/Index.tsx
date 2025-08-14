import MagicalNavigation from '@/components/MagicalNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ChallengesSection from '@/components/ChallengesSection';
import TimelineSection from '@/components/TimelineSection';
import SponsorsSection from '@/components/SponsorsSection';
import PrizesSection from '@/components/PrizesSection';
import TeamSection from '@/components/TeamSection';
import CommunityPartnersSection from '@/components/CommunityPartnersSection';
import FacultyCoordinatorsSection from '@/components/FacultyCoordinatorsSection';
import SpeakersJudgesSection from '@/components/SpeakersJudgesSection';
import ContactSection from '@/components/ContactSection';
import MagicalFooter from '@/components/MagicalFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <MagicalNavigation />
      <HeroSection />
      <AboutSection />
      <ChallengesSection />
      <SponsorsSection />
      <PrizesSection />
      <TeamSection />
      <CommunityPartnersSection />
      <FacultyCoordinatorsSection />
      <SpeakersJudgesSection />
      <TimelineSection />
      <ContactSection />
      <MagicalFooter />
    </div>
  );
};

export default Index;
