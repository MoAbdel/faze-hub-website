import { motion } from "framer-motion";
import { useState } from "react";
import { SocialCard } from "@/components/cards/SocialCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const platforms = ["All", "YouTube", "Twitter", "Instagram", "TikTok", "Twitch"];

const socialPosts = [
  {
    platform: "youtube" as const,
    creator: "FaZe Jason",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    content: "I BOUGHT A $5,000,000 MANSION (Full Tour)",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    video: true,
    likes: "2.3M",
    comments: "45.2K",
    timestamp: "2 hours ago",
  },
  {
    platform: "twitter" as const,
    creator: "FaZe Lacy",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    content: "Another day, another grind. The FaZe Up mentality never stops. Who's ready for tonight's stream? 🎮🔥",
    likes: "124K",
    comments: "3.2K",
    timestamp: "45 min ago",
  },
  {
    platform: "instagram" as const,
    creator: "FaZe Ronaldo",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    content: "",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=500&fit=crop",
    likes: "890K",
    comments: "12.1K",
    timestamp: "3 hours ago",
  },
  {
    platform: "tiktok" as const,
    creator: "FaZe Silky",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    content: "Wait for the ending... 😂 #gaming #faze #warzone",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
    video: true,
    likes: "5.2M",
    comments: "89.4K",
    timestamp: "1 hour ago",
  },
  {
    platform: "twitch" as const,
    creator: "FaZe Adapt",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    content: "Last night's tournament was INSANE. Thanks to everyone who tuned in!",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=250&fit=crop",
    likes: "234K",
    comments: "8.9K",
    timestamp: "5 hours ago",
  },
  {
    platform: "youtube" as const,
    creator: "FaZe Rage",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    content: "SURPRISING MY BROTHER WITH HIS DREAM CAR 🚗💨",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
    video: true,
    likes: "1.8M",
    comments: "32.1K",
    timestamp: "6 hours ago",
  },
  {
    platform: "twitter" as const,
    creator: "FaZe Jason",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    content: "BIG announcement dropping tomorrow. Stay tuned. 👀",
    likes: "456K",
    comments: "15.7K",
    timestamp: "30 min ago",
  },
  {
    platform: "instagram" as const,
    creator: "FaZe Lacy",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    content: "Behind the scenes 📸",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop",
    likes: "1.2M",
    comments: "28.3K",
    timestamp: "4 hours ago",
  },
];

export const SocialFeedSection = () => {
  const [activePlatform, setActivePlatform] = useState("All");

  const filteredPosts =
    activePlatform === "All"
      ? socialPosts
      : socialPosts.filter(
          (post) => post.platform.toLowerCase() === activePlatform.toLowerCase()
        );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">
            SOCIAL <span className="text-primary">FEED</span>
          </h2>

          {/* Platform Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setActivePlatform(platform)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-full transition-all border",
                  activePlatform === platform
                    ? "bg-primary text-primary-foreground border-primary"
                    : "text-muted-foreground hover:text-foreground border-border hover:border-primary/50"
                )}
              >
                {platform}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filteredPosts.map((post, index) => (
            <SocialCard key={`${post.creator}-${index}`} {...post} index={index} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Button variant="faze-outline" size="lg">
            Load More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
