import type { Metadata } from "next";
import { fontClassName } from "../fonts";
import { siteCopy } from "@/data/i18n";
import "../globals.css";

export const metadata: Metadata = {
  title: siteCopy.vi.metadata.title,
  description: siteCopy.vi.metadata.description,
  alternates: {
    canonical: "/vi",
    languages: { en: "/", vi: "/vi" },
  },
};

export default function VietnameseRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={fontClassName}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
