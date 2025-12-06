import { motion } from "framer-motion";
import { Gift, Trophy, Users, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const rewards = [
  {
    title: "Bronze Fan",
    points: 500,
    current: 500,
    perks: ["Exclusive Discord Role", "Early Access to Streams"],
    unlocked: true,
  },
  {
    title: "Silver Fan",
    points: 2000,
    current: 1350,
    perks: ["Monthly Merch Discount", "Exclusive Emotes"],
    unlocked: false,
  },
  {
    title: "Gold Fan",
    points: 5000,
    current: 1350,
    perks: ["Meet & Greet Priority", "Signed Merchandise"],
    unlocked: false,
  },
  {
    title: "Diamond Fan",
    points: 10000,
    current: 1350,
    perks: ["Play with Creators", "All Exclusive Content"],
    unlocked: false,
  },
];

const upcomingEvents = [
  { title: "FaZe Clan Watch Party", date: "Dec 15", type: "watch-party" },
  { title: "Community Tournament", date: "Dec 18", type: "tournament" },
  { title: "Discord Q&A with Rug", date: "Dec 20", type: "community" },
];

export const RewardsSection = () => {
  const currentPoints = 1350;
  const currentTier = rewards[0];
  const nextTier = rewards[1];
  const progress = (currentPoints / nextTier.points) * 100;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Rewards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Gift className="h-6 w-6 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl tracking-wide">
                FAZE <span className="text-primary">REWARDS</span>
              </h2>
            </div>

            {/* Progress Card */}
            <div className="bg-card rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-muted-foreground text-sm">Your Points</p>
                  <p className="text-3xl font-bold text-primary">{currentPoints.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-sm">Current Tier</p>
                  <p className="text-lg font-semibold">{currentTier.title}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress to {nextTier.title}</span>
                  <span className="text-primary font-medium">
                    {currentPoints} / {nextTier.points}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {nextTier.points - currentPoints} points to unlock
                </p>
              </div>
            </div>

            {/* Tier Cards */}
            <div className="grid grid-cols-2 gap-3">
              {rewards.map((tier, index) => (
                <motion.div
                  key={tier.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-card rounded-lg p-4 border-2 transition-all ${
                    tier.unlocked
                      ? "border-primary"
                      : "border-transparent opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy
                      className={`h-4 w-4 ${
                        tier.unlocked ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <span className="font-semibold text-sm">{tier.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {tier.points.toLocaleString()} points
                  </p>
                  <ul className="text-xs space-y-1">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-1">
                        <Zap className="h-2.5 w-2.5 text-primary" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Community & Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Discord Preview */}
            <div className="bg-card rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Community Discord</h3>
                </div>
                <div className="flex items-center gap-1 text-green-500 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  12.4K online
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    🎮
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">#warzone-lfg</p>
                    <p className="text-xs text-muted-foreground">Looking for ranked teammates?</p>
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">234 active</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    💬
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">#general-chat</p>
                    <p className="text-xs text-muted-foreground">Main community hangout</p>
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">1.2K active</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Join Discord
              </Button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-card rounded-xl p-6">
              <h3 className="font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
                  >
                    <div>
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">
                        {event.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
