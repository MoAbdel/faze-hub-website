import { motion } from "framer-motion";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ShopBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-8"
    >
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-faze-surface via-card to-faze-surface border border-border">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  hsl(var(--primary)) 10px,
                  hsl(var(--primary)) 11px
                )`,
              }}
            />
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl">SHOP LATEST DROP</h3>
                <p className="text-muted-foreground text-sm">
                  Exclusive FaZe merch & creator collections
                </p>
              </div>
            </div>

            <Button
              variant="faze"
              size="lg"
              className="gap-2"
              asChild
            >
              <a
                href="https://shop.hardscope.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Shop
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
