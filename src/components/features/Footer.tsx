import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#202834] text-gray-300 font-aeonik relative">
      {/* Arc with Logo */}
      <div className="absolute left-1/2 -top-8 transform -translate-x-1/2">
        <div className="relative">
          <div className="w-36 h-20 bg-[#fcfeff] rounded-b-full"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/img/Logo.svg"}
              alt="Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-4 lg:mt-1">
              INNOV8 DIGITAL
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-white">
              Solutions digitales sur mesure. Tout ce dont vous avez besoin, au
              même endroit, pour tout les budgets.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://www.facebook.com/innov8digitalfr"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://x.com/innov8digitalfr"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/innov8digitalfr/"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/innov8digital-fr/"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-4">Lien rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/expertises"
                  className="hover:text-white transition-colors"
                >
                  Expertise{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="hover:text-white transition-colors"
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="notre-histoire"
                  className="hover:text-white transition-colors"
                >
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/creation-site-web"
                  className="hover:text-white transition-colors"
                >
                  Développement Web
                </Link>
              </li>
              <li>
                <Link
                  href="/creation-site-cms"
                  className="hover:text-white transition-colors"
                >
                  Création de site E-commerce CMS{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/application-mobile"
                  className="hover:text-white transition-colors"
                >
                  Création d&apos;applications mobiles{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance"
                  className="hover:text-white transition-colors"
                >
                  Maintenance & support technique{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/seo"
                  className="hover:text-white transition-colors"
                >
                  Stratégie digitale SEO & marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-4">
              Contactez nous
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin size={18} />
                <span>Marseille</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Phone size={18} />
                <a
                  href="tel:+33626291676"
                  className="hover:text-blue-400 transition-colors"
                >
                  06.26.29.16.76
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Mail size={18} />
                <a
                  href="mailto:contact@innov8digital.fr"
                  className="hover:text-blue-400 transition-colors"
                >
                  contact@innov8digital.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#439BE6] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left text-white">
              © {currentYear} INNOV8 DIGITAL. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/cgv"
                className="text-sm hover:text-white transition-colors"
              >
                CGV
              </Link>
              <Link
                href="/mentions-legales"
                className="text-sm hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/cookies"
                className="text-sm hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
