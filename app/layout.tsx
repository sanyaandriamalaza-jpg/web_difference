import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Créer un site web vraiment unique | Web Difference",
  description: "Design moderne, SEO solide, Suivi complet : on construit un site qui retient vos visiteurs et vous apporte des résultats.",
  keywords: ["création site web", "design moderne", "SEO", "développement web", "site internet"],
  openGraph: {
    title: "Créer un site web vraiment unique | Web Difference",
    description: "Design moderne, SEO solide, Suivi complet : on construit un site qui retient vos visiteurs et vous apporte des résultats.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
