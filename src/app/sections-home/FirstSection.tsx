import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function FirstSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-white mt-9 lg:mt-11 md:mt-0 py-16 md:py-0 lg:py-0">
      <Image
        src="/img/MainBlurBlue.svg"
        alt=""
        width={1100}
        height={150}
        priority
        className="absolute h-[38rem] sm:h-[45rem] md:h-[56rem] lg:h-[68rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen max-w-none lg:max-w-screen-2xl object-cover"
        quality={100}
      />

      {/* Conteneur principal avec padding ajusté */}
      <div className="relative z-20 max-w-6xl mx-auto text-center px-4 pb-24 pt-12">
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 mt-3 lg:mt-0 md:mt-0">
          L&apos;agence digitale
        </h1>

        {/* Services */}
        <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto mb-9 leading-relaxed mt-9 lg:mt-0 md:mt-0">
          Site internet sur mesure - Applications mobiles - Intégration IA -
          Maintenance -
          <br className="hidden sm:block" />
          &ensp;Refonte - Audit projet - SEO & Stratégie digitale
        </p>

        {/* CTA */}
        <Link href="/expertises">
          <Button className="bg-black hover:bg-black/90 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105">
            Découvrir nos services
          </Button>
        </Link>
      </div>
    </section>
  );
}
