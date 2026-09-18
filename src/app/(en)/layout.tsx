import type { Metadata } from "next";
import { fontClassName } from "../fonts";
import { siteCopy } from "@/data/i18n";
import "../globals.css";

export const metadata: Metadata = {
  title: siteCopy.en.metadata.title,
  description: siteCopy.en.metadata.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", vi: "/vi" },
  },
};

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClassName}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
