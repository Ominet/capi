"use client";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Hero() {

  const [leftConst, setLeftConst] = useState(0);
  const [topConst, setTopConst] = useState(0);

  useEffect(() => {
    // S'exécute uniquement sur le client après l'hydratation
    setLeftConst(Math.random());
    setTopConst(Math.random());
    
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1687780670876-9e083971adea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMHdvbmRlcmxhbmQlMjBtYWdpY2FsfGVufDF8fHx8MTc1OTI0MDc5NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Starry Wonderland"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C2B] via-[#0D0C2B]/80 to-transparent" />
      </div>

      {/* Floating Caterpi */}
      <motion.div
        className="absolute top-20 right-20 z-10"
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1677126128022-87285201c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcnBpbGxhciUyMG15c3RpY2FsJTIwZmFudGFzeXxlbnwxfHx8fDE3NTkyNDA3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Mystical Caterpi"
          className="w-32 h-32 rounded-full opacity-80"
        />
      </motion.div>

      {/* Floating Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD86B] rounded-full"
          style={{
            left: `${leftConst * 100}%`,
            top: `${topConst * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-20 text-center max-w-4xl">
        <motion.h1
          className="mb-6 text-[#FFD86B]"
          style={{ 
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: "1.2"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Caterpi: The Beginning of Wonderland
        </motion.h1>
        
        <motion.p
          className="mb-8 text-white max-w-2xl mx-auto"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.25rem",
            lineHeight: "1.6"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          1,000 Emblems + 10,000 NFTs on Ethereum. The gateway to Neo Wonderland & the Neo Silk Road.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button
            className="bg-[#3BD16F] hover:bg-[#32b561] text-white px-8 py-6 rounded-[32px] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem"
            }}
          >
            Mint Caterpi
          </Button>
        </motion.div>
      </div>
    </section>
  );
}