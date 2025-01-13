"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Animations variants
const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const submenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const toggleScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > prevOffset) {
        setScrollDirection("down");
      } else if (scrollY < prevOffset) {
        setScrollDirection("up");
      }
      setPrevOffset(scrollY);
    };

    window.addEventListener("scroll", toggleScrollDirection);

    return () => {
      window.removeEventListener("scroll", toggleScrollDirection);
    };
  }, [prevOffset]);

  return scrollDirection;
};

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`fixed font-aeonik w-full z-50 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Version Desktop */}
      <div className="hidden lg:block container mx-auto mt-6">
        <DesktopNavbar />
      </div>

      {/* Version Mobile */}
      <div className="lg:hidden w-full font-aeonik">
        <MobileNavbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
    </div>
  );
}

function DesktopNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <div
        className={cn(
          "flex w-full items-center justify-between max-w-[1400px] mx-auto py-1",
          className
        )}
      >
        {/* Section gauche */}
        <div className="flex items-center gap-16 ml-32">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Expertise"
            isLeftSide
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Expertise"
                href="/expertises"
                src="/img/Test1.png"
                description="Solutions web sur mesure"
              />
              <ProductItem
                title="Accompagnement"
                href="/accompagnement"
                src="/img/Test1.png"
                description="Accompagnement sur mesure"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/creation-site-web">
                Site Web sur mesure
              </HoveredLink>
              <HoveredLink href="/creation-site-cms">
                Site E-commerce CMS
              </HoveredLink>
              <HoveredLink href="/application-mobile">
                Application mobile
              </HoveredLink>
              <HoveredLink href="/maintenance">
                Maintenance et support
              </HoveredLink>
              <HoveredLink href="/seo">
                Stratégie digitale SEO & Marketing
              </HoveredLink>
            </div>
          </MenuItem>
        </div>

        {/* Logo central */}
        <Link
          className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2"
          href="/"
        >
          <div>
            <Image
              src={"/img/Logo.svg"}
              alt="Logo"
              width={80}
              height={50}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Section droite */}
        <div className="flex items-center gap-16">
          <MenuItem setActive={setActive} active={active} item="Réalisation">
            <div className="text-sm grid grid-cols-2 gap-8 p-2">
              <ProductItem
                title="GlycoWatch"
                href="/realisations"
                src="/img/newcapturedashboard.png"
                description="Web-app qui vous permet de suivre votre diabète quotidiennement et gratuitement"
              />
              <ProductItem
                title="Free Driving"
                href="/realisations"
                src="/img/freedrivingscreen.svg"
                description="Web-app pour une auto-école qui vous permet de prendre des rendez-vous et suivre vos progrès"
              />
            </div>
          </MenuItem>

          <Link
            href="/notre-histoire"
            className="text-black hover:opacity-[0.9] dark:text-white cursor-pointer"
          >
            Notre histoire
          </Link>

          <Button className="bg-black hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-all">
            Parlons de votre projet
          </Button>
        </div>
      </div>
    </Menu>
  );
}

function MobileNavbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Composant réutilisable pour les sous-menus
  const SubMenuItem = ({
    href,
    children,
    delay,
  }: {
    href: string;
    children: React.ReactNode;
    delay: number;
  }) => (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <Link
        href={href}
        className="block py-1 hover:text-gray-600 transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  );

  return (
    <div className="relative shadow-md saturate-100 backdrop-blur-[10px]">
      {/* Header Mobile */}
      <div className="flex items-center justify-between px-4 py-2">
        <Image
          src={"/img/Logo.svg"}
          alt="Logo"
          width={80}
          height={40}
          className="object-contain"
        />
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MenuIcon className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 space-y-4"
          >
            {/* Expertise Section */}
            <div>
              <motion.button
                className="flex items-center justify-between w-full py-2"
                onClick={() =>
                  setActiveSubmenu(
                    activeSubmenu === "expertise" ? null : "expertise"
                  )
                }
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">Expertise</span>
                <motion.span
                  animate={{ rotate: activeSubmenu === "expertise" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {activeSubmenu === "expertise" && (
                  <motion.div
                    variants={submenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="pl-4 py-2 space-y-2 overflow-hidden"
                  >
                    <SubMenuItem href="/expertises" delay={0.1}>
                      Expertise
                    </SubMenuItem>
                    <SubMenuItem href="/accompagnement" delay={0.2}>
                      Accompagnement
                    </SubMenuItem>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Section */}
            <div>
              <motion.button
                className="flex items-center justify-between w-full py-2"
                onClick={() =>
                  setActiveSubmenu(
                    activeSubmenu === "services" ? null : "services"
                  )
                }
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">Services</span>
                <motion.span
                  animate={{ rotate: activeSubmenu === "services" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {activeSubmenu === "services" && (
                  <motion.div
                    variants={submenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="pl-4 py-2 space-y-2 overflow-hidden"
                    onClick={() => setIsOpen(false)}
                  >
                    <SubMenuItem href="/creation-site-web" delay={0.1}>
                      Site Web sur mesure
                    </SubMenuItem>
                    <SubMenuItem href="/creation-site-cms" delay={0.2}>
                      Site E-commerce CMS
                    </SubMenuItem>
                    <SubMenuItem href="/application-mobile" delay={0.3}>
                      Application mobile
                    </SubMenuItem>
                    <SubMenuItem href="/maintenance" delay={0.4}>
                      Maintenance et support
                    </SubMenuItem>
                    <SubMenuItem href="/seo" delay={0.4}>
                      Stratégie digitale SEO & Marketing
                    </SubMenuItem>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Réalisation Section */}
            <div>
              <motion.button
                className="flex items-center justify-between w-full py-2"
                onClick={() =>
                  setActiveSubmenu(
                    activeSubmenu === "realisation" ? null : "realisation"
                  )
                }
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">Réalisation</span>
                <motion.span
                  animate={{
                    rotate: activeSubmenu === "realisation" ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {activeSubmenu === "realisation" && (
                  <motion.div
                    variants={submenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="pl-4 py-2 space-y-2 overflow-hidden"
                  >
                    <SubMenuItem href="/realisations" delay={0.1}>
                      GlycoWatch
                    </SubMenuItem>
                    <SubMenuItem href="/realisations" delay={0.2}>
                      Free Driving
                    </SubMenuItem>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* A propos Section */}
            <Link
              href="/notre-histoire"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              <div>
                <motion.button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => {
                    setActiveSubmenu((prev) =>
                      prev === "À propos" ? null : "À propos"
                    );
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium">Notre histoire</span>
                </motion.button>
                <AnimatePresence />
              </div>
            </Link>

            {/* Call to action */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                className="w-full bg-black hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Parlons de votre projet
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
