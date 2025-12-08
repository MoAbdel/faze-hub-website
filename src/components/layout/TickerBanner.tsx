import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  {
    text: "FaZe Ronaldo Championship Merch Available Now",
    link: "https://shop.hardscope.com/drops/ronaldo-championship",
  },
  {
    text: "New Nuke Squad Collection",
    link: "https://shop.hardscope.com/drops/nuke-squad",
  },
  {
    text: "Exclusive Hardware Drop Friday",
    link: "https://shop.hardscope.com/drops/hardware",
  },
  {
    text: "FaZe Jason's 50-Kill Celebration Drop",
    link: "https://shop.hardscope.com/drops/jason-50-kill",
  },
];

export const TickerBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.a
            key={currentIndex}
            href={announcements[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="block text-center text-sm md:text-base font-semibold uppercase tracking-wider hover:underline"
          >
            🔥 {announcements[currentIndex].text} →
          </motion.a>
        </AnimatePresence>
      </div>
    </div>
  );
};
