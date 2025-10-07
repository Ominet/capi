/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour optimiser les performances
  experimental: {
    optimizeCss: true,
    // Turbopack activé pour le développement
    turbo: {
      rules: {
        // Règles personnalisées pour Turbopack si nécessaire
        '*.svg': ['@svgr/webpack'],
      },
    },
  },
  
  // Configuration des images (pour les futures images Unsplash)
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configuration pour le build statique (optionnel)
  // output: 'export',
  // trailingSlash: true,
  
  // Compression et optimisations
  compress: true,
  
  // Configuration pour les polices Google Fonts
  optimizeFonts: true,
  
  // Configuration Webpack pour Motion (ex-Framer Motion) - garde en fallback
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': 'motion/react',
    };
    return config;
  },
};

module.exports = nextConfig;