import { motion } from "framer-motion";
import { Users, Play } from "lucide-react";

interface CreatorCardProps {
  name: string;
  username: string;
  avatar: string;
  thumbnail: string;
  activity: string;
  followers: string;
  isLive?: boolean;
  index?: number;
}

export const CreatorCard = ({
  name,
  username,
  avatar,
  thumbnail,
  activity,
  followers,
  isLive = false,
  index = 0,
}: CreatorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-lg overflow-hidden card-hover cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={`${name} content`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        
        {/* Live Badge */}
        {isLive && (
          <div className="absolute top-3 left-3 flex items-center gap-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider animate-pulse-glow">
            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
            Live
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
            <Play className="h-6 w-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Creator Info */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-border"
            />
            {isLive && (
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full ring-2 ring-card" />
            )}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            <p className="text-sm text-muted-foreground truncate">@{username}</p>
            <p className="text-xs text-primary mt-1 truncate">{activity}</p>
          </div>
        </div>

        {/* Followers */}
        <div className="mt-3 pt-3 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
          <Users className="h-3 w-3" />
          <span>{followers} followers</span>
        </div>
      </div>
    </motion.div>
  );
};
