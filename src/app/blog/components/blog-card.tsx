"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

export function BlogCard({
  title,
  excerpt,
  image,
  date,
  category,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border border-gray-200">
          <div className="relative h-48 w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <time dateTime={date} className="text-sm text-gray-500">
              {date}
            </time>
            <h3 className="mt-2 text-xl font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-2 text-gray-600">{excerpt}</p>
          </div>
          <div className=" bg-blue-600 text-white px-3 py-1 inline-block rounded-full text-sm">
            {category}
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
