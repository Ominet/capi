"use client";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Community() {
  const socialPlatforms = [
    {
      name: "Discord",
      icon: "💬",
      description: "Join our vibrant community discussions",
      color: "#5865F2",
      members: "12.5K",
      link: "#"
    },
    {
      name: "Twitter",
      icon: "🐦",
      description: "Stay updated with latest announcements",
      color: "#1DA1F2",
      members: "25.3K",
      link: "#"
    },
    {
      name: "Telegram",
      icon: "📱",
      description: "Real-time updates and community chat",
      color: "#0088CC",
      members: "8.7K",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0D0C2B] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="community-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#FFD86B" />
              <circle cx="20" cy="20" r="1" fill="#3BD16F" />
              <circle cx="60" cy="60" r="1" fill="#A44DD8" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#community-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-[#FFD86B] mb-6"
            style={{ 
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)"
            }}
          >
            Community
          </h2>
          <p 
            className="text-white text-lg max-w-3xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Caterpi&apos;s silk weaves us together. Enter the community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1727410400148-48347cd6916a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkaXNjb3JkJTIwc29jaWFsfGVufDF8fHx8MTc1OTI0MDc5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C2B]/80 via-transparent to-transparent rounded-2xl" />
              
              {/* Community Stats Overlay */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#1a1545]/80 backdrop-blur-sm border border-[#FFD86B]/30 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-[#FFD86B] text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                        46K+
                      </div>
                      <div className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Members
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#3BD16F] text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                        150+
                      </div>
                      <div className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Countries
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#A44DD8] text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                        24/7
                      </div>
                      <div className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Active
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                className="block p-6 rounded-2xl bg-gradient-to-r from-[#1a1545] to-transparent border border-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${platform.color}20`, border: `2px solid ${platform.color}` }}
                    >
                      {platform.icon}
                    </div>
                    <div>
                      <h3 
                        className="text-white text-lg mb-1 group-hover:text-[#FFD86B] transition-colors duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {platform.name}
                      </h3>
                      <p 
                        className="text-white/70 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-lg mb-1"
                      style={{ color: platform.color, fontFamily: "'Inter', sans-serif" }}
                    >
                      {platform.members}
                    </div>
                    <div className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      members
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Community Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Exclusive Content",
              description: "Early access to drops, behind-the-scenes content, and community events",
              icon: "🎬",
              color: "#A44DD8"
            },
            {
              title: "Collaborative Creation",
              description: "Community-driven content creation and feedback on new developments",
              icon: "🤝",
              color: "#3BD16F"
            },
            {
              title: "Reward Programs",
              description: "Participate in contests, earn $CPI, and get priority marketplace access",
              icon: "🏆",
              color: "#FFD86B"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-[#1a1545] to-transparent border border-white/10 hover:border-white/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${feature.color}20`, border: `2px solid ${feature.color}` }}
              >
                {feature.icon}
              </div>
              <h3 
                className="text-white mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-[#A44DD8]/20 to-[#3BD16F]/20 backdrop-blur-sm border border-[#FFD86B]/30 rounded-2xl p-8">
            <h4 
              className="text-[#FFD86B] mb-4"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}
            >
              &quot;Together we weave the future of digital culture&quot;
            </h4>
            <p 
              className="text-white/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join thousands of creators, collectors, and dreamers building Neo Wonderland together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}