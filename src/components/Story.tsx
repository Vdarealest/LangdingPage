import Image from "next/image";
import type { SiteCopy } from "@/types";

export default function Story({ copy }: { copy: SiteCopy["story"] }) {
  return (
    <section id="story" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-4xl border border-stone-200">
          <Image
            src={copy.image.src}
            alt={copy.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
            {copy.title}
          </h2>

          <div className="mt-6 space-y-5">
            {copy.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-stone-600"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <figure className="mt-8 border-l-2 border-amber-300 pl-5">
            <blockquote className="font-display text-lg italic text-stone-800">
              “{copy.quote}”
            </blockquote>
            <figcaption className="mt-2 text-sm text-stone-500">
              {copy.author}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
