"use client";
import { motion } from "motion/react";

export function Footer() {
  const socialLinks = [
    { name: "Discord", icon: "💬", href: "#", color: "#5865F2" },
    { name: "Twitter", icon: "🐦", href: "#", color: "#1DA1F2" },
    { name: "Telegram", icon: "📱", href: "#", color: "#0088CC" },
    { name: "Whitepaper", icon: "📄", href: "#", color: "#FFD86B" }
  ];

  const quickLinks = [
    { name: "Genesis Emblems", href: "#genesis" },
    { name: "Neo Wonderland", href: "#wonderland" },
    { name: "$CPI Coin", href: "#cpi" },
    { name: "Neo Silk Road", href: "#silkroad" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Community", href: "#community" }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-[#0D0C2B] to-[#1a1545] border-t border-[#FFD86B]/20 overflow-hidden">
      {/* Silk Threads Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 400">
          <defs>
            <pattern id="silk-threads" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q50 10 100 50 Q150 90 200 50" stroke="#FFD86B" strokeWidth="1" fill="none" opacity="0.3" />
              <path d="M0 25 Q50 65 100 25 Q150 -15 200 25" stroke="#3BD16F" strokeWidth="1" fill="none" opacity="0.2" />
              <path d="M0 75 Q50 35 100 75 Q150 115 200 75" stroke="#A44DD8" strokeWidth="1" fill="none" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="1000" height="400" fill="url(#silk-threads)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-[#FFD86B] to-[#3BD16F] rounded-full flex items-center justify-center text-3xl border-2 border-[#FFD86B]/50"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                🐛
              </motion.div>
              <h3 
                className="text-[#FFD86B]"
                style={{ 
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "2rem"
                }}
              >
                Caterpi
              </h3>
            </div>
            
            <p 
              className="text-white/80 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The beginning of Wonderland. Where imagination meets blockchain, culture meets commerce, and every Caterpi becomes a butterfly.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span 
                    className="text-white group-hover:text-[#FFD86B] transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 
              className="text-[#3BD16F] mb-6"
              style={{ 
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "1.2rem"
              }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#FFD86B] transition-colors duration-300 inline-block"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 
              className="text-[#A44DD8] mb-6"
              style={{ 
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "1.2rem"
              }}
            >
              Stay Updated
            </h4>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#1a1545] to-transparent border border-[#FFD86B]/30 rounded-xl p-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Genesis Emblems
                    </span>
                    <span className="text-[#FFD86B]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      1,000
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Total Caterpi
                    </span>
                    <span className="text-[#3BD16F]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      10,000
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Community
                    </span>
                    <span className="text-[#A44DD8]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      46K+
                    </span>
                  </div>
                </div>
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-[#3BD16F] to-[#A44DD8] hover:from-[#A44DD8] hover:to-[#3BD16F] text-white px-6 py-3 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-[#FFD86B]/20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span>© 2024 Caterpi. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>Built with 🐛 for the future</span>
          </div>

          <div className="flex items-center gap-6 text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            <a href="#" className="hover:text-[#FFD86B] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFD86B] transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-[#FFD86B] transition-colors duration-300">Legal</a>
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-[#FFD86B]/80 italic"
            style={{ 
              fontFamily: "'Caveat', cursive",
              fontSize: "1.2rem"
            }}
          >
            "In the cocoon of imagination, we weave the threads of tomorrow"
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${20 + i * 30}%`,
            bottom: `${10 + i * 5}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 2,
          }}
        >
          {['🐛', '🦋', '🏰'][i]}
        </motion.div>
      ))}
    </footer>
  );
}