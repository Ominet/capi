"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function FAQ() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [leftConst, setLeftConst] = useState(0);
  const [topConst, setTopConst] = useState(0);

  useEffect(() => {
    // S'exécute uniquement sur le client après l'hydratation
    setLeftConst(Math.random());
    setTopConst(Math.random());
    
  }, []);
  const faqs = [
    {
      question: "What is Caterpi?",
      answer: "Caterpi is a comprehensive NFT ecosystem featuring 1,000 Genesis Emblems that evolve into 10,000 unique NFTs. It's art, meme coin ($CPI), and a complete digital culture platform spanning Neo Wonderland and the Neo Silk Road marketplace.",
      icon: "🐛",
      color: "#FFD86B"
    },
    {
      question: "How do I mint?",
      answer: "Minting will be available through our website. Genesis Emblem holders get priority access. Connect your wallet, ensure you have ETH for gas fees, and follow the minting process. Each emblem can hatch into 3 unique Caterpi NFTs.",
      icon: "⚡",
      color: "#3BD16F"
    },
    {
      question: "What is Neo Wonderland?",
      answer: "Neo Wonderland is where Caterpi becomes culture - a digital realm featuring stories, cartoons, games, and branded collectibles. It's the creative hub where community-driven content brings the Caterpi universe to life.",
      icon: "🏰",
      color: "#A44DD8"
    },
    {
      question: "What is Neo Silk Road?",
      answer: "The Neo Silk Road is our evolution from an Ethereum marketplace to a dedicated Layer 2 chain. Powered by $CPI, it's the trade route for imagination where digital commerce meets creative culture, facilitating seamless transactions and community interactions.",
      icon: "🛣️",
      color: "#E84343"
    },
    {
      question: "What utility does $CPI provide?",
      answer: "$CPI is the ecosystem's native currency enabling contests, meme creation, digital goods purchases, and marketplace transactions. Holders get governance rights, exclusive access, and benefits across the entire Caterpi ecosystem.",
      icon: "🪙",
      color: "#FFD86B"
    },
    {
      question: "What are the roadmap phases?",
      answer: "Our journey follows metamorphosis: Genesis Emblems (1K NFTs) → The Birth (10K Caterpi) → Neo Wonderland (content) → $CPI Launch → Neo Silk Road (marketplace) → Wonderland Forever (VR/AR & global culture).",
      icon: "🗺️",
      color: "#3BD16F"
    }
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0D0C2B] to-[#1a1545] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-[#FFD86B] rounded-full"
            style={{
              left: `${leftConst * 100}%`,
              top: `${topConst * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
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
            FAQ
          </h2>
          <p 
            className="text-white text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Discover the answers to your questions about the Caterpi ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative h-64 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => toggleCard(index)}
            >
              <motion.div
                className="relative w-full h-full preserve-3d"
                animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-2xl border-2 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundColor: `${faq.color}20`,
                    borderColor: faq.color,
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div className="text-4xl mb-4">{faq.icon}</div>
                  <h3 
                    className="text-white text-lg leading-tight"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    className="mt-4 text-white/60 text-sm"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Click to flip
                  </motion.div>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-2xl border-2 p-6 flex items-center justify-center text-center"
                  style={{
                    backgroundColor: `${faq.color}10`,
                    borderColor: faq.color,
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden"
                  }}
                >
                  <div>
                    <div className="text-2xl mb-3">{faq.icon}</div>
                    <h3 
                      className="text-white text-sm mb-3"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {faq.question}
                    </h3>
                    <p 
                      className="text-white/80 text-xs leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

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
              &quot;Questions are the beginning of wisdom&quot;
            </h4>
            <p 
              className="text-white/80 mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Still have questions? Join our community for more detailed discussions.
            </p>
            <motion.button
              className="bg-[#3BD16F] hover:bg-[#32b561] text-white px-6 py-3 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join Discord
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}