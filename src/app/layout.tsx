import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/features/Navigation";
import Footer from "../components/features/Footer";
import React from "react";
import localFont from "next/font/local";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aeonik = localFont({
  src: [
    {
      path: "./fonts/Aeoniktrial-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Aeoniktrial-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Aeoniktrial-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeoniktrial",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.innov8digital.fr"),
  title: "Innov8Digital | Agence Web Créative à Marseille",
  description:
    "Innov8Digital est une agence web spécialisée dans la création de sites vitrines, e-commerce, et d'applications mobiles sur mesure. Basée à Marseille, nous offrons des solutions digitales performantes, adaptées à vos besoins.",
  keywords: [
    "agence web Marseille",
    "création site web Marseille",
    "développement applications mobiles",
    "stratégie digitale",
    "SEO",
    "site e-commerce",
    "maintenance web",
    "développement sur mesure",
    "agence digitale Marseille",
  ],
  openGraph: {
    title: "Innov8Digital | Agence Web Créative Digitale",
    description:
      "Création de sites web, applications mobiles et stratégies digitales adaptées à vos besoins. Boostez votre présence en ligne avec Innov8Digital.",
    url: "https://www.innov8digital.fr",
    type: "website",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Innov8Digital - Agence Web Digitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innov8Digital | Agence Web Digitale",
    description:
      "Agence web à Marseille spécialisée dans la création de sites web et la stratégie digitale. Solutions sur mesure pour votre entreprise.",
    site: "@innov8digitalfr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NGT5J9N3');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aeonik.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGT5J9N3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navigation />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
