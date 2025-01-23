export default function AnnouncementBanner() {
  return (
    <div className="bg-black text-white py-3 shadow-lg overflow-hidden">
      <div className="relative whitespace-nowrap flex lg:gap-x-[30rem] md:gap-x-96 items-center animate-marquee">
        {/* Ajustement de l'espacement pour bureau */}
        <p className="mx-8 text-white">
          Jusqu&apos;à <span className="font-bold text-white">-30%</span> sur
          toutes nos prestations pour le lancement ! Profitez-en jusqu&apos;au
          28 Février 2025 !
        </p>
        <p className="mx-8 text-white">
          Jusqu&apos;à <span className="font-bold text-white">-30%</span> sur
          toutes nos prestations pour le lancement ! Profitez-en jusqu&apos;au
          28 Février 2025 !
        </p>
      </div>
    </div>
  );
}
