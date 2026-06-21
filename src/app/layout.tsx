import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Nalla's Pooja Products | Trusted Manufacturer Since 2006",
  description:
    "Nalla's Pooja Products – Premium manufacturer of Agarbatti, Kumkum, Turmeric, Camphor, Cotton Wicks, Dhoop, Sambrani and all Pooja Essentials. Established in 2006, serving devotion with purity.",
  keywords:
    "Nalla's Pooja Products, Agarbatti manufacturer, Kumkum supplier, pooja products India, incense sticks, camphor, cotton wicks, dhoop, sambrani, spiritual products",
  openGraph: {
    title: "Nalla's Pooja Products | Crafting Devotion Since 2006",
    description:
      "Premium manufacturer of traditional Indian pooja and spiritual products. Trusted for quality and purity since 2006.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
