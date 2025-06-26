"use client";

import React from "react";
import Image from "next/image";

export default function LegalNotice() {
  return (
    <section className="relative w-full px-6 py-12 lg:mt-5 mt-8 lg:px-20 lg:py-24">
      {/* Effet de blur */}
      <Image
        src={"/img/blur-blue.png"}
        alt="blur-blue"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto lg:mt-[-5rem] mt-9  md:mt-0 h-[53rem] w-[32rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-6xl my-3 md:my-5 text-center mb-8 lg:mb-20">
          Mentions légales
        </h1>

        {/* Card contenant les mentions légales */}
        <div className="backdrop-blur-lg bg-white/70 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
          {/* Identification */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              1. Identification de l&apos;éditeur
            </h2>
            <p>
              <span className="font-semibold">Raison sociale :</span> INNOV8
              Digital <br />
              <span className="font-semibold">Statut juridique :</span>{" "}
              Micro-entreprise <br />
              <span className="font-semibold">Adresse :</span> Avenue du Vallon
              d&apos;Ol 13015 Marseille <br />
              <span className="font-semibold">Email :</span>{" "}
              contact@innov8digital.fr <br />
              <span className="font-semibold">
                Téléphone :
              </span> 06.26.29.16.76 <br />
              <span className="font-semibold">SIRET :</span> 93836658000018{" "}
              <br />
            </p>
          </section>

          {/* Hébergement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Hébergement du site</h2>
            <p>
              <span className="font-semibold">Hébergeur :</span> Hostinger
              <br />
              <span className="font-semibold">Adresse :</span> Hostinger
              International Ltd. 61 Lordou Vironos Street, 6023 Larnaca, Chypre
              <br />
              <span className="font-semibold">Site web :</span>{" "}
              https://www.hostinger.com/contacts
              <br />
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              Tout le contenu présent sur le site (textes, images, vidéos,
              logos, etc.) est protégé par les lois relatives à la propriété
              intellectuelle. Toute reproduction, même partielle, est
              strictement interdite sans autorisation préalable.
            </p>
          </section>

          {/* Modalités de paiement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              4. Modalités de paiement
            </h2>
            <p>
              Innov8 Digital propose une option de paiement en plusieurs fois
              par chèque ou virement bancaire. Ces modalités sont définies dans
              les conditions générales de vente
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Responsabilité</h2>
            <p>
              Innov8 Digital ne saurait être tenue responsable des dommages
              directs ou indirects causés par l&apos;utilisation du site ou de
              ses services.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
