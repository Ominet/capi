"use client";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function CPICoin() {
  const utilities = [
    { name: "Contests", icon: "🏆", description: "Participate in community challenges" },
    { name: "Memes", icon: "😂", description: "Create and share viral content" },
    { name: "Digital Goods", icon: "🛍️", description: "Purchase exclusive items" },
    { name: "Marketplace", icon: "🏪", description: "Trade on Neo Silk Road" }
  ];

  return (
    <section className="py-20 px-6 bg-[#0D0C2B] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD86B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3BD16F]/10 rounded-full blur-3xl" />

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
            $CPI Coin
          </h2>
          <p 
            className="text-white text-lg max-w-3xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            $CPI is the meme coin with wings. Utility: contests, memes, digital goods, marketplace transactions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              animate={{ rotateY: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-80 h-80">
                {/* Coin Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD86B] to-[#3BD16F] rounded-full blur-xl opacity-30 animate-pulse" />
                
                {/* Main Coin */}
                <div className="relative w-full h-full bg-gradient-to-br from-[#FFD86B] to-[#E84343] rounded-full border-8 border-[#FFD86B]/50 shadow-2xl flex items-center justify-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1634038971836-3ef8d473ccdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBjb2luJTIwY3J5cHRvY3VycmVuY3l8ZW58MXx8fHwxNzU5MjQwNzk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="CPI Coin"
                    className="w-full h-full rounded-full object-cover opacity-80"
                  />
                  
                  {/* Coin Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div 
                        className="text-[#0D0C2B] mb-2"
                        style={{ 
                          fontFamily: "'Cinzel Decorative', serif",
                          fontSize: "2rem"
                        }}
                      >
                        $CPI
                      </div>
                      <div 
                        className="text-[#0D0C2B] text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        CATERPI
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-[#FFD86B] rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: [0, Math.cos(i * 60 * Math.PI / 180) * 120],
                      y: [0, Math.sin(i * 60 * Math.PI / 180) * 120],
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-[#3BD16F] mb-6"
              style={{ 
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "1.5rem"
              }}
            >
              Utility & Features
            </h3>

            {utilities.map((utility, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#1a1545] to-transparent border border-[#FFD86B]/20 hover:border-[#FFD86B]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="text-2xl">{utility.icon}</div>
                <div>
                  <h4 
                    className="text-[#FFD86B] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {utility.name}
                  </h4>
                  <p 
                    className="text-white/70 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {utility.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#3BD16F]/20 to-[#FFD86B]/20 border border-[#3BD16F]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-[#3BD16F] mb-2"
                style={{ fontFamily: "'Caveat', cursive", fontSize: "1.3rem" }}
              >
                The Meme Coin with Wings
              </h4>
              <p 
                className="text-white/80"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                More than just a token - $CPI powers the entire Neo Wonderland ecosystem with real utility and community value.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}