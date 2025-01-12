import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function FirstSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <Image
        src="/img/MainBlurBlue.svg"
        alt=""
        width={1100}
        height={150}
        priority
        className="absolute inset-0 h-full w-full object-cover"
        quality={100}
      />

      <div className="relative z-20 max-w-6xl mx-auto text-center px-4 pb-24 pt-14">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 mt-4">
          L&apos;agence digitale
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto mb-9 leading-relaxed">
          Site internet sur mesure - Applications mobiles - Intégration IA -
          Maintenance - <br className="hidden sm:block" />
          Refonte - Audit projet - SEO & Stratégie digitale
        </p>

        <Link href="/expertises">
          <Button className="bg-black hover:bg-black/90 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105">
            Découvrir nos services
          </Button>
        </Link>
      </div>
    </section>
  );
}
