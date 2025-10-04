import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caterpi - Genesis Emblems NFT | Portal to Neo Wonderland",
  description: "Découvrez les 1,000 Genesis Emblems qui éclosent en 10,000 NFTs Caterpi sur Ethereum. Portail vers Neo Wonderland et l'écosystème Neo Silk Road avec le meme coin $CPI.",
  keywords: "NFT, Caterpi, Genesis Emblems, Ethereum, Neo Wonderland, Neo Silk Road, CPI coin, blockchain",
  authors: [{ name: "Caterpi Team" }],
  openGraph: {
    title: "Caterpi - Genesis Emblems NFT",
    description: "1,000 Genesis Emblems qui éclosent en 10,000 NFTs Caterpi sur Ethereum",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caterpi - Genesis Emblems NFT",
    description: "1,000 Genesis Emblems qui éclosent en 10,000 NFTs Caterpi sur Ethereum",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0D0C2B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0D0C2B" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}