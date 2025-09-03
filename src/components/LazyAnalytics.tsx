"use client";

import dynamic from "next/dynamic";

const AnalyticsShowcase = dynamic(
  () =>
    import("../app/sections-home/Analytics-showcase").then((mod) => ({
      default: mod.AnalyticsShowcase,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[800px] w-full bg-gray-50 animate-pulse rounded-lg" />
    ),
  }
);

export default function LazyAnalytics() {
  return <AnalyticsShowcase />;
}
