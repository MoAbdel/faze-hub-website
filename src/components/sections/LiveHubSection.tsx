import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Users, Eye, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = ["Live Now", "Recent Videos", "Clips", "Tournaments"];

const liveStreams = [
  {
    title: "WARZONE RANKED GRIND | Road to Rank 1",
    streamer: "FaZe Jason",
    game: "Call of Duty: Warzone",
    viewers: "124.5K",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    duration: "2:45:32",
    isLive: true,
  },
  {
    title: "Pro Scrims w/ Team",
    streamer: "FaZe Lacy",
    game: "Call of Duty",
    viewers: "45.2K",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    duration: "1:12:45",
    isLive: true,
  },
  {
    title: "Vlog Day in LA",
    streamer: "FaZe Ronaldo",
    game: "IRL",
    viewers: "89.1K",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=225&fit=crop",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    duration: "0:32:18",
    isLive: true,
  },
  {
    title: "Chill Games & Chat",
    streamer: "FaZe Silky",
    game: "Fortnite",
    viewers: "28.7K",
    thumbnail: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=225&fit=crop",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23808080'/%3E%3C/svg%3E",
    duration: "3:05:12",
    isLive: true,
  },
];

export const LiveHubSection = () => {
  const [activeTab, setActiveTab] = useState("Live Now");
  const featured = liveStreams[0];
  const sidebar = liveStreams.slice(1);

  return (
    <section className="py-12 bg-faze-surface/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">
            FAZE <span className="text-primary">TV</span>
          </h2>

          {/* Tabs */}
          <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-all uppercase tracking-wider",
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Featured Stream */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group cursor-pointer"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={featured.thumbnail}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Live Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary px-3 py-1.5 rounded text-sm font-semibold uppercase tracking-wider animate-pulse-glow">
                <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                Live
              </div>

              {/* Viewer Count */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded text-sm">
                <Eye className="h-4 w-4 text-primary" />
                {featured.viewers}
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center faze-glow">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <img
                    src={featured.avatar}
                    alt={featured.streamer}
                    className="w-12 h-12 rounded-full ring-2 ring-primary"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-foreground truncate">
                      {featured.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-medium">{featured.streamer}</span>
                      <span>•</span>
                      <span>{featured.game}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Streams */}
          <div className="flex flex-col gap-3">
            {sidebar.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3 bg-card rounded-lg p-2 card-hover cursor-pointer group"
              >
                <div className="relative w-32 flex-shrink-0">
                  <div className="aspect-video rounded-md overflow-hidden">
                    <img
                      src={stream.thumbnail}
                      alt={stream.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-background/80 px-1.5 py-0.5 rounded text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    {stream.viewers}
                  </div>
                </div>
                <div className="flex-1 min-w-0 py-1">
                  <h4 className="font-medium text-sm text-foreground truncate group-hover:text-primary transition-colors">
                    {stream.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{stream.streamer}</p>
                  <p className="text-xs text-muted-foreground">{stream.game}</p>
                </div>
              </motion.div>
            ))}

            <Button variant="outline" className="mt-2 w-full">
              View All Streams
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
