import ContactSection from '@/components/ui/organisms/home/ContactSection';
import Features from '@/components/ui/organisms/home/FeatureSection';
import HeroSection from '@/components/ui/organisms/home/HeroSection';
import Pricing from '@/components/ui/organisms/home/PricingSection';
import HomeTemplate from '@/components/ui/templates/HomePageTemplate';

export default function Home() {
  return (
    <HomeTemplate>
      <HeroSection />
      <Features />
      <Pricing />
      <ContactSection />
    </HomeTemplate>
  );
}
