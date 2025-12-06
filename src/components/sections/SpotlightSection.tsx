import { motion } from "framer-motion";
import { Calendar, Trophy, Settings, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const spotlightCreator = {
  name: "FaZe Adapt",
  username: "Adapt",
  avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23808080'/%3E%3C/svg%3E",
  banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop",
  bio: "Professional Call of Duty player & content creator. Part of FaZe Clan since 2020.",
  stats: {
    weeklyViewers: "4.2M",
    avgWatchTime: "45 min",
    topGame: "Warzone",
    winRate: "32%",
  },
  schedule: [
    { day: "MON", time: "6PM PT", game: "Warzone Ranked" },
    { day: "WED", time: "7PM PT", game: "New Game Release" },
    { day: "FRI", time: "5PM PT", game: "Community Games" },
    { day: "SAT", time: "3PM PT", game: "Tournament Prep" },
  ],
  clips: [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=180&fit=crop",
    "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=300&h=180&fit=crop",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=180&fit=crop",
  ],
};

export const SpotlightSection = () => {
  return (
    <section className="py-12 bg-faze-surface/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">
            STREAM <span className="text-primary">GUIDE</span>
          </h2>
          <p className="text-muted-foreground mt-2">Featured creator of the week</p>
        </motion.div>

        {/* Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl overflow-hidden"
        >
          {/* Banner */}
          <div className="relative h-48 md:h-64">
            <img
              src={spotlightCreator.banner}
              alt={spotlightCreator.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

            {/* Avatar */}
            <div className="absolute -bottom-12 left-6 md:left-8">
              <div className="relative">
                <img
                  src={spotlightCreator.avatar}
                  alt={spotlightCreator.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover ring-4 ring-card"
                />
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full ring-2 ring-card" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-16 pb-6 px-6 md:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left - Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display text-3xl">{spotlightCreator.name}</h3>
                  <span className="text-muted-foreground">@{spotlightCreator.username}</span>
                </div>
                <p className="text-muted-foreground mb-6">{spotlightCreator.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(spotlightCreator.stats).map(([key, value]) => (
                    <div key={key} className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-2xl font-bold text-primary">{value}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlight Clips */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    Highlight Clips This Week
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {spotlightCreator.clips.map((clip, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                      >
                        <img
                          src={clip}
                          alt={`Clip ${index + 1}`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-8 w-8 text-foreground" fill="currentColor" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="faze" size="lg">
                    Watch Now
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Settings className="h-4 w-4" />
                    Get This Setup
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Right - Schedule */}
              <div className="lg:w-72 xl:w-80">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Upcoming Schedule
                </h4>
                <div className="space-y-2">
                  {spotlightCreator.schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-secondary/30 rounded-lg p-3"
                    >
                      <div className="w-12 text-center">
                        <p className="text-xs text-muted-foreground">{item.day}</p>
                        <p className="text-sm font-semibold text-primary">{item.time.split(" ")[0]}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.game}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        Remind
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
