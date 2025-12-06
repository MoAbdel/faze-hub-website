import { motion } from "framer-motion";
import { CreatorCard } from "@/components/cards/CreatorCard";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const creators = [
  {
    name: "FaZe Jason",
    username: "FaZeJason",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop",
    activity: "Playing Warzone",
    followers: "22.4M",
    isLive: true,
  },
  {
    name: "FaZe Lacy",
    username: "Lacy",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop",
    activity: "Streaming • 45.2K watching",
    followers: "5.8M",
    isLive: true,
  },
  {
    name: "FaZe Ronaldo",
    username: "Ronaldo",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=225&fit=crop",
    activity: "Posted 2m ago",
    followers: "4.2M",
    isLive: false,
  },
  {
    name: "FaZe Silky",
    username: "Silky",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop",
    activity: "Just went live",
    followers: "3.1M",
    isLive: true,
  },
  {
    name: "FaZe Adapt",
    username: "Adapt",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=225&fit=crop",
    activity: "Uploaded new video",
    followers: "6.1M",
    isLive: false,
  },
  {
    name: "FaZe Rage",
    username: "Rage",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=225&fit=crop",
    activity: "Playing Fortnite",
    followers: "7.8M",
    isLive: true,
  },
];

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide">
              THE <span className="faze-gradient-text">FAZE</span> CLAN
            </h1>
            <p className="text-muted-foreground mt-2">
              See who's live and creating right now
            </p>
          </div>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <RefreshCw className="h-4 w-4" />
            <span className="hidden sm:inline">Auto-refresh</span>
          </Button>
        </motion.div>

        {/* Creator Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {creators.map((creator, index) => (
            <CreatorCard key={creator.username} {...creator} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
