/** @type {import('next').NextConfig} */
const nextConfig = {
  
  
  // Configuration des images (pour les futures images Unsplash)
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configuration pour le build statique (optionnel)
  output: 'export',
  trailingSlash: true,
  
  // Compression et optimisations
  compress: true,
  

  
  
};

module.exports = nextConfig;