import { motion } from "framer-motion";
import { Calendar, TrendingUp, ShoppingBag, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    category: "GAMING",
    title: "FaZe Jason's Record-Breaking 50 Kill Game",
    excerpt: "How the rising star dominated the tournament with the performance of a lifetime.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    date: "Dec 5, 2024",
    author: "Alex Rivera",
    type: "article",
  },
  {
    category: "EXCLUSIVE",
    title: "The Story Behind FaZe Ronaldo's Championship Drop",
    excerpt: "Limited edition collection celebrates historic victory with exclusive merch designed by the champion himself.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    date: "Dec 4, 2024",
    status: "AVAILABLE NOW",
    type: "drop",
  },
  {
    category: "CULTURE",
    title: "Inside the New FaZe Content Studio",
    excerpt: "A first look at the state-of-the-art facility where your favorite creators make magic happen.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
    date: "Dec 3, 2024",
    views: "1.2M",
    type: "article",
  },
  {
    category: "STREAMING",
    title: "FaZe Lacy's Marathon Stream: The Highlights",
    excerpt: "Best moments from the 24-hour charity stream that raised over $100K.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
    date: "Dec 2, 2024",
    duration: "15:32",
    type: "video",
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "GAMING":
      return Trophy;
    case "EXCLUSIVE":
      return ShoppingBag;
    case "CULTURE":
      return TrendingUp;
    default:
      return Calendar;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "GAMING":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "EXCLUSIVE":
      return "bg-primary/10 text-primary border-primary/20";
    case "CULTURE":
      return "bg-purple-500/10 text-purple-500 border-purple-500/20";
    case "STREAMING":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    default:
      return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

export const HighlightsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8 md:mb-12"
        >
          <div>
            <h2 className="font-display text-3xl md:text-5xl tracking-wider mb-2">
              HIGHLIGHTS
            </h2>
            <p className="text-muted-foreground">
              The latest in gaming, culture, and exclusive drops
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex gap-2">
            View All
            <TrendingUp className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = getCategoryIcon(highlight.category);
            const colorClass = getCategoryColor(highlight.category);

            return (
              <motion.article
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer bg-card rounded-lg overflow-hidden hover:ring-2 hover:ring-primary/20 transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 rounded border ${colorClass} backdrop-blur-sm`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        {highlight.category}
                      </span>
                    </div>
                  </div>

                  {/* Status/Duration Badge */}
                  {highlight.status && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider animate-pulse">
                        {highlight.status}
                      </span>
                    </div>
                  )}
                  {highlight.duration && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-background/80 backdrop-blur-sm text-foreground px-2 py-1 rounded text-xs font-semibold">
                        {highlight.duration}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-2">
                    {highlight.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    {highlight.author && (
                      <>
                        <span className="text-foreground font-medium">By {highlight.author}</span>
                        <span>•</span>
                      </>
                    )}
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {highlight.date}
                    </div>
                    {highlight.views && (
                      <>
                        <span>•</span>
                        <span>{highlight.views} views</span>
                      </>
                    )}
                  </div>

                  {/* CTA for Drops */}
                  {highlight.type === "drop" && (
                    <Button className="w-full mt-4 gap-2" size="sm">
                      <ShoppingBag className="h-4 w-4" />
                      SHOP NOW
                    </Button>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
