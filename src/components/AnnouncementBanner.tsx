export default function AnnouncementBanner() {
  return (
    <div className="bg-black text-white py-3 shadow-lg overflow-hidden">
      <div className="relative flex items-center whitespace-nowrap animate-marquee w-[300%] lg:w-[80%]">
        {[...Array(3)].map((_, index) => (
          <p key={index} className="mx-8 text-white">
            Jusqu&apos;à <span className="font-bold">-30%</span> sur toutes nos
            prestations pour le lancement ! Profitez-en jusqu&apos;au 28 Février
            2025 !
          </p>
        ))}
      </div>
    </div>
  );
}
