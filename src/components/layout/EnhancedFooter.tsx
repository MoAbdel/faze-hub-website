import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, Twitch, Discord } from "lucide-react";

const footerSections = [
  {
    title: "EXPLORE",
    links: [
      { label: "Watch", href: "#watch" },
      { label: "Creators", href: "#creators" },
      { label: "News", href: "#news" },
      { label: "Tournaments", href: "#tournaments" },
      { label: "Clips", href: "#clips" },
    ],
  },
  {
    title: "SHOP",
    links: [
      { label: "Latest Drops", href: "https://shop.hardscope.com/drops", external: true },
      { label: "Collections", href: "https://shop.hardscope.com/collections", external: true },
      { label: "FaZe Gear", href: "https://shop.hardscope.com/gear", external: true },
      { label: "Hardware", href: "https://shop.hardscope.com/hardware", external: true },
      { label: "Sale", href: "https://shop.hardscope.com/sale", external: true },
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      { label: "Discord", href: "https://discord.gg/faze", external: true },
      { label: "Rewards Program", href: "#rewards" },
      { label: "Events & Meetups", href: "#events" },
      { label: "Submit Clips", href: "#submit" },
      { label: "Tournaments", href: "#tournaments" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About FaZe Clan", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact Us", href: "#contact" },
      { label: "Press & Media", href: "#press" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/fazeclan", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/fazeclan", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/fazeclan", label: "YouTube" },
  { icon: Twitch, href: "https://twitch.tv/fazeclan", label: "Twitch" },
  { icon: Discord, href: "https://discord.gg/faze", label: "Discord" },
];

export const EnhancedFooter = () => {
  return (
    <footer className="bg-faze-darker border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-display text-lg tracking-wider mb-4 text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl md:text-3xl tracking-wider mb-2">
              <span className="text-foreground">FAZE</span>
              <span className="text-primary">.</span>
            </h2>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} FaZe Clan. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-card hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
