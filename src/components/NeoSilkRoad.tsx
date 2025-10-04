"use client";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function NeoSilkRoad() {
  const features = [
    { title: "Ethereum Marketplace", description: "Secure trading on the blockchain", icon: "⛓️" },
    { title: "$CPI Powered", description: "Native token for all transactions", icon: "🪙" },
    { title: "Layer 2 Evolution", description: "Scalable future infrastructure", icon: "🚀" },
    { title: "Creative Commerce", description: "Where imagination meets trade", icon: "🎨" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0D0C2B] to-[#1a1545] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="silk-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 10 Q10 50 50 90 Q90 50 50 10" stroke="#FFD86B" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#silk-pattern)" />
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
            Neo Silk Road
          </h2>
          <p 
            className="text-white text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The Neo Silk Road begins as a marketplace on Ethereum, powered by $CPI. It will evolve into a dedicated Layer 2 chain — the trade route for imagination.
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
                src="https://images.unsplash.com/photo-1706821594659-317e2a7142c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwcm9hZCUyMG1hcmtldHBsYWNlJTIwYmF6YWFyfGVufDF8fHx8MTc1OTI0MDc5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Neo Silk Road Marketplace"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C2B]/80 via-transparent to-transparent rounded-2xl" />
              
              {/* Floating Marketplace Items */}
              <motion.div
                className="absolute top-4 left-4 bg-[#3BD16F] text-white px-3 py-1 rounded-full text-sm"
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Live Trading
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 right-4 bg-[#A44DD8] text-white px-3 py-1 rounded-full text-sm"
                animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                New Arrivals
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
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#1a1545] to-transparent border border-[#A44DD8]/20 hover:border-[#A44DD8]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h4 
                    className="text-[#FFD86B] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {feature.title}
                  </h4>
                  <p 
                    className="text-white/70 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Evolution Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 
            className="text-center text-[#3BD16F] mb-12"
            style={{ 
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "1.5rem"
            }}
          >
            Evolution Path
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              { phase: "Phase 1", title: "Ethereum Marketplace", status: "Active" },
              { phase: "Phase 2", title: "Enhanced Features", status: "Development" },
              { phase: "Phase 3", title: "Layer 2 Chain", status: "Future" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center mb-4 ${
                  phase.status === 'Active' ? 'border-[#3BD16F] bg-[#3BD16F]/20' :
                  phase.status === 'Development' ? 'border-[#FFD86B] bg-[#FFD86B]/20' :
                  'border-[#A44DD8] bg-[#A44DD8]/20'
                }`}>
                  <span className="text-white">{index + 1}</span>
                </div>
                <h4 
                  className="text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {phase.title}
                </h4>
                <span 
                  className={`text-xs px-3 py-1 rounded-full ${
                    phase.status === 'Active' ? 'bg-[#3BD16F] text-white' :
                    phase.status === 'Development' ? 'bg-[#FFD86B] text-[#0D0C2B]' :
                    'bg-[#A44DD8] text-white'
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {phase.status}
                </span>
                
                {index < 2 && (
                  <motion.div
                    className="hidden md:block absolute w-32 h-0.5 bg-gradient-to-r from-current to-transparent opacity-30"
                    style={{ 
                      left: `calc(${(index + 1) * 33.33}% - 4rem)`,
                      top: "2rem"
                    }}
                    animate={{ scaleX: [0, 1] }}
                    transition={{ duration: 1, delay: index * 0.2 + 1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-[#A44DD8]/20 to-[#3BD16F]/20 backdrop-blur-sm border border-[#FFD86B]/30 rounded-2xl p-8">
            <h4 
              className="text-[#FFD86B] mb-4"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}
            >
              &quot;Where imagination meets commerce&quot;
            </h4>
            <p 
              className="text-white/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The Neo Silk Road will become the premier destination for creative digital commerce
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}