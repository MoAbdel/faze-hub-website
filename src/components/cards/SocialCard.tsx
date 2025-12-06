import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Play } from "lucide-react";
import { Twitter, Instagram, Youtube } from "lucide-react";

type Platform = "twitter" | "instagram" | "youtube" | "tiktok" | "twitch";

interface SocialCardProps {
  platform: Platform;
  creator: string;
  avatar: string;
  content: string;
  image?: string;
  video?: boolean;
  likes: string;
  comments: string;
  timestamp: string;
  index?: number;
}

const platformIcons: Record<Platform, React.ComponentType<{ className?: string }>> = {
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  tiktok: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  ),
  twitch: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
    </svg>
  ),
};

const platformColors: Record<Platform, string> = {
  twitter: "text-blue-400",
  instagram: "text-pink-500",
  youtube: "text-red-500",
  tiktok: "text-foreground",
  twitch: "text-purple-500",
};

export const SocialCard = ({
  platform,
  creator,
  avatar,
  content,
  image,
  video,
  likes,
  comments,
  timestamp,
  index = 0,
}: SocialCardProps) => {
  const PlatformIcon = platformIcons[platform];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
      className="masonry-item bg-card rounded-lg overflow-hidden card-hover group cursor-pointer"
    >
      {/* Media */}
      {image && (
        <div className="relative aspect-auto overflow-hidden">
          <img
            src={image}
            alt={content}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {video && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/30">
              <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                <Play className="h-5 w-5 text-primary-foreground ml-0.5" fill="currentColor" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={avatar}
            alt={creator}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-foreground truncate">{creator}</p>
            <p className="text-xs text-muted-foreground">{timestamp}</p>
          </div>
          <span className={platformColors[platform]}>
            <PlatformIcon />
          </span>
        </div>

        {/* Text Content */}
        {content && (
          <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3">
            {content}
          </p>
        )}

        {/* Engagement */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border text-muted-foreground">
          <button className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors">
            <Heart className="h-3.5 w-3.5" />
            {likes}
          </button>
          <button className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors">
            <MessageCircle className="h-3.5 w-3.5" />
            {comments}
          </button>
          <button className="ml-auto hover:text-primary transition-colors">
            <Share2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
