import { CheckCircle, Clock, GraduationCap, UserCheck } from "lucide-react";

export default function ValuesSectionAccompagnement() {
  const values = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Expertise 360°",
      description:
        "Une équipe expérimentée en stratégie digitale, développement et marketing.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: "Accompagnement personnalisé",
      description: "Nous adaptons notre approche à vos besoins spécifiques.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Résultats concrets",
      description:
        "Un MVP fonctionnel, prêt à séduire vos clients ou investisseurs.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Gain de temps",
      description:
        "Laissez-nous gérer la technique pendant que vous vous concentrez sur votre vision.",
    },
  ];

  return (
    <section className="overflow-hidden mt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mb-16">
          <h2 className="text-xl sm:text-4xl bg-title-gradient inline-block text-transparent bg-clip-text">
            Les avantages de notre accompagnement
          </h2>
          <h2 className="lg:text-6xl text-4xl font-bold text-center lg:mb-20 mb-10 text-black">
            Pourquoi nos clients nous font confiance
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
