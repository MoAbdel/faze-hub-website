import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { LiveHubSection } from "@/components/sections/LiveHubSection";
import { SocialFeedSection } from "@/components/sections/SocialFeedSection";
import { SpotlightSection } from "@/components/sections/SpotlightSection";
import { RewardsSection } from "@/components/sections/RewardsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ShopBanner } from "@/components/sections/ShopBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LiveHubSection />
        <SocialFeedSection />
        <SpotlightSection />
        <RewardsSection />
        <NewsSection />
        <ShopBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
