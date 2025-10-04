"use client";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function FinalCTA() {
  const [leftConst, setLeftConst] = useState(0);
  const [topConst, setTopConst] = useState(0);

  useEffect(() => {
    // S'exécute uniquement sur le client après l'hydratation
    setLeftConst(Math.random());
    setTopConst(Math.random());
    
  }, []);
  return (
    <section className="py-20 px-6 bg-[#0D0C2B] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFD86B]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3BD16F]/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A44DD8]/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD86B] rounded-full opacity-60"
          style={{
            left: `${leftConst * 100}%`,
            top: `${topConst * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Golden Cocoon */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative w-48 h-48 mx-auto"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD86B] to-[#E84343] rounded-full blur-xl opacity-40 animate-pulse" />
            
            {/* Main Cocoon */}
            <div className="relative w-full h-full bg-gradient-to-br from-[#FFD86B] via-[#E84343] to-[#A44DD8] rounded-full shadow-2xl border-4 border-[#FFD86B]/50">
              <div className="absolute inset-4 bg-gradient-to-br from-[#FFD86B]/80 to-[#E84343]/80 rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-br from-[#FFD86B]/60 to-[#E84343]/60 rounded-full" />
              
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full opacity-80 animate-pulse" />
              
              {/* Silk Threads */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-12 bg-gradient-to-t from-[#FFD86B] to-transparent"
                  style={{
                    left: "50%",
                    top: "50%",
                    transformOrigin: "bottom",
                    transform: `rotate(${i * 45}deg) translateY(-6rem)`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scaleY: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Text Around Cocoon */}
          {[
            { text: "Transform", angle: 0, radius: 140, color: "#FFD86B" },
            { text: "Evolve", angle: 72, radius: 140, color: "#3BD16F" },
            { text: "Create", angle: 144, radius: 140, color: "#A44DD8" },
            { text: "Trade", angle: 216, radius: 140, color: "#E84343" },
            { text: "Dream", angle: 288, radius: 140, color: "#FFD86B" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-sm opacity-80"
              style={{
                left: `calc(50% + ${Math.trunc(Math.cos(item.angle * Math.PI / 180) * item.radius)}px)`,
                top: `calc(50% + ${Math.trunc(Math.sin(item.angle * Math.PI / 180) * item.radius)}px)`,
                color: item.color,
                fontFamily: "'Caveat', cursive",
                fontSize: "1.2rem"
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
              }}
            >
              {item.text}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-[#FFD86B] mb-6"
            style={{ 
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: "1.2"
            }}
          >
            Ready to Transform?
          </h2>
          
          <p 
            className="text-white text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join the metamorphosis. Mint your Genesis Emblem and begin your journey into Neo Wonderland where imagination becomes reality.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-gradient-to-r from-[#FFD86B] to-[#E84343] hover:from-[#E84343] hover:to-[#FFD86B] text-[#0D0C2B] px-12 py-6 rounded-[32px] transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FFD86B]/25"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.25rem"
            }}
          >
            Mint Caterpi
          </Button>
          
          <div className="flex justify-center gap-8 text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span>🔗 Ethereum Network</span>
            <span>💎 Genesis Emblems</span>
            <span>🎨 Unique Art</span>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-[#A44DD8]/20 to-[#3BD16F]/20 backdrop-blur-sm border border-[#FFD86B]/30 rounded-2xl p-8">
            <h4 
              className="text-[#FFD86B] mb-4"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}
            >
              "Every butterfly was once a caterpillar that refused to give up"
            </h4>
            <p 
              className="text-white/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your transformation story begins with a single mint. Welcome to the future of digital culture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}