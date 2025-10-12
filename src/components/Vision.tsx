"use client";
import { motion } from "motion/react";

export function Vision() {
  const visionItems = [
    {
      icon: "🎨",
      label: "Art",
      description: "Exquisite digital art that transcends boundaries"
    },
    {
      icon: "/images/5.png",
      isImage: true,
      label: "$CPI",
      description: "The meme coin with wings and utility"
    },
    {
      icon: "🌱",
      label: "Ecosystem",
      description: "A thriving digital wonderland community"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#1a1545]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-[#A44DD8]/20 to-transparent border border-[#A44DD8]/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
            <div className="flex justify-center items-center mb-4 h-20">
              {item.isImage ? (
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-16 h-16 object-contain"
                />
              ) : (
                <div className="text-6xl mb-4">{item.icon}</div>
              )}
            </div>
              <h3 className="text-[#FFD86B] mb-3" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                {item.label}
              </h3>
              <p className="text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-white text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Caterpi is art, a meme, an ecosystem of wonder. He speaks in riddles and dresses in dreams <br/>—<br/> wise as time, playful as light, stitched from silk and the logic of impossible moons.
          </p>
        </motion.div>
      </div>
    </section>
  );
}