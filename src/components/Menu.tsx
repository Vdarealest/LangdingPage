"use client";

import { useState } from "react";
import Image from "next/image";
import type { Locale, MenuCategoryId, SiteCopy } from "@/types";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

type Filter = MenuCategoryId | "all";

export default function Menu({
  copy,
  locale,
}: {
  copy: SiteCopy["menu"];
  locale: Locale;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const visibleItems =
    filter === "all"
      ? copy.items
      : copy.items.filter((item) => item.category === filter);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: copy.allLabel },
    ...copy.categories.map((category) => ({
      id: category.id as Filter,
      label: category.label,
    })),
  ];

  return (
    <section id="menu" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-base text-stone-600">{copy.description}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition",
                filter === item.id
                  ? "bg-amber-700 text-white"
                  : "border border-stone-300 text-stone-600 hover:bg-stone-50"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <article key={item.id} className="group flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-stone-200">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {item.popular && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-amber-800">
                    {copy.popularLabel}
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-stone-900">
                  {item.name}
                </h3>
                <span className="shrink-0 text-sm font-semibold text-amber-800">
                  {formatPrice(item.price, locale)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
