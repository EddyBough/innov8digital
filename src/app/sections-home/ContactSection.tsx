import React from "react";
import Image from "next/image";

export default function ContactSection() {
  const email = "contact@innov8digital.fr";
  const phone = "06 26 29 16 76";

  return (
    <section className="w-screen font-aeonik px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-16 lg:space-x-60 justify-center items-center gap-8 md:gap-0">
        <div className="flex flex-col items-center mb-16 md:mb-36">
          <Image
            src={"/img/phone.svg"}
            alt="Icône téléphone"
            width={200}
            height={200}
            priority
            className="my-8 md:my-20 w-36 md:w-48 lg:w-52"
            quality={100}
          />
          <div className="flex flex-col items-center">
            <p className="bg-title-gradient inline-block text-transparent bg-clip-text font-bold text-2xl md:text-3xl mb-2">
              Contact
            </p>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="font-bold text-lg md:text-xl hover:text-blue-600 transition-colors duration-300"
              aria-label="Appeler le numéro de téléphone"
            >
              {phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center mb-16 md:mb-36">
          <Image
            src={"/img/email.svg"}
            alt="Icône email"
            width={200}
            height={200}
            priority
            className="my-8 md:my-20 w-36 md:w-48 lg:w-52"
            quality={100}
          />
          <div className="flex flex-col items-center">
            <p className="bg-title-gradient inline-block text-transparent bg-clip-text font-bold text-2xl md:text-3xl mb-2">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="font-bold text-lg md:text-xl hover:text-blue-600 transition-colors duration-300 break-all md:break-normal"
              aria-label="Envoyer un email"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
