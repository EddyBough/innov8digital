"use client";

import React from "react";
import Image from "next/image";

export default function CookiesPolicy() {
  return (
    <section className="relative w-full px-6 py-12 lg:px-20 lg:py-24 lg:mt-5 mt-8">
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
        <h1 className="text-3xl lg:text-6xl font-aeonik my-3 md:my-5 text-center mb-8 lg:mb-20">
          Politique de Cookies
        </h1>

        <div className="backdrop-blur-lg bg-white/70 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Cette politique de cookies explique comment Innov8 Digital utilise
              les cookies et autres technologies similaires pour collecter des
              informations lorsque vous visitez notre site. En utilisant notre
              site, vous acceptez l&apos;utilisation des cookies conformément à
              cette politique.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              2. Qu&apos;est-ce qu&apos;un cookie ?
            </h2>
            <p>
              Les cookies sont de petits fichiers texte stockés sur votre
              appareil lorsque vous visitez un site web. Ils permettent au site
              de se souvenir de vos actions et préférences (comme la langue ou
              la connexion) pour une expérience utilisateur améliorée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              3. Types de cookies que nous utilisons
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium text-blue-600">
                  Cookies strictement nécessaires :
                </span>{" "}
                Ces cookies sont essentiels pour le fonctionnement du site, par
                exemple pour mémoriser vos choix de consentement.
              </li>
              <li>
                <span className="font-medium text-blue-600">
                  Cookies de performance :
                </span>{" "}
                Nous utilisons des outils comme Google Analytics pour analyser
                le trafic et améliorer nos services.
              </li>
              <li>
                <span className="font-medium text-blue-600">
                  Cookies de ciblage :
                </span>{" "}
                Ces cookies collectent des informations pour vous afficher des
                publicités pertinentes.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              4. Utilisation de Google Analytics
            </h2>
            <p>
              Google Analytics est utilisé pour collecter des données sur la
              manière dont les utilisateurs interagissent avec notre site,
              telles que les pages visitées, le temps passé sur le site et les
              actions effectuées. Ces informations nous aident à améliorer la
              performance et le contenu de notre site.
            </p>
            <p>
              Les données collectées par Google Analytics incluent, mais ne se
              limitent pas à, votre adresse IP et votre comportement de
              navigation. Pour plus d&apos;informations, consultez la{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                politique de confidentialité de Google
              </a>
              .
            </p>
          </section>

          {/* Gestion des cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Gestion des cookies</h2>
            <p>
              Vous pouvez configurer votre navigateur pour accepter, bloquer ou
              supprimer les cookies. Notez que désactiver certains cookies peut
              affecter la fonctionnalité de notre site.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium text-blue-600">
                  Google Chrome :
                </span>{" "}
                Paramètres &gt; Confidentialité et sécurité &gt; Cookies.
              </li>
              <li>
                <span className="font-medium text-blue-600">
                  Mozilla Firefox :
                </span>{" "}
                Options &gt; Vie privée &gt; Cookies.
              </li>
              <li>
                <span className="font-medium text-blue-600">Safari :</span>{" "}
                Préférences &gt; Confidentialité &gt; Gérer les cookies.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Modifications de cette politique
            </h2>
            <p>
              Nous pouvons mettre à jour cette politique de cookies pour
              refléter des changements dans nos pratiques ou des obligations
              légales. La date de dernière mise à jour sera indiquée en bas de
              cette page.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
