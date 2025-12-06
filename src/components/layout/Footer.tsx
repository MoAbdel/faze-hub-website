import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, Twitch, ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "About FaZe", href: "#about" },
  { label: "Creators", href: "#creators" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#careers" },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/FaZeClan", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/FaZeClan", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/FaZeClan", label: "YouTube" },
  { icon: Twitch, href: "https://twitch.tv/FaZeClan", label: "Twitch" },
];

export const Footer = () => {
  return (
    <footer className="bg-faze-darker border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl tracking-wider text-foreground"
          >
            FAZE
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://shop.hardscope.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors text-sm uppercase tracking-wider flex items-center gap-1"
            >
              Visit FaZe Shop
              <ExternalLink className="h-3 w-3" />
            </a>
          </motion.nav>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-xs"
        >
          © {new Date().getFullYear()} FaZe Clan. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
