"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingElements = [
  {
    id: 1,
    name: "ola",
    top: "10%",
    left: "-10%",
    delay: 0,
    image: "/img/store-android.png",
    zIndex: 11,
  },
  {
    id: 2,
    name: "drops",
    top: "20%",
    right: "-10%",
    delay: 0.2,
    image: "/img/app-store.png",
    zIndex: 12,
  },
  {
    id: 3,
    name: "play",
    bottom: "25%",
    left: "-8%",
    delay: 0.4,
    image: "/img/reacticon.svg",
    zIndex: 13,
  },
  {
    id: 4,
    name: "like",
    bottom: "15%",
    right: "-10%",
    delay: 0.6,
    image: "/img/shopify.png",
    zIndex: 14,
  },
  {
    id: 5,
    name: "ioona",
    top: "20%",
    right: "25%",
    delay: 0.8,
    image: "/img/nextjs-icon.png",
    zIndex: 15,
  },
  {
    id: 6,
    name: "avocado",
    bottom: "5%",
    left: "15%",
    delay: 1,
    image: "/img/wordpress-icon.png",
    zIndex: 16,
  },
];

export function FloatingElements() {
  return (
    <>
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            zIndex: element.zIndex,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: element.delay },
          }}
          whileInView={{
            y: [0, -15, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src={element.image || "/placeholder.svg"}
            alt={element.name}
            width={50}
            height={50}
            className="object-cover"
          />
        </motion.div>
      ))}
    </>
  );
}
