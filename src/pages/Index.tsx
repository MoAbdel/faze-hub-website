import { EditorialHero } from "@/components/sections/EditorialHero";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { LiveHubSection } from "@/components/sections/LiveHubSection";
import { ExclusiveDrops } from "@/components/sections/ExclusiveDrops";
import { SocialFeedSection } from "@/components/sections/SocialFeedSection";
import { SpotlightSection } from "@/components/sections/SpotlightSection";
import { NewsSection } from "@/components/sections/NewsSection";

const Index = () => {
  return (
    <>
      <EditorialHero />
      <HighlightsSection />
      <LiveHubSection />
      <ExclusiveDrops />
      <SocialFeedSection />
      <SpotlightSection />
      <NewsSection />
    </>
  );
};

export default Index;
