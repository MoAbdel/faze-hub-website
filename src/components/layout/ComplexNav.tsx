import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bell, User, Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navTabs = [
  { label: "WATCH", href: "#watch" },
  { label: "CREATORS", href: "#creators" },
  { label: "NEWS", href: "#news" },
  { label: "CLIPS", href: "#clips" },
  { label: "TOURNAMENTS", href: "#tournaments" },
  { label: "COMMUNITY", href: "#community" },
];

export const ComplexNav = () => {
  const [activeTab, setActiveTab] = useState("WATCH");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1 className="font-display text-3xl md:text-4xl tracking-wider">
              <span className="text-foreground">FAZE</span>
              <span className="text-primary">.</span>
            </h1>
          </a>

          {/* Desktop Navigation - Center Tabs */}
          <div className="hidden lg:flex items-center gap-1">
            {navTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold tracking-wider transition-colors",
                  activeTab === tab.label
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
                {activeTab === tab.label && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Shop Button - Separate Styling */}
            <a
              href="https://shop.hardscope.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ShoppingBag className="h-4 w-4" />
                SHOP
              </Button>
            </a>

            {/* Icons */}
            <button className="hidden md:flex p-2 hover:bg-secondary rounded-md transition-colors">
              <Search className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </button>
            <button className="hidden md:flex p-2 hover:bg-secondary rounded-md transition-colors relative">
              <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
            <button className="hidden md:flex p-2 hover:bg-secondary rounded-md transition-colors">
              <User className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border py-4"
          >
            <div className="flex flex-col gap-2">
              {navTabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => {
                    setActiveTab(tab.label);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-left px-4 py-3 rounded-md font-semibold tracking-wider transition-colors",
                    activeTab === tab.label
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
              <a
                href="https://shop.hardscope.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button variant="outline" className="w-full gap-2 border-primary text-primary">
                  <ShoppingBag className="h-4 w-4" />
                  SHOP
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
