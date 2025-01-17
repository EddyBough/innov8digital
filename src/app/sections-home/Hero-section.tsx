"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FloatingElements } from "./Floating-elements";
import { PhoneShowcase } from "./Phone-showcase";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-center px-4 overflow-hidden py-20 lg:py-20 md:py-24">
      <div className="absolute inset-0 bg-[#fcfeff]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto pt-20 lg:flex-col m-auto lg:items-center">
        <div className="lg:flex flex-col items-center">
          <motion.h2
            className="text-xl lg:text-2xl bg-title-gradient inline-block text-transparent bg-clip-text pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="sr-only">
              Innov8 Digital - Agence Web à Marseille
            </span>
            AGENCE WEB INNOV8 DIGITAL
          </motion.h2>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Nous donnons vie <br /> à vos{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                rêves digitaux
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Grâce à notre expertise et notre accompagnement, nous transformons
              vos idées en projets numériques sur mesure, pour un impact
              durable, une croissance accélérée et mesurable.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative w-full sm:w-96">
              <Link href="/expertises">
                <Button className=" text-white whitespace-nowrap bg-black mt-6">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-16 lg:mt-0 lg:flex-1 lg:ml-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto">
            <FloatingElements />

            <motion.div
              className="relative z-10 w-full h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
            >
              <PhoneShowcase />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
