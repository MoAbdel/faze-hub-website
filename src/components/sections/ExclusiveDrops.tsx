import { motion } from "framer-motion";
import { ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const drops = [
  {
    name: "Championship Ring Collection",
    creator: "FaZe Ronaldo",
    story: "Commemorate the historic tournament win with limited edition championship rings",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=600&fit=crop",
    status: "LIVE NOW",
    price: "$299",
    remaining: "12 left",
  },
  {
    name: "Nuke Squad Hoodie",
    creator: "FaZe Jason",
    story: "Celebrating the legendary 50-kill game with exclusive team artwork",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
    status: "AVAILABLE",
    price: "$89",
    remaining: null,
  },
  {
    name: "Pro Gaming Setup Bundle",
    creator: "FaZe Adapt",
    story: "The exact hardware loadout used to dominate ranked play",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=600&fit=crop",
    status: "AVAILABLE",
    price: "$1,499",
    remaining: null,
  },
  {
    name: "Silky Signature Mousepad",
    creator: "FaZe Silky",
    story: "Limited run of 500 signed mousepads with custom artwork",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=600&fit=crop",
    status: "DROPS FRIDAY",
    price: "$49",
    countdown: "2 days",
  },
  {
    name: "Lacy's Tournament Jersey",
    creator: "FaZe Lacy",
    story: "Official replica of the jersey worn during championship match",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=600&fit=crop",
    status: "AVAILABLE",
    price: "$129",
    remaining: null,
  },
];

export const ExclusiveDrops = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-card">
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
              EXCLUSIVE DROPS
            </h2>
            <p className="text-muted-foreground">
              Limited collections from your favorite creators
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {drops.map((drop, index) => (
            <motion.div
              key={drop.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <img
                  src={drop.image}
                  alt={drop.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider ${
                      drop.status === "LIVE NOW"
                        ? "bg-primary text-primary-foreground animate-pulse"
                        : drop.status === "DROPS FRIDAY"
                        ? "bg-blue-500 text-white"
                        : "bg-background/80 backdrop-blur-sm text-foreground"
                    }`}
                  >
                    {drop.status}
                  </span>
                </div>

                {/* Remaining/Countdown */}
                {drop.remaining && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1.5 rounded text-xs font-bold uppercase">
                      {drop.remaining}
                    </span>
                  </div>
                )}
                {drop.countdown && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs font-bold uppercase">{drop.countdown}</span>
                  </div>
                )}

                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-primary text-2xl font-bold">{drop.price}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                  {drop.creator}
                </p>
                <h3 className="font-display text-lg md:text-xl mb-2 leading-tight group-hover:text-primary transition-colors">
                  {drop.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {drop.story}
                </p>
                <Button
                  size="sm"
                  className="w-full"
                  variant={drop.status === "LIVE NOW" ? "default" : "outline"}
                >
                  {drop.status === "DROPS FRIDAY" ? "SET REMINDER" : "SHOP NOW"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Button variant="ghost" className="gap-2" asChild>
            <a href="https://shop.hardscope.com/drops" target="_blank" rel="noopener noreferrer">
              View All Drops
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
