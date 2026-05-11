import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], display: "swap" });

import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#89f336',
};

export const metadata: Metadata = {
  title: "NossaNeT Fortaleza | A Internet Certa Para Você",
  description: "A única empresa de Fortaleza que manda um especialista até a sua residência ou empresa para averiguar qual plano de internet se encaixa melhor a sua necessidade.",
  keywords: ["internet", "fibra óptica", "fortaleza", "nossanet", "banda larga", "internet rápida"],
  authors: [{ name: "NossaNet Fortaleza" }],
  alternates: {
    canonical: "https://nossanet.com.br",
  },
  openGraph: {
    title: "NossaNeT Fortaleza | A Internet Certa Para Você",
    description: "Conecte-se com a melhor internet 100% Fibra Óptica de Fortaleza.",
    url: "https://nossanet.com.br",
    siteName: "NossaNet Fortaleza",
    images: [
      {
        url: "/images/hero-premium.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { LazyMotion, domAnimation } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://orange-viper-482905.hostingersite.com" />
        <link rel="dns-prefetch" href="https://orange-viper-482905.hostingersite.com" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-nossa-gray`}>
        <LazyMotion features={domAnimation}>
          <Header />
          <main className="flex-1 bg-white">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </LazyMotion>
      </body>
    </html>
  );
}
