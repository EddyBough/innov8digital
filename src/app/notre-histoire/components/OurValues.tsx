import { Award, BadgeEuro, Handshake, Lightbulb } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <BadgeEuro className="w-8 h-8 text-blue-600" />,
      title: "Accessibilité",
      description:
        "Les meilleures solutions digitales, accessibles à tous, sans compromis sur la performance.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description:
        "Des solutions créatives et sur mesure, adaptées à tous les budgets.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: "Engagement",
      description:
        "Une collaboration basée sur l'écoute, la transparence et la durée.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Simplicité",
      description: "Rendre le digital simple, clair et accessible à tous.",
    },
  ];

  return (
    <section className="w-screen relative overflow-hidden mt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mb-16">
          <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            NOS VALEURS
          </h2>
          <h2 className="lg:text-6xl text-4xl font-bold text-center lg:mb-20 mb-10 text-black">
            Parce que c&apos;est notre nindo
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center md:items-start">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 max-w-[250px]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
