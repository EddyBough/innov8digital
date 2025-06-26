"use client";

import React from "react";
import Image from "next/image";

export default function TermsAndConditions() {
  return (
    <section className="relative w-full px-6 py-12 lg:px-20 lg:py-24 lg:mt-5 mt-8">
      {/* Effet de blur */}
      <Image
        src={"/img/blur-purple.png"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-6xl my-3 md:my-5 text-center mb-8 lg:mb-20">
          Conditions Générales de Vente
        </h1>

        {/* Card contenant les CGV */}
        <div className="backdrop-blur-lg bg-white/70 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
          {/* Préambule */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Préambule</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les
              relations contractuelles entre Innov8 Digital, micro-entreprise
              immatriculée sous le numéro SIRET 93836658000018, et ses clients
              dans le cadre de prestations de services numériques.
            </p>
          </section>

          {/* Commandes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Commandes</h2>
            <p>
              Toute commande implique l&apos;acceptation des présentes CGV.
              Celle-ci devient ferme et définitive dès la signature du devis
              validé par le client.
            </p>
          </section>

          {/* Modalités de paiement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              3. Modalités de paiement
            </h2>
            <p>
              Le paiement peut être effectué par virement bancaire ou par
              chèque. Innov8 Digital propose également une option de paiement en
              plusieurs fois, sous réserve d&apos;accord préalable. Les détails
              de paiement sont spécifiés dans le devis accepté.
            </p>
          </section>

          {/* Délais et livraisons */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Délais et livraisons</h2>
            <p>
              Les délais de livraison sont mentionnés dans le devis et sont
              donnés à titre indicatif. Innov8 Digital ne saurait être tenu
              responsable en cas de retard dû à des circonstances imprévisibles.
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              5. Propriété intellectuelle
            </h2>
            <p>
              Les créations réalisées restent la propriété d&apos;Innov8 Digital
              jusqu&apos;au paiement intégral du montant dû. Une fois ce
              paiement effectué, les droits d&apos;utilisation sont transférés
              au client.
            </p>
          </section>

          {/* Résiliation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Résiliation</h2>
            <p>
              En cas de résiliation de la part du client, les sommes déjà
              versées restent acquises à Innov8 Digital. En cas de force majeure
              justifiée, une solution amiable pourra être envisagée.
            </p>
          </section>

          {/* Responsabilités */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Responsabilités</h2>
            <p>
              Innov8 Digital s&apos;engage à fournir des prestations conformes
              aux standards du secteur. Cependant, la responsabilité de
              l&apos;entreprise ne saurait être engagée en cas d&apos;usage
              inapproprié ou de modification des livrables par le client.
            </p>
          </section>

          {/* Litiges */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Litiges</h2>
            <p>
              En cas de litige, la priorité sera donnée à une résolution
              amiable. À défaut, le tribunal compétent.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
