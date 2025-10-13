"use client";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function GenesisEmblem() {
  
  const emblems = [
    {
      id: 1,
      name: 'CaterLoop #1',
      rarity:'Common'
    },
    {
      id: 2,
      name: 'CaterLoop #2',
      rarity:'Uncommon'
    },
    {
      id: 3,
      name: 'CaterLoop #3',
      rarity:'Rare'
    },
    {
      id: 4,
      name: 'CaterLoop #4',
      rarity:'Legendary'
    },
    {
      id: 5,
      name: 'Caterpi #1',
      rarity:'Common'
    },
    {
      id: 6,
      name: 'Caterpi #2',
      rarity:'Uncommon'
    },
    {
      id: 7,
      name: 'Caterpi #3',
      rarity:'Rare'
    },
    {
      id: 8,
      name: 'Caterpi #4',
      rarity:'Legendary'
    }
  ]
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'from-[#FFD86B] to-[#E84343]';
      case 'Uncommon': return 'from-[#A44DD8] to-[#E84343]';
      case 'Rare': return 'from-[#3BD16F] to-[#A44DD8]';
      default: return 'from-[#3BD16F] to-[#FFD86B]';
    }
  };

  return (
    <section className="py-20 px-6 bg-[#0D0C2B]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center flex">
            <ImageWithFallback
                    src="/images/8.jpg" alt={`Genesis Emblem 8`}
                    className="w-full aspect-square object-cover rounded-lg mb-3 w-72 h-72 object-contain"
                  />
            <ImageWithFallback
                    src="/images/0.png" alt={`Genesis Emblem 0`}
                    className="w-full aspect-square object-cover rounded-lg mb-3 w-72 h-72 object-contain"
                  />
        </div>
          <h2 
            className="text-[#FFD86B] mb-6"
            style={{ 
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)"
            }}
          >
            Genesis Emblem & Collection
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Each emblem hatches into 2 Caterpi NFTs
          </p>
          <p className="text-[#3BD16F] text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
            Collector benefits: Future collection drop, $CPI integration, marketplace priority
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {emblems.map((emblem, index) => (
            <motion.div
              key={emblem.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getRarityColor(emblem.rarity)} rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              <div className="relative bg-[#1a1545] rounded-xl p-4 border border-[#A44DD8]/30 group-hover:border-[#FFD86B]/50 transition-colors duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1704730777582-dd8bef55a8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwZ2FsbGVyeSUyMG5lb258ZW58MXx8fHwxNzU5MjQwNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={`Genesis Emblem #${emblem.id}`}
                  className="w-full aspect-square object-cover rounded-lg mb-3"
                />
                <div className="text-center">
                  <h3 className="text-[#FFD86B] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {emblem.name}
                  </h3>
                  <span 
                    className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getRarityColor(emblem.rarity)} text-white`}
                  >
                    {emblem.rarity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#A44DD8]/20 to-[#3BD16F]/20 backdrop-blur-sm border border-[#FFD86B]/30 rounded-full px-8 py-4">
            <span className="text-[#FFD86B]" style={{ fontFamily: "'Inter', sans-serif" }}>
              1,500 Genesis Emblems
            </span>
            <span className="text-white">→</span>
            <span className="text-[#3BD16F]" style={{ fontFamily: "'Inter', sans-serif" }}>
              3,000 Caterpi NFTs
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}