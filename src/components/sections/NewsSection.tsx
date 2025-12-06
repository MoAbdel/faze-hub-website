import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const topClips = [
  {
    title: "FaZe Jason's Insane 1v4 Clutch",
    excerpt:
      "Watch as Jason pulls off an incredible comeback in ranked Warzone with this insane clutch play...",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    category: "Highlight",
    date: "Dec 5, 2024",
    featured: true,
  },
  {
    title: "FaZe Lacy's Perfect Snipe Streak",
    excerpt: "Five consecutive headshots in tournament play - this clip is pure perfection...",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=250&fit=crop",
    category: "Sniper",
    date: "Dec 4, 2024",
    featured: false,
  },
  {
    title: "FaZe Ronaldo's Epic Escape",
    excerpt: "How did he survive this? Watch one of the craziest escapes in FaZe history...",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop",
    category: "Clutch",
    date: "Dec 3, 2024",
    featured: false,
  },
  {
    title: "FaZe Silky's 30 Kill Game",
    excerpt: "Silky goes absolutely crazy in this match with a career-high 30 eliminations...",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
    category: "Gameplay",
    date: "Dec 2, 2024",
    featured: false,
  },
];

export const NewsSection = () => {
  const featured = topClips[0];
  const others = topClips.slice(1);

  return (
    <section className="py-12 bg-faze-surface/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">
            BEST OF THE <span className="text-primary">WEEK</span>
          </h2>
          <Button variant="ghost" className="gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Clip */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                  {featured.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 mb-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {featured.date}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Other Clips */}
          <div className="space-y-4">
            {others.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 bg-card rounded-lg p-3 card-hover cursor-pointer group"
              >
                <div className="w-32 flex-shrink-0">
                  <div className="aspect-video rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-semibold text-sm mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 hidden sm:block">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
