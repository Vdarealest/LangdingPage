"use client";

import { useState } from "react";
import Image from "next/image";
import { menuCategories, menuItems } from "@/data/mock";
import type { MenuCategoryId } from "@/types";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

type Filter = MenuCategoryId | "tat-ca";

export default function Menu() {
  const [filter, setFilter] = useState<Filter>("tat-ca");

  const visibleItems =
    filter === "tat-ca"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <section id="menu" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Thực đơn
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
            Món quen của quán
          </h2>
          <p className="mt-4 text-base text-stone-600">
            Giá đã bao gồm thuế. Mọi món đều có thể điều chỉnh độ ngọt và lượng
            đá theo ý bạn.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setFilter("tat-ca")}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition",
              filter === "tat-ca"
                ? "bg-amber-700 text-white"
                : "border border-stone-300 text-stone-600 hover:bg-stone-50"
            )}
          >
            Tất cả
          </button>
          {menuCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setFilter(category.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition",
                filter === category.id
                  ? "bg-amber-700 text-white"
                  : "border border-stone-300 text-stone-600 hover:bg-stone-50"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <article key={item.id} className="group flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-stone-200">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {item.popular && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-amber-800">
                    Bán chạy
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-stone-900">
                  {item.name}
                </h3>
                <span className="shrink-0 text-sm font-semibold text-amber-800">
                  {formatPrice(item.price)}
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
