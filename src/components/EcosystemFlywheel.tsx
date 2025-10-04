"use client";
import { motion } from "motion/react";

export function EcosystemFlywheel() {
  const ecosystemSteps = [
    { name: "NFTs", icon: "🖼️", color: "#FFD86B", position: { x: 0, y: -200 } },
    { name: "Neo Wonderland", icon: "🏰", color: "#A44DD8", position: { x: 150, y: -150 } },
    { name: "Liquidity", icon: "💧", color: "#3BD16F", position: { x: 200, y: 0 } },
    { name: "$CPI", icon: "🪙", color: "#FFD86B", position: { x: 150, y: 150 } },
    { name: "Neo Silk Road", icon: "🛣️", color: "#E84343", position: { x: 0, y: 200 } },
    { name: "Renewal", icon: "🔄", color: "#A44DD8", position: { x: -150, y: 150 } },
  ];

  return (
    <section className="py-20 px-6 bg-[#0D0C2B] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#FFD86B] rounded-full animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#A44DD8] rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
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
            Ecosystem Flywheel
          </h2>
          <p 
            className="text-white text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A self-sustaining ecosystem where each component strengthens the others, creating endless value cycles.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Center - Caterpi Weaving Silk */}
          <motion.div
            className="absolute z-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD86B] to-[#3BD16F] flex items-center justify-center border-4 border-[#FFD86B]/50 shadow-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="text-center">
              <div className="text-3xl mb-1">🐛</div>
              <div 
                className="text-[#0D0C2B] text-xs"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Caterpi
              </div>
            </div>
          </motion.div>

          {/* Silk Threads */}
          {ecosystemSteps.map((step, index) => {
            const nextIndex = (index + 1) % ecosystemSteps.length;
            const current = step.position;
            const next = ecosystemSteps[nextIndex].position;
            
            return (
              <motion.svg
                key={`thread-${index}`}
                className="absolute w-full h-full pointer-events-none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <path
                  d={`M ${300 + current.x} ${300 + current.y} Q 300 300 ${300 + next.x} ${300 + next.y}`}
                  stroke={step.color}
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </motion.svg>
            );
          })}

          {/* Ecosystem Steps */}
          {ecosystemSteps.map((step, index) => (
            <motion.div
              key={index}
              className="absolute w-24 h-24 rounded-full border-4 flex flex-col items-center justify-center cursor-pointer group"
              style={{
                left: `calc(50% + ${step.position.x}px - 3rem)`,
                top: `calc(50% + ${step.position.y}px - 3rem)`,
                borderColor: step.color,
                backgroundColor: `${step.color}20`,
                animationDuration: `${3 + index * 0.5}s`, animationRepeat: "infinite"
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -10, 0] }}
            >
              <div className="text-2xl mb-1">{step.icon}</div>
              <div 
                className="text-white text-xs text-center leading-tight group-hover:text-[#FFD86B] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {step.name}
              </div>
              
              {/* Hover Description */}
              <motion.div
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-[#1a1545] border border-[#FFD86B]/30 rounded-lg px-3 py-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-30"
                initial={{ y: -10 }}
                whileHover={{ y: 0 }}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {step.name === "NFTs" && "Genesis Emblems & Collections"}
                {step.name === "Neo Wonderland" && "Digital Culture & Content"}
                {step.name === "Liquidity" && "Trading & Value Creation"}
                {step.name === "$CPI" && "Ecosystem Currency"}
                {step.name === "Neo Silk Road" && "Marketplace & Commerce"}
                {step.name === "Renewal" && "Continuous Innovation"}
              </motion.div>
            </motion.div>
          ))}

          {/* Arrow Indicators */}
          {ecosystemSteps.map((step, index) => {
            const angle = (index * 60) * (Math.PI / 180);
            const arrowX = Math.cos(angle) * 120;
            const arrowY = Math.sin(angle) * 120;
            
            return (
              <motion.div
                key={`arrow-${index}`}
                className="absolute w-6 h-6 pointer-events-none"
                style={{
                  left: `calc(50% + ${arrowX}px - 0.75rem)`,
                  top: `calc(50% + ${arrowY}px - 0.75rem)`,
                  transform: `rotate(${(index * 60) + 90}deg)`,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                viewport={{ once: true }}
              >
                <svg viewBox="0 0 24 24" fill={step.color} className="w-full h-full">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-[#A44DD8]/20 to-[#3BD16F]/20 backdrop-blur-sm border border-[#FFD86B]/30 rounded-2xl p-8 max-w-2xl">
            <h4 
              className="text-[#FFD86B] mb-4"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}
            >
              &quot;The silk of Caterpi weaves all elements together&quot;
            </h4>
            <p 
              className="text-white/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Each component feeds into the next, creating a perpetual cycle of growth, value, and innovation that benefits the entire community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}