import { LiveHubSection } from "@/components/sections/LiveHubSection";
import { SpotlightSection } from "@/components/sections/SpotlightSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { SocialFeedSection } from "@/components/sections/SocialFeedSection";
import { ExclusiveDrops } from "@/components/sections/ExclusiveDrops";

const Index = () => {
  return (
    <>
      <LiveHubSection />
      <SpotlightSection />
      <NewsSection />
      <SocialFeedSection />
      <ExclusiveDrops />
    </>
  );
};

export default Index;
