"use client";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function NeoWonderland() {
  const products = [
    { name: "Digital Stories", icon: "📚", color: "#A44DD8" },
    { name: "Cartoons", icon: "🎬", color: "#3BD16F" },
    { name: "Games", icon: "🎮", color: "#E84343" },
    { name: "Collectibles", icon: "💎", color: "#FFD86B" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a1545] to-[#0D0C2B] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#FFD86B] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#A44DD8] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#3BD16F] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
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
            Neo Wonderland
          </h2>
          <p 
            className="text-white text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Neo Wonderland is where Caterpi becomes culture — digital stories, cartoons, games, and branded digital collectibles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1704730777582-dd8bef55a8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwZ2FsbGVyeSUyMG5lb258ZW58MXx8fHwxNzU5MjQwNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Neo Wonderland Boutique"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C2B]/80 via-transparent to-transparent rounded-2xl" />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 bg-[#FFD86B] text-[#0D0C2B] px-3 py-1 rounded-full text-sm"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                New Drop!
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
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#1a1545] to-transparent border border-white/10 hover:border-white/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${product.color}20`, border: `2px solid ${product.color}` }}
                >
                  {product.icon}
                </div>
                <div>
                  <h3 
                    className="text-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <div 
                    className="w-16 h-1 rounded-full mt-1"
                    style={{ backgroundColor: product.color }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-[#A44DD8]/20 to-[#3BD16F]/20 backdrop-blur-sm border border-[#FFD86B]/30 rounded-2xl p-8">
            <h3 className="text-[#FFD86B] mb-4" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}>
              "Culture is the transformation of imagination into reality"
            </h3>
            <p className="text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
              Join the renaissance of digital culture in Neo Wonderland
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}