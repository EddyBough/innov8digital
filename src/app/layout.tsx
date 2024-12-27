import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/features/Navigation";
import Footer from "../components/features/Footer";
import React from "react";
import localFont from "next/font/local";

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
  title: "Innov8digital",
  description: "Agence Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aeonik.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
