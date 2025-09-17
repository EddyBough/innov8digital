import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProcessHeaderProps {
  className?: string;
}

export default function ProcessHeader({
  className = "lg:mt-16 lg:ml-12",
}: ProcessHeaderProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
        Notre processus en 5 étapes
      </p>
      <h2 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
        Développez votre app
        <br />
        en 5 étapes clés
      </h2>
      <p className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed mb-8">
        Vous ne serez jamais seul. On vous accompagne à chaque étape pour créer
        la solution digitale qui vous permettra de scaler.
      </p>

      {/* CTA Button - Desktop only */}
      <div className="hidden xl:block">
        <Link
          href="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-black hover:bg-gray-600 text-white px-8 py-6 rounded-full transition-all text-lg">
            Parlons de votre projet
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
