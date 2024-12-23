"use client";
import React from "react";
import Image from "next/image";
import BlurEffect from "@/public/img/MainBlurBlue.svg";
import { Button } from "@/src/components/ui/button";

export default function FirstSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
      <Image
        src={BlurEffect}
        alt=""
        width={800}
        height={200}
        priority
        className="absolute bg-[#fcfeff] left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 min-w-[200%] "
        quality={100}
      />

      <div className="relative z-20 bg-white/10 rounded-3xl p-8 max-w-2xl w-full text-center backdrop-blur-sm">
        <div className="space-y-6">
          <p className="text-sm text-white font-medium uppercase tracking-wider">
            Agence Web Innov8 Digital
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Solutions digitales
            <br />
            sur mesure
          </h1>

          <p className="text-sm md:text-base text-white font-medium max-w-xl mx-auto">
            Tout ce dont vous avez besoin, au même endroit, pour tout les
            budgets
          </p>

          <Button className="bg-black text-white px-6 py-6 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Découvrir nos services
          </Button>
        </div>
      </div>
    </div>
  );
}
