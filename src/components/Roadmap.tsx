"use client";
import { motion } from "motion/react";

export function Roadmap() {
  const roadmapSteps = [
    {
      phase: "Genesis Emblem",
      title: "1,000 NFTs",
      description: "The beginning of the journey with exclusive Genesis Emblems",
      status: "Active",
      icon: "🥚",
      color: "#FFD86B"
    },
    {
      phase: "The Birth",
      title: "10,000 Caterpi NFTs",
      description: "Each emblem hatches into unique Caterpi characters",
      status: "Coming Soon",
      icon: "🐛",
      color: "#3BD16F"
    },
    {
      phase: "Neo Wonderland",
      title: "Content + Collectibles",
      description: "Digital stories, cartoons, games, and branded items",
      status: "Development",
      icon: "🏰",
      color: "#A44DD8"
    },
    {
      phase: "The Meme Awakens",
      title: "$CPI Token Launch",
      description: "The utility token that powers the entire ecosystem",
      status: "Planned",
      icon: "🪙",
      color: "#FFD86B"
    },
    {
      phase: "Neo Silk Road",
      title: "Marketplace + Layer 2",
      description: "Dedicated trading platform and blockchain infrastructure",
      status: "Future",
      icon: "🛣️",
      color: "#E84343"
    },
    {
      phase: "Wonderland Forever",
      title: "VR/AR + Films + Global Culture",
      description: "Immersive experiences and worldwide cultural impact",
      status: "Vision",
      icon: "🦋",
      color: "#A44DD8"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return '#3BD16F';
      case 'Coming Soon': return '#FFD86B';
      case 'Development': return '#A44DD8';
      case 'Planned': return '#E84343';
      case 'Future': return '#A44DD8';
      case 'Vision': return '#FFD86B';
      default: return '#FFFFFF';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a1545] to-[#0D0C2B] relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-20 text-6xl"
          animate={{ rotate: 360, x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          🥚
        </motion.div>
        <motion.div
          className="absolute top-40 right-40 text-6xl"
          animate={{ rotate: -360, x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        >
          🐛
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-1/3 text-6xl"
          animate={{ rotate: 360, x: [0, -50, 0], y: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity, delay: 10 }}
        >
          🦋
        </motion.div>
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
            Roadmap
          </h2>
          <p 
            className="text-white text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The transformation journey from egg to caterpillar to butterfly — mirroring Caterpi's evolution in the digital realm.
          </p>
        </motion.div>

        {/* Evolution Icons */}
        <motion.div
          className="flex justify-center items-center gap-8 mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-6xl"
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🥚
          </motion.div>
          <motion.div
            className="text-2xl text-[#FFD86B]"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.div>
          <motion.div
            className="text-6xl"
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            🐛
          </motion.div>
          <motion.div
            className="text-2xl text-[#3BD16F]"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            →
          </motion.div>
          <motion.div
            className="text-6xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          >
            🦋
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-[#FFD86B] to-[#A44DD8] opacity-30" style={{ marginLeft: '-0.125rem' }} />
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  className="bg-gradient-to-br from-[#1a1545] to-[#0D0C2B] border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-colors duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getStatusColor(step.status) }}
                    />
                    <span 
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{ 
                        borderColor: getStatusColor(step.status),
                        color: getStatusColor(step.status),
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {step.status}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-[#FFD86B] mb-2"
                    style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.2rem" }}
                  >
                    {step.phase}
                  </h3>
                  
                  <h4 
                    className="text-white mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.title}
                  </h4>
                  
                  <p 
                    className="text-white/70 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Icon */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center z-10"
                style={{
                  borderColor: step.color,
                  backgroundColor: `${step.color}20`,
                  marginLeft: '-2rem',
                }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                <span className="text-2xl">{step.icon}</span>
              </motion.div>

              {/* Connecting Line to Icon */}
              <motion.div
                className={`w-6 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-transparent to-white/30' : 'from-white/30 to-transparent'} absolute top-1/2 ${index % 2 === 0 ? 'right-1/2 mr-8' : 'left-1/2 ml-8'}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

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
              "Every great journey begins with a single step"
            </h4>
            <p 
              className="text-white/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join us as we build the future of digital culture, one phase at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}