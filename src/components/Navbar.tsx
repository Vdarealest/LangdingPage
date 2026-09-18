"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "@/components/icons";
import type { Locale, SiteCopy } from "@/types";


export default function Navbar({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const otherLocale = locale === "en" ? "vi" : "en";
  const languageHref = locale === "en" ? "/vi" : "/";

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/85 backdrop-blur">
      <nav aria-label={copy.navbar.navigationLabel} className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4">
        <Link href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-700 font-display text-lg text-white">H</span>
          <span className="font-display text-xl font-semibold text-stone-900">{copy.brand.name}</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {copy.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-stone-600 transition hover:text-amber-800">{link.label}</a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div role="group" aria-label={copy.navbar.languageSwitcherLabel} className="flex items-center rounded-full border border-stone-200 p-1 text-xs font-semibold">
            <span aria-current="page" className="rounded-full bg-stone-900 px-2.5 py-1 text-white">{locale.toUpperCase()}</span>
            <Link href={languageHref} aria-label={otherLocale === "en" ? copy.navbar.switchToEnglishLabel : copy.navbar.switchToVietnameseLabel} className="rounded-full px-2.5 py-1 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900">{otherLocale.toUpperCase()}</Link>
          </div>
          <a href="#visit" className="rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800">{copy.navbar.reserveLabel}</a>
        </div>

        <button type="button" onClick={() => setOpen((prev) => !prev)} className="text-stone-700 lg:hidden" aria-label={open ? copy.navbar.closeMenuLabel : copy.navbar.openMenuLabel} aria-expanded={open}>
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-stone-200 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {copy.navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-stone-600 hover:text-amber-800">{link.label}</a>
            ))}
            <div role="group" aria-label={copy.navbar.languageSwitcherLabel} className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-stone-500">{copy.navbar.languageSwitcherLabel}:</span>
              <span aria-current="page" className="rounded-full bg-stone-900 px-2.5 py-1 text-white">{locale.toUpperCase()}</span>
              <Link href={languageHref} onClick={() => setOpen(false)} aria-label={otherLocale === "en" ? copy.navbar.switchToEnglishLabel : copy.navbar.switchToVietnameseLabel} className="rounded-full border border-stone-200 px-2.5 py-1 text-stone-500 hover:bg-stone-50">{otherLocale.toUpperCase()}</Link>
            </div>
            <a href="#visit" onClick={() => setOpen(false)} className="rounded-full bg-amber-700 px-5 py-2.5 text-center text-sm font-semibold text-white">{copy.navbar.reserveLabel}</a>
          </div>
        </div>
      )}
    </header>
  );
}
