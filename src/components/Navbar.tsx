"use client";

import { useState } from "react";
import Link from "next/link";
import { brand, navLinks } from "@/data/mock";
import { MenuIcon, CloseIcon } from "@/components/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-700 font-display text-lg text-white">
            H
          </span>
          <span className="font-display text-xl font-semibold text-stone-900">
            {brand.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition hover:text-amber-800"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#visit"
            className="rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Đặt bàn
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="text-stone-700 lg:hidden"
          aria-label="Mở menu điều hướng"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-stone-200 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-stone-600 hover:text-amber-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="rounded-full bg-amber-700 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Đặt bàn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
