import { motion } from "framer-motion";
import { Play, Eye, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredStory = {
  category: "COVER STORY",
  title: "FaZe Adapt: The Grind Never Stops",
  excerpt:
    "From late-night streams to championship wins, we sit down with one of FaZe's most dedicated creators to talk about what it takes to stay on top.",
  author: "Marcus Chen",
  date: "Dec 5, 2024",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop",
  tags: ["FEATURED", "INTERVIEW", "GAMING"],
};

const trendingContent = [
  {
    type: "LIVE",
    title: "FaZe Jason's Tournament Run",
    viewers: "45.2K",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    isLive: true,
  },
  {
    type: "DROP",
    title: "Limited Edition: Championship Collection",
    status: "AVAILABLE NOW",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
  },
  {
    type: "VICTORY",
    title: "FaZe Ronaldo Clinches Major Win",
    timestamp: "2 hours ago",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
  },
  {
    type: "EXCLUSIVE",
    title: "Behind the Scenes: New FaZe House",
    views: "2.1M",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
  },
];

export const EditorialHero = () => {
  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-6 md:gap-8">
          {/* Main Feature - 70% */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-6">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  {featuredStory.category}
                </span>
              </div>

              {/* Tags */}
              <div className="absolute top-4 right-4 flex gap-2">
                {featuredStory.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featuredStory.title}
                </h1>
                <p className="text-muted-foreground text-base md:text-lg mb-6 line-clamp-2">
                  {featuredStory.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="font-medium text-foreground">By {featuredStory.author}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredStory.date}
                  </div>
                  <span>•</span>
                  <span>{featuredStory.readTime}</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="gap-2">
                    <Play className="h-4 w-4" fill="currentColor" />
                    WATCH NOW
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    SHOP THE STORY
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sidebar - 30% */}
          <div className="space-y-4">
            {/* Trending Header */}
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl tracking-wider">TRENDING NOW</h2>
            </div>

            {/* Trending Cards */}
            {trendingContent.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer bg-card rounded-lg overflow-hidden hover:bg-card/80 transition-all"
              >
                <div className="flex gap-3 p-3">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {item.isLive && (
                      <div className="absolute top-2 left-2 flex items-center gap-1 bg-primary px-2 py-0.5 rounded text-xs font-bold uppercase">
                        <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" />
                        LIVE
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {item.type}
                    </span>
                    <h3 className="font-semibold text-sm mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {"viewers" in item && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {item.viewers} watching
                        </div>
                      )}
                      {"status" in item && (
                        <span className="text-primary font-semibold">{item.status}</span>
                      )}
                      {"timestamp" in item && <span>{item.timestamp}</span>}
                      {"views" in item && <span>{item.views} views</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
